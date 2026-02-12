// ============================================
// CONFIGURACIÓN - GOOGLE APPS SCRIPT
// ============================================

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzrhy4aaR57NUDWPYbdyUtI2S-egEIsj8iS8RJEapaBM6CUCv3XFx5-qa_PXQX-jrfmuw/exec';

// ============================================
// FONDOS DE ANIME PARA TARJETAS
// ============================================

const ANIME_BACKGROUNDS = [
    'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400',
    'https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=400',
    'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400',
    'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400',
    'https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=400',
    'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400',
    'https://images.unsplash.com/photo-1613521830650-e7e98e2f3a91?w=400',
    'https://images.unsplash.com/photo-1542596594-649edbc13630?w=400',
    'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=400',
    'https://images.unsplash.com/photo-1601814933824-fd0b574dd592?w=400'
];

function getAnimeBackground(index) {
    return ANIME_BACKGROUNDS[index % ANIME_BACKGROUNDS.length];
}

// ============================================
// CONFIGURACIÓN DE FOTOS
// ============================================

function getNombreFoto(nombreCompleto) {
    const sinAcentos = nombreCompleto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
    
    const partes = sinAcentos.split(' ').filter(p => p.length > 0);
    
    // Manejar casos especiales de apellidos compuestos
    if (sinAcentos.includes('de la ossa')) {
        return 'fotos/julio-ossa';
    }
    if (sinAcentos.includes('del valle')) {
        return 'fotos/marlon-valle';
    }
    if (sinAcentos.includes('del carmen')) {
        const primerNombre = partes[0];
        const apellidoDespuesDelCarmen = partes.findIndex(p => p === 'carmen') + 1;
        if (apellidoDespuesDelCarmen < partes.length) {
            return `fotos/${primerNombre}-${partes[apellidoDespuesDelCarmen]}`;
        }
    }
    
    // Caso normal: primer nombre + primer apellido
    if (partes.length >= 2) {
        const primerNombre = partes[0];
        const primerApellido = partes[partes.length - 2];
        return `fotos/${primerNombre}-${primerApellido}`;
    }
    return `fotos/${partes[0]}`;
}

// ============================================
// DATOS INICIALES
// ============================================

