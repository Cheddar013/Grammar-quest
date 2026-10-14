// --- DATABASE ---
const DB_QUESTIONS = {
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

const HERO_SKINS = {
    classic: { id: 'classic', name: 'Classic Hero', icon: '🤺', desc: 'The original grammar warrior.' },
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
        this.recoilX = 0; this.lungingX = 0;
    }

    draw(ctx) {
        ctx.save();
        const time = Date.now();
        let idleY = !this.isEnemy ? Math.sin(time / 250) * 3 : Math.abs(Math.sin(time / 180)) * -4;

        ctx.translate(this.x + this.recoilX + this.lungingX, this.y + idleY);

        ctx.fillStyle = this.colorBody;
        ctx.fillRect(-15, -40, 30, 45);

        ctx.fillStyle = this.colorHead;
        ctx.beginPath(); ctx.arc(0, -55, 14, 0, Math.PI*2); ctx.fill();

        ctx.restore();
    }
}

let hero = new Humanoid(250, false);
let enemy = new Humanoid(750, true);
let projectiles = [];

function initGame() {
    state.levelIndex = 0;
    state.heroHp = 5;
    state.score = 0;
    state.streak = 0;
    state.totalCorrect = 0;
    state.totalAnswered = 0;
    state.lifelines = { 'hint': 1, 'shield': 1, 'freeze': 1 };
    
    document.getElementById('modal-overlay').classList.add('hidden');
    document.getElementById('modal-game-over').classList.add('hidden');
    document.getElementById('modal-victory').classList.add('hidden');
    document.getElementById('modal-level-clear').classList.add('hidden');

    loadLevel(0);
    updateHUD();
    switchTab('rules');
}

function loadLevel(index) {
    state.levelIndex = index;
    const cfg = LEVELS_CONFIG[index];
    state.questionPool = [...DB_QUESTIONS[cfg.id]].sort(() => Math.random() - 0.5);
    state.qIndex = 0;
    state.enemyHpTotal = cfg.hitsNeeded;
    state.enemyHpCurrent = cfg.hitsNeeded;

    document.getElementById('hud-level-name').innerText = cfg.title;
    document.renderRules();
    loadQuestion();
}

function loadQuestion() {
    if (state.qIndex >= state.questionPool.length) {
        state.questionPool = [...DB_QUESTIONS[LEVELS_CONFIG[state.levelIndex].id]].sort(() => Math.random() - 0.5);
        state.qIndex = 0;
    }
    const q = state.questionPool[state.qIndex];
    document.getElementById('q-text').innerText = q.s;
    document.getElementById('q-progress').innerText = `Enemy HP: ${state.enemyHpCurrent} / ${state.enemyHpTotal}`;
    document.getElementById('user-answer-input').value = '';
    document.getElementById('user-answer-input').disabled = false;
    document.getElementById('submit-ans-btn').disabled = false;
    document.getElementById('explanation-box').classList.add('hidden');
    document.getElementById('hint-display').classList.add('hidden');
    document.getElementById('user-answer-input').focus();
}

function submitTypedAnswer(e) {
    e.preventDefault();
    const inputVal = document.getElementById('user-answer-input').value.trim().toLowerCase();
    if (!inputVal) return;

    const q = state.questionPool[state.qIndex];
    const correctA = q.a.toLowerCase();
    const altA = q.alt ? q.alt.toLowerCase() : null;

    const isCorrect = (inputVal === correctA || (altA && inputVal === altA));

    state.totalAnswered++;
    if (isCorrect) {
        state.totalCorrect++;
        state.streak++;
        state.score += 100 * state.streak;
        playSound('correct');
        
        projectiles.push(new Projectile(hero.x, hero.y - 30, enemy.x, '#06b6d4', () => {
            state.enemyHpCurrent--;
            playSound('hit');
            if (state.enemyHpCurrent <= 0) {
                triggerLevelClear();
            } else {
                loadQuestion();
            }
        }));
    } else {
        state.streak = 0;
        playSound('wrong');
        state.heroHp--;
        playSound('hit');
        if (state.heroHp <= 0) {
            triggerGameOver();
        } else {
            showExplanation(false, q);
        }
    }
    updateHUD();
}

function showExplanation(correct, q) {
    document.getElementById('explanation-box').classList.remove('hidden');
    document.getElementById('exp-title').innerText = correct ? "Correct! 🎉" : "Incorrect ❌";
    document.getElementById('exp-title').className = correct ? "font-game text-lg font-bold text-emerald-400" : "font-game text-lg font-bold text-red-400";
    document.getElementById('exp-text').innerHTML = `Correct answer: <b>${q.a}</b><br>${q.e}`;
}

function continueQuest() {
    document.getElementById('explanation-box').classList.add('hidden');
    state.qIndex++;
    loadQuestion();
}

