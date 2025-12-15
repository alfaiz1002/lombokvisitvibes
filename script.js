// ==================== GLOBAL VARIABLES ====================
let map, routingControl, userLocation, userMarker;
let trafficCircles = [];
let currentTransportMode = 'car';
let statsUpdateInterval;
let currentMapType = 'street'; // 'street', 'satellite'
let satelliteLayer, streetLayer;

// ==================== HELPER FUNCTIONS ====================
function getRegionName(region) {
    const savedLang = localStorage.getItem('lombok-language') || 'id';
    const trans = translations[savedLang];
    
    const regionNames = {
        'lombok-tengah': trans.region_central || 'Central Lombok',
        'lombok-barat': trans.region_west || 'West Lombok', 
        'lombok-timur': trans.region_east || 'East Lombok',
        'lombok-utara': trans.region_north || 'North Lombok',
        'kota-mataram': trans.region_mataram || 'Mataram City'
    };
    return regionNames[region] || region;
}

function showNotification(message, type = 'success') {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 24px;
        background: ${type === 'error' ? 'var(--vibrant-pink)' : 'var(--neon-blue)'};
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        z-index: 10000;
        animation: slideInRight 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        font-weight: 600;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255,255,255,0.1);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s cubic-bezier(0.4, 0, 0.2, 1) reverse';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return '★'.repeat(fullStars) + (hasHalfStar ? '½' : '') + '☆'.repeat(emptyStars);
}

function getDefaultImageByCategory(category) {
    const defaultImages = {
        'beach': 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'mountain': 'https://images.unsplash.com/photo-1464822759843-44bcb45994c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'waterfall': 'https://images.unsplash.com/photo-1512034400317-de97c5b9b72a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'nature': 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'culture': 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'culinary': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    };
    return defaultImages[category] || 'https://images.unsplash.com/photo-1559661175-2db6a6d82f20?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80';
}

function initializeScrollAnimations() {
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    function checkScroll() {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    }
    
    window.addEventListener('scroll', checkScroll);
    window.addEventListener('load', checkScroll);
    checkScroll();
}

// ==================== PARTICLE BACKGROUND ====================
function initializeParticles() {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 6 + 2;
        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            background: var(--neon-blue);
            opacity: ${Math.random() * 0.4 + 0.1};
            animation-delay: ${Math.random() * 5}s;
            animation-duration: ${Math.random() * 10 + 10}s;
        `;
        particlesContainer.appendChild(particle);
    }
}

// ==================== THEME SYSTEM ====================
function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const savedTheme = localStorage.getItem('lombok-theme') || 'dark';
    body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('lombok-theme', newTheme);
        updateThemeIcon(newTheme);
    });
    
    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// ==================== LANGUAGE SYSTEM ====================
function initializeLanguage() {
    console.log('🌐 Initializing language system...');
    const languageSelect = document.getElementById('languageSelect');
    
    if (!languageSelect) {
        console.error('❌ Language select element not found!');
        return;
    }
    
    // Check if translations exist
    if (typeof translations === 'undefined') {
        console.error('❌ Translations object not found!');
        return;
    }
    
    const savedLanguage = localStorage.getItem('lombok-language') || 'id';
    languageSelect.value = savedLanguage;
    updateLanguage(savedLanguage);
    
    languageSelect.addEventListener('change', function() {
        const selectedLanguage = this.value;
        console.log(`🌐 Language changed to: ${selectedLanguage}`);
        localStorage.setItem('lombok-language', selectedLanguage);
        updateLanguage(selectedLanguage);
    });
    
    console.log(`🌐 Language initialized: ${savedLanguage}`);
}

function updateLanguage(language) {
    console.log(`🌐 Updating UI to language: ${language}`);
    
    // Default ke Indonesian jika bahasa tidak ditemukan
    if (!translations || !translations[language]) {
        console.warn(`⚠️ Language "${language}" not found or translations not loaded, defaulting to Indonesian`);
        language = 'id';
    }
    
    const trans = translations[language];
    
    if (!trans) {
        console.error('❌ No translations available!');
        return;
    }
    
    // 1. Update semua elemen dengan data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (trans[key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = trans[key];
            } else if (element.tagName === 'SELECT') {
                // Untuk select, update placeholder option pertama
                const firstOption = element.querySelector('option[value=""]');
                if (firstOption) {
                    firstOption.textContent = trans[key];
                }
            } else {
                element.textContent = trans[key];
            }
        }
    });
    
    // 2. Update semua text yang TIDAK punya data-translate
    updateAllDynamicContent(language);
    
    // 3. Update price text di destination cards
    updatePriceText(language);
    
    // 4. Update destination cards
    updateDestinationCards(language);
    
    // 5. Update statistics cards
    updateStatisticsCards(language);
}

function updateAllDynamicContent(language) {
    const trans = translations[language];
    if (!trans) return;
    
    // 1. UPDATE TOMBOL-TOMBOL UTAMA
    updateButtons(language);
    
    // 2. UPDATE FILTER DROPDOWN
    updateFilters(language);
    
    // 3. UPDATE STATISTICS LABELS
    updateStatisticsLabels(language);
    
    // 4. UPDATE LEGENDA TRAFFIC
    updateLegends(language);
    
    // 5. UPDATE KONTROL MAP
    updateMapControls(language);
    
    // 6. UPDATE KATEGORI
    updateCategories(language);
    
    // 7. UPDATE JUDUL DAN SUBTITLE
    updateTitlesAndSubtitles(language);
    
    // 8. UPDATE SECTION TITLES
    updateSectionTitles(language);
}

function updateButtons(language) {
    const trans = translations[language];
    if (!trans) return;
    
    // Refresh button
    const refreshBtn = document.getElementById('refresh-stats');
    if (refreshBtn) {
        const refreshSpan = refreshBtn.querySelector('span');
        if (refreshSpan && !refreshSpan.hasAttribute('data-translate')) {
            refreshSpan.textContent = trans.btn_refresh || 'Refresh Data';
        }
    }
    
    // Get directions button
    const directionsBtn = document.getElementById('calculate-route');
    if (directionsBtn) {
        const directionsSpan = directionsBtn.querySelector('span');
        if (directionsSpan && !directionsSpan.hasAttribute('data-translate')) {
            directionsSpan.textContent = trans.btn_get_directions || 'Get Directions';
        }
    }
    
    // Clear button
    const clearBtn = document.getElementById('clear-route');
    if (clearBtn) {
        const clearSpan = clearBtn.querySelector('span');
        if (clearSpan && !clearSpan.hasAttribute('data-translate')) {
            clearSpan.textContent = trans.btn_clear || 'Clear';
        }
    }
    
    // Detect location button
    const detectBtn = document.getElementById('detect-location');
    if (detectBtn) {
        const detectSpan = detectBtn.querySelector('span');
        if (detectSpan && !detectSpan.hasAttribute('data-translate')) {
            detectSpan.textContent = trans.btn_detect_location || 'Detect My Location';
        }
    }
    
    // View on map buttons di destination cards
    document.querySelectorAll('.view-on-map').forEach(btn => {
        const span = btn.querySelector('span');
        if (span && !span.hasAttribute('data-translate')) {
            span.textContent = trans.btn_view_map || 'View on Map';
        }
    });
    
    // View on map buttons di stats cards
    document.querySelectorAll('.view-on-map-btn').forEach(btn => {
        if (!btn.hasAttribute('data-translate')) {
            btn.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${trans.btn_view_map || 'View on Map'}`;
        }
    });
    
    // Check-in buttons di stats cards
    document.querySelectorAll('.record-visit-btn').forEach(btn => {
        if (!btn.hasAttribute('data-translate')) {
            btn.innerHTML = `<i class="fas fa-user-plus"></i> ${trans.btn_check_in || 'Check-in'}`;
        }
    });
    
    // Satellite toggle button
    const satelliteToggle = document.getElementById('satellite-toggle');
    if (satelliteToggle) {
        const satelliteSpan = satelliteToggle.querySelector('span');
        if (satelliteSpan && !satelliteSpan.hasAttribute('data-translate')) {
            satelliteSpan.textContent = currentMapType === 'satellite' ? 'Street Map' : 'Satellite';
        }
    }
}