let competidores = [
    { nombre: "Adriana Milena Martinez Centanaro", afiliados: 0 },
    { nombre: "Alma Cecilia Palacio Alvarez", afiliados: 0 },
    { nombre: "Anabel Sanchez Osorio", afiliados: 0 },
    { nombre: "Andres Alfonso Herazo Atencia", afiliados: 0 },
    { nombre: "Andres Mauricio Vergara Fernandez", afiliados: 0 },
    { nombre: "Candelaria Sofia Ochoa Villa", afiliados: 0 },
    { nombre: "Carlos Mario Pascuales Martinez", afiliados: 0 },
    { nombre: "Deison José Montes Barreto", afiliados: 0 },
    { nombre: "Diana Patricia Trespalacio Cervantes", afiliados: 0 },
    { nombre: "Dubis Cristina Lora Mulett", afiliados: 0 },
    { nombre: "Edison Alfredo Montes Santos", afiliados: 0 },
    { nombre: "Edith Burgas Rivero Mercado", afiliados: 0 },
    { nombre: "Elcy Sofia Portillo Gomez", afiliados: 0 },
    { nombre: "Ella Stella Guevara Arrieta", afiliados: 0 },
    { nombre: "Eugenio Antonio Calderón Barreto", afiliados: 0 },
    { nombre: "Fabian Enrique Herrera Zabala", afiliados: 0 },
    { nombre: "Griselda Jimenez Ricardo", afiliados: 0 },
    { nombre: "Herman Enrique Garcia Amador", afiliados: 0 },
    { nombre: "Javier David Rivera Mendez", afiliados: 0 },
    { nombre: "Jelen Patricia Rodriguez Acuña", afiliados: 0 },
    { nombre: "Jorge Luis Osorio Herrera", afiliados: 0 },
    { nombre: "José Joaquin Bitar Gonzalez", afiliados: 0 },
    { nombre: "Julio José De la Ossa Franco", afiliados: 0 },
    { nombre: "Julio Alberto Moralez Martinez", afiliados: 0 },
    { nombre: "Karina Rincón Betruz", afiliados: 0 },
    { nombre: "Keyla Patricia Quessep Santos", afiliados: 0 },
    { nombre: "Leidys Milena Tejada Bettin", afiliados: 0 },
    { nombre: "Loannys Maria Ortega Alemán", afiliados: 0 },
    { nombre: "Lucila Perez Narvaez", afiliados: 0 },
    { nombre: "Maira Luz Vargas Meza", afiliados: 0 },
    { nombre: "Maria Bernarda Gonzalez Tamara", afiliados: 0 },
    { nombre: "Maria Claudia Merlano Marino", afiliados: 0 },
    { nombre: "Marlon Fabian Del Valle Castillo", afiliados: 0 },
    { nombre: "Mayra Alejandra Perez Paternina", afiliados: 0 },
    { nombre: "Melissa Calderon Arrieta", afiliados: 0 },
    { nombre: "Nelcy De Jesús Mercado Vargas", afiliados: 0 },
    { nombre: "Oriana Paulina Franco Ordoñez", afiliados: 0 },
    { nombre: "Paola Andrea Diaz Hernandez", afiliados: 0 },
    { nombre: "Rafael Gregorio Calderon Arrieta", afiliados: 0 },
    { nombre: "Reynel Rubiel Ruiz Pacheco", afiliados: 0 },
    { nombre: "Ricardo Parody Narvaez", afiliados: 0 },
    { nombre: "Rosa Maria Gomez Bertel", afiliados: 0 },
    { nombre: "Sandra Milena Martinez Lopez", afiliados: 0 },
    { nombre: "Tania Elizabeth Lenis Suarez", afiliados: 0 },
    { nombre: "Viviana Quessep Tapias", afiliados: 0 },
    { nombre: "Willyam Gregorio Tirado Acosta", afiliados: 0 },
    { nombre: "Xiamir Salcedo Monterroza", afiliados: 0 },
    { nombre: "Yajaira Cecilia Acosta Diaz", afiliados: 0 },
    { nombre: "Zulis Margoth Hernandez Mercado", afiliados: 0 },
    { nombre: "Sandra Marcela Causado Meza", afiliados: 0 }
];

// ============================================
// VARIABLES GLOBALES
// ============================================

let musicMuted = false;
let usingYouTube = true; // Por defecto intentamos YouTube
let youtubeReady = false;
const musicToggle = document.getElementById('musicToggle');
const bgMusicYouTube = document.getElementById('bgMusicYouTube');
const bgMusicLocal = document.getElementById('bgMusicLocal');
const landingPage = document.getElementById('landingPage');
const sectionsContainer = document.getElementById('sectionsContainer');
const homeBtn = document.getElementById('homeBtn');

// ============================================
// ANIMACIÓN DE ENTRADA
// ============================================

function initIntroAnimation() {
    const introOverlay = document.getElementById('introOverlay');
    
    setTimeout(() => {
        if (introOverlay) {
            introOverlay.classList.add('fade-out');
            setTimeout(() => {
                introOverlay.style.display = 'none';
            }, 800);
        }
    }, 4500);
}

// ============================================
// NAVEGACIÓN - LANDING PAGE
// ============================================

function initLandingNavigation() {
    const landingBtns = document.querySelectorAll('.landing-tab-btn');
    
    landingBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const section = btn.getAttribute('data-section');
            
            // Ocultar landing page
            landingPage.classList.add('fade-out');
            
            setTimeout(() => {
                landingPage.style.display = 'none';
                sectionsContainer.style.display = 'block';
                sectionsContainer.classList.add('fade-in');
                
                // Activar la sección correcta
                showSection(section);
            }, 400);
        });
    });
    
    // Botón HOME
    if (homeBtn) {
        homeBtn.addEventListener('click', () => {
            sectionsContainer.classList.add('fade-out');
            
            setTimeout(() => {
                sectionsContainer.style.display = 'none';
                sectionsContainer.classList.remove('fade-out');
                landingPage.style.display = 'block';
                landingPage.classList.remove('fade-out');
                landingPage.classList.add('fade-in');
            }, 400);
        });
    }
}

