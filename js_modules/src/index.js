const button = document.createElement('button');
button.innerHTML = 'Click me';
button.onclick = () => {
    System.import('./image_viewer.js').then(module => {
        module.default();
    })
}

document.body.appendChild(button);