function updateFilters(language) {
    const trans = translations[language];
    if (!trans) return;
    
    // Region filter dropdown
    const regionFilter = document.getElementById('region-filter');
    if (regionFilter) {
        const regionOptions = {
            'all': trans.region_all || 'All Regions',
            'lombok-tengah': trans.region_central || 'Central Lombok',
            'lombok-barat': trans.region_west || 'West Lombok',
            'lombok-timur': trans.region_east || 'East Lombok',
            'lombok-utara': trans.region_north || 'North Lombok',
            'kota-mataram': trans.region_mataram || 'Mataram City'
        };
        
        Array.from(regionFilter.options).forEach(option => {
            if (regionOptions[option.value]) {
                option.textContent = regionOptions[option.value];
            }
        });
    }
    
    // Traffic filter dropdown
    const trafficFilter = document.getElementById('traffic-filter');
    if (trafficFilter) {
        const trafficOptions = {
            'all': trans.traffic_all || 'All Levels',
            'low': trans.traffic_low || 'Low',
            'medium': trans.traffic_medium || 'Medium',
            'high': trans.traffic_high || 'High',
            'very-high': trans.traffic_very_high || 'Very High'
        };
        
        Array.from(trafficFilter.options).forEach(option => {
            if (trafficOptions[option.value]) {
                option.textContent = trafficOptions[option.value];
            }
        });
    }
    
    // Category filter buttons
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        const categoryButtons = categoryFilter.querySelectorAll('.category-btn');
        const categoryOptions = {
            'all': trans.category_all || 'All Destinations',
            'lombok-tengah': trans.category_lombok_tengah || 'Central Lombok',
            'lombok-barat': trans.category_lombok_barat || 'West Lombok',
            'lombok-timur': trans.category_lombok_timur || 'East Lombok',
            'lombok-utara': trans.category_lombok_utara || 'North Lombok',
            'kota-mataram': trans.category_kota_mataram || 'Mataram City'
        };
        
        categoryButtons.forEach(button => {
            const category = button.getAttribute('data-category');
            if (category && categoryOptions[category]) {
                const span = button.querySelector('span');
                if (span && !span.hasAttribute('data-translate')) {
                    span.textContent = categoryOptions[category];
                }
            }
        });
    }
}

function updateStatisticsLabels(language) {
    const trans = translations[language];
    if (!trans) return;
    
    // Update label statistik di dashboard
    const statsLabels = [
        { selector: '.stat-card:nth-child(1) .stat-label', key: 'stat_total_visitors' },
        { selector: '.stat-card:nth-child(2) .stat-label', key: 'stat_avg_traffic' },
        { selector: '.stat-card:nth-child(3) .stat-label', key: 'stat_most_crowded' },
        { selector: '.stat-card:nth-child(4) .stat-label', key: 'stat_least_crowded' }
    ];
    
    statsLabels.forEach(label => {
        const element = document.querySelector(label.selector);
        if (element && !element.hasAttribute('data-translate')) {
            element.textContent = trans[label.key] || element.textContent;
        }
    });
    
    // Update labels in statistics grid
    document.querySelectorAll('.stats-card .stat-label').forEach(element => {
        if (!element.hasAttribute('data-translate')) {
            element.textContent = trans.current_visitors || 'Current Visitors';
        }
    });
}

function updateLegends(language) {
    const trans = translations[language];
    if (!trans) return;
    
    // Update judul legenda
    const legendTitle = document.querySelector('.traffic-legend h4');
    if (legendTitle && !legendTitle.hasAttribute('data-translate')) {
        legendTitle.innerHTML = `<i class="fas fa-info-circle"></i> ${trans.legend_title || 'Traffic Legend'}`;
    }
    
    // Update item legenda
    const legendItems = document.querySelectorAll('.legend-item span');
    if (legendItems.length >= 4) {
        const legendTexts = [
            trans.legend_low || 'Low (0-20)',
            trans.legend_medium || 'Medium (20-50)',
            trans.legend_high || 'High (50-100)',
            trans.legend_very_high || 'Very High (100+)'
        ];
        
        legendItems.forEach((span, index) => {
            if (!span.hasAttribute('data-translate') && legendTexts[index]) {
                span.textContent = legendTexts[index];
            }
        });
    }
}

function updateMapControls(language) {
    const trans = translations[language];
    if (!trans) return;
    
    // Judul form rute
    const routeTitle = document.querySelector('.route-form h4');
    if (routeTitle && !routeTitle.hasAttribute('data-translate')) {
        routeTitle.innerHTML = `<i class="fas fa-route"></i> ${trans.map_route_title || 'Plan Your Route'}`;
    }
    
    // Label input
    const startLabel = document.querySelector('label[for="start-location"]');
    if (startLabel && !startLabel.hasAttribute('data-translate')) {
        startLabel.innerHTML = `<i class="fas fa-location-arrow"></i> ${trans.map_start_location || 'Start Location'}`;
    }
    
    const destLabel = document.querySelector('label[for="destination"]');
    if (destLabel && !destLabel.hasAttribute('data-translate')) {
        destLabel.innerHTML = `<i class="fas fa-flag-checkered"></i> ${trans.map_destination || 'Destination'}`;
    }
    
    // Placeholder input
    const startInput = document.getElementById('start-location');
    if (startInput && !startInput.hasAttribute('data-translate')) {
        startInput.placeholder = trans.map_start_location || 'Start Location';
    }
    
    const destSelect = document.getElementById('destination');
    if (destSelect && destSelect.options[0] && destSelect.options[0].value === '') {
        destSelect.options[0].textContent = trans.map_choose_destination || 'Choose destination...';
    }
    
    // Update traffic info di dashboard
    const trafficTitle = document.querySelector('.dashboard-header h4');
    if (trafficTitle && !trafficTitle.hasAttribute('data-translate')) {
        trafficTitle.innerHTML = `<i class="fas fa-traffic-light"></i> ${trans.map_traffic_info || 'Live Traffic Info'}`;
    }
    
    const lowTrafficLabel = document.querySelector('.dashboard-stats .stat-card:nth-child(1) .stat-label');
    if (lowTrafficLabel && !lowTrafficLabel.hasAttribute('data-translate')) {
        lowTrafficLabel.textContent = trans.map_low_traffic || 'Low Traffic';
    }
    
    const highTrafficLabel = document.querySelector('.dashboard-stats .stat-card:nth-child(2) .stat-label');
    if (highTrafficLabel && !highTrafficLabel.hasAttribute('data-translate')) {
        highTrafficLabel.textContent = trans.map_high_traffic || 'High Traffic';
    }
}

function updateCategories(language) {
    const trans = translations[language];
    if (!trans) return;
    
    // Update category buttons
    const categoryBtns = document.querySelectorAll('.category-btn');
    const categoryTranslations = {
        'all': trans.category_all || 'All Destinations',
        'lombok-tengah': trans.category_lombok_tengah || 'Central Lombok',
        'lombok-barat': trans.category_lombok_barat || 'West Lombok',
        'lombok-timur': trans.category_lombok_timur || 'East Lombok',
        'lombok-utara': trans.category_lombok_utara || 'North Lombok',
        'kota-mataram': trans.category_kota_mataram || 'Mataram City'
    };
    
    categoryBtns.forEach(btn => {
        const category = btn.getAttribute('data-category');
        if (category && categoryTranslations[category]) {
            const span = btn.querySelector('span');
            if (span && !span.hasAttribute('data-translate')) {
                span.textContent = categoryTranslations[category];
            }
        }
    });
    
    // Update category badges in destination cards
    document.querySelectorAll('.category-badge').forEach(badge => {
        const categoryText = badge.textContent.toLowerCase();
        let translatedCategory = '';
        
        if (categoryText.includes('beach') || categoryText.includes('pantai')) {
            translatedCategory = trans.category_beach || 'Beach';
        } else if (categoryText.includes('mountain') || categoryText.includes('gunung') || categoryText.includes('bukit')) {
            translatedCategory = trans.category_mountain || 'Mountain';
        } else if (categoryText.includes('waterfall') || categoryText.includes('air terjun')) {
            translatedCategory = trans.category_waterfall || 'Waterfall';
        } else if (categoryText.includes('nature') || categoryText.includes('alam')) {
            translatedCategory = trans.category_nature || 'Nature';
        } else if (categoryText.includes('culture') || categoryText.includes('budaya')) {
            translatedCategory = trans.category_culture || 'Culture';
        } else if (categoryText.includes('culinary') || categoryText.includes('kuliner')) {
            translatedCategory = trans.category_culinary || 'Culinary';
        } else {
            translatedCategory = badge.textContent;
        }
        
        if (!badge.hasAttribute('data-translate')) {
            badge.textContent = translatedCategory;
        }
    });
}

function updateTitlesAndSubtitles(language) {
    const trans = translations[language];
    if (!trans) return;
    
    // Update hero section
    const heroTitle = document.querySelector('.hero h1');
    const heroSubtitle = document.querySelector('.hero p');
    const heroButton = document.querySelector('.hero .btn span');
    
    if (heroTitle && !heroTitle.hasAttribute('data-translate')) {
        heroTitle.textContent = trans.hero_title || 'Lombok Live Dashboard';
    }
    if (heroSubtitle && !heroSubtitle.hasAttribute('data-translate')) {
        heroSubtitle.textContent = trans.hero_subtitle || 'Real-time tourism statistics';
    }
    if (heroButton && !heroButton.hasAttribute('data-translate')) {
        heroButton.textContent = trans.hero_explore || 'Explore Destinations';
    }
}

