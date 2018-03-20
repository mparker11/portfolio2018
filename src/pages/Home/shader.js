//Original Shader by Omar Shehata
//Modified and adapted to work with PIXI.js v4
export default `
    precision mediump float;

    uniform vec2 resolution;
    uniform float time;
    uniform vec2 speed;
    uniform float cd;
    uniform float cb;
    uniform float sr;
    uniform float sg;
    uniform float sb;
    uniform sampler2D uSampler;
    varying vec2 vTextureCoord;

    float rand(vec2 n) {
        return fract(cos(dot(n, vec2(2.9898, 10.1414))) * 15.5453);
    }

    float noise(vec2 n) {
        const vec2 d = vec2(0.0, 1.0);
        vec2 b = floor(n), f = smoothstep(vec2(0.0), vec2(1.0), fract(n));
        return mix(mix(rand(b), rand(b + d.yx), f.x), mix(rand(b + d.xy), rand(b + d.yy), f.x), f.y);
    }

    float fbm(vec2 n) {
        float total = 0.0, amplitude = 1.0;
        for (int i = 0; i < 8; i++) {
            total += noise(n) * amplitude;
            n += n;
            amplitude *= 0.5;
        }
        return total;
    }


    void main(void) {
        vec3 c1 = vec3(sr, sg, sb);
        const vec3 c2 = vec3(20.0 / 255.0, 5.0 / 255.0, 5.0 / 255.0);
        const vec3 c3 = vec3(0.8, 1.0, 0.3);
        const vec3 c4 = vec3(0.95, 0.95, 0.95);
        vec3 c5 = vec3(cd);
        vec3 c6 = vec3(cb);

        vec2 p = gl_FragCoord.xy * 3.0 / resolution.xx;

        float q = fbm(p - time * 0.02);
        vec2 r = vec2(fbm(p + q + time * speed.x - p.x - p.y), fbm(p + q - time * speed.y));
        vec3 c = mix(c1, c2, fbm(p + r)) + mix(c3, c4, r.x) - mix(c5, c6, r.y);
        gl_FragColor = texture2D(uSampler, vTextureCoord);
        gl_FragColor = vec4(c * gl_FragColor.a * cos(gl_FragCoord.y / resolution.y), 1.0);
    }
`;