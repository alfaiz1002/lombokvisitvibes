// ==================== GLOBAL VARIABLES ====================
let map, routingControl, userLocation, userMarker;
let trafficCircles = [];
let currentTransportMode = 'car';
let statsUpdateInterval;

// ==================== HELPER FUNCTIONS ====================
function getRegionName(region) {
    const regionNames = {
        'lombok-tengah': 'Central Lombok',
        'lombok-barat': 'West Lombok', 
        'lombok-timur': 'East Lombok',
        'lombok-utara': 'North Lombok',
        'kota-mataram': 'Mataram City'
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
    const languageSelect = document.getElementById('languageSelect');
    const savedLanguage = localStorage.getItem('lombok-language') || 'id';
    languageSelect.value = savedLanguage;
    updateLanguage(savedLanguage);
    
    languageSelect.addEventListener('change', function() {
        const selectedLanguage = this.value;
        localStorage.setItem('lombok-language', selectedLanguage);
        updateLanguage(selectedLanguage);
    });
}

function updateLanguage(language) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language] && translations[language][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[language][key];
            } else {
                element.textContent = translations[language][key];
            }
        }
    });
}

// ==================== NAVIGATION ====================
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.innerHTML = navLinks.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                navLinks.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
}

// ==================== DESTINATIONS DISPLAY ====================
async function initializeDestinations() {
    const destinationGrid = document.getElementById('destination-grid');
    
    // Show skeleton loading
    destinationGrid.innerHTML = createSkeletonGrid();

    // Simulate loading delay
    setTimeout(() => {
        // Clear loading
        destinationGrid.innerHTML = '';
        
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
    
    const categoryColors = {
        'beach': '#00d9ff',
        'mountain': '#ff2a6d',
        'waterfall': '#3498db',
        'nature': '#7cfc00',
        'culture': '#9d4edd',
        'culinary': '#ff6b35'
    };
    
    const color = categoryColors[destination.category] || '#95a5a6';
    
    card.innerHTML = `
        <div class="destination-image">
            <img src="${destination.image || getDefaultImageByCategory(destination.category)}" 
                 alt="${destination.name}" 
                 loading="lazy"
                 onerror="this.src='${getDefaultImageByCategory(destination.category)}'">
            <div class="category-badge" style="background: ${color}; position: absolute; top: 15px; right: 15px; padding: 6px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 600; color: white; text-transform: capitalize;">
                ${destination.category}
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
                <div class="price">${destination.price || 'Free'}</div>
            </div>
            
            <div class="destination-tags" style="display: flex; gap: 8px; margin-bottom: 15px; flex-wrap: wrap;">
                <span class="tag" style="background: ${color}; padding: 4px 12px; border-radius: 15px; font-size: 0.8rem; color: white; font-weight: 600;">${destination.category}</span>
                <span class="tag" style="background: var(--glass); padding: 4px 12px; border-radius: 15px; font-size: 0.8rem; color: var(--text-secondary); font-weight: 600;">${getRegionName(destination.region)}</span>
            </div>
            
            <div class="destination-details">
                <div class="detail-item">
                    <i class="fas fa-clock"></i>
                    <span>${destination.hours || '08:00 - 18:00'}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${getRegionName(destination.region)}</span>
                </div>
            </div>
            
            <button class="btn btn-small view-on-map" style="margin-top: 20px; width: 100%;">
                <i class="fas fa-map-marker-alt"></i>
                <span>View on Map & Directions</span>
            </button>
        </div>
    `;
    
    // Add event listener
    card.querySelector('.view-on-map').addEventListener('click', function(e) {
        e.preventDefault();
        const location = card.getAttribute('data-location');
        const name = card.getAttribute('data-name');
        
        document.getElementById('destination').value = location;
        document.getElementById('map-section').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
        
        const [lat, lng] = location.split(',').map(coord => parseFloat(coord));
        if (map) {
            map.flyTo([lat, lng], 13);
        }
        
        showNotification(`📍 ${name} selected! Set your location and click "Get Directions"`);
    });
    
    return card;
}

function updateDestinationDropdowns() {
    const destinationSelect = document.getElementById('destination');
    const reviewDestinationSelect = document.getElementById('destination-select');
    
    // Clear existing options except first
    while (destinationSelect.options.length > 1) {
        destinationSelect.remove(1);
    }
    while (reviewDestinationSelect.options.length > 1) {
        reviewDestinationSelect.remove(1);
    }
    
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
        const trafficData = await mockAPI.getAllDestinationsTraffic();
        const regionFilter = document.getElementById('region-filter').value;
        const trafficFilter = document.getElementById('traffic-filter').value;
        
        let filteredData = trafficData;
        
        if (regionFilter !== 'all') {
            filteredData = filteredData.filter(dest => {
                const destination = lombokDestinations.find(d => d.id === dest.id);
                return destination?.region === regionFilter;
            });
        }
        
        if (trafficFilter !== 'all') {
            filteredData = filteredData.filter(dest => 
                dest.trafficLevel.level === trafficFilter
            );
        }
        
        displayStatsCards(filteredData);
        updateStatsSummary(filteredData);
        
    } catch (error) {
        console.error('Error loading statistics:', error);
    }
}

function displayStatsCards(destinations) {
    const statsGrid = document.getElementById('stats-grid');
    statsGrid.innerHTML = '';
    
    if (destinations.length === 0) {
        statsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px;">
                <i class="fas fa-chart-bar" style="font-size: 3rem; color: var(--text-secondary); margin-bottom: 15px;"></i>
                <h3 style="color: var(--text-primary);">No data available</h3>
                <p style="color: var(--text-secondary);">Try changing your filters</p>
            </div>
        `;
        return;
    }
    
    destinations.forEach(dest => {
        const destinationInfo = lombokDestinations.find(d => d.id === dest.id);
        const traffic = dest.trafficLevel;
        
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
        
        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px;">
                <h4 style="margin: 0; color: var(--text-primary); font-size: 1.1rem;">${destinationInfo?.name || dest.name}</h4>
                <span class="traffic-badge ${traffic.level}" style="background: ${traffic.color};">
                    ${traffic.icon} ${traffic.label}
                </span>
            </div>
            
            <div style="display: flex; align-items: center; margin-bottom: 15px;">
                <div style="flex: 1; margin-right: 15px;">
                    <div style="font-size: 2rem; font-weight: 800; color: ${traffic.color};">${dest.currentVisitors}</div>
                    <div style="color: var(--text-secondary); font-size: 0.8rem;">Current Visitors</div>
                </div>
                <div style="width: 60px; height: 60px;">
                    <div style="width: 100%; height: 100%; border-radius: 50%; background: conic-gradient(
                        ${traffic.color} 0% ${Math.min(dest.currentVisitors, 100)}%,
                        var(--glass) ${Math.min(dest.currentVisitors, 100)}% 100%
                    ); display: flex; align-items: center; justify-content: center; color: white; font-weight: 700;">
                        ${Math.min(dest.currentVisitors, 100)}%
                    </div>
                </div>
            </div>
            
            <div style="color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 15px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                    <span><i class="fas fa-map-marker-alt"></i> ${getRegionName(destinationInfo?.region)}</span>
                    <span><i class="fas fa-tag"></i> ${destinationInfo?.category || 'Unknown'}</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span><i class="fas fa-clock"></i> ${new Date(dest.lastUpdated).toLocaleTimeString()}</span>
                    <span><i class="fas fa-users"></i> Capacity</span>
                </div>
            </div>
            
            <div class="traffic-progress">
                <div class="traffic-fill" style="background: ${traffic.color}; width: ${Math.min(dest.currentVisitors, 100)}%;"></div>
            </div>
            
            <div style="display: flex; gap: 10px;">
                <button class="view-on-map-btn" style="flex: 2; background: var(--neon-blue); color: white; border: none; padding: 8px 16px; border-radius: 20px; cursor: pointer; font-size: 0.8rem; font-weight: 600;">
                    <i class="fas fa-map-marker-alt"></i> View on Map
                </button>
                <button class="record-visit-btn" style="flex: 1; background: var(--glass); color: var(--text-primary); border: 1px solid var(--border-color); padding: 8px; border-radius: 20px; cursor: pointer; font-size: 0.8rem; font-weight: 600;">
                    <i class="fas fa-user-plus"></i> Check-in
                </button>
            </div>
        `;
        
        card.querySelector('.view-on-map-btn').addEventListener('click', function(e) {
            e.stopPropagation();
            centerOnDestination(dest);
        });
        
        card.querySelector('.record-visit-btn').addEventListener('click', function(e) {
            e.stopPropagation();
            recordVisit(dest.id);
        });
        
        card.addEventListener('click', function() {
            showDestinationDetail(dest.id);
        });
        
        statsGrid.appendChild(card);
    });
}

