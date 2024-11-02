const fs = require('fs');
function dv(value, base) {
    return parseInt(value, base);
}
function f2(points) {
    return Math.round(points.reduce((c, [xi, yi], i) => c + yi * points.reduce((term, [xj], j) => i !== j ? term * (0 - xj) / (xi - xj) : term, 1), 0));
}
function f1(input) {
    const points = Object.entries(input).filter(([key]) => key !== 'keys').map(([key, { base, value }]) => [parseInt(key), dv(value, parseInt(base))]);
    points.sort((a, b) => a[0] - b[0]);
    return f2(points.slice(0, input.keys.k));
}
function main() {
    ['testcase1.json', 'testcase2.json'].forEach(file => console.log(`Secret ${file.slice(-6, -5)}:`, f1(JSON.parse(fs.readFileSync(file, 'utf8')))));
}
main();
