let isMoving = false;

        function startApp() {
            document.getElementById('intro-overlay').style.opacity = '0';
            setTimeout(() => {
                document.getElementById('intro-overlay').style.display = 'none';
                document.getElementById('app-window').style.opacity = '1';
            }, 800);
        }

        function go(city) {
            if (isMoving) return;
            
            document.getElementById('msg-init').style.display = 'none';
            document.querySelectorAll('.content-pane').forEach(p => p.style.display = 'none');
            document.querySelectorAll('.detail-box').forEach(d => d.style.display = 'none');

            const bus = document.getElementById('v-bus');
            const plane = document.getElementById('v-plane');

            if (city === 'tunja') anim('p-tun-bog', bus, 'pane-tunja');
            if (city === 'bogota') anim('p-bog-baq', plane, 'pane-bogota');
            if (city === 'baq') anim('p-baq-ctg', bus, 'pane-baq');
            if (city === 'ctg') anim('p-ctg-baq', bus, 'pane-ctg');
        }

        function anim(pathId, vehicle, paneId) {
            isMoving = true;
            const path = document.getElementById(pathId);
            
            vehicle.style.display = 'block';
            vehicle.style.offsetPath = `path('${path.getAttribute('d')}')`;
            vehicle.classList.add('moving');

            document.getElementById(paneId).style.display = 'block';

            setTimeout(() => {
                vehicle.classList.remove('moving');
                vehicle.style.display = 'none';
                isMoving = false;
            }, 2500);
        }

        function toggle(id) {
            const el = document.getElementById(id);
            el.style.display = (el.style.display === 'block') ? 'none' : 'block';
        }