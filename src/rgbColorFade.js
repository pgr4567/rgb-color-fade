import looksLikeRGBA from '@chriscodesthings/color-looks-like-rgba';

function diff(n1, n2) {
    const max = n1 > n2 ? n1 : n2;
    const min = n1 < n2 ? n1 : n2;
    return max - min;
}

export default function (rgba, f = 0) {
    if (!looksLikeRGBA(rgba)) {
        return;
    }

    const col = Array.from(rgba);
    const t = f >= 0 ? 255 : 0;

    col[0] += Math.round(diff(t, col[0]) * (f / 100));
    col[1] += Math.round(diff(t, col[1]) * (f / 100));
    col[2] += Math.round(diff(t, col[2]) * (f / 100));

    return col;
}
