// --- DATABASE: Strict progressive tenses with verb in parentheses & EXPLICIT time indicators ---
const DB_QUESTIONS = {
    // Level 1: Present Simple vs Present Continuous ONLY
    level1: [
        { s: "Look! Someone _____ (break) the window right now!", a: "is breaking", e: "Present Continuous: Signal phrase 'Look!' + 'right now' indicates an action happening at this exact moment." },
        { s: "My brother usually _____ (go) to bed at 10 PM on weekdays.", a: "goes", e: "Present Simple: 'usually' and 'on weekdays' indicate a habit or routine." },
        { s: "Listen! The baby _____ (cry) in the room at the moment.", a: "is crying", e: "Present Continuous: 'Listen!' and 'at the moment' show an ongoing current action." },
        { s: "Water _____ (boil) at 100 degrees Celsius.", a: "boils", e: "Present Simple: General scientific fact/fact of nature." },
        { s: "Be quiet! They _____ (take) an English exam right now.", a: "are taking", e: "Present Continuous: 'Be quiet!' + 'right now' signals a current ongoing event." },
        { s: "I never _____ (drink) coffee in the evening.", a: "drink", e: "Present Simple: Frequency word 'never' indicates habit." },
        { s: "Look out! That bus _____ (come) towards us right now!", a: "is coming", e: "Present Continuous: Immediate action happening right now." },
        { s: "My parents _____ (live) in Amsterdam every day of the year.", a: "live", e: "Present Simple: Permanent situation." },
        { s: "At the moment, she _____ (read) a fascinating book.", a: "is reading", e: "Present Continuous: 'At the moment' requires Present Continuous." },
        { s: "Every Sunday, we _____ (visit) our grandparents.", a: "visit", e: "Present Simple: 'Every Sunday' denotes a repeating habit." }
    ],
    // Level 2: Past Simple vs Present Perfect
    level2: [
        { s: "Look at the mess! Someone _____ (break) the window just now!", a: "has broken", e: "Present Perfect: Action completed 'just now' with a visible present result." },
        { s: "I _____ (lose) my keys yesterday afternoon.", a: "lost", e: "Past Simple: 'yesterday afternoon' is a completed past time." },
        { s: "She _____ (already / finish) her homework this evening.", a: "has already finished", alt: "has finished", e: "Present Perfect: 'already' shows completion with relevance to now." },
        { s: "We _____ (visit) London back in 2019.", a: "visited", e: "Past Simple: Specific completed year 'in 2019'." },
        { s: "They _____ (not see) that new movie yet.", a: "have not seen", alt: "haven't seen", e: "Present Perfect: 'yet' is used for actions expected up to the present." },
        { s: "He _____ (buy) a brand new car last week.", a: "bought", e: "Past Simple: Time expression 'last week' requires simple past." },
        { s: "I _____ (know) him since we started primary school.", a: "have known", e: "Present Perfect: 'since' indicates duration from a past point until now." },
        { s: "What time _____ (you / arrive) last night?", a: "did you arrive", e: "Past Simple: Asking about a specific finished time 'last night'." },
        { s: "Shakespeare _____ (write) many famous plays during his lifetime.", a: "wrote", e: "Past Simple: Completed historical period." },
        { s: "My sister _____ (be) ill for three days now.", a: "has been", e: "Present Perfect: Duration up to 'now'." }
    ],
    // Level 3: Past Perfect, Conditionals & Passive Voice
    level3: [
        { s: "When we arrived at the cinema, the film _____ (already / start) five minutes before.", a: "had already started", alt: "had started", e: "Past Perfect: Event happened before another past event." },
        { s: "If you heat water to 100 degrees, it _____ (boil) automatically.", a: "boils", e: "Zero Conditional: Fact (If + Present -> Present Simple)." },
        { s: "If I find your wallet tomorrow, I _____ (call) you immediately.", a: "will call", e: "1st Conditional: Future possibility (If + Present -> Will)." },
        { s: "If I won a million euros today, I _____ (travel) around the world.", a: "would travel", e: "2nd Conditional: Hypothetical situation (If + Past -> Would)." },
        { s: "If she had studied harder last week, she _____ (pass) yesterday's test.", a: "would have passed", e: "3rd Conditional: Past regret (If + Past Perfect -> Would have + V3)." },
        { s: "The telephone _____ (invent) by Alexander Graham Bell in 1876.", a: "was invented", e: "Past Simple Passive: Object + was + past participle (V3)." },
        { s: "Millions of emails _____ (send) around the world every single day.", a: "are sent", e: "Present Simple Passive: Routine/fact (are + V3)." },
        { s: "He suddenly realized that he _____ (forget) his passport at home.", a: "had forgotten", e: "Past Perfect: Action prior to realizing." },
        { s: "A modern hospital _____ (build) in our city next year.", a: "will be built", e: "Future Passive: Subject + will be + V3." },
        { s: "If I _____ (be) in your shoes right now, I would take that advice.", a: "were", e: "2nd Conditional: 'were' for imaginary advice." }
    ],
    // Level 4: Boss Battle - All Mixed Tenses & Advanced Grammar
    level4: [
        { s: "By the time the police arrived last night, the burglar _____ (escape).", a: "had escaped", e: "Past Perfect: Completed before police arrival." },
        { s: "The damaged car _____ (repair) at the garage right now.", a: "is being repaired", e: "Present Continuous Passive: is/are + being + V3." },
        { s: "If you _____ (not hurry) right now, we will miss our train.", a: "do not hurry", alt: "don't hurry", e: "1st Conditional condition clause." },
        { s: "She promised yesterday that she _____ (call) me as soon as she landed.", a: "would call", e: "Future in the past promise." },
        { s: "I am really looking forward to _____ (meet) you next week.", a: "meeting", e: "Gerund (-ing form) after 'looking forward to'." },
        { s: "Unless you _____ (study) now, you will fail tomorrow's exam.", a: "study", e: "1st Conditional with 'Unless' (means 'if not')." },
        { s: "While they _____ (discuss) the plan yesterday, the power suddenly went out.", a: "were discussing", e: "Past Continuous: Ongoing background action interrupted by Past Simple." },
        { s: "I _____ (live) in this neighborhood ever since I was born.", a: "have lived", e: "Present Perfect with 'ever since'." },
        { s: "If he _____ (know) the truth yesterday, he would have told us.", a: "had known", e: "3rd Conditional condition clause." },
        { s: "Great achievements _____ (make) through continuous hard work.", a: "are made", e: "Present Simple Passive general truth." }
    ]
};

