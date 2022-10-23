const add = document.querySelector('.add')

window.addEventListener('keydown', (ev) => {
    add.innerHTML = `
    <div class="key">
                ${ev.key === ' ' ? 'Space' : ev.key}
                <small>event.key</small>
            </div>
            <div class="key">
                ${ev.keyCode}
                <small>event.keyCode</small>
            </div>
            <div class="key">
                ${ev.code}
                <small>event.code</small>
            </div>
            `
})