function updateStatsSummary(destinations) {
    const totalVisitors = destinations.reduce((sum, dest) => sum + dest.currentVisitors, 0);
    const avgTraffic = destinations.length > 0 ? Math.round(totalVisitors / destinations.length) : 0;
    
    let mostCrowded = null;
    let leastCrowded = null;
    
    if (destinations.length > 0) {
        mostCrowded = destinations.reduce((max, dest) => 
            dest.currentVisitors > max.currentVisitors ? dest : max
        );
        leastCrowded = destinations.reduce((min, dest) => 
            dest.currentVisitors < min.currentVisitors ? dest : min
        );
    }
    
    document.getElementById('total-visitors').textContent = totalVisitors.toLocaleString();
    document.getElementById('avg-traffic').textContent = avgTraffic;
    document.getElementById('most-crowded').textContent = mostCrowded ? 
        `${mostCrowded.currentVisitors}` : '-';
    document.getElementById('least-crowded').textContent = leastCrowded ? 
        `${leastCrowded.currentVisitors}` : '-';
}

function centerOnDestination(destination) {
    if (map) {
        map.flyTo([destination.lat, destination.lng], 14, {
            duration: 1,
            easeLinearity: 0.25
        });
        
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
        const result = await mockAPI.recordVisit(destinationId);
        showNotification('✅ Check-in recorded! Visitor count updated.');
        
        loadStatistics();
        updateTrafficHeatmap();
        
    } catch (error) {
        showNotification('❌ Failed to record check-in', 'error');
    }
}

