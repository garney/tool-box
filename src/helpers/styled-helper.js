import kebabCase from 'just-kebab-case';

function matchAndClear(regExp, str) {
    const match = str.match(regExp);
    str = str.replace(regExp, '');
    return {
        match,
        str
    }
}

function styleAttrToStyleStr(style) {
    if(!style) {
        return '';
    }
    style = style.replace(/style\s*=\{\s*\{\s*/s, '');
    style = style.replace(/\s*\}\s*\}/s, '');
    // style = style.replace(/\s/g, '');
    const attrs = style.split(',');

    let res = '';
    attrs.forEach(attr => {
        if(!attr){
            return;
        }
        console.log('attr', attr);
        attr  = attr.trim();
        const split = attr.split(':');
        let prop = split[0].trim();
        prop = kebabCase(prop);
        let value = split[1].trim();
        value = value.replace(/\'/g, '');
        if(value.match(/^\d*$/)) {
            value = `${value}px`;
        }
        res += `\t${prop}: ${value};\n`;
    })
    return res;

}

function parseDiv(str, name = 'CustomDiv') {
    const originalString = str;
    const tag = str.replace(/<(\w*).*/s, '$1');
    const style = matchAndClear(/style\s*=\{\{(.*)?\}\}/s, str);
    const styleAttr = style.match ? style.match[0]: null;   
    const styles = styleAttrToStyleStr(styleAttr);
    str = style.str;
    const attr1 = matchAndClear(/(\w*)\s*=\s*(\".*?\")/s, str);
    str = attr1.str;
    const attr2 = matchAndClear(/\w*\s*=\s*\{\s*\([^\)]*\)[^}]*\}*\s*}/s, str);
    str = attr2.str;
    const attr3 = matchAndClear(/\w*\s*=\s*\{[^\}]*\}/s, str);
    str = attr3.str;
    
    console.log('style', styleAttr);
    console.log(attr1);
    console.log(attr2);
    console.log(attr3);

    let usage = `<${name} `;
    
    [attr1, attr2, attr3].forEach(attr => {
        attr && attr.match && attr.match.forEach && attr.match.forEach(item => {
            usage += `${item} \n`;
        })
    })
    usage += `></${name}>`;
    const styledComponent = `const ${name} = styled.div\`\n${styles}\`;`;
    return {
        tag,
        usage,
        styledComponent
    }
}

module.exports = {
    parseDiv
};