function updateSectionTitles(language) {
    const trans = translations[language];
    if (!trans) return;
    
    // Update all section titles
    document.querySelectorAll('.section-title h2').forEach(title => {
        const parentSection = title.closest('section');
        if (parentSection && !title.hasAttribute('data-translate')) {
            const sectionId = parentSection.id;
            
            switch(sectionId) {
                case 'features':
                    title.textContent = trans.features_title || 'Real-Time Features';
                    break;
                case 'destinations':
                    title.textContent = trans.destinations_title || 'Featured Destinations';
                    break;
                case 'statistics':
                    title.textContent = trans.statistics_title || 'Live Statistics';
                    break;
                case 'map-section':
                    title.textContent = trans.map_title || 'Live Traffic Heatmap';
                    break;
                case 'reviews':
                    title.textContent = trans.reviews_title || 'Traveler Experiences';
                    break;
            }
        }
    });
    
    // Update all section subtitles
    document.querySelectorAll('.section-title p').forEach(subtitle => {
        const parentSection = subtitle.closest('section');
        if (parentSection && !subtitle.hasAttribute('data-translate')) {
            const sectionId = parentSection.id;
            
            switch(sectionId) {
                case 'features':
                    subtitle.textContent = trans.features_subtitle || 'Smart monitoring system';
                    break;
                case 'destinations':
                    subtitle.textContent = trans.destinations_subtitle || 'Explore amazing destinations';
                    break;
                case 'statistics':
                    subtitle.textContent = trans.statistics_subtitle || 'Monitor crowd levels';
                    break;
                case 'map-section':
                    subtitle.textContent = trans.map_subtitle || 'Real-time crowd visualization';
                    break;
                case 'reviews':
                    subtitle.textContent = trans.reviews_subtitle || 'See traveler experiences';
                    break;
            }
        }
    });
}

function updatePriceText(language) {
    const trans = translations[language];
    if (!trans) return;
    
    // Update price text di seluruh aplikasi
    document.querySelectorAll('.price, .price-label, .cost').forEach(element => {
        const currentText = element.textContent.toLowerCase();
        if (currentText.includes('gratis') || currentText.includes('free')) {
            element.textContent = trans.price_free || 'Free';
        } else if (currentText.includes('donasi') || currentText.includes('donation')) {
            element.textContent = trans.price_donation || 'Donation';
        } else if (currentText.includes('bervariasi') || currentText.includes('variable')) {
            element.textContent = trans.price_variable || 'Variable';
        }
    });
    
    // Update hours text
    document.querySelectorAll('.hours, .open-hours, .detail-item span').forEach(element => {
        const currentText = element.textContent.toLowerCase();
        if (currentText.includes('24 jam') || currentText.includes('24 hours') || currentText.includes('24 jam wita')) {
            element.textContent = trans.hours_24 || '24 hours';
        }
    });
}

function updateDestinationCards(language) {
    const trans = translations[language];
    if (!trans) return;
    
    document.querySelectorAll('.destination-card').forEach(card => {
        // Update detail items
        const detailItems = card.querySelectorAll('.detail-item span');
        detailItems.forEach(item => {
            const itemText = item.textContent.toLowerCase();
            if (itemText.includes('capacity') || itemText.includes('kapasitas')) {
                item.textContent = trans.capacity || 'Capacity';
            } else if (itemText.includes('last updated') || itemText.includes('terakhir diperbarui')) {
                item.textContent = trans.last_updated || 'Last Updated';
            }
        });
    });
}

function updateStatisticsCards(language) {
    const trans = translations[language];
    if (!trans) return;
    
    // Update stat cards
    document.querySelectorAll('.stats-card').forEach(card => {
        // Update labels
        const labels = card.querySelectorAll('span');
        labels.forEach(label => {
            const labelText = label.textContent.toLowerCase();
            if (labelText.includes('capacity') || labelText.includes('kapasitas')) {
                label.textContent = trans.capacity || 'Capacity';
            } else if (labelText.includes('last updated') || labelText.includes('terakhir diperbarui')) {
                label.textContent = trans.last_updated || 'Last Updated';
            }
        });
    });
}

// ==================== NAVIGATION ====================
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (!hamburger || !navLinks) return;

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.innerHTML = navLinks.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (header) {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                if (navLinks) {
                    navLinks.classList.remove('active');
                    if (hamburger) {
                        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
                    }
                }
            }
        });
    });
}