function showDestinationDetail(destinationId) {
    const dest = lombokDestinations.find(d => d.id === destinationId);
    if (dest) {
        alert(`Detail for ${dest.name}\n\nCategory: ${dest.category}\nRegion: ${getRegionName(dest.region)}\nPrice: ${dest.price || 'Free'}\nHours: ${dest.hours || '24/7'}`);
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
            const traffic = destination.trafficLevel;
            
            if (traffic.level === 'low') lowCount++;
            if (traffic.level === 'high' || traffic.level === 'very-high') highCount++;
            
            if (map && destination.lat && destination.lng) {
                const circle = L.circle([destination.lat, destination.lng], {
                    color: traffic.color,
                    fillColor: traffic.color,
                    fillOpacity: 0.4,
                    radius: calculateCircleRadius(destination.currentVisitors),
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
    return `
        <div style="background: var(--glass-dark); padding: 15px; border-radius: 12px; border: 1px solid var(--border-color); min-width: 220px; backdrop-filter: blur(20px);">
            <h4 style="margin: 0 0 8px 0; color: ${traffic.color}; font-size: 1.1rem;">
                ${traffic.icon} ${destination.name}
            </h4>
            <div style="color: var(--text-primary); margin-bottom: 8px;">
                <strong>Status:</strong> ${traffic.label}
            </div>
            <div style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 8px;">
                <strong>Pengunjung saat ini:</strong> ${destination.currentVisitors} orang<br>
                <strong>Terakhir update:</strong> ${new Date(destination.lastUpdated).toLocaleTimeString()}
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
        // Inisialisasi peta dengan view Lombok
        map = L.map('map', {
            zoomControl: false,
            attributionControl: false
        }).setView([-8.6500, 116.3167], 9);
        
        // Tambahkan tile layer OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 20
        }).addTo(map);
        
        // Tambahkan kontrol zoom
        L.control.zoom({
            position: 'bottomright'
        }).addTo(map);
        
        // Tambahkan marker destinasi
        addDestinationMarkers();
        
        // Inisialisasi routing control (FIXED)
        try {
            // Pastikan Leaflet.Routing tersedia
            if (typeof L.Routing !== 'undefined') {
                routingControl = L.Routing.control({
                    waypoints: [],
                    routeWhileDragging: false,
                    showAlternatives: false,
                    lineOptions: {
                        styles: [{color: '#00d9ff', opacity: 0.8, weight: 6}]
                    },
                    createMarker: function() { return null; },
                    show: false,
                    router: L.Routing.osrmv1({
                        serviceUrl: 'https://router.project-osrm.org/route/v1'
                    })
                }).addTo(map);
                
                // Sembunyikan container routing
                const routingContainer = routingControl.getContainer();
                if (routingContainer) {
                    routingContainer.style.display = 'none';
                }
            } else {
                console.log('Leaflet Routing Machine not available, using fallback');
                routingControl = {
                    setWaypoints: function() { 
                        showNotification('🗺️ Route calculation available in full version'); 
                    },
                    getContainer: function() {
                        return { style: { display: 'none' } };
                    }
                };
            }
        } catch (error) {
            console.log('Routing initialized in fallback mode:', error);
            routingControl = {
                setWaypoints: function() { 
                    showNotification('🗺️ Showing direct path'); 
                },
                getContainer: function() {
                    return { style: { display: 'none' } };
                }
            };
        }
        
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

function addDestinationMarkers() {
    const categoryColors = {
        'beach': '#00d9ff', 'mountain': '#ff2a6d', 'waterfall': '#3498db',
        'nature': '#7cfc00', 'culture': '#9d4edd', 'culinary': '#ff6b35'
    };

    const categoryIcons = {
        'beach': 'umbrella-beach', 'mountain': 'mountain', 'waterfall': 'water',
        'nature': 'tree', 'culture': 'landmark', 'culinary': 'utensils'
    };

    // Tambahkan maksimal 50 marker untuk performa
    const maxMarkers = 50;
    const destinationsToShow = lombokDestinations.slice(0, maxMarkers);
    
    destinationsToShow.forEach(dest => {
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
                    document.getElementById('destination').value = `${dest.lat},${dest.lng}`;
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
    document.getElementById('detect-location').addEventListener('click', detectUserLocation);
    
    // Route calculation
    document.getElementById('calculate-route').addEventListener('click', calculateRoute);
    
    // Clear route
    document.getElementById('clear-route').addEventListener('click', clearRoute);
    
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
                
                document.getElementById('destination').value = location;
                
                // Scroll ke map section
                const mapSection = document.getElementById('map-section');
                if (mapSection) {
                    mapSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                
                const [lat, lng] = location.split(',').map(coord => parseFloat(coord));
                if (map) {
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
    
    locationInput.value = '🕵️ Detecting your location...';
    detectBtn.innerHTML = '<div class="loading"></div>';
    detectBtn.disabled = true;
    
    if (!navigator.geolocation) {
        locationInput.value = '❌ Geolocation not supported';
        resetDetectButton();
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
        return data.display_name.split(',')[0] || 'Your Location';
    } catch {
        return `Location (${lat.toFixed(2)}, ${lng.toFixed(2)})`;
    }
}

function calculateRoute() {
    const destinationSelect = document.getElementById('destination');
    const destinationValue = destinationSelect.value;
    
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
    
    // Coba gunakan routing control jika tersedia
    if (routingControl && routingControl.setWaypoints) {
        try {
            // Tampilkan container routing
            const container = routingControl.getContainer();
            if (container && container.style) {
                container.style.display = 'block';
            }
            
            // Set waypoints
            routingControl.setWaypoints([
                L.latLng(userLocation[0], userLocation[1]),
                L.latLng(destination[0], destination[1])
            ]);
            
            // Zoom ke rute
            if (map) {
                const bounds = L.latLngBounds([userLocation, destination]);
                map.fitBounds(bounds, {
                    padding: [50, 50]
                });
            }
            
            showNotification('✅ Route calculated successfully!');
            
        } catch (error) {
            console.error('Routing error:', error);
            // Fallback: tambahkan garis lurus
            drawFallbackRoute(userLocation, destination);
        }
    } else {
        // Fallback routing
        drawFallbackRoute(userLocation, destination);
    }
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
    // Hapus routing control
    if (routingControl && routingControl.setWaypoints) {
        routingControl.setWaypoints([]);
        const container = routingControl.getContainer();
        if (container && container.style) {
            container.style.display = 'none';
        }
    }
    
    // Hapus polyline fallback
    if (window.currentRouteLine && map) {
        map.removeLayer(window.currentRouteLine);
        window.currentRouteLine = null;
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
                    ${lombokDestinations.slice(0, 5).map(dest => `
                        <div style="background: var(--glass-dark); padding: 10px 15px; border-radius: 20px; border: 1px solid var(--border-color); color: var(--text-primary); font-size: 0.9rem;">
                            <i class="fas fa-map-marker-alt" style="color: var(--neon-blue);"></i> ${dest.name}
                        </div>
                    `).join('')}
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
    const submitReviewBtn = document.getElementById('submit-review');
    const reviewsContainer = document.getElementById('reviews-list');
    
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
    
    if (submitReviewBtn) {
        submitReviewBtn.addEventListener('click', submitReview);
    }
    
    // Rating stars interaction
    const stars = document.querySelectorAll('.star-rating .star');
    stars.forEach((star, index) => {
        star.addEventListener('click', function() {
            const rating = index + 1;
            document.getElementById('rating-value').value = rating;
            updateStarDisplay(rating);
        });
    });
}

function displayReviews(reviews) {
    const reviewsContainer = document.getElementById('reviews-list');
    if (!reviewsContainer) return;
    
    reviewsContainer.innerHTML = '';
    
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
                    ${review.name.charAt(0)}
                </div>
                <div style="flex: 1;">
                    <h4 style="margin: 0; color: var(--text-primary);">${review.name}</h4>
                    <div style="color: var(--text-secondary); font-size: 0.9rem;">
                        ${review.destination} • ${new Date(review.date).toLocaleDateString('id-ID', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                        })}
                    </div>
                </div>
                <div style="color: var(--cyber-yellow); font-size: 1.2rem;">
                    ${generateStarRating(review.rating)}
                </div>
            </div>
            <div style="color: var(--text-primary); line-height: 1.6;">
                ${review.comment}
            </div>
            <div style="display: flex; gap: 10px; margin-top: 15px;">
                <button class="like-btn" style="background: var(--glass); border: 1px solid var(--border-color); color: var(--text-secondary); padding: 6px 15px; border-radius: 20px; cursor: pointer; font-size: 0.8rem;">
                    <i class="fas fa-thumbs-up"></i> Helpful
                </button>
                <button class="share-btn" style="background: var(--glass); border: 1px solid var(--border-color); color: var(--text-secondary); padding: 6px 15px; border-radius: 20px; cursor: pointer; font-size: 0.8rem;">
                    <i class="fas fa-share"></i> Share
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
    
    if (!nameInput || !destinationSelect || !ratingInput || !commentInput) return;
    
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
    const categoryFilter = document.getElementById('category-filter');
    const regionFilter = document.getElementById('region-filter');
    const trafficFilter = document.getElementById('traffic-filter');
    
    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', filterDestinations);
    }
    
    // Filter changes
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterDestinations);
    }
    
    if (regionFilter) {
        regionFilter.addEventListener('change', loadStatistics);
    }
    
    if (trafficFilter) {
        trafficFilter.addEventListener('change', loadStatistics);
    }
    
    // Category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterDestinations();
        });
    });
}

function filterDestinations() {
    const searchInput = document.getElementById('destination-search');
    const categoryFilter = document.querySelector('.category-btn.active');
    const destinationGrid = document.getElementById('destination-grid');
    
    if (!searchInput || !categoryFilter || !destinationGrid) return;
    
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.getAttribute('data-category');
    
    const filteredDestinations = lombokDestinations.filter(dest => {
        const matchesSearch = dest.name.toLowerCase().includes(searchTerm) ||
                             getRegionName(dest.region).toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || dest.region === selectedCategory;
        
        return matchesSearch && matchesCategory;
    });
    
    // Update display
    destinationGrid.innerHTML = '';
    filteredDestinations.forEach((dest, index) => {
        const card = createDestinationCard(dest, index);
        destinationGrid.appendChild(card);
    });
    
    if (filteredDestinations.length === 0) {
        destinationGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px;">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--text-secondary); margin-bottom: 15px;"></i>
                <h3 style="color: var(--text-primary);">No destinations found</h3>
                <p style="color: var(--text-secondary);">Try a different search term or category</p>
            </div>
        `;
    }
}

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Lombok Live Dashboard Initializing...');
    
    try {
        // Initialize semua sistem
        initializeTheme();
        initializeLanguage();
        initializeNavigation();
        initializeParticles();
        initializeDestinations();
        setupFilters();
        initializeReviews();
        
        // Initialize statistics dengan mock data
        if (typeof initializeDestinationStats === 'function') {
            initializeDestinationStats();
        }
        
        // Load initial statistics
        loadStatistics();
        
        // Initialize map setelah delay
        setTimeout(() => {
            initializeMap();
        }, 1000);
        
        // Setup auto-refresh
        setInterval(loadStatistics, 60000);
        
        console.log('✅ Lombok Live Dashboard Initialized Successfully!');
        
        // Show welcome notification
        setTimeout(() => {
            showNotification('🌴 Welcome to Lombok Live Dashboard! Explore 170+ destinations in real-time.');
        }, 1500);
        
    } catch (error) {
        console.error('Initialization error:', error);
        showNotification('⚠️ Error initializing dashboard. Please refresh the page.', 'error');
    }
});