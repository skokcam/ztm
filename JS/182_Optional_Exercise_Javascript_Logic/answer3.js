function rgb2hex(color = '') {
    rgb = [];
    hexcolor = '';
    
    if ( typeof(color) !== 'string') return hexcolor; //if supplied arg is not string
    color = color.replaceAll(' ',''); //get rid of whitespaces
    if ( color.startsWith("rgb(") ) {
        color = color.replace("rgb(","");
        color = color.replace(")","");
        rgb = color.trim().split(",");        
        hexcolor='#'+Number(rgb[0]).toString(16).padStart(2,'0')+Number(rgb[1]).toString(16).padStart(2,'0')+Number(rgb[2]).toString(16).padStart(2,'0');
    }
    return hexcolor;
}

function hex2rgb(hexcolor = '') {
    let rgb = []; 
    let rgbcolor = '';
    
    hexcolor = hexcolor.trim();
    if (hexcolor[0] !== '#' || hexcolor.length < 7) return rgbcolor;
    rgb.push(hexcolor.substr(1,2));
    rgb.push(hexcolor.substr(3,2));
    rgb.push(hexcolor.substr(5,2));
    rgb[0] = Number('0x'.concat(rgb[0]));
    rgb[1] = Number('0x'.concat(rgb[1]));
    rgb[2] = Number('0x'.concat(rgb[2]));    
    rgbcolor = 'rgb('+rgb[0]+','+rgb[1]+','+rgb[2]+')';
    return rgbcolor;
}

function convertColor(color = '') {
    color = color.trim();
    if (color[0] === 'r') color = rgb2hex(color); 
    else if (color[0] === '#') color = hex2rgb(color);
    else color = '';    
    return color;
}