// ==================== DESTINATIONS DISPLAY ====================
async function initializeDestinations() {
    const destinationGrid = document.getElementById('destination-grid');
    if (!destinationGrid) return;
    
    // Check if lombokDestinations exists
    if (typeof lombokDestinations === 'undefined') {
        destinationGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px;">
                <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: var(--text-secondary); margin-bottom: 15px;"></i>
                <h3 style="color: var(--text-primary);">Destinations data not loaded</h3>
                <p style="color: var(--text-secondary);">Please check if destinations data is available</p>
            </div>
        `;
        return;
    }
    
    // Show skeleton loading
    destinationGrid.innerHTML = createSkeletonGrid();

    // Simulate loading delay
    setTimeout(() => {
        // Clear loading
        destinationGrid.innerHTML = '';
        
        if (!lombokDestinations || !Array.isArray(lombokDestinations)) {
            destinationGrid.innerHTML = '<p>No destinations available</p>';
            return;
        }
        
        lombokDestinations.forEach((dest, index) => {
            const card = createDestinationCard(dest, index);
            destinationGrid.appendChild(card);
        });

        // Initialize scroll animations
        initializeScrollAnimations();
        
        // Update dropdowns
        updateDestinationDropdowns();
    }, 1500);
}

function createSkeletonGrid() {
    return `
        <div class="skeleton-grid">
            ${Array(6).fill(0).map(() => `
                <div class="destination-card skeleton">
                    <div class="skeleton-image"></div>
                    <div class="skeleton-content">
                        <div class="skeleton-title"></div>
                        <div class="skeleton-text"></div>
                        <div class="skeleton-text short"></div>
                        <div class="skeleton-button"></div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function createDestinationCard(destination, index) {
    const card = document.createElement('div');
    card.className = 'destination-card animate-on-scroll';
    card.style.animationDelay = `${index * 0.1}s`;
    card.setAttribute('data-location', `${destination.lat},${destination.lng}`);
    card.setAttribute('data-name', destination.name);
    card.setAttribute('data-id', destination.id);
    card.setAttribute('data-price', destination.price);
    card.setAttribute('data-hours', destination.hours);
    card.setAttribute('data-category', destination.category);
    card.setAttribute('data-region', destination.region);
    
    const categoryColors = {
        'beach': '#00d9ff',
        'mountain': '#ff2a6d',
        'waterfall': '#3498db',
        'nature': '#7cfc00',
        'culture': '#9d4edd',
        'culinary': '#ff6b35'
    };
    
    const color = categoryColors[destination.category] || '#95a5a6';
    
    // Get current language
    const savedLang = localStorage.getItem('lombok-language') || 'id';
    const trans = translations[savedLang];
    
    // Format price berdasarkan bahasa
    const formatPrice = (price) => {
        if (!price) return trans?.price_free || 'Free';
        
        const lowerPrice = price.toLowerCase();
        if (lowerPrice.includes('gratis') || lowerPrice.includes('free')) {
            return trans?.price_free || 'Free';
        } else if (lowerPrice.includes('donasi') || lowerPrice.includes('donation')) {
            return trans?.price_donation || 'Donation';
        }
        return price;
    };
    
    // Format hours berdasarkan bahasa
    const formatHours = (hours) => {
        if (!hours) return trans?.hours_24 || '24 hours';
        
        if (hours.includes('24 jam') || hours.includes('24 hours') || hours.includes('24 jam WITA')) {
            return trans?.hours_24 || '24 hours';
        }
        return hours;
    };
    
    // Format category berdasarkan bahasa
    const formatCategory = (category) => {
        if (!trans) return category;
        
        switch(category) {
            case 'beach': return trans.category_beach || 'Beach';
            case 'mountain': return trans.category_mountain || 'Mountain';
            case 'waterfall': return trans.category_waterfall || 'Waterfall';
            case 'nature': return trans.category_nature || 'Nature';
            case 'culture': return trans.category_culture || 'Culture';
            case 'culinary': return trans.category_culinary || 'Culinary';
            default: return category;
        }
    };
    
    card.innerHTML = `
        <div class="destination-image">
            <img src="${destination.image || getDefaultImageByCategory(destination.category)}" 
                 alt="${destination.name}" 
                 loading="lazy"
                 onerror="this.src='${getDefaultImageByCategory(destination.category)}'">
            <div class="category-badge" style="background: ${color}; position: absolute; top: 15px; right: 15px; padding: 6px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 600; color: white; text-transform: capitalize;">
                ${formatCategory(destination.category)}
            </div>
        </div>
        <div class="destination-info">
            <h3>${destination.name}</h3>
            
            <div class="destination-meta">
                <div class="rating">
                    <div class="stars" style="color: var(--cyber-yellow);">
                        ${generateStarRating(4.2)}
                    </div>
                    <span class="rating-text">4.2/5</span>
                </div>
                <div class="price">${formatPrice(destination.price)}</div>
            </div>
            
            <div class="destination-tags" style="display: flex; gap: 8px; margin-bottom: 15px; flex-wrap: wrap;">
                <span class="tag" style="background: ${color}; padding: 4px 12px; border-radius: 15px; font-size: 0.8rem; color: white; font-weight: 600;">${formatCategory(destination.category)}</span>
                <span class="tag" style="background: var(--glass); padding: 4px 12px; border-radius: 15px; font-size: 0.8rem; color: var(--text-secondary); font-weight: 600;">${getRegionName(destination.region)}</span>
            </div>
            
            <div class="destination-details">
                <div class="detail-item">
                    <i class="fas fa-clock"></i>
                    <span>${formatHours(destination.hours)}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${getRegionName(destination.region)}</span>
                </div>
            </div>
            
            <button class="btn btn-small view-on-map" style="margin-top: 20px; width: 100%;">
                <i class="fas fa-map-marker-alt"></i>
                <span data-translate="btn_view_map">View on Map</span>
            </button>
        </div>
    `;
    
    // Add event listener
    const viewOnMapBtn = card.querySelector('.view-on-map');
    if (viewOnMapBtn) {
        viewOnMapBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const location = card.getAttribute('data-location');
            const name = card.getAttribute('data-name');
            
            const destinationInput = document.getElementById('destination');
            if (destinationInput) {
                destinationInput.value = location;
            }
            
            const mapSection = document.getElementById('map-section');
            if (mapSection) {
                mapSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            const [lat, lng] = location.split(',').map(coord => parseFloat(coord));
            if (map && !isNaN(lat) && !isNaN(lng)) {
                map.flyTo([lat, lng], 13);
            }
            
            showNotification(`📍 ${name} selected! Set your location and click "Get Directions"`);
        });
    }
    
    return card;
}

function updateDestinationDropdowns() {
    const destinationSelect = document.getElementById('destination');
    const reviewDestinationSelect = document.getElementById('destination-select');
    
    if (!destinationSelect || !reviewDestinationSelect) return;
    
    // Clear existing options except first
    while (destinationSelect.options.length > 1) {
        destinationSelect.remove(1);
    }
    while (reviewDestinationSelect.options.length > 1) {
        reviewDestinationSelect.remove(1);
    }
    
    // Check if destinations exist
    if (!lombokDestinations || !Array.isArray(lombokDestinations)) return;
    
    // Add destinations to dropdowns
    lombokDestinations.forEach(dest => {
        const option1 = new Option(dest.name, `${dest.lat},${dest.lng}`);
        const option2 = new Option(dest.name, dest.name);
        
        destinationSelect.add(option1);
        reviewDestinationSelect.add(option2);
    });
}

// ==================== STATISTICS SYSTEM ====================
async function loadStatistics() {
    try {
        // Check if mockAPI exists
        if (typeof mockAPI === 'undefined') {
            console.error('mockAPI not available');
            return;
        }
        
        const trafficData = await mockAPI.getAllDestinationsTraffic();
        const regionFilter = document.getElementById('region-filter');
        const trafficFilter = document.getElementById('traffic-filter');
        
    let filteredData = trafficData;
        
    if (regionFilter && regionFilter.value !== 'all') {
        // Match the exact region value from the dropdown
        filteredData = filteredData.filter(dest => {
            const destination = lombokDestinations.find(d => d.id === dest.id);
            return destination?.region === regionFilter.value;
        });
    }
        
        if (trafficFilter && trafficFilter.value !== 'all') {
            filteredData = filteredData.filter(dest => 
                dest.trafficLevel && dest.trafficLevel.level === trafficFilter.value
            );
        }
        
        displayStatsCards(filteredData);
        updateStatsSummary(filteredData);
        
    } catch (error) {
        console.error('Error loading statistics:', error);
        showNotification('Error loading statistics data', 'error');
    }
}

function displayStatsCards(destinations) {
    const statsGrid = document.getElementById('stats-grid');
    if (!statsGrid) return;
    
    const savedLang = localStorage.getItem('lombok-language') || 'id';
    const trans = translations[savedLang];
    
    if (!destinations || destinations.length === 0) {
        statsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px;">
                <i class="fas fa-chart-bar" style="font-size: 3rem; color: var(--text-secondary); margin-bottom: 15px;"></i>
                <h3 style="color: var(--text-primary);">${trans?.no_results || 'No data available'}</h3>
                <p style="color: var(--text-secondary);">${trans?.try_again || 'Try changing your filters'}</p>
            </div>
        `;
        return;
    }
    
    statsGrid.innerHTML = '';
    
    destinations.forEach(dest => {
        const destinationInfo = lombokDestinations.find(d => d.id === dest.id);
        const traffic = dest.trafficLevel || { level: 'low', color: '#2ecc71', label: 'Low', icon: '👍' };
        
        // Get current language
        const savedLang = localStorage.getItem('lombok-language') || 'id';
        const trans = translations[savedLang];
        
        // Format category berdasarkan bahasa
        const formatCategory = (category) => {
            if (!trans) return category;
            switch(category) {
                case 'beach': return trans.category_beach || 'Beach';
                case 'mountain': return trans.category_mountain || 'Mountain';
                case 'waterfall': return trans.category_waterfall || 'Waterfall';
                case 'nature': return trans.category_nature || 'Nature';
                case 'culture': return trans.category_culture || 'Culture';
                case 'culinary': return trans.category_culinary || 'Culinary';
                default: return category;
            }
        };
        
        const card = document.createElement('div');
        card.className = 'stats-card';
        card.style.cssText = `
            background: var(--card-bg);
            border-radius: 15px;
            padding: 20px;
            border: 1px solid var(--border-color);
            transition: all 0.3s ease;
            cursor: pointer;
        `;
        
        const visitorCount = dest.currentVisitors || 0;
        const percentage = Math.min(visitorCount, 100);
        
        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px;">
                <h4 style="margin: 0; color: var(--text-primary); font-size: 1.1rem;">${destinationInfo?.name || dest.name}</h4>
                <span class="traffic-badge ${traffic.level}" style="background: ${traffic.color}; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 600;">
                    ${traffic.icon || '📍'} ${traffic.label}
                </span>
            </div>
            
            <div style="display: flex; align-items: center; margin-bottom: 15px;">
                <div style="flex: 1; margin-right: 15px;">
                    <div style="font-size: 2rem; font-weight: 800; color: ${traffic.color};">${visitorCount}</div>
                    <div style="color: var(--text-secondary); font-size: 0.8rem;">${trans?.current_visitors || 'Current Visitors'}</div>
                </div>
                <div style="width: 60px; height: 60px;">
                    <div style="width: 100%; height: 100%; border-radius: 50%; background: conic-gradient(
                        ${traffic.color} 0% ${percentage}%,
                        var(--glass) ${percentage}% 100%
                    ); display: flex; align-items: center; justify-content: center; color: white; font-weight: 700;">
                        ${percentage}%
                    </div>
                </div>
            </div>
            
            <div style="color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 15px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                    <span><i class="fas fa-map-marker-alt"></i> ${getRegionName(destinationInfo?.region)}</span>
                    <span><i class="fas fa-tag"></i> ${formatCategory(destinationInfo?.category || 'Unknown')}</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span><i class="fas fa-clock"></i> ${dest.lastUpdated ? new Date(dest.lastUpdated).toLocaleTimeString() : 'N/A'}</span>
                    <span><i class="fas fa-users"></i> ${trans?.capacity || 'Capacity'}</span>
                </div>
            </div>
            
            <div style="width: 100%; height: 6px; background: var(--glass); border-radius: 3px; overflow: hidden; margin-bottom: 15px;">
                <div class="traffic-fill" style="background: ${traffic.color}; width: ${percentage}%; height: 100%;"></div>
            </div>
            
            <div style="display: flex; gap: 10px;">
                <button class="view-on-map-btn" style="flex: 2; background: var(--neon-blue); color: white; border: none; padding: 8px 16px; border-radius: 20px; cursor: pointer; font-size: 0.8rem; font-weight: 600;">
                    <i class="fas fa-map-marker-alt"></i> ${trans?.btn_view_map || 'View on Map'}
                </button>
                <button class="record-visit-btn" style="flex: 1; background: var(--glass); color: var(--text-primary); border: 1px solid var(--border-color); padding: 8px; border-radius: 20px; cursor: pointer; font-size: 0.8rem; font-weight: 600;">
                    <i class="fas fa-user-plus"></i> ${trans?.btn_check_in || 'Check-in'}
                </button>
            </div>
        `;
        
        // Add event listeners
        const viewOnMapBtn = card.querySelector('.view-on-map-btn');
        const recordVisitBtn = card.querySelector('.record-visit-btn');
        
        if (viewOnMapBtn) {
            viewOnMapBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                centerOnDestination(dest);
            });
        }
        
        if (recordVisitBtn) {
            recordVisitBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                recordVisit(dest.id);
            });
        }
        
        card.addEventListener('click', function() {
            showDestinationDetail(dest.id);
        });
        
        statsGrid.appendChild(card);
    });
}

function updateStatsSummary(destinations) {
    if (!destinations || !Array.isArray(destinations)) return;
    
    const totalVisitors = destinations.reduce((sum, dest) => sum + (dest.currentVisitors || 0), 0);
    const avgTraffic = destinations.length > 0 ? Math.round(totalVisitors / destinations.length) : 0;
    
    let mostCrowded = null;
    let leastCrowded = null;
    
    if (destinations.length > 0) {
        mostCrowded = destinations.reduce((max, dest) => 
            (dest.currentVisitors || 0) > (max.currentVisitors || 0) ? dest : max
        );
        leastCrowded = destinations.reduce((min, dest) => 
            (dest.currentVisitors || 0) < (min.currentVisitors || 0) ? dest : min
        );
    }
    
    const totalVisitorsEl = document.getElementById('total-visitors');
    const avgTrafficEl = document.getElementById('avg-traffic');
    const mostCrowdedEl = document.getElementById('most-crowded');
    const leastCrowdedEl = document.getElementById('least-crowded');
    
    if (totalVisitorsEl) totalVisitorsEl.textContent = totalVisitors.toLocaleString();
    if (avgTrafficEl) avgTrafficEl.textContent = avgTraffic;
    if (mostCrowdedEl && mostCrowded) mostCrowdedEl.textContent = mostCrowded.currentVisitors || 0;
    if (leastCrowdedEl && leastCrowded) leastCrowdedEl.textContent = leastCrowded.currentVisitors || 0;
}

function centerOnDestination(destination) {
    if (map && destination.lat && destination.lng) {
        map.flyTo([destination.lat, destination.lng], 14, {
            duration: 1,
            easeLinearity: 0.25
        });
        
        // Highlight the corresponding traffic circle
        trafficCircles.forEach(circle => {
            const latLng = circle.getLatLng();
            if (latLng.lat === destination.lat && latLng.lng === destination.lng) {
                circle.openPopup();
                circle.setStyle({ fillOpacity: 0.8 });
                setTimeout(() => circle.setStyle({ fillOpacity: 0.4 }), 3000);
            }
        });
    }
}

async function recordVisit(destinationId) {
    try {
        // Check if mockAPI exists
        if (typeof mockAPI === 'undefined') {
            showNotification('❌ Mock API not available', 'error');
            return;
        }
        
        const result = await mockAPI.recordVisit(destinationId);
        showNotification('✅ Check-in recorded! Visitor count updated.');
        
        loadStatistics();
        updateTrafficHeatmap();
        
    } catch (error) {
        console.error('Error recording visit:', error);
        showNotification('❌ Failed to record check-in', 'error');
    }
}

function showDestinationDetail(destinationId) {
    const dest = lombokDestinations.find(d => d.id === destinationId);
    if (dest) {
        const savedLang = localStorage.getItem('lombok-language') || 'id';
        const trans = translations[savedLang];
        
        const formatCategory = (category) => {
            if (!trans) return category;
            switch(category) {
                case 'beach': return trans.category_beach || 'Beach';
                case 'mountain': return trans.category_mountain || 'Mountain';
                case 'waterfall': return trans.category_waterfall || 'Waterfall';
                case 'nature': return trans.category_nature || 'Nature';
                case 'culture': return trans.category_culture || 'Culture';
                case 'culinary': return trans.category_culinary || 'Culinary';
                default: return category;
            }
        };
        
        const message = `${dest.name}\n\n${trans?.category_label || 'Category'}: ${formatCategory(dest.category)}\n${trans?.region_label || 'Region'}: ${getRegionName(dest.region)}\n${trans?.price_label || 'Price'}: ${dest.price || 'Free'}\n${trans?.hours_label || 'Hours'}: ${dest.hours || '24/7'}`;
        alert(message);
    }
}

// ==================== HEATMAP SYSTEM ====================
function initializeHeatmap() {
    updateTrafficHeatmap();
    // Update every 30 seconds
    statsUpdateInterval = setInterval(updateTrafficHeatmap, 30000);
}

async function updateTrafficHeatmap() {
    try {
        // Check if mockAPI exists
        if (typeof mockAPI === 'undefined') {
            console.log('mockAPI not available, using fallback data');
            return;
        }
        
        const trafficData = await mockAPI.getAllDestinationsTraffic();
        
        // Clear existing circles
        trafficCircles.forEach(circle => {
            if (map && circle && map.hasLayer(circle)) {
                map.removeLayer(circle);
            }
        });
        trafficCircles = [];
        
        // Count traffic levels
        let lowCount = 0, highCount = 0;
        
        // Add new traffic circles
        trafficData.forEach(destination => {
            const traffic = destination.trafficLevel || { level: 'low', color: '#2ecc71', label: 'Low', icon: '👍' };
            
            if (traffic.level === 'low') lowCount++;
            if (traffic.level === 'high' || traffic.level === 'very-high') highCount++;
            
            if (map && destination.lat && destination.lng) {
                const circle = L.circle([destination.lat, destination.lng], {
                    color: traffic.color,
                    fillColor: traffic.color,
                    fillOpacity: 0.4,
                    radius: calculateCircleRadius(destination.currentVisitors || 0),
                    className: 'traffic-circle-pulse'
                }).addTo(map);
                
                circle.bindPopup(createTrafficPopup(destination, traffic));
                
                circle.on('mouseover', function() {
                    this.setStyle({ fillOpacity: 0.7 });
                });
                
                circle.on('mouseout', function() {
                    this.setStyle({ fillOpacity: 0.4 });
                });
                
                trafficCircles.push(circle);
            }
        });
        
        // Update traffic counters
        const lowTrafficCount = document.getElementById('low-traffic-count');
        const highTrafficCount = document.getElementById('high-traffic-count');
        const trafficUpdateTime = document.getElementById('traffic-update-time');
        
        if (lowTrafficCount) lowTrafficCount.textContent = lowCount;
        if (highTrafficCount) highTrafficCount.textContent = highCount;
        if (trafficUpdateTime) trafficUpdateTime.textContent = 'Just now';
        
        // Update statistics dashboard
        updateStatsSummary(trafficData);
        
    } catch (error) {
        console.error('Error updating heatmap:', error);
    }
}

function calculateCircleRadius(visitorCount) {
    if (visitorCount < 10) return 100;
    if (visitorCount < 30) return 200;
    if (visitorCount < 70) return 350;
    if (visitorCount < 120) return 500;
    return 700;
}

function createTrafficPopup(destination, traffic) {
    const savedLang = localStorage.getItem('lombok-language') || 'id';
    const trans = translations[savedLang];
    
    return `
        <div style="background: var(--glass-dark); padding: 15px; border-radius: 12px; border: 1px solid var(--border-color); min-width: 220px; backdrop-filter: blur(20px);">
            <h4 style="margin: 0 0 8px 0; color: ${traffic.color}; font-size: 1.1rem;">
                ${traffic.icon || '📍'} ${destination.name}
            </h4>
            <div style="color: var(--text-primary); margin-bottom: 8px;">
                <strong>${trans?.status || 'Status'}:</strong> ${traffic.label}
            </div>
            <div style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 8px;">
                <strong>${trans?.current_visitors || 'Current Visitors'}:</strong> ${destination.currentVisitors || 0}<br>
                <strong>${trans?.last_updated || 'Last Updated'}:</strong> ${destination.lastUpdated ? new Date(destination.lastUpdated).toLocaleTimeString() : 'N/A'}
            </div>
            <div style="display: flex; align-items: center; margin-top: 8px;">
                <div style="width: 100%; height: 8px; background: linear-gradient(90deg, var(--traffic-low), var(--traffic-medium), var(--traffic-high), var(--traffic-very-high)); border-radius: 4px; margin-right: 10px;"></div>
                <div style="background: ${traffic.color}; width: 16px; height: 16px; border-radius: 50%; border: 2px solid white;"></div>
            </div>
        </div>
    `;
}

// ==================== MAP SYSTEM ====================
async function initializeMap() {
    try {
        const mapElement = document.getElementById('map');
        if (!mapElement) {
            console.error('Map element not found');
            return;
        }
        
        // Check if Leaflet is loaded
        if (typeof L === 'undefined') {
            showMapFallback();
            return;
        }
        
        // Inisialisasi peta dengan view Lombok
        map = L.map('map', {
            zoomControl: false,
            attributionControl: false
        }).setView([-8.6500, 116.3167], 9);
        
        // Tambahkan street tile layer
        streetLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 20
        }).addTo(map);
        
        // Tambahkan satellite tile layer (tapi jangan tampilkan dulu)
        satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: '© Esri, Maxar, Earthstar Geographics',
            maxZoom: 20
        });
        
        // Tambahkan kontrol zoom
        L.control.zoom({
            position: 'bottomright'
        }).addTo(map);
        
        // Tambahkan satellite toggle button
        addSatelliteToggle();
        
        // Tambahkan marker destinasi
        addDestinationMarkers();
        
        // Setup map event listeners
        setupMapEventListeners();
        updateDestinationDropdowns();
        
        // Inisialisasi heatmap setelah map siap
        setTimeout(initializeHeatmap, 1000);
        
        showNotification('🗺️ Map loaded successfully! Click "Detect My Location" to start.');
        
    } catch (error) {
        console.error('Map initialization failed:', error);
        showMapFallback();
    }
}

function addSatelliteToggle() {
    const savedLang = localStorage.getItem('lombok-language') || 'id';
    const trans = translations[savedLang];
    
    // Create satellite toggle button
    const satelliteToggle = L.control({ position: 'topright' });
    
    satelliteToggle.onAdd = function(map) {
        const div = L.DomUtil.create('div', 'satellite-toggle');
        div.innerHTML = `
            <button id="satellite-toggle" class="btn btn-small" style="background: var(--glass-dark); backdrop-filter: blur(20px); border: 2px solid var(--border-color); border-radius: 50px; padding: 10px 20px; cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--text-primary); font-weight: 600;">
                <i class="fas fa-satellite"></i>
                <span>${trans?.btn_satellite || 'Satellite'}</span>
            </button>
        `;
        
        // Add click event
        div.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleSatelliteView();
        });
        
        return div;
    };
    
    satelliteToggle.addTo(map);
    
    // Add to window for global access
    window.satelliteToggleBtn = document.getElementById('satellite-toggle');
}

function toggleSatelliteView() {
    const savedLang = localStorage.getItem('lombok-language') || 'id';
    const trans = translations[savedLang];
    
    if (currentMapType === 'street') {
        // Switch to satellite
        map.removeLayer(streetLayer);
        satelliteLayer.addTo(map);
        currentMapType = 'satellite';
        
        // Update button text
        if (window.satelliteToggleBtn) {
            window.satelliteToggleBtn.innerHTML = `
                <i class="fas fa-map"></i>
                <span>${trans?.btn_street || 'Street Map'}</span>
            `;
        }
        
        showNotification('🛰️ Switched to Satellite View');
    } else {
        // Switch to street
        map.removeLayer(satelliteLayer);
        streetLayer.addTo(map);
        currentMapType = 'street';
        
        // Update button text
        if (window.satelliteToggleBtn) {
            window.satelliteToggleBtn.innerHTML = `
                <i class="fas fa-satellite"></i>
                <span>${trans?.btn_satellite || 'Satellite'}</span>
            `;
        }
        
        showNotification('🗺️ Switched to Street Map View');
    }
    
    // Update language for the button
    updateButtons(savedLang);
}

function addDestinationMarkers() {
    if (!map || typeof L === 'undefined') return;
    
    const categoryColors = {
        'beach': '#00d9ff', 'mountain': '#ff2a6d', 'waterfall': '#3498db',
        'nature': '#7cfc00', 'culture': '#9d4edd', 'culinary': '#ff6b35'
    };

    const categoryIcons = {
        'beach': 'umbrella-beach', 'mountain': 'mountain', 'waterfall': 'water',
        'nature': 'tree', 'culture': 'landmark', 'culinary': 'utensils'
    };

    // Check if destinations exist
    if (!lombokDestinations || !Array.isArray(lombokDestinations)) return;
    
    // Tambahkan maksimal 50 marker untuk performa
    const maxMarkers = 50;
    const destinationsToShow = lombokDestinations.slice(0, maxMarkers);
    
    destinationsToShow.forEach(dest => {
        if (!dest.lat || !dest.lng) return;
        
        const color = categoryColors[dest.category] || '#95a5a6';
        const iconName = categoryIcons[dest.category] || 'map-marker-alt';
        
        const customIcon = L.divIcon({
            html: `
                <div style="background: ${color}; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 12px; border: 2px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3); cursor: pointer;">
                    <i class="fas fa-${iconName}"></i>
                </div>
            `,
            className: 'destination-marker',
            iconSize: [30, 30],
            iconAnchor: [15, 30]
        });
        
        const marker = L.marker([dest.lat, dest.lng], {icon: customIcon})
            .addTo(map)
            .bindPopup(`
                <div style="background: var(--glass-dark); padding: 15px; border-radius: 12px; border: 1px solid var(--border-color); color: var(--text-primary); min-width: 200px; backdrop-filter: blur(20px);">
                    <h4 style="margin: 0 0 8px 0; color: ${color}; font-size: 1rem;">${dest.name}</h4>
                    <div style="color: var(--text-secondary); font-size: 0.8rem; margin-bottom: 10px;">
                        <strong>Category:</strong> ${dest.category}<br>
                        <strong>Price:</strong> ${dest.price || 'Free'}
                    </div>
                    <button class="set-as-destination" style="background: ${color}; color: white; border: none; padding: 6px 12px; border-radius: 15px; cursor: pointer; font-size: 0.8rem; font-weight: 600; width: 100%;">
                        <i class="fas fa-route"></i> Get Directions
                    </button>
                </div>
            `);
        
        marker.on('popupopen', function() {
            const button = document.querySelector('.set-as-destination');
            if (button) {
                button.addEventListener('click', function() {
                    const destinationInput = document.getElementById('destination');
                    if (destinationInput) {
                        destinationInput.value = `${dest.lat},${dest.lng}`;
                    }
                    calculateRoute();
                    map.closePopup();
                });
            }
        });
    });
}

function setupMapEventListeners() {
    // Transport mode selection
    document.querySelectorAll('.transport-mode').forEach(mode => {
        mode.addEventListener('click', function() {
            document.querySelectorAll('.transport-mode').forEach(m => {
                m.classList.remove('active');
            });
            this.classList.add('active');
            currentTransportMode = this.getAttribute('data-mode');
        });
    });
    
    // Location detection
    const detectBtn = document.getElementById('detect-location');
    if (detectBtn) {
        detectBtn.addEventListener('click', detectUserLocation);
    }
    
    // Route calculation
    const calculateBtn = document.getElementById('calculate-route');
    if (calculateBtn) {
        calculateBtn.addEventListener('click', calculateRoute);
    }
    
    // Clear route
    const clearBtn = document.getElementById('clear-route');
    if (clearBtn) {
        clearBtn.addEventListener('click', clearRoute);
    }
    
    // Refresh stats button
    const refreshStatsBtn = document.getElementById('refresh-stats');
    if (refreshStatsBtn) {
        refreshStatsBtn.addEventListener('click', loadStatistics);
    }
    
    // View on map from destination cards
    document.addEventListener('click', function(e) {
        if (e.target.closest('.view-on-map')) {
            e.preventDefault();
            const card = e.target.closest('.destination-card');
            if (card) {
                const location = card.getAttribute('data-location');
                const name = card.getAttribute('data-name');
                
                const destinationInput = document.getElementById('destination');
                if (destinationInput) {
                    destinationInput.value = location;
                }
                
                // Scroll ke map section
                const mapSection = document.getElementById('map-section');
                if (mapSection) {
                    mapSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                
                const [lat, lng] = location.split(',').map(coord => parseFloat(coord));
                if (map && !isNaN(lat) && !isNaN(lng)) {
                    map.flyTo([lat, lng], 13);
                }
                
                showNotification(`📍 ${name} selected! Set your location and click "Get Directions"`);
            }
        }
    });
}

function detectUserLocation() {
    const locationInput = document.getElementById('start-location');
    const detectBtn = document.getElementById('detect-location');
    
    if (!locationInput || !detectBtn) return;
    
    locationInput.value = '🕵️ Detecting your location...';
    detectBtn.innerHTML = '<div class="loading"></div>';
    detectBtn.disabled = true;
    
    if (!navigator.geolocation) {
        locationInput.value = '❌ Geolocation not supported';
        resetDetectButton();
        showNotification('📍 Please enter your location manually', 'error');
        return;
    }
    
    navigator.geolocation.getCurrentPosition(
        function(position) {
            userLocation = [
                position.coords.latitude,
                position.coords.longitude
            ];
            
            // Hapus marker lama jika ada
            if (userMarker && map) {
                map.removeLayer(userMarker);
            }
            
            // Buat marker baru untuk user
            userMarker = L.marker(userLocation, {
                icon: L.divIcon({
                    html: `
                        <div style="background: var(--gradient-primary); width: 40px; height: 40px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 25px var(--neon-blue); display: flex; align-items: center; justify-content: center; color: white; animation: pulse 2s infinite;">
                            <i class="fas fa-location-arrow"></i>
                        </div>
                    `,
                    className: 'user-location-marker',
                    iconSize: [40, 40]
                })
            }).addTo(map).bindPopup('Your Location 🎯');
            
            // Dapatkan nama lokasi
            getLocationName(userLocation[0], userLocation[1])
                .then(locationName => {
                    locationInput.value = `📍 ${locationName}`;
                })
                .catch(() => {
                    locationInput.value = `📍 Your Location (${userLocation[0].toFixed(4)}, ${userLocation[1].toFixed(4)})`;
                });
            
            // Zoom ke lokasi user
            if (map) {
                map.flyTo(userLocation, 13);
            }
            
            resetDetectButton();
            showNotification('✅ Location detected successfully!');
        },
        function(error) {
            locationInput.value = '❌ Failed to detect location';
            resetDetectButton();
            showNotification('📍 Please enter your location manually or enable location services', 'error');
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
    );
}

function resetDetectButton() {
    const detectBtn = document.getElementById('detect-location');
    if (detectBtn) {
        detectBtn.innerHTML = '<i class="fas fa-crosshairs"></i><span>Detect My Location</span>';
        detectBtn.disabled = false;
    }
}

async function getLocationName(lat, lng) {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
        const data = await response.json();
        return data.display_name ? data.display_name.split(',')[0] : 'Your Location';
    } catch {
        return `Location (${lat.toFixed(2)}, ${lng.toFixed(2)})`;
    }
}

function calculateRoute() {
    const destinationSelect = document.getElementById('destination');
    const destinationValue = destinationSelect ? destinationSelect.value : '';
    
    if (!userLocation) {
        showNotification('❌ Please set your location first!', 'error');
        return;
    }
    
    if (!destinationValue) {
        showNotification('❌ Please select a destination!', 'error');
        return;
    }
    
    const destinationCoords = destinationValue.split(',');
    if (destinationCoords.length !== 2) {
        showNotification('❌ Invalid destination coordinates!', 'error');
        return;
    }
    
    const destination = [
        parseFloat(destinationCoords[0]),
        parseFloat(destinationCoords[1])
    ];
    
    if (isNaN(destination[0]) || isNaN(destination[1])) {
        showNotification('❌ Invalid destination coordinates!', 'error');
        return;
    }
    
    // Fallback: tambahkan garis lurus
    drawFallbackRoute(userLocation, destination);
}

function drawFallbackRoute(start, end) {
    if (map && L.polyline) {
        // Hapus rute lama jika ada
        if (window.currentRouteLine && map.hasLayer(window.currentRouteLine)) {
            map.removeLayer(window.currentRouteLine);
        }
        
        // Buat polyline sebagai fallback
        const routeLine = L.polyline([start, end], {
            color: '#00d9ff',
            weight: 4,
            opacity: 0.7,
            dashArray: '10, 10'
        }).addTo(map);
        
        // Simpan referensi untuk di-clear nanti
        window.currentRouteLine = routeLine;
        
        // Zoom ke rute
        const bounds = L.latLngBounds([start, end]);
        map.fitBounds(bounds, {
            padding: [50, 50]
        });
        
        showNotification('🗺️ Showing direct path');
    }
}

function clearRoute() {
    // Hapus polyline fallback
    if (window.currentRouteLine && map) {
        map.removeLayer(window.currentRouteLine);
        window.currentRouteLine = null;
    }
    
    // Clear routing control if it exists
    if (routingControl && routingControl.setWaypoints) {
        routingControl.setWaypoints([]);
        const container = routingControl.getContainer();
        if (container && container.style) {
            container.style.display = 'none';
        }
    }
    
    showNotification('🗺️ Route cleared');
}

function showMapFallback() {
    const mapElement = document.getElementById('map');
    if (mapElement) {
        mapElement.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; background: var(--glass); border-radius: 15px; padding: 40px; text-align: center;">
                <i class="fas fa-map-marked-alt" style="font-size: 4rem; color: var(--neon-blue); margin-bottom: 20px;"></i>
                <h3 style="color: var(--text-primary); margin-bottom: 10px;">Interactive Map Loading</h3>
                <p style="color: var(--text-secondary); margin-bottom: 20px;">
                    The interactive map is temporarily unavailable. Here's a list of featured destinations:
                </p>
                <div style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center;">
                    ${lombokDestinations && Array.isArray(lombokDestinations) ? lombokDestinations.slice(0, 5).map(dest => `
                        <div style="background: var(--glass-dark); padding: 10px 15px; border-radius: 20px; border: 1px solid var(--border-color); color: var(--text-primary); font-size: 0.9rem;">
                            <i class="fas fa-map-marker-alt" style="color: var(--neon-blue);"></i> ${dest.name}
                        </div>
                    `).join('') : '<div>No destinations available</div>'}
                </div>
                <button onclick="initializeMap()" style="margin-top: 20px; background: var(--neon-blue); color: white; border: none; padding: 10px 20px; border-radius: 25px; cursor: pointer; font-weight: 600;">
                    <i class="fas fa-sync-alt"></i> Retry Loading Map
                </button>
            </div>
        `;
    }
}

// ==================== REVIEWS SYSTEM ====================
function initializeReviews() {
    const reviewsContainer = document.getElementById('reviews-list');
    if (!reviewsContainer) return;
    
    // Load existing reviews from localStorage
    const reviews = JSON.parse(localStorage.getItem('lombok-reviews')) || [
        {
            name: 'Alexandra',
            destination: 'Pantai Kuta Mandalika',
            rating: 5,
            comment: 'Absolutely stunning! The water was crystal clear and the sunset was magical. Highly recommend for sunset photography.',
            date: '2024-03-15'
        },
        {
            name: 'Rajendra',
            destination: 'Gunung Rinjani',
            rating: 4,
            comment: 'Challenging but rewarding hike. The view from the summit at sunrise is unforgettable. Make sure to bring warm clothes!',
            date: '2024-03-10'
        },
        {
            name: 'Sophie',
            destination: 'Pantai Pink',
            rating: 4,
            comment: 'Unique pink sand beach! Less crowded than expected. The color is most vibrant in the morning light.',
            date: '2024-03-05'
        }
    ];
    
    // Save initial reviews
    localStorage.setItem('lombok-reviews', JSON.stringify(reviews));
    
    // Display existing reviews
    displayReviews(reviews);
    
    // Setup review form
    setupReviewForm();
    
    // Rating stars interaction
    const stars = document.querySelectorAll('.star-rating .star');
    stars.forEach((star, index) => {
        star.addEventListener('click', function() {
            const rating = index + 1;
            const ratingValue = document.getElementById('rating-value');
            if (ratingValue) {
                ratingValue.value = rating;
            }
            updateStarDisplay(rating);
        });
    });
}

function setupReviewForm() {
    const reviewForm = document.getElementById('reviewForm');
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            submitReview();
        });
    }
}

