function back() {
            document.getElementById('searchInput').value = '';
            document.getElementById('enBtn').classList.remove('hidden');
            document.getElementById('frBtn').classList.remove('hidden');
            document.getElementById('mangaBtn').classList.add('hidden');
            document.getElementById('filmBtn').classList.add('hidden');
            document.getElementById('webtoonBtn').classList.add('hidden');
            document.getElementById('fantastiqueBtn').classList.add('hidden');
            document.getElementById('actionBtn').classList.add('hidden');
            document.getElementById('romantiqueBtn').classList.add('hidden');
            document.getElementById('rockBtn').classList.add('hidden');
            document.getElementById('11eSiecleBtn').classList.add('hidden');
            document.getElementById('frenchyBtn').classList.add('hidden');
        }



        function toggleLanguage(language) {
            if (language === 'fr') {
                document.getElementById('enBtn').classList.add('hidden');
                document.getElementById('frBtn').classList.add('hidden');
                document.getElementById('mangaBtn').classList.remove('hidden');
                document.getElementById('filmBtn').classList.remove('hidden');
                document.getElementById('webtoonBtn').classList.remove('hidden');
            } else if (language === 'en') {
                document.getElementById('frBtn').classList.add('hidden');
                document.getElementById('enBtn').classList.add('hidden');
                document.getElementById('mangaBtn').classList.remove('hidden');
                document.getElementById('filmBtn').classList.remove('hidden');
                document.getElementById('webtoonBtn').classList.remove('hidden');
            }
        }
        function forma(silo) {
            if (silo === 'Manga') {
                document.getElementById('mangaBtn').classList.add('hidden');
                document.getElementById('filmBtn').classList.add('hidden');
                document.getElementById('webtoonBtn').classList.add('hidden');

                document.getElementById('fantastiqueBtn').classList.remove('hidden');
                document.getElementById('actionBtn').classList.remove('hidden');
                document.getElementById('romantiqueBtn').classList.remove('hidden');
            } else if (silo === 'Film') {
                document.getElementById('mangaBtn').classList.add('hidden');
                document.getElementById('filmBtn').classList.add('hidden');
                document.getElementById('webtoonBtn').classList.add('hidden');

                document.getElementById('rockBtn').classList.remove('hidden');
                document.getElementById('11eSiecleBtn').classList.remove('hidden');
                document.getElementById('frenchyBtn').classList.remove('hidden');
            } else if (silo === 'Webtoon') {
                document.getElementById('mangaBtn').classList.add('hidden');
                document.getElementById('filmBtn').classList.add('hidden');
                document.getElementById('webtoonBtn').classList.add('hidden');

                document.getElementById('rockBtn').classList.remove('hidden');
                document.getElementById('11eSiecleBtn').classList.remove('hidden');
                document.getElementById('frenchyBtn').classList.remove('hidden');
            }
        }