function triggerLevelClear() {
    if (state.levelIndex >= LEVELS_CONFIG.length - 1) {
        unlockNewSkins();
        document.getElementById('vic-score').innerText = state.score;
        document.getElementById('vic-acc').innerText = Math.round((state.totalCorrect / Math.max(1, state.totalAnswered)) * 100) + '%';
        document.getElementById('modal-overlay').classList.remove('hidden');
        document.getElementById('modal-victory').classList.remove('hidden');
    } else {
        document.getElementById('modal-overlay').classList.remove('hidden');
        document.getElementById('modal-level-clear').classList.remove('hidden');
    }
}

function startNextLevel() {
    document.getElementById('modal-overlay').classList.add('hidden');
    document.getElementById('modal-level-clear').classList.add('hidden');
    loadLevel(state.levelIndex + 1);
}

function triggerGameOver() {
    document.getElementById('go-score').innerText = state.score;
    document.getElementById('modal-overlay').classList.remove('hidden');
    document.getElementById('modal-game-over').classList.remove('hidden');
}

function updateHUD() {
    let livesHtml = '';
    for (let i = 0; i < 5; i++) {
        livesHtml += i < state.heroHp ? '❤️' : '🖤';
    }
    document.getElementById('hud-lives').innerHTML = livesHtml;
    document.getElementById('hud-score').innerText = state.score;
    document.getElementById('hud-streak').innerText = state.streak;
}

function switchTab(tabId) {
    ['rules', 'stats', 'log', 'skins'].forEach(t => {
        document.getElementById(`tab-${t}`).classList.add('hidden');
        document.getElementById(`tab-btn-${t}`).className = "flex-1 py-3.5 tab-inactive transition";
    });
    document.getElementById(`tab-${tabId}`).classList.remove('hidden');
    document.getElementById(`tab-btn-${tabId}`).className = "flex-1 py-3.5 tab-active transition";
    if (tabId === 'stats') updateStatsTab();
    if (tabId === 'skins') renderSkinsTab();
}

document.renderRules = function() {
    document.getElementById('rules-content').innerHTML = LEVELS_CONFIG[state.levelIndex].rules;
}

function updateStatsTab() {
    document.getElementById('stat-total').innerText = state.totalAnswered;
    document.getElementById('stat-correct').innerText = state.totalCorrect;
    const acc = state.totalAnswered > 0 ? Math.round((state.totalCorrect / state.totalAnswered) * 100) : 0;
    document.getElementById('stat-acc').innerText = acc + '%';
    document.getElementById('stat-high').innerText = state.score;

    let mapHtml = '';
    LEVELS_CONFIG.forEach((lvl, idx) => {
        const active = idx === state.levelIndex;
        mapHtml += `<div class="flex items-center justify-between p-2 rounded-lg ${active ? 'bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 font-bold' : 'text-slate-500'}">
            <span>Stage ${idx + 1}: ${lvl.enemyName}</span>
            <span>${idx < state.levelIndex ? '✅' : active ? '⚔️' : '🔒'}</span>
        </div>`;
    });
    document.getElementById('realm-map').innerHTML = mapHtml;
}

function renderSkinsTab() {
    let html = '';
    Object.values(HERO_SKINS).forEach(skin => {
        const unlocked = unlockedSkins.includes(skin.id);
        const selected = selectedSkin === skin.id;
        html += `<div class="flex items-center justify-between p-3 rounded-xl border ${selected ? 'border-emerald-500 bg-emerald-950/30' : 'border-slate-800 bg-slate-900'}">
            <div class="flex items-center gap-3">
                <span class="text-2xl">${skin.icon}</span>
                <div>
                    <div class="font-bold text-slate-200">${skin.name}</div>
                    <div class="text-[10px] text-slate-400">${skin.desc}</div>
                </div>
            </div>
            <div>
                ${unlocked ? `<button onclick="selectSkin('${skin.id}')" class="px-3 py-1 rounded-lg text-xs font-bold ${selected ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}">${selected ? 'Active' : 'Select'}</button>` : '<span class="text-xs text-slate-600">Locked 🔒</span>'}
            </div>
        </div>`;
    });
    document.getElementById('skins-list').innerHTML = html;
}

function useLifeline(type) {
    if (state.lifelines[type] <= 0) return;
    state.lifelines[type]--;
    document.getElementById(`cnt-${type}`).innerText = state.lifelines[type];
    document.getElementById(`ll-${type}`).classList.add('opacity-50', 'pointer-events-none');

    if (type === 'hint') {
        const q = state.questionPool[state.qIndex];
        const hintEl = document.getElementById('hint-display');
        hintEl.classList.remove('hidden');
        hintEl.innerText = `💡 Hint: ${q.e}`;
    } else if (type === 'shield') {
        state.shieldActive = true;
        playSound('shield');
    }
}

// Animation Loop
function gameLoop() {
    ctx.clearRect(0, 0, cvs.width, cvs.height);

    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1;
    for (let i = 0; i < cvs.width; i += 40) {
        ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, cvs.height); ctx.stroke();
    }

    projectiles.forEach(p => { p.update(); p.draw(ctx); });
    projectiles = projectiles.filter(p => p.active);

    hero.draw(ctx);
    enemy.draw(ctx);

    animationFrameId = requestAnimationFrame(gameLoop);
}

window.onload = () => {
    initGame();
    gameLoop();
};