function displayReviews(reviews) {
    const reviewsContainer = document.getElementById('reviews-list');
    if (!reviewsContainer) return;
    
    const savedLang = localStorage.getItem('lombok-language') || 'id';
    const trans = translations[savedLang];
    
    reviewsContainer.innerHTML = '';
    
    if (!reviews || !Array.isArray(reviews)) return;
    
    reviews.forEach(review => {
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card animate-on-scroll';
        reviewCard.style.cssText = `
            background: var(--card-bg);
            padding: 25px;
            border-radius: 16px;
            border: 1px solid var(--border-color);
            margin-bottom: 20px;
        `;
        
        reviewCard.innerHTML = `
            <div style="display: flex; align-items: center; margin-bottom: 15px;">
                <div style="width: 50px; height: 50px; border-radius: 50%; background: linear-gradient(45deg, var(--neon-blue), var(--vibrant-pink)); display: flex; align-items: center; justify-content: center; margin-right: 15px; font-weight: 800; color: white; font-size: 1.2rem;">
                    ${review.name ? review.name.charAt(0) : 'U'}
                </div>
                <div style="flex: 1;">
                    <h4 style="margin: 0; color: var(--text-primary);">${review.name || 'Anonymous'}</h4>
                    <div style="color: var(--text-secondary); font-size: 0.9rem;">
                        ${review.destination || 'Unknown'} • ${review.date ? new Date(review.date).toLocaleDateString('id-ID', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                        }) : 'Unknown date'}
                    </div>
                </div>
                <div style="color: var(--cyber-yellow); font-size: 1.2rem;">
                    ${generateStarRating(review.rating || 0)}
                </div>
            </div>
            <div style="color: var(--text-primary); line-height: 1.6;">
                ${review.comment || 'No comment'}
            </div>
            <div style="display: flex; gap: 10px; margin-top: 15px;">
                <button class="like-btn" style="background: var(--glass); border: 1px solid var(--border-color); color: var(--text-secondary); padding: 6px 15px; border-radius: 20px; cursor: pointer; font-size: 0.8rem;">
                    <i class="fas fa-thumbs-up"></i> ${trans?.helpful || 'Helpful'}
                </button>
                <button class="share-btn" style="background: var(--glass); border: 1px solid var(--border-color); color: var(--text-secondary); padding: 6px 15px; border-radius: 20px; cursor: pointer; font-size: 0.8rem;">
                    <i class="fas fa-share"></i> ${trans?.share || 'Share'}
                </button>
            </div>
        `;
        
        reviewsContainer.appendChild(reviewCard);
    });
    
    initializeScrollAnimations();
}

