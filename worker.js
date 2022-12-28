function generateNoise(opacity,truthy,document,noiseElement) {
    if(truthy){
        return false;
    }
    var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        x,y,
        r,g,b,
        opacity = opacity;

        canvas.width = 4000;
        canvas.height = 4000;

        for (x = 0; x < canvas.width; x++){
            for (y = 0; y < canvas.height; y++){

                const greyScale = Math.floor(Math.random() * 100) + 100;

                r = greyScale;
                g = greyScale;
                b = greyScale;

                if(greyScale < 157){
                    ctx.fillStyle = 'rgba(' + 0 + ',' + 0 + ',' + 0 + ',' + opacity + ')';
                    ctx.fillRect(x,y,greyScale%3,greyScale%3);
                }
            }
        }
        noiseElement.style.backgroundImage = "url(" + canvas.toDataURL("image/png") + ")";
}

// self.addEventListener('message', generateNoise());
self.addEventListener('message', function(WTF) {
    for(const key in WTF) {
        console.log (key+": ", WTF[key])
    }
    const message = WTF.data + ' to myself!';
    self.postMessage(message);
    self.close();
})