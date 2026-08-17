
        const letters = [
            { arabic: 'ا', name: 'Alif', makhraj: 'Throat (empty throat / hollow space)', description: 'The deepest point in the throat. No tongue or lip movement is needed for a clear, open sound.', examples: [{ word: 'الْحَمْد', meaning: 'Al-Hamd (The Praise)' }, { word: 'ءَامَن', meaning: 'Aaman (Believed)' }, { word: 'أَكَل', meaning: 'Akala (Ate)' }], image: '/images/letters/alif.png' },
            { arabic: 'ب', name: 'Ba', makhraj: 'Lips (both lips are pressed together)', description: 'The sound is produced when both lips meet and then release gently, creating a clean, crisp stop.', examples: [{ word: 'بِسْم', meaning: 'Bismillah (In the name)' }, { word: 'رَب', meaning: 'Rabb (Lord)' }, { word: 'بَيْت', meaning: 'Bayt (House)' }], image: '/images/letters/ba.png' },
            { arabic: 'ت', name: 'Ta', makhraj: 'Alveoli (front of the upper ridge behind the teeth)', description: 'The tongue tip touches the ridge behind the upper front teeth, producing a light and crisp articulation.', examples: [{ word: 'تَوْحِيد', meaning: 'Tawheed (Monotheism)' }, { word: 'قَالَت', meaning: 'Qalat (She said)' }, { word: 'بَيِّنَة', meaning: 'Bayyinah (Clear proof)' }], image: '/images/letters/ta.png' },
            { arabic: 'ث', name: 'Tha', makhraj: 'Between upper and lower front teeth', description: 'The tongue tip sits between the upper and lower front teeth, creating a soft, fricative sound.', examples: [{ word: 'ثَمَانِي', meaning: 'Themani (Eight)' }, { word: 'ثِقَال', meaning: 'Thiqal (Heavy)' }, { word: 'مَوْثُوق', meaning: 'Mawthuq (Firmly tied)' }], image: '/images/letters/tha.png' },
            { arabic: 'ج', name: 'Jeem', makhraj: 'Middle of the hard palate', description: 'The tongue body lifts toward the middle of the hard palate, producing a rich, resonant sound.', examples: [{ word: 'جَزَاء', meaning: 'Jazaa (Reward)' }, { word: 'جَنَّة', meaning: 'Jannah (Paradise)' }, { word: 'أَجْر', meaning: 'Ajr (Reward)' }], image: '/images/letters/jeem.png' },
            { arabic: 'ح', name: 'Ha', makhraj: 'Lower throat', description: 'Air is released from the lower throat with a calm, aspirated depth that is distinct in recitation.', examples: [{ word: 'الْحَمْد', meaning: 'Al-Hamd (The Praise)' }, { word: 'حَكِيم', meaning: 'Hakeem (The Wise)' }, { word: 'نَاحِيَة', meaning: 'Nahiyah (Direction)' }], image: '/images/letters/ha_lower.png' },
            { arabic: 'خ', name: 'Kha', makhraj: 'Lower throat toward the soft palate', description: 'A deep guttural sound from the lower throat, often heavier and darker than Ha.', examples: [{ word: 'خَلَقَ', meaning: 'Khalaq (Created)' }, { word: 'الْخَيْر', meaning: 'Al-Khair (The Good)' }, { word: 'مُخْتَلِف', meaning: 'Mukhtalif (Different)' }], image: '/images/letters/kha.png' },
            { arabic: 'د', name: 'Dal', makhraj: 'Alveoli ridge', description: 'The tongue tip touches the upper ridge and releases sharply, producing a clear dental stop.', examples: [{ word: 'دِين', meaning: 'Deen (Religion)' }, { word: 'هُدًى', meaning: 'Huda (Guidance)' }, { word: 'سُجُود', meaning: 'Sujud (Prostration)' }], image: '/images/letters/dal.png' },
            { arabic: 'ذ', name: 'Dhal', makhraj: 'Between upper and lower front teeth', description: 'A voiced fricative sound with the tongue placed delicately between the front teeth.', examples: [{ word: 'ذَكَرَ', meaning: 'Dhakara (Remembered)' }, { word: 'الَّذِي', meaning: 'Al-Ladhi (The one who)' }, { word: 'إِذَا', meaning: 'Idha (When)' }], image: '/images/letters/dhal.png' },
            { arabic: 'ر', name: 'Ra', makhraj: 'Alveoli with vibration', description: 'The tongue tip lightly vibrates against the alveoli, producing a clear trill.', examples: [{ word: 'رَب', meaning: 'Rabb (Lord)' }, { word: 'رَحْمَة', meaning: 'Rahmah (Mercy)' }, { word: 'مَرَّة', meaning: 'Marrah (Once/Times)' }], image: '/images/letters/ra.png' },
            { arabic: 'ز', name: 'Zay', makhraj: 'Alveoli area', description: 'The tongue sits near the alveoli with a gentle flow of air, forming a smooth voiced fricative.', examples: [{ word: 'زَمَان', meaning: 'Zaman (Time/Era)' }, { word: 'مَزِيد', meaning: 'Mazid (Increase)' }, { word: 'مِزَاج', meaning: 'Mizaj (Temperament)' }], image: '/images/letters/zay.png' },
            { arabic: 'س', name: 'Seen', makhraj: 'Alveoli area', description: 'The tongue tip approaches the upper ridge without touching it, producing a clean hissing sound.', examples: [{ word: 'السَّلَام', meaning: 'As-Salam (Peace)' }, { word: 'سُورَة', meaning: 'Surah (Chapter)' }, { word: 'نَاسَ', meaning: 'Nas (People)' }], image: '/images/letters/seen.png' },
            { arabic: 'ش', name: 'Sheen', makhraj: 'Hard palate and alveoli area', description: 'A combined sound created by the tongue arching toward the hard palate while air passes freely.', examples: [{ word: 'شَرِيف', meaning: 'Sharif (Noble)' }, { word: 'شُهُود', meaning: 'Shuhud (Witnesses)' }, { word: 'يَشَاء', meaning: 'Yasha (Wills/Wishes)' }], image: '/images/letters/sheen.png' },
            { arabic: 'ص', name: 'Sad', makhraj: 'Alveoli with emphasis', description: 'An emphatic version of Seen, produced with weight and focus in the upper tongue area.', examples: [{ word: 'الصَّلَاة', meaning: 'As-Salah (Prayer)' }, { word: 'صَبْر', meaning: 'Sabr (Patience)' }, { word: 'صِدْق', meaning: 'Sidq (Truthfulness)' }], image: '/images/letters/sad.png' },
            { arabic: 'ض', name: 'Dad', makhraj: 'Alveoli with tongue-side contact', description: 'The sides of the tongue press gently against the alveoli, giving this letter a distinctive, emphatic resonance.', examples: [{ word: 'ضَيْع', meaning: 'Daya (Waste/Lost)' }, { word: 'ضَرَّ', meaning: 'Darra (Harm)' }, { word: 'قَاضِي', meaning: 'Qadi (Judge)' }], image: '/images/letters/dad.png' },
            { arabic: 'ط', name: 'Tah', makhraj: 'Alveoli with emphasis', description: 'A strong, emphatic stop that is pronounced with the tongue tip high and firm near the alveoli.', examples: [{ word: 'الطَّارِق', meaning: 'At-Tariq (The piercer)' }, { word: 'طَلَب', meaning: 'Talab (Sought)' }, { word: 'سِطِ', meaning: 'Sitr (Covering)' }], image: '/images/letters/tah.png' },
            { arabic: 'ظ', name: 'Za (Zha)', makhraj: 'Alveoli and upper teeth with emphasis', description: 'The tongue meets the upper front teeth with emphasis, creating a deep emphatic fricative.', examples: [{ word: 'الظَّلِيم', meaning: 'Az-Zalim (The oppressor)' }, { word: 'ظَهْر', meaning: 'Zahr (Back/Apparent)' }, { word: 'نَاظِر', meaning: 'Nazir (Observer)' }], image: '/images/letters/za.png' },
            { arabic: 'ع', name: 'Ayn', makhraj: 'Middle throat', description: 'A deep guttural sound from the middle of the throat, known for its rounded, resonant quality.', examples: [{ word: 'عَلِيم', meaning: 'Aleem (The All-Knowing)' }, { word: 'عَذَاب', meaning: 'Adhab (Punishment)' }, { word: 'سَمِيع', meaning: 'Samee (The All-Hearing)' }], image: '/images/letters/ayn.png' },
            { arabic: 'غ', name: 'Ghain', makhraj: 'Upper throat and soft palate', description: 'A deep, resonant guttural sound produced from the back of the throat with soft palate involvement.', examples: [{ word: 'غَفُور', meaning: 'Ghafur (The Forgiving)' }, { word: 'غَيْب', meaning: 'Ghayb (The Unseen)' }, { word: 'مَغْفِرَة', meaning: 'Maghfirah (Forgiveness)' }], image: '/images/letters/ghain.png' },
            { arabic: 'ف', name: 'Fa', makhraj: 'Lower lip against upper front teeth', description: 'The lower lip meets the upper front teeth and releases with a light fricative airflow.', examples: [{ word: 'فِي', meaning: 'Fi (In)' }, { word: 'فَوْق', meaning: 'Fawq (Above)' }, { word: 'طَيِّب', meaning: 'Tayyib (Good)' }], image: '/images/letters/fa.png' },
            { arabic: 'ق', name: 'Qaf', makhraj: 'Soft palate area', description: 'A deep, heavy sound formed by the back of the tongue contacting the soft palate with strength.', examples: [{ word: 'قُرْآن', meaning: 'Quran (The Quran)' }, { word: 'قَوْم', meaning: 'Qawm (People)' }, { word: 'حَقِيق', meaning: 'Haqiq (True/Real)' }], image: '/images/letters/qaf.png' },
            { arabic: 'ك', name: 'Kaf', makhraj: 'Hard palate and back of tongue', description: 'The back of the tongue meets the hard palate, producing a strong but slightly lighter articulation than Qaf.', examples: [{ word: 'كَرِيم', meaning: 'Karim (The Noble)' }, { word: 'كِتَاب', meaning: 'Kitab (Book)' }, { word: 'مَلِك', meaning: 'Malik (King)' }], image: '/images/letters/kaf.png' },
            { arabic: 'ل', name: 'Lam', makhraj: 'Alveoli with side airflow', description: 'The tongue tip reaches the alveoli while air flows around the sides, giving this letter a smooth lateral sound.', examples: [{ word: 'لَيْس', meaning: 'Laysa (Is not)' }, { word: 'إِلَٰه', meaning: 'Ilah (Deity)' }, { word: 'لَا', meaning: 'La (No)' }], image: '/images/letters/lam.png' },
            { arabic: 'م', name: 'Meem', makhraj: 'Both lips', description: 'Both lips close and the sound is released through the nose, creating a clear nasal articulation.', examples: [{ word: 'مُحَمَّد', meaning: 'Muhammad (The Praised)' }, { word: 'مِن', meaning: 'Min (From)' }, { word: 'أَمِين', meaning: 'Amin (Trustworthy)' }], image: '/images/letters/meem.png' },
            { arabic: 'ن', name: 'Noon', makhraj: 'Alveoli with nasal resonance', description: 'The tongue tip rests on the alveoli while the sound flows through the nose, giving a resonant nasal tone.', examples: [{ word: 'نِعْمَة', meaning: 'Neemah (Blessing)' }, { word: 'نُور', meaning: 'Nur (Light)' }, { word: 'سُبْحَانَ', meaning: 'Subhan (Glorified)' }], image: '/images/letters/noon.png' },
            { arabic: 'و', name: 'Waw', makhraj: 'Lips with rounding', description: 'The lips round and the sound is produced with a smooth, flowing quality similar to a semi-vowel.', examples: [{ word: 'وَاحِد', meaning: 'Wahid (One/Unique)' }, { word: 'وَعْد', meaning: 'Waad (Promise)' }, { word: 'عَدْل', meaning: 'Adl (Justice)' }], image: '/images/letters/waw.png' },
             { arabic: 'ه', name: 'Ha', makhraj: 'Upper throat', description: 'The sound is produced in the upper throat, producing a light, breathy articulation often heard in Quranic recitation.', examples: [{ word: 'هُوَ', meaning: 'Huwa (He)' }, { word: 'هَدَى', meaning: 'Hada (Guided)' }, { word: 'مَاهِيَّة', meaning: 'Mahiyyah (Essence)' }], image: '/images/letters/ha_upper.png' },
             { arabic: 'ء', name: 'Hamza', makhraj: 'Deepest throat', description: 'A clear glottal stop produced from the deepest point of the throat, distinct from the open Alif sound.', examples: [{ word: 'أَحَد', meaning: 'Ahad (One)' }, { word: 'سَأَل', meaning: 'Sa’ala (Asked)' }, { word: 'يَقْرَأ', meaning: 'Yaqra (Reads)' }], image: '/images/letters/hamza.png' },
            { arabic: 'ي', name: 'Ya', makhraj: 'Hard palate', description: 'The middle of the tongue rises toward the hard palate, creating a fluid semi-vowel sound.', examples: [{ word: 'يَقِين', meaning: 'Yaqin (Certainty)' }, { word: 'يَوْم', meaning: 'Yawm (Day)' }, { word: 'نَبِي', meaning: 'Nabi (Prophet)' }], image: '/images/letters/ya.png' }
        ];

         const audioSegments = [
             { arabic: 'ا', name: 'Alif', start: 0.0, end: 1.3},
             { arabic: 'ب', name: 'Ba', start: 1.7, end: 2.8 },
             { arabic: 'ت', name: 'Ta', start: 3.0, end: 4.5},
             { arabic: 'ث', name: 'Tha', start: 4.6, end: 5.8 },
             { arabic: 'ج', name: 'Jeem', start:5.9, end: 7.2 },
             { arabic: 'ح', name: 'Ha', start: 7.3, end:8.7},
             { arabic: 'خ', name: 'Kha', start: 8.8, end: 9.7},
             { arabic: 'د', name: 'Dal', start: 9.7, end: 11.2 },
             { arabic: 'ذ', name: 'Dhal', start: 11.3, end: 12.5 },
             { arabic: 'ر', name: 'Ra', start: 12.6, end: 14.4 },
             { arabic: 'ز', name: 'Zay', start: 14.4, end: 15.8 },
             { arabic: 'س', name: 'Seen', start: 15.8, end: 17.2},
             { arabic: 'ش', name: 'Sheen', start: 17.4, end: 19.5 },
             { arabic: 'ص', name: 'Sad', start: 19.6, end: 22.0 },
             { arabic: 'ض', name: 'Dad', start: 22.4, end: 24.0 },
             { arabic: 'ط', name: 'Tah', start: 24.1, end: 25.2 },
             { arabic: 'ظ', name: 'Za (Zha)', start: 25.2, end: 26.6 },
             { arabic: 'ع', name: 'Ayn', start: 26.6, end: 28.4 },
             { arabic: 'غ', name: 'Ghain', start: 28.4, end: 30.1 },
             { arabic: 'ف', name: 'Fa', start: 30.1, end: 31.9 },
             { arabic: 'ق', name: 'Qaf', start: 31.9, end: 33.4 },
             { arabic: 'ك', name: 'Kaf', start: 33.4, end: 35.1 },
             { arabic: 'ل', name: 'Lam', start: 35.1, end: 36.8 },
             { arabic: 'م', name: 'Meem', start: 36.8, end: 38.4},
             { arabic: 'ن', name: 'Noon', start: 38.7, end: 39.9},
              { arabic: 'و', name: 'Waw', start: 40.0, end: 41.4 },
             { arabic: 'ه', name: 'Ha', start: 41.5, end: 42.6},
             { arabic: 'ء', name: 'Hamza', start: 42.7, end: 43.6},
            { arabic: 'ي', name: 'Ya', start: 43.8, end: 45.0}
         ];

         const segmentByArabic = new Map(audioSegments.map((segment) => [segment.arabic, segment]));
         letters.forEach((letter) => Object.assign(letter, segmentByArabic.get(letter.arabic) || {}));

         const alphabet = ['ا', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ك', 'ل', 'م', 'ن', 'و', 'ه', 'ء', 'ي'];
        const container = document.getElementById('lettersContainer');
        const searchInput = document.getElementById('searchInput');
        const alphaNav = document.getElementById('alphaNav');
        const themeToggle = document.getElementById('themeToggle');
         const audio = document.getElementById('mainAudio');
         const playAudioButton = document.getElementById('playAudio');
         const pauseAudioButton = document.getElementById('pauseAudio');
         const stopAudioButton = document.getElementById('stopAudio');
         const rewindAudioButton = document.getElementById('rewindAudio');
         const forwardAudioButton = document.getElementById('forwardAudio');
         const speedControl = document.getElementById('speedControl');
         const volumeControl = document.getElementById('volumeControl');
         const volumeValue = document.getElementById('volumeValue');
         const currentLetterInfo = document.getElementById('currentLetterInfo');
         const currentTimeInfo = document.getElementById('currentTimeInfo');
         const totalTimeInfo = document.getElementById('totalTimeInfo');
         const speedInfo = document.getElementById('speedInfo');
         const audioStatus = document.getElementById('audioStatus');
        const savedTheme = localStorage.getItem('tajweed-theme');
        const savedLearned = JSON.parse(localStorage.getItem('tajweed-learned') || '{}');
         let activeSegment = null;
         let isSegmentPlayback = false;

         function formatTime(seconds, round = false) {
             if (!Number.isFinite(seconds) || seconds < 0) return '00:00';
             const totalSeconds = round ? Math.round(seconds) : Math.floor(seconds);
             const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
             const remainder = (totalSeconds % 60).toString().padStart(2, '0');
             return `${minutes}:${remainder}`;
         }

         function setAudioStatus(message, isError = false) {
             audioStatus.textContent = message;
             audioStatus.classList.toggle('error', isError);
         }

         function updatePlayingCards() {
             document.querySelectorAll('.letter-card').forEach((card) => {
                 const isPlaying = !!activeSegment && !audio.paused && card.dataset.letterKey === activeSegment.arabic;
                 card.classList.toggle('now-playing', isPlaying);
                 const button = card.querySelector('.segment-play');
                 if (button) {
                     button.classList.toggle('is-playing', isPlaying && !audio.paused);
                     button.setAttribute('aria-label', `${isPlaying && !audio.paused ? 'Playing' : 'Play'} ${activeSegment ? activeSegment.name : ''} pronunciation`);
                 }
             });
         }

         function setActiveSegment(segment, segmentPlayback = false) {
             activeSegment = segment;
             isSegmentPlayback = !!segment && segmentPlayback;
             if (segment) {
                 currentLetterInfo.textContent = `${segment.arabic} ${segment.name}`;
             } else {
                 currentLetterInfo.textContent = 'None';
             }
             updatePlayingCards();
         }

         function updatePlaybackInfo() {
             currentTimeInfo.textContent = formatTime(audio.currentTime);
             totalTimeInfo.textContent = formatTime(audio.duration || 0, true);
             speedInfo.textContent = `${audio.playbackRate}x`;
             volumeValue.textContent = `${Math.round(audio.volume * 100)}%`;
             if (!isSegmentPlayback && !audio.paused) {
                 const currentSegment = audioSegments.find((segment) => audio.currentTime >= segment.start && audio.currentTime < segment.end);
                 if (currentSegment) setActiveSegment(currentSegment, false);
             }
             updatePlayingCards();
         }

         function playSegment(segment) {
             if (audio.error) {
                 setAudioStatus('Audio file not found. Add the pronunciation recording to the project and reload the page.', true);
                 return;
             }
             setActiveSegment(segment, true);
             audio.currentTime = segment.start;
             setAudioStatus(`Playing ${segment.arabic} ${segment.name} (${segment.start}-${segment.end} sec).`);
             audio.play().catch(() => {
                 setAudioStatus('The audio could not start. Check that the pronunciation file exists and playback is allowed.', true);
             });
         }

         audio.addEventListener('loadedmetadata', updatePlaybackInfo);
         audio.addEventListener('timeupdate', () => {
             if (isSegmentPlayback && activeSegment && audio.currentTime >= activeSegment.end) {
                 audio.pause();
                 audio.currentTime = activeSegment.end;
                 setAudioStatus(`${activeSegment.arabic} ${activeSegment.name} segment complete.`);
                 setActiveSegment(null);
             }
             updatePlaybackInfo();
         });
         audio.addEventListener('play', updatePlaybackInfo);
         audio.addEventListener('pause', updatePlaybackInfo);
         audio.addEventListener('ended', () => {
             setActiveSegment(null);
             setAudioStatus('Audio finished.');
             updatePlaybackInfo();
         });
         audio.addEventListener('error', () => {
             setAudioStatus('Audio file not found. Add the pronunciation recording to the project and reload the page.', true);
         });

         playAudioButton.addEventListener('click', () => {
             if (audio.currentTime >= (audio.duration || 47)) audio.currentTime = 0;
             audio.play().catch(() => setAudioStatus('The audio could not start. Check that the pronunciation file exists.', true));
         });
         pauseAudioButton.addEventListener('click', () => audio.pause());
         stopAudioButton.addEventListener('click', () => {
             audio.pause();
             audio.currentTime = 0;
             setActiveSegment(null);
             setAudioStatus('Audio stopped and reset to the beginning.');
             updatePlaybackInfo();
         });
         rewindAudioButton.addEventListener('click', () => {
             audio.currentTime = Math.max(0, audio.currentTime - 2);
             if (isSegmentPlayback && activeSegment && audio.currentTime < activeSegment.start) setActiveSegment(null);
             updatePlaybackInfo();
         });
         forwardAudioButton.addEventListener('click', () => {
             audio.currentTime = Math.min(audio.duration || 47, audio.currentTime + 2);
             if (isSegmentPlayback && activeSegment && audio.currentTime >= activeSegment.end) setActiveSegment(null);
             updatePlaybackInfo();
         });
         speedControl.addEventListener('change', () => {
             audio.playbackRate = Number(speedControl.value);
             updatePlaybackInfo();
         });
         volumeControl.addEventListener('input', () => {
             audio.volume = Number(volumeControl.value);
             updatePlaybackInfo();
         });

        function getVisibleLetters() {
            const query = searchInput.value.trim().toLowerCase();
            if (!query) return letters;
            return letters.filter((letter) => {
                const haystack = `${letter.arabic} ${letter.name} ${letter.makhraj} ${letter.description}`.toLowerCase();
                return haystack.includes(query);
            });
        }

        function setTheme(mode) {
            const isDark = mode === 'dark';
            document.body.classList.toggle('dark-mode', isDark);
            themeToggle.textContent = isDark ? '🌙' : '☀️';
            themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
            localStorage.setItem('tajweed-theme', isDark ? 'dark' : 'light');
        }

        function updateLearnedState() {
            const learnedButtons = document.querySelectorAll('.learn-toggle');
            learnedButtons.forEach((button) => {
                const letterName = button.dataset.letter;
                const isLearned = !!savedLearned[letterName];
                button.textContent = isLearned ? 'Learned ✓' : 'Mark learned';
                button.classList.toggle('is-learned', isLearned);
                button.setAttribute('aria-pressed', String(isLearned));
                const card = button.closest('.letter-card');
                card.classList.toggle('learned', isLearned);
            });
        }

        function renderAlphaNav() {
            alphaNav.innerHTML = alphabet.map((letter) => `
                <button class="nav-btn" type="button" data-letter="${letter}" aria-label="Jump to ${letter}">${letter}</button>
            `).join('');

            alphaNav.addEventListener('click', (event) => {
                const button = event.target.closest('.nav-btn');
                if (!button) return;
                const target = document.querySelector(`[data-letter-key="${button.dataset.letter}"]`);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    const activeButtons = alphaNav.querySelectorAll('.nav-btn');
                    activeButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
                }
            });
        }

        function renderLetters() {
            const visible = getVisibleLetters();
            if (!visible.length) {
                container.innerHTML = `
                    <div class="letter-card" style="grid-column: 1 / -1; opacity:1; transform:none;">
                        <div class="info-box">
                            <h3>No matches</h3>
                            <p>No letters match your search. Try another Arabic letter or English sound name.</p>
                        </div>
                    </div>
                `;
                return;
            }

            container.innerHTML = visible.map((letter, index) => {
                const isLearned = !!savedLearned[letter.name];
                return `
                    <article class="letter-card ${isLearned ? 'learned' : ''}" data-letter-key="${letter.arabic}" tabindex="0" aria-label="Letter ${letter.name} ${letter.arabic}">
                        <div class="card-head">
                            <span class="mini-tag">Letter ${index + 1}</span>
                            <button class="learn-toggle ${isLearned ? 'is-learned' : ''}" data-letter="${letter.name}" type="button" aria-pressed="${String(isLearned)}">${isLearned ? 'Learned ✓' : 'Mark learned'}</button>
                        </div>

                        <div class="letter-header">
                            <div class="arabic-letter" lang="ar" aria-label="Arabic letter ${letter.arabic}">${letter.arabic}</div>
                            <div class="letter-meta">
                                <div class="letter-name">${letter.name}</div>
                                <div class="letter-code">${letter.arabic} • Arabic letter</div>
                            </div>
                        </div>

                        <div class="info-box">
                            <h3>🗣️ Makhraj</h3>
                            <p>${letter.makhraj}</p>
                        </div>

                        <div class="info-box danger">
                            <h3>📖 Articulation</h3>
                            <p>${letter.description}</p>
                        </div>

                        <div class="media-block">
                            <div class="media-label"><span>🧩 Makhraj Illustration</span></div>
                            <div class="media-box ${letter.image ? 'has-image' : ''}" aria-label="Makhraj illustration for ${letter.name}">
                                ${letter.image ? `
                                    <img src="${letter.image}" alt="Anatomical diagram of makhraj for ${letter.name}" class="letter-makhraj-img" onerror="this.parentElement.classList.remove('has-image'); this.style.display='none'; this.nextElementSibling.style.display='flex';" />
                                ` : ''}
                                <div class="makhraj-placeholder-card" style="${letter.image ? 'display:none;' : ''}">
                                    <div class="ph-icon">🖼️</div>
                                    <div class="ph-seq">Sequence #${index + 1} • ${letter.name} (${letter.arabic})</div>
                                    <div class="ph-file">Expected File: <code>${letter.image ? letter.image.split('/').pop() : letter.name.toLowerCase() + '.png'}</code></div>
                                    <div class="ph-path">Path: <code>/images/letters/${letter.image ? letter.image.split('/').pop() : letter.name.toLowerCase() + '.png'}</code></div>
                                    <div class="ph-badge">Awaiting Image Upload</div>
                                </div>
                            </div>
                        </div>

                        <div class="media-block">
                            <div class="media-label"><span>🔊 Audio</span></div>
                            <div class="media-box" aria-label="Audio pronunciation for ${letter.name}">
                                <button class="segment-play" type="button" data-letter-key="${letter.arabic}" aria-label="Play ${letter.name} pronunciation">
                                    ▶ <span>Play (${letter.start}-${letter.end} sec)</span>
                                </button>
                            </div>
                        </div>

                        <div class="examples-box">
                            <h3>✨ Quranic Examples</h3>
                            <div class="example-list">
                                ${letter.examples.map((example) => `
                                    <div class="example-item">
                                        <div class="word-arabic" dir="rtl">${example.word}</div>
                                        <div class="word-meaning">${example.meaning}</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </article>
                `;
            }).join('');

            setTimeout(() => {
                const cards = document.querySelectorAll('.letter-card');
                cards.forEach((card, index) => {
                    setTimeout(() => card.classList.add('is-visible'), index * 70);
                });
            }, 20);

            updateLearnedState();

            container.querySelectorAll('.learn-toggle').forEach((button) => {
                button.addEventListener('click', () => {
                    const key = button.dataset.letter;
                    savedLearned[key] = !savedLearned[key];
                    localStorage.setItem('tajweed-learned', JSON.stringify(savedLearned));
                    renderLetters();
                });
            });

            container.querySelectorAll('.segment-play').forEach((button) => {
                button.addEventListener('click', () => {
                    const segment = segmentByArabic.get(button.dataset.letterKey);
                    if (segment) playSegment(segment);
                });
            });
        }

        searchInput.addEventListener('input', renderLetters);

        themeToggle.addEventListener('click', () => {
            const nextTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
            setTheme(nextTheme);
        });

        if (savedTheme === 'dark') {
            setTheme('dark');
        } else {
            setTheme('light');
        }

        renderAlphaNav();
        renderLetters();
    