const LEVELS_CONFIG = [
    { id: 'level1', title: "Level 1: Present Simple vs Present Continuous", hitsNeeded: 3, boss: false, enemyName: "Grammar Cyborg" },
    { id: 'level2', title: "Level 2: Past Simple vs Present Perfect", hitsNeeded: 5, boss: false, enemyName: "Trump" },
    { id: 'level3', title: "Level 3: Past Perfect, Conditionals & Passive", hitsNeeded: 7, boss: false, enemyName: "Syntax Dragon" },
    { id: 'level4', title: "Level 4: Boss Battle (All Mixed Tenses)", hitsNeeded: 10, boss: true, enemyName: "Le Livre Maudit (French Book)" }
];

LEVELS_CONFIG[0].rules = "<b>Present Simple</b>: Habits, routines & facts (always, usually, every day).<br><i>Example: goes, works, drinks</i><br><br><b>Present Continuous</b>: Action happening right now (Look!, Listen!, right now, at the moment).<br><i>Example: is breaking, are crying</i>";
LEVELS_CONFIG[1].rules = "<b>Past Simple</b>: Finished time in the past (yesterday, in 2019, last week, ago).<br><i>Example: lost, ate, bought</i><br><br><b>Present Perfect</b>: Connection to now (already, just now, since, for, yet, ever).<br><i>Example: has broken, have seen</i>";
LEVELS_CONFIG[2].rules = "<b>Past Perfect</b>: Earlier past action (<i>had + V3</i>).<br><b>Conditionals</b>: 1st (will), 2nd (would), 3rd (would have + V3).<br><b>Passive Voice</b>: Form of <i>To Be + Past Participle (V3)</i>.";
LEVELS_CONFIG[3].rules = "All VWO 3 tenses mixed together!<br>Conjugate the verb in parentheses completely!<br><i>Examples: had escaped, is being repaired, would have known</i>";

// --- SKINS DATA & UNLOCK PERSISTENCE ---
const HERO_SKINS = {
    classic: { id: 'classic', name: 'Classic Hero', icon: '⚔️', desc: 'The original grammar warrior.' },
    cyber: { id: 'cyber', name: 'Cyber Knight', icon: '🤖', desc: 'Futuristic high-tech hero with plasma blade.' },
    golden: { id: 'golden', name: 'Golden Warrior', icon: '👑', desc: 'Legendary knight clad in pure gold.' }
};

let unlockedSkins = JSON.parse(localStorage.getItem('gq_unlocked_skins')) || ['classic'];
let selectedSkin = localStorage.getItem('gq_selected_skin') || 'classic';

function saveSkins() {
    localStorage.setItem('gq_unlocked_skins', JSON.stringify(unlockedSkins));
    localStorage.setItem('gq_selected_skin', selectedSkin);
}

function unlockNewSkins() {
    if (!unlockedSkins.includes('cyber')) unlockedSkins.push('cyber');
    if (!unlockedSkins.includes('golden')) unlockedSkins.push('golden');
    saveSkins();
    renderSkinsTab();
}

function selectSkin(skinId) {
    if (!unlockedSkins.includes(skinId)) return;
    selectedSkin = skinId;
    saveSkins();
    renderSkinsTab();
}

let audioCtx = null;
let isMuted = false;

function playSound(type) {
    if (isMuted) return;
    try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        
        const now = audioCtx.currentTime;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);

        if (type === 'hit') {
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(150, now);
            osc.frequency.exponentialRampToValueAtTime(40, now + 0.1);
            gain.gain.setValueAtTime(0.3, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
            osc.start(now); osc.stop(now + 0.1);
        } else if (type === 'attack') {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(800, now);
            osc.frequency.exponentialRampToValueAtTime(300, now + 0.2);
            gain.gain.setValueAtTime(0.1, now);
            gain.gain.linearRampToValueAtTime(0, now + 0.2);
            osc.start(now); osc.stop(now + 0.2);
        } else if (type === 'correct') {
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(600, now);
            osc.frequency.setValueAtTime(800, now + 0.1);
            gain.gain.setValueAtTime(0.2, now);
            gain.gain.linearRampToValueAtTime(0, now + 0.3);
            osc.start(now); osc.stop(now + 0.3);
        } else if (type === 'wrong') {
            osc.type = 'square';
            osc.frequency.setValueAtTime(100, now);
            gain.gain.setValueAtTime(0.2, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
            osc.start(now); osc.stop(now + 0.3);
        } else if (type === 'shield') {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(400, now);
            osc.frequency.linearRampToValueAtTime(1200, now + 0.2);
            gain.gain.setValueAtTime(0.2, now);
            gain.gain.linearRampToValueAtTime(0, now + 0.2);
            osc.start(now); osc.stop(now + 0.2);
        }
    } catch (e) { console.warn("Audio error", e); }
}

function toggleAudio() {
    isMuted = !isMuted;
    document.getElementById('audio-btn').innerText = isMuted ? '🔇' : '🔊';
}

// --- GAME STATE ---
let state = {
    levelIndex: 0,
    questionPool: [],
    qIndex: 0,
    enemyHpTotal: 0,
    enemyHpCurrent: 0,
    
    heroHp: 5,
    score: 0,
    streak: 0,
    totalCorrect: 0,
    totalAnswered: 0,
    
    lifelines: { 'hint': 1, 'shield': 1, 'freeze': 1 },
    shieldActive: false,
    
    bossTimer: null,
    timeLeft: 20,
    isAnswering: false
};

const cvs = document.getElementById('game-canvas');
const ctx = cvs.getContext('2d');
let animationFrameId;

class Particle {
    constructor(x, y, color) {
        this.x = x; this.y = y; this.color = color;
        this.vx = (Math.random() - 0.5) * 8;
        this.vy = (Math.random() - 0.5) * 8;
        this.life = 1.0; this.size = Math.random() * 4 + 2;
    }
    update() { this.x += this.vx; this.y += this.vy; this.life -= 0.05; }
    draw(ctx) {
        ctx.globalAlpha = Math.max(0, this.life);
        ctx.fillStyle = this.color;
        ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI*2); ctx.fill();
        ctx.globalAlpha = 1.0;
    }
}