function updateStarDisplay(rating) {
    const stars = document.querySelectorAll('.star-rating .star');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.style.color = 'var(--cyber-yellow)';
        } else {
            star.style.color = 'var(--border-color)';
        }
    });
}

function submitReview() {
    const nameInput = document.getElementById('reviewer-name');
    const destinationSelect = document.getElementById('destination-select');
    const ratingInput = document.getElementById('rating-value');
    const commentInput = document.getElementById('review-text');
    
    if (!nameInput || !destinationSelect || !ratingInput || !commentInput) {
        showNotification('❌ Review form elements not found', 'error');
        return;
    }
    
    const name = nameInput.value.trim();
    const destination = destinationSelect.value;
    const rating = parseInt(ratingInput.value);
    const comment = commentInput.value.trim();
    
    if (!name || !destination || !rating || !comment) {
        showNotification('❌ Please fill in all fields!', 'error');
        return;
    }
    
    if (comment.length < 10) {
        showNotification('❌ Review comment is too short!', 'error');
        return;
    }
    
    const newReview = {
        name: name,
        destination: destination,
        rating: rating,
        comment: comment,
        date: new Date().toISOString().split('T')[0]
    };
    
    // Save to localStorage
    const reviews = JSON.parse(localStorage.getItem('lombok-reviews')) || [];
    reviews.unshift(newReview);
    localStorage.setItem('lombok-reviews', JSON.stringify(reviews));
    
    // Clear form
    nameInput.value = '';
    destinationSelect.value = '';
    ratingInput.value = '0';
    commentInput.value = '';
    updateStarDisplay(0);
    
    // Update display
    displayReviews(reviews);
    
    showNotification('✅ Thank you for your review!');
}