function showSection(sectionId) {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Remover active
    tabBtns.forEach(b => b.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));
    
    // Activar nuevo
    const targetBtn = document.querySelector(`[data-tab="${sectionId}"]`);
    const targetContent = document.getElementById(sectionId);
    
    if (targetBtn) targetBtn.classList.add('active');
    if (targetContent) targetContent.classList.add('active');
}

// ============================================
// UTILIDADES
// ============================================

function getInitials(nombre) {
    const words = nombre.trim().split(' ').filter(w => w.length > 0);
    if (words.length >= 2) {
        return words[0][0] + words[1][0];
    }
    return words[0] ? words[0][0] : '?';
}

function getRandomColor() {
    const colors = [
        'linear-gradient(135deg, #FF1744 0%, #FF6B00 100%)',
        'linear-gradient(135deg, #00E5FF 0%, #00B8D4 100%)',
        'linear-gradient(135deg, #FFD600 0%, #FFA000 100%)',
        'linear-gradient(135deg, #9C27B0 0%, #673AB7 100%)',
        'linear-gradient(135deg, #00E676 0%, #00C853 100%)',
        'linear-gradient(135deg, #FF5722 0%, #E91E63 100%)',
        'linear-gradient(135deg, #3F51B5 0%, #2196F3 100%)',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

function getRating(afiliados) {
    if (afiliados >= 100) return 99;
    if (afiliados >= 80) return 95;
    if (afiliados >= 60) return 90;
    if (afiliados >= 40) return 85;
    if (afiliados >= 25) return 80;
    if (afiliados >= 15) return 75;
    if (afiliados >= 10) return 70;
    if (afiliados >= 5) return 65;
    return 60;
}

function formatTime() {
    const now = new Date();
    return now.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' });
}

function getPhotoHTML(nombre) {
    const nombreArchivo = getNombreFoto(nombre);
    return `<img src="${nombreArchivo}.png" alt="${nombre}" 
            onerror="this.onerror=null; this.src='${nombreArchivo}.jpg'; 
            this.onerror=function() { this.parentElement.innerHTML='${getInitials(nombre)}'; }">`;
}

function getFraseEpica(nombre) {
    if (typeof FRASES_EPICAS !== 'undefined' && FRASES_EPICAS[nombre]) {
        return FRASES_EPICAS[nombre];
    }
    
    return {
        titulo: 'GUERRERO LEGENDARIO',
        frase: 'Su determinación no conoce límites, cada día es una nueva victoria',
        poder: 'FUERZA',
        especialidad: 'Liderazgo'
    };
}

// ==========================================
// RENDER - RANKING ESTILO ONE PIECE
// ============================================

function renderOnePieceRanking() {
    const rankingList = document.getElementById('rankingList');
    const sorted = [...competidores].sort((a, b) => b.afiliados - a.afiliados);
    const maxAfiliados = Math.max(...sorted.map(c => c.afiliados), 1);

    rankingList.innerHTML = sorted.map((comp, index) => {
        const rank = index + 1;
        const barWidth = (comp.afiliados / maxAfiliados) * 100;
        const color = getRandomColor();
        
        let rankClass = '';
        if (rank === 1) rankClass = 'top1';
        else if (rank === 2) rankClass = 'top2';
        else if (rank === 3) rankClass = 'top3';

        return `
            <div class="onepiece-rank-item ${rankClass}" style="animation-delay: ${index * 0.04}s">
                <div class="onepiece-rank-number">#${rank}</div>
                <div class="onepiece-avatar" style="background: ${color};">
                    ${getPhotoHTML(comp.nombre)}
                </div>
                <div class="onepiece-info">
                    <div class="onepiece-name">${comp.nombre}</div>
                    <div class="onepiece-bar-container">
                        <div class="onepiece-bar" style="width: ${barWidth}%; background: ${color};"></div>
                    </div>
                </div>
                <div class="onepiece-afiliados">
                    <span class="onepiece-number">${comp.afiliados}</span>
                    <span class="onepiece-label">AFILIADOS</span>
                </div>
            </div>
        `;
    }).join('');
}

// ============================================
// RENDER - TARJETAS FIFA 
// ============================================

function renderFIFACards() {
    const cardsGrid = document.getElementById('cardsGrid');
    const sorted = [...competidores].sort((a, b) => b.afiliados - a.afiliados);

    cardsGrid.innerHTML = sorted.map((comp, index) => {
        const rating = getRating(comp.afiliados);
        const frase = getFraseEpica(comp.nombre);
        const bgImage = getAnimeBackground(index);
        const color = getRandomColor();

        return `
            <div class="fifa-card-container">
                <div class="fifa-card">
                    <!-- FRENTE DE LA CARTA -->
                    <div class="fifa-front" style="background-image: url('${bgImage}');">
                        <div class="fifa-rating">${rating}</div>
                        <div class="fifa-avatar" style="background: ${color};">
                            ${getPhotoHTML(comp.nombre)}
                        </div>
                        <div class="fifa-name">${comp.nombre}</div>
                        <div class="fifa-stats">
                            <div class="fifa-stat-row">
                                <span>AFILIADOS</span>
                                <strong>${comp.afiliados}</strong>
                            </div>
                            <div class="fifa-stat-row">
                                <span>RANKING</span>
                                <strong>#${index + 1}</strong>
                            </div>
                            <div class="fifa-stat-row">
                                <span>RATING</span>
                                <strong>${rating}</strong>
                            </div>
                        </div>
                        <div class="fifa-badge">${frase.poder || 'PODER'}</div>
                    </div>
                    
                    <!-- REVERSO DE LA CARTA -->
                    <div class="fifa-back" style="background-image: url('${bgImage}');">
                        <div class="fifa-back-content">
                            <div class="fifa-back-title">${frase.titulo}</div>
                            <div class="fifa-back-quote">"${frase.frase}"</div>
                            <div class="fifa-back-power"><i class="fas fa-bolt"></i> ${frase.poder}</div>
                            <div class="fifa-back-specialty"><i class="fas fa-crosshairs"></i> ${frase.especialidad}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// ============================================
// RENDER - PODIO
// ============================================

function renderPodium() {
    if (competidores.length < 3) return;

    const sorted = [...competidores].sort((a, b) => b.afiliados - a.afiliados);
    
    // Primer lugar
    const podium1Avatar = document.getElementById('podium-1-avatar');
    const podium1Name = document.getElementById('podium-1-name');
    const podium1Afiliados = document.getElementById('podium-1-afiliados');
    
    podium1Avatar.style.background = getRandomColor();
    podium1Avatar.innerHTML = getPhotoHTML(sorted[0].nombre);
    podium1Name.textContent = sorted[0].nombre;
    podium1Afiliados.textContent = sorted[0].afiliados;

    // Segundo lugar
    const podium2Avatar = document.getElementById('podium-2-avatar');
    const podium2Name = document.getElementById('podium-2-name');
    const podium2Afiliados = document.getElementById('podium-2-afiliados');
    
    podium2Avatar.style.background = getRandomColor();
    podium2Avatar.innerHTML = getPhotoHTML(sorted[1].nombre);
    podium2Name.textContent = sorted[1].nombre;
    podium2Afiliados.textContent = sorted[1].afiliados;

    // Tercer lugar
    const podium3Avatar = document.getElementById('podium-3-avatar');
    const podium3Name = document.getElementById('podium-3-name');
    const podium3Afiliados = document.getElementById('podium-3-afiliados');
    
    podium3Avatar.style.background = getRandomColor();
    podium3Avatar.innerHTML = getPhotoHTML(sorted[2].nombre);
    podium3Name.textContent = sorted[2].nombre;
    podium3Afiliados.textContent = sorted[2].afiliados;
}

// ============================================
// RENDER - ESTADÍSTICAS
// ============================================

function updateStats() {
    const totalCompetidores = competidores.length;
    const totalAfiliados = competidores.reduce((sum, c) => sum + c.afiliados, 0);
    const lastUpdate = formatTime();

    document.getElementById('totalCompetidores').textContent = totalCompetidores;
    document.getElementById('totalAfiliados').textContent = totalAfiliados;
    document.getElementById('lastUpdate').textContent = lastUpdate;
}

// ============================================
// RENDER TODO
// ============================================

function renderAll() {
    competidores.sort((a, b) => b.afiliados - a.afiliados);
    
    updateStats();
    renderPodium();
    renderOnePieceRanking();
    renderFIFACards();
    
    const loading = document.getElementById('loading');
    if (loading) {
        loading.style.display = 'none';
    }
}

// ============================================
// CARGAR DESDE GOOGLE APPS SCRIPT
// ============================================

async function loadFromGoogleSheets() {
    try {
        console.log('Cargando datos desde Google Sheets...');
        const response = await fetch(APPS_SCRIPT_URL);
        const data = await response.json();

        if (data && Array.isArray(data) && data.length > 0) {
            competidores = data
                .filter(item => {
                    const nombre = item.nombre || item.Nombre || '';
                    return nombre !== 'Karina Inés León Florez' && 
                           nombre !== 'Maria Del Carmen Meza Ucrós';
                })
                .map(item => ({
                    nombre: item.nombre || item.Nombre || '',
                    afiliados: parseInt(item.afiliados || item.Afiliados || 0)
                }));
            console.log('Datos cargados:', competidores.length, 'competidores');
        } else {
            console.warn('No se encontraron datos, usando datos de prueba');
            competidores = competidores.map(c => ({
                ...c,
                afiliados: Math.floor(Math.random() * 80)
            }));
        }

        renderAll();

    } catch (error) {
        console.error("Error cargando datos:", error);
        
        competidores = competidores.map(c => ({
            ...c,
            afiliados: Math.floor(Math.random() * 80)
        }));
        
        renderAll();
    }
}

// ============================================
// SISTEMA DE TABS
// ============================================

function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');

            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => {
                if (c.classList.contains('active')) {
                    c.classList.add('slide-out');
                    setTimeout(() => {
                        c.classList.remove('active', 'slide-out');
                    }, 400);
                }
            });

            btn.classList.add('active');
            setTimeout(() => {
                const targetContent = document.getElementById(targetTab);
                targetContent.classList.add('active', 'slide-in');
                setTimeout(() => {
                    targetContent.classList.remove('slide-in');
                }, 400);
            }, 400);
        });
    });
}

// ============================================
// MÚSICA - CONTROL CON YOUTUBE Y RESPALDO LOCAL
// ============================================

// API de YouTube para controlar el iframe
let youtubePlayer;

function onYouTubeIframeAPIReady() {
    console.log('YouTube API lista (pero no se usará)');
    youtubeReady = true;
}

function initMusic() {
    console.log('🎵 Iniciando sistema de música (SOLO AUDIO LOCAL)...');
    
    // SOLO USAR AUDIO LOCAL - sin YouTube
    usingYouTube = false;
    switchToLocalAudio();
}

function switchToLocalAudio() {
    console.log('🎵 Activando audio local...');
    usingYouTube = false;
    
    if (bgMusicLocal) {
        // El audio empieza muted por el atributo HTML para permitir autoplay
        bgMusicLocal.volume = 0.3;
        bgMusicLocal.loop = true;
        
        // Función para desmutear y asegurar reproducción
        const unmuteAndPlay = () => {
            bgMusicLocal.muted = false;
            bgMusicLocal.volume = 0.3;
            
            const playPromise = bgMusicLocal.play();
            
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        console.log('✅ ¡Audio local reproduciendo automáticamente! 🎵');
                        musicMuted = false;
                        if (musicToggle) {
                            musicToggle.innerHTML = '<i class="fas fa-volume-up"></i> MÚSICA';
                            musicToggle.classList.remove('pulse-animation');
                        }
                    })
                    .catch(error => {
                        console.log('⚠️ Autoplay bloqueado por el navegador');
                        console.log('💡 La música se activará con la primera interacción del usuario');
                        musicMuted = true;
                        if (musicToggle) {
                            musicToggle.innerHTML = '<i class="fas fa-volume-mute"></i> TOCA PARA MÚSICA';
                            musicToggle.classList.add('pulse-animation');
                        }
                        
                        // ACTIVAR MODO SUPER AGRESIVO
                        activateAggressiveAutoplay();
                    });
            }
        };
        
        // Intentar desmutear inmediatamente
        setTimeout(unmuteAndPlay, 50);
    }
}

// MODO AGRESIVO: Activar música con CUALQUIER interacción
function activateAggressiveAutoplay() {
    console.log('🔥 MODO AGRESIVO ACTIVADO - música se reproducirá con cualquier interacción');
    
    let musicStarted = false;
    
    const startMusic = () => {
        if (musicStarted) return;
        
        console.log('🎯 Usuario interactuó - intentando reproducir música...');
        
        if (bgMusicLocal) {
            bgMusicLocal.muted = false;
            bgMusicLocal.volume = 0.3;
            bgMusicLocal.play()
                .then(() => {
                    musicStarted = true;
                    musicMuted = false;
                    if (musicToggle) {
                        musicToggle.innerHTML = '<i class="fas fa-volume-up"></i> MÚSICA';
                        musicToggle.classList.remove('pulse-animation');
                    }
                    console.log('✅ ¡MÚSICA ACTIVADA CON ÉXITO! 🎵🔥');
                    
                    // Remover todos los listeners después de activar
                    removeAllListeners();
                })
                .catch(err => {
                    console.log('⚠️ Intento fallido:', err.message);
                });
        }
    };
    
    // Lista de TODOS los eventos posibles
    const events = [
        'click',
        'touchstart',
        'touchend',
        'mousedown',
        'keydown'
    ];
    
    // Función para remover todos los listeners
    const removeAllListeners = () => {
        events.forEach(event => {
            document.removeEventListener(event, startMusic, true);
        });
    };
    
    // Agregar listeners a TODOS los eventos en fase de captura (antes que otros handlers)
    events.forEach(event => {
        document.addEventListener(event, startMusic, { capture: true, passive: false });
    });
    
    console.log('👂 Escuchando:', events.length, 'tipos de eventos (click, touch, mouse, tecla)');
}

function toggleMusic() {
    // SOLO usar audio local
    if (bgMusicLocal) {
        if (musicMuted || bgMusicLocal.paused) {
            // Activar música
            bgMusicLocal.muted = false;
            bgMusicLocal.volume = 0.3;
            bgMusicLocal.play()
                .then(() => {
                    musicToggle.innerHTML = '<i class="fas fa-volume-up"></i> MÚSICA';
                    musicToggle.classList.remove('pulse-animation');
                    musicMuted = false;
                    console.log('🎵 Música activada manualmente');
                })
                .catch(error => {
                    console.error('⚠️ Error al reproducir audio:', error);
                    musicToggle.innerHTML = '<i class="fas fa-volume-mute"></i> TOCA AQUÍ';
                    musicToggle.classList.add('pulse-animation');
                });
        } else {
            // Pausar música
            bgMusicLocal.pause();
            musicToggle.innerHTML = '<i class="fas fa-volume-mute"></i> MÚSICA';
            musicMuted = true;
            console.log('🔇 Música pausada');
        }
    }
}

if (musicToggle) {
    musicToggle.addEventListener('click', toggleMusic);
}

// ============================================
// PARTÍCULAS ANIMADAS
// ============================================

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    for (let i = 0; i < 25; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 5 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = 'rgba(255, 215, 0, 0.5)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${Math.random() * 10 + 5}s infinite ease-in-out`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.boxShadow = '0 0 8px rgba(255, 215, 0, 0.7)';
        particlesContainer.appendChild(particle);
    }
}

// ============================================
// INICIALIZACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('SISTEMA DE RANKING INICIANDO...');
    
    initIntroAnimation();
    initLandingNavigation();
    initTabs();
    createParticles();
    initMusic();  // Iniciar música
    loadFromGoogleSheets();
    
    setInterval(loadFromGoogleSheets, 30000);
    
    console.log("SISTEMA DE RANKING CARGADO");
});