class FloatingText {
    constructor(x, y, text, color) {
        this.x = x; this.y = y; this.text = text; this.color = color;
        this.life = 1.0; this.vy = -1;
    }
    update() { this.y += this.vy; this.life -= 0.02; }
    draw(ctx) {
        ctx.globalAlpha = Math.max(0, this.life);
        ctx.fillStyle = this.color; ctx.font = "bold 20px Fredoka";
        ctx.textAlign = "center"; ctx.fillText(this.text, this.x, this.y);
        ctx.globalAlpha = 1.0;
    }
}

class Projectile {
    constructor(x, y, targetX, color, onHit) {
        this.x = x; this.y = y; this.targetX = targetX; this.color = color;
        this.speed = (targetX > x) ? 15 : -15;
        this.onHit = onHit; this.active = true;
    }
    update() {
        if(!this.active) return;
        this.x += this.speed;
        if ((this.speed > 0 && this.x >= this.targetX) || (this.speed < 0 && this.x <= this.targetX)) {
            this.active = false;
            if (typeof this.onHit === 'function') {
                this.onHit();
            }
        }
    }
    draw(ctx) {
        if(!this.active) return;
        ctx.fillStyle = this.color;
        ctx.beginPath(); ctx.arc(this.x, this.y, 8, 0, Math.PI*2); ctx.fill();
        ctx.fillStyle = 'white';
        ctx.beginPath(); ctx.arc(this.x - this.speed, this.y, 4, 0, Math.PI*2); ctx.fill();
    }
}

class Humanoid {
    constructor(x, isEnemy) {
        this.baseX = x; this.x = x; this.y = 220; this.isEnemy = isEnemy;
        this.colorHead = isEnemy ? '#94a3b8' : '#fed7aa';
        this.colorBody = isEnemy ? '#334155' : '#0ea5e9';
        this.colorWeapon = isEnemy ? '#ef4444' : '#f59e0b';
        
        this.isHit = false; this.hitTimer = 0;
        this.recoilX = 0; this.lungingX = 0;
    }

    draw(ctx) {
        ctx.save();
        
        // --- IDLE ANIMATIONS ---
        const time = Date.now();
        let idleX = 0;
        let idleY = 0;

        if (!this.isEnemy) {
            // Hero: Slight breathing / bounce
            idleY = Math.sin(time / 250) * 3;
        } else {
            if (state.levelIndex === 0) {
                // Robot: Mechanical pulse/bounce
                idleY = Math.abs(Math.sin(time / 180)) * -4;
            } else if (state.levelIndex === 1) {
                // Trump: Swaying / walking in place
                idleX = Math.sin(time / 200) * 4;
                idleY = Math.cos(time / 150) * 2;
            } else if (state.levelIndex === 2) {
                // Dragon: Flying / flapping float
                idleY = Math.sin(time / 220) * 12;
            } else if (state.levelIndex === 3) {
                // French Book: Mystical floating
                idleY = Math.sin(time / 200) * 8;
            }
        }

        let renderX = this.x + this.lungingX + this.recoilX + idleX;
        let renderY = this.y + idleY;
        ctx.translate(renderX, renderY);

        if (this.isHit) {
            ctx.filter = 'brightness(200%) hue-rotate(-50deg)';
        }

        // Shadow
        ctx.fillStyle = 'rgba(0,0,0,0.4)';
        ctx.beginPath(); ctx.ellipse(0, 40 - idleY*0.5, 25, 6, 0, 0, Math.PI*2); ctx.fill();

        // Draw Characters (Unchanged Enemies, Render selected skin for Hero)
        if (!this.isEnemy) {
            if (selectedSkin === 'cyber') {
                this.drawCyberHero(ctx);
            } else if (selectedSkin === 'golden') {
                this.drawGoldenHero(ctx);
            } else {
                this.drawHero(ctx);
            }
        } else {
            if (state.levelIndex === 0) this.drawRobot(ctx);
            else if (state.levelIndex === 1) this.drawTrump(ctx);
            else if (state.levelIndex === 2) this.drawDragon(ctx);
            else if (state.levelIndex === 3) this.drawBook(ctx);
        }

        // --- FLOATING HP BAR ABOVE HEAD ---
        this.drawFloatingHpBar(ctx);

        ctx.restore();
    }