// ==================== FILTER SYSTEM ====================
function setupFilters() {
    const searchInput = document.getElementById('destination-search');
    const categoryFilter = document.getElementById('categoryFilter');
    const regionFilter = document.getElementById('region-filter');
    const trafficFilter = document.getElementById('traffic-filter');
    
    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            filterDestinations();
        });
    }
    
    // Category buttons filter
    if (categoryFilter) {
        categoryFilter.addEventListener('click', function(e) {
            if (e.target.closest('.category-btn')) {
                const button = e.target.closest('.category-btn');
                const category = button.getAttribute('data-category');
                filterDestinations(category);
            }
        });
    }
    
    // Region filter change
    if (regionFilter) {
        regionFilter.addEventListener('change', function() {
            loadStatistics();
        });
    }
    
    // Traffic filter change
    if (trafficFilter) {
        trafficFilter.addEventListener('change', function() {
            loadStatistics();
        });
    }
}

function filterDestinations(selectedCategory = 'all') {
    const searchInput = document.getElementById('destination-search');
    const destinationGrid = document.getElementById('destination-grid');
    
    if (!searchInput || !destinationGrid) return;
    
    const searchTerm = searchInput.value.toLowerCase();
    
    // Update active button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Set the clicked button as active
    const activeBtn = document.querySelector(`.category-btn[data-category="${selectedCategory}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
    
    // Check if destinations exist
    if (!lombokDestinations || !Array.isArray(lombokDestinations)) {
        destinationGrid.innerHTML = '<p>No destinations available</p>';
        return;
    }
    
    const filteredDestinations = lombokDestinations.filter(dest => {
        // Filter by search term
        const matchesSearch = searchTerm === '' || 
            (dest.name && dest.name.toLowerCase().includes(searchTerm)) ||
            (getRegionName(dest.region) && getRegionName(dest.region).toLowerCase().includes(searchTerm));
        
        // Filter by category/region
        let matchesCategory = true;
        if (selectedCategory !== 'all') {
            matchesCategory = dest.region === selectedCategory;
        }
        
        return matchesSearch && matchesCategory;
    });
    
    // Update display
    destinationGrid.innerHTML = '';
    
    const savedLang = localStorage.getItem('lombok-language') || 'id';
    const trans = translations[savedLang];
    
    if (filteredDestinations.length === 0) {
        destinationGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px;">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--text-secondary); margin-bottom: 15px;"></i>
                <h3 style="color: var(--text-primary);">${trans?.no_results || 'No destinations found'}</h3>
                <p style="color: var(--text-secondary);">${trans?.try_again || 'Try different keywords or categories'}</p>
            </div>
        `;
    } else {
        filteredDestinations.forEach((dest, index) => {
            const card = createDestinationCard(dest, index);
            destinationGrid.appendChild(card);
        });
    }
}

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Lombok Live Dashboard Initializing...');
    
    try {
        // Initialize semua sistem - URUTAN PENTING!
        initializeTheme();
        initializeLanguage();  // HARUS dipanggil SETELAH initializeTheme()
        initializeNavigation();
        initializeParticles();
        initializeDestinations();
        setupFilters();
        initializeReviews();
        
        // Initialize destination statistics
        if (typeof initializeDestinationStats === 'function') {
            initializeDestinationStats();
        }
        
        // Load initial statistics
        setTimeout(() => {
            loadStatistics();
        }, 500);
        
        // Initialize map setelah delay
        setTimeout(() => {
            initializeMap();
        }, 1000);
        
        // Setup auto-refresh
        setInterval(loadStatistics, 60000);
        
        console.log('✅ Lombok Live Dashboard Initialized Successfully!');
        
        // Show welcome notification dalam bahasa yang dipilih
        setTimeout(() => {
            const savedLang = localStorage.getItem('lombok-language') || 'id';
            const welcomeMessages = {
                id: '🌴 Selamat datang di Lombok Live Dashboard! Jelajahi 170+ destinasi secara real-time.',
                en: '🌴 Welcome to Lombok Live Dashboard! Explore 170+ destinations in real-time.',
                fr: '🌴 Bienvenue sur le Tableau de Bord Live Lombok ! Explorez 170+ destinations en temps réel.',
                de: '🌴 Willkommen beim Lombok Live-Dashboard! Erkunden Sie 170+ Ziele in Echtzeit.',
                ja: '🌴 ロンボクライブダッシュボードへようこそ！170以上の目的地をリアルタイムで探索しましょう。',
                ko: '🌴 롬복 실시간 대시보드에 오신 것을 환영합니다! 170개 이상의 목적지를 실시간으로 탐험하세요。',
                ru: '🌴 Добро пожаловать в Живую Панель Ломбока! Исследуйте 170+ направлений в реальном времени。'
            };
            
            const message = welcomeMessages[savedLang] || welcomeMessages['en'];
            showNotification(message);
        }, 2000);
        
    } catch (error) {
        console.error('Initialization error:', error);
        showNotification('⚠️ Error initializing dashboard. Please refresh the page.', 'error');
    }
});