    drawFloatingHpBar(ctx) {
        const barWidth = 60;
        const barHeight = 8;
        const barY = -80; // Above head

        let curHp = this.isEnemy ? state.enemyHpCurrent : state.heroHp;
        let maxHp = this.isEnemy ? state.enemyHpTotal : 5;
        let pct = Math.max(0, Math.min(1, curHp / maxHp));

        // Container / Background
        ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(-barWidth / 2 - 2, barY - 2, barWidth + 4, barHeight + 4, 4);
        ctx.fill();
        ctx.stroke();

        // Filled Bar
        let barColor = this.isEnemy ? '#ef4444' : '#06b6d4';
        if (!this.isEnemy && pct <= 0.4) barColor = '#f59e0b';

        ctx.fillStyle = barColor;
        ctx.beginPath();
        ctx.roundRect(-barWidth / 2, barY, barWidth * pct, barHeight, 2);
        ctx.fill();

        // Label Text
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 9px Fredoka, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`${curHp}/${maxHp}`, 0, barY - 4);
    }

    // --- CLASSIC HERO SKIN ---
    drawHero(ctx) {
        let armDir = 1;
        ctx.fillStyle = this.colorBody; ctx.fillRect(-12, -30, 24, 40);
        ctx.fillStyle = '#1e293b'; ctx.fillRect(-10, 10, 8, 30); ctx.fillRect(2, 10, 8, 30);
        ctx.fillStyle = this.colorHead; ctx.fillRect(-6 * armDir, -25, 20 * armDir, 6);
        ctx.strokeStyle = this.colorWeapon; ctx.lineWidth = 4;
        ctx.beginPath(); ctx.moveTo(14 * armDir, -40); ctx.lineTo(14 * armDir, 10); ctx.stroke();
        ctx.fillStyle = this.colorHead; ctx.fillRect(-10 * armDir, -20, 24 * armDir, 8);
        ctx.beginPath(); ctx.arc(0, -45, 14, 0, Math.PI*2); ctx.fill();
        ctx.fillStyle = 'white'; ctx.fillRect(4 * armDir, -48, 4, 4);
    }

    // --- UNLOCKED SKIN 1: CYBER KNIGHT ---
    drawCyberHero(ctx) {
        let armDir = 1;
        // High-tech suit
        ctx.fillStyle = '#0f172a'; ctx.fillRect(-12, -30, 24, 40);
        ctx.fillStyle = '#06b6d4'; ctx.fillRect(-8, -25, 16, 30);
        // Cyber boots
        ctx.fillStyle = '#334155'; ctx.fillRect(-10, 10, 8, 30); ctx.fillRect(2, 10, 8, 30);
        ctx.fillStyle = '#06b6d4'; ctx.fillRect(-10, 32, 8, 8); ctx.fillRect(2, 32, 8, 8);
        // Neon Plasma Sword
        ctx.strokeStyle = '#22d3ee'; ctx.lineWidth = 5;
        ctx.shadowColor = '#06b6d4'; ctx.shadowBlur = 10;
        ctx.beginPath(); ctx.moveTo(14 * armDir, -45); ctx.lineTo(14 * armDir, 10); ctx.stroke();
        ctx.shadowBlur = 0;
        // Arms
        ctx.fillStyle = '#1e293b'; ctx.fillRect(-10 * armDir, -20, 24 * armDir, 8);
        // Cyber Helmet
        ctx.fillStyle = '#1e293b'; ctx.beginPath(); ctx.arc(0, -45, 14, 0, Math.PI*2); ctx.fill();
        // Glowing Visor
        ctx.fillStyle = '#38bdf8'; ctx.fillRect(0, -48, 12, 5);
    }

    // --- UNLOCKED SKIN 2: GOLDEN WARRIOR ---
    drawGoldenHero(ctx) {
        let armDir = 1;
        // Gold Armor Body
        ctx.fillStyle = '#f59e0b'; ctx.fillRect(-12, -30, 24, 40);
        ctx.fillStyle = '#fef08a'; ctx.fillRect(-8, -25, 16, 20);
        // Golden Leg Armor
        ctx.fillStyle = '#d97706'; ctx.fillRect(-10, 10, 8, 30); ctx.fillRect(2, 10, 8, 30);
        // Golden Fire Sword
        ctx.strokeStyle = '#ef4444'; ctx.lineWidth = 5;
        ctx.shadowColor = '#f59e0b'; ctx.shadowBlur = 8;
        ctx.beginPath(); ctx.moveTo(14 * armDir, -48); ctx.lineTo(14 * armDir, 10); ctx.stroke();
        ctx.shadowBlur = 0;
        // Arms
        ctx.fillStyle = '#fbbf24'; ctx.fillRect(-10 * armDir, -20, 24 * armDir, 8);
        // Golden Helmet & Crown
        ctx.fillStyle = '#fbbf24'; ctx.beginPath(); ctx.arc(0, -45, 14, 0, Math.PI*2); ctx.fill();
        ctx.fillStyle = '#fef08a';
        ctx.beginPath(); ctx.moveTo(-10, -55); ctx.lineTo(-5, -62); ctx.lineTo(0, -55); ctx.lineTo(5, -62); ctx.lineTo(10, -55); ctx.fill();
        // Face / Eyes
        ctx.fillStyle = '#451a03'; ctx.fillRect(2 * armDir, -48, 5, 4);
    }

    // --- ENEMIES (UNALTERED) ---
    drawRobot(ctx) {
        let armDir = -1;
        ctx.fillStyle = '#94a3b8'; ctx.fillRect(-16, -35, 32, 45);
        ctx.fillStyle = '#475569'; ctx.fillRect(-10, -25, 20, 20);
        ctx.fillStyle = '#64748b'; ctx.fillRect(-12, 10, 10, 30); ctx.fillRect(2, 10, 10, 30);
        ctx.fillRect(-6 * armDir, -25, 22 * armDir, 10);
        ctx.fillStyle = '#ef4444'; ctx.fillRect(16 * armDir, -28, 12 * armDir, 16);
        ctx.fillStyle = '#64748b'; ctx.fillRect(-12 * armDir, -20, 26 * armDir, 12);
        ctx.fillStyle = '#cbd5e1'; ctx.fillRect(-14, -55, 28, 20);
        ctx.fillStyle = '#ef4444'; ctx.fillRect(-14, -50, 14, 6);
    }

    drawTrump(ctx) {
        let armDir = -1;
        ctx.fillStyle = '#1e3a8a'; ctx.fillRect(-14, -30, 28, 42);
        ctx.fillStyle = '#dc2626'; ctx.beginPath(); ctx.moveTo(0, -30); ctx.lineTo(-4, -10); ctx.lineTo(0, 0); ctx.lineTo(4, -10); ctx.fill();
        ctx.fillStyle = '#172554'; ctx.fillRect(-10, 12, 8, 28); ctx.fillRect(2, 12, 8, 28);
        ctx.fillStyle = '#1e3a8a'; ctx.fillRect(-6 * armDir, -25, 20 * armDir, 8);
        ctx.fillStyle = '#fdba74'; ctx.fillRect(14 * armDir, -25, 6 * armDir, 8);
        ctx.fillStyle = '#1e3a8a'; ctx.fillRect(-10 * armDir, -20, 24 * armDir, 10);
        ctx.fillStyle = '#fdba74'; ctx.fillRect(14 * armDir, -20, 8 * armDir, 10);
        ctx.fillStyle = '#fdba74'; ctx.beginPath(); ctx.arc(0, -45, 14, 0, Math.PI*2); ctx.fill();
        ctx.fillStyle = '#fcd34d'; ctx.beginPath(); ctx.ellipse(0, -58, 18, 7, Math.PI/12, 0, Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.ellipse(10, -52, 10, 5, -Math.PI/6, 0, Math.PI*2); ctx.fill();
        ctx.fillStyle = '#1e3a8a'; ctx.fillRect(-4, -48, 4, 3);
    }

    drawDragon(ctx) {
        let armDir = -1;
        ctx.fillStyle = '#14532d'; ctx.beginPath(); ctx.moveTo(10, 5); ctx.lineTo(50, 15); ctx.lineTo(15, -10); ctx.fill();
        ctx.fillStyle = '#064e3b'; ctx.beginPath(); ctx.moveTo(0, -20); ctx.lineTo(30, -60); ctx.lineTo(25, -10); ctx.fill();
        ctx.fillStyle = '#15803d'; ctx.beginPath(); ctx.ellipse(0, -5, 22, 28, 0, 0, Math.PI*2); ctx.fill();
        ctx.fillStyle = '#166534'; ctx.fillRect(-12, 15, 8, 25); ctx.fillRect(4, 15, 8, 25);
        ctx.fillStyle = '#065f46'; ctx.beginPath(); ctx.moveTo(-5, -20); ctx.lineTo(20, -70); ctx.lineTo(15, -5); ctx.fill();
        ctx.fillStyle = '#166534'; ctx.fillRect(-10 * armDir, -10, 24 * armDir, 6);
        ctx.fillStyle = '#15803d'; ctx.beginPath(); ctx.ellipse(-15, -40, 16, 12, Math.PI/8, 0, Math.PI*2); ctx.fill();
        ctx.fillStyle = '#fef08a'; ctx.beginPath(); ctx.moveTo(-5, -48); ctx.lineTo(5, -60); ctx.lineTo(5, -45); ctx.fill();
        ctx.fillStyle = '#ef4444'; ctx.fillRect(-22, -44, 5, 5);
    }

    drawBook(ctx) {
        ctx.rotate(-0.1);
        
        ctx.fillStyle = '#1d4ed8'; ctx.fillRect(-30, -50, 20, 70);
        ctx.fillStyle = '#ffffff'; ctx.fillRect(-10, -50, 20, 70);
        ctx.fillStyle = '#b91c1c'; ctx.fillRect(10, -50, 20, 70);
        ctx.fillStyle = '#fef3c7'; ctx.beginPath(); ctx.moveTo(30, -50); ctx.lineTo(40, -40); ctx.lineTo(40, 30); ctx.lineTo(30, 20); ctx.fill();
        
        ctx.save();
        ctx.fillStyle = 'black'; ctx.font = 'bold 10px sans-serif'; ctx.translate(0, -10); ctx.rotate(Math.PI/2); ctx.textAlign = 'center';
        ctx.fillText('FRANÇAIS', 0, -2);
        ctx.restore();

        ctx.shadowColor = '#ef4444'; ctx.shadowBlur = 10; ctx.fillStyle = '#ef4444';
        ctx.beginPath(); ctx.ellipse(-15, -20, 6, 3, -0.2, 0, Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.ellipse(10, -20, 6, 3, 0.2, 0, Math.PI*2); ctx.fill();
        ctx.shadowBlur = 0; 
    }

    triggerHit() {
        this.isHit = true;
        this.recoilX = this.isEnemy ? 15 : -15;
        setTimeout(() => { this.isHit = false; this.recoilX = 0; }, 200);
    }

    triggerAttack(targetX, projColor, onImpact) {
        this.lungingX = this.isEnemy ? -30 : 30;
        playSound('attack');
        
        setTimeout(() => {
            this.lungingX = 0;
            let px = this.x + (this.isEnemy ? -20 : 20);
            let py = this.y - 20;
            if (this.isEnemy && state.levelIndex === 3) py = this.y - 40;
            engine.addProjectile(new Projectile(px, py, targetX, projColor, onImpact));
        }, 150);
    }
}

function drawBackground(lvlIdx) {
    const w = cvs.width;
    const h = cvs.height;

    if (lvlIdx === 0) {
        // LEVEL 1: CYBERPUNK / FUTURISTIC NEON CITY
        ctx.fillStyle = '#090d16'; ctx.fillRect(0, 0, w, h);
        ctx.fillStyle = '#0f172a';
        const bldgX = [20, 90, 180, 280, 380, 480, 600, 710, 830, 920];
        const bldgW = [50, 70, 60, 80, 70, 90, 80, 70, 60, 60];
        const bldgH = [140, 180, 120, 190, 150, 170, 200, 160, 130, 170];
        for(let i=0; i<bldgX.length; i++) {
            ctx.fillRect(bldgX[i], 250 - bldgH[i], bldgW[i], bldgH[i]);
            ctx.fillStyle = '#0284c7';
            for(let wy = 250 - bldgH[i] + 15; wy < 230; wy += 25) {
                for(let wx = bldgX[i] + 10; wx < bldgX[i] + bldgW[i] - 10; wx += 15) {
                    if((i + wx + wy) % 3 === 0) ctx.fillRect(wx, wy, 5, 8);
                }
            }
            ctx.fillStyle = '#0f172a';
        }
        ctx.fillStyle = '#020617'; ctx.fillRect(0, 250, w, 70);
        ctx.strokeStyle = '#06b6d4'; ctx.lineWidth = 1; ctx.globalAlpha = 0.4;
        for(let gx=0; gx<w; gx+=40) {
            ctx.beginPath(); ctx.moveTo(gx, 250); ctx.lineTo((gx - w/2)*2 + w/2, h); ctx.stroke();
        }
        for(let gy=250; gy<h; gy+=15) {
            ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(w, gy); ctx.stroke();
        }
        ctx.globalAlpha = 1.0;

    } else if (lvlIdx === 1) {
        // LEVEL 2: GOLDEN PALACE HALL / TRUMP TOWER
        let grad = ctx.createLinearGradient(0, 0, 0, h);
        grad.addColorStop(0, '#1e1b4b'); grad.addColorStop(1, '#312e81');
        ctx.fillStyle = grad; ctx.fillRect(0, 0, w, h);
        
        ctx.fillStyle = '#fbbf24'; ctx.globalAlpha = 0.25;
        for(let px = 50; px < w; px += 180) {
            ctx.fillRect(px, 0, 35, 250);
            ctx.fillRect(px - 10, 0, 55, 20);
            ctx.fillRect(px - 10, 230, 55, 20);
        }
        ctx.globalAlpha = 1.0;
        ctx.fillStyle = '#1e293b'; ctx.fillRect(0, 250, w, 70);
        ctx.fillStyle = '#f59e0b'; ctx.fillRect(0, 246, w, 4);

    } else if (lvlIdx === 2) {
        // LEVEL 3: VOLCANIC MOUNTAIN CAVE & LAVA
        let grad = ctx.createLinearGradient(0, 0, 0, h);
        grad.addColorStop(0, '#180808'); grad.addColorStop(1, '#450a0a');
        ctx.fillStyle = grad; ctx.fillRect(0, 0, w, h);
        
        ctx.fillStyle = '#1c1917';
        ctx.beginPath();
        ctx.moveTo(0, 250); ctx.lineTo(100, 80); ctx.lineTo(220, 250);
        ctx.lineTo(350, 110); ctx.lineTo(500, 250); ctx.lineTo(650, 90);
        ctx.lineTo(800, 250); ctx.lineTo(920, 100); ctx.lineTo(w, 250);
        ctx.fill();

        let lavaGrad = ctx.createLinearGradient(0, 250, 0, h);
        lavaGrad.addColorStop(0, '#991b1b'); lavaGrad.addColorStop(1, '#dc2626');
        ctx.fillStyle = lavaGrad; ctx.fillRect(0, 250, w, 70);
        ctx.fillStyle = '#faca15';
        for(let lx=10; lx<w; lx+=60) {
            ctx.beginPath(); ctx.ellipse(lx, 260 + Math.sin(Date.now()/300 + lx)*5, 20, 3, 0, 0, Math.PI*2); ctx.fill();
        }

    } else {
        // LEVEL 4: MYSTERIOUS DARK LIBRARY / LE LIVRE MAUDIT
        let grad = ctx.createLinearGradient(0, 0, 0, h);
        grad.addColorStop(0, '#0f172a'); grad.addColorStop(1, '#1e1b4b');
        ctx.fillStyle = grad; ctx.fillRect(0, 0, w, h);

        ctx.fillStyle = '#331800';
        for(let sy=20; sy<230; sy+=60) {
            ctx.fillRect(0, sy, w, 10);
            ctx.fillStyle = '#6b21a8';
            for(let bx=10; bx<w; bx+=20) {
                if((bx+sy)%3 !== 0) {
                    ctx.fillStyle = (bx % 40 === 0) ? '#b91c1c' : '#1d4ed8';
                    ctx.fillRect(bx, sy - 35, 14, 35);
                }
            }
            ctx.fillStyle = '#331800';
        }

        ctx.fillStyle = '#020617'; ctx.fillRect(0, 250, w, 70);
        ctx.strokeStyle = '#a855f7'; ctx.lineWidth = 2; ctx.globalAlpha = 0.5;
        ctx.beginPath(); ctx.arc(w/2, 285, 40, 0, Math.PI*2); ctx.stroke();
        ctx.globalAlpha = 1.0;
    }
}

const engine = {
    hero: new Humanoid(200, false),
    enemy: new Humanoid(800, true),
    projectiles: [],
    particles: [],
    texts: [],
    
    updateTheme(lvlIdx) {
        if(lvlIdx === 0) { this.enemy.colorBody = '#78350f'; this.enemy.colorWeapon = '#94a3b8'; }
        else if(lvlIdx === 1) { this.enemy.colorBody = '#94a3b8'; this.enemy.colorWeapon = '#cbd5e1'; }
        else if(lvlIdx === 2) { this.enemy.colorBody = '#4c1d95'; this.enemy.colorWeapon = '#a855f7'; }
        else { this.enemy.colorBody = '#7f1d1d'; this.enemy.colorWeapon = '#ef4444'; }
    },
    addParticle(x, y, c) { for(let i=0; i<15; i++) this.particles.push(new Particle(x, y, c)); },
    addText(x, y, t, c) { this.texts.push(new FloatingText(x, y, t, c)); },
    addProjectile(p) { this.projectiles.push(p); },
    
    render() {
        ctx.clearRect(0, 0, cvs.width, cvs.height);
        
        // Draw custom canvas level backdrop
        drawBackground(state.levelIndex);

        if (state.shieldActive) {
            ctx.save();
            ctx.translate(engine.hero.x, engine.hero.y - 20);
            ctx.strokeStyle = 'rgba(6, 182, 212, 0.5)';
            ctx.lineWidth = 4;
            ctx.beginPath(); ctx.arc(0, 0, 50, 0, Math.PI*2); ctx.stroke();
            ctx.fillStyle = 'rgba(6, 182, 212, 0.1)';
            ctx.fill();
            ctx.restore();
        }

        engine.hero.draw(ctx);
        engine.enemy.draw(ctx);

        for (let i = engine.projectiles.length - 1; i >= 0; i--) {
            let p = engine.projectiles[i];
            p.update();
            p.draw(ctx);
            if (!p.active) engine.projectiles.splice(i, 1);
        }

        for (let i = engine.particles.length - 1; i >= 0; i--) {
            let pt = engine.particles[i];
            pt.update();
            pt.draw(ctx);
            if (pt.life <= 0) engine.particles.splice(i, 1);
        }

        for (let i = engine.texts.length - 1; i >= 0; i--) {
            let t = engine.texts[i];
            t.update();
            t.draw(ctx);
            if (t.life <= 0) engine.texts.splice(i, 1);
        }

        animationFrameId = requestAnimationFrame(() => engine.render());
    }
};

function shuffleArray(array) {
    let curId = array.length;
    while (0 !== curId) {
        let randId = Math.floor(Math.random() * curId);
        curId -= 1;
        let tmp = array[curId]; array[curId] = array[randId]; array[randId] = tmp;
    }
    return array;
}

function initGame() {
    document.getElementById('modal-game-over').classList.add('hidden');
    document.getElementById('modal-victory').classList.add('hidden');
    document.getElementById('modal-overlay').classList.add('hidden');
    document.getElementById('modal-overlay').classList.remove('flex');

    state.levelIndex = 0;
    state.heroHp = 5;
    state.score = 0;
    state.streak = 0;
    state.totalCorrect = 0;
    state.totalAnswered = 0;
    state.lifelines = { 'hint': 1, 'shield': 1, 'freeze': 1 };
    state.shieldActive = false;
    
    document.getElementById('log-content').innerHTML = '';
    loadLevel();
    renderSkinsTab();
    switchTab('rules');
    
    if(!animationFrameId) engine.render();
}

function loadLevel() {
    let cfg = LEVELS_CONFIG[state.levelIndex];
    document.getElementById('hud-level-name').innerText = cfg.title;
    
    state.enemyHpTotal = cfg.hitsNeeded;
    state.enemyHpCurrent = cfg.hitsNeeded;
    engine.updateTheme(state.levelIndex);

    let rawPool = DB_QUESTIONS[cfg.id];
    state.questionPool = shuffleArray([...rawPool]).slice(0, cfg.hitsNeeded + 2);
    state.qIndex = 0;

    document.getElementById('rules-content').innerHTML = cfg.rules;

    let fBtn = document.getElementById('ll-freeze');
    if (cfg.boss) {
        fBtn.classList.remove('opacity-50', 'pointer-events-none');
        document.getElementById('boss-timer').classList.remove('hidden');
        document.getElementById('boss-timer').classList.add('flex');
    } else {
        fBtn.classList.add('opacity-50', 'pointer-events-none');
        document.getElementById('boss-timer').classList.add('hidden');
        document.getElementById('boss-timer').classList.remove('flex');
        clearInterval(state.bossTimer);
    }

    renderQuestion();
    updateHUD();
}

function renderQuestion() {
    state.isAnswering = false;
    document.getElementById('explanation-box').classList.add('hidden');
    document.getElementById('explanation-box').classList.remove('flex');
    document.getElementById('hint-display').classList.add('hidden');

    let q = state.questionPool[state.qIndex];
    let cfg = LEVELS_CONFIG[state.levelIndex];
    document.getElementById('q-progress').innerText = `${cfg.enemyName} HP: ${state.enemyHpCurrent} / ${state.enemyHpTotal}`;
    
    let sHTML = q.s.replace('_____', '<span class="text-amber-400 underline decoration-2 underline-offset-4">_____</span>');
    document.getElementById('q-text').innerHTML = sHTML;

    const inputEl = document.getElementById('user-answer-input');
    const submitBtn = document.getElementById('submit-ans-btn');
    inputEl.value = '';
    inputEl.disabled = false;
    inputEl.className = "flex-1 bg-slate-950 border-2 border-slate-700 focus:border-cyan-400 focus:outline-none text-slate-100 px-5 py-3.5 rounded-xl font-medium text-lg transition placeholder:text-slate-600 shadow-inner";
    submitBtn.disabled = false;
    setTimeout(() => inputEl.focus(), 100);

    if (LEVELS_CONFIG[state.levelIndex].boss) {
        state.timeLeft = 20;
        document.getElementById('timer-text').innerText = `${state.timeLeft}s`;
        clearInterval(state.bossTimer);
        state.bossTimer = setInterval(() => {
            state.timeLeft--;
            document.getElementById('timer-text').innerText = `${state.timeLeft}s`;
            if (state.timeLeft <= 0) {
                clearInterval(state.bossTimer);
                handleAnswer("");
            }
        }, 1000);
    }
}

function submitTypedAnswer(e) {
    e.preventDefault();
    if (state.isAnswering) return;
    const userVal = document.getElementById('user-answer-input').value;
    handleAnswer(userVal);
}

function handleAnswer(typedVal) {
    if (state.isAnswering) return;
    state.isAnswering = true;
    clearInterval(state.bossTimer);
    state.totalAnswered++;

    let q = state.questionPool[state.qIndex];
    
    const cleanUser = typedVal.trim().toLowerCase();
    const cleanAns = q.a.trim().toLowerCase();
    const cleanAlt = q.alt ? q.alt.trim().toLowerCase() : null;
    
    let isCorrect = (cleanUser === cleanAns) || (cleanAlt && cleanUser === cleanAlt);

    const inputEl = document.getElementById('user-answer-input');
    const submitBtn = document.getElementById('submit-ans-btn');
    inputEl.disabled = true;
    submitBtn.disabled = true;

    let projColor = (selectedSkin === 'cyber') ? '#22d3ee' : ((selectedSkin === 'golden') ? '#f59e0b' : '#0ea5e9');

    if (isCorrect) {
        inputEl.className = "flex-1 bg-emerald-950/80 border-2 border-emerald-500 text-emerald-200 px-5 py-3.5 rounded-xl font-medium text-lg shadow-inner";
        state.totalCorrect++;
        state.score += 100 * (1 + Math.floor(state.streak/2));
        state.streak++;
        state.enemyHpCurrent--;

        engine.hero.triggerAttack(engine.enemy.x, projColor, () => {
            engine.enemy.triggerHit();
            engine.addParticle(engine.enemy.x, engine.enemy.y - 20, '#ef4444');
            playSound('hit');
            
            if (state.streak % 3 === 0 && state.streak > 0) {
                state.lifelines['shield']++;
                playSound('shield');
                engine.addText(engine.hero.x, engine.hero.y - 60, "+1 Shield!", "#22d3ee");
                updateHUD();
            }
        });

        showExplanation(true, q);
        addToLog(q, typedVal, true);

    } else {
        inputEl.className = "flex-1 bg-red-950/80 border-2 border-red-500 text-red-200 px-5 py-3.5 rounded-xl font-medium text-lg shadow-inner";
        state.streak = 0;
        
        engine.enemy.triggerAttack(engine.hero.x, '#ef4444', () => {
            if (state.shieldActive) {
                state.shieldActive = false;
                playSound('shield');
                engine.addText(engine.hero.x, engine.hero.y - 40, "Blocked!", "#22d3ee");
            } else {
                engine.hero.triggerHit();
                state.heroHp--;
                engine.addParticle(engine.hero.x, engine.hero.y - 20, '#f87171');
                playSound('wrong');
                playSound('hit');
            }
            updateHUD();
            if(state.heroHp <= 0) setTimeout(triggerGameOver, 1000);
        });

        showExplanation(false, q);
        addToLog(q, typedVal || "Geen antwoord", false);
    }

    updateHUD();
}

function showExplanation(isCorrect, q) {
    let box = document.getElementById('explanation-box');
    let title = document.getElementById('exp-title');
    
    box.classList.remove('hidden');
    box.classList.add('flex');
    
    if (isCorrect) {
        title.innerHTML = '✅ Correct!';
        title.className = 'font-game text-xl font-bold text-emerald-400';
        playSound('correct');
    } else {
        title.innerHTML = `❌ Incorrect (Juiste antwoord: "${q.a}")`;
        title.className = 'font-game text-xl font-bold text-red-400';
    }
    
    document.getElementById('exp-text').innerHTML = q.e;
}

function continueQuest() {
    playSound('attack');
    if (state.heroHp <= 0) return;

    if (state.enemyHpCurrent <= 0) {
        triggerLevelClear();
    } else {
        state.qIndex++;
        if (state.qIndex >= state.questionPool.length) {
            state.qIndex = 0;
            shuffleArray(state.questionPool);
        }
        renderQuestion();
    }
}

function triggerLevelClear() {
    document.getElementById('modal-overlay').classList.remove('hidden');
    document.getElementById('modal-overlay').classList.add('flex');
    
    if (state.levelIndex >= LEVELS_CONFIG.length - 1) {
        // Defeated French Book Boss Level!
        unlockNewSkins();
        document.getElementById('modal-victory').classList.remove('hidden');
        document.getElementById('vic-score').innerText = state.score;
        document.getElementById('vic-acc').innerText = Math.round((state.totalCorrect / state.totalAnswered) * 100) + '%';
    } else {
        document.getElementById('modal-level-clear').classList.remove('hidden');
    }
}

function startNextLevel() {
    document.getElementById('modal-overlay').classList.add('hidden');
    document.getElementById('modal-level-clear').classList.add('hidden');
    state.levelIndex++;
    loadLevel();
}

function triggerGameOver() {
    document.getElementById('modal-overlay').classList.remove('hidden');
    document.getElementById('modal-overlay').classList.add('flex');
    document.getElementById('modal-game-over').classList.remove('hidden');
    document.getElementById('go-score').innerText = state.score;
}

function useLifeline(type) {
    if (state.lifelines[type] <= 0 || state.isAnswering) return;

    if (type === 'hint') {
        let q = state.questionPool[state.qIndex];
        let ans = q.a;
        let hintStr = `Hint: Begint met "${ans.substring(0, 2)}" (${ans.length} tekens).`;
        let hintBox = document.getElementById('hint-display');
        hintBox.innerText = hintStr;
        hintBox.classList.remove('hidden');
        
        state.lifelines['hint']--;
        playSound('shield');
    } 
    else if (type === 'shield' && !state.shieldActive) {
        state.shieldActive = true;
        state.lifelines['shield']--;
        playSound('shield');
    }
    else if (type === 'freeze' && LEVELS_CONFIG[state.levelIndex].boss) {
        state.timeLeft += 15;
        document.getElementById('timer-text').innerText = `${state.timeLeft}s`;
        state.lifelines['freeze']--;
        playSound('shield');
    }
    updateHUD();
}

function updateHUD() {
    document.getElementById('hud-score').innerText = state.score;
    document.getElementById('hud-streak').innerText = `${state.streak}🔥`;
    
    let hearts = '';
    for(let i=0; i<5; i++) hearts += (i < state.heroHp) ? '❤️' : '🖤';
    document.getElementById('hud-lives').innerHTML = hearts;

    document.getElementById('cnt-hint').innerText = state.lifelines['hint'];
    document.getElementById('cnt-shield').innerText = state.lifelines['shield'];
    document.getElementById('cnt-freeze').innerText = state.lifelines['freeze'];

    let sBtn = document.getElementById('ll-shield');
    if(state.shieldActive) sBtn.classList.add('ring-2', 'ring-cyan-400', 'pulse-shield');
    else sBtn.classList.remove('ring-2', 'ring-cyan-400', 'pulse-shield');

    updateStatsTab();
}

function switchTab(tabId) {
    ['rules', 'stats', 'log', 'skins'].forEach(id => {
        document.getElementById('tab-' + id).classList.add('hidden');
        let btn = document.getElementById('tab-btn-' + id);
        btn.classList.remove('tab-active'); btn.classList.add('tab-inactive');
    });
    document.getElementById('tab-' + tabId).classList.remove('hidden');
    document.getElementById('tab-btn-' + tabId).classList.add('tab-active');
    document.getElementById('tab-btn-' + tabId).classList.remove('tab-inactive');
}

function updateStatsTab() {
    document.getElementById('stat-total').innerText = state.totalAnswered;
    document.getElementById('stat-correct').innerText = state.totalCorrect;
    let acc = state.totalAnswered === 0 ? 0 : Math.round((state.totalCorrect/state.totalAnswered)*100);
    document.getElementById('stat-acc').innerText = acc + '%';

    let mapHtml = '';
    LEVELS_CONFIG.forEach((cfg, idx) => {
        let status = (idx < state.levelIndex) ? '✅ Cleared' : (idx === state.levelIndex ? '⚔️ Current' : '🔒 Locked');
        let color = (idx < state.levelIndex) ? 'text-emerald-400' : (idx === state.levelIndex ? 'text-cyan-400 font-bold' : 'text-slate-500');
        mapHtml += `<div class="flex justify-between text-xs p-2 bg-slate-950 rounded-lg border border-slate-800 ${color}"><span>${cfg.title}</span> <span>${status}</span></div>`;
    });
    document.getElementById('realm-map').innerHTML = mapHtml;
}

function renderSkinsTab() {
    let container = document.getElementById('skins-list');
    if (!container) return;
    container.innerHTML = '';

    Object.keys(HERO_SKINS).forEach(key => {
        let skin = HERO_SKINS[key];
        let isUnlocked = unlockedSkins.includes(key);
        let isSelected = (selectedSkin === key);

        let card = document.createElement('div');
        card.className = `p-3 rounded-xl border flex items-center justify-between transition cursor-pointer ${
            isSelected ? 'bg-cyan-950/50 border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.3)]' :
            (isUnlocked ? 'bg-slate-900 border-slate-800 hover:border-slate-600' : 'bg-slate-950/60 border-slate-800/80 opacity-60')
        }`;

        card.onclick = () => {
            if (isUnlocked) {
                selectSkin(key);
                playSound('shield');
            }
        };

        let badgeHtml = isSelected ? '<span class="text-[10px] font-bold bg-cyan-500 text-slate-950 px-2 py-0.5 rounded-md uppercase">Selected</span>' :
                        (isUnlocked ? '<span class="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-500/30 uppercase">Unlocked</span>' :
                        '<span class="text-[10px] font-bold text-slate-500 bg-slate-900 px-2 py-0.5 rounded-md border border-slate-800 uppercase">🔒 Defeat Boss</span>');

        card.innerHTML = `
            <div class="flex items-center gap-3">
                <span class="text-2xl">${skin.icon}</span>
                <div>
                    <div class="font-bold text-xs text-slate-100">${skin.name}</div>
                    <div class="text-[11px] text-slate-400">${skin.desc}</div>
                </div>
            </div>
            <div>${badgeHtml}</div>
        `;
        container.appendChild(card);
    });
}

function addToLog(q, userAns, isCorrect) {
    let logArea = document.getElementById('log-content');
    if (logArea.innerHTML.includes('will appear here')) logArea.innerHTML = '';
    
    let cleanSentence = q.s.replace('_____', `[${q.a}]`);
    let icon = isCorrect ? '✅' : '❌';
    let color = isCorrect ? 'border-emerald-500/30 bg-emerald-950/20' : 'border-red-500/30 bg-red-950/20';

    let entry = document.createElement('div');
    entry.className = `p-3 rounded-lg border ${color} text-xs mb-2`;
    entry.innerHTML = `
        <div class="font-bold mb-1">${icon} ${cleanSentence}</div>
        <div class="text-slate-300">Jouw antwoord: <span class="font-mono">${userAns}</span></div>
        <div class="text-slate-400 italic mt-1">${q.e}</div>
    `;
    logArea.prepend(entry);
}

window.onload = () => {
    initGame();
};