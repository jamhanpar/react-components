try {
  (() => {
    var ry = Object.create;
    var Wr = Object.defineProperty;
    var oy = Object.getOwnPropertyDescriptor;
    var iy = Object.getOwnPropertyNames;
    var ay = Object.getPrototypeOf,
      sy = Object.prototype.hasOwnProperty;
    var Yr = (t, e) => () => (t && (e = t((t = 0))), e);
    var ly = (t, e) => () => (
        e || t((e = { exports: {} }).exports, e), e.exports
      ),
      uy = (t, e) => {
        for (var n in e) Wr(t, n, { get: e[n], enumerable: !0 });
      },
      Kl = (t, e, n, r) => {
        if ((e && typeof e == 'object') || typeof e == 'function')
          for (let o of iy(e))
            !sy.call(t, o) &&
              o !== n &&
              Wr(t, o, {
                get: () => e[o],
                enumerable: !(r = oy(e, o)) || r.enumerable,
              });
        return t;
      };
    var cy = (t, e, n) => (
        (n = t != null ? ry(ay(t)) : {}),
        Kl(
          e || !t || !t.__esModule
            ? Wr(n, 'default', { value: t, enumerable: !0 })
            : n,
          t
        )
      ),
      Ql = (t) => Kl(Wr({}, '__esModule', { value: !0 }), t);
    var vt = Yr(() => {});
    var re,
      gt = Yr(() => {
        re = {
          NODE_ENV: 'production',
          NODE_PATH: [],
          STORYBOOK: 'true',
          PUBLIC_URL: '.',
        };
      });
    var yt = Yr(() => {});
    var Yn = {};
    uy(Yn, {
      Children: () => Gt,
      Component: () => fy,
      Fragment: () => Se,
      Profiler: () => dy,
      PureComponent: () => hy,
      StrictMode: () => my,
      Suspense: () => Oi,
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => vy,
      cloneElement: () => Ve,
      createContext: () => Yt,
      createElement: () => q,
      createFactory: () => gy,
      createRef: () => Si,
      default: () => g,
      forwardRef: () => ct,
      isValidElement: () => Pe,
      lazy: () => Pi,
      memo: () => yy,
      useCallback: () => xt,
      useContext: () => mt,
      useDebugValue: () => by,
      useEffect: () => W,
      useImperativeHandle: () => wy,
      useLayoutEffect: () => Wn,
      useMemo: () => Nt,
      useReducer: () => Ti,
      useRef: () => nt,
      useState: () => at,
      version: () => Ey,
    });
    var g,
      Gt,
      fy,
      Se,
      dy,
      hy,
      my,
      Oi,
      vy,
      Ve,
      Yt,
      q,
      gy,
      Si,
      ct,
      Pe,
      Pi,
      yy,
      xt,
      mt,
      by,
      W,
      wy,
      Wn,
      Nt,
      Ti,
      nt,
      at,
      Ey,
      qn = Yr(() => {
        vt();
        gt();
        yt();
        (g = __REACT__),
          ({
            Children: Gt,
            Component: fy,
            Fragment: Se,
            Profiler: dy,
            PureComponent: hy,
            StrictMode: my,
            Suspense: Oi,
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: vy,
            cloneElement: Ve,
            createContext: Yt,
            createElement: q,
            createFactory: gy,
            createRef: Si,
            forwardRef: ct,
            isValidElement: Pe,
            lazy: Pi,
            memo: yy,
            useCallback: xt,
            useContext: mt,
            useDebugValue: by,
            useEffect: W,
            useImperativeHandle: wy,
            useLayoutEffect: Wn,
            useMemo: Nt,
            useReducer: Ti,
            useRef: nt,
            useState: at,
            version: Ey,
          } = __REACT__);
      });
    var Jl = ly((Gn, ki) => {
      vt();
      gt();
      yt();
      (function (t, e) {
        typeof Gn == 'object' && typeof ki == 'object'
          ? (ki.exports = e((qn(), Ql(Yn))))
          : typeof define == 'function' && define.amd
            ? define(['react'], e)
            : typeof Gn == 'object'
              ? (Gn.ReactConfetti = e((qn(), Ql(Yn))))
              : (t.ReactConfetti = e(t.React));
      })(typeof self < 'u' ? self : Gn, function (t) {
        return (function (e) {
          var n = {};
          function r(o) {
            if (n[o]) return n[o].exports;
            var i = (n[o] = { i: o, l: !1, exports: {} });
            return e[o].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
          }
          return (
            (r.m = e),
            (r.c = n),
            (r.d = function (o, i, a) {
              r.o(o, i) ||
                Object.defineProperty(o, i, { enumerable: !0, get: a });
            }),
            (r.r = function (o) {
              typeof Symbol < 'u' &&
                Symbol.toStringTag &&
                Object.defineProperty(o, Symbol.toStringTag, {
                  value: 'Module',
                }),
                Object.defineProperty(o, '__esModule', { value: !0 });
            }),
            (r.t = function (o, i) {
              if (
                (1 & i && (o = r(o)),
                8 & i || (4 & i && typeof o == 'object' && o && o.__esModule))
              )
                return o;
              var a = Object.create(null);
              if (
                (r.r(a),
                Object.defineProperty(a, 'default', {
                  enumerable: !0,
                  value: o,
                }),
                2 & i && typeof o != 'string')
              )
                for (var s in o)
                  r.d(
                    a,
                    s,
                    function (l) {
                      return o[l];
                    }.bind(null, s)
                  );
              return a;
            }),
            (r.n = function (o) {
              var i =
                o && o.__esModule
                  ? function () {
                      return o.default;
                    }
                  : function () {
                      return o;
                    };
              return r.d(i, 'a', i), i;
            }),
            (r.o = function (o, i) {
              return Object.prototype.hasOwnProperty.call(o, i);
            }),
            (r.p = ''),
            r((r.s = 2))
          );
        })([
          function (e, n) {
            e.exports = t;
          },
          function (e, n, r) {
            'use strict';
            var o = {
              linear: function (i, a, s, l) {
                return ((s - a) * i) / l + a;
              },
              easeInQuad: function (i, a, s, l) {
                return (s - a) * (i /= l) * i + a;
              },
              easeOutQuad: function (i, a, s, l) {
                return -(s - a) * (i /= l) * (i - 2) + a;
              },
              easeInOutQuad: function (i, a, s, l) {
                var u = s - a;
                return (i /= l / 2) < 1
                  ? (u / 2) * i * i + a
                  : (-u / 2) * (--i * (i - 2) - 1) + a;
              },
              easeInCubic: function (i, a, s, l) {
                return (s - a) * (i /= l) * i * i + a;
              },
              easeOutCubic: function (i, a, s, l) {
                return (s - a) * ((i = i / l - 1) * i * i + 1) + a;
              },
              easeInOutCubic: function (i, a, s, l) {
                var u = s - a;
                return (i /= l / 2) < 1
                  ? (u / 2) * i * i * i + a
                  : (u / 2) * ((i -= 2) * i * i + 2) + a;
              },
              easeInQuart: function (i, a, s, l) {
                return (s - a) * (i /= l) * i * i * i + a;
              },
              easeOutQuart: function (i, a, s, l) {
                return -(s - a) * ((i = i / l - 1) * i * i * i - 1) + a;
              },
              easeInOutQuart: function (i, a, s, l) {
                var u = s - a;
                return (i /= l / 2) < 1
                  ? (u / 2) * i * i * i * i + a
                  : (-u / 2) * ((i -= 2) * i * i * i - 2) + a;
              },
              easeInQuint: function (i, a, s, l) {
                return (s - a) * (i /= l) * i * i * i * i + a;
              },
              easeOutQuint: function (i, a, s, l) {
                return (s - a) * ((i = i / l - 1) * i * i * i * i + 1) + a;
              },
              easeInOutQuint: function (i, a, s, l) {
                var u = s - a;
                return (i /= l / 2) < 1
                  ? (u / 2) * i * i * i * i * i + a
                  : (u / 2) * ((i -= 2) * i * i * i * i + 2) + a;
              },
              easeInSine: function (i, a, s, l) {
                var u = s - a;
                return -u * Math.cos((i / l) * (Math.PI / 2)) + u + a;
              },
              easeOutSine: function (i, a, s, l) {
                return (s - a) * Math.sin((i / l) * (Math.PI / 2)) + a;
              },
              easeInOutSine: function (i, a, s, l) {
                return (-(s - a) / 2) * (Math.cos((Math.PI * i) / l) - 1) + a;
              },
              easeInExpo: function (i, a, s, l) {
                return i == 0 ? a : (s - a) * Math.pow(2, 10 * (i / l - 1)) + a;
              },
              easeOutExpo: function (i, a, s, l) {
                var u = s - a;
                return i == l
                  ? a + u
                  : u * (1 - Math.pow(2, (-10 * i) / l)) + a;
              },
              easeInOutExpo: function (i, a, s, l) {
                var u = s - a;
                return i === 0
                  ? a
                  : i === l
                    ? a + u
                    : (i /= l / 2) < 1
                      ? (u / 2) * Math.pow(2, 10 * (i - 1)) + a
                      : (u / 2) * (2 - Math.pow(2, -10 * --i)) + a;
              },
              easeInCirc: function (i, a, s, l) {
                return -(s - a) * (Math.sqrt(1 - (i /= l) * i) - 1) + a;
              },
              easeOutCirc: function (i, a, s, l) {
                return (s - a) * Math.sqrt(1 - (i = i / l - 1) * i) + a;
              },
              easeInOutCirc: function (i, a, s, l) {
                var u = s - a;
                return (i /= l / 2) < 1
                  ? (-u / 2) * (Math.sqrt(1 - i * i) - 1) + a
                  : (u / 2) * (Math.sqrt(1 - (i -= 2) * i) + 1) + a;
              },
              easeInElastic: function (i, a, s, l) {
                var u,
                  c,
                  f,
                  p = s - a;
                return (
                  (f = 1.70158),
                  i === 0
                    ? a
                    : (i /= l) == 1
                      ? a + p
                      : ((c = 0) || (c = 0.3 * l),
                        (u = p) < Math.abs(p)
                          ? ((u = p), (f = c / 4))
                          : (f = (c / (2 * Math.PI)) * Math.asin(p / u)),
                        -u *
                          Math.pow(2, 10 * (i -= 1)) *
                          Math.sin(((i * l - f) * (2 * Math.PI)) / c) +
                          a)
                );
              },
              easeOutElastic: function (i, a, s, l) {
                var u,
                  c,
                  f,
                  p = s - a;
                return (
                  (f = 1.70158),
                  i === 0
                    ? a
                    : (i /= l) == 1
                      ? a + p
                      : ((c = 0) || (c = 0.3 * l),
                        (u = p) < Math.abs(p)
                          ? ((u = p), (f = c / 4))
                          : (f = (c / (2 * Math.PI)) * Math.asin(p / u)),
                        u *
                          Math.pow(2, -10 * i) *
                          Math.sin(((i * l - f) * (2 * Math.PI)) / c) +
                          p +
                          a)
                );
              },
              easeInOutElastic: function (i, a, s, l) {
                var u,
                  c,
                  f,
                  p = s - a;
                return (
                  (f = 1.70158),
                  i === 0
                    ? a
                    : (i /= l / 2) == 2
                      ? a + p
                      : ((c = 0) || (c = l * 0.44999999999999996),
                        (u = p) < Math.abs(p)
                          ? ((u = p), (f = c / 4))
                          : (f = (c / (2 * Math.PI)) * Math.asin(p / u)),
                        i < 1
                          ? u *
                              Math.pow(2, 10 * (i -= 1)) *
                              Math.sin(((i * l - f) * (2 * Math.PI)) / c) *
                              -0.5 +
                            a
                          : u *
                              Math.pow(2, -10 * (i -= 1)) *
                              Math.sin(((i * l - f) * (2 * Math.PI)) / c) *
                              0.5 +
                            p +
                            a)
                );
              },
              easeInBack: function (i, a, s, l, u) {
                return (
                  u === void 0 && (u = 1.70158),
                  (s - a) * (i /= l) * i * ((u + 1) * i - u) + a
                );
              },
              easeOutBack: function (i, a, s, l, u) {
                return (
                  u === void 0 && (u = 1.70158),
                  (s - a) * ((i = i / l - 1) * i * ((u + 1) * i + u) + 1) + a
                );
              },
              easeInOutBack: function (i, a, s, l, u) {
                var c = s - a;
                return (
                  u === void 0 && (u = 1.70158),
                  (i /= l / 2) < 1
                    ? (c / 2) * (i * i * ((1 + (u *= 1.525)) * i - u)) + a
                    : (c / 2) *
                        ((i -= 2) * i * ((1 + (u *= 1.525)) * i + u) + 2) +
                      a
                );
              },
              easeInBounce: function (i, a, s, l) {
                var u = s - a;
                return u - o.easeOutBounce(l - i, 0, u, l) + a;
              },
              easeOutBounce: function (i, a, s, l) {
                var u = s - a;
                return (i /= l) < 0.36363636363636365
                  ? u * (7.5625 * i * i) + a
                  : i < 0.7272727272727273
                    ? u * (7.5625 * (i -= 0.5454545454545454) * i + 0.75) + a
                    : i < 0.9090909090909091
                      ? u * (7.5625 * (i -= 0.8181818181818182) * i + 0.9375) +
                        a
                      : u *
                          (7.5625 * (i -= 0.9545454545454546) * i + 0.984375) +
                        a;
              },
              easeInOutBounce: function (i, a, s, l) {
                var u = s - a;
                return i < l / 2
                  ? 0.5 * o.easeInBounce(2 * i, 0, u, l) + a
                  : 0.5 * o.easeOutBounce(2 * i - l, 0, u, l) + 0.5 * u + a;
              },
            };
            e.exports = o;
          },
          function (e, n, r) {
            e.exports = r(3);
          },
          function (e, n, r) {
            'use strict';
            r.r(n),
              r.d(n, 'ReactConfetti', function () {
                return B;
              });
            var o,
              i,
              a = r(0),
              s = r.n(a),
              l = r(1),
              u = r.n(l);
            function c(P, T) {
              return P + Math.random() * (T - P);
            }
            function f(P, T) {
              for (var k = 0; k < T.length; k++) {
                var C = T[k];
                (C.enumerable = C.enumerable || !1),
                  (C.configurable = !0),
                  'value' in C && (C.writable = !0),
                  Object.defineProperty(P, C.key, C);
              }
            }
            function p(P, T, k) {
              return (
                T in P
                  ? Object.defineProperty(P, T, {
                      value: k,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (P[T] = k),
                P
              );
            }
            (function (P) {
              (P[(P.Circle = 0)] = 'Circle'),
                (P[(P.Square = 1)] = 'Square'),
                (P[(P.Strip = 2)] = 'Strip');
            })(o || (o = {})),
              (function (P) {
                (P[(P.Positive = 1)] = 'Positive'),
                  (P[(P.Negative = -1)] = 'Negative');
              })(i || (i = {}));
            var d = (function () {
              function P($, Q, V, it) {
                (function (wi, Bn) {
                  if (!(wi instanceof Bn))
                    throw new TypeError('Cannot call a class as a function');
                })(this, P),
                  p(this, 'context', void 0),
                  p(this, 'radius', void 0),
                  p(this, 'x', void 0),
                  p(this, 'y', void 0),
                  p(this, 'w', void 0),
                  p(this, 'h', void 0),
                  p(this, 'vx', void 0),
                  p(this, 'vy', void 0),
                  p(this, 'shape', void 0),
                  p(this, 'angle', void 0),
                  p(this, 'angularSpin', void 0),
                  p(this, 'color', void 0),
                  p(this, 'rotateY', void 0),
                  p(this, 'rotationDirection', void 0),
                  p(this, 'getOptions', void 0),
                  (this.getOptions = Q);
                var lt,
                  ot,
                  Et = this.getOptions(),
                  Ee = Et.colors,
                  Dt = Et.initialVelocityX,
                  an = Et.initialVelocityY;
                (this.context = $),
                  (this.x = V),
                  (this.y = it),
                  (this.w = c(5, 20)),
                  (this.h = c(5, 20)),
                  (this.radius = c(5, 10)),
                  (this.vx =
                    typeof Dt == 'number' ? c(-Dt, Dt) : c(Dt.min, Dt.max)),
                  (this.vy =
                    typeof an == 'number' ? c(-an, 0) : c(an.min, an.max)),
                  (this.shape =
                    ((lt = 0),
                    (ot = 2),
                    Math.floor(lt + Math.random() * (ot - lt + 1)))),
                  (this.angle = (c(0, 360) * Math.PI) / 180),
                  (this.angularSpin = c(-0.2, 0.2)),
                  (this.color = Ee[Math.floor(Math.random() * Ee.length)]),
                  (this.rotateY = c(0, 1)),
                  (this.rotationDirection = c(0, 1) ? i.Positive : i.Negative);
              }
              var T, k, C;
              return (
                (T = P),
                (k = [
                  {
                    key: 'update',
                    value: function () {
                      var $ = this.getOptions(),
                        Q = $.gravity,
                        V = $.wind,
                        it = $.friction,
                        lt = $.opacity,
                        ot = $.drawShape;
                      (this.x += this.vx),
                        (this.y += this.vy),
                        (this.vy += Q),
                        (this.vx += V),
                        (this.vx *= it),
                        (this.vy *= it),
                        this.rotateY >= 1 &&
                        this.rotationDirection === i.Positive
                          ? (this.rotationDirection = i.Negative)
                          : this.rotateY <= -1 &&
                            this.rotationDirection === i.Negative &&
                            (this.rotationDirection = i.Positive);
                      var Et = 0.1 * this.rotationDirection;
                      if (
                        ((this.rotateY += Et),
                        (this.angle += this.angularSpin),
                        this.context.save(),
                        this.context.translate(this.x, this.y),
                        this.context.rotate(this.angle),
                        this.context.scale(1, this.rotateY),
                        this.context.rotate(this.angle),
                        this.context.beginPath(),
                        (this.context.fillStyle = this.color),
                        (this.context.strokeStyle = this.color),
                        (this.context.globalAlpha = lt),
                        (this.context.lineCap = 'round'),
                        (this.context.lineWidth = 2),
                        ot && typeof ot == 'function')
                      )
                        ot.call(this, this.context);
                      else
                        switch (this.shape) {
                          case o.Circle:
                            this.context.beginPath(),
                              this.context.arc(
                                0,
                                0,
                                this.radius,
                                0,
                                2 * Math.PI
                              ),
                              this.context.fill();
                            break;
                          case o.Square:
                            this.context.fillRect(
                              -this.w / 2,
                              -this.h / 2,
                              this.w,
                              this.h
                            );
                            break;
                          case o.Strip:
                            this.context.fillRect(
                              -this.w / 6,
                              -this.h / 2,
                              this.w / 3,
                              this.h
                            );
                        }
                      this.context.closePath(), this.context.restore();
                    },
                  },
                ]) && f(T.prototype, k),
                C && f(T, C),
                P
              );
            })();
            function h(P, T, k) {
              return (
                T in P
                  ? Object.defineProperty(P, T, {
                      value: k,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (P[T] = k),
                P
              );
            }
            var m = function P(T, k) {
              var C = this;
              (function (Q, V) {
                if (!(Q instanceof V))
                  throw new TypeError('Cannot call a class as a function');
              })(this, P),
                h(this, 'canvas', void 0),
                h(this, 'context', void 0),
                h(this, 'getOptions', void 0),
                h(this, 'x', 0),
                h(this, 'y', 0),
                h(this, 'w', 0),
                h(this, 'h', 0),
                h(this, 'lastNumberOfPieces', 0),
                h(this, 'tweenInitTime', Date.now()),
                h(this, 'particles', []),
                h(this, 'particlesGenerated', 0),
                h(this, 'removeParticleAt', function (Q) {
                  C.particles.splice(Q, 1);
                }),
                h(this, 'getParticle', function () {
                  var Q = c(C.x, C.w + C.x),
                    V = c(C.y, C.h + C.y);
                  return new d(C.context, C.getOptions, Q, V);
                }),
                h(this, 'animate', function () {
                  var Q = C.canvas,
                    V = C.context,
                    it = C.particlesGenerated,
                    lt = C.lastNumberOfPieces,
                    ot = C.getOptions(),
                    Et = ot.run,
                    Ee = ot.recycle,
                    Dt = ot.numberOfPieces,
                    an = ot.debug,
                    wi = ot.tweenFunction,
                    Bn = ot.tweenDuration;
                  if (!Et) return !1;
                  var Ei = C.particles.length,
                    Un = Ee ? Ei : it,
                    xi = Date.now();
                  if (Un < Dt) {
                    lt !== Dt &&
                      ((C.tweenInitTime = xi), (C.lastNumberOfPieces = Dt));
                    for (
                      var ql = C.tweenInitTime,
                        ny = wi(
                          xi - ql > Bn ? Bn : Math.max(0, xi - ql),
                          Un,
                          Dt,
                          Bn
                        ),
                        Gl = Math.round(ny - Un),
                        Xl = 0;
                      Xl < Gl;
                      Xl++
                    )
                      C.particles.push(C.getParticle());
                    C.particlesGenerated += Gl;
                  }
                  return (
                    an &&
                      ((V.font = '12px sans-serif'),
                      (V.fillStyle = '#333'),
                      (V.textAlign = 'right'),
                      V.fillText(
                        'Particles: '.concat(Ei),
                        Q.width - 10,
                        Q.height - 20
                      )),
                    C.particles.forEach(function (Hn, _l) {
                      Hn.update(),
                        (Hn.y > Q.height ||
                          Hn.y < -100 ||
                          Hn.x > Q.width + 100 ||
                          Hn.x < -100) &&
                          (Ee && Un <= Dt
                            ? (C.particles[_l] = C.getParticle())
                            : C.removeParticleAt(_l));
                    }),
                    Ei > 0 || Un < Dt
                  );
                }),
                (this.canvas = T);
              var $ = this.canvas.getContext('2d');
              if (!$) throw new Error('Could not get canvas context');
              (this.context = $), (this.getOptions = k);
            };
            function y(P, T) {
              var k = Object.keys(P);
              if (Object.getOwnPropertySymbols) {
                var C = Object.getOwnPropertySymbols(P);
                T &&
                  (C = C.filter(function ($) {
                    return Object.getOwnPropertyDescriptor(P, $).enumerable;
                  })),
                  k.push.apply(k, C);
              }
              return k;
            }
            function E(P) {
              for (var T = 1; T < arguments.length; T++) {
                var k = arguments[T] != null ? arguments[T] : {};
                T % 2
                  ? y(Object(k), !0).forEach(function (C) {
                      b(P, C, k[C]);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        P,
                        Object.getOwnPropertyDescriptors(k)
                      )
                    : y(Object(k)).forEach(function (C) {
                        Object.defineProperty(
                          P,
                          C,
                          Object.getOwnPropertyDescriptor(k, C)
                        );
                      });
              }
              return P;
            }
            function x(P, T) {
              for (var k = 0; k < T.length; k++) {
                var C = T[k];
                (C.enumerable = C.enumerable || !1),
                  (C.configurable = !0),
                  'value' in C && (C.writable = !0),
                  Object.defineProperty(P, C.key, C);
              }
            }
            function b(P, T, k) {
              return (
                T in P
                  ? Object.defineProperty(P, T, {
                      value: k,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (P[T] = k),
                P
              );
            }
            var w = {
                width: typeof window < 'u' ? window.innerWidth : 300,
                height: typeof window < 'u' ? window.innerHeight : 200,
                numberOfPieces: 200,
                friction: 0.99,
                wind: 0,
                gravity: 0.1,
                initialVelocityX: 4,
                initialVelocityY: 10,
                colors: [
                  '#f44336',
                  '#e91e63',
                  '#9c27b0',
                  '#673ab7',
                  '#3f51b5',
                  '#2196f3',
                  '#03a9f4',
                  '#00bcd4',
                  '#009688',
                  '#4CAF50',
                  '#8BC34A',
                  '#CDDC39',
                  '#FFEB3B',
                  '#FFC107',
                  '#FF9800',
                  '#FF5722',
                  '#795548',
                ],
                opacity: 1,
                debug: !1,
                tweenFunction: u.a.easeInOutQuad,
                tweenDuration: 5e3,
                recycle: !0,
                run: !0,
              },
              O = (function () {
                function P($, Q) {
                  var V = this;
                  (function (lt, ot) {
                    if (!(lt instanceof ot))
                      throw new TypeError('Cannot call a class as a function');
                  })(this, P),
                    b(this, 'canvas', void 0),
                    b(this, 'context', void 0),
                    b(this, '_options', void 0),
                    b(this, 'generator', void 0),
                    b(this, 'rafId', void 0),
                    b(this, 'setOptionsWithDefaults', function (lt) {
                      var ot = {
                        confettiSource: { x: 0, y: 0, w: V.canvas.width, h: 0 },
                      };
                      (V._options = E(E(E({}, ot), w), lt)),
                        Object.assign(V, lt.confettiSource);
                    }),
                    b(this, 'update', function () {
                      var lt = V.options,
                        ot = lt.run,
                        Et = lt.onConfettiComplete,
                        Ee = V.canvas,
                        Dt = V.context;
                      ot &&
                        ((Dt.fillStyle = 'white'),
                        Dt.clearRect(0, 0, Ee.width, Ee.height)),
                        V.generator.animate()
                          ? (V.rafId = requestAnimationFrame(V.update))
                          : (Et &&
                              typeof Et == 'function' &&
                              V.generator.particlesGenerated > 0 &&
                              Et.call(V, V),
                            (V._options.run = !1));
                    }),
                    b(this, 'reset', function () {
                      V.generator &&
                        V.generator.particlesGenerated > 0 &&
                        ((V.generator.particlesGenerated = 0),
                        (V.generator.particles = []),
                        (V.generator.lastNumberOfPieces = 0));
                    }),
                    b(this, 'stop', function () {
                      (V.options = { run: !1 }),
                        V.rafId &&
                          (cancelAnimationFrame(V.rafId), (V.rafId = void 0));
                    }),
                    (this.canvas = $);
                  var it = this.canvas.getContext('2d');
                  if (!it) throw new Error('Could not get canvas context');
                  (this.context = it),
                    (this.generator = new m(this.canvas, function () {
                      return V.options;
                    })),
                    (this.options = Q),
                    this.update();
                }
                var T, k, C;
                return (
                  (T = P),
                  (k = [
                    {
                      key: 'options',
                      get: function () {
                        return this._options;
                      },
                      set: function ($) {
                        var Q = this._options && this._options.run,
                          V = this._options && this._options.recycle;
                        this.setOptionsWithDefaults($),
                          this.generator &&
                            (Object.assign(
                              this.generator,
                              this.options.confettiSource
                            ),
                            typeof $.recycle == 'boolean' &&
                              $.recycle &&
                              V === !1 &&
                              (this.generator.lastNumberOfPieces =
                                this.generator.particles.length)),
                          typeof $.run == 'boolean' &&
                            $.run &&
                            Q === !1 &&
                            this.update();
                      },
                    },
                  ]) && x(T.prototype, k),
                  C && x(T, C),
                  P
                );
              })();
            function S(P) {
              return (
                (function (T) {
                  if (Array.isArray(T)) return ht(T);
                })(P) ||
                (function (T) {
                  if (typeof Symbol < 'u' && Symbol.iterator in Object(T))
                    return Array.from(T);
                })(P) ||
                rt(P) ||
                (function () {
                  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                })()
              );
            }
            function M(P) {
              return (M =
                typeof Symbol == 'function' &&
                typeof Symbol.iterator == 'symbol'
                  ? function (T) {
                      return typeof T;
                    }
                  : function (T) {
                      return T &&
                        typeof Symbol == 'function' &&
                        T.constructor === Symbol &&
                        T !== Symbol.prototype
                        ? 'symbol'
                        : typeof T;
                    })(P);
            }
            function N() {
              return (N =
                Object.assign ||
                function (P) {
                  for (var T = 1; T < arguments.length; T++) {
                    var k = arguments[T];
                    for (var C in k)
                      Object.prototype.hasOwnProperty.call(k, C) &&
                        (P[C] = k[C]);
                  }
                  return P;
                }).apply(this, arguments);
            }
            function z(P, T) {
              var k = Object.keys(P);
              if (Object.getOwnPropertySymbols) {
                var C = Object.getOwnPropertySymbols(P);
                T &&
                  (C = C.filter(function ($) {
                    return Object.getOwnPropertyDescriptor(P, $).enumerable;
                  })),
                  k.push.apply(k, C);
              }
              return k;
            }
            function X(P) {
              for (var T = 1; T < arguments.length; T++) {
                var k = arguments[T] != null ? arguments[T] : {};
                T % 2
                  ? z(Object(k), !0).forEach(function (C) {
                      Mt(P, C, k[C]);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        P,
                        Object.getOwnPropertyDescriptors(k)
                      )
                    : z(Object(k)).forEach(function (C) {
                        Object.defineProperty(
                          P,
                          C,
                          Object.getOwnPropertyDescriptor(k, C)
                        );
                      });
              }
              return P;
            }
            function et(P, T) {
              return (
                (function (k) {
                  if (Array.isArray(k)) return k;
                })(P) ||
                (function (k, C) {
                  if (
                    !(typeof Symbol > 'u' || !(Symbol.iterator in Object(k)))
                  ) {
                    var $ = [],
                      Q = !0,
                      V = !1,
                      it = void 0;
                    try {
                      for (
                        var lt, ot = k[Symbol.iterator]();
                        !(Q = (lt = ot.next()).done) &&
                        ($.push(lt.value), !C || $.length !== C);
                        Q = !0
                      );
                    } catch (Et) {
                      (V = !0), (it = Et);
                    } finally {
                      try {
                        Q || ot.return == null || ot.return();
                      } finally {
                        if (V) throw it;
                      }
                    }
                    return $;
                  }
                })(P, T) ||
                rt(P, T) ||
                (function () {
                  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                })()
              );
            }
            function rt(P, T) {
              if (P) {
                if (typeof P == 'string') return ht(P, T);
                var k = Object.prototype.toString.call(P).slice(8, -1);
                return (
                  k === 'Object' && P.constructor && (k = P.constructor.name),
                  k === 'Map' || k === 'Set'
                    ? Array.from(P)
                    : k === 'Arguments' ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k)
                      ? ht(P, T)
                      : void 0
                );
              }
            }
            function ht(P, T) {
              (T == null || T > P.length) && (T = P.length);
              for (var k = 0, C = new Array(T); k < T; k++) C[k] = P[k];
              return C;
            }
            function Tt(P, T) {
              if (!(P instanceof T))
                throw new TypeError('Cannot call a class as a function');
            }
            function Ct(P, T) {
              for (var k = 0; k < T.length; k++) {
                var C = T[k];
                (C.enumerable = C.enumerable || !1),
                  (C.configurable = !0),
                  'value' in C && (C.writable = !0),
                  Object.defineProperty(P, C.key, C);
              }
            }
            function Ft(P, T) {
              return (Ft =
                Object.setPrototypeOf ||
                function (k, C) {
                  return (k.__proto__ = C), k;
                })(P, T);
            }
            function St(P) {
              var T = (function () {
                if (
                  typeof Reflect > 'u' ||
                  !Reflect.construct ||
                  Reflect.construct.sham
                )
                  return !1;
                if (typeof Proxy == 'function') return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function () {})
                    ),
                    !0
                  );
                } catch {
                  return !1;
                }
              })();
              return function () {
                var k,
                  C = ne(P);
                if (T) {
                  var $ = ne(this).constructor;
                  k = Reflect.construct(C, arguments, $);
                } else k = C.apply(this, arguments);
                return It(this, k);
              };
            }
            function It(P, T) {
              return !T || (M(T) !== 'object' && typeof T != 'function')
                ? Wt(P)
                : T;
            }
            function Wt(P) {
              if (P === void 0)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return P;
            }
            function ne(P) {
              return (ne = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (T) {
                    return T.__proto__ || Object.getPrototypeOf(T);
                  })(P);
            }
            function Mt(P, T, k) {
              return (
                T in P
                  ? Object.defineProperty(P, T, {
                      value: k,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (P[T] = k),
                P
              );
            }
            var At = s.a.createRef(),
              Z = (function (P) {
                (function (V, it) {
                  if (typeof it != 'function' && it !== null)
                    throw new TypeError(
                      'Super expression must either be null or a function'
                    );
                  (V.prototype = Object.create(it && it.prototype, {
                    constructor: { value: V, writable: !0, configurable: !0 },
                  })),
                    it && Ft(V, it);
                })(Q, P);
                var T,
                  k,
                  C,
                  $ = St(Q);
                function Q(V) {
                  var it;
                  Tt(this, Q);
                  for (
                    var lt = arguments.length,
                      ot = new Array(lt > 1 ? lt - 1 : 0),
                      Et = 1;
                    Et < lt;
                    Et++
                  )
                    ot[Et - 1] = arguments[Et];
                  return (
                    Mt(
                      Wt((it = $.call.apply($, [this, V].concat(ot)))),
                      'canvas',
                      s.a.createRef()
                    ),
                    Mt(Wt(it), 'confetti', void 0),
                    (it.canvas = V.canvasRef || At),
                    it
                  );
                }
                return (
                  (T = Q),
                  (k = [
                    {
                      key: 'componentDidMount',
                      value: function () {
                        if (this.canvas.current) {
                          var V = I(this.props)[0];
                          this.confetti = new O(this.canvas.current, V);
                        }
                      },
                    },
                    {
                      key: 'componentDidUpdate',
                      value: function () {
                        var V = I(this.props)[0];
                        this.confetti && (this.confetti.options = V);
                      },
                    },
                    {
                      key: 'componentWillUnmount',
                      value: function () {
                        this.confetti && this.confetti.stop(),
                          (this.confetti = void 0);
                      },
                    },
                    {
                      key: 'render',
                      value: function () {
                        var V = et(I(this.props), 2),
                          it = V[0],
                          lt = V[1],
                          ot = X(
                            {
                              zIndex: 2,
                              position: 'absolute',
                              pointerEvents: 'none',
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                            },
                            lt.style
                          );
                        return s.a.createElement(
                          'canvas',
                          N(
                            {
                              width: it.width,
                              height: it.height,
                              ref: this.canvas,
                            },
                            lt,
                            { style: ot }
                          )
                        );
                      },
                    },
                  ]) && Ct(T.prototype, k),
                  C && Ct(T, C),
                  Q
                );
              })(a.Component);
            function I(P) {
              var T = {},
                k = {},
                C = [].concat(S(Object.keys(w)), [
                  'confettiSource',
                  'drawShape',
                  'onConfettiComplete',
                ]),
                $ = ['canvasRef'];
              for (var Q in P) {
                var V = P[Q];
                C.includes(Q)
                  ? (T[Q] = V)
                  : $.includes(Q)
                    ? ($[Q] = V)
                    : (k[Q] = V);
              }
              return [T, k, {}];
            }
            Mt(Z, 'defaultProps', X({}, w)),
              Mt(Z, 'displayName', 'ReactConfetti');
            var B = s.a.forwardRef(function (P, T) {
              return s.a.createElement(Z, N({ canvasRef: T }, P));
            });
            n.default = B;
          },
        ]).default;
      });
    });
    vt();
    gt();
    yt();
    vt();
    gt();
    yt();
    qn();
    qn();
    vt();
    gt();
    yt();
    var oe = __REACT_DOM__,
      {
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: oS,
        createPortal: Ci,
        findDOMNode: iS,
        flushSync: Ai,
        hydrate: aS,
        render: sS,
        unmountComponentAtNode: lS,
        unstable_batchedUpdates: uS,
        unstable_createPortal: cS,
        unstable_renderSubtreeIntoContainer: pS,
        version: fS,
      } = __REACT_DOM__;
    var vf = cy(Jl(), 1);
    vt();
    gt();
    yt();
    var wS = __STORYBOOK_THEMING__,
      {
        CacheProvider: ES,
        ClassNames: xS,
        Global: OS,
        ThemeProvider: Ri,
        background: SS,
        color: PS,
        convert: Zl,
        create: TS,
        createCache: CS,
        createGlobal: AS,
        createReset: kS,
        css: $l,
        darken: RS,
        ensure: tu,
        ignoreSsrWarning: MS,
        isPropValid: DS,
        jsx: NS,
        keyframes: ze,
        lighten: IS,
        styled: Y,
        themes: eu,
        typography: LS,
        useTheme: Mi,
        withTheme: jS,
      } = __STORYBOOK_THEMING__;
    vt();
    gt();
    yt();
    var US = __STORYBOOK_CORE_EVENTS__,
      {
        CHANNEL_CREATED: HS,
        CONFIG_ERROR: WS,
        CURRENT_STORY_WAS_SET: YS,
        DOCS_PREPARED: qS,
        DOCS_RENDERED: GS,
        FORCE_REMOUNT: XS,
        FORCE_RE_RENDER: _S,
        GLOBALS_UPDATED: KS,
        IGNORED_EXCEPTION: QS,
        NAVIGATE_URL: JS,
        PLAY_FUNCTION_THREW_EXCEPTION: ZS,
        PRELOAD_ENTRIES: $S,
        PREVIEW_BUILDER_PROGRESS: tP,
        PREVIEW_KEYDOWN: eP,
        REGISTER_SUBSCRIPTION: nP,
        REQUEST_WHATS_NEW_DATA: rP,
        RESET_STORY_ARGS: oP,
        RESULT_WHATS_NEW_DATA: iP,
        SELECT_STORY: aP,
        SET_CONFIG: sP,
        SET_CURRENT_STORY: lP,
        SET_GLOBALS: uP,
        SET_INDEX: cP,
        SET_STORIES: pP,
        SET_WHATS_NEW_CACHE: fP,
        SHARED_STATE_CHANGED: dP,
        SHARED_STATE_SET: hP,
        STORIES_COLLAPSE_ALL: mP,
        STORIES_EXPAND_ALL: vP,
        STORY_ARGS_UPDATED: gP,
        STORY_CHANGED: yP,
        STORY_ERRORED: bP,
        STORY_INDEX_INVALIDATED: Di,
        STORY_MISSING: wP,
        STORY_PREPARED: EP,
        STORY_RENDERED: nu,
        STORY_RENDER_PHASE_CHANGED: xP,
        STORY_SPECIFIED: ru,
        STORY_THREW_EXCEPTION: OP,
        STORY_UNCHANGED: SP,
        TELEMETRY_ERROR: PP,
        TOGGLE_WHATS_NEW_NOTIFICATIONS: TP,
        UPDATE_GLOBALS: CP,
        UPDATE_QUERY_PARAMS: AP,
        UPDATE_STORY_ARGS: ou,
      } = __STORYBOOK_CORE_EVENTS__;
    vt();
    gt();
    yt();
    var NP = __STORYBOOK_COMPONENTS__,
      {
        A: IP,
        ActionBar: LP,
        AddonPanel: jP,
        Badge: FP,
        Bar: VP,
        Blockquote: zP,
        Button: BP,
        ClipboardCode: UP,
        Code: HP,
        DL: WP,
        Div: YP,
        DocumentWrapper: qP,
        ErrorFormatter: GP,
        FlexBar: XP,
        Form: _P,
        H1: KP,
        H2: QP,
        H3: JP,
        H4: ZP,
        H5: $P,
        H6: tT,
        HR: eT,
        IconButton: nT,
        IconButtonSkeleton: rT,
        Icons: Xn,
        Img: oT,
        LI: iT,
        Link: aT,
        ListItem: sT,
        Loader: lT,
        OL: uT,
        P: cT,
        Placeholder: pT,
        Pre: fT,
        ResetWrapper: dT,
        ScrollArea: hT,
        Separator: mT,
        Spaced: vT,
        Span: gT,
        StorybookIcon: yT,
        StorybookLogo: bT,
        Symbols: wT,
        SyntaxHighlighter: _n,
        TT: ET,
        TabBar: xT,
        TabButton: OT,
        TabWrapper: ST,
        Table: PT,
        Tabs: TT,
        TabsState: CT,
        TooltipLinkList: AT,
        TooltipMessage: kT,
        TooltipNote: RT,
        UL: MT,
        WithTooltip: DT,
        WithTooltipPure: NT,
        Zoom: IT,
        codeCommon: LT,
        components: jT,
        createCopyToClipboardFunction: FT,
        getStoryHref: VT,
        icons: zT,
        interleaveSeparators: BT,
        nameSpaceClassNames: UT,
        resetComponents: HT,
        withReset: WT,
      } = __STORYBOOK_COMPONENTS__;
    vt();
    gt();
    yt();
    var _T = __STORYBOOK_API__,
      {
        ActiveTabs: KT,
        Consumer: QT,
        ManagerContext: JT,
        Provider: ZT,
        addons: Ni,
        combineParameters: $T,
        controlOrMetaKey: tC,
        controlOrMetaSymbol: eC,
        eventMatchesShortcut: nC,
        eventToShortcut: rC,
        isMacLike: oC,
        isShortcutTaken: iC,
        keyToSymbol: aC,
        merge: sC,
        mockChannel: lC,
        optionOrAltSymbol: uC,
        shortcutMatchesShortcut: cC,
        shortcutToHumanString: pC,
        types: fC,
        useAddonState: dC,
        useArgTypes: hC,
        useArgs: mC,
        useChannel: vC,
        useGlobalTypes: gC,
        useGlobals: yC,
        useParameter: bC,
        useSharedState: wC,
        useStoryPrepared: EC,
        useStorybookApi: xC,
        useStorybookState: OC,
      } = __STORYBOOK_API__;
    var xy = Object.create,
      Jo = Object.defineProperty,
      Oy = Object.getOwnPropertyDescriptor,
      Sy = Object.getOwnPropertyNames,
      Py = Object.getPrototypeOf,
      Ty = Object.prototype.hasOwnProperty,
      v = (t, e) => () => (t && (e = t((t = 0))), e),
      ee = (t, e) => () => (
        e || t((e = { exports: {} }).exports, e), e.exports
      ),
      gf = (t, e) => {
        for (var n in e) Jo(t, n, { get: e[n], enumerable: !0 });
      },
      yf = (t, e, n, r) => {
        if ((e && typeof e == 'object') || typeof e == 'function')
          for (let o of Sy(e))
            !Ty.call(t, o) &&
              o !== n &&
              Jo(t, o, {
                get: () => e[o],
                enumerable: !(r = Oy(e, o)) || r.enumerable,
              });
        return t;
      },
      le = (t, e, n) => (
        (n = t != null ? xy(Py(t)) : {}),
        yf(
          e || !t || !t.__esModule
            ? Jo(n, 'default', { value: t, enumerable: !0 })
            : n,
          t
        )
      ),
      Cy = (t) => yf(Jo({}, '__esModule', { value: !0 }), t),
      Ay = ee((t, e) => {
        var n = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
        e.exports = n;
      }),
      ky = ee((t, e) => {
        var n = Ay();
        function r() {}
        function o() {}
        (o.resetWarningCache = r),
          (e.exports = function () {
            function i(l, u, c, f, p, d) {
              if (d !== n) {
                var h = new Error(
                  'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
                );
                throw ((h.name = 'Invariant Violation'), h);
              }
            }
            i.isRequired = i;
            function a() {
              return i;
            }
            var s = {
              array: i,
              bigint: i,
              bool: i,
              func: i,
              number: i,
              object: i,
              string: i,
              symbol: i,
              any: i,
              arrayOf: a,
              element: i,
              elementType: i,
              instanceOf: a,
              node: i,
              objectOf: a,
              oneOf: a,
              oneOfType: a,
              shape: a,
              exact: a,
              checkPropTypes: o,
              resetWarningCache: r,
            };
            return (s.PropTypes = s), s;
          });
      }),
      Ry = ee((t, e) => {
        e.exports = ky()();
      });
    function iu(t) {
      return function (e) {
        return typeof e === t;
      };
    }
    var au,
      su,
      Ta,
      Ca,
      lu,
      My = v(() => {
        (au = iu('function')),
          (su = function (t) {
            return t === null;
          }),
          (Ta = function (t) {
            return Object.prototype.toString.call(t).slice(8, -1) === 'RegExp';
          }),
          (Ca = function (t) {
            return !lu(t) && !su(t) && (au(t) || typeof t == 'object');
          }),
          (lu = iu('undefined'));
      });
    function Dy(t, e) {
      var n = t.length;
      if (n !== e.length) return !1;
      for (var r = n; r-- !== 0; ) if (!Lt(t[r], e[r])) return !1;
      return !0;
    }
    function Ny(t, e) {
      if (t.byteLength !== e.byteLength) return !1;
      for (
        var n = new DataView(t.buffer),
          r = new DataView(e.buffer),
          o = t.byteLength;
        o--;

      )
        if (n.getUint8(o) !== r.getUint8(o)) return !1;
      return !0;
    }
    function Iy(t, e) {
      var n, r, o, i;
      if (t.size !== e.size) return !1;
      try {
        for (var a = Co(t.entries()), s = a.next(); !s.done; s = a.next()) {
          var l = s.value;
          if (!e.has(l[0])) return !1;
        }
      } catch (f) {
        n = { error: f };
      } finally {
        try {
          s && !s.done && (r = a.return) && r.call(a);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var u = Co(t.entries()), c = u.next(); !c.done; c = u.next()) {
          var l = c.value;
          if (!Lt(l[1], e.get(l[0]))) return !1;
        }
      } catch (f) {
        o = { error: f };
      } finally {
        try {
          c && !c.done && (i = u.return) && i.call(u);
        } finally {
          if (o) throw o.error;
        }
      }
      return !0;
    }
    function Ly(t, e) {
      var n, r;
      if (t.size !== e.size) return !1;
      try {
        for (var o = Co(t.entries()), i = o.next(); !i.done; i = o.next()) {
          var a = i.value;
          if (!e.has(a[0])) return !1;
        }
      } catch (s) {
        n = { error: s };
      } finally {
        try {
          i && !i.done && (r = o.return) && r.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
      return !0;
    }
    function Lt(t, e) {
      if (t === e) return !0;
      if (t && Ca(t) && e && Ca(e)) {
        if (t.constructor !== e.constructor) return !1;
        if (Array.isArray(t) && Array.isArray(e)) return Dy(t, e);
        if (t instanceof Map && e instanceof Map) return Iy(t, e);
        if (t instanceof Set && e instanceof Set) return Ly(t, e);
        if (ArrayBuffer.isView(t) && ArrayBuffer.isView(e)) return Ny(t, e);
        if (Ta(t) && Ta(e)) return t.source === e.source && t.flags === e.flags;
        if (t.valueOf !== Object.prototype.valueOf)
          return t.valueOf() === e.valueOf();
        if (t.toString !== Object.prototype.toString)
          return t.toString() === e.toString();
        var n = Object.keys(t),
          r = Object.keys(e);
        if (n.length !== r.length) return !1;
        for (var o = n.length; o-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(e, n[o])) return !1;
        for (var o = n.length; o-- !== 0; ) {
          var i = n[o];
          if (!(i === '_owner' && t.$$typeof) && !Lt(t[i], e[i])) return !1;
        }
        return !0;
      }
      return Number.isNaN(t) && Number.isNaN(e) ? !0 : t === e;
    }
    var Co,
      bf = v(() => {
        My(),
          (Co = function (t) {
            var e = typeof Symbol == 'function' && Symbol.iterator,
              n = e && t[e],
              r = 0;
            if (n) return n.call(t);
            if (t && typeof t.length == 'number')
              return {
                next: function () {
                  return (
                    t && r >= t.length && (t = void 0),
                    { value: t && t[r++], done: !t }
                  );
                },
              };
            throw new TypeError(
              e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
            );
          });
      }),
      jy = v(() => {});
    function Ao(t) {
      var e = Object.prototype.toString.call(t).slice(8, -1);
      if (/HTML\w+Element/.test(e)) return 'HTMLElement';
      if (Fy(e)) return e;
    }
    function Xt(t) {
      return function (e) {
        return Ao(e) === t;
      };
    }
    function Fy(t) {
      return wf.includes(t);
    }
    function sn(t) {
      return function (e) {
        return typeof e === t;
      };
    }
    function Vy(t) {
      return Ef.includes(t);
    }
    function L(t) {
      if (t === null) return 'null';
      switch (typeof t) {
        case 'bigint':
          return 'bigint';
        case 'boolean':
          return 'boolean';
        case 'number':
          return 'number';
        case 'string':
          return 'string';
        case 'symbol':
          return 'symbol';
        case 'undefined':
          return 'undefined';
      }
      if (L.array(t)) return 'Array';
      if (L.plainFunction(t)) return 'Function';
      var e = Ao(t);
      return e || 'Object';
    }
    var uu,
      wf,
      Ef,
      F,
      Ss = v(() => {
        jy(),
          (uu = [
            'innerHTML',
            'ownerDocument',
            'style',
            'attributes',
            'nodeValue',
          ]),
          (wf = [
            'Array',
            'ArrayBuffer',
            'AsyncFunction',
            'AsyncGenerator',
            'AsyncGeneratorFunction',
            'Date',
            'Error',
            'Function',
            'Generator',
            'GeneratorFunction',
            'HTMLElement',
            'Map',
            'Object',
            'Promise',
            'RegExp',
            'Set',
            'WeakMap',
            'WeakSet',
          ]),
          (Ef = [
            'bigint',
            'boolean',
            'null',
            'number',
            'string',
            'symbol',
            'undefined',
          ]),
          (L.array = Array.isArray),
          (L.arrayOf = function (t, e) {
            return !L.array(t) && !L.function(e)
              ? !1
              : t.every(function (n) {
                  return e(n);
                });
          }),
          (L.asyncGeneratorFunction = function (t) {
            return Ao(t) === 'AsyncGeneratorFunction';
          }),
          (L.asyncFunction = Xt('AsyncFunction')),
          (L.bigint = sn('bigint')),
          (L.boolean = function (t) {
            return t === !0 || t === !1;
          }),
          (L.date = Xt('Date')),
          (L.defined = function (t) {
            return !L.undefined(t);
          }),
          (L.domElement = function (t) {
            return (
              L.object(t) &&
              !L.plainObject(t) &&
              t.nodeType === 1 &&
              L.string(t.nodeName) &&
              uu.every(function (e) {
                return e in t;
              })
            );
          }),
          (L.empty = function (t) {
            return (
              (L.string(t) && t.length === 0) ||
              (L.array(t) && t.length === 0) ||
              (L.object(t) &&
                !L.map(t) &&
                !L.set(t) &&
                Object.keys(t).length === 0) ||
              (L.set(t) && t.size === 0) ||
              (L.map(t) && t.size === 0)
            );
          }),
          (L.error = Xt('Error')),
          (L.function = sn('function')),
          (L.generator = function (t) {
            return L.iterable(t) && L.function(t.next) && L.function(t.throw);
          }),
          (L.generatorFunction = Xt('GeneratorFunction')),
          (L.instanceOf = function (t, e) {
            return !t || !e ? !1 : Object.getPrototypeOf(t) === e.prototype;
          }),
          (L.iterable = function (t) {
            return !L.nullOrUndefined(t) && L.function(t[Symbol.iterator]);
          }),
          (L.map = Xt('Map')),
          (L.nan = function (t) {
            return Number.isNaN(t);
          }),
          (L.null = function (t) {
            return t === null;
          }),
          (L.nullOrUndefined = function (t) {
            return L.null(t) || L.undefined(t);
          }),
          (L.number = function (t) {
            return sn('number')(t) && !L.nan(t);
          }),
          (L.numericString = function (t) {
            return L.string(t) && t.length > 0 && !Number.isNaN(Number(t));
          }),
          (L.object = function (t) {
            return (
              !L.nullOrUndefined(t) && (L.function(t) || typeof t == 'object')
            );
          }),
          (L.oneOf = function (t, e) {
            return L.array(t) ? t.indexOf(e) > -1 : !1;
          }),
          (L.plainFunction = Xt('Function')),
          (L.plainObject = function (t) {
            if (Ao(t) !== 'Object') return !1;
            var e = Object.getPrototypeOf(t);
            return e === null || e === Object.getPrototypeOf({});
          }),
          (L.primitive = function (t) {
            return L.null(t) || Vy(typeof t);
          }),
          (L.promise = Xt('Promise')),
          (L.propertyOf = function (t, e, n) {
            if (!L.object(t) || !e) return !1;
            var r = t[e];
            return L.function(n) ? n(r) : L.defined(r);
          }),
          (L.regexp = Xt('RegExp')),
          (L.set = Xt('Set')),
          (L.string = sn('string')),
          (L.symbol = sn('symbol')),
          (L.undefined = sn('undefined')),
          (L.weakMap = Xt('WeakMap')),
          (L.weakSet = Xt('WeakSet')),
          (F = L);
      });
    function zy() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      return t.every(function (n) {
        return F.string(n) || F.array(n) || F.plainObject(n);
      });
    }
    function By(t, e, n) {
      return xf(t, e)
        ? [t, e].every(F.array)
          ? !t.some(hu(n)) && e.some(hu(n))
          : [t, e].every(F.plainObject)
            ? !Object.entries(t).some(du(n)) && Object.entries(e).some(du(n))
            : e === n
        : !1;
    }
    function cu(t, e, n) {
      var r = n.actual,
        o = n.key,
        i = n.previous,
        a = n.type,
        s = ue(t, o),
        l = ue(e, o),
        u = [s, l].every(F.number) && (a === 'increased' ? s < l : s > l);
      return (
        F.undefined(r) || (u = u && l === r),
        F.undefined(i) || (u = u && s === i),
        u
      );
    }
    function pu(t, e, n) {
      var r = n.key,
        o = n.type,
        i = n.value,
        a = ue(t, r),
        s = ue(e, r),
        l = o === 'added' ? a : s,
        u = o === 'added' ? s : a;
      if (!F.nullOrUndefined(i)) {
        if (F.defined(l)) {
          if (F.array(l) || F.plainObject(l)) return By(l, u, i);
        } else return Lt(u, i);
        return !1;
      }
      return [a, s].every(F.array)
        ? !u.every(Ps(l))
        : [a, s].every(F.plainObject)
          ? Uy(Object.keys(l), Object.keys(u))
          : ![a, s].every(function (c) {
              return F.primitive(c) && F.defined(c);
            }) &&
            (o === 'added'
              ? !F.defined(a) && F.defined(s)
              : F.defined(a) && !F.defined(s));
    }
    function fu(t, e, n) {
      var r = n === void 0 ? {} : n,
        o = r.key,
        i = ue(t, o),
        a = ue(e, o);
      if (!xf(i, a)) throw new TypeError('Inputs have different types');
      if (!zy(i, a)) throw new TypeError("Inputs don't have length");
      return (
        [i, a].every(F.plainObject) &&
          ((i = Object.keys(i)), (a = Object.keys(a))),
        [i, a]
      );
    }
    function du(t) {
      return function (e) {
        var n = e[0],
          r = e[1];
        return F.array(t)
          ? Lt(t, r) ||
              t.some(function (o) {
                return Lt(o, r) || (F.array(r) && Ps(r)(o));
              })
          : F.plainObject(t) && t[n]
            ? !!t[n] && Lt(t[n], r)
            : Lt(t, r);
      };
    }
    function Uy(t, e) {
      return e.some(function (n) {
        return !t.includes(n);
      });
    }
    function hu(t) {
      return function (e) {
        return F.array(t)
          ? t.some(function (n) {
              return Lt(n, e) || (F.array(e) && Ps(e)(n));
            })
          : Lt(t, e);
      };
    }
    function Kn(t, e) {
      return F.array(t)
        ? t.some(function (n) {
            return Lt(n, e);
          })
        : Lt(t, e);
    }
    function Ps(t) {
      return function (e) {
        return t.some(function (n) {
          return Lt(n, e);
        });
      };
    }
    function xf() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      return (
        t.every(F.array) ||
        t.every(F.number) ||
        t.every(F.plainObject) ||
        t.every(F.string)
      );
    }
    function ue(t, e) {
      if (F.plainObject(t) || F.array(t)) {
        if (F.string(e)) {
          var n = e.split('.');
          return n.reduce(function (r, o) {
            return r && r[o];
          }, t);
        }
        return F.number(e) ? t[e] : t;
      }
      return t;
    }
    var Hy = v(() => {
        bf(), Ss();
      }),
      Wy = v(() => {});
    function ur(t, e) {
      if ([t, e].some(F.nullOrUndefined))
        throw new Error('Missing required parameters');
      if (
        ![t, e].every(function (f) {
          return F.plainObject(f) || F.array(f);
        })
      )
        throw new Error('Expected plain objects or array');
      var n = function (f, p) {
          try {
            return pu(t, e, { key: f, type: 'added', value: p });
          } catch {
            return !1;
          }
        },
        r = function (f, p, d) {
          try {
            var h = ue(t, f),
              m = ue(e, f),
              y = F.defined(p),
              E = F.defined(d);
            if (y || E) {
              var x = E ? Kn(d, h) : !Kn(p, h),
                b = Kn(p, m);
              return x && b;
            }
            return [h, m].every(F.array) || [h, m].every(F.plainObject)
              ? !Lt(h, m)
              : h !== m;
          } catch {
            return !1;
          }
        },
        o = function (f, p, d) {
          if (!F.defined(f)) return !1;
          try {
            var h = ue(t, f),
              m = ue(e, f),
              y = F.defined(d);
            return Kn(p, h) && (y ? Kn(d, m) : !y);
          } catch {
            return !1;
          }
        },
        i = function (f, p) {
          return F.defined(f) ? r(f, p) : !1;
        },
        a = function (f, p, d) {
          if (!F.defined(f)) return !1;
          try {
            return cu(t, e, {
              key: f,
              actual: p,
              previous: d,
              type: 'decreased',
            });
          } catch {
            return !1;
          }
        },
        s = function (f) {
          try {
            var p = fu(t, e, { key: f }),
              d = p[0],
              h = p[1];
            return !!d.length && !h.length;
          } catch {
            return !1;
          }
        },
        l = function (f) {
          try {
            var p = fu(t, e, { key: f }),
              d = p[0],
              h = p[1];
            return !d.length && !!h.length;
          } catch {
            return !1;
          }
        },
        u = function (f, p, d) {
          if (!F.defined(f)) return !1;
          try {
            return cu(t, e, {
              key: f,
              actual: p,
              previous: d,
              type: 'increased',
            });
          } catch {
            return !1;
          }
        },
        c = function (f, p) {
          try {
            return pu(t, e, { key: f, type: 'removed', value: p });
          } catch {
            return !1;
          }
        };
      return {
        added: n,
        changed: r,
        changedFrom: o,
        changedTo: i,
        decreased: a,
        emptied: s,
        filled: l,
        increased: u,
        removed: c,
      };
    }
    var Of = v(() => {
      bf(), Ss(), Hy(), Wy();
    });
    function ko(t) {
      let e = Object.prototype.toString.call(t).slice(8, -1);
      if (/HTML\w+Element/.test(e)) return 'HTMLElement';
      if (Yy(e)) return e;
    }
    function _t(t) {
      return (e) => ko(e) === t;
    }
    function Yy(t) {
      return Sf.includes(t);
    }
    function ln(t) {
      return (e) => typeof e === t;
    }
    function qy(t) {
      return Pf.includes(t);
    }
    function j(t) {
      if (t === null) return 'null';
      switch (typeof t) {
        case 'bigint':
          return 'bigint';
        case 'boolean':
          return 'boolean';
        case 'number':
          return 'number';
        case 'string':
          return 'string';
        case 'symbol':
          return 'symbol';
        case 'undefined':
          return 'undefined';
      }
      return j.array(t)
        ? 'Array'
        : j.plainFunction(t)
          ? 'Function'
          : ko(t) || 'Object';
    }
    var mu,
      Sf,
      Pf,
      ft,
      Gy = v(() => {
        (mu = [
          'innerHTML',
          'ownerDocument',
          'style',
          'attributes',
          'nodeValue',
        ]),
          (Sf = [
            'Array',
            'ArrayBuffer',
            'AsyncFunction',
            'AsyncGenerator',
            'AsyncGeneratorFunction',
            'Date',
            'Error',
            'Function',
            'Generator',
            'GeneratorFunction',
            'HTMLElement',
            'Map',
            'Object',
            'Promise',
            'RegExp',
            'Set',
            'WeakMap',
            'WeakSet',
          ]),
          (Pf = [
            'bigint',
            'boolean',
            'null',
            'number',
            'string',
            'symbol',
            'undefined',
          ]),
          (j.array = Array.isArray),
          (j.arrayOf = (t, e) =>
            !j.array(t) && !j.function(e) ? !1 : t.every((n) => e(n))),
          (j.asyncGeneratorFunction = (t) =>
            ko(t) === 'AsyncGeneratorFunction'),
          (j.asyncFunction = _t('AsyncFunction')),
          (j.bigint = ln('bigint')),
          (j.boolean = (t) => t === !0 || t === !1),
          (j.date = _t('Date')),
          (j.defined = (t) => !j.undefined(t)),
          (j.domElement = (t) =>
            j.object(t) &&
            !j.plainObject(t) &&
            t.nodeType === 1 &&
            j.string(t.nodeName) &&
            mu.every((e) => e in t)),
          (j.empty = (t) =>
            (j.string(t) && t.length === 0) ||
            (j.array(t) && t.length === 0) ||
            (j.object(t) &&
              !j.map(t) &&
              !j.set(t) &&
              Object.keys(t).length === 0) ||
            (j.set(t) && t.size === 0) ||
            (j.map(t) && t.size === 0)),
          (j.error = _t('Error')),
          (j.function = ln('function')),
          (j.generator = (t) =>
            j.iterable(t) && j.function(t.next) && j.function(t.throw)),
          (j.generatorFunction = _t('GeneratorFunction')),
          (j.instanceOf = (t, e) =>
            !t || !e ? !1 : Object.getPrototypeOf(t) === e.prototype),
          (j.iterable = (t) =>
            !j.nullOrUndefined(t) && j.function(t[Symbol.iterator])),
          (j.map = _t('Map')),
          (j.nan = (t) => Number.isNaN(t)),
          (j.null = (t) => t === null),
          (j.nullOrUndefined = (t) => j.null(t) || j.undefined(t)),
          (j.number = (t) => ln('number')(t) && !j.nan(t)),
          (j.numericString = (t) =>
            j.string(t) && t.length > 0 && !Number.isNaN(Number(t))),
          (j.object = (t) =>
            !j.nullOrUndefined(t) && (j.function(t) || typeof t == 'object')),
          (j.oneOf = (t, e) => (j.array(t) ? t.indexOf(e) > -1 : !1)),
          (j.plainFunction = _t('Function')),
          (j.plainObject = (t) => {
            if (ko(t) !== 'Object') return !1;
            let e = Object.getPrototypeOf(t);
            return e === null || e === Object.getPrototypeOf({});
          }),
          (j.primitive = (t) => j.null(t) || qy(typeof t)),
          (j.promise = _t('Promise')),
          (j.propertyOf = (t, e, n) => {
            if (!j.object(t) || !e) return !1;
            let r = t[e];
            return j.function(n) ? n(r) : j.defined(r);
          }),
          (j.regexp = _t('RegExp')),
          (j.set = _t('Set')),
          (j.string = ln('string')),
          (j.symbol = ln('symbol')),
          (j.undefined = ln('undefined')),
          (j.weakMap = _t('WeakMap')),
          (j.weakSet = _t('WeakSet')),
          (ft = j);
      }),
      Tf = ee((t, e) => {
        (function () {
          var n = !!(
              typeof window < 'u' &&
              window.document &&
              window.document.createElement
            ),
            r = {
              canUseDOM: n,
              canUseWorkers: typeof Worker < 'u',
              canUseEventListeners:
                n && !!(window.addEventListener || window.attachEvent),
              canUseViewport: n && !!window.screen,
            };
          typeof define == 'function' &&
          typeof define.amd == 'object' &&
          define.amd
            ? define(function () {
                return r;
              })
            : typeof e < 'u' && e.exports
              ? (e.exports = r)
              : (window.ExecutionEnvironment = r);
        })();
      }),
      Xy = ee((t, e) => {
        var n = new Error('Element already at target scroll position'),
          r = new Error('Scroll cancelled'),
          o = Math.min,
          i = Date.now;
        e.exports = { left: a('scrollLeft'), top: a('scrollTop') };
        function a(u) {
          return function (c, f, p, d) {
            (p = p || {}),
              typeof p == 'function' && ((d = p), (p = {})),
              typeof d != 'function' && (d = l);
            var h = i(),
              m = c[u],
              y = p.ease || s,
              E = isNaN(p.duration) ? 350 : +p.duration,
              x = !1;
            return m === f ? d(n, c[u]) : requestAnimationFrame(w), b;
            function b() {
              x = !0;
            }
            function w(O) {
              if (x) return d(r, c[u]);
              var S = i(),
                M = o(1, (S - h) / E),
                N = y(M);
              (c[u] = N * (f - m) + m),
                M < 1
                  ? requestAnimationFrame(w)
                  : requestAnimationFrame(function () {
                      d(null, c[u]);
                    });
            }
          };
        }
        function s(u) {
          return 0.5 * (1 - Math.cos(Math.PI * u));
        }
        function l() {}
      }),
      _y = ee((t, e) => {
        (function (n, r) {
          typeof define == 'function' && define.amd
            ? define([], r)
            : typeof e == 'object' && e.exports
              ? (e.exports = r())
              : (n.Scrollparent = r());
        })(t, function () {
          function n(o) {
            var i = getComputedStyle(o, null).getPropertyValue('overflow');
            return i.indexOf('scroll') > -1 || i.indexOf('auto') > -1;
          }
          function r(o) {
            if (o instanceof HTMLElement || o instanceof SVGElement) {
              for (var i = o.parentNode; i.parentNode; ) {
                if (n(i)) return i;
                i = i.parentNode;
              }
              return document.scrollingElement || document.documentElement;
            }
          }
          return r;
        });
      }),
      Ky = ee((t) => {
        var e = typeof Symbol == 'function' && Symbol.for,
          n = e ? Symbol.for('react.element') : 60103,
          r = e ? Symbol.for('react.portal') : 60106,
          o = e ? Symbol.for('react.fragment') : 60107,
          i = e ? Symbol.for('react.strict_mode') : 60108,
          a = e ? Symbol.for('react.profiler') : 60114,
          s = e ? Symbol.for('react.provider') : 60109,
          l = e ? Symbol.for('react.context') : 60110,
          u = e ? Symbol.for('react.async_mode') : 60111,
          c = e ? Symbol.for('react.concurrent_mode') : 60111,
          f = e ? Symbol.for('react.forward_ref') : 60112,
          p = e ? Symbol.for('react.suspense') : 60113,
          d = e ? Symbol.for('react.suspense_list') : 60120,
          h = e ? Symbol.for('react.memo') : 60115,
          m = e ? Symbol.for('react.lazy') : 60116,
          y = e ? Symbol.for('react.block') : 60121,
          E = e ? Symbol.for('react.fundamental') : 60117,
          x = e ? Symbol.for('react.responder') : 60118,
          b = e ? Symbol.for('react.scope') : 60119;
        function w(S) {
          if (typeof S == 'object' && S !== null) {
            var M = S.$$typeof;
            switch (M) {
              case n:
                switch (((S = S.type), S)) {
                  case u:
                  case c:
                  case o:
                  case a:
                  case i:
                  case p:
                    return S;
                  default:
                    switch (((S = S && S.$$typeof), S)) {
                      case l:
                      case f:
                      case m:
                      case h:
                      case s:
                        return S;
                      default:
                        return M;
                    }
                }
              case r:
                return M;
            }
          }
        }
        function O(S) {
          return w(S) === c;
        }
        (t.AsyncMode = u),
          (t.ConcurrentMode = c),
          (t.ContextConsumer = l),
          (t.ContextProvider = s),
          (t.Element = n),
          (t.ForwardRef = f),
          (t.Fragment = o),
          (t.Lazy = m),
          (t.Memo = h),
          (t.Portal = r),
          (t.Profiler = a),
          (t.StrictMode = i),
          (t.Suspense = p),
          (t.isAsyncMode = function (S) {
            return O(S) || w(S) === u;
          }),
          (t.isConcurrentMode = O),
          (t.isContextConsumer = function (S) {
            return w(S) === l;
          }),
          (t.isContextProvider = function (S) {
            return w(S) === s;
          }),
          (t.isElement = function (S) {
            return typeof S == 'object' && S !== null && S.$$typeof === n;
          }),
          (t.isForwardRef = function (S) {
            return w(S) === f;
          }),
          (t.isFragment = function (S) {
            return w(S) === o;
          }),
          (t.isLazy = function (S) {
            return w(S) === m;
          }),
          (t.isMemo = function (S) {
            return w(S) === h;
          }),
          (t.isPortal = function (S) {
            return w(S) === r;
          }),
          (t.isProfiler = function (S) {
            return w(S) === a;
          }),
          (t.isStrictMode = function (S) {
            return w(S) === i;
          }),
          (t.isSuspense = function (S) {
            return w(S) === p;
          }),
          (t.isValidElementType = function (S) {
            return (
              typeof S == 'string' ||
              typeof S == 'function' ||
              S === o ||
              S === c ||
              S === a ||
              S === i ||
              S === p ||
              S === d ||
              (typeof S == 'object' &&
                S !== null &&
                (S.$$typeof === m ||
                  S.$$typeof === h ||
                  S.$$typeof === s ||
                  S.$$typeof === l ||
                  S.$$typeof === f ||
                  S.$$typeof === E ||
                  S.$$typeof === x ||
                  S.$$typeof === b ||
                  S.$$typeof === y))
            );
          }),
          (t.typeOf = w);
      }),
      Qy = ee((t, e) => {
        e.exports = Ky();
      }),
      Cf = ee((t, e) => {
        var n = function (b) {
          return r(b) && !o(b);
        };
        function r(b) {
          return !!b && typeof b == 'object';
        }
        function o(b) {
          var w = Object.prototype.toString.call(b);
          return w === '[object RegExp]' || w === '[object Date]' || s(b);
        }
        var i = typeof Symbol == 'function' && Symbol.for,
          a = i ? Symbol.for('react.element') : 60103;
        function s(b) {
          return b.$$typeof === a;
        }
        function l(b) {
          return Array.isArray(b) ? [] : {};
        }
        function u(b, w) {
          return w.clone !== !1 && w.isMergeableObject(b) ? E(l(b), b, w) : b;
        }
        function c(b, w, O) {
          return b.concat(w).map(function (S) {
            return u(S, O);
          });
        }
        function f(b, w) {
          if (!w.customMerge) return E;
          var O = w.customMerge(b);
          return typeof O == 'function' ? O : E;
        }
        function p(b) {
          return Object.getOwnPropertySymbols
            ? Object.getOwnPropertySymbols(b).filter(function (w) {
                return Object.propertyIsEnumerable.call(b, w);
              })
            : [];
        }
        function d(b) {
          return Object.keys(b).concat(p(b));
        }
        function h(b, w) {
          try {
            return w in b;
          } catch {
            return !1;
          }
        }
        function m(b, w) {
          return (
            h(b, w) &&
            !(
              Object.hasOwnProperty.call(b, w) &&
              Object.propertyIsEnumerable.call(b, w)
            )
          );
        }
        function y(b, w, O) {
          var S = {};
          return (
            O.isMergeableObject(b) &&
              d(b).forEach(function (M) {
                S[M] = u(b[M], O);
              }),
            d(w).forEach(function (M) {
              m(b, M) ||
                (h(b, M) && O.isMergeableObject(w[M])
                  ? (S[M] = f(M, O)(b[M], w[M], O))
                  : (S[M] = u(w[M], O)));
            }),
            S
          );
        }
        function E(b, w, O) {
          (O = O || {}),
            (O.arrayMerge = O.arrayMerge || c),
            (O.isMergeableObject = O.isMergeableObject || n),
            (O.cloneUnlessOtherwiseSpecified = u);
          var S = Array.isArray(w),
            M = Array.isArray(b),
            N = S === M;
          return N ? (S ? O.arrayMerge(b, w, O) : y(b, w, O)) : u(w, O);
        }
        E.all = function (b, w) {
          if (!Array.isArray(b))
            throw new Error('first argument should be an array');
          return b.reduce(function (O, S) {
            return E(O, S, w);
          }, {});
        };
        var x = E;
        e.exports = x;
      }),
      Jy = ee((t) => {
        Object.defineProperty(t, '__esModule', { value: !0 });
        var e =
            'The typeValidator argument must be a function with the signature function(props, propName, componentName).',
          n =
            'The error message is optional, but must be a string if provided.',
          r = function (l, u, c, f) {
            return typeof l == 'boolean'
              ? l
              : typeof l == 'function'
                ? l(u, c, f)
                : !!l && !!l;
          },
          o = function (l, u) {
            return Object.hasOwnProperty.call(l, u);
          },
          i = function (l, u, c, f) {
            return f
              ? new Error(f)
              : new Error(
                  'Required ' +
                    l[u] +
                    ' `' +
                    u +
                    '`' +
                    (' was not specified in `' + c + '`.')
                );
          },
          a = function (l, u) {
            if (typeof l != 'function') throw new TypeError(e);
            if (u && typeof u != 'string') throw new TypeError(n);
          },
          s = function (l, u, c) {
            return (
              a(l, c),
              function (f, p, d) {
                for (
                  var h = arguments.length, m = Array(3 < h ? h - 3 : 0), y = 3;
                  y < h;
                  y++
                )
                  m[y - 3] = arguments[y];
                return r(u, f, p, d)
                  ? o(f, p)
                    ? l.apply(void 0, [f, p, d].concat(m))
                    : i(f, p, d, c)
                  : l.apply(void 0, [f, p, d].concat(m));
              }
            );
          };
        t.default = s;
      });
    function Zy(t) {
      var e = !1;
      return function () {
        e ||
          ((e = !0),
          window.Promise.resolve().then(function () {
            (e = !1), t();
          }));
      };
    }
    function $y(t) {
      var e = !1;
      return function () {
        e ||
          ((e = !0),
          setTimeout(function () {
            (e = !1), t();
          }, Hf));
      };
    }
    function Af(t) {
      var e = {};
      return t && e.toString.call(t) === '[object Function]';
    }
    function en(t, e) {
      if (t.nodeType !== 1) return [];
      var n = t.ownerDocument.defaultView,
        r = n.getComputedStyle(t, null);
      return e ? r[e] : r;
    }
    function Ts(t) {
      return t.nodeName === 'HTML' ? t : t.parentNode || t.host;
    }
    function Ir(t) {
      if (!t) return document.body;
      switch (t.nodeName) {
        case 'HTML':
        case 'BODY':
          return t.ownerDocument.body;
        case '#document':
          return t.body;
      }
      var e = en(t),
        n = e.overflow,
        r = e.overflowX,
        o = e.overflowY;
      return /(auto|scroll|overlay)/.test(n + o + r) ? t : Ir(Ts(t));
    }
    function kf(t) {
      return t && t.referenceNode ? t.referenceNode : t;
    }
    function Fn(t) {
      return t === 11 ? Ma : t === 10 ? Da : Ma || Da;
    }
    function Rn(t) {
      if (!t) return document.documentElement;
      for (
        var e = Fn(10) ? document.body : null, n = t.offsetParent || null;
        n === e && t.nextElementSibling;

      )
        n = (t = t.nextElementSibling).offsetParent;
      var r = n && n.nodeName;
      return !r || r === 'BODY' || r === 'HTML'
        ? t
          ? t.ownerDocument.documentElement
          : document.documentElement
        : ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) !== -1 &&
            en(n, 'position') === 'static'
          ? Rn(n)
          : n;
    }
    function t0(t) {
      var e = t.nodeName;
      return e === 'BODY' ? !1 : e === 'HTML' || Rn(t.firstElementChild) === t;
    }
    function Aa(t) {
      return t.parentNode !== null ? Aa(t.parentNode) : t;
    }
    function Ro(t, e) {
      if (!t || !t.nodeType || !e || !e.nodeType)
        return document.documentElement;
      var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
        r = n ? t : e,
        o = n ? e : t,
        i = document.createRange();
      i.setStart(r, 0), i.setEnd(o, 0);
      var a = i.commonAncestorContainer;
      if ((t !== a && e !== a) || r.contains(o)) return t0(a) ? a : Rn(a);
      var s = Aa(t);
      return s.host ? Ro(s.host, e) : Ro(t, Aa(e).host);
    }
    function Mn(t) {
      var e =
          arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : 'top',
        n = e === 'top' ? 'scrollTop' : 'scrollLeft',
        r = t.nodeName;
      if (r === 'BODY' || r === 'HTML') {
        var o = t.ownerDocument.documentElement,
          i = t.ownerDocument.scrollingElement || o;
        return i[n];
      }
      return t[n];
    }
    function e0(t, e) {
      var n =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
        r = Mn(e, 'top'),
        o = Mn(e, 'left'),
        i = n ? -1 : 1;
      return (
        (t.top += r * i),
        (t.bottom += r * i),
        (t.left += o * i),
        (t.right += o * i),
        t
      );
    }
    function vu(t, e) {
      var n = e === 'x' ? 'Left' : 'Top',
        r = n === 'Left' ? 'Right' : 'Bottom';
      return (
        parseFloat(t['border' + n + 'Width']) +
        parseFloat(t['border' + r + 'Width'])
      );
    }
    function gu(t, e, n, r) {
      return Math.max(
        e['offset' + t],
        e['scroll' + t],
        n['client' + t],
        n['offset' + t],
        n['scroll' + t],
        Fn(10)
          ? parseInt(n['offset' + t]) +
              parseInt(r['margin' + (t === 'Height' ? 'Top' : 'Left')]) +
              parseInt(r['margin' + (t === 'Height' ? 'Bottom' : 'Right')])
          : 0
      );
    }
    function Rf(t) {
      var e = t.body,
        n = t.documentElement,
        r = Fn(10) && getComputedStyle(n);
      return { height: gu('Height', e, n, r), width: gu('Width', e, n, r) };
    }
    function Le(t) {
      return Ut({}, t, { right: t.left + t.width, bottom: t.top + t.height });
    }
    function ka(t) {
      var e = {};
      try {
        if (Fn(10)) {
          e = t.getBoundingClientRect();
          var n = Mn(t, 'top'),
            r = Mn(t, 'left');
          (e.top += n), (e.left += r), (e.bottom += n), (e.right += r);
        } else e = t.getBoundingClientRect();
      } catch {}
      var o = {
          left: e.left,
          top: e.top,
          width: e.right - e.left,
          height: e.bottom - e.top,
        },
        i = t.nodeName === 'HTML' ? Rf(t.ownerDocument) : {},
        a = i.width || t.clientWidth || o.width,
        s = i.height || t.clientHeight || o.height,
        l = t.offsetWidth - a,
        u = t.offsetHeight - s;
      if (l || u) {
        var c = en(t);
        (l -= vu(c, 'x')), (u -= vu(c, 'y')), (o.width -= l), (o.height -= u);
      }
      return Le(o);
    }
    function Cs(t, e) {
      var n =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
        r = Fn(10),
        o = e.nodeName === 'HTML',
        i = ka(t),
        a = ka(e),
        s = Ir(t),
        l = en(e),
        u = parseFloat(l.borderTopWidth),
        c = parseFloat(l.borderLeftWidth);
      n && o && ((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0)));
      var f = Le({
        top: i.top - a.top - u,
        left: i.left - a.left - c,
        width: i.width,
        height: i.height,
      });
      if (((f.marginTop = 0), (f.marginLeft = 0), !r && o)) {
        var p = parseFloat(l.marginTop),
          d = parseFloat(l.marginLeft);
        (f.top -= u - p),
          (f.bottom -= u - p),
          (f.left -= c - d),
          (f.right -= c - d),
          (f.marginTop = p),
          (f.marginLeft = d);
      }
      return (
        (r && !n ? e.contains(s) : e === s && s.nodeName !== 'BODY') &&
          (f = e0(f, e)),
        f
      );
    }
    function n0(t) {
      var e =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        n = t.ownerDocument.documentElement,
        r = Cs(t, n),
        o = Math.max(n.clientWidth, window.innerWidth || 0),
        i = Math.max(n.clientHeight, window.innerHeight || 0),
        a = e ? 0 : Mn(n),
        s = e ? 0 : Mn(n, 'left'),
        l = {
          top: a - r.top + r.marginTop,
          left: s - r.left + r.marginLeft,
          width: o,
          height: i,
        };
      return Le(l);
    }
    function Mf(t) {
      var e = t.nodeName;
      if (e === 'BODY' || e === 'HTML') return !1;
      if (en(t, 'position') === 'fixed') return !0;
      var n = Ts(t);
      return n ? Mf(n) : !1;
    }
    function Df(t) {
      if (!t || !t.parentElement || Fn()) return document.documentElement;
      for (var e = t.parentElement; e && en(e, 'transform') === 'none'; )
        e = e.parentElement;
      return e || document.documentElement;
    }
    function As(t, e, n, r) {
      var o =
          arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1,
        i = { top: 0, left: 0 },
        a = o ? Df(t) : Ro(t, kf(e));
      if (r === 'viewport') i = n0(a, o);
      else {
        var s = void 0;
        r === 'scrollParent'
          ? ((s = Ir(Ts(e))),
            s.nodeName === 'BODY' && (s = t.ownerDocument.documentElement))
          : r === 'window'
            ? (s = t.ownerDocument.documentElement)
            : (s = r);
        var l = Cs(s, a, o);
        if (s.nodeName === 'HTML' && !Mf(a)) {
          var u = Rf(t.ownerDocument),
            c = u.height,
            f = u.width;
          (i.top += l.top - l.marginTop),
            (i.bottom = c + l.top),
            (i.left += l.left - l.marginLeft),
            (i.right = f + l.left);
        } else i = l;
      }
      n = n || 0;
      var p = typeof n == 'number';
      return (
        (i.left += p ? n : n.left || 0),
        (i.top += p ? n : n.top || 0),
        (i.right -= p ? n : n.right || 0),
        (i.bottom -= p ? n : n.bottom || 0),
        i
      );
    }
    function r0(t) {
      var e = t.width,
        n = t.height;
      return e * n;
    }
    function Nf(t, e, n, r, o) {
      var i =
        arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
      if (t.indexOf('auto') === -1) return t;
      var a = As(n, r, i, o),
        s = {
          top: { width: a.width, height: e.top - a.top },
          right: { width: a.right - e.right, height: a.height },
          bottom: { width: a.width, height: a.bottom - e.bottom },
          left: { width: e.left - a.left, height: a.height },
        },
        l = Object.keys(s)
          .map(function (p) {
            return Ut({ key: p }, s[p], { area: r0(s[p]) });
          })
          .sort(function (p, d) {
            return d.area - p.area;
          }),
        u = l.filter(function (p) {
          var d = p.width,
            h = p.height;
          return d >= n.clientWidth && h >= n.clientHeight;
        }),
        c = u.length > 0 ? u[0].key : l[0].key,
        f = t.split('-')[1];
      return c + (f ? '-' + f : '');
    }
    function If(t, e, n) {
      var r =
          arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null,
        o = r ? Df(e) : Ro(e, kf(n));
      return Cs(n, o, r);
    }
    function Lf(t) {
      var e = t.ownerDocument.defaultView,
        n = e.getComputedStyle(t),
        r = parseFloat(n.marginTop || 0) + parseFloat(n.marginBottom || 0),
        o = parseFloat(n.marginLeft || 0) + parseFloat(n.marginRight || 0),
        i = { width: t.offsetWidth + o, height: t.offsetHeight + r };
      return i;
    }
    function Mo(t) {
      var e = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
      return t.replace(/left|right|bottom|top/g, function (n) {
        return e[n];
      });
    }
    function jf(t, e, n) {
      n = n.split('-')[0];
      var r = Lf(t),
        o = { width: r.width, height: r.height },
        i = ['right', 'left'].indexOf(n) !== -1,
        a = i ? 'top' : 'left',
        s = i ? 'left' : 'top',
        l = i ? 'height' : 'width',
        u = i ? 'width' : 'height';
      return (
        (o[a] = e[a] + e[l] / 2 - r[l] / 2),
        n === s ? (o[s] = e[s] - r[u]) : (o[s] = e[Mo(s)]),
        o
      );
    }
    function Lr(t, e) {
      return Array.prototype.find ? t.find(e) : t.filter(e)[0];
    }
    function o0(t, e, n) {
      if (Array.prototype.findIndex)
        return t.findIndex(function (o) {
          return o[e] === n;
        });
      var r = Lr(t, function (o) {
        return o[e] === n;
      });
      return t.indexOf(r);
    }
    function Ff(t, e, n) {
      var r = n === void 0 ? t : t.slice(0, o0(t, 'name', n));
      return (
        r.forEach(function (o) {
          o.function &&
            console.warn(
              '`modifier.function` is deprecated, use `modifier.fn`!'
            );
          var i = o.function || o.fn;
          o.enabled &&
            Af(i) &&
            ((e.offsets.popper = Le(e.offsets.popper)),
            (e.offsets.reference = Le(e.offsets.reference)),
            (e = i(e, o)));
        }),
        e
      );
    }
    function i0() {
      if (!this.state.isDestroyed) {
        var t = {
          instance: this,
          styles: {},
          arrowStyles: {},
          attributes: {},
          flipped: !1,
          offsets: {},
        };
        (t.offsets.reference = If(
          this.state,
          this.popper,
          this.reference,
          this.options.positionFixed
        )),
          (t.placement = Nf(
            this.options.placement,
            t.offsets.reference,
            this.popper,
            this.reference,
            this.options.modifiers.flip.boundariesElement,
            this.options.modifiers.flip.padding
          )),
          (t.originalPlacement = t.placement),
          (t.positionFixed = this.options.positionFixed),
          (t.offsets.popper = jf(
            this.popper,
            t.offsets.reference,
            t.placement
          )),
          (t.offsets.popper.position = this.options.positionFixed
            ? 'fixed'
            : 'absolute'),
          (t = Ff(this.modifiers, t)),
          this.state.isCreated
            ? this.options.onUpdate(t)
            : ((this.state.isCreated = !0), this.options.onCreate(t));
      }
    }
    function Vf(t, e) {
      return t.some(function (n) {
        var r = n.name,
          o = n.enabled;
        return o && r === e;
      });
    }
    function ks(t) {
      for (
        var e = [!1, 'ms', 'Webkit', 'Moz', 'O'],
          n = t.charAt(0).toUpperCase() + t.slice(1),
          r = 0;
        r < e.length;
        r++
      ) {
        var o = e[r],
          i = o ? '' + o + n : t;
        if (typeof document.body.style[i] < 'u') return i;
      }
      return null;
    }
    function a0() {
      return (
        (this.state.isDestroyed = !0),
        Vf(this.modifiers, 'applyStyle') &&
          (this.popper.removeAttribute('x-placement'),
          (this.popper.style.position = ''),
          (this.popper.style.top = ''),
          (this.popper.style.left = ''),
          (this.popper.style.right = ''),
          (this.popper.style.bottom = ''),
          (this.popper.style.willChange = ''),
          (this.popper.style[ks('transform')] = '')),
        this.disableEventListeners(),
        this.options.removeOnDestroy &&
          this.popper.parentNode.removeChild(this.popper),
        this
      );
    }
    function zf(t) {
      var e = t.ownerDocument;
      return e ? e.defaultView : window;
    }
    function Bf(t, e, n, r) {
      var o = t.nodeName === 'BODY',
        i = o ? t.ownerDocument.defaultView : t;
      i.addEventListener(e, n, { passive: !0 }),
        o || Bf(Ir(i.parentNode), e, n, r),
        r.push(i);
    }
    function s0(t, e, n, r) {
      (n.updateBound = r),
        zf(t).addEventListener('resize', n.updateBound, { passive: !0 });
      var o = Ir(t);
      return (
        Bf(o, 'scroll', n.updateBound, n.scrollParents),
        (n.scrollElement = o),
        (n.eventsEnabled = !0),
        n
      );
    }
    function l0() {
      this.state.eventsEnabled ||
        (this.state = s0(
          this.reference,
          this.options,
          this.state,
          this.scheduleUpdate
        ));
    }
    function u0(t, e) {
      return (
        zf(t).removeEventListener('resize', e.updateBound),
        e.scrollParents.forEach(function (n) {
          n.removeEventListener('scroll', e.updateBound);
        }),
        (e.updateBound = null),
        (e.scrollParents = []),
        (e.scrollElement = null),
        (e.eventsEnabled = !1),
        e
      );
    }
    function c0() {
      this.state.eventsEnabled &&
        (cancelAnimationFrame(this.scheduleUpdate),
        (this.state = u0(this.reference, this.state)));
    }
    function Rs(t) {
      return t !== '' && !isNaN(parseFloat(t)) && isFinite(t);
    }
    function Ra(t, e) {
      Object.keys(e).forEach(function (n) {
        var r = '';
        ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(n) !==
          -1 &&
          Rs(e[n]) &&
          (r = 'px'),
          (t.style[n] = e[n] + r);
      });
    }
    function p0(t, e) {
      Object.keys(e).forEach(function (n) {
        var r = e[n];
        r !== !1 ? t.setAttribute(n, e[n]) : t.removeAttribute(n);
      });
    }
    function f0(t) {
      return (
        Ra(t.instance.popper, t.styles),
        p0(t.instance.popper, t.attributes),
        t.arrowElement &&
          Object.keys(t.arrowStyles).length &&
          Ra(t.arrowElement, t.arrowStyles),
        t
      );
    }
    function d0(t, e, n, r, o) {
      var i = If(o, e, t, n.positionFixed),
        a = Nf(
          n.placement,
          i,
          e,
          t,
          n.modifiers.flip.boundariesElement,
          n.modifiers.flip.padding
        );
      return (
        e.setAttribute('x-placement', a),
        Ra(e, { position: n.positionFixed ? 'fixed' : 'absolute' }),
        n
      );
    }
    function h0(t, e) {
      var n = t.offsets,
        r = n.popper,
        o = n.reference,
        i = Math.round,
        a = Math.floor,
        s = function (y) {
          return y;
        },
        l = i(o.width),
        u = i(r.width),
        c = ['left', 'right'].indexOf(t.placement) !== -1,
        f = t.placement.indexOf('-') !== -1,
        p = l % 2 === u % 2,
        d = l % 2 === 1 && u % 2 === 1,
        h = e ? (c || f || p ? i : a) : s,
        m = e ? i : s;
      return {
        left: h(d && !f && e ? r.left - 1 : r.left),
        top: m(r.top),
        bottom: m(r.bottom),
        right: h(r.right),
      };
    }
    function m0(t, e) {
      var n = e.x,
        r = e.y,
        o = t.offsets.popper,
        i = Lr(t.instance.modifiers, function (b) {
          return b.name === 'applyStyle';
        }).gpuAcceleration;
      i !== void 0 &&
        console.warn(
          'WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!'
        );
      var a = i !== void 0 ? i : e.gpuAcceleration,
        s = Rn(t.instance.popper),
        l = ka(s),
        u = { position: o.position },
        c = h0(t, window.devicePixelRatio < 2 || !Wf),
        f = n === 'bottom' ? 'top' : 'bottom',
        p = r === 'right' ? 'left' : 'right',
        d = ks('transform'),
        h = void 0,
        m = void 0;
      if (
        (f === 'bottom'
          ? s.nodeName === 'HTML'
            ? (m = -s.clientHeight + c.bottom)
            : (m = -l.height + c.bottom)
          : (m = c.top),
        p === 'right'
          ? s.nodeName === 'HTML'
            ? (h = -s.clientWidth + c.right)
            : (h = -l.width + c.right)
          : (h = c.left),
        a && d)
      )
        (u[d] = 'translate3d(' + h + 'px, ' + m + 'px, 0)'),
          (u[f] = 0),
          (u[p] = 0),
          (u.willChange = 'transform');
      else {
        var y = f === 'bottom' ? -1 : 1,
          E = p === 'right' ? -1 : 1;
        (u[f] = m * y), (u[p] = h * E), (u.willChange = f + ', ' + p);
      }
      var x = { 'x-placement': t.placement };
      return (
        (t.attributes = Ut({}, x, t.attributes)),
        (t.styles = Ut({}, u, t.styles)),
        (t.arrowStyles = Ut({}, t.offsets.arrow, t.arrowStyles)),
        t
      );
    }
    function Uf(t, e, n) {
      var r = Lr(t, function (s) {
          var l = s.name;
          return l === e;
        }),
        o =
          !!r &&
          t.some(function (s) {
            return s.name === n && s.enabled && s.order < r.order;
          });
      if (!o) {
        var i = '`' + e + '`',
          a = '`' + n + '`';
        console.warn(
          a +
            ' modifier is required by ' +
            i +
            ' modifier in order to work, be sure to include it before ' +
            i +
            '!'
        );
      }
      return o;
    }
    function v0(t, e) {
      var n;
      if (!Uf(t.instance.modifiers, 'arrow', 'keepTogether')) return t;
      var r = e.element;
      if (typeof r == 'string') {
        if (((r = t.instance.popper.querySelector(r)), !r)) return t;
      } else if (!t.instance.popper.contains(r))
        return (
          console.warn(
            'WARNING: `arrow.element` must be child of its popper element!'
          ),
          t
        );
      var o = t.placement.split('-')[0],
        i = t.offsets,
        a = i.popper,
        s = i.reference,
        l = ['left', 'right'].indexOf(o) !== -1,
        u = l ? 'height' : 'width',
        c = l ? 'Top' : 'Left',
        f = c.toLowerCase(),
        p = l ? 'left' : 'top',
        d = l ? 'bottom' : 'right',
        h = Lf(r)[u];
      s[d] - h < a[f] && (t.offsets.popper[f] -= a[f] - (s[d] - h)),
        s[f] + h > a[d] && (t.offsets.popper[f] += s[f] + h - a[d]),
        (t.offsets.popper = Le(t.offsets.popper));
      var m = s[f] + s[u] / 2 - h / 2,
        y = en(t.instance.popper),
        E = parseFloat(y['margin' + c]),
        x = parseFloat(y['border' + c + 'Width']),
        b = m - t.offsets.popper[f] - E - x;
      return (
        (b = Math.max(Math.min(a[u] - h, b), 0)),
        (t.arrowElement = r),
        (t.offsets.arrow =
          ((n = {}), Ze(n, f, Math.round(b)), Ze(n, p, ''), n)),
        t
      );
    }
    function g0(t) {
      return t === 'end' ? 'start' : t === 'start' ? 'end' : t;
    }
    function yu(t) {
      var e =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        n = so.indexOf(t),
        r = so.slice(n + 1).concat(so.slice(0, n));
      return e ? r.reverse() : r;
    }
    function y0(t, e) {
      if (
        Vf(t.instance.modifiers, 'inner') ||
        (t.flipped && t.placement === t.originalPlacement)
      )
        return t;
      var n = As(
          t.instance.popper,
          t.instance.reference,
          e.padding,
          e.boundariesElement,
          t.positionFixed
        ),
        r = t.placement.split('-')[0],
        o = Mo(r),
        i = t.placement.split('-')[1] || '',
        a = [];
      switch (e.behavior) {
        case lo.FLIP:
          a = [r, o];
          break;
        case lo.CLOCKWISE:
          a = yu(r);
          break;
        case lo.COUNTERCLOCKWISE:
          a = yu(r, !0);
          break;
        default:
          a = e.behavior;
      }
      return (
        a.forEach(function (s, l) {
          if (r !== s || a.length === l + 1) return t;
          (r = t.placement.split('-')[0]), (o = Mo(r));
          var u = t.offsets.popper,
            c = t.offsets.reference,
            f = Math.floor,
            p =
              (r === 'left' && f(u.right) > f(c.left)) ||
              (r === 'right' && f(u.left) < f(c.right)) ||
              (r === 'top' && f(u.bottom) > f(c.top)) ||
              (r === 'bottom' && f(u.top) < f(c.bottom)),
            d = f(u.left) < f(n.left),
            h = f(u.right) > f(n.right),
            m = f(u.top) < f(n.top),
            y = f(u.bottom) > f(n.bottom),
            E =
              (r === 'left' && d) ||
              (r === 'right' && h) ||
              (r === 'top' && m) ||
              (r === 'bottom' && y),
            x = ['top', 'bottom'].indexOf(r) !== -1,
            b =
              !!e.flipVariations &&
              ((x && i === 'start' && d) ||
                (x && i === 'end' && h) ||
                (!x && i === 'start' && m) ||
                (!x && i === 'end' && y)),
            w =
              !!e.flipVariationsByContent &&
              ((x && i === 'start' && h) ||
                (x && i === 'end' && d) ||
                (!x && i === 'start' && y) ||
                (!x && i === 'end' && m)),
            O = b || w;
          (p || E || O) &&
            ((t.flipped = !0),
            (p || E) && (r = a[l + 1]),
            O && (i = g0(i)),
            (t.placement = r + (i ? '-' + i : '')),
            (t.offsets.popper = Ut(
              {},
              t.offsets.popper,
              jf(t.instance.popper, t.offsets.reference, t.placement)
            )),
            (t = Ff(t.instance.modifiers, t, 'flip')));
        }),
        t
      );
    }
    function b0(t) {
      var e = t.offsets,
        n = e.popper,
        r = e.reference,
        o = t.placement.split('-')[0],
        i = Math.floor,
        a = ['top', 'bottom'].indexOf(o) !== -1,
        s = a ? 'right' : 'bottom',
        l = a ? 'left' : 'top',
        u = a ? 'width' : 'height';
      return (
        n[s] < i(r[l]) && (t.offsets.popper[l] = i(r[l]) - n[u]),
        n[l] > i(r[s]) && (t.offsets.popper[l] = i(r[s])),
        t
      );
    }
    function w0(t, e, n, r) {
      var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
        i = +o[1],
        a = o[2];
      if (!i) return t;
      if (a.indexOf('%') === 0) {
        var s = void 0;
        switch (a) {
          case '%p':
            s = n;
            break;
          case '%':
          case '%r':
          default:
            s = r;
        }
        var l = Le(s);
        return (l[e] / 100) * i;
      } else if (a === 'vh' || a === 'vw') {
        var u = void 0;
        return (
          a === 'vh'
            ? (u = Math.max(
                document.documentElement.clientHeight,
                window.innerHeight || 0
              ))
            : (u = Math.max(
                document.documentElement.clientWidth,
                window.innerWidth || 0
              )),
          (u / 100) * i
        );
      } else return i;
    }
    function E0(t, e, n, r) {
      var o = [0, 0],
        i = ['right', 'left'].indexOf(r) !== -1,
        a = t.split(/(\+|\-)/).map(function (c) {
          return c.trim();
        }),
        s = a.indexOf(
          Lr(a, function (c) {
            return c.search(/,|\s/) !== -1;
          })
        );
      a[s] &&
        a[s].indexOf(',') === -1 &&
        console.warn(
          'Offsets separated by white space(s) are deprecated, use a comma (,) instead.'
        );
      var l = /\s*,\s*|\s+/,
        u =
          s !== -1
            ? [
                a.slice(0, s).concat([a[s].split(l)[0]]),
                [a[s].split(l)[1]].concat(a.slice(s + 1)),
              ]
            : [a];
      return (
        (u = u.map(function (c, f) {
          var p = (f === 1 ? !i : i) ? 'height' : 'width',
            d = !1;
          return c
            .reduce(function (h, m) {
              return h[h.length - 1] === '' && ['+', '-'].indexOf(m) !== -1
                ? ((h[h.length - 1] = m), (d = !0), h)
                : d
                  ? ((h[h.length - 1] += m), (d = !1), h)
                  : h.concat(m);
            }, [])
            .map(function (h) {
              return w0(h, p, e, n);
            });
        })),
        u.forEach(function (c, f) {
          c.forEach(function (p, d) {
            Rs(p) && (o[f] += p * (c[d - 1] === '-' ? -1 : 1));
          });
        }),
        o
      );
    }
    function x0(t, e) {
      var n = e.offset,
        r = t.placement,
        o = t.offsets,
        i = o.popper,
        a = o.reference,
        s = r.split('-')[0],
        l = void 0;
      return (
        Rs(+n) ? (l = [+n, 0]) : (l = E0(n, i, a, s)),
        s === 'left'
          ? ((i.top += l[0]), (i.left -= l[1]))
          : s === 'right'
            ? ((i.top += l[0]), (i.left += l[1]))
            : s === 'top'
              ? ((i.left += l[0]), (i.top -= l[1]))
              : s === 'bottom' && ((i.left += l[0]), (i.top += l[1])),
        (t.popper = i),
        t
      );
    }
    function O0(t, e) {
      var n = e.boundariesElement || Rn(t.instance.popper);
      t.instance.reference === n && (n = Rn(n));
      var r = ks('transform'),
        o = t.instance.popper.style,
        i = o.top,
        a = o.left,
        s = o[r];
      (o.top = ''), (o.left = ''), (o[r] = '');
      var l = As(
        t.instance.popper,
        t.instance.reference,
        e.padding,
        n,
        t.positionFixed
      );
      (o.top = i), (o.left = a), (o[r] = s), (e.boundaries = l);
      var u = e.priority,
        c = t.offsets.popper,
        f = {
          primary: function (p) {
            var d = c[p];
            return (
              c[p] < l[p] &&
                !e.escapeWithReference &&
                (d = Math.max(c[p], l[p])),
              Ze({}, p, d)
            );
          },
          secondary: function (p) {
            var d = p === 'right' ? 'left' : 'top',
              h = c[d];
            return (
              c[p] > l[p] &&
                !e.escapeWithReference &&
                (h = Math.min(
                  c[d],
                  l[p] - (p === 'right' ? c.width : c.height)
                )),
              Ze({}, d, h)
            );
          },
        };
      return (
        u.forEach(function (p) {
          var d = ['left', 'top'].indexOf(p) !== -1 ? 'primary' : 'secondary';
          c = Ut({}, c, f[d](p));
        }),
        (t.offsets.popper = c),
        t
      );
    }
    function S0(t) {
      var e = t.placement,
        n = e.split('-')[0],
        r = e.split('-')[1];
      if (r) {
        var o = t.offsets,
          i = o.reference,
          a = o.popper,
          s = ['bottom', 'top'].indexOf(n) !== -1,
          l = s ? 'left' : 'top',
          u = s ? 'width' : 'height',
          c = { start: Ze({}, l, i[l]), end: Ze({}, l, i[l] + i[u] - a[u]) };
        t.offsets.popper = Ut({}, a, c[r]);
      }
      return t;
    }
    function P0(t) {
      if (!Uf(t.instance.modifiers, 'hide', 'preventOverflow')) return t;
      var e = t.offsets.reference,
        n = Lr(t.instance.modifiers, function (r) {
          return r.name === 'preventOverflow';
        }).boundaries;
      if (
        e.bottom < n.top ||
        e.left > n.right ||
        e.top > n.bottom ||
        e.right < n.left
      ) {
        if (t.hide === !0) return t;
        (t.hide = !0), (t.attributes['x-out-of-boundaries'] = '');
      } else {
        if (t.hide === !1) return t;
        (t.hide = !1), (t.attributes['x-out-of-boundaries'] = !1);
      }
      return t;
    }
    function T0(t) {
      var e = t.placement,
        n = e.split('-')[0],
        r = t.offsets,
        o = r.popper,
        i = r.reference,
        a = ['left', 'right'].indexOf(n) !== -1,
        s = ['top', 'left'].indexOf(n) === -1;
      return (
        (o[a ? 'left' : 'top'] = i[n] - (s ? o[a ? 'width' : 'height'] : 0)),
        (t.placement = Mo(e)),
        (t.offsets.popper = Le(o)),
        t
      );
    }
    var un,
      Hf,
      bu,
      wu,
      Ma,
      Da,
      Eu,
      xu,
      Ze,
      Ut,
      Wf,
      Ii,
      so,
      lo,
      Ou,
      Su,
      Qn,
      Na,
      C0 = v(() => {
        (un =
          typeof window < 'u' &&
          typeof document < 'u' &&
          typeof navigator < 'u'),
          (Hf = (function () {
            for (
              var t = ['Edge', 'Trident', 'Firefox'], e = 0;
              e < t.length;
              e += 1
            )
              if (un && navigator.userAgent.indexOf(t[e]) >= 0) return 1;
            return 0;
          })()),
          (bu = un && window.Promise),
          (wu = bu ? Zy : $y),
          (Ma = un && !!(window.MSInputMethodContext && document.documentMode)),
          (Da = un && /MSIE 10/.test(navigator.userAgent)),
          (Eu = function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          }),
          (xu = (function () {
            function t(e, n) {
              for (var r = 0; r < n.length; r++) {
                var o = n[r];
                (o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  'value' in o && (o.writable = !0),
                  Object.defineProperty(e, o.key, o);
              }
            }
            return function (e, n, r) {
              return n && t(e.prototype, n), r && t(e, r), e;
            };
          })()),
          (Ze = function (t, e, n) {
            return (
              e in t
                ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[e] = n),
              t
            );
          }),
          (Ut =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }),
          (Wf = un && /Firefox/i.test(navigator.userAgent)),
          (Ii = [
            'auto-start',
            'auto',
            'auto-end',
            'top-start',
            'top',
            'top-end',
            'right-start',
            'right',
            'right-end',
            'bottom-end',
            'bottom',
            'bottom-start',
            'left-end',
            'left',
            'left-start',
          ]),
          (so = Ii.slice(3)),
          (lo = {
            FLIP: 'flip',
            CLOCKWISE: 'clockwise',
            COUNTERCLOCKWISE: 'counterclockwise',
          }),
          (Ou = {
            shift: { order: 100, enabled: !0, fn: S0 },
            offset: { order: 200, enabled: !0, fn: x0, offset: 0 },
            preventOverflow: {
              order: 300,
              enabled: !0,
              fn: O0,
              priority: ['left', 'right', 'top', 'bottom'],
              padding: 5,
              boundariesElement: 'scrollParent',
            },
            keepTogether: { order: 400, enabled: !0, fn: b0 },
            arrow: { order: 500, enabled: !0, fn: v0, element: '[x-arrow]' },
            flip: {
              order: 600,
              enabled: !0,
              fn: y0,
              behavior: 'flip',
              padding: 5,
              boundariesElement: 'viewport',
              flipVariations: !1,
              flipVariationsByContent: !1,
            },
            inner: { order: 700, enabled: !1, fn: T0 },
            hide: { order: 800, enabled: !0, fn: P0 },
            computeStyle: {
              order: 850,
              enabled: !0,
              fn: m0,
              gpuAcceleration: !0,
              x: 'bottom',
              y: 'right',
            },
            applyStyle: {
              order: 900,
              enabled: !0,
              fn: f0,
              onLoad: d0,
              gpuAcceleration: void 0,
            },
          }),
          (Su = {
            placement: 'bottom',
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function () {},
            onUpdate: function () {},
            modifiers: Ou,
          }),
          (Qn = (function () {
            function t(e, n) {
              var r = this,
                o =
                  arguments.length > 2 && arguments[2] !== void 0
                    ? arguments[2]
                    : {};
              Eu(this, t),
                (this.scheduleUpdate = function () {
                  return requestAnimationFrame(r.update);
                }),
                (this.update = wu(this.update.bind(this))),
                (this.options = Ut({}, t.Defaults, o)),
                (this.state = {
                  isDestroyed: !1,
                  isCreated: !1,
                  scrollParents: [],
                }),
                (this.reference = e && e.jquery ? e[0] : e),
                (this.popper = n && n.jquery ? n[0] : n),
                (this.options.modifiers = {}),
                Object.keys(Ut({}, t.Defaults.modifiers, o.modifiers)).forEach(
                  function (a) {
                    r.options.modifiers[a] = Ut(
                      {},
                      t.Defaults.modifiers[a] || {},
                      o.modifiers ? o.modifiers[a] : {}
                    );
                  }
                ),
                (this.modifiers = Object.keys(this.options.modifiers)
                  .map(function (a) {
                    return Ut({ name: a }, r.options.modifiers[a]);
                  })
                  .sort(function (a, s) {
                    return a.order - s.order;
                  })),
                this.modifiers.forEach(function (a) {
                  a.enabled &&
                    Af(a.onLoad) &&
                    a.onLoad(r.reference, r.popper, r.options, a, r.state);
                }),
                this.update();
              var i = this.options.eventsEnabled;
              i && this.enableEventListeners(), (this.state.eventsEnabled = i);
            }
            return (
              xu(t, [
                {
                  key: 'update',
                  value: function () {
                    return i0.call(this);
                  },
                },
                {
                  key: 'destroy',
                  value: function () {
                    return a0.call(this);
                  },
                },
                {
                  key: 'enableEventListeners',
                  value: function () {
                    return l0.call(this);
                  },
                },
                {
                  key: 'disableEventListeners',
                  value: function () {
                    return c0.call(this);
                  },
                },
              ]),
              t
            );
          })()),
          (Qn.Utils = window.PopperUtils),
          (Qn.placements = Ii),
          (Qn.Defaults = Su),
          (Na = Qn);
      });
    function Pu(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function (o) {
            return Object.getOwnPropertyDescriptor(t, o).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function ut(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e] != null ? arguments[e] : {};
        e % 2
          ? Pu(Object(n), !0).forEach(function (r) {
              kt(t, r, n[r]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Pu(Object(n)).forEach(function (r) {
                Object.defineProperty(
                  t,
                  r,
                  Object.getOwnPropertyDescriptor(n, r)
                );
              });
      }
      return t;
    }
    function Jn(t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function');
    }
    function Tu(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function Zn(t, e, n) {
      return (
        e && Tu(t.prototype, e),
        n && Tu(t, n),
        Object.defineProperty(t, 'prototype', { writable: !1 }),
        t
      );
    }
    function kt(t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    }
    function $n(t, e) {
      if (typeof e != 'function' && e !== null)
        throw new TypeError(
          'Super expression must either be null or a function'
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: { value: t, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(t, 'prototype', { writable: !1 }),
        e && Ia(t, e);
    }
    function Do(t) {
      return (
        (Do = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        Do(t)
      );
    }
    function Ia(t, e) {
      return (
        (Ia = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (n, r) {
              return (n.__proto__ = r), n;
            }),
        Ia(t, e)
      );
    }
    function A0() {
      if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == 'function') return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch {
        return !1;
      }
    }
    function k0(t, e) {
      if (t == null) return {};
      var n = {},
        r = Object.keys(t),
        o,
        i;
      for (i = 0; i < r.length; i++)
        (o = r[i]), !(e.indexOf(o) >= 0) && (n[o] = t[o]);
      return n;
    }
    function Cu(t, e) {
      if (t == null) return {};
      var n = k0(t, e),
        r,
        o;
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (o = 0; o < i.length; o++)
          (r = i[o]),
            !(e.indexOf(r) >= 0) &&
              Object.prototype.propertyIsEnumerable.call(t, r) &&
              (n[r] = t[r]);
      }
      return n;
    }
    function he(t) {
      if (t === void 0)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return t;
    }
    function R0(t, e) {
      if (e && (typeof e == 'object' || typeof e == 'function')) return e;
      if (e !== void 0)
        throw new TypeError(
          'Derived constructors may only return object or undefined'
        );
      return he(t);
    }
    function tr(t) {
      var e = A0();
      return function () {
        var n = Do(t),
          r;
        if (e) {
          var o = Do(this).constructor;
          r = Reflect.construct(n, arguments, o);
        } else r = n.apply(this, arguments);
        return R0(this, r);
      };
    }
    function Li() {
      return 'ontouchstart' in window && /Mobi/.test(navigator.userAgent);
    }
    function qr(t) {
      var e = t.title,
        n = t.data,
        r = t.warn,
        o = r === void 0 ? !1 : r,
        i = t.debug,
        a = i === void 0 ? !1 : i,
        s = o ? console.warn || console.error : console.log;
      a &&
        e &&
        n &&
        (console.groupCollapsed(
          '%creact-floater: '.concat(e),
          'color: #9b00ff; font-weight: bold; font-size: 12px;'
        ),
        Array.isArray(n)
          ? n.forEach(function (l) {
              F.plainObject(l) && l.key
                ? s.apply(console, [l.key, l.value])
                : s.apply(console, [l]);
            })
          : s.apply(console, [n]),
        console.groupEnd());
    }
    function M0(t, e, n) {
      var r =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      t.addEventListener(e, n, r);
    }
    function D0(t, e, n) {
      var r =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      t.removeEventListener(e, n, r);
    }
    function N0(t, e, n) {
      var r =
          arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1,
        o;
      (o = function (i) {
        n(i), D0(t, e, o);
      }),
        M0(t, e, o, r);
    }
    function Au() {}
    function I0(t) {
      var e = (0, uo.default)(Yf, t.options || {});
      return {
        wrapper: {
          cursor: 'help',
          display: 'inline-flex',
          flexDirection: 'column',
          zIndex: e.zIndex,
        },
        wrapperPosition: {
          left: -1e3,
          position: 'absolute',
          top: -1e3,
          visibility: 'hidden',
        },
        floater: {
          display: 'inline-block',
          filter: 'drop-shadow(0 0 3px rgba(0, 0, 0, 0.3))',
          maxWidth: 300,
          opacity: 0,
          position: 'relative',
          transition: 'opacity 0.3s',
          visibility: 'hidden',
          zIndex: e.zIndex,
        },
        floaterOpening: { opacity: 1, visibility: 'visible' },
        floaterWithAnimation: {
          opacity: 1,
          transition: 'opacity 0.3s, transform 0.2s',
          visibility: 'visible',
        },
        floaterWithComponent: { maxWidth: '100%' },
        floaterClosing: { opacity: 0, visibility: 'visible' },
        floaterCentered: {
          left: '50%',
          position: 'fixed',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        },
        container: {
          backgroundColor: '#fff',
          color: '#666',
          minHeight: 60,
          minWidth: 200,
          padding: 20,
          position: 'relative',
          zIndex: 10,
        },
        title: {
          borderBottom: '1px solid #555',
          color: '#555',
          fontSize: 18,
          marginBottom: 5,
          paddingBottom: 6,
          paddingRight: 18,
        },
        content: { fontSize: 15 },
        close: {
          backgroundColor: 'transparent',
          border: 0,
          borderRadius: 0,
          color: '#555',
          fontSize: 0,
          height: 15,
          outline: 'none',
          padding: 10,
          position: 'absolute',
          right: 0,
          top: 0,
          width: 15,
          WebkitAppearance: 'none',
        },
        footer: {
          borderTop: '1px solid #ccc',
          fontSize: 13,
          marginTop: 10,
          paddingTop: 5,
        },
        arrow: {
          color: '#fff',
          display: 'inline-flex',
          length: 16,
          margin: 8,
          position: 'absolute',
          spread: 32,
        },
        options: e,
      };
    }
    var R,
      ji,
      uo,
      ku,
      Ru,
      J,
      ie,
      cn,
      Fi,
      Vi,
      Mu,
      zi,
      Bi,
      Ui,
      Hi,
      Yf,
      Du,
      Nu,
      co,
      L0 = v(() => {
        (R = le(Ry())),
          (ji = le(Jy())),
          C0(),
          (uo = le(Cf())),
          Ss(),
          Of(),
          (ku = le(Tf())),
          (Ru = { flip: { padding: 20 }, preventOverflow: { padding: 10 } }),
          (J = {
            INIT: 'init',
            IDLE: 'idle',
            OPENING: 'opening',
            OPEN: 'open',
            CLOSING: 'closing',
            ERROR: 'error',
          }),
          (ie = ku.default.canUseDOM),
          (cn = oe.createPortal !== void 0),
          (Fi = (function (t) {
            $n(n, t);
            var e = tr(n);
            function n() {
              return Jn(this, n), e.apply(this, arguments);
            }
            return (
              Zn(n, [
                {
                  key: 'componentDidMount',
                  value: function () {
                    ie &&
                      (this.node || this.appendNode(),
                      cn || this.renderPortal());
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function () {
                    ie && (cn || this.renderPortal());
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    !ie ||
                      !this.node ||
                      (cn || oe.unmountComponentAtNode(this.node),
                      this.node &&
                        this.node.parentNode === document.body &&
                        (document.body.removeChild(this.node),
                        (this.node = void 0)));
                  },
                },
                {
                  key: 'appendNode',
                  value: function () {
                    var r = this.props,
                      o = r.id,
                      i = r.zIndex;
                    this.node ||
                      ((this.node = document.createElement('div')),
                      o && (this.node.id = o),
                      i && (this.node.style.zIndex = i),
                      document.body.appendChild(this.node));
                  },
                },
                {
                  key: 'renderPortal',
                  value: function () {
                    if (!ie) return null;
                    var r = this.props,
                      o = r.children,
                      i = r.setRef;
                    if ((this.node || this.appendNode(), cn))
                      return oe.createPortal(o, this.node);
                    var a = oe.unstable_renderSubtreeIntoContainer(
                      this,
                      o.length > 1 ? g.createElement('div', null, o) : o[0],
                      this.node
                    );
                    return i(a), null;
                  },
                },
                {
                  key: 'renderReact16',
                  value: function () {
                    var r = this.props,
                      o = r.hasChildren,
                      i = r.placement,
                      a = r.target;
                    return o
                      ? this.renderPortal()
                      : a || i === 'center'
                        ? this.renderPortal()
                        : null;
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return cn ? this.renderReact16() : null;
                  },
                },
              ]),
              n
            );
          })(g.Component)),
          kt(Fi, 'propTypes', {
            children: R.default.oneOfType([R.default.element, R.default.array]),
            hasChildren: R.default.bool,
            id: R.default.oneOfType([R.default.string, R.default.number]),
            placement: R.default.string,
            setRef: R.default.func.isRequired,
            target: R.default.oneOfType([R.default.object, R.default.string]),
            zIndex: R.default.number,
          }),
          (Vi = (function (t) {
            $n(n, t);
            var e = tr(n);
            function n() {
              return Jn(this, n), e.apply(this, arguments);
            }
            return (
              Zn(n, [
                {
                  key: 'parentStyle',
                  get: function () {
                    var r = this.props,
                      o = r.placement,
                      i = r.styles,
                      a = i.arrow.length,
                      s = {
                        pointerEvents: 'none',
                        position: 'absolute',
                        width: '100%',
                      };
                    return (
                      o.startsWith('top')
                        ? ((s.bottom = 0),
                          (s.left = 0),
                          (s.right = 0),
                          (s.height = a))
                        : o.startsWith('bottom')
                          ? ((s.left = 0),
                            (s.right = 0),
                            (s.top = 0),
                            (s.height = a))
                          : o.startsWith('left')
                            ? ((s.right = 0), (s.top = 0), (s.bottom = 0))
                            : o.startsWith('right') &&
                              ((s.left = 0), (s.top = 0)),
                      s
                    );
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var r = this.props,
                      o = r.placement,
                      i = r.setArrowRef,
                      a = r.styles,
                      s = a.arrow,
                      l = s.color,
                      u = s.display,
                      c = s.length,
                      f = s.margin,
                      p = s.position,
                      d = s.spread,
                      h = { display: u, position: p },
                      m,
                      y = d,
                      E = c;
                    return (
                      o.startsWith('top')
                        ? ((m = '0,0 '
                            .concat(y / 2, ',')
                            .concat(E, ' ')
                            .concat(y, ',0')),
                          (h.bottom = 0),
                          (h.marginLeft = f),
                          (h.marginRight = f))
                        : o.startsWith('bottom')
                          ? ((m = ''
                              .concat(y, ',')
                              .concat(E, ' ')
                              .concat(y / 2, ',0 0,')
                              .concat(E)),
                            (h.top = 0),
                            (h.marginLeft = f),
                            (h.marginRight = f))
                          : o.startsWith('left')
                            ? ((E = d),
                              (y = c),
                              (m = '0,0 '
                                .concat(y, ',')
                                .concat(E / 2, ' 0,')
                                .concat(E)),
                              (h.right = 0),
                              (h.marginTop = f),
                              (h.marginBottom = f))
                            : o.startsWith('right') &&
                              ((E = d),
                              (y = c),
                              (m = ''
                                .concat(y, ',')
                                .concat(E, ' ')
                                .concat(y, ',0 0,')
                                .concat(E / 2)),
                              (h.left = 0),
                              (h.marginTop = f),
                              (h.marginBottom = f)),
                      g.createElement(
                        'div',
                        {
                          className: '__floater__arrow',
                          style: this.parentStyle,
                        },
                        g.createElement(
                          'span',
                          { ref: i, style: h },
                          g.createElement(
                            'svg',
                            {
                              width: y,
                              height: E,
                              version: '1.1',
                              xmlns: 'http://www.w3.org/2000/svg',
                            },
                            g.createElement('polygon', { points: m, fill: l })
                          )
                        )
                      )
                    );
                  },
                },
              ]),
              n
            );
          })(g.Component)),
          kt(Vi, 'propTypes', {
            placement: R.default.string.isRequired,
            setArrowRef: R.default.func.isRequired,
            styles: R.default.object.isRequired,
          }),
          (Mu = ['color', 'height', 'width']),
          (zi = function (t) {
            var e = t.handleClick,
              n = t.styles,
              r = n.color,
              o = n.height,
              i = n.width,
              a = Cu(n, Mu);
            return g.createElement(
              'button',
              { 'aria-label': 'close', onClick: e, style: a, type: 'button' },
              g.createElement(
                'svg',
                {
                  width: ''.concat(i, 'px'),
                  height: ''.concat(o, 'px'),
                  viewBox: '0 0 18 18',
                  version: '1.1',
                  xmlns: 'http://www.w3.org/2000/svg',
                  preserveAspectRatio: 'xMidYMid',
                },
                g.createElement(
                  'g',
                  null,
                  g.createElement('path', {
                    d: 'M8.13911129,9.00268191 L0.171521827,17.0258467 C-0.0498027049,17.248715 -0.0498027049,17.6098394 0.171521827,17.8327545 C0.28204354,17.9443526 0.427188206,17.9998706 0.572051765,17.9998706 C0.71714958,17.9998706 0.862013139,17.9443526 0.972581703,17.8327545 L9.0000937,9.74924618 L17.0276057,17.8327545 C17.1384085,17.9443526 17.2832721,17.9998706 17.4281356,17.9998706 C17.5729992,17.9998706 17.718097,17.9443526 17.8286656,17.8327545 C18.0499901,17.6098862 18.0499901,17.2487618 17.8286656,17.0258467 L9.86135722,9.00268191 L17.8340066,0.973848225 C18.0553311,0.750979934 18.0553311,0.389855532 17.8340066,0.16694039 C17.6126821,-0.0556467968 17.254037,-0.0556467968 17.0329467,0.16694039 L9.00042166,8.25611765 L0.967006424,0.167268345 C0.745681892,-0.0553188426 0.387317931,-0.0553188426 0.165993399,0.167268345 C-0.0553311331,0.390136635 -0.0553311331,0.751261038 0.165993399,0.974176179 L8.13920499,9.00268191 L8.13911129,9.00268191 Z',
                    fill: r,
                  })
                )
              )
            );
          }),
          (zi.propTypes = {
            handleClick: R.default.func.isRequired,
            styles: R.default.object.isRequired,
          }),
          (Bi = function (t) {
            var e = t.content,
              n = t.footer,
              r = t.handleClick,
              o = t.open,
              i = t.positionWrapper,
              a = t.showCloseButton,
              s = t.title,
              l = t.styles,
              u = {
                content: g.isValidElement(e)
                  ? e
                  : g.createElement(
                      'div',
                      { className: '__floater__content', style: l.content },
                      e
                    ),
              };
            return (
              s &&
                (u.title = g.isValidElement(s)
                  ? s
                  : g.createElement(
                      'div',
                      { className: '__floater__title', style: l.title },
                      s
                    )),
              n &&
                (u.footer = g.isValidElement(n)
                  ? n
                  : g.createElement(
                      'div',
                      { className: '__floater__footer', style: l.footer },
                      n
                    )),
              (a || i) &&
                !F.boolean(o) &&
                (u.close = g.createElement(zi, {
                  styles: l.close,
                  handleClick: r,
                })),
              g.createElement(
                'div',
                { className: '__floater__container', style: l.container },
                u.close,
                u.title,
                u.content,
                u.footer
              )
            );
          }),
          (Bi.propTypes = {
            content: R.default.node.isRequired,
            footer: R.default.node,
            handleClick: R.default.func.isRequired,
            open: R.default.bool,
            positionWrapper: R.default.bool.isRequired,
            showCloseButton: R.default.bool.isRequired,
            styles: R.default.object.isRequired,
            title: R.default.node,
          }),
          (Ui = (function (t) {
            $n(n, t);
            var e = tr(n);
            function n() {
              return Jn(this, n), e.apply(this, arguments);
            }
            return (
              Zn(n, [
                {
                  key: 'style',
                  get: function () {
                    var r = this.props,
                      o = r.disableAnimation,
                      i = r.component,
                      a = r.placement,
                      s = r.hideArrow,
                      l = r.status,
                      u = r.styles,
                      c = u.arrow.length,
                      f = u.floater,
                      p = u.floaterCentered,
                      d = u.floaterClosing,
                      h = u.floaterOpening,
                      m = u.floaterWithAnimation,
                      y = u.floaterWithComponent,
                      E = {};
                    return (
                      s ||
                        (a.startsWith('top')
                          ? (E.padding = '0 0 '.concat(c, 'px'))
                          : a.startsWith('bottom')
                            ? (E.padding = ''.concat(c, 'px 0 0'))
                            : a.startsWith('left')
                              ? (E.padding = '0 '.concat(c, 'px 0 0'))
                              : a.startsWith('right') &&
                                (E.padding = '0 0 0 '.concat(c, 'px'))),
                      [J.OPENING, J.OPEN].indexOf(l) !== -1 &&
                        (E = ut(ut({}, E), h)),
                      l === J.CLOSING && (E = ut(ut({}, E), d)),
                      l === J.OPEN && !o && (E = ut(ut({}, E), m)),
                      a === 'center' && (E = ut(ut({}, E), p)),
                      i && (E = ut(ut({}, E), y)),
                      ut(ut({}, f), E)
                    );
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var r = this.props,
                      o = r.component,
                      i = r.handleClick,
                      a = r.hideArrow,
                      s = r.setFloaterRef,
                      l = r.status,
                      u = {},
                      c = ['__floater'];
                    return (
                      o
                        ? g.isValidElement(o)
                          ? (u.content = g.cloneElement(o, { closeFn: i }))
                          : (u.content = o({ closeFn: i }))
                        : (u.content = g.createElement(Bi, this.props)),
                      l === J.OPEN && c.push('__floater__open'),
                      a || (u.arrow = g.createElement(Vi, this.props)),
                      g.createElement(
                        'div',
                        { ref: s, className: c.join(' '), style: this.style },
                        g.createElement(
                          'div',
                          { className: '__floater__body' },
                          u.content,
                          u.arrow
                        )
                      )
                    );
                  },
                },
              ]),
              n
            );
          })(g.Component)),
          kt(Ui, 'propTypes', {
            component: R.default.oneOfType([R.default.func, R.default.element]),
            content: R.default.node,
            disableAnimation: R.default.bool.isRequired,
            footer: R.default.node,
            handleClick: R.default.func.isRequired,
            hideArrow: R.default.bool.isRequired,
            open: R.default.bool,
            placement: R.default.string.isRequired,
            positionWrapper: R.default.bool.isRequired,
            setArrowRef: R.default.func.isRequired,
            setFloaterRef: R.default.func.isRequired,
            showCloseButton: R.default.bool,
            status: R.default.string.isRequired,
            styles: R.default.object.isRequired,
            title: R.default.node,
          }),
          (Hi = (function (t) {
            $n(n, t);
            var e = tr(n);
            function n() {
              return Jn(this, n), e.apply(this, arguments);
            }
            return (
              Zn(n, [
                {
                  key: 'render',
                  value: function () {
                    var r = this.props,
                      o = r.children,
                      i = r.handleClick,
                      a = r.handleMouseEnter,
                      s = r.handleMouseLeave,
                      l = r.setChildRef,
                      u = r.setWrapperRef,
                      c = r.style,
                      f = r.styles,
                      p;
                    if (o)
                      if (g.Children.count(o) === 1)
                        if (!g.isValidElement(o))
                          p = g.createElement('span', null, o);
                        else {
                          var d = F.function(o.type) ? 'innerRef' : 'ref';
                          p = g.cloneElement(g.Children.only(o), kt({}, d, l));
                        }
                      else p = o;
                    return p
                      ? g.createElement(
                          'span',
                          {
                            ref: u,
                            style: ut(ut({}, f), c),
                            onClick: i,
                            onMouseEnter: a,
                            onMouseLeave: s,
                          },
                          p
                        )
                      : null;
                  },
                },
              ]),
              n
            );
          })(g.Component)),
          kt(Hi, 'propTypes', {
            children: R.default.node,
            handleClick: R.default.func.isRequired,
            handleMouseEnter: R.default.func.isRequired,
            handleMouseLeave: R.default.func.isRequired,
            setChildRef: R.default.func.isRequired,
            setWrapperRef: R.default.func.isRequired,
            style: R.default.object,
            styles: R.default.object.isRequired,
          }),
          (Yf = { zIndex: 100 }),
          (Du = ['arrow', 'flip', 'offset']),
          (Nu = ['position', 'top', 'right', 'bottom', 'left']),
          (co = (function (t) {
            $n(n, t);
            var e = tr(n);
            function n(r) {
              var o;
              return (
                Jn(this, n),
                (o = e.call(this, r)),
                kt(he(o), 'setArrowRef', function (i) {
                  o.arrowRef = i;
                }),
                kt(he(o), 'setChildRef', function (i) {
                  o.childRef = i;
                }),
                kt(he(o), 'setFloaterRef', function (i) {
                  o.floaterRef = i;
                }),
                kt(he(o), 'setWrapperRef', function (i) {
                  o.wrapperRef = i;
                }),
                kt(he(o), 'handleTransitionEnd', function () {
                  var i = o.state.status,
                    a = o.props.callback;
                  o.wrapperPopper && o.wrapperPopper.instance.update(),
                    o.setState(
                      { status: i === J.OPENING ? J.OPEN : J.IDLE },
                      function () {
                        var s = o.state.status;
                        a(s === J.OPEN ? 'open' : 'close', o.props);
                      }
                    );
                }),
                kt(he(o), 'handleClick', function () {
                  var i = o.props,
                    a = i.event,
                    s = i.open;
                  if (!F.boolean(s)) {
                    var l = o.state,
                      u = l.positionWrapper,
                      c = l.status;
                    (o.event === 'click' || (o.event === 'hover' && u)) &&
                      (qr({
                        title: 'click',
                        data: [
                          {
                            event: a,
                            status: c === J.OPEN ? 'closing' : 'opening',
                          },
                        ],
                        debug: o.debug,
                      }),
                      o.toggle());
                  }
                }),
                kt(he(o), 'handleMouseEnter', function () {
                  var i = o.props,
                    a = i.event,
                    s = i.open;
                  if (!(F.boolean(s) || Li())) {
                    var l = o.state.status;
                    o.event === 'hover' &&
                      l === J.IDLE &&
                      (qr({
                        title: 'mouseEnter',
                        data: [{ key: 'originalEvent', value: a }],
                        debug: o.debug,
                      }),
                      clearTimeout(o.eventDelayTimeout),
                      o.toggle());
                  }
                }),
                kt(he(o), 'handleMouseLeave', function () {
                  var i = o.props,
                    a = i.event,
                    s = i.eventDelay,
                    l = i.open;
                  if (!(F.boolean(l) || Li())) {
                    var u = o.state,
                      c = u.status,
                      f = u.positionWrapper;
                    o.event === 'hover' &&
                      (qr({
                        title: 'mouseLeave',
                        data: [{ key: 'originalEvent', value: a }],
                        debug: o.debug,
                      }),
                      s
                        ? [J.OPENING, J.OPEN].indexOf(c) !== -1 &&
                          !f &&
                          !o.eventDelayTimeout &&
                          (o.eventDelayTimeout = setTimeout(function () {
                            delete o.eventDelayTimeout, o.toggle();
                          }, s * 1e3))
                        : o.toggle(J.IDLE));
                  }
                }),
                (o.state = {
                  currentPlacement: r.placement,
                  needsUpdate: !1,
                  positionWrapper: r.wrapperOptions.position && !!r.target,
                  status: J.INIT,
                  statusWrapper: J.INIT,
                }),
                (o._isMounted = !1),
                (o.hasMounted = !1),
                ie &&
                  window.addEventListener('load', function () {
                    o.popper && o.popper.instance.update(),
                      o.wrapperPopper && o.wrapperPopper.instance.update();
                  }),
                o
              );
            }
            return (
              Zn(n, [
                {
                  key: 'componentDidMount',
                  value: function () {
                    if (ie) {
                      var r = this.state.positionWrapper,
                        o = this.props,
                        i = o.children,
                        a = o.open,
                        s = o.target;
                      (this._isMounted = !0),
                        qr({
                          title: 'init',
                          data: {
                            hasChildren: !!i,
                            hasTarget: !!s,
                            isControlled: F.boolean(a),
                            positionWrapper: r,
                            target: this.target,
                            floater: this.floaterRef,
                          },
                          debug: this.debug,
                        }),
                        this.hasMounted ||
                          (this.initPopper(), (this.hasMounted = !0)),
                        !i && s && F.boolean(a);
                    }
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function (r, o) {
                    if (ie) {
                      var i = this.props,
                        a = i.autoOpen,
                        s = i.open,
                        l = i.target,
                        u = i.wrapperOptions,
                        c = ur(o, this.state),
                        f = c.changedFrom,
                        p = c.changed;
                      if (r.open !== s) {
                        var d;
                        F.boolean(s) && (d = s ? J.OPENING : J.CLOSING),
                          this.toggle(d);
                      }
                      (r.wrapperOptions.position !== u.position ||
                        r.target !== l) &&
                        this.changeWrapperPosition(this.props),
                        p('status', J.IDLE) && s
                          ? this.toggle(J.OPEN)
                          : f('status', J.INIT, J.IDLE) &&
                            a &&
                            this.toggle(J.OPEN),
                        this.popper &&
                          p('status', J.OPENING) &&
                          this.popper.instance.update(),
                        this.floaterRef &&
                          (p('status', J.OPENING) || p('status', J.CLOSING)) &&
                          N0(
                            this.floaterRef,
                            'transitionend',
                            this.handleTransitionEnd
                          ),
                        p('needsUpdate', !0) && this.rebuildPopper();
                    }
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    ie &&
                      ((this._isMounted = !1),
                      this.popper && this.popper.instance.destroy(),
                      this.wrapperPopper &&
                        this.wrapperPopper.instance.destroy());
                  },
                },
                {
                  key: 'initPopper',
                  value: function () {
                    var r = this,
                      o =
                        arguments.length > 0 && arguments[0] !== void 0
                          ? arguments[0]
                          : this.target,
                      i = this.state.positionWrapper,
                      a = this.props,
                      s = a.disableFlip,
                      l = a.getPopper,
                      u = a.hideArrow,
                      c = a.offset,
                      f = a.placement,
                      p = a.wrapperOptions,
                      d =
                        f === 'top' || f === 'bottom'
                          ? 'flip'
                          : [
                              'right',
                              'bottom-end',
                              'top-end',
                              'left',
                              'top-start',
                              'bottom-start',
                            ];
                    if (f === 'center') this.setState({ status: J.IDLE });
                    else if (o && this.floaterRef) {
                      var h = this.options,
                        m = h.arrow,
                        y = h.flip,
                        E = h.offset,
                        x = Cu(h, Du);
                      new Na(o, this.floaterRef, {
                        placement: f,
                        modifiers: ut(
                          {
                            arrow: ut(
                              { enabled: !u, element: this.arrowRef },
                              m
                            ),
                            flip: ut({ enabled: !s, behavior: d }, y),
                            offset: ut({ offset: '0, '.concat(c, 'px') }, E),
                          },
                          x
                        ),
                        onCreate: function (w) {
                          var O;
                          if (
                            ((r.popper = w),
                            !(
                              (O = r.floaterRef) !== null &&
                              O !== void 0 &&
                              O.isConnected
                            ))
                          ) {
                            r.setState({ needsUpdate: !0 });
                            return;
                          }
                          l(w, 'floater'),
                            r._isMounted &&
                              r.setState({
                                currentPlacement: w.placement,
                                status: J.IDLE,
                              }),
                            f !== w.placement &&
                              setTimeout(function () {
                                w.instance.update();
                              }, 1);
                        },
                        onUpdate: function (w) {
                          r.popper = w;
                          var O = r.state.currentPlacement;
                          r._isMounted &&
                            w.placement !== O &&
                            r.setState({ currentPlacement: w.placement });
                        },
                      });
                    }
                    if (i) {
                      var b = F.undefined(p.offset) ? 0 : p.offset;
                      new Na(this.target, this.wrapperRef, {
                        placement: p.placement || f,
                        modifiers: {
                          arrow: { enabled: !1 },
                          offset: { offset: '0, '.concat(b, 'px') },
                          flip: { enabled: !1 },
                        },
                        onCreate: function (w) {
                          (r.wrapperPopper = w),
                            r._isMounted &&
                              r.setState({ statusWrapper: J.IDLE }),
                            l(w, 'wrapper'),
                            f !== w.placement &&
                              setTimeout(function () {
                                w.instance.update();
                              }, 1);
                        },
                      });
                    }
                  },
                },
                {
                  key: 'rebuildPopper',
                  value: function () {
                    var r = this;
                    this.floaterRefInterval = setInterval(function () {
                      var o;
                      (o = r.floaterRef) !== null &&
                        o !== void 0 &&
                        o.isConnected &&
                        (clearInterval(r.floaterRefInterval),
                        r.setState({ needsUpdate: !1 }),
                        r.initPopper());
                    }, 50);
                  },
                },
                {
                  key: 'changeWrapperPosition',
                  value: function (r) {
                    var o = r.target,
                      i = r.wrapperOptions;
                    this.setState({ positionWrapper: i.position && !!o });
                  },
                },
                {
                  key: 'toggle',
                  value: function (r) {
                    var o = this.state.status,
                      i = o === J.OPEN ? J.CLOSING : J.OPENING;
                    F.undefined(r) || (i = r), this.setState({ status: i });
                  },
                },
                {
                  key: 'debug',
                  get: function () {
                    var r = this.props.debug;
                    return r || !!window.ReactFloaterDebug;
                  },
                },
                {
                  key: 'event',
                  get: function () {
                    var r = this.props,
                      o = r.disableHoverToClick,
                      i = r.event;
                    return i === 'hover' && Li() && !o ? 'click' : i;
                  },
                },
                {
                  key: 'options',
                  get: function () {
                    var r = this.props.options;
                    return (0, uo.default)(Ru, r || {});
                  },
                },
                {
                  key: 'styles',
                  get: function () {
                    var r = this,
                      o = this.state,
                      i = o.status,
                      a = o.positionWrapper,
                      s = o.statusWrapper,
                      l = this.props.styles,
                      u = (0, uo.default)(I0(l), l);
                    if (a) {
                      var c;
                      [J.IDLE].indexOf(i) === -1 || [J.IDLE].indexOf(s) === -1
                        ? (c = u.wrapperPosition)
                        : (c = this.wrapperPopper.styles),
                        (u.wrapper = ut(ut({}, u.wrapper), c));
                    }
                    if (this.target) {
                      var f = window.getComputedStyle(this.target);
                      this.wrapperStyles
                        ? (u.wrapper = ut(
                            ut({}, u.wrapper),
                            this.wrapperStyles
                          ))
                        : ['relative', 'static'].indexOf(f.position) === -1 &&
                          ((this.wrapperStyles = {}),
                          a ||
                            (Nu.forEach(function (p) {
                              r.wrapperStyles[p] = f[p];
                            }),
                            (u.wrapper = ut(
                              ut({}, u.wrapper),
                              this.wrapperStyles
                            )),
                            (this.target.style.position = 'relative'),
                            (this.target.style.top = 'auto'),
                            (this.target.style.right = 'auto'),
                            (this.target.style.bottom = 'auto'),
                            (this.target.style.left = 'auto')));
                    }
                    return u;
                  },
                },
                {
                  key: 'target',
                  get: function () {
                    if (!ie) return null;
                    var r = this.props.target;
                    return r
                      ? F.domElement(r)
                        ? r
                        : document.querySelector(r)
                      : this.childRef || this.wrapperRef;
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var r = this.state,
                      o = r.currentPlacement,
                      i = r.positionWrapper,
                      a = r.status,
                      s = this.props,
                      l = s.children,
                      u = s.component,
                      c = s.content,
                      f = s.disableAnimation,
                      p = s.footer,
                      d = s.hideArrow,
                      h = s.id,
                      m = s.open,
                      y = s.showCloseButton,
                      E = s.style,
                      x = s.target,
                      b = s.title,
                      w = g.createElement(
                        Hi,
                        {
                          handleClick: this.handleClick,
                          handleMouseEnter: this.handleMouseEnter,
                          handleMouseLeave: this.handleMouseLeave,
                          setChildRef: this.setChildRef,
                          setWrapperRef: this.setWrapperRef,
                          style: E,
                          styles: this.styles.wrapper,
                        },
                        l
                      ),
                      O = {};
                    return (
                      i ? (O.wrapperInPortal = w) : (O.wrapperAsChildren = w),
                      g.createElement(
                        'span',
                        null,
                        g.createElement(
                          Fi,
                          {
                            hasChildren: !!l,
                            id: h,
                            placement: o,
                            setRef: this.setFloaterRef,
                            target: x,
                            zIndex: this.styles.options.zIndex,
                          },
                          g.createElement(Ui, {
                            component: u,
                            content: c,
                            disableAnimation: f,
                            footer: p,
                            handleClick: this.handleClick,
                            hideArrow: d || o === 'center',
                            open: m,
                            placement: o,
                            positionWrapper: i,
                            setArrowRef: this.setArrowRef,
                            setFloaterRef: this.setFloaterRef,
                            showCloseButton: y,
                            status: a,
                            styles: this.styles,
                            title: b,
                          }),
                          O.wrapperInPortal
                        ),
                        O.wrapperAsChildren
                      )
                    );
                  },
                },
              ]),
              n
            );
          })(g.Component)),
          kt(co, 'propTypes', {
            autoOpen: R.default.bool,
            callback: R.default.func,
            children: R.default.node,
            component: (0, ji.default)(
              R.default.oneOfType([R.default.func, R.default.element]),
              function (t) {
                return !t.content;
              }
            ),
            content: (0, ji.default)(R.default.node, function (t) {
              return !t.component;
            }),
            debug: R.default.bool,
            disableAnimation: R.default.bool,
            disableFlip: R.default.bool,
            disableHoverToClick: R.default.bool,
            event: R.default.oneOf(['hover', 'click']),
            eventDelay: R.default.number,
            footer: R.default.node,
            getPopper: R.default.func,
            hideArrow: R.default.bool,
            id: R.default.oneOfType([R.default.string, R.default.number]),
            offset: R.default.number,
            open: R.default.bool,
            options: R.default.object,
            placement: R.default.oneOf([
              'top',
              'top-start',
              'top-end',
              'bottom',
              'bottom-start',
              'bottom-end',
              'left',
              'left-start',
              'left-end',
              'right',
              'right-start',
              'right-end',
              'auto',
              'center',
            ]),
            showCloseButton: R.default.bool,
            style: R.default.object,
            styles: R.default.object,
            target: R.default.oneOfType([R.default.object, R.default.string]),
            title: R.default.node,
            wrapperOptions: R.default.shape({
              offset: R.default.number,
              placement: R.default.oneOf([
                'top',
                'top-start',
                'top-end',
                'bottom',
                'bottom-start',
                'bottom-end',
                'left',
                'left-start',
                'left-end',
                'right',
                'right-start',
                'right-end',
                'auto',
              ]),
              position: R.default.bool,
            }),
          }),
          kt(co, 'defaultProps', {
            autoOpen: !1,
            callback: Au,
            debug: !1,
            disableAnimation: !1,
            disableFlip: !1,
            disableHoverToClick: !1,
            event: 'click',
            eventDelay: 0.4,
            getPopper: Au,
            hideArrow: !1,
            offset: 15,
            placement: 'bottom',
            showCloseButton: !1,
            styles: {},
            target: null,
            wrapperOptions: { position: !1 },
          });
      });
    function Iu(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function (o) {
            return Object.getOwnPropertyDescriptor(t, o).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function D(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e] != null ? arguments[e] : {};
        e % 2
          ? Iu(Object(n), !0).forEach(function (r) {
              H(t, r, n[r]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Iu(Object(n)).forEach(function (r) {
                Object.defineProperty(
                  t,
                  r,
                  Object.getOwnPropertyDescriptor(n, r)
                );
              });
      }
      return t;
    }
    function me(t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function');
    }
    function Lu(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, qf(r.key), r);
      }
    }
    function ve(t, e, n) {
      return (
        e && Lu(t.prototype, e),
        n && Lu(t, n),
        Object.defineProperty(t, 'prototype', { writable: !1 }),
        t
      );
    }
    function H(t, e, n) {
      return (
        (e = qf(e)),
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    }
    function zt() {
      return (
        (zt = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }),
        zt.apply(this, arguments)
      );
    }
    function Be(t, e) {
      if (typeof e != 'function' && e !== null)
        throw new TypeError(
          'Super expression must either be null or a function'
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: { value: t, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(t, 'prototype', { writable: !1 }),
        e && La(t, e);
    }
    function No(t) {
      return (
        (No = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        No(t)
      );
    }
    function La(t, e) {
      return (
        (La = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (n, r) {
              return (n.__proto__ = r), n;
            }),
        La(t, e)
      );
    }
    function j0() {
      if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == 'function') return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch {
        return !1;
      }
    }
    function F0(t, e) {
      if (t == null) return {};
      var n = {},
        r = Object.keys(t),
        o,
        i;
      for (i = 0; i < r.length; i++)
        (o = r[i]), !(e.indexOf(o) >= 0) && (n[o] = t[o]);
      return n;
    }
    function Io(t, e) {
      if (t == null) return {};
      var n = F0(t, e),
        r,
        o;
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (o = 0; o < i.length; o++)
          (r = i[o]),
            !(e.indexOf(r) >= 0) &&
              Object.prototype.propertyIsEnumerable.call(t, r) &&
              (n[r] = t[r]);
      }
      return n;
    }
    function pt(t) {
      if (t === void 0)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return t;
    }
    function V0(t, e) {
      if (e && (typeof e == 'object' || typeof e == 'function')) return e;
      if (e !== void 0)
        throw new TypeError(
          'Derived constructors may only return object or undefined'
        );
      return pt(t);
    }
    function Ue(t) {
      var e = j0();
      return function () {
        var n = No(t),
          r;
        if (e) {
          var o = No(this).constructor;
          r = Reflect.construct(n, arguments, o);
        } else r = n.apply(this, arguments);
        return V0(this, r);
      };
    }
    function z0(t, e) {
      if (typeof t != 'object' || t === null) return t;
      var n = t[Symbol.toPrimitive];
      if (n !== void 0) {
        var r = n.call(t, e || 'default');
        if (typeof r != 'object') return r;
        throw new TypeError('@@toPrimitive must return a primitive value.');
      }
      return (e === 'string' ? String : Number)(t);
    }
    function qf(t) {
      var e = z0(t, 'string');
      return typeof e == 'symbol' ? e : String(e);
    }
    function Gf() {
      var t =
          arguments.length > 0 && arguments[0] !== void 0
            ? arguments[0]
            : navigator.userAgent,
        e = t;
      return (
        typeof window > 'u'
          ? (e = 'node')
          : document.documentMode
            ? (e = 'ie')
            : /Edge/.test(t)
              ? (e = 'edge')
              : window.opera || t.indexOf(' OPR/') >= 0
                ? (e = 'opera')
                : typeof window.InstallTrigger < 'u'
                  ? (e = 'firefox')
                  : window.chrome
                    ? (e = 'chrome')
                    : /(Version\/([0-9._]+).*Safari|CriOS|FxiOS| Mobile\/)/.test(
                        t
                      ) && (e = 'safari'),
        e
      );
    }
    function Wi(t) {
      return Object.prototype.toString.call(t).slice(8, -1).toLowerCase();
    }
    function er(t) {
      var e = [],
        n = function r(o) {
          if (typeof o == 'string' || typeof o == 'number') e.push(o);
          else if (Array.isArray(o))
            o.forEach(function (a) {
              return r(a);
            });
          else if (o && o.props) {
            var i = o.props.children;
            Array.isArray(i)
              ? i.forEach(function (a) {
                  return r(a);
                })
              : r(i);
          }
        };
      return n(t), e.join(' ').trim();
    }
    function ju(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }
    function B0(t, e) {
      return !ft.plainObject(t) || !ft.array(e)
        ? !1
        : Object.keys(t).every(function (n) {
            return e.indexOf(n) !== -1;
          });
    }
    function U0(t) {
      var e = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        n = t.replace(e, function (o, i, a, s) {
          return i + i + a + a + s + s;
        }),
        r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);
      return r
        ? [parseInt(r[1], 16), parseInt(r[2], 16), parseInt(r[3], 16)]
        : [];
    }
    function Fu(t) {
      return t.disableBeacon || t.placement === 'center';
    }
    function ja(t, e) {
      var n,
        r = Pe(t) || Pe(e),
        o = ft.undefined(t) || ft.undefined(e);
      if (Wi(t) !== Wi(e) || r || o) return !1;
      if (ft.domElement(t)) return t.isSameNode(e);
      if (ft.number(t)) return t === e;
      if (ft.function(t)) return t.toString() === e.toString();
      for (var i in t)
        if (ju(t, i)) {
          if (typeof t[i] > 'u' || typeof e[i] > 'u') return !1;
          if (
            ((n = Wi(t[i])),
            (['object', 'array'].indexOf(n) !== -1 && ja(t[i], e[i])) ||
              (n === 'function' && ja(t[i], e[i])))
          )
            continue;
          if (t[i] !== e[i]) return !1;
        }
      for (var a in e) if (ju(e, a) && typeof t[a] > 'u') return !1;
      return !0;
    }
    function Vu() {
      return ['chrome', 'safari', 'firefox', 'opera'].indexOf(Gf()) === -1;
    }
    function _e(t) {
      var e = t.title,
        n = t.data,
        r = t.warn,
        o = r === void 0 ? !1 : r,
        i = t.debug,
        a = i === void 0 ? !1 : i,
        s = o ? console.warn || console.error : console.log;
      a &&
        (e && n
          ? (console.groupCollapsed(
              '%creact-joyride: '.concat(e),
              'color: #ff0044; font-weight: bold; font-size: 12px;'
            ),
            Array.isArray(n)
              ? n.forEach(function (l) {
                  ft.plainObject(l) && l.key
                    ? s.apply(console, [l.key, l.value])
                    : s.apply(console, [l]);
                })
              : s.apply(console, [n]),
            console.groupEnd())
          : console.error('Missing title or data props'));
    }
    function H0(t) {
      var e = new Map(),
        n = new Map(),
        r = (function () {
          function o() {
            var i = this,
              a =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : {},
              s = a.continuous,
              l = s === void 0 ? !1 : s,
              u = a.stepIndex,
              c = a.steps,
              f = c === void 0 ? [] : c;
            me(this, o),
              H(this, 'listener', void 0),
              H(this, 'setSteps', function (p) {
                var d = i.getState(),
                  h = d.size,
                  m = d.status,
                  y = { size: p.length, status: m };
                n.set('steps', p),
                  m === K.WAITING && !h && p.length && (y.status = K.RUNNING),
                  i.setState(y);
              }),
              H(this, 'addListener', function (p) {
                i.listener = p;
              }),
              H(this, 'update', function (p) {
                if (!B0(p, Va))
                  throw new Error(
                    'State is not valid. Valid keys: '.concat(Va.join(', '))
                  );
                i.setState(
                  D(
                    {},
                    i.getNextState(
                      D(
                        D(D({}, i.getState()), p),
                        {},
                        { action: p.action || tt.UPDATE }
                      ),
                      !0
                    )
                  )
                );
              }),
              H(this, 'start', function (p) {
                var d = i.getState(),
                  h = d.index,
                  m = d.size;
                i.setState(
                  D(
                    D(
                      {},
                      i.getNextState(
                        { action: tt.START, index: ft.number(p) ? p : h },
                        !0
                      )
                    ),
                    {},
                    { status: m ? K.RUNNING : K.WAITING }
                  )
                );
              }),
              H(this, 'stop', function () {
                var p =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : !1,
                  d = i.getState(),
                  h = d.index,
                  m = d.status;
                [K.FINISHED, K.SKIPPED].indexOf(m) === -1 &&
                  i.setState(
                    D(
                      D(
                        {},
                        i.getNextState({
                          action: tt.STOP,
                          index: h + (p ? 1 : 0),
                        })
                      ),
                      {},
                      { status: K.PAUSED }
                    )
                  );
              }),
              H(this, 'close', function () {
                var p = i.getState(),
                  d = p.index,
                  h = p.status;
                h === K.RUNNING &&
                  i.setState(
                    D({}, i.getNextState({ action: tt.CLOSE, index: d + 1 }))
                  );
              }),
              H(this, 'go', function (p) {
                var d = i.getState(),
                  h = d.controlled,
                  m = d.status;
                if (!(h || m !== K.RUNNING)) {
                  var y = i.getSteps()[p];
                  i.setState(
                    D(
                      D({}, i.getNextState({ action: tt.GO, index: p })),
                      {},
                      { status: y ? m : K.FINISHED }
                    )
                  );
                }
              }),
              H(this, 'info', function () {
                return i.getState();
              }),
              H(this, 'next', function () {
                var p = i.getState(),
                  d = p.index,
                  h = p.status;
                h === K.RUNNING &&
                  i.setState(i.getNextState({ action: tt.NEXT, index: d + 1 }));
              }),
              H(this, 'open', function () {
                var p = i.getState(),
                  d = p.status;
                d === K.RUNNING &&
                  i.setState(
                    D(
                      {},
                      i.getNextState({
                        action: tt.UPDATE,
                        lifecycle: _.TOOLTIP,
                      })
                    )
                  );
              }),
              H(this, 'prev', function () {
                var p = i.getState(),
                  d = p.index,
                  h = p.status;
                h === K.RUNNING &&
                  i.setState(
                    D({}, i.getNextState({ action: tt.PREV, index: d - 1 }))
                  );
              }),
              H(this, 'reset', function () {
                var p =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : !1,
                  d = i.getState(),
                  h = d.controlled;
                h ||
                  i.setState(
                    D(
                      D({}, i.getNextState({ action: tt.RESET, index: 0 })),
                      {},
                      { status: p ? K.RUNNING : K.READY }
                    )
                  );
              }),
              H(this, 'skip', function () {
                var p = i.getState(),
                  d = p.status;
                d === K.RUNNING &&
                  i.setState({
                    action: tt.SKIP,
                    lifecycle: _.INIT,
                    status: K.SKIPPED,
                  });
              }),
              this.setState(
                {
                  action: tt.INIT,
                  controlled: ft.number(u),
                  continuous: l,
                  index: ft.number(u) ? u : 0,
                  lifecycle: _.INIT,
                  status: f.length ? K.READY : K.IDLE,
                },
                !0
              ),
              this.setSteps(f);
          }
          return (
            ve(o, [
              {
                key: 'setState',
                value: function (i) {
                  var a =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : !1,
                    s = this.getState(),
                    l = D(D({}, s), i),
                    u = l.action,
                    c = l.index,
                    f = l.lifecycle,
                    p = l.size,
                    d = l.status;
                  e.set('action', u),
                    e.set('index', c),
                    e.set('lifecycle', f),
                    e.set('size', p),
                    e.set('status', d),
                    a &&
                      (e.set('controlled', i.controlled),
                      e.set('continuous', i.continuous)),
                    this.listener &&
                      this.hasUpdatedState(s) &&
                      this.listener(this.getState());
                },
              },
              {
                key: 'getState',
                value: function () {
                  return e.size
                    ? {
                        action: e.get('action') || '',
                        controlled: e.get('controlled') || !1,
                        index: parseInt(e.get('index'), 10),
                        lifecycle: e.get('lifecycle') || '',
                        size: e.get('size') || 0,
                        status: e.get('status') || '',
                      }
                    : D({}, Qf);
                },
              },
              {
                key: 'getNextState',
                value: function (i) {
                  var a =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : !1,
                    s = this.getState(),
                    l = s.action,
                    u = s.controlled,
                    c = s.index,
                    f = s.size,
                    p = s.status,
                    d = ft.number(i.index) ? i.index : c,
                    h = u && !a ? c : Math.min(Math.max(d, 0), f);
                  return {
                    action: i.action || l,
                    controlled: u,
                    index: h,
                    lifecycle: i.lifecycle || _.INIT,
                    size: i.size || f,
                    status: h === f ? K.FINISHED : i.status || p,
                  };
                },
              },
              {
                key: 'hasUpdatedState',
                value: function (i) {
                  var a = JSON.stringify(i),
                    s = JSON.stringify(this.getState());
                  return a !== s;
                },
              },
              {
                key: 'getSteps',
                value: function () {
                  var i = n.get('steps');
                  return Array.isArray(i) ? i : [];
                },
              },
              {
                key: 'getHelpers',
                value: function () {
                  return {
                    close: this.close,
                    go: this.go,
                    info: this.info,
                    next: this.next,
                    open: this.open,
                    prev: this.prev,
                    reset: this.reset,
                    skip: this.skip,
                  };
                },
              },
            ]),
            o
          );
        })();
      return new r(t);
    }
    function Xf(t) {
      return t ? t.getBoundingClientRect() : {};
    }
    function W0() {
      var t = document,
        e = t.body,
        n = t.documentElement;
      return !e || !n
        ? 0
        : Math.max(
            e.scrollHeight,
            e.offsetHeight,
            n.clientHeight,
            n.scrollHeight,
            n.offsetHeight
          );
    }
    function Ce(t) {
      return typeof t == 'string' ? document.querySelector(t) : t;
    }
    function Y0(t) {
      return !t || t.nodeType !== 1 ? {} : getComputedStyle(t);
    }
    function Lo(t, e, n) {
      var r = (0, Ms.default)(t);
      if (r.isSameNode(yr())) return n ? document : yr();
      var o = r.scrollHeight > r.offsetHeight;
      return !o && !e ? ((r.style.overflow = 'initial'), yr()) : r;
    }
    function Zo(t, e) {
      if (!t) return !1;
      var n = Lo(t, e);
      return !n.isSameNode(yr());
    }
    function q0(t) {
      return t.offsetParent !== document.body;
    }
    function bn(t) {
      var e =
        arguments.length > 1 && arguments[1] !== void 0
          ? arguments[1]
          : 'fixed';
      if (!t || !(t instanceof HTMLElement)) return !1;
      var n = t.nodeName;
      return n === 'BODY' || n === 'HTML'
        ? !1
        : Y0(t).position === e
          ? !0
          : bn(t.parentNode, e);
    }
    function G0(t) {
      if (!t) return !1;
      for (var e = t; e && e !== document.body; ) {
        if (e instanceof HTMLElement) {
          var n = getComputedStyle(e),
            r = n.display,
            o = n.visibility;
          if (r === 'none' || o === 'hidden') return !1;
        }
        e = e.parentNode;
      }
      return !0;
    }
    function X0(t, e, n) {
      var r = Xf(t),
        o = Lo(t, n),
        i = Zo(t, n),
        a = 0;
      o instanceof HTMLElement && (a = o.scrollTop);
      var s = r.top + (!i && !bn(t) ? a : 0);
      return Math.floor(s - e);
    }
    function Fa(t) {
      return t instanceof HTMLElement
        ? t.offsetParent instanceof HTMLElement
          ? Fa(t.offsetParent) + t.offsetTop
          : t.offsetTop
        : 0;
    }
    function _0(t, e, n) {
      if (!t) return 0;
      var r = (0, Ms.default)(t),
        o = Fa(t);
      return Zo(t, n) && !q0(t) && (o -= Fa(r)), Math.floor(o - e);
    }
    function yr() {
      return document.scrollingElement || document.createElement('body');
    }
    function K0(t) {
      var e =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : yr(),
        n =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 300;
      return new Promise(function (r, o) {
        var i = e.scrollTop,
          a = t > i ? t - i : i - t;
        Kf.default.top(e, t, { duration: a < 100 ? 50 : n }, function (s) {
          return s && s.message !== 'Element already at target scroll position'
            ? o(s)
            : r();
        });
      });
    }
    function Q0(t) {
      function e(r, o, i, a, s, l) {
        var u = a || '<<anonymous>>',
          c = l || i;
        if (o[i] == null)
          return r
            ? new Error(
                'Required '
                  .concat(s, ' `')
                  .concat(c, '` was not specified in `')
                  .concat(u, '`.')
              )
            : null;
        for (
          var f = arguments.length, p = new Array(f > 6 ? f - 6 : 0), d = 6;
          d < f;
          d++
        )
          p[d - 6] = arguments[d];
        return t.apply(void 0, [o, i, u, s, c].concat(p));
      }
      var n = e.bind(null, !1);
      return (n.isRequired = e.bind(null, !0)), n;
    }
    function J0() {
      var t =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        e = (0, Me.default)(Jf, t.options || {}),
        n = 290;
      window.innerWidth > 480 && (n = 380),
        e.width &&
          (window.innerWidth < e.width
            ? (n = window.innerWidth - 30)
            : (n = e.width));
      var r = {
          bottom: 0,
          left: 0,
          overflow: 'hidden',
          position: 'absolute',
          right: 0,
          top: 0,
          zIndex: e.zIndex,
        },
        o = {
          beacon: D(
            D({}, vn),
            {},
            {
              display: 'inline-block',
              height: e.beaconSize,
              position: 'relative',
              width: e.beaconSize,
              zIndex: e.zIndex,
            }
          ),
          beaconInner: {
            animation: 'joyride-beacon-inner 1.2s infinite ease-in-out',
            backgroundColor: e.primaryColor,
            borderRadius: '50%',
            display: 'block',
            height: '50%',
            left: '50%',
            opacity: 0.7,
            position: 'absolute',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '50%',
          },
          beaconOuter: {
            animation: 'joyride-beacon-outer 1.2s infinite ease-in-out',
            backgroundColor: 'rgba('.concat(
              U0(e.primaryColor).join(','),
              ', 0.2)'
            ),
            border: '2px solid '.concat(e.primaryColor),
            borderRadius: '50%',
            boxSizing: 'border-box',
            display: 'block',
            height: '100%',
            left: 0,
            opacity: 0.9,
            position: 'absolute',
            top: 0,
            transformOrigin: 'center',
            width: '100%',
          },
          tooltip: {
            backgroundColor: e.backgroundColor,
            borderRadius: 5,
            boxSizing: 'border-box',
            color: e.textColor,
            fontSize: 16,
            maxWidth: '100%',
            padding: 15,
            position: 'relative',
            width: n,
          },
          tooltipContainer: { lineHeight: 1.4, textAlign: 'center' },
          tooltipTitle: { fontSize: 18, margin: 0 },
          tooltipContent: { padding: '20px 10px' },
          tooltipFooter: {
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: 15,
          },
          tooltipFooterSpacer: { flex: 1 },
          buttonNext: D(
            D({}, vn),
            {},
            { backgroundColor: e.primaryColor, borderRadius: 4, color: '#fff' }
          ),
          buttonBack: D(
            D({}, vn),
            {},
            { color: e.primaryColor, marginLeft: 'auto', marginRight: 5 }
          ),
          buttonClose: D(
            D({}, vn),
            {},
            {
              color: e.textColor,
              height: 14,
              padding: 15,
              position: 'absolute',
              right: 0,
              top: 0,
              width: 14,
            }
          ),
          buttonSkip: D(D({}, vn), {}, { color: e.textColor, fontSize: 14 }),
          overlay: D(
            D({}, r),
            {},
            { backgroundColor: e.overlayColor, mixBlendMode: 'hard-light' }
          ),
          overlayLegacy: D({}, r),
          overlayLegacyCenter: D(
            D({}, r),
            {},
            { backgroundColor: e.overlayColor }
          ),
          spotlight: D(D({}, za), {}, { backgroundColor: 'gray' }),
          spotlightLegacy: D(
            D({}, za),
            {},
            {
              boxShadow: '0 0 0 9999px '
                .concat(e.overlayColor, ', ')
                .concat(e.spotlightShadow),
            }
          ),
          floaterStyles: {
            arrow: { color: e.arrowColor },
            options: { zIndex: e.zIndex + 100 },
          },
          options: e,
        };
      return (0, Me.default)(o, t);
    }
    function Z0(t) {
      var e = [
        'beaconComponent',
        'disableCloseOnEsc',
        'disableOverlay',
        'disableOverlayClose',
        'disableScrolling',
        'disableScrollParentFix',
        'floaterProps',
        'hideBackButton',
        'hideCloseButton',
        'locale',
        'showProgress',
        'showSkipButton',
        'spotlightClicks',
        'spotlightPadding',
        'styles',
        'tooltipComponent',
      ];
      return Object.keys(t)
        .filter(function (n) {
          return e.indexOf(n) !== -1;
        })
        .reduce(function (n, r) {
          return (n[r] = t[r]), n;
        }, {});
    }
    function nr(t, e) {
      if (!t) return null;
      var n = Me.default.all([Z0(e), po.step, t], {
          isMergeableObject: ft.plainObject,
        }),
        r = J0((0, Me.default)(e.styles || {}, t.styles || {})),
        o = Zo(Ce(t.target), n.disableScrollParentFix),
        i = Me.default.all([
          e.floaterProps || {},
          po.floaterProps,
          n.floaterProps || {},
        ]);
      return (
        (i.offset = n.offset),
        (i.styles = (0, Me.default)(i.styles || {}, r.floaterStyles || {})),
        delete r.floaterStyles,
        (i.offset += e.spotlightPadding || t.spotlightPadding || 0),
        t.placementBeacon && (i.wrapperOptions.placement = t.placementBeacon),
        o && (i.options.preventOverflow.boundariesElement = 'window'),
        D(
          D({}, n),
          {},
          {
            locale: Me.default.all([po.locale, e.locale || {}, n.locale || {}]),
            floaterProps: i,
            styles: r,
          }
        )
      );
    }
    function _f(t) {
      var e =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      return ft.plainObject(t)
        ? t.target
          ? !0
          : (_e({
              title: 'validateStep',
              data: 'target is missing from the step',
              warn: !0,
              debug: e,
            }),
            !1)
        : (_e({
            title: 'validateStep',
            data: 'step must be an object',
            warn: !0,
            debug: e,
          }),
          !1);
    }
    function zu(t) {
      var e =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      return ft.array(t)
        ? t.every(function (n) {
            return _f(n, e);
          })
        : (_e({
            title: 'validateSteps',
            data: 'steps must be an array',
            warn: !0,
            debug: e,
          }),
          !1);
    }
    function $0(t) {
      var e = t.styles;
      return g.createElement('div', {
        key: 'JoyrideSpotlight',
        className: 'react-joyride__spotlight',
        style: e,
      });
    }
    function tb(t) {
      var e = t.styles,
        n = Io(t, Zf),
        r = e.color,
        o = e.height,
        i = e.width,
        a = Io(e, $f);
      return g.createElement(
        'button',
        zt({ style: a, type: 'button' }, n),
        g.createElement(
          'svg',
          {
            width: typeof i == 'number' ? ''.concat(i, 'px') : i,
            height: typeof o == 'number' ? ''.concat(o, 'px') : o,
            viewBox: '0 0 18 18',
            version: '1.1',
            xmlns: 'http://www.w3.org/2000/svg',
            preserveAspectRatio: 'xMidYMid',
          },
          g.createElement(
            'g',
            null,
            g.createElement('path', {
              d: 'M8.13911129,9.00268191 L0.171521827,17.0258467 C-0.0498027049,17.248715 -0.0498027049,17.6098394 0.171521827,17.8327545 C0.28204354,17.9443526 0.427188206,17.9998706 0.572051765,17.9998706 C0.71714958,17.9998706 0.862013139,17.9443526 0.972581703,17.8327545 L9.0000937,9.74924618 L17.0276057,17.8327545 C17.1384085,17.9443526 17.2832721,17.9998706 17.4281356,17.9998706 C17.5729992,17.9998706 17.718097,17.9443526 17.8286656,17.8327545 C18.0499901,17.6098862 18.0499901,17.2487618 17.8286656,17.0258467 L9.86135722,9.00268191 L17.8340066,0.973848225 C18.0553311,0.750979934 18.0553311,0.389855532 17.8340066,0.16694039 C17.6126821,-0.0556467968 17.254037,-0.0556467968 17.0329467,0.16694039 L9.00042166,8.25611765 L0.967006424,0.167268345 C0.745681892,-0.0553188426 0.387317931,-0.0553188426 0.165993399,0.167268345 C-0.0553311331,0.390136635 -0.0553311331,0.751261038 0.165993399,0.974176179 L8.13920499,9.00268191 L8.13911129,9.00268191 Z',
              fill: r,
            })
          )
        )
      );
    }
    var Bu,
      Kf,
      Ms,
      pn,
      Me,
      tt,
      Vt,
      _,
      K,
      de,
      fn,
      Qf,
      Va,
      Jf,
      vn,
      za,
      po,
      Uu,
      Hu,
      Wu,
      Yu,
      Zf,
      $f,
      qu,
      Gu,
      Xu,
      _u,
      Ku,
      Ba,
      eb = v(() => {
        Of(),
          Gy(),
          (Bu = le(Tf())),
          (Kf = le(Xy())),
          (Ms = le(_y())),
          (pn = le(Qy())),
          (Me = le(Cf())),
          L0(),
          (tt = {
            INIT: 'init',
            START: 'start',
            STOP: 'stop',
            RESET: 'reset',
            PREV: 'prev',
            NEXT: 'next',
            GO: 'go',
            CLOSE: 'close',
            SKIP: 'skip',
            UPDATE: 'update',
          }),
          (Vt = {
            TOUR_START: 'tour:start',
            STEP_BEFORE: 'step:before',
            BEACON: 'beacon',
            TOOLTIP: 'tooltip',
            STEP_AFTER: 'step:after',
            TOUR_END: 'tour:end',
            TOUR_STATUS: 'tour:status',
            TARGET_NOT_FOUND: 'error:target_not_found',
            ERROR: 'error',
          }),
          (_ = {
            INIT: 'init',
            READY: 'ready',
            BEACON: 'beacon',
            TOOLTIP: 'tooltip',
            COMPLETE: 'complete',
            ERROR: 'error',
          }),
          (K = {
            IDLE: 'idle',
            READY: 'ready',
            WAITING: 'waiting',
            RUNNING: 'running',
            PAUSED: 'paused',
            SKIPPED: 'skipped',
            FINISHED: 'finished',
            ERROR: 'error',
          }),
          (de = Bu.default.canUseDOM),
          (fn = Ci !== void 0),
          (Qf = {
            action: '',
            controlled: !1,
            index: 0,
            lifecycle: _.INIT,
            size: 0,
            status: K.IDLE,
          }),
          (Va = ['action', 'index', 'lifecycle', 'status']),
          Q0(function (t, e, n, r, o) {
            var i = t[e],
              a = i;
            if (!g.isValidElement(i) && (0, pn.isValidElementType)(i)) {
              var s = { ref: function () {}, step: {} };
              a = g.createElement(a, s);
            }
            if (
              ft.string(i) ||
              ft.number(i) ||
              !(0, pn.isValidElementType)(i) ||
              [pn.Element, pn.ForwardRef].indexOf((0, pn.typeOf)(a)) === -1
            )
              return new Error(
                'Invalid '
                  .concat(r, ' `')
                  .concat(o, '` supplied to `')
                  .concat(n, '`. Expected a React class or forwardRef.')
              );
          }),
          (Jf = {
            arrowColor: '#fff',
            backgroundColor: '#fff',
            beaconSize: 36,
            overlayColor: 'rgba(0, 0, 0, 0.5)',
            primaryColor: '#f04',
            spotlightShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
            textColor: '#333',
            zIndex: 100,
          }),
          (vn = {
            backgroundColor: 'transparent',
            border: 0,
            borderRadius: 0,
            color: '#555',
            cursor: 'pointer',
            fontSize: 16,
            lineHeight: 1,
            padding: 8,
            WebkitAppearance: 'none',
          }),
          (za = { borderRadius: 4, position: 'absolute' }),
          (po = {
            floaterProps: {
              options: {
                preventOverflow: { boundariesElement: 'scrollParent' },
              },
              wrapperOptions: { offset: -18, position: !0 },
            },
            locale: {
              back: 'Back',
              close: 'Close',
              last: 'Last',
              next: 'Next',
              open: 'Open the dialog',
              skip: 'Skip',
            },
            step: { event: 'click', placement: 'bottom', offset: 10 },
          }),
          (Uu = ve(function t(e) {
            var n = this,
              r =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : {};
            if (
              (me(this, t),
              H(this, 'element', void 0),
              H(this, 'options', void 0),
              H(this, 'canBeTabbed', function (o) {
                var i = o.tabIndex;
                (i === null || i < 0) && (i = void 0);
                var a = isNaN(i);
                return !a && n.canHaveFocus(o);
              }),
              H(this, 'canHaveFocus', function (o) {
                var i = /input|select|textarea|button|object/,
                  a = o.nodeName.toLowerCase(),
                  s =
                    (i.test(a) && !o.getAttribute('disabled')) ||
                    (a === 'a' && !!o.getAttribute('href'));
                return s && n.isVisible(o);
              }),
              H(this, 'findValidTabElements', function () {
                return [].slice
                  .call(n.element.querySelectorAll('*'), 0)
                  .filter(n.canBeTabbed);
              }),
              H(this, 'handleKeyDown', function (o) {
                var i = n.options.keyCode,
                  a = i === void 0 ? 9 : i;
                o.keyCode === a && n.interceptTab(o);
              }),
              H(this, 'interceptTab', function (o) {
                var i = n.findValidTabElements();
                if (i.length) {
                  o.preventDefault();
                  var a = o.shiftKey,
                    s = i.indexOf(document.activeElement);
                  s === -1 || (!a && s + 1 === i.length)
                    ? (s = 0)
                    : a && s === 0
                      ? (s = i.length - 1)
                      : (s += a ? -1 : 1),
                    i[s].focus();
                }
              }),
              H(this, 'isHidden', function (o) {
                var i = o.offsetWidth <= 0 && o.offsetHeight <= 0,
                  a = window.getComputedStyle(o);
                return i && !o.innerHTML
                  ? !0
                  : (i && a.getPropertyValue('overflow') !== 'visible') ||
                      a.getPropertyValue('display') === 'none';
              }),
              H(this, 'isVisible', function (o) {
                for (var i = o; i; )
                  if (i instanceof HTMLElement) {
                    if (i === document.body) break;
                    if (n.isHidden(i)) return !1;
                    i = i.parentNode;
                  }
                return !0;
              }),
              H(this, 'removeScope', function () {
                window.removeEventListener('keydown', n.handleKeyDown);
              }),
              H(this, 'checkFocus', function (o) {
                document.activeElement !== o &&
                  (o.focus(),
                  window.requestAnimationFrame(function () {
                    return n.checkFocus(o);
                  }));
              }),
              H(this, 'setFocus', function () {
                var o = n.options.selector;
                if (o) {
                  var i = n.element.querySelector(o);
                  i &&
                    window.requestAnimationFrame(function () {
                      return n.checkFocus(i);
                    });
                }
              }),
              !(e instanceof HTMLElement))
            )
              throw new TypeError(
                'Invalid parameter: element must be an HTMLElement'
              );
            (this.element = e),
              (this.options = r),
              window.addEventListener('keydown', this.handleKeyDown, !1),
              this.setFocus();
          })),
          (Hu = (function (t) {
            Be(n, t);
            var e = Ue(n);
            function n(r) {
              var o;
              if (
                (me(this, n),
                (o = e.call(this, r)),
                H(pt(o), 'setBeaconRef', function (l) {
                  o.beacon = l;
                }),
                !r.beaconComponent)
              ) {
                var i =
                    document.head || document.getElementsByTagName('head')[0],
                  a = document.createElement('style'),
                  s = `
        @keyframes joyride-beacon-inner {
          20% {
            opacity: 0.9;
          }
        
          90% {
            opacity: 0.7;
          }
        }
        
        @keyframes joyride-beacon-outer {
          0% {
            transform: scale(1);
          }
        
          45% {
            opacity: 0.7;
            transform: scale(0.75);
          }
        
          100% {
            opacity: 0.9;
            transform: scale(1);
          }
        }
      `;
                (a.type = 'text/css'),
                  (a.id = 'joyride-beacon-animation'),
                  r.nonce !== void 0 && a.setAttribute('nonce', r.nonce),
                  a.appendChild(document.createTextNode(s)),
                  i.appendChild(a);
              }
              return o;
            }
            return (
              ve(n, [
                {
                  key: 'componentDidMount',
                  value: function () {
                    var r = this,
                      o = this.props.shouldFocus;
                    setTimeout(function () {
                      ft.domElement(r.beacon) && o && r.beacon.focus();
                    }, 0);
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    var r = document.getElementById('joyride-beacon-animation');
                    r && r.parentNode.removeChild(r);
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var r = this.props,
                      o = r.beaconComponent,
                      i = r.locale,
                      a = r.onClickOrHover,
                      s = r.styles,
                      l = {
                        'aria-label': i.open,
                        onClick: a,
                        onMouseEnter: a,
                        ref: this.setBeaconRef,
                        title: i.open,
                      },
                      u;
                    if (o) {
                      var c = o;
                      u = g.createElement(c, l);
                    } else
                      u = g.createElement(
                        'button',
                        zt(
                          {
                            key: 'JoyrideBeacon',
                            className: 'react-joyride__beacon',
                            style: s.beacon,
                            type: 'button',
                          },
                          l
                        ),
                        g.createElement('span', { style: s.beaconInner }),
                        g.createElement('span', { style: s.beaconOuter })
                      );
                    return u;
                  },
                },
              ]),
              n
            );
          })(g.Component)),
          (Wu = ['mixBlendMode', 'zIndex']),
          (Yu = (function (t) {
            Be(n, t);
            var e = Ue(n);
            function n() {
              var r;
              me(this, n);
              for (
                var o = arguments.length, i = new Array(o), a = 0;
                a < o;
                a++
              )
                i[a] = arguments[a];
              return (
                (r = e.call.apply(e, [this].concat(i))),
                H(pt(r), '_isMounted', !1),
                H(pt(r), 'state', {
                  mouseOverSpotlight: !1,
                  isScrolling: !1,
                  showSpotlight: !0,
                }),
                H(pt(r), 'handleMouseMove', function (s) {
                  var l = r.state.mouseOverSpotlight,
                    u = r.spotlightStyles,
                    c = u.height,
                    f = u.left,
                    p = u.position,
                    d = u.top,
                    h = u.width,
                    m = p === 'fixed' ? s.clientY : s.pageY,
                    y = p === 'fixed' ? s.clientX : s.pageX,
                    E = m >= d && m <= d + c,
                    x = y >= f && y <= f + h,
                    b = x && E;
                  b !== l && r.updateState({ mouseOverSpotlight: b });
                }),
                H(pt(r), 'handleScroll', function () {
                  var s = r.props.target,
                    l = Ce(s);
                  if (r.scrollParent !== document) {
                    var u = r.state.isScrolling;
                    u || r.updateState({ isScrolling: !0, showSpotlight: !1 }),
                      clearTimeout(r.scrollTimeout),
                      (r.scrollTimeout = setTimeout(function () {
                        r.updateState({ isScrolling: !1, showSpotlight: !0 });
                      }, 50));
                  } else bn(l, 'sticky') && r.updateState({});
                }),
                H(pt(r), 'handleResize', function () {
                  clearTimeout(r.resizeTimeout),
                    (r.resizeTimeout = setTimeout(function () {
                      r._isMounted && r.forceUpdate();
                    }, 100));
                }),
                r
              );
            }
            return (
              ve(n, [
                {
                  key: 'componentDidMount',
                  value: function () {
                    var r = this.props;
                    r.debug, r.disableScrolling;
                    var o = r.disableScrollParentFix,
                      i = r.target,
                      a = Ce(i);
                    (this.scrollParent = Lo(a, o, !0)),
                      (this._isMounted = !0),
                      window.addEventListener('resize', this.handleResize);
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function (r) {
                    var o = this,
                      i = this.props,
                      a = i.lifecycle,
                      s = i.spotlightClicks,
                      l = ur(r, this.props),
                      u = l.changed;
                    u('lifecycle', _.TOOLTIP) &&
                      (this.scrollParent.addEventListener(
                        'scroll',
                        this.handleScroll,
                        { passive: !0 }
                      ),
                      setTimeout(function () {
                        var c = o.state.isScrolling;
                        c || o.updateState({ showSpotlight: !0 });
                      }, 100)),
                      (u('spotlightClicks') ||
                        u('disableOverlay') ||
                        u('lifecycle')) &&
                        (s && a === _.TOOLTIP
                          ? window.addEventListener(
                              'mousemove',
                              this.handleMouseMove,
                              !1
                            )
                          : a !== _.TOOLTIP &&
                            window.removeEventListener(
                              'mousemove',
                              this.handleMouseMove
                            ));
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    (this._isMounted = !1),
                      window.removeEventListener(
                        'mousemove',
                        this.handleMouseMove
                      ),
                      window.removeEventListener('resize', this.handleResize),
                      clearTimeout(this.resizeTimeout),
                      clearTimeout(this.scrollTimeout),
                      this.scrollParent.removeEventListener(
                        'scroll',
                        this.handleScroll
                      );
                  },
                },
                {
                  key: 'spotlightStyles',
                  get: function () {
                    var r = this.state.showSpotlight,
                      o = this.props,
                      i = o.disableScrollParentFix,
                      a = o.spotlightClicks,
                      s = o.spotlightPadding,
                      l = o.styles,
                      u = o.target,
                      c = Ce(u),
                      f = Xf(c),
                      p = bn(c),
                      d = X0(c, s, i);
                    return D(
                      D({}, Vu() ? l.spotlightLegacy : l.spotlight),
                      {},
                      {
                        height: Math.round(f.height + s * 2),
                        left: Math.round(f.left - s),
                        opacity: r ? 1 : 0,
                        pointerEvents: a ? 'none' : 'auto',
                        position: p ? 'fixed' : 'absolute',
                        top: d,
                        transition: 'opacity 0.2s',
                        width: Math.round(f.width + s * 2),
                      }
                    );
                  },
                },
                {
                  key: 'updateState',
                  value: function (r) {
                    this._isMounted && this.setState(r);
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var r = this.state,
                      o = r.mouseOverSpotlight,
                      i = r.showSpotlight,
                      a = this.props,
                      s = a.disableOverlay,
                      l = a.disableOverlayClose,
                      u = a.lifecycle,
                      c = a.onClickOverlay,
                      f = a.placement,
                      p = a.styles;
                    if (s || u !== _.TOOLTIP) return null;
                    var d = p.overlay;
                    Vu() &&
                      (d =
                        f === 'center'
                          ? p.overlayLegacyCenter
                          : p.overlayLegacy);
                    var h = D(
                        {
                          cursor: l ? 'default' : 'pointer',
                          height: W0(),
                          pointerEvents: o ? 'none' : 'auto',
                        },
                        d
                      ),
                      m =
                        f !== 'center' &&
                        i &&
                        g.createElement($0, { styles: this.spotlightStyles });
                    if (Gf() === 'safari') {
                      h.mixBlendMode, h.zIndex;
                      var y = Io(h, Wu);
                      (m = g.createElement('div', { style: D({}, y) }, m)),
                        delete h.backgroundColor;
                    }
                    return g.createElement(
                      'div',
                      {
                        className: 'react-joyride__overlay',
                        style: h,
                        onClick: c,
                      },
                      m
                    );
                  },
                },
              ]),
              n
            );
          })(g.Component)),
          (Zf = ['styles']),
          ($f = ['color', 'height', 'width']),
          (qu = (function (t) {
            Be(n, t);
            var e = Ue(n);
            function n() {
              return me(this, n), e.apply(this, arguments);
            }
            return (
              ve(n, [
                {
                  key: 'render',
                  value: function () {
                    var r = this.props,
                      o = r.backProps,
                      i = r.closeProps,
                      a = r.continuous,
                      s = r.index,
                      l = r.isLastStep,
                      u = r.primaryProps,
                      c = r.size,
                      f = r.skipProps,
                      p = r.step,
                      d = r.tooltipProps,
                      h = p.content,
                      m = p.hideBackButton,
                      y = p.hideCloseButton,
                      E = p.hideFooter,
                      x = p.showProgress,
                      b = p.showSkipButton,
                      w = p.title,
                      O = p.styles,
                      S = p.locale,
                      M = S.back,
                      N = S.close,
                      z = S.last,
                      X = S.next,
                      et = S.skip,
                      rt = { primary: N };
                    return (
                      a &&
                        ((rt.primary = l ? z : X),
                        x &&
                          (rt.primary = g.createElement(
                            'span',
                            null,
                            rt.primary,
                            ' (',
                            s + 1,
                            '/',
                            c,
                            ')'
                          ))),
                      b &&
                        !l &&
                        (rt.skip = g.createElement(
                          'button',
                          zt(
                            {
                              style: O.buttonSkip,
                              type: 'button',
                              'aria-live': 'off',
                            },
                            f
                          ),
                          et
                        )),
                      !m &&
                        s > 0 &&
                        (rt.back = g.createElement(
                          'button',
                          zt({ style: O.buttonBack, type: 'button' }, o),
                          M
                        )),
                      (rt.close =
                        !y &&
                        g.createElement(tb, zt({ styles: O.buttonClose }, i))),
                      g.createElement(
                        'div',
                        zt(
                          {
                            key: 'JoyrideTooltip',
                            className: 'react-joyride__tooltip',
                            style: O.tooltip,
                          },
                          d
                        ),
                        g.createElement(
                          'div',
                          { style: O.tooltipContainer },
                          w &&
                            g.createElement(
                              'h4',
                              { style: O.tooltipTitle, 'aria-label': w },
                              w
                            ),
                          g.createElement('div', { style: O.tooltipContent }, h)
                        ),
                        !E &&
                          g.createElement(
                            'div',
                            { style: O.tooltipFooter },
                            g.createElement(
                              'div',
                              { style: O.tooltipFooterSpacer },
                              rt.skip
                            ),
                            rt.back,
                            g.createElement(
                              'button',
                              zt({ style: O.buttonNext, type: 'button' }, u),
                              rt.primary
                            )
                          ),
                        rt.close
                      )
                    );
                  },
                },
              ]),
              n
            );
          })(g.Component)),
          (Gu = ['beaconComponent', 'tooltipComponent']),
          (Xu = (function (t) {
            Be(n, t);
            var e = Ue(n);
            function n() {
              var r;
              me(this, n);
              for (
                var o = arguments.length, i = new Array(o), a = 0;
                a < o;
                a++
              )
                i[a] = arguments[a];
              return (
                (r = e.call.apply(e, [this].concat(i))),
                H(pt(r), 'handleClickBack', function (s) {
                  s.preventDefault();
                  var l = r.props.helpers;
                  l.prev();
                }),
                H(pt(r), 'handleClickClose', function (s) {
                  s.preventDefault();
                  var l = r.props.helpers;
                  l.close();
                }),
                H(pt(r), 'handleClickPrimary', function (s) {
                  s.preventDefault();
                  var l = r.props,
                    u = l.continuous,
                    c = l.helpers;
                  if (!u) {
                    c.close();
                    return;
                  }
                  c.next();
                }),
                H(pt(r), 'handleClickSkip', function (s) {
                  s.preventDefault();
                  var l = r.props.helpers;
                  l.skip();
                }),
                H(pt(r), 'getElementsProps', function () {
                  var s = r.props,
                    l = s.continuous,
                    u = s.isLastStep,
                    c = s.setTooltipRef,
                    f = s.step,
                    p = er(f.locale.back),
                    d = er(f.locale.close),
                    h = er(f.locale.last),
                    m = er(f.locale.next),
                    y = er(f.locale.skip),
                    E = l ? m : d;
                  return (
                    u && (E = h),
                    {
                      backProps: {
                        'aria-label': p,
                        'data-action': 'back',
                        onClick: r.handleClickBack,
                        role: 'button',
                        title: p,
                      },
                      closeProps: {
                        'aria-label': d,
                        'data-action': 'close',
                        onClick: r.handleClickClose,
                        role: 'button',
                        title: d,
                      },
                      primaryProps: {
                        'aria-label': E,
                        'data-action': 'primary',
                        onClick: r.handleClickPrimary,
                        role: 'button',
                        title: E,
                      },
                      skipProps: {
                        'aria-label': y,
                        'data-action': 'skip',
                        onClick: r.handleClickSkip,
                        role: 'button',
                        title: y,
                      },
                      tooltipProps: {
                        'aria-modal': !0,
                        ref: c,
                        role: 'alertdialog',
                      },
                    }
                  );
                }),
                r
              );
            }
            return (
              ve(n, [
                {
                  key: 'render',
                  value: function () {
                    var r = this.props,
                      o = r.continuous,
                      i = r.index,
                      a = r.isLastStep,
                      s = r.size,
                      l = r.step;
                    l.beaconComponent;
                    var u = l.tooltipComponent,
                      c = Io(l, Gu),
                      f;
                    if (u) {
                      var p = D(
                          D({}, this.getElementsProps()),
                          {},
                          {
                            continuous: o,
                            index: i,
                            isLastStep: a,
                            size: s,
                            step: c,
                          }
                        ),
                        d = u;
                      f = g.createElement(d, p);
                    } else
                      f = g.createElement(
                        qu,
                        zt({}, this.getElementsProps(), {
                          continuous: o,
                          index: i,
                          isLastStep: a,
                          size: s,
                          step: l,
                        })
                      );
                    return f;
                  },
                },
              ]),
              n
            );
          })(g.Component)),
          (_u = (function (t) {
            Be(n, t);
            var e = Ue(n);
            function n() {
              return me(this, n), e.apply(this, arguments);
            }
            return (
              ve(n, [
                {
                  key: 'componentDidMount',
                  value: function () {
                    de && (fn || this.renderReact15());
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function () {
                    de && (fn || this.renderReact15());
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    !de ||
                      !this.node ||
                      (fn || oe.unmountComponentAtNode(this.node),
                      this.node.parentNode === document.body &&
                        (document.body.removeChild(this.node),
                        (this.node = void 0)));
                  },
                },
                {
                  key: 'appendNode',
                  value: function () {
                    var r = this.props.id;
                    this.node ||
                      ((this.node = document.createElement('div')),
                      r && (this.node.id = r),
                      document.body.appendChild(this.node));
                  },
                },
                {
                  key: 'renderReact15',
                  value: function () {
                    if (!de) return null;
                    var r = this.props.children;
                    return (
                      this.node || this.appendNode(),
                      oe.unstable_renderSubtreeIntoContainer(
                        this,
                        r,
                        this.node
                      ),
                      null
                    );
                  },
                },
                {
                  key: 'renderReact16',
                  value: function () {
                    if (!de || !fn) return null;
                    var r = this.props.children;
                    return (
                      this.node || this.appendNode(),
                      oe.createPortal(r, this.node)
                    );
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return fn ? this.renderReact16() : null;
                  },
                },
              ]),
              n
            );
          })(g.Component)),
          (Ku = (function (t) {
            Be(n, t);
            var e = Ue(n);
            function n() {
              var r;
              me(this, n);
              for (
                var o = arguments.length, i = new Array(o), a = 0;
                a < o;
                a++
              )
                i[a] = arguments[a];
              return (
                (r = e.call.apply(e, [this].concat(i))),
                H(pt(r), 'scope', { removeScope: function () {} }),
                H(pt(r), 'handleClickHoverBeacon', function (s) {
                  var l = r.props,
                    u = l.step,
                    c = l.update;
                  (s.type === 'mouseenter' && u.event !== 'hover') ||
                    c({ lifecycle: _.TOOLTIP });
                }),
                H(pt(r), 'handleClickOverlay', function () {
                  var s = r.props,
                    l = s.helpers,
                    u = s.step;
                  u.disableOverlayClose || l.close();
                }),
                H(pt(r), 'setTooltipRef', function (s) {
                  r.tooltip = s;
                }),
                H(pt(r), 'setPopper', function (s, l) {
                  var u = r.props,
                    c = u.action,
                    f = u.setPopper,
                    p = u.update;
                  l === 'wrapper'
                    ? (r.beaconPopper = s)
                    : (r.tooltipPopper = s),
                    f(s, l),
                    r.beaconPopper &&
                      r.tooltipPopper &&
                      p({
                        action: c === tt.CLOSE ? tt.CLOSE : c,
                        lifecycle: _.READY,
                      });
                }),
                r
              );
            }
            return (
              ve(n, [
                {
                  key: 'componentDidMount',
                  value: function () {
                    var r = this.props,
                      o = r.debug,
                      i = r.index;
                    _e({
                      title: 'step:'.concat(i),
                      data: [{ key: 'props', value: this.props }],
                      debug: o,
                    });
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function (r) {
                    var o = this.props,
                      i = o.action,
                      a = o.callback,
                      s = o.continuous,
                      l = o.controlled,
                      u = o.debug,
                      c = o.index,
                      f = o.lifecycle,
                      p = o.size,
                      d = o.status,
                      h = o.step,
                      m = o.update,
                      y = ur(r, this.props),
                      E = y.changed,
                      x = y.changedFrom,
                      b = {
                        action: i,
                        controlled: l,
                        index: c,
                        lifecycle: f,
                        size: p,
                        status: d,
                      },
                      w = s && i !== tt.CLOSE && (c > 0 || i === tt.PREV),
                      O =
                        E('action') ||
                        E('index') ||
                        E('lifecycle') ||
                        E('status'),
                      S = x('lifecycle', [_.TOOLTIP, _.INIT], _.INIT),
                      M = E('action', [tt.NEXT, tt.PREV, tt.SKIP, tt.CLOSE]);
                    if (
                      (M &&
                        (S || l) &&
                        a(
                          D(
                            D({}, b),
                            {},
                            {
                              index: r.index,
                              lifecycle: _.COMPLETE,
                              step: r.step,
                              type: Vt.STEP_AFTER,
                            }
                          )
                        ),
                      h.placement === 'center' &&
                        d === K.RUNNING &&
                        E('index') &&
                        i !== tt.START &&
                        f === _.INIT &&
                        m({ lifecycle: _.READY }),
                      O)
                    ) {
                      var N = Ce(h.target),
                        z = !!N,
                        X = z && G0(N);
                      X
                        ? (x('status', K.READY, K.RUNNING) ||
                            x('lifecycle', _.INIT, _.READY)) &&
                          a(D(D({}, b), {}, { step: h, type: Vt.STEP_BEFORE }))
                        : (console.warn(
                            z ? 'Target not visible' : 'Target not mounted',
                            h
                          ),
                          a(
                            D(
                              D({}, b),
                              {},
                              { type: Vt.TARGET_NOT_FOUND, step: h }
                            )
                          ),
                          l ||
                            m({
                              index: c + ([tt.PREV].indexOf(i) !== -1 ? -1 : 1),
                            }));
                    }
                    x('lifecycle', _.INIT, _.READY) &&
                      m({ lifecycle: Fu(h) || w ? _.TOOLTIP : _.BEACON }),
                      E('index') &&
                        _e({
                          title: 'step:'.concat(f),
                          data: [{ key: 'props', value: this.props }],
                          debug: u,
                        }),
                      E('lifecycle', _.BEACON) &&
                        a(D(D({}, b), {}, { step: h, type: Vt.BEACON })),
                      E('lifecycle', _.TOOLTIP) &&
                        (a(D(D({}, b), {}, { step: h, type: Vt.TOOLTIP })),
                        (this.scope = new Uu(this.tooltip, {
                          selector: '[data-action=primary]',
                        })),
                        this.scope.setFocus()),
                      x('lifecycle', [_.TOOLTIP, _.INIT], _.INIT) &&
                        (this.scope.removeScope(),
                        delete this.beaconPopper,
                        delete this.tooltipPopper);
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    this.scope.removeScope();
                  },
                },
                {
                  key: 'open',
                  get: function () {
                    var r = this.props,
                      o = r.step,
                      i = r.lifecycle;
                    return !!(Fu(o) || i === _.TOOLTIP);
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var r = this.props,
                      o = r.continuous,
                      i = r.debug,
                      a = r.helpers,
                      s = r.index,
                      l = r.lifecycle,
                      u = r.nonce,
                      c = r.shouldScroll,
                      f = r.size,
                      p = r.step,
                      d = Ce(p.target);
                    return !_f(p) || !ft.domElement(d)
                      ? null
                      : g.createElement(
                          'div',
                          {
                            key: 'JoyrideStep-'.concat(s),
                            className: 'react-joyride__step',
                          },
                          g.createElement(
                            _u,
                            { id: 'react-joyride-portal' },
                            g.createElement(
                              Yu,
                              zt({}, p, {
                                debug: i,
                                lifecycle: l,
                                onClickOverlay: this.handleClickOverlay,
                              })
                            )
                          ),
                          g.createElement(
                            co,
                            zt(
                              {
                                component: g.createElement(Xu, {
                                  continuous: o,
                                  helpers: a,
                                  index: s,
                                  isLastStep: s + 1 === f,
                                  setTooltipRef: this.setTooltipRef,
                                  size: f,
                                  step: p,
                                }),
                                debug: i,
                                getPopper: this.setPopper,
                                id: 'react-joyride-step-'.concat(s),
                                isPositioned: p.isFixed || bn(d),
                                open: this.open,
                                placement: p.placement,
                                target: p.target,
                              },
                              p.floaterProps
                            ),
                            g.createElement(Hu, {
                              beaconComponent: p.beaconComponent,
                              locale: p.locale,
                              nonce: u,
                              onClickOrHover: this.handleClickHoverBeacon,
                              shouldFocus: c,
                              styles: p.styles,
                            })
                          )
                        );
                  },
                },
              ]),
              n
            );
          })(g.Component)),
          (Ba = (function (t) {
            Be(n, t);
            var e = Ue(n);
            function n(r) {
              var o;
              return (
                me(this, n),
                (o = e.call(this, r)),
                H(pt(o), 'initStore', function () {
                  var i = o.props,
                    a = i.debug,
                    s = i.getHelpers,
                    l = i.run,
                    u = i.stepIndex;
                  (o.store = new H0(
                    D(D({}, o.props), {}, { controlled: l && ft.number(u) })
                  )),
                    (o.helpers = o.store.getHelpers());
                  var c = o.store.addListener;
                  return (
                    _e({
                      title: 'init',
                      data: [
                        { key: 'props', value: o.props },
                        { key: 'state', value: o.state },
                      ],
                      debug: a,
                    }),
                    c(o.syncState),
                    s(o.helpers),
                    o.store.getState()
                  );
                }),
                H(pt(o), 'callback', function (i) {
                  var a = o.props.callback;
                  ft.function(a) && a(i);
                }),
                H(pt(o), 'handleKeyboard', function (i) {
                  var a = o.state,
                    s = a.index,
                    l = a.lifecycle,
                    u = o.props.steps,
                    c = u[s],
                    f = window.Event ? i.which : i.keyCode;
                  l === _.TOOLTIP &&
                    f === 27 &&
                    c &&
                    !c.disableCloseOnEsc &&
                    o.store.close();
                }),
                H(pt(o), 'syncState', function (i) {
                  o.setState(i);
                }),
                H(pt(o), 'setPopper', function (i, a) {
                  a === 'wrapper'
                    ? (o.beaconPopper = i)
                    : (o.tooltipPopper = i);
                }),
                H(pt(o), 'shouldScroll', function (i, a, s, l, u, c, f) {
                  return (
                    !i &&
                    (a !== 0 || s || l === _.TOOLTIP) &&
                    u.placement !== 'center' &&
                    (!u.isFixed || !bn(c)) &&
                    f.lifecycle !== l &&
                    [_.BEACON, _.TOOLTIP].indexOf(l) !== -1
                  );
                }),
                (o.state = o.initStore()),
                o
              );
            }
            return (
              ve(n, [
                {
                  key: 'componentDidMount',
                  value: function () {
                    if (de) {
                      var r = this.props,
                        o = r.disableCloseOnEsc,
                        i = r.debug,
                        a = r.run,
                        s = r.steps,
                        l = this.store.start;
                      zu(s, i) && a && l(),
                        o ||
                          document.body.addEventListener(
                            'keydown',
                            this.handleKeyboard,
                            { passive: !0 }
                          );
                    }
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function (r, o) {
                    if (de) {
                      var i = this.state,
                        a = i.action,
                        s = i.controlled,
                        l = i.index,
                        u = i.lifecycle,
                        c = i.status,
                        f = this.props,
                        p = f.debug,
                        d = f.run,
                        h = f.stepIndex,
                        m = f.steps,
                        y = r.steps,
                        E = r.stepIndex,
                        x = this.store,
                        b = x.reset,
                        w = x.setSteps,
                        O = x.start,
                        S = x.stop,
                        M = x.update,
                        N = ur(r, this.props),
                        z = N.changed,
                        X = ur(o, this.state),
                        et = X.changed,
                        rt = X.changedFrom,
                        ht = nr(m[l], this.props),
                        Tt = !ja(y, m),
                        Ct = ft.number(h) && z('stepIndex'),
                        Ft = Ce(ht?.target);
                      if (
                        (Tt &&
                          (zu(m, p)
                            ? w(m)
                            : console.warn('Steps are not valid', m)),
                        z('run') && (d ? O(h) : S()),
                        Ct)
                      ) {
                        var St = E < h ? tt.NEXT : tt.PREV;
                        a === tt.STOP && (St = tt.START),
                          [K.FINISHED, K.SKIPPED].indexOf(c) === -1 &&
                            M({
                              action: a === tt.CLOSE ? tt.CLOSE : St,
                              index: h,
                              lifecycle: _.INIT,
                            });
                      }
                      !s &&
                        c === K.RUNNING &&
                        l === 0 &&
                        !Ft &&
                        (M({ index: l + 1 }),
                        this.callback(
                          D(
                            D({}, this.state),
                            {},
                            { type: Vt.TARGET_NOT_FOUND, step: ht }
                          )
                        ));
                      var It = D(D({}, this.state), {}, { index: l, step: ht }),
                        Wt = et('action', [
                          tt.NEXT,
                          tt.PREV,
                          tt.SKIP,
                          tt.CLOSE,
                        ]);
                      if (Wt && et('status', K.PAUSED)) {
                        var ne = nr(m[o.index], this.props);
                        this.callback(
                          D(
                            D({}, It),
                            {},
                            {
                              index: o.index,
                              lifecycle: _.COMPLETE,
                              step: ne,
                              type: Vt.STEP_AFTER,
                            }
                          )
                        );
                      }
                      if (et('status', [K.FINISHED, K.SKIPPED])) {
                        var Mt = nr(m[o.index], this.props);
                        s ||
                          this.callback(
                            D(
                              D({}, It),
                              {},
                              {
                                index: o.index,
                                lifecycle: _.COMPLETE,
                                step: Mt,
                                type: Vt.STEP_AFTER,
                              }
                            )
                          ),
                          this.callback(
                            D(
                              D({}, It),
                              {},
                              { index: o.index, step: Mt, type: Vt.TOUR_END }
                            )
                          ),
                          b();
                      } else
                        rt('status', [K.IDLE, K.READY], K.RUNNING)
                          ? this.callback(
                              D(D({}, It), {}, { type: Vt.TOUR_START })
                            )
                          : et('status')
                            ? this.callback(
                                D(D({}, It), {}, { type: Vt.TOUR_STATUS })
                              )
                            : et('action', tt.RESET) &&
                              this.callback(
                                D(D({}, It), {}, { type: Vt.TOUR_STATUS })
                              );
                      ht &&
                        (this.scrollToStep(o),
                        ht.placement === 'center' &&
                          c === K.RUNNING &&
                          a === tt.START &&
                          u === _.INIT &&
                          M({ lifecycle: _.READY }));
                    }
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    var r = this.props.disableCloseOnEsc;
                    r ||
                      document.body.removeEventListener(
                        'keydown',
                        this.handleKeyboard
                      );
                  },
                },
                {
                  key: 'scrollToStep',
                  value: function (r) {
                    var o = this.state,
                      i = o.index,
                      a = o.lifecycle,
                      s = o.status,
                      l = this.props,
                      u = l.debug,
                      c = l.disableScrollParentFix,
                      f = l.scrollToFirstStep,
                      p = l.scrollOffset,
                      d = l.scrollDuration,
                      h = l.steps,
                      m = nr(h[i], this.props);
                    if (m) {
                      var y = Ce(m.target),
                        E = this.shouldScroll(
                          m.disableScrolling,
                          i,
                          f,
                          a,
                          m,
                          y,
                          r
                        );
                      if (s === K.RUNNING && E) {
                        var x = Zo(y, c),
                          b = Lo(y, c),
                          w = Math.floor(_0(y, p, c)) || 0;
                        if (
                          (_e({
                            title: 'scrollToStep',
                            data: [
                              { key: 'index', value: i },
                              { key: 'lifecycle', value: a },
                              { key: 'status', value: s },
                            ],
                            debug: u,
                          }),
                          a === _.BEACON && this.beaconPopper)
                        ) {
                          var O = this.beaconPopper,
                            S = O.placement,
                            M = O.popper;
                          ['bottom'].indexOf(S) === -1 &&
                            !x &&
                            (w = Math.floor(M.top - p));
                        } else if (a === _.TOOLTIP && this.tooltipPopper) {
                          var N = this.tooltipPopper,
                            z = N.flipped,
                            X = N.placement,
                            et = N.popper;
                          ['top', 'right', 'left'].indexOf(X) !== -1 && !z && !x
                            ? (w = Math.floor(et.top - p))
                            : (w -= m.spotlightPadding);
                        }
                        (w = w >= 0 ? w : 0), s === K.RUNNING && K0(w, b, d);
                      }
                    }
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    if (!de) return null;
                    var r = this.state,
                      o = r.index,
                      i = r.status,
                      a = this.props,
                      s = a.continuous,
                      l = a.debug,
                      u = a.nonce,
                      c = a.scrollToFirstStep,
                      f = a.steps,
                      p = nr(f[o], this.props),
                      d;
                    return (
                      i === K.RUNNING &&
                        p &&
                        (d = g.createElement(
                          Ku,
                          zt({}, this.state, {
                            callback: this.callback,
                            continuous: s,
                            debug: l,
                            setPopper: this.setPopper,
                            helpers: this.helpers,
                            nonce: u,
                            shouldScroll: !p.disableScrolling && (o !== 0 || c),
                            step: p,
                            update: this.store.update,
                          })
                        )),
                      g.createElement('div', { className: 'react-joyride' }, d)
                    );
                  },
                },
              ]),
              n
            );
          })(g.Component)),
          H(Ba, 'defaultProps', {
            continuous: !1,
            debug: !1,
            disableCloseOnEsc: !1,
            disableOverlay: !1,
            disableOverlayClose: !1,
            disableScrolling: !1,
            disableScrollParentFix: !1,
            getHelpers: function () {},
            hideBackButton: !1,
            run: !0,
            scrollOffset: 20,
            scrollDuration: 300,
            scrollToFirstStep: !1,
            showSkipButton: !1,
            showProgress: !1,
            spotlightClicks: !1,
            spotlightPadding: 10,
            steps: [],
          });
      });
    function nb({ targetSelector: t }) {
      return (
        W(() => {
          let e = document.querySelector(t);
          if (e) {
            (e.style.animation = 'pulsate 3s infinite'),
              (e.style.transformOrigin = 'center'),
              (e.style.animationTimingFunction = 'ease-in-out');
            let n = `
        @keyframes pulsate {
          0% {
            box-shadow: 0 0 0 0 rgba(2, 156, 253, 0.7), 0 0 0 0 rgba(2, 156, 253, 0.4);
          }
          50% {
            box-shadow: 0 0 0 20px rgba(2, 156, 253, 0), 0 0 0 40px rgba(2, 156, 253, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(2, 156, 253, 0), 0 0 0 0 rgba(2, 156, 253, 0);
          }
        }
      `,
              r = document.createElement('style');
            (r.id = 'sb-onboarding-pulsating-effect'),
              (r.innerHTML = n),
              document.head.appendChild(r);
          }
          return () => {
            let n = document.querySelector('#sb-onboarding-pulsating-effect');
            n && n.remove(), e && (e.style.animation = 'auto');
          };
        }, [t]),
        null
      );
    }
    var rb = v(() => {});
    function td({
      top: t = 0,
      left: e = 0,
      width: n = window.innerWidth,
      height: r = window.innerHeight,
      colors: o = [
        '#CA90FF',
        '#FC521F',
        '#66BF3C',
        '#FF4785',
        '#FFAE00',
        '#1EA7FD',
      ],
      ...i
    }) {
      let [a] = at(() => {
        let s = document.createElement('div');
        return (
          s.setAttribute('id', 'confetti-container'),
          s.setAttribute(
            'style',
            'position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 9999;'
          ),
          s
        );
      });
      return (
        W(
          () => (
            document.body.appendChild(a),
            () => {
              document.body.removeChild(a);
            }
          ),
          []
        ),
        Ci(
          g.createElement(
            ed,
            { top: t, left: e, width: n, height: r },
            g.createElement(vf.default, { colors: o, drawShape: ib, ...i })
          ),
          a
        )
      );
    }
    function ob(t, e) {
      return Math.floor(Math.random() * (e - t)) + t;
    }
    function ib(t) {
      switch (((this.shape = this.shape || ob(1, 6)), this.shape)) {
        case 2: {
          let e = this.w / 2,
            n = this.h / 2;
          t.moveTo(-e + 2, -n),
            t.lineTo(e - 2, -n),
            t.arcTo(e, -n, e, -n + 2, 2),
            t.lineTo(e, n - 2),
            t.arcTo(e, n, e - 2, n, 2),
            t.lineTo(-e + 2, n),
            t.arcTo(-e, n, -e, n - 2, 2),
            t.lineTo(-e, -n + 2),
            t.arcTo(-e, -n, -e + 2, -n, 2);
          break;
        }
        case 3: {
          t.rect(-4, -4, 8, 16), t.rect(-12, -4, 24, 8);
          break;
        }
        case 4: {
          t.rect(-4, -4, 8, 16), t.rect(-4, -4, 24, 8);
          break;
        }
        case 1: {
          t.arc(0, 0, this.radius, 0, 2 * Math.PI);
          break;
        }
        case 5: {
          t.moveTo(16, 4), t.lineTo(4, 24), t.lineTo(24, 24);
          break;
        }
        case 6: {
          t.arc(4, -4, 4, -Math.PI / 2, 0), t.lineTo(4, 0);
          break;
        }
      }
      t.closePath(), t.fill();
    }
    var ed,
      nd = v(() => {
        ed = Y.div(({ width: t, height: e, left: n, top: r }) => ({
          width: `${t}px`,
          height: `${e}px`,
          left: `${n}px`,
          top: `${r}px`,
          position: 'relative',
          overflow: 'hidden',
        }));
      }),
      Qu,
      Bt,
      Ds = v(() => {
        (Qu = Y.button`
  all: unset;
  box-sizing: border-box;
  border: 0;
  border-radius: 0.25rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.75rem;
  background: ${({ theme: t, variant: e }) => (e === 'primary' ? t.color.secondary : e === 'secondary' ? t.color.lighter : e === 'outline' ? 'transparent' : t.color.secondary)};
  color: ${({ theme: t, variant: e }) => (e === 'primary' ? t.color.lightest : e === 'secondary' || e === 'outline' ? t.darkest : t.color.lightest)};
  box-shadow: ${({ variant: t }) => (t === 'primary' ? 'none' : t === 'secondary' || t === 'outline' ? '#D9E8F2 0 0 0 1px inset' : 'none')};
  height: 32px;
  font-size: 0.8125rem;
  font-weight: 700;
  font-family: ${({ theme: t }) => t.typography.fonts.base};
  transition: background-color, box-shadow, opacity;
  transition-duration: 0.16s;
  transition-timing-function: ease-in-out;
  text-decoration: none;

  &:hover {
    background-color: ${({ variant: t }) => (t === 'primary' ? '#0b94eb' : t === 'secondary' ? '#eef4f9' : t === 'outline' ? 'transparent' : '#0b94eb')};
  }

  &:focus {
    box-shadow: ${({ variant: t }) => (t === 'primary' ? 'inset 0 0 0 1px rgba(0, 0, 0, 0.2)' : t === 'secondary' || t === 'outline' ? 'inset 0 0 0 1px #0b94eb' : 'inset 0 0 0 2px rgba(0, 0, 0, 0.1)')};
  }
`),
          (Bt = ct(
            ({ children: t, onClick: e, variant: n = 'primary', ...r }, o) =>
              g.createElement(Qu, { ref: o, onClick: e, variant: n, ...r }, t)
          ));
      }),
      Ju,
      Zu,
      $u,
      tc,
      ec,
      rd,
      ab = v(() => {
        Ds(),
          (Ju = Y.div`
  background: ${({ theme: t }) => (t.base === 'dark' ? '#292A2C' : t.color.lightest)};
  width: 260px;
  padding: 15px;
  border-radius: 5px;
`),
          (Zu = Y.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`),
          ($u = Y.div`
  font-size: 13px;
  line-height: 18px;
  font-weight: 700;
  color: ${({ theme: t }) => t.color.defaultText};
`),
          (tc = Y.p`
  font-size: 13px;
  line-height: 18px;
  text-align: start;
  color: ${({ theme: t }) => t.color.defaultText};
  margin: 0;
  margin-top: 5px;
`),
          (ec = Y.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
`),
          (rd = ({ step: t, primaryProps: e, tooltipProps: n }) =>
            g.createElement(
              Ju,
              { ...n },
              g.createElement(
                Zu,
                null,
                t.title && g.createElement($u, null, t.title),
                g.createElement(tc, null, t.content)
              ),
              !t.hideNextButton &&
                g.createElement(
                  ec,
                  { id: 'buttonNext' },
                  g.createElement(
                    Bt,
                    {
                      ...e,
                      ...(t.onNextButtonClick
                        ? { onClick: t.onNextButtonClick }
                        : {}),
                    },
                    'Next'
                  )
                )
            ));
      }),
      od,
      id,
      ad,
      sd,
      ld,
      br,
      fo,
      ud,
      nc,
      cd,
      rc,
      pd,
      oc,
      fd,
      cr,
      dd,
      hd = v(() => {
        (od = Y.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  max-height: 85vh;

  &:focus-visible {
    outline: none;
  }
`),
          (id = Y.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  font-family: ${({ theme: t }) => t.typography.fonts.base};
`),
          (ad = Y.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  height: 44px;
`),
          (sd = Y.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  line-height: 18px;
  font-weight: bold;
  color: ${({ theme: t }) => t.color.darkest};
`),
          (ld = Y.div`
  font-size: 13px;
  line-height: 18px;
  padding: 15px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  color: ${({ theme: t }) => t.color.darker};

  h3 {
    font-size: 13px;
    line-height: 18px;
    font-weight: bold;
    padding: 0;
    margin: 0;
  }
`),
          (br = Y.span`
  display: inline-flex;
  border-radius: 3px;
  padding: 0 5px;
  margin-bottom: -2px;
  opacity: 0.8;
  font-family: ${({ theme: t }) => t.typography.fonts.mono};
  font-size: 11px;
  border: 1px solid #ecf4f9;
  color: ${({ theme: t }) => t.color.darkest};
  background-color: #f7fafc;
  box-sizing: border-box;
  line-height: 17px;
`),
          (fo = Y.img`
  max-width: 100%;
  margin-top: 1em;
`),
          (ud = Y.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`),
          (nc = ze`
  0% { transform: translate(0px, 0px) }
  50% { transform: translate(120px, 0px) }
  100% { transform: translate(0px, 0px) }
`),
          (cd = Y.div`
  position: absolute;
  width: 350px;
  height: 350px;
  left: -160px;
  top: -260px;
  background: radial-gradient(
    circle at center,
    rgba(255, 119, 119, 1) 0%,
    rgba(255, 119, 119, 0) 70%
  );
  animation: ${nc} 8s linear infinite;
  animation-timing-function: ease-in-out;
  z-index: 2;
`),
          (rc = ze`
  0% { transform: translate(0px, 0px) }
  33% { transform: translate(-64px, 0px) }
  66% { transform: translate(120px, 0px) }
  100% { transform: translate(0px, 0px) }
`),
          (pd = Y.div`
  position: absolute;
  width: 350px;
  height: 350px;
  left: -54px;
  top: -250px;
  background: radial-gradient(
    circle at center,
    rgba(253, 255, 147, 1) 0%,
    rgba(253, 255, 147, 0) 70%
  );
  animation: ${rc} 12s linear infinite;
  animation-timing-function: ease-in-out;
  z-index: 3;
`),
          (oc = ze`
  0% { transform: translate(0px, 0px) }
  50% { transform: translate(-120px, 0px) }
  100% { transform: translate(0px, 0px) }
`),
          (fd = Y.div`
  position: absolute;
  width: 350px;
  height: 350px;
  left: 150px;
  top: -220px;
  background: radial-gradient(
    circle at center,
    rgba(119, 255, 247, 0.8) 0%,
    rgba(119, 255, 247, 0) 70%
  );
  animation: ${oc} 4s linear infinite;
  animation-timing-function: ease-in-out;
  z-index: 4;
`),
          (cr = Y.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 4px;
`),
          (dd = Y.div`
  margin-bottom: 4px;
`);
      });
    function sb({
      api: t,
      isFinalStep: e,
      onFirstTourDone: n,
      onLastTourDone: r,
      codeSnippets: o,
    }) {
      let [i, a] = at(),
        s = Mi();
      W(() => {
        t.once(ou, () => {
          a(3);
        });
      }, []);
      let l = Nt(
          () =>
            document.querySelector('#root div[role=main]') ||
            document.querySelector('#storybook-panel-root'),
          []
        ),
        u = e
          ? [
              {
                target: '#example-button--warning',
                title: 'Congratulations!',
                content: g.createElement(
                  g.Fragment,
                  null,
                  'You just created your first story. Continue setting up your project to write stories for your own components.'
                ),
                placement: 'right',
                disableOverlay: !0,
                disableBeacon: !0,
                floaterProps: { disableAnimation: !0 },
                onNextButtonClick() {
                  r();
                },
              },
            ]
          : [
              {
                target: '#storybook-explorer-tree > div',
                title: 'Storybook is built from stories',
                content: g.createElement(
                  g.Fragment,
                  null,
                  'Storybook stories represent the key states of each of your components.',
                  g.createElement('br', null),
                  g.createElement('br', null),
                  o?.filename &&
                    g.createElement(
                      g.Fragment,
                      null,
                      'We automatically added four stories for this Button component in this example file:',
                      g.createElement('br', null),
                      g.createElement(br, null, o.filename)
                    )
                ),
                placement: 'right',
                disableBeacon: !0,
                styles: { spotlight: { transform: 'translateY(30px)' } },
                floaterProps: { disableAnimation: !0 },
              },
              {
                target: '#storybook-preview-iframe',
                title: 'Storybook previews are interactive',
                content:
                  'Whenever you modify code or stories, Storybook automatically updates how it previews your components.',
                placement: 'bottom',
                styles: { spotlight: { borderRadius: 0 } },
              },
              {
                target: l,
                title: 'Interactive story playground',
                content: g.createElement(
                  g.Fragment,
                  null,
                  'See how a story renders with different data and state without touching code.',
                  g.createElement('br', null),
                  g.createElement('br', null),
                  'Try it out by pressing this button.',
                  g.createElement(nb, { targetSelector: '#control-primary' })
                ),
                placement: 'right',
                spotlightClicks: !0,
                floaterProps: {
                  target: '#control-primary',
                  options: { preventOverflow: { boundariesElement: 'window' } },
                },
                hideNextButton: !0,
              },
              {
                target: '#control-primary',
                title: 'Congratulations!',
                content: g.createElement(
                  g.Fragment,
                  null,
                  "You learned how to control your stories interactively. Now let's explore how to write your first story.",
                  g.createElement(td, {
                    numberOfPieces: 800,
                    recycle: !1,
                    tweenDuration: 2e4,
                  })
                ),
                placement: 'right',
                floaterProps: {
                  options: { preventOverflow: { boundariesElement: 'window' } },
                },
                disableOverlay: !0,
              },
            ];
      return g.createElement(Ba, {
        steps: u,
        continuous: !0,
        stepIndex: i,
        spotlightPadding: 0,
        hideBackButton: !0,
        disableCloseOnEsc: !0,
        disableOverlayClose: !0,
        disableScrolling: !0,
        hideCloseButton: !0,
        callback: (c) => {
          !e && c.status === K.FINISHED && n();
        },
        floaterProps: {
          options: { offset: { offset: '0, 6' } },
          styles: {
            floater: {
              padding: 0,
              paddingLeft: 8,
              paddingTop: 8,
              filter:
                s.base === 'light'
                  ? 'drop-shadow(0px 5px 5px rgba(0,0,0,0.05)) drop-shadow(0 1px 3px rgba(0,0,0,0.1))'
                  : 'drop-shadow(#fff5 0px 0px 0.5px) drop-shadow(#fff5 0px 0px 0.5px)',
            },
          },
        },
        tooltipComponent: rd,
        styles: {
          overlay: { mixBlendMode: 'unset', backgroundColor: 'none' },
          spotlight: {
            backgroundColor: 'none',
            border: `solid 2px ${s.color.secondary}`,
            boxShadow: '0px 0px 0px 9999px rgba(0,0,0,0.4)',
          },
          options: {
            zIndex: 1e4,
            primaryColor: s.color.secondary,
            arrowColor: s.base === 'dark' ? '#292A2C' : s.color.lightest,
          },
        },
      });
    }
    var lb = v(() => {
      eb(), rb(), nd(), ab(), hd();
    });
    function Ot() {
      return (
        (Ot = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }),
        Ot.apply(this, arguments)
      );
    }
    var Vn = v(() => {});
    function Ke(t, e, { checkForDefaultPrevented: n = !0 } = {}) {
      return function (r) {
        if ((t?.(r), n === !1 || !r.defaultPrevented)) return e?.(r);
      };
    }
    var md = v(() => {});
    function ub(t, e) {
      typeof t == 'function' ? t(e) : t != null && (t.current = e);
    }
    function vd(...t) {
      return (e) => t.forEach((n) => ub(n, e));
    }
    function Cr(...t) {
      return xt(vd(...t), t);
    }
    var jr = v(() => {});
    function cb(t, e) {
      let n = Yt(e);
      function r(i) {
        let { children: a, ...s } = i,
          l = Nt(() => s, Object.values(s));
        return q(n.Provider, { value: l }, a);
      }
      function o(i) {
        let a = mt(n);
        if (a) return a;
        if (e !== void 0) return e;
        throw new Error(`\`${i}\` must be used within \`${t}\``);
      }
      return (r.displayName = t + 'Provider'), [r, o];
    }
    function pb(t, e = []) {
      let n = [];
      function r(i, a) {
        let s = Yt(a),
          l = n.length;
        n = [...n, a];
        function u(f) {
          let { scope: p, children: d, ...h } = f,
            m = p?.[t][l] || s,
            y = Nt(() => h, Object.values(h));
          return q(m.Provider, { value: y }, d);
        }
        function c(f, p) {
          let d = p?.[t][l] || s,
            h = mt(d);
          if (h) return h;
          if (a !== void 0) return a;
          throw new Error(`\`${f}\` must be used within \`${i}\``);
        }
        return (u.displayName = i + 'Provider'), [u, c];
      }
      let o = () => {
        let i = n.map((a) => Yt(a));
        return function (a) {
          let s = a?.[t] || i;
          return Nt(() => ({ [`__scope${t}`]: { ...a, [t]: s } }), [a, s]);
        };
      };
      return (o.scopeName = t), [r, fb(o, ...e)];
    }
    function fb(...t) {
      let e = t[0];
      if (t.length === 1) return e;
      let n = () => {
        let r = t.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
        return function (o) {
          let i = r.reduce((a, { useScope: s, scopeName: l }) => {
            let u = s(o)[`__scope${l}`];
            return { ...a, ...u };
          }, {});
          return Nt(() => ({ [`__scope${e.scopeName}`]: i }), [i]);
        };
      };
      return (n.scopeName = e.scopeName), n;
    }
    var db = v(() => {}),
      jo,
      gd = v(() => {
        jo = globalThis?.document ? Wn : () => {};
      });
    function Yi(t) {
      let [e, n] = at(yd());
      return (
        jo(() => {
          t || n((r) => r ?? String(bd++));
        }, [t]),
        t || (e ? `radix-${e}` : '')
      );
    }
    var yd,
      bd,
      hb = v(() => {
        gd(), (yd = Yn['useId'.toString()] || (() => {})), (bd = 0);
      });
    function $e(t) {
      let e = nt(t);
      return (
        W(() => {
          e.current = t;
        }),
        Nt(
          () =>
            (...n) => {
              var r;
              return (r = e.current) === null || r === void 0
                ? void 0
                : r.call(e, ...n);
            },
          []
        )
      );
    }
    var $o = v(() => {});
    function mb({ prop: t, defaultProp: e, onChange: n = () => {} }) {
      let [r, o] = vb({ defaultProp: e, onChange: n }),
        i = t !== void 0,
        a = i ? t : r,
        s = $e(n),
        l = xt(
          (u) => {
            if (i) {
              let c = typeof u == 'function' ? u(t) : u;
              c !== t && s(c);
            } else o(u);
          },
          [i, t, o, s]
        );
      return [a, l];
    }
    function vb({ defaultProp: t, onChange: e }) {
      let n = at(t),
        [r] = n,
        o = nt(r),
        i = $e(e);
      return (
        W(() => {
          o.current !== r && (i(r), (o.current = r));
        }, [r, o, i]),
        n
      );
    }
    var gb = v(() => {
      $o();
    });
    function yb(t) {
      return Pe(t) && t.type === wd;
    }
    function bb(t, e) {
      let n = { ...e };
      for (let r in e) {
        let o = t[r],
          i = e[r];
        /^on[A-Z]/.test(r)
          ? o && i
            ? (n[r] = (...a) => {
                i(...a), o(...a);
              })
            : o && (n[r] = o)
          : r === 'style'
            ? (n[r] = { ...o, ...i })
            : r === 'className' && (n[r] = [o, i].filter(Boolean).join(' '));
      }
      return { ...t, ...n };
    }
    var Fo,
      Gr,
      wd,
      Ed = v(() => {
        Vn(),
          jr(),
          (Fo = ct((t, e) => {
            let { children: n, ...r } = t,
              o = Gt.toArray(n),
              i = o.find(yb);
            if (i) {
              let a = i.props.children,
                s = o.map((l) =>
                  l === i
                    ? Gt.count(a) > 1
                      ? Gt.only(null)
                      : Pe(a)
                        ? a.props.children
                        : null
                    : l
                );
              return q(
                Gr,
                Ot({}, r, { ref: e }),
                Pe(a) ? Ve(a, void 0, s) : null
              );
            }
            return q(Gr, Ot({}, r, { ref: e }), n);
          })),
          (Fo.displayName = 'Slot'),
          (Gr = ct((t, e) => {
            let { children: n, ...r } = t;
            return Pe(n)
              ? Ve(n, { ...bb(r, n.props), ref: e ? vd(e, n.ref) : n.ref })
              : Gt.count(n) > 1
                ? Gt.only(null)
                : null;
          })),
          (Gr.displayName = 'SlotClone'),
          (wd = ({ children: t }) => q(Se, null, t));
      });
    function wb(t, e) {
      t && Ai(() => t.dispatchEvent(e));
    }
    var ic,
      De,
      ti = v(() => {
        Vn(),
          Ed(),
          (ic = [
            'a',
            'button',
            'div',
            'form',
            'h2',
            'h3',
            'img',
            'input',
            'label',
            'li',
            'nav',
            'ol',
            'p',
            'span',
            'svg',
            'ul',
          ]),
          (De = ic.reduce((t, e) => {
            let n = ct((r, o) => {
              let { asChild: i, ...a } = r,
                s = i ? Fo : e;
              return (
                W(() => {
                  window[Symbol.for('radix-ui')] = !0;
                }, []),
                q(s, Ot({}, a, { ref: o }))
              );
            });
            return (n.displayName = `Primitive.${e}`), { ...t, [e]: n };
          }, {}));
      });
    function Eb(t, e = globalThis?.document) {
      let n = $e(t);
      W(() => {
        let r = (o) => {
          o.key === 'Escape' && n(o);
        };
        return (
          e.addEventListener('keydown', r),
          () => e.removeEventListener('keydown', r)
        );
      }, [n, e]);
    }
    var xb = v(() => {
      $o();
    });
    function Ob(t, e = globalThis?.document) {
      let n = $e(t),
        r = nt(!1),
        o = nt(() => {});
      return (
        W(() => {
          let i = (s) => {
              if (s.target && !r.current) {
                let l = function () {
                    xd(Od, n, u, { discrete: !0 });
                  },
                  u = { originalEvent: s };
                s.pointerType === 'touch'
                  ? (e.removeEventListener('click', o.current),
                    (o.current = l),
                    e.addEventListener('click', o.current, { once: !0 }))
                  : l();
              }
              r.current = !1;
            },
            a = window.setTimeout(() => {
              e.addEventListener('pointerdown', i);
            }, 0);
          return () => {
            window.clearTimeout(a),
              e.removeEventListener('pointerdown', i),
              e.removeEventListener('click', o.current);
          };
        }, [e, n]),
        { onPointerDownCapture: () => (r.current = !0) }
      );
    }
    function Sb(t, e = globalThis?.document) {
      let n = $e(t),
        r = nt(!1);
      return (
        W(() => {
          let o = (i) => {
            i.target &&
              !r.current &&
              xd(Sd, n, { originalEvent: i }, { discrete: !1 });
          };
          return (
            e.addEventListener('focusin', o),
            () => e.removeEventListener('focusin', o)
          );
        }, [e, n]),
        {
          onFocusCapture: () => (r.current = !0),
          onBlurCapture: () => (r.current = !1),
        }
      );
    }
    function ac() {
      let t = new CustomEvent(ho);
      document.dispatchEvent(t);
    }
    function xd(t, e, n, { discrete: r }) {
      let o = n.originalEvent.target,
        i = new CustomEvent(t, { bubbles: !1, cancelable: !0, detail: n });
      e && o.addEventListener(t, e, { once: !0 }),
        r ? wb(o, i) : o.dispatchEvent(i);
    }
    var ho,
      Od,
      Sd,
      sc,
      lc,
      Pd,
      Pb = v(() => {
        Vn(),
          md(),
          ti(),
          jr(),
          $o(),
          xb(),
          (ho = 'dismissableLayer.update'),
          (Od = 'dismissableLayer.pointerDownOutside'),
          (Sd = 'dismissableLayer.focusOutside'),
          (lc = Yt({
            layers: new Set(),
            layersWithOutsidePointerEventsDisabled: new Set(),
            branches: new Set(),
          })),
          (Pd = ct((t, e) => {
            var n;
            let {
                disableOutsidePointerEvents: r = !1,
                onEscapeKeyDown: o,
                onPointerDownOutside: i,
                onFocusOutside: a,
                onInteractOutside: s,
                onDismiss: l,
                ...u
              } = t,
              c = mt(lc),
              [f, p] = at(null),
              d =
                (n = f?.ownerDocument) !== null && n !== void 0
                  ? n
                  : globalThis?.document,
              [, h] = at({}),
              m = Cr(e, (N) => p(N)),
              y = Array.from(c.layers),
              [E] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1),
              x = y.indexOf(E),
              b = f ? y.indexOf(f) : -1,
              w = c.layersWithOutsidePointerEventsDisabled.size > 0,
              O = b >= x,
              S = Ob((N) => {
                let z = N.target,
                  X = [...c.branches].some((et) => et.contains(z));
                !O || X || (i?.(N), s?.(N), N.defaultPrevented || l?.());
              }, d),
              M = Sb((N) => {
                let z = N.target;
                [...c.branches].some((X) => X.contains(z)) ||
                  (a?.(N), s?.(N), N.defaultPrevented || l?.());
              }, d);
            return (
              Eb((N) => {
                b === c.layers.size - 1 &&
                  (o?.(N),
                  !N.defaultPrevented && l && (N.preventDefault(), l()));
              }, d),
              W(() => {
                if (f)
                  return (
                    r &&
                      (c.layersWithOutsidePointerEventsDisabled.size === 0 &&
                        ((sc = d.body.style.pointerEvents),
                        (d.body.style.pointerEvents = 'none')),
                      c.layersWithOutsidePointerEventsDisabled.add(f)),
                    c.layers.add(f),
                    ac(),
                    () => {
                      r &&
                        c.layersWithOutsidePointerEventsDisabled.size === 1 &&
                        (d.body.style.pointerEvents = sc);
                    }
                  );
              }, [f, d, r, c]),
              W(
                () => () => {
                  f &&
                    (c.layers.delete(f),
                    c.layersWithOutsidePointerEventsDisabled.delete(f),
                    ac());
                },
                [f, c]
              ),
              W(() => {
                let N = () => h({});
                return (
                  document.addEventListener(ho, N),
                  () => document.removeEventListener(ho, N)
                );
              }, []),
              q(
                De.div,
                Ot({}, u, {
                  ref: m,
                  style: {
                    pointerEvents: w ? (O ? 'auto' : 'none') : void 0,
                    ...t.style,
                  },
                  onFocusCapture: Ke(t.onFocusCapture, M.onFocusCapture),
                  onBlurCapture: Ke(t.onBlurCapture, M.onBlurCapture),
                  onPointerDownCapture: Ke(
                    t.onPointerDownCapture,
                    S.onPointerDownCapture
                  ),
                })
              )
            );
          }));
      });
    function Tb(t, { select: e = !1 } = {}) {
      let n = document.activeElement;
      for (let r of t)
        if ((Ae(r, { select: e }), document.activeElement !== n)) return;
    }
    function Cb(t) {
      let e = Td(t),
        n = uc(e, t),
        r = uc(e.reverse(), t);
      return [n, r];
    }
    function Td(t) {
      let e = [],
        n = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
          acceptNode: (r) => {
            let o = r.tagName === 'INPUT' && r.type === 'hidden';
            return r.disabled || r.hidden || o
              ? NodeFilter.FILTER_SKIP
              : r.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
          },
        });
      for (; n.nextNode(); ) e.push(n.currentNode);
      return e;
    }
    function uc(t, e) {
      for (let n of t) if (!Ab(n, { upTo: e })) return n;
    }
    function Ab(t, { upTo: e }) {
      if (getComputedStyle(t).visibility === 'hidden') return !0;
      for (; t; ) {
        if (e !== void 0 && t === e) return !1;
        if (getComputedStyle(t).display === 'none') return !0;
        t = t.parentElement;
      }
      return !1;
    }
    function kb(t) {
      return t instanceof HTMLInputElement && 'select' in t;
    }
    function Ae(t, { select: e = !1 } = {}) {
      if (t && t.focus) {
        let n = document.activeElement;
        t.focus({ preventScroll: !0 }), t !== n && kb(t) && e && t.select();
      }
    }
    function Rb() {
      let t = [];
      return {
        add(e) {
          let n = t[0];
          e !== n && n?.pause(), (t = cc(t, e)), t.unshift(e);
        },
        remove(e) {
          var n;
          (t = cc(t, e)), (n = t[0]) === null || n === void 0 || n.resume();
        },
      };
    }
    function cc(t, e) {
      let n = [...t],
        r = n.indexOf(e);
      return r !== -1 && n.splice(r, 1), n;
    }
    function Mb(t) {
      return t.filter((e) => e.tagName !== 'A');
    }
    var Xr,
      _r,
      qi,
      Cd,
      Gi,
      Db = v(() => {
        Vn(),
          jr(),
          ti(),
          $o(),
          (Xr = 'focusScope.autoFocusOnMount'),
          (_r = 'focusScope.autoFocusOnUnmount'),
          (qi = { bubbles: !1, cancelable: !0 }),
          (Cd = ct((t, e) => {
            let {
                loop: n = !1,
                trapped: r = !1,
                onMountAutoFocus: o,
                onUnmountAutoFocus: i,
                ...a
              } = t,
              [s, l] = at(null),
              u = $e(o),
              c = $e(i),
              f = nt(null),
              p = Cr(e, (m) => l(m)),
              d = nt({
                paused: !1,
                pause() {
                  this.paused = !0;
                },
                resume() {
                  this.paused = !1;
                },
              }).current;
            W(() => {
              if (r) {
                let m = function (b) {
                    if (d.paused || !s) return;
                    let w = b.target;
                    s.contains(w)
                      ? (f.current = w)
                      : Ae(f.current, { select: !0 });
                  },
                  y = function (b) {
                    if (d.paused || !s) return;
                    let w = b.relatedTarget;
                    w !== null &&
                      (s.contains(w) || Ae(f.current, { select: !0 }));
                  },
                  E = function (b) {
                    let w = document.activeElement;
                    for (let O of b)
                      O.removedNodes.length > 0 &&
                        ((s != null && s.contains(w)) || Ae(s));
                  };
                document.addEventListener('focusin', m),
                  document.addEventListener('focusout', y);
                let x = new MutationObserver(E);
                return (
                  s && x.observe(s, { childList: !0, subtree: !0 }),
                  () => {
                    document.removeEventListener('focusin', m),
                      document.removeEventListener('focusout', y),
                      x.disconnect();
                  }
                );
              }
            }, [r, s, d.paused]),
              W(() => {
                if (s) {
                  Gi.add(d);
                  let m = document.activeElement;
                  if (!s.contains(m)) {
                    let y = new CustomEvent(Xr, qi);
                    s.addEventListener(Xr, u),
                      s.dispatchEvent(y),
                      y.defaultPrevented ||
                        (Tb(Mb(Td(s)), { select: !0 }),
                        document.activeElement === m && Ae(s));
                  }
                  return () => {
                    s.removeEventListener(Xr, u),
                      setTimeout(() => {
                        let y = new CustomEvent(_r, qi);
                        s.addEventListener(_r, c),
                          s.dispatchEvent(y),
                          y.defaultPrevented ||
                            Ae(m ?? document.body, { select: !0 }),
                          s.removeEventListener(_r, c),
                          Gi.remove(d);
                      }, 0);
                  };
                }
              }, [s, u, c, d]);
            let h = xt(
              (m) => {
                if ((!n && !r) || d.paused) return;
                let y =
                    m.key === 'Tab' && !m.altKey && !m.ctrlKey && !m.metaKey,
                  E = document.activeElement;
                if (y && E) {
                  let x = m.currentTarget,
                    [b, w] = Cb(x);
                  b && w
                    ? !m.shiftKey && E === w
                      ? (m.preventDefault(), n && Ae(b, { select: !0 }))
                      : m.shiftKey &&
                        E === b &&
                        (m.preventDefault(), n && Ae(w, { select: !0 }))
                    : E === x && m.preventDefault();
                }
              },
              [n, r, d.paused]
            );
            return q(De.div, Ot({ tabIndex: -1 }, a, { ref: p, onKeyDown: h }));
          })),
          (Gi = Rb());
      }),
      Ad,
      Nb = v(() => {
        Vn(),
          ti(),
          (Ad = ct((t, e) => {
            var n;
            let {
              container: r = globalThis == null ||
              (n = globalThis.document) === null ||
              n === void 0
                ? void 0
                : n.body,
              ...o
            } = t;
            return r
              ? oe.createPortal(q(De.div, Ot({}, o, { ref: e })), r)
              : null;
          }));
      });
    function Ib(t, e) {
      return Ti((n, r) => e[n][r] ?? n, t);
    }
    function Lb(t) {
      let [e, n] = at(),
        r = nt({}),
        o = nt(t),
        i = nt('none'),
        a = t ? 'mounted' : 'unmounted',
        [s, l] = Ib(a, {
          mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
          unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
          unmounted: { MOUNT: 'mounted' },
        });
      return (
        W(() => {
          let u = Kr(r.current);
          i.current = s === 'mounted' ? u : 'none';
        }, [s]),
        jo(() => {
          let u = r.current,
            c = o.current;
          if (c !== t) {
            let f = i.current,
              p = Kr(u);
            t
              ? l('MOUNT')
              : p === 'none' || u?.display === 'none'
                ? l('UNMOUNT')
                : l(c && f !== p ? 'ANIMATION_OUT' : 'UNMOUNT'),
              (o.current = t);
          }
        }, [t, l]),
        jo(() => {
          if (e) {
            let u = (f) => {
                let p = Kr(r.current).includes(f.animationName);
                f.target === e && p && Ai(() => l('ANIMATION_END'));
              },
              c = (f) => {
                f.target === e && (i.current = Kr(r.current));
              };
            return (
              e.addEventListener('animationstart', c),
              e.addEventListener('animationcancel', u),
              e.addEventListener('animationend', u),
              () => {
                e.removeEventListener('animationstart', c),
                  e.removeEventListener('animationcancel', u),
                  e.removeEventListener('animationend', u);
              }
            );
          } else l('ANIMATION_END');
        }, [e, l]),
        {
          isPresent: ['mounted', 'unmountSuspended'].includes(s),
          ref: xt((u) => {
            u && (r.current = getComputedStyle(u)), n(u);
          }, []),
        }
      );
    }
    function Kr(t) {
      return t?.animationName || 'none';
    }
    var wr,
      jb = v(() => {
        jr(),
          gd(),
          (wr = (t) => {
            let { present: e, children: n } = t,
              r = Lb(e),
              o =
                typeof n == 'function'
                  ? n({ present: r.isPresent })
                  : Gt.only(n),
              i = Cr(r.ref, o.ref);
            return typeof n == 'function' || r.isPresent
              ? Ve(o, { ref: i })
              : null;
          }),
          (wr.displayName = 'Presence');
      });
    function Fb() {
      W(() => {
        var t, e;
        let n = document.querySelectorAll('[data-radix-focus-guard]');
        return (
          document.body.insertAdjacentElement(
            'afterbegin',
            (t = n[0]) !== null && t !== void 0 ? t : pc()
          ),
          document.body.insertAdjacentElement(
            'beforeend',
            (e = n[1]) !== null && e !== void 0 ? e : pc()
          ),
          mo++,
          () => {
            mo === 1 &&
              document
                .querySelectorAll('[data-radix-focus-guard]')
                .forEach((r) => r.remove()),
              mo--;
          }
        );
      }, []);
    }
    function pc() {
      let t = document.createElement('span');
      return (
        t.setAttribute('data-radix-focus-guard', ''),
        (t.tabIndex = 0),
        (t.style.cssText =
          'outline: none; opacity: 0; position: fixed; pointer-events: none'),
        t
      );
    }
    var mo,
      Vb = v(() => {
        mo = 0;
      });
    function kd(t, e) {
      if (typeof e != 'function' && e !== null)
        throw new TypeError(
          'Class extends value ' + String(e) + ' is not a constructor or null'
        );
      vo(t, e);
      function n() {
        this.constructor = t;
      }
      t.prototype =
        e === null ? Object.create(e) : ((n.prototype = e.prototype), new n());
    }
    function jt(t, e) {
      var n = {};
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) &&
          e.indexOf(r) < 0 &&
          (n[r] = t[r]);
      if (t != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++)
          e.indexOf(r[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(t, r[o]) &&
            (n[r[o]] = t[r[o]]);
      return n;
    }
    function bt(t, e) {
      var n = typeof Symbol == 'function' && t[Symbol.iterator];
      if (!n) return t;
      var r = n.call(t),
        o,
        i = [],
        a;
      try {
        for (; (e === void 0 || e-- > 0) && !(o = r.next()).done; )
          i.push(o.value);
      } catch (s) {
        a = { error: s };
      } finally {
        try {
          o && !o.done && (n = r.return) && n.call(r);
        } finally {
          if (a) throw a.error;
        }
      }
      return i;
    }
    function $t(t, e, n) {
      if (n || arguments.length === 2)
        for (var r = 0, o = e.length, i; r < o; r++)
          (i || !(r in e)) &&
            (i || (i = Array.prototype.slice.call(e, 0, r)), (i[r] = e[r]));
      return t.concat(i || Array.prototype.slice.call(e));
    }
    var vo,
      A,
      G = v(() => {
        (vo = function (t, e) {
          return (
            (vo =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (n, r) {
                  n.__proto__ = r;
                }) ||
              function (n, r) {
                for (var o in r)
                  Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o]);
              }),
            vo(t, e)
          );
        }),
          (A = function () {
            return (
              (A =
                Object.assign ||
                function (t) {
                  for (var e, n = 1, r = arguments.length; n < r; n++) {
                    e = arguments[n];
                    for (var o in e)
                      Object.prototype.hasOwnProperty.call(e, o) &&
                        (t[o] = e[o]);
                  }
                  return t;
                }),
              A.apply(this, arguments)
            );
          });
      }),
      Er,
      xr,
      Rd,
      Md,
      Ns = v(() => {
        (Er = 'right-scroll-bar-position'),
          (xr = 'width-before-scroll-bar'),
          (Rd = 'with-scroll-bars-hidden'),
          (Md = '--removed-body-scroll-bar-size');
      });
    function zb(t, e) {
      return typeof t == 'function' ? t(e) : t && (t.current = e), t;
    }
    var Bb = v(() => {});
    function Ub(t, e) {
      var n = at(function () {
        return {
          value: t,
          callback: e,
          facade: {
            get current() {
              return n.value;
            },
            set current(r) {
              var o = n.value;
              o !== r && ((n.value = r), n.callback(r, o));
            },
          },
        };
      })[0];
      return (n.callback = e), n.facade;
    }
    var Hb = v(() => {});
    function Wb(t, e) {
      return Ub(e || null, function (n) {
        return t.forEach(function (r) {
          return zb(r, n);
        });
      });
    }
    var Yb = v(() => {
        Bb(), Hb();
      }),
      qb = v(() => {
        Yb();
      });
    function Gb(t) {
      return t;
    }
    function Xb(t, e) {
      e === void 0 && (e = Gb);
      var n = [],
        r = !1,
        o = {
          read: function () {
            if (r)
              throw new Error(
                'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.'
              );
            return n.length ? n[n.length - 1] : t;
          },
          useMedium: function (i) {
            var a = e(i, r);
            return (
              n.push(a),
              function () {
                n = n.filter(function (s) {
                  return s !== a;
                });
              }
            );
          },
          assignSyncMedium: function (i) {
            for (r = !0; n.length; ) {
              var a = n;
              (n = []), a.forEach(i);
            }
            n = {
              push: function (s) {
                return i(s);
              },
              filter: function () {
                return n;
              },
            };
          },
          assignMedium: function (i) {
            r = !0;
            var a = [];
            if (n.length) {
              var s = n;
              (n = []), s.forEach(i), (a = n);
            }
            var l = function () {
                var c = a;
                (a = []), c.forEach(i);
              },
              u = function () {
                return Promise.resolve().then(l);
              };
            u(),
              (n = {
                push: function (c) {
                  a.push(c), u();
                },
                filter: function (c) {
                  return (a = a.filter(c)), n;
                },
              });
          },
        };
      return o;
    }
    function _b(t) {
      t === void 0 && (t = {});
      var e = Xb(null);
      return (e.options = A({ async: !0, ssr: !1 }, t)), e;
    }
    var Kb = v(() => {
      G();
    });
    function Qb(t, e) {
      return t.useMedium(e), Ua;
    }
    var Ua,
      Jb = v(() => {
        G(),
          (Ua = function (t) {
            var e = t.sideCar,
              n = jt(t, ['sideCar']);
            if (!e)
              throw new Error(
                'Sidecar: please provide `sideCar` property to import the right car'
              );
            var r = e.read();
            if (!r) throw new Error('Sidecar medium not found');
            return q(r, A({}, n));
          }),
          (Ua.isSideCarExport = !0);
      }),
      Dd = v(() => {
        Kb(), Jb();
      }),
      Is,
      Nd = v(() => {
        Dd(), (Is = _b());
      }),
      Qr,
      Or,
      Zb = v(() => {
        G(),
          Ns(),
          qb(),
          Nd(),
          (Qr = function () {}),
          (Or = ct(function (t, e) {
            var n = nt(null),
              r = at({
                onScrollCapture: Qr,
                onWheelCapture: Qr,
                onTouchMoveCapture: Qr,
              }),
              o = r[0],
              i = r[1],
              a = t.forwardProps,
              s = t.children,
              l = t.className,
              u = t.removeScrollBar,
              c = t.enabled,
              f = t.shards,
              p = t.sideCar,
              d = t.noIsolation,
              h = t.inert,
              m = t.allowPinchZoom,
              y = t.as,
              E = y === void 0 ? 'div' : y,
              x = jt(t, [
                'forwardProps',
                'children',
                'className',
                'removeScrollBar',
                'enabled',
                'shards',
                'sideCar',
                'noIsolation',
                'inert',
                'allowPinchZoom',
                'as',
              ]),
              b = p,
              w = Wb([n, e]),
              O = A(A({}, x), o);
            return q(
              Se,
              null,
              c &&
                q(b, {
                  sideCar: Is,
                  removeScrollBar: u,
                  shards: f,
                  noIsolation: d,
                  inert: h,
                  setCallbacks: i,
                  allowPinchZoom: !!m,
                  lockRef: n,
                }),
              a
                ? Ve(Gt.only(s), A(A({}, O), { ref: w }))
                : q(E, A({}, O, { className: l, ref: w }), s)
            );
          })),
          (Or.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
          (Or.classNames = { fullWidth: xr, zeroRight: Er });
      }),
      Id,
      $b = v(() => {
        Id = function () {
          if (typeof __webpack_nonce__ < 'u') return __webpack_nonce__;
        };
      });
    function t1() {
      if (!document) return null;
      var t = document.createElement('style');
      t.type = 'text/css';
      var e = Id();
      return e && t.setAttribute('nonce', e), t;
    }
    function e1(t, e) {
      t.styleSheet
        ? (t.styleSheet.cssText = e)
        : t.appendChild(document.createTextNode(e));
    }
    function n1(t) {
      var e = document.head || document.getElementsByTagName('head')[0];
      e.appendChild(t);
    }
    var Ld,
      jd = v(() => {
        $b(),
          (Ld = function () {
            var t = 0,
              e = null;
            return {
              add: function (n) {
                t == 0 && (e = t1()) && (e1(e, n), n1(e)), t++;
              },
              remove: function () {
                t--,
                  !t &&
                    e &&
                    (e.parentNode && e.parentNode.removeChild(e), (e = null));
              },
            };
          });
      }),
      Fd,
      Vd = v(() => {
        jd(),
          (Fd = function () {
            var t = Ld();
            return function (e, n) {
              W(
                function () {
                  return (
                    t.add(e),
                    function () {
                      t.remove();
                    }
                  );
                },
                [e && n]
              );
            };
          });
      }),
      Ls,
      r1 = v(() => {
        Vd(),
          (Ls = function () {
            var t = Fd(),
              e = function (n) {
                var r = n.styles,
                  o = n.dynamic;
                return t(r, o), null;
              };
            return e;
          });
      }),
      zd = v(() => {
        r1(), jd(), Vd();
      }),
      fc,
      Jr,
      dc,
      Bd,
      Ud = v(() => {
        (fc = { left: 0, top: 0, right: 0, gap: 0 }),
          (Jr = function (t) {
            return parseInt(t || '', 10) || 0;
          }),
          (dc = function (t) {
            var e = window.getComputedStyle(document.body),
              n = e[t === 'padding' ? 'paddingLeft' : 'marginLeft'],
              r = e[t === 'padding' ? 'paddingTop' : 'marginTop'],
              o = e[t === 'padding' ? 'paddingRight' : 'marginRight'];
            return [Jr(n), Jr(r), Jr(o)];
          }),
          (Bd = function (t) {
            if ((t === void 0 && (t = 'margin'), typeof window > 'u'))
              return fc;
            var e = dc(t),
              n = document.documentElement.clientWidth,
              r = window.innerWidth;
            return {
              left: e[0],
              top: e[1],
              right: e[2],
              gap: Math.max(0, r - n + e[2] - e[0]),
            };
          });
      }),
      hc,
      mc,
      Hd,
      o1 = v(() => {
        zd(),
          Ns(),
          Ud(),
          (hc = Ls()),
          (mc = function (t, e, n, r) {
            var o = t.left,
              i = t.top,
              a = t.right,
              s = t.gap;
            return (
              n === void 0 && (n = 'margin'),
              `
  .`
                .concat(
                  Rd,
                  ` {
   overflow: hidden `
                )
                .concat(
                  r,
                  `;
   padding-right: `
                )
                .concat(s, 'px ')
                .concat(
                  r,
                  `;
  }
  body {
    overflow: hidden `
                )
                .concat(
                  r,
                  `;
    overscroll-behavior: contain;
    `
                )
                .concat(
                  [
                    e && 'position: relative '.concat(r, ';'),
                    n === 'margin' &&
                      `
    padding-left: `
                        .concat(
                          o,
                          `px;
    padding-top: `
                        )
                        .concat(
                          i,
                          `px;
    padding-right: `
                        )
                        .concat(
                          a,
                          `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                        )
                        .concat(s, 'px ')
                        .concat(
                          r,
                          `;
    `
                        ),
                    n === 'padding' &&
                      'padding-right: '.concat(s, 'px ').concat(r, ';'),
                  ]
                    .filter(Boolean)
                    .join(''),
                  `
  }
  
  .`
                )
                .concat(
                  Er,
                  ` {
    right: `
                )
                .concat(s, 'px ')
                .concat(
                  r,
                  `;
  }
  
  .`
                )
                .concat(
                  xr,
                  ` {
    margin-right: `
                )
                .concat(s, 'px ')
                .concat(
                  r,
                  `;
  }
  
  .`
                )
                .concat(Er, ' .')
                .concat(
                  Er,
                  ` {
    right: 0 `
                )
                .concat(
                  r,
                  `;
  }
  
  .`
                )
                .concat(xr, ' .')
                .concat(
                  xr,
                  ` {
    margin-right: 0 `
                )
                .concat(
                  r,
                  `;
  }
  
  body {
    `
                )
                .concat(Md, ': ')
                .concat(
                  s,
                  `px;
  }
`
                )
            );
          }),
          (Hd = function (t) {
            var e = t.noRelative,
              n = t.noImportant,
              r = t.gapMode,
              o = r === void 0 ? 'margin' : r,
              i = Nt(
                function () {
                  return Bd(o);
                },
                [o]
              );
            return q(hc, { styles: mc(i, !e, o, n ? '' : '!important') });
          });
      }),
      i1 = v(() => {
        o1(), Ns(), Ud();
      }),
      Zr,
      rr,
      Ge,
      a1 = v(() => {
        if (((Zr = !1), typeof window < 'u'))
          try {
            (rr = Object.defineProperty({}, 'passive', {
              get: function () {
                return (Zr = !0), !0;
              },
            })),
              window.addEventListener('test', rr, rr),
              window.removeEventListener('test', rr, rr);
          } catch {
            Zr = !1;
          }
        Ge = Zr ? { passive: !1 } : !1;
      }),
      vc,
      Xi,
      gc,
      yc,
      Ha,
      bc,
      wc,
      _i,
      Ki,
      Ec,
      Wd,
      s1 = v(() => {
        (vc = function (t) {
          return t.tagName === 'TEXTAREA';
        }),
          (Xi = function (t, e) {
            var n = window.getComputedStyle(t);
            return (
              n[e] !== 'hidden' &&
              !(n.overflowY === n.overflowX && !vc(t) && n[e] === 'visible')
            );
          }),
          (gc = function (t) {
            return Xi(t, 'overflowY');
          }),
          (yc = function (t) {
            return Xi(t, 'overflowX');
          }),
          (Ha = function (t, e) {
            var n = e;
            do {
              typeof ShadowRoot < 'u' &&
                n instanceof ShadowRoot &&
                (n = n.host);
              var r = _i(t, n);
              if (r) {
                var o = Ki(t, n),
                  i = o[1],
                  a = o[2];
                if (i > a) return !0;
              }
              n = n.parentNode;
            } while (n && n !== document.body);
            return !1;
          }),
          (bc = function (t) {
            var e = t.scrollTop,
              n = t.scrollHeight,
              r = t.clientHeight;
            return [e, n, r];
          }),
          (wc = function (t) {
            var e = t.scrollLeft,
              n = t.scrollWidth,
              r = t.clientWidth;
            return [e, n, r];
          }),
          (_i = function (t, e) {
            return t === 'v' ? gc(e) : yc(e);
          }),
          (Ki = function (t, e) {
            return t === 'v' ? bc(e) : wc(e);
          }),
          (Ec = function (t, e) {
            return t === 'h' && e === 'rtl' ? -1 : 1;
          }),
          (Wd = function (t, e, n, r, o) {
            var i = Ec(t, window.getComputedStyle(e).direction),
              a = i * r,
              s = n.target,
              l = e.contains(s),
              u = !1,
              c = a > 0,
              f = 0,
              p = 0;
            do {
              var d = Ki(t, s),
                h = d[0],
                m = d[1],
                y = d[2],
                E = m - y - i * h;
              (h || E) && _i(t, s) && ((f += E), (p += h)), (s = s.parentNode);
            } while (
              (!l && s !== document.body) ||
              (l && (e.contains(s) || e === s))
            );
            return (
              ((c && ((o && f === 0) || (!o && a > f))) ||
                (!c && ((o && p === 0) || (!o && -a > p)))) &&
                (u = !0),
              u
            );
          });
      });
    function l1(t) {
      var e = nt([]),
        n = nt([0, 0]),
        r = nt(),
        o = at(Gd++)[0],
        i = at(function () {
          return Ls();
        })[0],
        a = nt(t);
      W(
        function () {
          a.current = t;
        },
        [t]
      ),
        W(
          function () {
            if (t.inert) {
              document.body.classList.add('block-interactivity-'.concat(o));
              var m = $t(
                [t.lockRef.current],
                (t.shards || []).map(Ya),
                !0
              ).filter(Boolean);
              return (
                m.forEach(function (y) {
                  return y.classList.add('allow-interactivity-'.concat(o));
                }),
                function () {
                  document.body.classList.remove(
                    'block-interactivity-'.concat(o)
                  ),
                    m.forEach(function (y) {
                      return y.classList.remove(
                        'allow-interactivity-'.concat(o)
                      );
                    });
                }
              );
            }
          },
          [t.inert, t.lockRef.current, t.shards]
        );
      var s = xt(function (m, y) {
          if ('touches' in m && m.touches.length === 2)
            return !a.current.allowPinchZoom;
          var E = pr(m),
            x = n.current,
            b = 'deltaX' in m ? m.deltaX : x[0] - E[0],
            w = 'deltaY' in m ? m.deltaY : x[1] - E[1],
            O,
            S = m.target,
            M = Math.abs(b) > Math.abs(w) ? 'h' : 'v';
          if ('touches' in m && M === 'h' && S.type === 'range') return !1;
          var N = Ha(M, S);
          if (!N) return !0;
          if ((N ? (O = M) : ((O = M === 'v' ? 'h' : 'v'), (N = Ha(M, S))), !N))
            return !1;
          if (
            (!r.current && 'changedTouches' in m && (b || w) && (r.current = O),
            !O)
          )
            return !0;
          var z = r.current || O;
          return Wd(z, y, m, z === 'h' ? b : w, !0);
        }, []),
        l = xt(function (m) {
          var y = m;
          if (!(!Xe.length || Xe[Xe.length - 1] !== i)) {
            var E = 'deltaY' in y ? Wa(y) : pr(y),
              x = e.current.filter(function (O) {
                return (
                  O.name === y.type && O.target === y.target && Yd(O.delta, E)
                );
              })[0];
            if (x && x.should) {
              y.cancelable && y.preventDefault();
              return;
            }
            if (!x) {
              var b = (a.current.shards || [])
                  .map(Ya)
                  .filter(Boolean)
                  .filter(function (O) {
                    return O.contains(y.target);
                  }),
                w = b.length > 0 ? s(y, b[0]) : !a.current.noIsolation;
              w && y.cancelable && y.preventDefault();
            }
          }
        }, []),
        u = xt(function (m, y, E, x) {
          var b = { name: m, delta: y, target: E, should: x };
          e.current.push(b),
            setTimeout(function () {
              e.current = e.current.filter(function (w) {
                return w !== b;
              });
            }, 1);
        }, []),
        c = xt(function (m) {
          (n.current = pr(m)), (r.current = void 0);
        }, []),
        f = xt(function (m) {
          u(m.type, Wa(m), m.target, s(m, t.lockRef.current));
        }, []),
        p = xt(function (m) {
          u(m.type, pr(m), m.target, s(m, t.lockRef.current));
        }, []);
      W(function () {
        return (
          Xe.push(i),
          t.setCallbacks({
            onScrollCapture: f,
            onWheelCapture: f,
            onTouchMoveCapture: p,
          }),
          document.addEventListener('wheel', l, Ge),
          document.addEventListener('touchmove', l, Ge),
          document.addEventListener('touchstart', c, Ge),
          function () {
            (Xe = Xe.filter(function (m) {
              return m !== i;
            })),
              document.removeEventListener('wheel', l, Ge),
              document.removeEventListener('touchmove', l, Ge),
              document.removeEventListener('touchstart', c, Ge);
          }
        );
      }, []);
      var d = t.removeScrollBar,
        h = t.inert;
      return q(
        Se,
        null,
        h ? q(i, { styles: qd(o) }) : null,
        d ? q(Hd, { gapMode: 'margin' }) : null
      );
    }
    var pr,
      Wa,
      Ya,
      Yd,
      qd,
      Gd,
      Xe,
      u1 = v(() => {
        G(),
          i1(),
          zd(),
          a1(),
          s1(),
          (pr = function (t) {
            return 'changedTouches' in t
              ? [t.changedTouches[0].clientX, t.changedTouches[0].clientY]
              : [0, 0];
          }),
          (Wa = function (t) {
            return [t.deltaX, t.deltaY];
          }),
          (Ya = function (t) {
            return t && 'current' in t ? t.current : t;
          }),
          (Yd = function (t, e) {
            return t[0] === e[0] && t[1] === e[1];
          }),
          (qd = function (t) {
            return `
  .block-interactivity-`
              .concat(
                t,
                ` {pointer-events: none;}
  .allow-interactivity-`
              )
              .concat(
                t,
                ` {pointer-events: all;}
`
              );
          }),
          (Gd = 0),
          (Xe = []);
      }),
      Xd,
      c1 = v(() => {
        Dd(), u1(), Nd(), (Xd = Qb(Is, l1));
      }),
      Qi,
      _d,
      p1 = v(() => {
        G(),
          Zb(),
          c1(),
          (Qi = ct(function (t, e) {
            return q(Or, A({}, t, { ref: e, sideCar: Xd }));
          })),
          (Qi.classNames = Or.classNames),
          (_d = Qi);
      }),
      f1 = v(() => {
        p1();
      }),
      xc,
      He,
      or,
      ir,
      $r,
      Ji,
      Oc,
      Sc,
      Kd,
      d1 = v(() => {
        (xc = function (t) {
          if (typeof document > 'u') return null;
          var e = Array.isArray(t) ? t[0] : t;
          return e.ownerDocument.body;
        }),
          (He = new WeakMap()),
          (or = new WeakMap()),
          (ir = {}),
          ($r = 0),
          (Ji = function (t) {
            return t && (t.host || Ji(t.parentNode));
          }),
          (Oc = function (t, e) {
            return e
              .map(function (n) {
                if (t.contains(n)) return n;
                var r = Ji(n);
                return r && t.contains(r)
                  ? r
                  : (console.error(
                      'aria-hidden',
                      n,
                      'in not contained inside',
                      t,
                      '. Doing nothing'
                    ),
                    null);
              })
              .filter(function (n) {
                return !!n;
              });
          }),
          (Sc = function (t, e, n, r) {
            var o = Oc(e, Array.isArray(t) ? t : [t]);
            ir[n] || (ir[n] = new WeakMap());
            var i = ir[n],
              a = [],
              s = new Set(),
              l = new Set(o),
              u = function (f) {
                !f || s.has(f) || (s.add(f), u(f.parentNode));
              };
            o.forEach(u);
            var c = function (f) {
              !f ||
                l.has(f) ||
                Array.prototype.forEach.call(f.children, function (p) {
                  if (s.has(p)) c(p);
                  else {
                    var d = p.getAttribute(r),
                      h = d !== null && d !== 'false',
                      m = (He.get(p) || 0) + 1,
                      y = (i.get(p) || 0) + 1;
                    He.set(p, m),
                      i.set(p, y),
                      a.push(p),
                      m === 1 && h && or.set(p, !0),
                      y === 1 && p.setAttribute(n, 'true'),
                      h || p.setAttribute(r, 'true');
                  }
                });
            };
            return (
              c(e),
              s.clear(),
              $r++,
              function () {
                a.forEach(function (f) {
                  var p = He.get(f) - 1,
                    d = i.get(f) - 1;
                  He.set(f, p),
                    i.set(f, d),
                    p || (or.has(f) || f.removeAttribute(r), or.delete(f)),
                    d || f.removeAttribute(n);
                }),
                  $r--,
                  $r ||
                    ((He = new WeakMap()),
                    (He = new WeakMap()),
                    (or = new WeakMap()),
                    (ir = {}));
              }
            );
          }),
          (Kd = function (t, e, n) {
            n === void 0 && (n = 'data-aria-hidden');
            var r = Array.from(Array.isArray(t) ? t : [t]),
              o = e || xc(t);
            return o
              ? (r.push.apply(r, Array.from(o.querySelectorAll('[aria-live]'))),
                Sc(r, o, n, 'aria-hidden'))
              : function () {
                  return null;
                };
          });
      });
    function Pc(t) {
      return t ? 'open' : 'closed';
    }
    var Zi,
      $i,
      h1,
      Tc,
      Kt,
      Cc,
      ta,
      Ac,
      ea,
      kc,
      to,
      Rc,
      Mc,
      We,
      Dc,
      Nc,
      Ic,
      na,
      ra,
      Lc,
      jc,
      Fc,
      Vc,
      zc,
      Bc,
      Qd,
      Jd,
      Zd,
      $d,
      th,
      eh,
      nh,
      rh = v(() => {
        Vn(),
          md(),
          jr(),
          db(),
          hb(),
          gb(),
          Pb(),
          Db(),
          Nb(),
          jb(),
          ti(),
          Vb(),
          f1(),
          d1(),
          Ed(),
          (Zi = 'Dialog'),
          ([$i, h1] = pb(Zi)),
          ([Tc, Kt] = $i(Zi)),
          (Cc = (t) => {
            let {
                __scopeDialog: e,
                children: n,
                open: r,
                defaultOpen: o,
                onOpenChange: i,
                modal: a = !0,
              } = t,
              s = nt(null),
              l = nt(null),
              [u = !1, c] = mb({ prop: r, defaultProp: o, onChange: i });
            return q(
              Tc,
              {
                scope: e,
                triggerRef: s,
                contentRef: l,
                contentId: Yi(),
                titleId: Yi(),
                descriptionId: Yi(),
                open: u,
                onOpenChange: c,
                onOpenToggle: xt(() => c((f) => !f), [c]),
                modal: a,
              },
              n
            );
          }),
          (ta = 'DialogPortal'),
          ([Ac, ea] = $i(ta, { forceMount: void 0 })),
          (kc = (t) => {
            let {
                __scopeDialog: e,
                forceMount: n,
                children: r,
                container: o,
              } = t,
              i = Kt(ta, e);
            return q(
              Ac,
              { scope: e, forceMount: n },
              Gt.map(r, (a) =>
                q(
                  wr,
                  { present: n || i.open },
                  q(Ad, { asChild: !0, container: o }, a)
                )
              )
            );
          }),
          (to = 'DialogOverlay'),
          (Rc = ct((t, e) => {
            let n = ea(to, t.__scopeDialog),
              { forceMount: r = n.forceMount, ...o } = t,
              i = Kt(to, t.__scopeDialog);
            return i.modal
              ? q(wr, { present: r || i.open }, q(Mc, Ot({}, o, { ref: e })))
              : null;
          })),
          (Mc = ct((t, e) => {
            let { __scopeDialog: n, ...r } = t,
              o = Kt(to, n);
            return q(
              _d,
              { as: Fo, allowPinchZoom: !0, shards: [o.contentRef] },
              q(
                De.div,
                Ot({ 'data-state': Pc(o.open) }, r, {
                  ref: e,
                  style: { pointerEvents: 'auto', ...r.style },
                })
              )
            );
          })),
          (We = 'DialogContent'),
          (Dc = ct((t, e) => {
            let n = ea(We, t.__scopeDialog),
              { forceMount: r = n.forceMount, ...o } = t,
              i = Kt(We, t.__scopeDialog);
            return q(
              wr,
              { present: r || i.open },
              i.modal
                ? q(Nc, Ot({}, o, { ref: e }))
                : q(Ic, Ot({}, o, { ref: e }))
            );
          })),
          (Nc = ct((t, e) => {
            let n = Kt(We, t.__scopeDialog),
              r = nt(null),
              o = Cr(e, n.contentRef, r);
            return (
              W(() => {
                let i = r.current;
                if (i) return Kd(i);
              }, []),
              q(
                na,
                Ot({}, t, {
                  ref: o,
                  trapFocus: n.open,
                  disableOutsidePointerEvents: !0,
                  onCloseAutoFocus: Ke(t.onCloseAutoFocus, (i) => {
                    var a;
                    i.preventDefault(),
                      (a = n.triggerRef.current) === null ||
                        a === void 0 ||
                        a.focus();
                  }),
                  onPointerDownOutside: Ke(t.onPointerDownOutside, (i) => {
                    let a = i.detail.originalEvent,
                      s = a.button === 0 && a.ctrlKey === !0;
                    (a.button === 2 || s) && i.preventDefault();
                  }),
                  onFocusOutside: Ke(t.onFocusOutside, (i) =>
                    i.preventDefault()
                  ),
                })
              )
            );
          })),
          (Ic = ct((t, e) => {
            let n = Kt(We, t.__scopeDialog),
              r = nt(!1),
              o = nt(!1);
            return q(
              na,
              Ot({}, t, {
                ref: e,
                trapFocus: !1,
                disableOutsidePointerEvents: !1,
                onCloseAutoFocus: (i) => {
                  var a;
                  if (
                    ((a = t.onCloseAutoFocus) === null ||
                      a === void 0 ||
                      a.call(t, i),
                    !i.defaultPrevented)
                  ) {
                    var s;
                    r.current ||
                      (s = n.triggerRef.current) === null ||
                      s === void 0 ||
                      s.focus(),
                      i.preventDefault();
                  }
                  (r.current = !1), (o.current = !1);
                },
                onInteractOutside: (i) => {
                  var a, s;
                  (a = t.onInteractOutside) === null ||
                    a === void 0 ||
                    a.call(t, i),
                    i.defaultPrevented ||
                      ((r.current = !0),
                      i.detail.originalEvent.type === 'pointerdown' &&
                        (o.current = !0));
                  let l = i.target;
                  !((s = n.triggerRef.current) === null || s === void 0) &&
                    s.contains(l) &&
                    i.preventDefault(),
                    i.detail.originalEvent.type === 'focusin' &&
                      o.current &&
                      i.preventDefault();
                },
              })
            );
          })),
          (na = ct((t, e) => {
            let {
                __scopeDialog: n,
                trapFocus: r,
                onOpenAutoFocus: o,
                onCloseAutoFocus: i,
                ...a
              } = t,
              s = Kt(We, n),
              l = nt(null),
              u = Cr(e, l);
            return (
              Fb(),
              q(
                Se,
                null,
                q(
                  Cd,
                  {
                    asChild: !0,
                    loop: !0,
                    trapped: r,
                    onMountAutoFocus: o,
                    onUnmountAutoFocus: i,
                  },
                  q(
                    Pd,
                    Ot(
                      {
                        role: 'dialog',
                        id: s.contentId,
                        'aria-describedby': s.descriptionId,
                        'aria-labelledby': s.titleId,
                        'data-state': Pc(s.open),
                      },
                      a,
                      { ref: u, onDismiss: () => s.onOpenChange(!1) }
                    )
                  )
                ),
                !1
              )
            );
          })),
          (ra = 'DialogTitle'),
          (Lc = ct((t, e) => {
            let { __scopeDialog: n, ...r } = t,
              o = Kt(ra, n);
            return q(De.h2, Ot({ id: o.titleId }, r, { ref: e }));
          })),
          (jc = 'DialogDescription'),
          (Fc = ct((t, e) => {
            let { __scopeDialog: n, ...r } = t,
              o = Kt(jc, n);
            return q(De.p, Ot({ id: o.descriptionId }, r, { ref: e }));
          })),
          (Vc = 'DialogClose'),
          (zc = ct((t, e) => {
            let { __scopeDialog: n, ...r } = t,
              o = Kt(Vc, n);
            return q(
              De.button,
              Ot({ type: 'button' }, r, {
                ref: e,
                onClick: Ke(t.onClick, () => o.onOpenChange(!1)),
              })
            );
          })),
          (Bc = 'DialogTitleWarning'),
          cb(Bc, { contentName: We, titleName: ra, docsSlug: 'dialog' }),
          (Qd = Cc),
          (Jd = kc),
          (Zd = Rc),
          ($d = Dc),
          (th = Lc),
          (eh = Fc),
          (nh = zc);
      }),
      oh,
      Uc,
      ih,
      m1 = v(() => {
        rh(),
          (oh = Y.div`
  background-color: rgba(27, 28, 29, 0.48);
  position: fixed;
  inset: 0px;
  width: 100%;
  height: 100%;
  z-index: 10;
`),
          (Uc = Y.div(
            ({ width: t, height: e }) => $l`
    background-color: white;
    border-radius: 6px;
    box-shadow: rgba(14, 18, 22, 0.35) 0px 10px 38px -10px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${t ?? 740}px;
    height: ${e ? `${e}px` : 'auto'};
    max-width: calc(100% - 40px);
    max-height: 85vh;
    overflow: hidden;
    z-index: 11;

    &:focus-visible {
      outline: none;
    }
  `
          )),
          (ih = g.forwardRef(({ width: t, height: e, children: n, ...r }, o) =>
            g.createElement(
              $d,
              { ref: o, asChild: !0, ...r },
              g.createElement(Uc, { width: t, height: e }, n)
            )
          ));
      });
    function ah({
      children: t,
      width: e,
      height: n,
      onEscapeKeyDown: r,
      onInteractOutside: o = (a) => a.preventDefault(),
      ...i
    }) {
      return g.createElement(
        Qd,
        { ...i },
        g.createElement(
          Jd,
          null,
          g.createElement(Zd, { asChild: !0 }, g.createElement(oh, null)),
          g.createElement(
            ih,
            { width: e, height: n, onInteractOutside: o, onEscapeKeyDown: r },
            t({ Title: th, Description: eh, Close: nh })
          )
        )
      );
    }
    var sh = v(() => {
      rh(), m1();
    });
    function v1() {
      return g.createElement(
        'svg',
        {
          width: '32px',
          height: '40px',
          viewBox: '0 0 256 319',
          preserveAspectRatio: 'xMidYMid',
        },
        g.createElement(
          'defs',
          null,
          g.createElement('path', {
            d: 'M9.87245893,293.324145 L0.0114611411,30.5732167 C-0.314208957,21.8955842 6.33948896,14.5413918 15.0063196,13.9997149 L238.494389,0.0317105427 C247.316188,-0.519651867 254.914637,6.18486163 255.466,15.0066607 C255.486773,15.339032 255.497167,15.6719708 255.497167,16.0049907 L255.497167,302.318596 C255.497167,311.157608 248.331732,318.323043 239.492719,318.323043 C239.253266,318.323043 239.013844,318.317669 238.774632,318.306926 L25.1475605,308.712253 C16.8276309,308.338578 10.1847994,301.646603 9.87245893,293.324145 L9.87245893,293.324145 Z',
            id: 'path-1',
          })
        ),
        g.createElement(
          'g',
          null,
          g.createElement(
            'mask',
            { id: 'mask-2', fill: 'white' },
            g.createElement('use', { xlinkHref: '#path-1' })
          ),
          g.createElement('use', {
            fill: '#FF4785',
            fillRule: 'nonzero',
            xlinkHref: '#path-1',
          }),
          g.createElement('path', {
            d: 'M188.665358,39.126973 L190.191903,2.41148534 L220.883535,0 L222.205755,37.8634126 C222.251771,39.1811466 221.22084,40.2866846 219.903106,40.3327009 C219.338869,40.3524045 218.785907,40.1715096 218.342409,39.8221376 L206.506729,30.4984116 L192.493574,41.1282444 C191.443077,41.9251106 189.945493,41.7195021 189.148627,40.6690048 C188.813185,40.2267976 188.6423,39.6815326 188.665358,39.126973 Z M149.413703,119.980309 C149.413703,126.206975 191.355678,123.222696 196.986019,118.848893 C196.986019,76.4467826 174.234041,54.1651411 132.57133,54.1651411 C90.9086182,54.1651411 67.5656805,76.7934542 67.5656805,110.735941 C67.5656805,169.85244 147.345341,170.983856 147.345341,203.229219 C147.345341,212.280549 142.913138,217.654777 133.162291,217.654777 C120.456641,217.654777 115.433477,211.165914 116.024438,189.103298 C116.024438,184.317101 67.5656805,182.824962 66.0882793,189.103298 C62.3262146,242.56887 95.6363019,257.990394 133.753251,257.990394 C170.688279,257.990394 199.645341,238.303123 199.645341,202.663511 C199.645341,139.304202 118.683759,141.001326 118.683759,109.604526 C118.683759,96.8760922 128.139127,95.178968 133.753251,95.178968 C139.662855,95.178968 150.300143,96.2205679 149.413703,119.980309 Z',
            fill: '#FFFFFF',
            fillRule: 'nonzero',
            mask: 'url(#mask-2)',
          })
        )
      );
    }
    var g1 = v(() => {}),
      lh,
      uh,
      ch,
      ph,
      fh,
      dh,
      hh,
      Hc,
      mh,
      Wc,
      vh,
      Yc,
      gh,
      y1 = v(() => {
        (lh = Y.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-between;
`),
          (uh = Y.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`),
          (ch = Y.h1`
  margin: 0;
  margin-top: 20px;
  margin-bottom: 5px;
  color: ${({ theme: t }) => t.color.darkest};
  font-weight: ${({ theme: t }) => t.typography.weight.bold};
  font-size: ${({ theme: t }) => t.typography.size.m1}px;
  line-height: ${({ theme: t }) => t.typography.size.m3}px;
`),
          (ph = Y.p`
  margin: 0;
  margin-bottom: 20px;
  max-width: 320px;
  text-align: center;
  font-size: ${({ theme: t }) => t.typography.size.s2}px;
  font-weight: ${({ theme: t }) => t.typography.weight.regular};
  line-height: ${({ theme: t }) => t.typography.size.m1}px;
  color: ${({ theme: t }) => t.color.darker};
`),
          (fh = Y.button`
  all: unset;
  cursor: pointer;
  font-size: 13px;
  color: #798186;
  padding-bottom: 20px;

  &:focus-visible {
    outline: auto;
  }
`),
          (dh = Y(Xn)`
  margin-left: 2px;
  height: 10px;
`),
          (hh = Y.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`),
          (Hc = ze`
  0% { transform: translate(0px, 0px) }
  50% { transform: translate(-200px, 0px) }
  100% { transform: translate(0px, 0px) }
`),
          (mh = Y.div`
  position: absolute;
  width: 1200px;
  height: 1200px;
  left: -200px;
  top: -900px;
  background: radial-gradient(
    circle at center,
    rgba(253, 255, 147, 1) 0%,
    rgba(253, 255, 147, 0) 70%
  );
  animation: ${Hc} 4s linear infinite;
  animation-timing-function: ease-in-out;
  z-index: 3;
`),
          (Wc = ze`
  0% { transform: translate(0px, 0px) }
  50% { transform: translate(400px, 0px) }
  100% { transform: translate(0px, 0px) }
`),
          (vh = Y.div`
  position: absolute;
  width: 1200px;
  height: 1200px;
  left: -600px;
  top: -840px;
  background: radial-gradient(
    circle at center,
    rgba(255, 119, 119, 1) 0%,
    rgba(255, 119, 119, 0) 70%
  );
  animation: ${Wc} 6s linear infinite;
  animation-timing-function: ease-in-out;
  z-index: 2;
`),
          (Yc = ze`
  0% { transform: translate(600px, -40px) }
  50% { transform: translate(600px, -200px) }
  100% { transform: translate(600px, -40px) }
`),
          (gh = Y.div`
  position: absolute;
  width: 1200px;
  height: 1200px;
  left: -600px;
  top: -840px;
  background: radial-gradient(
    circle at center,
    rgba(119, 255, 247, 0.8) 0%,
    rgba(119, 255, 247, 0) 70%
  );
  animation: ${Yc} 4s linear infinite;
  animation-timing-function: ease-in-out;
  z-index: 4;
`),
          Y.h2`
  color: #000;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
`,
          Y.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #454e54;
`;
      }),
      yh,
      b1 = v(() => {
        Ds(),
          sh(),
          g1(),
          y1(),
          (yh = ({ onProceed: t, skipOnboarding: e }) =>
            g.createElement(
              'div',
              { style: { zIndex: 10 } },
              g.createElement(
                ah,
                { width: 540, height: 430, defaultOpen: !0 },
                ({ Close: n }) =>
                  g.createElement(
                    lh,
                    { 'data-chromatic': 'ignore' },
                    g.createElement(
                      uh,
                      null,
                      g.createElement(v1, null),
                      g.createElement(ch, null, 'Welcome to Storybook'),
                      g.createElement(
                        ph,
                        null,
                        'Storybook helps you develop UI components faster. Learn the basics in a few simple steps.'
                      ),
                      g.createElement(
                        Bt,
                        { style: { marginTop: 4 }, onClick: t },
                        'Start your 3 minute tour'
                      )
                    ),
                    g.createElement(
                      fh,
                      { onClick: e },
                      'Skip tour',
                      g.createElement(dh, { icon: 'arrowright' })
                    ),
                    g.createElement(
                      hh,
                      null,
                      g.createElement(mh, null),
                      g.createElement(vh, null),
                      g.createElement(gh, null)
                    )
                  )
              )
            ));
      }),
      w1 = ee((t, e) => {
        function n(r, o, i) {
          var a, s, l, u, c;
          o == null && (o = 100);
          function f() {
            var d = Date.now() - u;
            d < o && d >= 0
              ? (a = setTimeout(f, o - d))
              : ((a = null), i || ((c = r.apply(l, s)), (l = s = null)));
          }
          var p = function () {
            (l = this), (s = arguments), (u = Date.now());
            var d = i && !a;
            return (
              a || (a = setTimeout(f, o)),
              d && ((c = r.apply(l, s)), (l = s = null)),
              c
            );
          };
          return (
            (p.clear = function () {
              a && (clearTimeout(a), (a = null));
            }),
            (p.flush = function () {
              a &&
                ((c = r.apply(l, s)),
                (l = s = null),
                clearTimeout(a),
                (a = null));
            }),
            p
          );
        }
        (n.debounce = n), (e.exports = n);
      });
    function E1(t) {
      let {
          debounce: e,
          scroll: n,
          polyfill: r,
          offsetSize: o,
        } = t === void 0 ? { debounce: 0, scroll: !1, offsetSize: !1 } : t,
        i = r || (typeof window > 'u' ? class {} : window.ResizeObserver);
      if (!i)
        throw new Error(
          'This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills'
        );
      let [a, s] = at({
          left: 0,
          top: 0,
          width: 0,
          height: 0,
          bottom: 0,
          right: 0,
          x: 0,
          y: 0,
        }),
        l = nt({
          element: null,
          scrollContainers: null,
          resizeObserver: null,
          lastBounds: a,
        }),
        u = e ? (typeof e == 'number' ? e : e.scroll) : null,
        c = e ? (typeof e == 'number' ? e : e.resize) : null,
        f = nt(!1);
      W(() => ((f.current = !0), () => void (f.current = !1)));
      let [p, d, h] = Nt(() => {
        let x = () => {
          if (!l.current.element) return;
          let {
              left: b,
              top: w,
              width: O,
              height: S,
              bottom: M,
              right: N,
              x: z,
              y: X,
            } = l.current.element.getBoundingClientRect(),
            et = {
              left: b,
              top: w,
              width: O,
              height: S,
              bottom: M,
              right: N,
              x: z,
              y: X,
            };
          l.current.element instanceof HTMLElement &&
            o &&
            ((et.height = l.current.element.offsetHeight),
            (et.width = l.current.element.offsetWidth)),
            Object.freeze(et),
            f.current &&
              !wh(l.current.lastBounds, et) &&
              s((l.current.lastBounds = et));
        };
        return [
          x,
          c ? (0, qa.default)(x, c) : x,
          u ? (0, qa.default)(x, u) : x,
        ];
      }, [s, o, u, c]);
      function m() {
        l.current.scrollContainers &&
          (l.current.scrollContainers.forEach((x) =>
            x.removeEventListener('scroll', h, !0)
          ),
          (l.current.scrollContainers = null)),
          l.current.resizeObserver &&
            (l.current.resizeObserver.disconnect(),
            (l.current.resizeObserver = null));
      }
      function y() {
        l.current.element &&
          ((l.current.resizeObserver = new i(h)),
          l.current.resizeObserver.observe(l.current.element),
          n &&
            l.current.scrollContainers &&
            l.current.scrollContainers.forEach((x) =>
              x.addEventListener('scroll', h, { capture: !0, passive: !0 })
            ));
      }
      let E = (x) => {
        !x ||
          x === l.current.element ||
          (m(),
          (l.current.element = x),
          (l.current.scrollContainers = bh(x)),
          y());
      };
      return (
        O1(h, !!n),
        x1(d),
        W(() => {
          m(), y();
        }, [n, h, d]),
        W(() => m, []),
        [E, a, p]
      );
    }
    function x1(t) {
      W(() => {
        let e = t;
        return (
          window.addEventListener('resize', e),
          () => void window.removeEventListener('resize', e)
        );
      }, [t]);
    }
    function O1(t, e) {
      W(() => {
        if (e) {
          let n = t;
          return (
            window.addEventListener('scroll', n, { capture: !0, passive: !0 }),
            () => void window.removeEventListener('scroll', n, !0)
          );
        }
      }, [t, e]);
    }
    function bh(t) {
      let e = [];
      if (!t || t === document.body) return e;
      let {
        overflow: n,
        overflowX: r,
        overflowY: o,
      } = window.getComputedStyle(t);
      return (
        [n, r, o].some((i) => i === 'auto' || i === 'scroll') && e.push(t),
        [...e, ...bh(t.parentElement)]
      );
    }
    var qa,
      qc,
      wh,
      S1 = v(() => {
        (qa = le(w1())),
          (qc = [
            'x',
            'y',
            'top',
            'bottom',
            'left',
            'right',
            'width',
            'height',
          ]),
          (wh = (t, e) => qc.every((n) => t[n] === e[n]));
      }),
      Gc,
      js,
      Eh = v(() => {
        (Gc = 'production'),
          (js = typeof process > 'u' || re === void 0 ? Gc : 'production');
      });
    function P1(t) {
      for (var e in t)
        t[e] !== null &&
          (e === 'projectionNodeConstructor'
            ? (Dn.projectionNodeConstructor = t[e])
            : (Dn[e].Component = t[e]));
    }
    var ae,
      Dn,
      xh = v(() => {
        (ae = function (t) {
          return {
            isEnabled: function (e) {
              return t.some(function (n) {
                return !!e[n];
              });
            },
          };
        }),
          (Dn = {
            measureLayout: ae(['layout', 'layoutId', 'drag']),
            animation: ae([
              'animate',
              'exit',
              'variants',
              'whileHover',
              'whileTap',
              'whileFocus',
              'whileDrag',
              'whileInView',
            ]),
            exit: ae(['exit']),
            drag: ae(['drag', 'dragControls']),
            focus: ae(['whileFocus']),
            hover: ae(['whileHover', 'onHoverStart', 'onHoverEnd']),
            tap: ae(['whileTap', 'onTap', 'onTapStart', 'onTapCancel']),
            pan: ae(['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd']),
            inView: ae(['whileInView', 'onViewportEnter', 'onViewportLeave']),
          });
      }),
      Fr,
      qt,
      fe = v(() => {
        (Fr = function () {}), (qt = function () {});
      }),
      Fs,
      Oh = v(() => {
        Fs = Yt({ strict: !1 });
      });
    function T1(t, e, n) {
      var r = [],
        o = mt(Fs);
      if (!e) return null;
      js !== 'production' &&
        n &&
        o.strict &&
        qt(
          !1,
          'You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.'
        );
      for (var i = 0; i < Sh; i++) {
        var a = Ga[i],
          s = Dn[a],
          l = s.isEnabled,
          u = s.Component;
        l(t) && u && r.push(q(u, A({ key: a }, t, { visualElement: e })));
      }
      return r;
    }
    var Ga,
      Sh,
      C1 = v(() => {
        G(), Eh(), xh(), fe(), Oh(), (Ga = Object.keys(Dn)), (Sh = Ga.length);
      }),
      ei,
      Vs = v(() => {
        ei = Yt({
          transformPagePoint: function (t) {
            return t;
          },
          isStatic: !1,
          reducedMotion: 'never',
        });
      });
    function A1() {
      return mt(Vr).visualElement;
    }
    var Vr,
      ni = v(() => {
        Vr = Yt({});
      }),
      zr,
      ri = v(() => {
        zr = Yt(null);
      }),
      Je,
      oi = v(() => {
        Je = typeof document < 'u';
      }),
      Xa,
      k1 = v(() => {
        oi(), (Xa = Je ? Wn : W);
      });
    function R1() {
      if (((zs = !0), !!Je))
        if (window.matchMedia) {
          var t = window.matchMedia('(prefers-reduced-motion)'),
            e = function () {
              return (Vo.current = t.matches);
            };
          t.addListener(e), e();
        } else Vo.current = !1;
    }
    function M1() {
      !zs && R1();
      var t = bt(at(Vo.current), 1),
        e = t[0];
      return e;
    }
    function D1() {
      var t = M1(),
        e = mt(ei).reducedMotion;
      return e === 'never' ? !1 : e === 'always' ? !0 : t;
    }
    var Vo,
      zs,
      N1 = v(() => {
        G(), Vs(), oi(), (Vo = { current: null }), (zs = !1);
      });
    function I1(t, e, n, r) {
      var o = mt(Fs),
        i = A1(),
        a = mt(zr),
        s = D1(),
        l = nt(void 0);
      r || (r = o.renderer),
        !l.current &&
          r &&
          (l.current = r(t, {
            visualState: e,
            parent: i,
            props: n,
            presenceId: a?.id,
            blockInitialAnimation: a?.initial === !1,
            shouldReduceMotion: s,
          }));
      var u = l.current;
      return (
        Xa(function () {
          u?.syncRender();
        }),
        W(function () {
          var c;
          (c = u?.animationState) === null ||
            c === void 0 ||
            c.animateChanges();
        }),
        Xa(function () {
          return function () {
            return u?.notifyUnmount();
          };
        }, []),
        u
      );
    }
    var L1 = v(() => {
      ri(), ni(), k1(), Oh(), N1();
    });
    function wn(t) {
      return (
        typeof t == 'object' &&
        Object.prototype.hasOwnProperty.call(t, 'current')
      );
    }
    var Bs = v(() => {});
    function j1(t, e, n) {
      return xt(
        function (r) {
          var o;
          r && ((o = t.mount) === null || o === void 0 || o.call(t, r)),
            e && (r ? e.mount(r) : e.unmount()),
            n && (typeof n == 'function' ? n(r) : wn(n) && (n.current = r));
        },
        [e]
      );
    }
    var F1 = v(() => {
      Bs();
    });
    function Ph(t) {
      return Array.isArray(t);
    }
    function Jt(t) {
      return typeof t == 'string' || Ph(t);
    }
    function V1(t) {
      var e = {};
      return (
        t.forEachValue(function (n, r) {
          return (e[r] = n.get());
        }),
        e
      );
    }
    function z1(t) {
      var e = {};
      return (
        t.forEachValue(function (n, r) {
          return (e[r] = n.getVelocity());
        }),
        e
      );
    }
    function Th(t, e, n, r, o) {
      var i;
      return (
        r === void 0 && (r = {}),
        o === void 0 && (o = {}),
        typeof e == 'function' && (e = e(n ?? t.custom, r, o)),
        typeof e == 'string' &&
          (e = (i = t.variants) === null || i === void 0 ? void 0 : i[e]),
        typeof e == 'function' && (e = e(n ?? t.custom, r, o)),
        e
      );
    }
    function ii(t, e, n) {
      var r = t.getProps();
      return Th(r, e, n ?? r.custom, V1(t), z1(t));
    }
    function ai(t) {
      var e;
      return (
        typeof ((e = t.animate) === null || e === void 0 ? void 0 : e.start) ==
          'function' ||
        Jt(t.initial) ||
        Jt(t.animate) ||
        Jt(t.whileHover) ||
        Jt(t.whileDrag) ||
        Jt(t.whileTap) ||
        Jt(t.whileFocus) ||
        Jt(t.exit)
      );
    }
    function Ch(t) {
      return !!(ai(t) || t.variants);
    }
    var zn = v(() => {});
    function B1(t, e) {
      if (ai(t)) {
        var n = t.initial,
          r = t.animate;
        return {
          initial: n === !1 || Jt(n) ? n : void 0,
          animate: Jt(r) ? r : void 0,
        };
      }
      return t.inherit !== !1 ? e : {};
    }
    var U1 = v(() => {
      zn();
    });
    function H1(t) {
      var e = B1(t, mt(Vr)),
        n = e.initial,
        r = e.animate;
      return Nt(
        function () {
          return { initial: n, animate: r };
        },
        [Xc(n), Xc(r)]
      );
    }
    function Xc(t) {
      return Array.isArray(t) ? t.join(' ') : t;
    }
    var W1 = v(() => {
      ni(), U1();
    });
    function si(t) {
      var e = nt(null);
      return e.current === null && (e.current = t()), e.current;
    }
    var li = v(() => {}),
      On,
      Us = v(() => {
        On = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      });
    function Y1() {
      return si(function () {
        if (On.hasEverUpdated) return Ah++;
      });
    }
    var Ah,
      q1 = v(() => {
        li(), Us(), (Ah = 1);
      }),
      Hs,
      kh = v(() => {
        Hs = Yt({});
      }),
      Ws,
      Rh = v(() => {
        Ws = Yt({});
      });
    function G1(t, e, n, r) {
      var o,
        i = e.layoutId,
        a = e.layout,
        s = e.drag,
        l = e.dragConstraints,
        u = e.layoutScroll,
        c = mt(Ws);
      !r ||
        !n ||
        n?.projection ||
        ((n.projection = new r(
          t,
          n.getLatestValues(),
          (o = n.parent) === null || o === void 0 ? void 0 : o.projection
        )),
        n.projection.setOptions({
          layoutId: i,
          layout: a,
          alwaysMeasureLayout: !!s || (l && wn(l)),
          visualElement: n,
          scheduleRender: function () {
            return n.scheduleRender();
          },
          animationType: typeof a == 'string' ? a : 'both',
          initialPromotionConfig: c,
          layoutScroll: u,
        }));
    }
    var X1 = v(() => {
        Bs(), Rh();
      }),
      Mh,
      _1 = v(() => {
        G(),
          (Mh = (function (t) {
            kd(e, t);
            function e() {
              return (t !== null && t.apply(this, arguments)) || this;
            }
            return (
              (e.prototype.getSnapshotBeforeUpdate = function () {
                return this.updateProps(), null;
              }),
              (e.prototype.componentDidUpdate = function () {}),
              (e.prototype.updateProps = function () {
                var n = this.props,
                  r = n.visualElement,
                  o = n.props;
                r && r.setProps(o);
              }),
              (e.prototype.render = function () {
                return this.props.children;
              }),
              e
            );
          })(g.Component));
      });
    function K1(t) {
      var e = t.preloadedFeatures,
        n = t.createVisualElement,
        r = t.projectionNodeConstructor,
        o = t.useRender,
        i = t.useVisualState,
        a = t.Component;
      e && P1(e);
      function s(l, u) {
        var c = Q1(l);
        l = A(A({}, l), { layoutId: c });
        var f = mt(ei),
          p = null,
          d = H1(l),
          h = f.isStatic ? void 0 : Y1(),
          m = i(l, f.isStatic);
        return (
          !f.isStatic &&
            Je &&
            ((d.visualElement = I1(a, m, A(A({}, f), l), n)),
            G1(h, l, d.visualElement, r || Dn.projectionNodeConstructor),
            (p = T1(l, d.visualElement, e))),
          q(
            Mh,
            { visualElement: d.visualElement, props: A(A({}, f), l) },
            p,
            q(
              Vr.Provider,
              { value: d },
              o(
                a,
                l,
                h,
                j1(m, d.visualElement, u),
                m,
                f.isStatic,
                d.visualElement
              )
            )
          )
        );
      }
      return ct(s);
    }
    function Q1(t) {
      var e,
        n = t.layoutId,
        r = (e = mt(Hs)) === null || e === void 0 ? void 0 : e.id;
      return r && n !== void 0 ? r + '-' + n : n;
    }
    var J1 = v(() => {
      G(),
        C1(),
        Vs(),
        ni(),
        L1(),
        F1(),
        W1(),
        xh(),
        oi(),
        q1(),
        kh(),
        X1(),
        _1();
    });
    function Z1(t) {
      function e(r, o) {
        return o === void 0 && (o = {}), K1(t(r, o));
      }
      if (typeof Proxy > 'u') return e;
      var n = new Map();
      return new Proxy(e, {
        get: function (r, o) {
          return n.has(o) || n.set(o, e(o)), n.get(o);
        },
      });
    }
    var $1 = v(() => {
        J1();
      }),
      Dh,
      tw = v(() => {
        Dh = [
          'animate',
          'circle',
          'defs',
          'desc',
          'ellipse',
          'g',
          'image',
          'line',
          'filter',
          'marker',
          'mask',
          'metadata',
          'path',
          'pattern',
          'polygon',
          'polyline',
          'rect',
          'stop',
          'svg',
          'switch',
          'symbol',
          'text',
          'tspan',
          'use',
          'view',
        ];
      });
    function Ys(t) {
      return typeof t != 'string' || t.includes('-')
        ? !1
        : !!(Dh.indexOf(t) > -1 || /[A-Z]/.test(t));
    }
    var qs = v(() => {
      tw();
    });
    function ew(t) {
      Object.assign(Ar, t);
    }
    var Ar,
      Gs = v(() => {
        Ar = {};
      });
    function nw(t, e) {
      return Sn.indexOf(t) - Sn.indexOf(e);
    }
    function Br(t) {
      return Ih.has(t);
    }
    function Nh(t) {
      return Lh.has(t);
    }
    var zo,
      _c,
      Sn,
      Ih,
      Lh,
      je = v(() => {
        (zo = ['', 'X', 'Y', 'Z']),
          (_c = ['translate', 'scale', 'rotate', 'skew']),
          (Sn = ['transformPerspective', 'x', 'y', 'z']),
          _c.forEach(function (t) {
            return zo.forEach(function (e) {
              return Sn.push(t + e);
            });
          }),
          (Ih = new Set(Sn)),
          (Lh = new Set(['originX', 'originY', 'originZ']));
      });
    function jh(t, e) {
      var n = e.layout,
        r = e.layoutId;
      return (
        Br(t) || Nh(t) || ((n || r !== void 0) && (!!Ar[t] || t === 'opacity'))
      );
    }
    var Fh = v(() => {
        Gs(), je();
      }),
      ce,
      nn = v(() => {
        ce = function (t) {
          return !!(t !== null && typeof t == 'object' && t.getVelocity);
        };
      });
    function rw(t, e, n, r) {
      var o = t.transform,
        i = t.transformKeys,
        a = e.enableHardwareAcceleration,
        s = a === void 0 ? !0 : a,
        l = e.allowTransformNone,
        u = l === void 0 ? !0 : l,
        c = '';
      i.sort(nw);
      for (var f = !1, p = i.length, d = 0; d < p; d++) {
        var h = i[d];
        (c += ''.concat(Vh[h] || h, '(').concat(o[h], ') ')),
          h === 'z' && (f = !0);
      }
      return (
        !f && s ? (c += 'translateZ(0)') : (c = c.trim()),
        r ? (c = r(o, n ? '' : c)) : u && n && (c = 'none'),
        c
      );
    }
    function ow(t) {
      var e = t.originX,
        n = e === void 0 ? '50%' : e,
        r = t.originY,
        o = r === void 0 ? '50%' : r,
        i = t.originZ,
        a = i === void 0 ? 0 : i;
      return ''.concat(n, ' ').concat(o, ' ').concat(a);
    }
    var Vh,
      iw = v(() => {
        je(),
          (Vh = {
            x: 'translateX',
            y: 'translateY',
            z: 'translateZ',
            transformPerspective: 'perspective',
          });
      });
    function zh(t) {
      return t.startsWith('--');
    }
    var Bh = v(() => {}),
      Uh,
      aw = v(() => {
        Uh = function (t, e) {
          return e && typeof t == 'number' ? e.transform(t) : t;
        };
      });
    function kr(t) {
      return typeof t == 'string';
    }
    var Xs,
      Pn,
      Nn,
      Bo,
      Hh,
      Fe = v(() => {
        (Xs = (t, e) => (n) => Math.max(Math.min(n, e), t)),
          (Pn = (t) => (t % 1 ? Number(t.toFixed(5)) : t)),
          (Nn = /(-)?([\d]*\.?[\d])+/g),
          (Bo =
            /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi),
          (Hh =
            /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i);
      }),
      Ie,
      Tn,
      fr,
      ui = v(() => {
        Fe(),
          (Ie = {
            test: (t) => typeof t == 'number',
            parse: parseFloat,
            transform: (t) => t,
          }),
          (Tn = Object.assign(Object.assign({}, Ie), { transform: Xs(0, 1) })),
          (fr = Object.assign(Object.assign({}, Ie), { default: 1 }));
      }),
      dn,
      ge,
      Zt,
      U,
      Wh,
      Yh,
      _a,
      qh = v(() => {
        Fe(),
          (dn = (t) => ({
            test: (e) => kr(e) && e.endsWith(t) && e.split(' ').length === 1,
            parse: parseFloat,
            transform: (e) => `${e}${t}`,
          })),
          (ge = dn('deg')),
          (Zt = dn('%')),
          (U = dn('px')),
          (Wh = dn('vh')),
          (Yh = dn('vw')),
          (_a = Object.assign(Object.assign({}, Zt), {
            parse: (t) => Zt.parse(t) / 100,
            transform: (t) => Zt.transform(t * 100),
          }));
      }),
      ci,
      _s,
      Ks = v(() => {
        Fe(),
          (ci = (t, e) => (n) =>
            !!(
              (kr(n) && Hh.test(n) && n.startsWith(t)) ||
              (e && Object.prototype.hasOwnProperty.call(n, e))
            )),
          (_s = (t, e, n) => (r) => {
            if (!kr(r)) return r;
            let [o, i, a, s] = r.match(Nn);
            return {
              [t]: parseFloat(o),
              [e]: parseFloat(i),
              [n]: parseFloat(a),
              alpha: s !== void 0 ? parseFloat(s) : 1,
            };
          });
      }),
      Ne,
      Gh = v(() => {
        ui(),
          qh(),
          Fe(),
          Ks(),
          (Ne = {
            test: ci('hsl', 'hue'),
            parse: _s('hue', 'saturation', 'lightness'),
            transform: ({
              hue: t,
              saturation: e,
              lightness: n,
              alpha: r = 1,
            }) =>
              'hsla(' +
              Math.round(t) +
              ', ' +
              Zt.transform(Pn(e)) +
              ', ' +
              Zt.transform(Pn(n)) +
              ', ' +
              Pn(Tn.transform(r)) +
              ')',
          });
      }),
      Kc,
      eo,
      ye,
      Qs = v(() => {
        ui(),
          Fe(),
          Ks(),
          (Kc = Xs(0, 255)),
          (eo = Object.assign(Object.assign({}, Ie), {
            transform: (t) => Math.round(Kc(t)),
          })),
          (ye = {
            test: ci('rgb', 'red'),
            parse: _s('red', 'green', 'blue'),
            transform: ({ red: t, green: e, blue: n, alpha: r = 1 }) =>
              'rgba(' +
              eo.transform(t) +
              ', ' +
              eo.transform(e) +
              ', ' +
              eo.transform(n) +
              ', ' +
              Pn(Tn.transform(r)) +
              ')',
          });
      });
    function sw(t) {
      let e = '',
        n = '',
        r = '',
        o = '';
      return (
        t.length > 5
          ? ((e = t.substr(1, 2)),
            (n = t.substr(3, 2)),
            (r = t.substr(5, 2)),
            (o = t.substr(7, 2)))
          : ((e = t.substr(1, 1)),
            (n = t.substr(2, 1)),
            (r = t.substr(3, 1)),
            (o = t.substr(4, 1)),
            (e += e),
            (n += n),
            (r += r),
            (o += o)),
        {
          red: parseInt(e, 16),
          green: parseInt(n, 16),
          blue: parseInt(r, 16),
          alpha: o ? parseInt(o, 16) / 255 : 1,
        }
      );
    }
    var Uo,
      Xh = v(() => {
        Qs(),
          Ks(),
          (Uo = { test: ci('#'), parse: sw, transform: ye.transform });
      }),
      Rt,
      _h = v(() => {
        Fe(),
          Xh(),
          Gh(),
          Qs(),
          (Rt = {
            test: (t) => ye.test(t) || Uo.test(t) || Ne.test(t),
            parse: (t) =>
              ye.test(t) ? ye.parse(t) : Ne.test(t) ? Ne.parse(t) : Uo.parse(t),
            transform: (t) =>
              kr(t)
                ? t
                : t.hasOwnProperty('red')
                  ? ye.transform(t)
                  : Ne.transform(t),
          });
      });
    function lw(t) {
      var e, n, r, o;
      return (
        isNaN(t) &&
        kr(t) &&
        ((n =
          (e = t.match(Nn)) === null || e === void 0 ? void 0 : e.length) !==
          null && n !== void 0
          ? n
          : 0) +
          ((o =
            (r = t.match(Bo)) === null || r === void 0 ? void 0 : r.length) !==
            null && o !== void 0
            ? o
            : 0) >
          0
      );
    }
    function Kh(t) {
      typeof t == 'number' && (t = `${t}`);
      let e = [],
        n = 0,
        r = t.match(Bo);
      r &&
        ((n = r.length), (t = t.replace(Bo, Js)), e.push(...r.map(Rt.parse)));
      let o = t.match(Nn);
      return (
        o && ((t = t.replace(Nn, Zs)), e.push(...o.map(Ie.parse))),
        { values: e, numColors: n, tokenised: t }
      );
    }
    function Qh(t) {
      return Kh(t).values;
    }
    function Jh(t) {
      let { values: e, numColors: n, tokenised: r } = Kh(t),
        o = e.length;
      return (i) => {
        let a = r;
        for (let s = 0; s < o; s++)
          a = a.replace(s < n ? Js : Zs, s < n ? Rt.transform(i[s]) : Pn(i[s]));
        return a;
      };
    }
    function uw(t) {
      let e = Qh(t);
      return Jh(t)(e.map(Zh));
    }
    var Js,
      Zs,
      Zh,
      pe,
      $h = v(() => {
        _h(),
          ui(),
          Fe(),
          (Js = '${c}'),
          (Zs = '${n}'),
          (Zh = (t) => (typeof t == 'number' ? 0 : t)),
          (pe = {
            test: lw,
            parse: Qh,
            createTransformer: Jh,
            getAnimatableNone: uw,
          });
      });
    function cw(t) {
      let [e, n] = t.slice(0, -1).split('(');
      if (e === 'drop-shadow') return t;
      let [r] = n.match(Nn) || [];
      if (!r) return t;
      let o = n.replace(r, ''),
        i = tm.has(e) ? 1 : 0;
      return r !== n && (i *= 100), e + '(' + i + o + ')';
    }
    var tm,
      Qc,
      Ho,
      pw = v(() => {
        $h(),
          Fe(),
          (tm = new Set(['brightness', 'contrast', 'saturate', 'opacity'])),
          (Qc = /([a-z-]*)\(.*?\)/g),
          (Ho = Object.assign(Object.assign({}, pe), {
            getAnimatableNone: (t) => {
              let e = t.match(Qc);
              return e ? e.map(cw).join(' ') : t;
            },
          }));
      }),
      wt = v(() => {
        ui(), qh(), Gh(), Qs(), Xh(), _h(), $h(), pw();
      }),
      Ka,
      fw = v(() => {
        G(), wt(), (Ka = A(A({}, Ie), { transform: Math.round }));
      }),
      $s,
      em = v(() => {
        wt(),
          fw(),
          ($s = {
            borderWidth: U,
            borderTopWidth: U,
            borderRightWidth: U,
            borderBottomWidth: U,
            borderLeftWidth: U,
            borderRadius: U,
            radius: U,
            borderTopLeftRadius: U,
            borderTopRightRadius: U,
            borderBottomRightRadius: U,
            borderBottomLeftRadius: U,
            width: U,
            maxWidth: U,
            height: U,
            maxHeight: U,
            size: U,
            top: U,
            right: U,
            bottom: U,
            left: U,
            padding: U,
            paddingTop: U,
            paddingRight: U,
            paddingBottom: U,
            paddingLeft: U,
            margin: U,
            marginTop: U,
            marginRight: U,
            marginBottom: U,
            marginLeft: U,
            rotate: ge,
            rotateX: ge,
            rotateY: ge,
            rotateZ: ge,
            scale: fr,
            scaleX: fr,
            scaleY: fr,
            scaleZ: fr,
            skew: ge,
            skewX: ge,
            skewY: ge,
            distance: U,
            translateX: U,
            translateY: U,
            translateZ: U,
            x: U,
            y: U,
            z: U,
            perspective: U,
            transformPerspective: U,
            opacity: Tn,
            originX: _a,
            originY: _a,
            originZ: U,
            zIndex: Ka,
            fillOpacity: Tn,
            strokeOpacity: Tn,
            numOctaves: Ka,
          });
      });
    function tl(t, e, n, r) {
      var o,
        i = t.style,
        a = t.vars,
        s = t.transform,
        l = t.transformKeys,
        u = t.transformOrigin;
      l.length = 0;
      var c = !1,
        f = !1,
        p = !0;
      for (var d in e) {
        var h = e[d];
        if (zh(d)) {
          a[d] = h;
          continue;
        }
        var m = $s[d],
          y = Uh(h, m);
        if (Br(d)) {
          if (((c = !0), (s[d] = y), l.push(d), !p)) continue;
          h !== ((o = m.default) !== null && o !== void 0 ? o : 0) && (p = !1);
        } else Nh(d) ? ((u[d] = y), (f = !0)) : (i[d] = y);
      }
      c
        ? (i.transform = rw(t, n, p, r))
        : r
          ? (i.transform = r({}, ''))
          : !e.transform && i.transform && (i.transform = 'none'),
        f && (i.transformOrigin = ow(u));
    }
    var el = v(() => {
        iw(), Bh(), je(), aw(), em();
      }),
      pi,
      nl = v(() => {
        pi = function () {
          return {
            style: {},
            transform: {},
            transformKeys: [],
            transformOrigin: {},
            vars: {},
          };
        };
      });
    function nm(t, e, n) {
      for (var r in e) !ce(e[r]) && !jh(r, n) && (t[r] = e[r]);
    }
    function dw(t, e, n) {
      var r = t.transformTemplate;
      return Nt(
        function () {
          var o = pi();
          tl(o, e, { enableHardwareAcceleration: !n }, r);
          var i = o.vars,
            a = o.style;
          return A(A({}, i), a);
        },
        [e]
      );
    }
    function hw(t, e, n) {
      var r = t.style || {},
        o = {};
      return (
        nm(o, r, t),
        Object.assign(o, dw(t, e, n)),
        t.transformValues && (o = t.transformValues(o)),
        o
      );
    }
    function mw(t, e, n) {
      var r = {},
        o = hw(t, e, n);
      return (
        t.drag &&
          t.dragListener !== !1 &&
          ((r.draggable = !1),
          (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = 'none'),
          (o.touchAction =
            t.drag === !0
              ? 'none'
              : 'pan-'.concat(t.drag === 'x' ? 'y' : 'x'))),
        (r.style = o),
        r
      );
    }
    var rm = v(() => {
      G(), Fh(), nn(), el(), nl();
    });
    function Wo(t) {
      return om.has(t);
    }
    var om,
      vw = v(() => {
        om = new Set([
          'initial',
          'animate',
          'exit',
          'style',
          'variants',
          'transition',
          'transformTemplate',
          'transformValues',
          'custom',
          'inherit',
          'layout',
          'layoutId',
          'layoutDependency',
          'onLayoutAnimationStart',
          'onLayoutAnimationComplete',
          'onLayoutMeasure',
          'onBeforeLayoutMeasure',
          'onAnimationStart',
          'onAnimationComplete',
          'onUpdate',
          'onDragStart',
          'onDrag',
          'onDragEnd',
          'onMeasureDragConstraints',
          'onDirectionLock',
          'onDragTransitionEnd',
          'drag',
          'dragControls',
          'dragListener',
          'dragConstraints',
          'dragDirectionLock',
          'dragSnapToOrigin',
          '_dragX',
          '_dragY',
          'dragElastic',
          'dragMomentum',
          'dragPropagation',
          'dragTransition',
          'whileDrag',
          'onPan',
          'onPanStart',
          'onPanEnd',
          'onPanSessionStart',
          'onTap',
          'onTapStart',
          'onTapCancel',
          'onHoverStart',
          'onHoverEnd',
          'whileFocus',
          'whileTap',
          'whileHover',
          'whileInView',
          'onViewportEnter',
          'onViewportLeave',
          'viewport',
          'layoutScroll',
        ]);
      });
    function gw(t) {
      var e = {};
      return function (n) {
        return e[n] === void 0 && (e[n] = t(n)), e[n];
      };
    }
    var im,
      yw = v(() => {
        im = gw;
      }),
      am = {};
    gf(am, { default: () => sm });
    var Jc,
      Zc,
      sm,
      bw = v(() => {
        yw(),
          (Jc =
            /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/),
          (Zc = im(function (t) {
            return (
              Jc.test(t) ||
              (t.charCodeAt(0) === 111 &&
                t.charCodeAt(1) === 110 &&
                t.charCodeAt(2) < 91)
            );
          })),
          (sm = Zc);
      });
    function ww(t) {
      t &&
        (rl = function (e) {
          return e.startsWith('on') ? !Wo(e) : t(e);
        });
    }
    function Ew(t, e, n) {
      var r = {};
      for (var o in t)
        (rl(o) ||
          (n === !0 && Wo(o)) ||
          (!e && !Wo(o)) ||
          (t.draggable && o.startsWith('onDrag'))) &&
          (r[o] = t[o]);
      return r;
    }
    var rl,
      xw = v(() => {
        vw(),
          (rl = function (t) {
            return !Wo(t);
          });
        try {
          ww((bw(), Cy(am)).default);
        } catch {}
      });
    function $c(t, e, n) {
      return typeof t == 'string' ? t : U.transform(e + n * t);
    }
    function Ow(t, e, n) {
      var r = $c(e, t.x, t.width),
        o = $c(n, t.y, t.height);
      return ''.concat(r, ' ').concat(o);
    }
    var Sw = v(() => {
      wt();
    });
    function Pw(t, e, n, r, o) {
      n === void 0 && (n = 1),
        r === void 0 && (r = 0),
        o === void 0 && (o = !0),
        (t.pathLength = 1);
      var i = o ? lm : um;
      t[i.offset] = U.transform(-r);
      var a = U.transform(e),
        s = U.transform(n);
      t[i.array] = ''.concat(a, ' ').concat(s);
    }
    var lm,
      um,
      Tw = v(() => {
        wt(),
          (lm = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' }),
          (um = { offset: 'strokeDashoffset', array: 'strokeDasharray' });
      });
    function ol(t, e, n, r) {
      var o = e.attrX,
        i = e.attrY,
        a = e.originX,
        s = e.originY,
        l = e.pathLength,
        u = e.pathSpacing,
        c = u === void 0 ? 1 : u,
        f = e.pathOffset,
        p = f === void 0 ? 0 : f,
        d = jt(e, [
          'attrX',
          'attrY',
          'originX',
          'originY',
          'pathLength',
          'pathSpacing',
          'pathOffset',
        ]);
      tl(t, d, n, r), (t.attrs = t.style), (t.style = {});
      var h = t.attrs,
        m = t.style,
        y = t.dimensions;
      h.transform && (y && (m.transform = h.transform), delete h.transform),
        y &&
          (a !== void 0 || s !== void 0 || m.transform) &&
          (m.transformOrigin = Ow(
            y,
            a !== void 0 ? a : 0.5,
            s !== void 0 ? s : 0.5
          )),
        o !== void 0 && (h.x = o),
        i !== void 0 && (h.y = i),
        l !== void 0 && Pw(h, l, c, p, !1);
    }
    var il = v(() => {
        G(), el(), Sw(), Tw();
      }),
      al,
      cm = v(() => {
        G(),
          nl(),
          (al = function () {
            return A(A({}, pi()), { attrs: {} });
          });
      });
    function Cw(t, e) {
      var n = Nt(
        function () {
          var o = al();
          return (
            ol(o, e, { enableHardwareAcceleration: !1 }, t.transformTemplate),
            A(A({}, o.attrs), { style: A({}, o.style) })
          );
        },
        [e]
      );
      if (t.style) {
        var r = {};
        nm(r, t.style, t), (n.style = A(A({}, r), n.style));
      }
      return n;
    }
    var Aw = v(() => {
      G(), rm(), il(), cm();
    });
    function kw(t) {
      t === void 0 && (t = !1);
      var e = function (n, r, o, i, a, s) {
        var l = a.latestValues,
          u = Ys(n) ? Cw : mw,
          c = u(r, l, s),
          f = Ew(r, typeof n == 'string', t),
          p = A(A(A({}, f), c), { ref: i });
        return o && (p['data-projection-id'] = o), q(n, p);
      };
      return e;
    }
    var Rw = v(() => {
        G(), rm(), xw(), qs(), Aw();
      }),
      tp,
      ep,
      sl,
      pm = v(() => {
        (tp = /([a-z])([A-Z])/g),
          (ep = '$1-$2'),
          (sl = function (t) {
            return t.replace(tp, ep).toLowerCase();
          });
      });
    function fm(t, e, n, r) {
      var o = e.style,
        i = e.vars;
      Object.assign(t.style, o, r && r.getProjectionStyles(n));
      for (var a in i) t.style.setProperty(a, i[a]);
    }
    var dm = v(() => {}),
      ll,
      hm = v(() => {
        ll = new Set([
          'baseFrequency',
          'diffuseConstant',
          'kernelMatrix',
          'kernelUnitLength',
          'keySplines',
          'keyTimes',
          'limitingConeAngle',
          'markerHeight',
          'markerWidth',
          'numOctaves',
          'targetX',
          'targetY',
          'surfaceScale',
          'specularConstant',
          'specularExponent',
          'stdDeviation',
          'tableValues',
          'viewBox',
          'gradientTransform',
          'pathLength',
        ]);
      });
    function mm(t, e, n, r) {
      fm(t, e, void 0, r);
      for (var o in e.attrs) t.setAttribute(ll.has(o) ? o : sl(o), e.attrs[o]);
    }
    var vm = v(() => {
      pm(), dm(), hm();
    });
    function ul(t) {
      var e = t.style,
        n = {};
      for (var r in e) (ce(e[r]) || jh(r, t)) && (n[r] = e[r]);
      return n;
    }
    var cl = v(() => {
      Fh(), nn();
    });
    function gm(t) {
      var e = ul(t);
      for (var n in t)
        if (ce(t[n])) {
          var r = n === 'x' || n === 'y' ? 'attr' + n.toUpperCase() : n;
          e[r] = t[n];
        }
      return e;
    }
    var ym = v(() => {
      nn(), cl();
    });
    function pl(t) {
      return typeof t == 'object' && typeof t.start == 'function';
    }
    var fl = v(() => {}),
      In,
      fi = v(() => {
        In = function (t) {
          return Array.isArray(t);
        };
      }),
      bm,
      dl,
      hl = v(() => {
        fi(),
          (bm = function (t) {
            return !!(t && typeof t == 'object' && t.mix && t.toValue);
          }),
          (dl = function (t) {
            return In(t) ? t[t.length - 1] || 0 : t;
          });
      });
    function go(t) {
      var e = ce(t) ? t.get() : t;
      return bm(e) ? e.toValue() : e;
    }
    var wm = v(() => {
      hl(), nn();
    });
    function np(t, e, n, r) {
      var o = t.scrapeMotionValuesFromProps,
        i = t.createRenderState,
        a = t.onMount,
        s = { latestValues: Mw(e, n, r, o), renderState: i() };
      return (
        a &&
          (s.mount = function (l) {
            return a(e, l, s);
          }),
        s
      );
    }
    function Mw(t, e, n, r) {
      var o = {},
        i = n?.initial === !1,
        a = r(t);
      for (var s in a) o[s] = go(a[s]);
      var l = t.initial,
        u = t.animate,
        c = ai(t),
        f = Ch(t);
      e &&
        f &&
        !c &&
        t.inherit !== !1 &&
        (l ?? (l = e.initial), u ?? (u = e.animate));
      var p = i || l === !1,
        d = p ? u : l;
      if (d && typeof d != 'boolean' && !pl(d)) {
        var h = Array.isArray(d) ? d : [d];
        h.forEach(function (m) {
          var y = Th(t, m);
          if (y) {
            var E = y.transitionEnd;
            y.transition;
            var x = jt(y, ['transitionEnd', 'transition']);
            for (var b in x) {
              var w = x[b];
              if (Array.isArray(w)) {
                var O = p ? w.length - 1 : 0;
                w = w[O];
              }
              w !== null && (o[b] = w);
            }
            for (var b in E) o[b] = E[b];
          }
        });
      }
      return o;
    }
    var ml,
      Em = v(() => {
        G(),
          fl(),
          ri(),
          zn(),
          li(),
          wm(),
          ni(),
          (ml = function (t) {
            return function (e, n) {
              var r = mt(Vr),
                o = mt(zr);
              return n
                ? np(t, e, r, o)
                : si(function () {
                    return np(t, e, r, o);
                  });
            };
          });
      }),
      xm,
      Dw = v(() => {
        vm(),
          ym(),
          Em(),
          cm(),
          il(),
          (xm = {
            useVisualState: ml({
              scrapeMotionValuesFromProps: gm,
              createRenderState: al,
              onMount: function (t, e, n) {
                var r = n.renderState,
                  o = n.latestValues;
                try {
                  r.dimensions =
                    typeof e.getBBox == 'function'
                      ? e.getBBox()
                      : e.getBoundingClientRect();
                } catch {
                  r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
                ol(
                  r,
                  o,
                  { enableHardwareAcceleration: !1 },
                  t.transformTemplate
                ),
                  mm(e, r);
              },
            }),
          });
      }),
      Om,
      Nw = v(() => {
        Em(),
          cl(),
          nl(),
          (Om = {
            useVisualState: ml({
              scrapeMotionValuesFromProps: ul,
              createRenderState: pi,
            }),
          });
      });
    function Iw(t, e, n, r, o) {
      var i = e.forwardMotionProps,
        a = i === void 0 ? !1 : i,
        s = Ys(t) ? xm : Om;
      return A(A({}, s), {
        preloadedFeatures: n,
        useRender: kw(a),
        createVisualElement: r,
        projectionNodeConstructor: o,
        Component: t,
      });
    }
    var Lw = v(() => {
        G(), qs(), Rw(), Dw(), Nw();
      }),
      st,
      rn = v(() => {
        (function (t) {
          (t.Animate = 'animate'),
            (t.Hover = 'whileHover'),
            (t.Tap = 'whileTap'),
            (t.Drag = 'whileDrag'),
            (t.Focus = 'whileFocus'),
            (t.InView = 'whileInView'),
            (t.Exit = 'exit');
        })(st || (st = {}));
      });
    function di(t, e, n, r) {
      return (
        r === void 0 && (r = { passive: !0 }),
        t.addEventListener(e, n, r),
        function () {
          return t.removeEventListener(e, n);
        }
      );
    }
    function Qa(t, e, n, r) {
      W(
        function () {
          var o = t.current;
          if (n && o) return di(o, e, n, r);
        },
        [t, e, n, r]
      );
    }
    var hi = v(() => {});
    function jw(t) {
      var e = t.whileFocus,
        n = t.visualElement,
        r = function () {
          var i;
          (i = n.animationState) === null ||
            i === void 0 ||
            i.setActive(st.Focus, !0);
        },
        o = function () {
          var i;
          (i = n.animationState) === null ||
            i === void 0 ||
            i.setActive(st.Focus, !1);
        };
      Qa(n, 'focus', e ? r : void 0), Qa(n, 'blur', e ? o : void 0);
    }
    var Fw = v(() => {
      rn(), hi();
    });
    function Sm(t) {
      return typeof PointerEvent < 'u' && t instanceof PointerEvent
        ? t.pointerType === 'mouse'
        : t instanceof MouseEvent;
    }
    function Pm(t) {
      var e = !!t.touches;
      return e;
    }
    var vl = v(() => {});
    function Vw(t) {
      return function (e) {
        var n = e instanceof MouseEvent,
          r = !n || (n && e.button === 0);
        r && t(e);
      };
    }
    function zw(t, e) {
      e === void 0 && (e = 'page');
      var n = t.touches[0] || t.changedTouches[0],
        r = n || Tm;
      return { x: r[e + 'X'], y: r[e + 'Y'] };
    }
    function Bw(t, e) {
      return e === void 0 && (e = 'page'), { x: t[e + 'X'], y: t[e + 'Y'] };
    }
    function gl(t, e) {
      return (
        e === void 0 && (e = 'page'), { point: Pm(t) ? zw(t, e) : Bw(t, e) }
      );
    }
    var Tm,
      yl,
      bl = v(() => {
        vl(),
          (Tm = { pageX: 0, pageY: 0 }),
          (yl = function (t, e) {
            e === void 0 && (e = !1);
            var n = function (r) {
              return t(r, gl(r));
            };
            return e ? Vw(n) : n;
          });
      }),
      Cm,
      Am,
      km,
      Uw = v(() => {
        oi(),
          (Cm = function () {
            return Je && window.onpointerdown === null;
          }),
          (Am = function () {
            return Je && window.ontouchstart === null;
          }),
          (km = function () {
            return Je && window.onmousedown === null;
          });
      });
    function Rm(t) {
      return Cm() ? t : Am() ? Dm[t] : km() ? Mm[t] : t;
    }
    function Cn(t, e, n, r) {
      return di(t, Rm(e), yl(n, e === 'pointerdown'), r);
    }
    function Yo(t, e, n, r) {
      return Qa(t, Rm(e), n && yl(n, e === 'pointerdown'), r);
    }
    var Mm,
      Dm,
      Ur = v(() => {
        hi(),
          bl(),
          Uw(),
          (Mm = {
            pointerdown: 'mousedown',
            pointermove: 'mousemove',
            pointerup: 'mouseup',
            pointercancel: 'mousecancel',
            pointerover: 'mouseover',
            pointerout: 'mouseout',
            pointerenter: 'mouseenter',
            pointerleave: 'mouseleave',
          }),
          (Dm = {
            pointerdown: 'touchstart',
            pointermove: 'touchmove',
            pointerup: 'touchend',
            pointercancel: 'touchcancel',
          });
      });
    function rp(t) {
      var e = null;
      return function () {
        var n = function () {
          e = null;
        };
        return e === null ? ((e = t), n) : !1;
      };
    }
    function Nm(t) {
      var e = !1;
      if (t === 'y') e = Za();
      else if (t === 'x') e = Ja();
      else {
        var n = Ja(),
          r = Za();
        n && r
          ? (e = function () {
              n(), r();
            })
          : (n && n(), r && r());
      }
      return e;
    }
    function Im() {
      var t = Nm(!0);
      return t ? (t(), !1) : !0;
    }
    var Ja,
      Za,
      wl = v(() => {
        (Ja = rp('dragHorizontal')), (Za = rp('dragVertical'));
      });
    function op(t, e, n) {
      return function (r, o) {
        var i;
        !Sm(r) ||
          Im() ||
          ((i = t.animationState) === null ||
            i === void 0 ||
            i.setActive(st.Hover, e),
          n?.(r, o));
      };
    }
    function Hw(t) {
      var e = t.onHoverStart,
        n = t.onHoverEnd,
        r = t.whileHover,
        o = t.visualElement;
      Yo(o, 'pointerenter', e || r ? op(o, !0, e) : void 0, { passive: !e }),
        Yo(o, 'pointerleave', n || r ? op(o, !1, n) : void 0, { passive: !n });
    }
    var Ww = v(() => {
        vl(), rn(), Ur(), wl();
      }),
      $a,
      Yw = v(() => {
        $a = function (t, e) {
          return e ? (t === e ? !0 : $a(t, e.parentElement)) : !1;
        };
      });
    function Lm(t) {
      return W(function () {
        return function () {
          return t();
        };
      }, []);
    }
    var jm = v(() => {}),
      Rr,
      El = v(() => {
        Rr = (t, e, n) => Math.min(Math.max(n, t), e);
      });
    function qw({
      duration: t = 800,
      bounce: e = 0.25,
      velocity: n = 0,
      mass: r = 1,
    }) {
      let o, i;
      Fr(t <= es * 1e3, 'Spring duration must be 10 seconds or less');
      let a = 1 - e;
      (a = Rr(Vm, zm, a)),
        (t = Rr(Fm, es, t / 1e3)),
        a < 1
          ? ((o = (u) => {
              let c = u * a,
                f = c * t,
                p = c - n,
                d = ts(u, a),
                h = Math.exp(-f);
              return yo - (p / d) * h;
            }),
            (i = (u) => {
              let c = u * a * t,
                f = c * n + n,
                p = Math.pow(a, 2) * Math.pow(u, 2) * t,
                d = Math.exp(-c),
                h = ts(Math.pow(u, 2), a);
              return ((-o(u) + yo > 0 ? -1 : 1) * ((f - p) * d)) / h;
            }))
          : ((o = (u) => {
              let c = Math.exp(-u * t),
                f = (u - n) * t + 1;
              return -yo + c * f;
            }),
            (i = (u) => {
              let c = Math.exp(-u * t),
                f = (n - u) * (t * t);
              return c * f;
            }));
      let s = 5 / t,
        l = Gw(o, i, s);
      if (((t = t * 1e3), isNaN(l)))
        return { stiffness: 100, damping: 10, duration: t };
      {
        let u = Math.pow(l, 2) * r;
        return { stiffness: u, damping: a * 2 * Math.sqrt(r * u), duration: t };
      }
    }
    function Gw(t, e, n) {
      let r = n;
      for (let o = 1; o < Bm; o++) r = r - t(r) / e(r);
      return r;
    }
    function ts(t, e) {
      return t * Math.sqrt(1 - e * e);
    }
    var yo,
      Fm,
      es,
      Vm,
      zm,
      Bm,
      Xw = v(() => {
        fe(),
          El(),
          (yo = 0.001),
          (Fm = 0.01),
          (es = 10),
          (Vm = 0.05),
          (zm = 1),
          (Bm = 12);
      });
    function ip(t, e) {
      return e.some((n) => t[n] !== void 0);
    }
    function _w(t) {
      let e = Object.assign(
        {
          velocity: 0,
          stiffness: 100,
          damping: 10,
          mass: 1,
          isResolvedFromDuration: !1,
        },
        t
      );
      if (!ip(t, Hm) && ip(t, Um)) {
        let n = qw(t);
        (e = Object.assign(Object.assign(Object.assign({}, e), n), {
          velocity: 0,
          mass: 1,
        })),
          (e.isResolvedFromDuration = !0);
      }
      return e;
    }
    function xl(t) {
      var { from: e = 0, to: n = 1, restSpeed: r = 2, restDelta: o } = t,
        i = jt(t, ['from', 'to', 'restSpeed', 'restDelta']);
      let a = { done: !1, value: e },
        {
          stiffness: s,
          damping: l,
          mass: u,
          velocity: c,
          duration: f,
          isResolvedFromDuration: p,
        } = _w(i),
        d = ns,
        h = ns;
      function m() {
        let y = c ? -(c / 1e3) : 0,
          E = n - e,
          x = l / (2 * Math.sqrt(s * u)),
          b = Math.sqrt(s / u) / 1e3;
        if (
          (o === void 0 && (o = Math.min(Math.abs(n - e) / 100, 0.4)), x < 1)
        ) {
          let w = ts(b, x);
          (d = (O) => {
            let S = Math.exp(-x * b * O);
            return (
              n -
              S *
                (((y + x * b * E) / w) * Math.sin(w * O) + E * Math.cos(w * O))
            );
          }),
            (h = (O) => {
              let S = Math.exp(-x * b * O);
              return (
                x *
                  b *
                  S *
                  ((Math.sin(w * O) * (y + x * b * E)) / w +
                    E * Math.cos(w * O)) -
                S *
                  (Math.cos(w * O) * (y + x * b * E) - w * E * Math.sin(w * O))
              );
            });
        } else if (x === 1)
          d = (w) => n - Math.exp(-b * w) * (E + (y + b * E) * w);
        else {
          let w = b * Math.sqrt(x * x - 1);
          d = (O) => {
            let S = Math.exp(-x * b * O),
              M = Math.min(w * O, 300);
            return (
              n -
              (S * ((y + x * b * E) * Math.sinh(M) + w * E * Math.cosh(M))) / w
            );
          };
        }
      }
      return (
        m(),
        {
          next: (y) => {
            let E = d(y);
            if (p) a.done = y >= f;
            else {
              let x = h(y) * 1e3,
                b = Math.abs(x) <= r,
                w = Math.abs(n - E) <= o;
              a.done = b && w;
            }
            return (a.value = a.done ? n : E), a;
          },
          flipTarget: () => {
            (c = -c), ([e, n] = [n, e]), m();
          },
        }
      );
    }
    var Um,
      Hm,
      ns,
      Kw = v(() => {
        G(),
          Xw(),
          (Um = ['duration', 'bounce']),
          (Hm = ['stiffness', 'damping', 'mass']),
          (xl.needsInterpolation = (t, e) =>
            typeof t == 'string' || typeof e == 'string'),
          (ns = (t) => 0);
      }),
      Ln,
      Wm = v(() => {
        Ln = (t, e, n) => {
          let r = e - t;
          return r === 0 ? 1 : (n - t) / r;
        };
      }),
      dt,
      mi = v(() => {
        dt = (t, e, n) => -n * t + n * e + t;
      });
    function oa(t, e, n) {
      return (
        n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6
          ? t + (e - t) * 6 * n
          : n < 1 / 2
            ? e
            : n < 2 / 3
              ? t + (e - t) * (2 / 3 - n) * 6
              : t
      );
    }
    function ap({ hue: t, saturation: e, lightness: n, alpha: r }) {
      (t /= 360), (e /= 100), (n /= 100);
      let o = 0,
        i = 0,
        a = 0;
      if (!e) o = i = a = n;
      else {
        let s = n < 0.5 ? n * (1 + e) : n + e - n * e,
          l = 2 * n - s;
        (o = oa(l, s, t + 1 / 3)), (i = oa(l, s, t)), (a = oa(l, s, t - 1 / 3));
      }
      return {
        red: Math.round(o * 255),
        green: Math.round(i * 255),
        blue: Math.round(a * 255),
        alpha: r,
      };
    }
    var Qw = v(() => {}),
      sp,
      lp,
      ia,
      aa,
      Ol,
      Ym = v(() => {
        mi(),
          wt(),
          fe(),
          Qw(),
          (sp = (t, e, n) => {
            let r = t * t,
              o = e * e;
            return Math.sqrt(Math.max(0, n * (o - r) + r));
          }),
          (lp = [Uo, ye, Ne]),
          (ia = (t) => lp.find((e) => e.test(t))),
          (aa = (t) =>
            `'${t}' is not an animatable color. Use the equivalent color code instead.`),
          (Ol = (t, e) => {
            let n = ia(t),
              r = ia(e);
            qt(!!n, aa(t)), qt(!!r, aa(e));
            let o = n.parse(t),
              i = r.parse(e);
            n === Ne && ((o = ap(o)), (n = ye)),
              r === Ne && ((i = ap(i)), (r = ye));
            let a = Object.assign({}, o);
            return (s) => {
              for (let l in a) l !== 'alpha' && (a[l] = sp(o[l], i[l], s));
              return (a.alpha = dt(o.alpha, i.alpha, s)), n.transform(a);
            };
          });
      }),
      qo,
      qm = v(() => {
        qo = (t) => typeof t == 'number';
      }),
      up,
      Hr,
      Sl = v(() => {
        (up = (t, e) => (n) => e(t(n))), (Hr = (...t) => t.reduce(up));
      });
    function cp(t, e) {
      return qo(t) ? (n) => dt(t, e, n) : Rt.test(t) ? Ol(t, e) : Pl(t, e);
    }
    function pp(t) {
      let e = pe.parse(t),
        n = e.length,
        r = 0,
        o = 0,
        i = 0;
      for (let a = 0; a < n; a++)
        r || typeof e[a] == 'number' ? r++ : e[a].hue !== void 0 ? i++ : o++;
      return { parsed: e, numNumbers: r, numRGB: o, numHSL: i };
    }
    var rs,
      Gm,
      Pl,
      Jw = v(() => {
        wt(),
          mi(),
          Ym(),
          qm(),
          Sl(),
          fe(),
          (rs = (t, e) => {
            let n = [...t],
              r = n.length,
              o = t.map((i, a) => cp(i, e[a]));
            return (i) => {
              for (let a = 0; a < r; a++) n[a] = o[a](i);
              return n;
            };
          }),
          (Gm = (t, e) => {
            let n = Object.assign(Object.assign({}, t), e),
              r = {};
            for (let o in n)
              t[o] !== void 0 && e[o] !== void 0 && (r[o] = cp(t[o], e[o]));
            return (o) => {
              for (let i in r) n[i] = r[i](o);
              return n;
            };
          }),
          (Pl = (t, e) => {
            let n = pe.createTransformer(e),
              r = pp(t),
              o = pp(e);
            return r.numHSL === o.numHSL &&
              r.numRGB === o.numRGB &&
              r.numNumbers >= o.numNumbers
              ? Hr(rs(r.parsed, o.parsed), n)
              : (Fr(
                  !0,
                  `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
                ),
                (i) => `${i > 0 ? e : t}`);
          });
      });
    function Zw(t) {
      if (typeof t == 'number') return _m;
      if (typeof t == 'string') return Rt.test(t) ? Ol : Pl;
      if (Array.isArray(t)) return rs;
      if (typeof t == 'object') return Gm;
    }
    function $w(t, e, n) {
      let r = [],
        o = n || Zw(t[0]),
        i = t.length - 1;
      for (let a = 0; a < i; a++) {
        let s = o(t[a], t[a + 1]);
        if (e) {
          let l = Array.isArray(e) ? e[a] : e;
          s = Hr(l, s);
        }
        r.push(s);
      }
      return r;
    }
    function tE([t, e], [n]) {
      return (r) => n(Ln(t, e, r));
    }
    function eE(t, e) {
      let n = t.length,
        r = n - 1;
      return (o) => {
        let i = 0,
          a = !1;
        if ((o <= t[0] ? (a = !0) : o >= t[r] && ((i = r - 1), (a = !0)), !a)) {
          let l = 1;
          for (; l < n && !(t[l] > o || l === r); l++);
          i = l - 1;
        }
        let s = Ln(t[i], t[i + 1], o);
        return e[i](s);
      };
    }
    function Xm(t, e, { clamp: n = !0, ease: r, mixer: o } = {}) {
      let i = t.length;
      qt(
        i === e.length,
        'Both input and output ranges must be the same length'
      ),
        qt(
          !r || !Array.isArray(r) || r.length === i - 1,
          'Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.'
        ),
        t[0] > t[i - 1] &&
          ((t = [].concat(t)), (e = [].concat(e)), t.reverse(), e.reverse());
      let a = $w(e, r, o),
        s = i === 2 ? tE(t, a) : eE(t, a);
      return n ? (l) => s(Rr(t[0], t[i - 1], l)) : s;
    }
    var _m,
      Km = v(() => {
        Wm(),
          mi(),
          Ym(),
          Jw(),
          wt(),
          El(),
          Sl(),
          fe(),
          (_m = (t, e) => (n) => dt(t, e, n));
      }),
      dr,
      bo,
      Qm,
      os,
      Jm,
      nE = v(() => {
        (dr = (t) => (e) => 1 - t(1 - e)),
          (bo = (t) => (e) =>
            e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2),
          (Qm = (t) => (e) => Math.pow(e, t)),
          (os = (t) => (e) => e * e * ((t + 1) * e - t)),
          (Jm = (t) => {
            let e = os(t);
            return (n) =>
              (n *= 2) < 1
                ? 0.5 * e(n)
                : 0.5 * (2 - Math.pow(2, -10 * (n - 1)));
          });
      }),
      sa,
      fp,
      dp,
      hp,
      vi,
      wo,
      Zm,
      Tl,
      is,
      Go,
      $m,
      Eo,
      tv,
      ev,
      nv,
      mp,
      vp,
      gp,
      hr,
      rv,
      ov,
      Cl = v(() => {
        nE(),
          (sa = 1.525),
          (fp = 4 / 11),
          (dp = 8 / 11),
          (hp = 9 / 10),
          (vi = (t) => t),
          (wo = Qm(2)),
          (Zm = dr(wo)),
          (Tl = bo(wo)),
          (is = (t) => 1 - Math.sin(Math.acos(t))),
          (Go = dr(is)),
          ($m = bo(Go)),
          (Eo = os(sa)),
          (tv = dr(Eo)),
          (ev = bo(Eo)),
          (nv = Jm(sa)),
          (mp = 4356 / 361),
          (vp = 35442 / 1805),
          (gp = 16061 / 1805),
          (hr = (t) => {
            if (t === 1 || t === 0) return t;
            let e = t * t;
            return t < fp
              ? 7.5625 * e
              : t < dp
                ? 9.075 * e - 9.9 * t + 3.4
                : t < hp
                  ? mp * e - vp * t + gp
                  : 10.8 * t * t - 20.52 * t + 10.72;
          }),
          (rv = dr(hr)),
          (ov = (t) =>
            t < 0.5 ? 0.5 * (1 - hr(1 - t * 2)) : 0.5 * hr(t * 2 - 1) + 0.5);
      });
    function rE(t, e) {
      return t.map(() => e || Tl).splice(0, t.length - 1);
    }
    function oE(t) {
      let e = t.length;
      return t.map((n, r) => (r !== 0 ? r / (e - 1) : 0));
    }
    function iE(t, e) {
      return t.map((n) => n * e);
    }
    function xo({
      from: t = 0,
      to: e = 1,
      ease: n,
      offset: r,
      duration: o = 300,
    }) {
      let i = { done: !1, value: t },
        a = Array.isArray(e) ? e : [t, e],
        s = iE(r && r.length === a.length ? r : oE(a), o);
      function l() {
        return Xm(s, a, { ease: Array.isArray(n) ? n : rE(a, n) });
      }
      let u = l();
      return {
        next: (c) => ((i.value = u(c)), (i.done = c >= o), i),
        flipTarget: () => {
          a.reverse(), (u = l());
        },
      };
    }
    var aE = v(() => {
      Km(), Cl();
    });
    function sE({
      velocity: t = 0,
      from: e = 0,
      power: n = 0.8,
      timeConstant: r = 350,
      restDelta: o = 0.5,
      modifyTarget: i,
    }) {
      let a = { done: !1, value: e },
        s = n * t,
        l = e + s,
        u = i === void 0 ? l : i(l);
      return (
        u !== l && (s = u - e),
        {
          next: (c) => {
            let f = -s * Math.exp(-c / r);
            return (
              (a.done = !(f > o || f < -o)), (a.value = a.done ? u : u + f), a
            );
          },
          flipTarget: () => {},
        }
      );
    }
    var lE = v(() => {});
    function uE(t) {
      if (Array.isArray(t.to)) return xo;
      if (as[t.type]) return as[t.type];
      let e = new Set(Object.keys(t));
      return e.has('ease') || (e.has('duration') && !e.has('dampingRatio'))
        ? xo
        : e.has('dampingRatio') ||
            e.has('stiffness') ||
            e.has('mass') ||
            e.has('damping') ||
            e.has('restSpeed') ||
            e.has('restDelta')
          ? xl
          : xo;
    }
    var as,
      cE = v(() => {
        Kw(), aE(), lE(), (as = { keyframes: xo, spring: xl, decay: sE });
      }),
      ss,
      yp,
      ls,
      pE = v(() => {
        (ss = 16.666666666666668),
          (yp =
            typeof performance < 'u'
              ? () => performance.now()
              : () => Date.now()),
          (ls =
            typeof window < 'u'
              ? (t) => window.requestAnimationFrame(t)
              : (t) => setTimeout(() => t(yp()), ss));
      });
    function fE(t) {
      let e = [],
        n = [],
        r = 0,
        o = !1,
        i = !1,
        a = new WeakSet(),
        s = {
          schedule: (l, u = !1, c = !1) => {
            let f = c && o,
              p = f ? e : n;
            return (
              u && a.add(l),
              p.indexOf(l) === -1 && (p.push(l), f && o && (r = e.length)),
              l
            );
          },
          cancel: (l) => {
            let u = n.indexOf(l);
            u !== -1 && n.splice(u, 1), a.delete(l);
          },
          process: (l) => {
            if (o) {
              i = !0;
              return;
            }
            if (
              ((o = !0), ([e, n] = [n, e]), (n.length = 0), (r = e.length), r)
            )
              for (let u = 0; u < r; u++) {
                let c = e[u];
                c(l), a.has(c) && (s.schedule(c), t());
              }
            (o = !1), i && ((i = !1), s.process(l));
          },
        };
      return s;
    }
    var dE = v(() => {}),
      bp,
      no,
      hn,
      ro,
      Ye,
      mn,
      ar,
      wp,
      tn,
      Oo,
      Ep,
      la,
      xp,
      Mr,
      te,
      on = v(() => {
        pE(),
          dE(),
          (bp = 40),
          (no = !0),
          (hn = !1),
          (ro = !1),
          (Ye = { delta: 0, timestamp: 0 }),
          (mn = ['read', 'update', 'preRender', 'render', 'postRender']),
          (ar = mn.reduce((t, e) => ((t[e] = fE(() => (hn = !0))), t), {})),
          (wp = mn.reduce((t, e) => {
            let n = ar[e];
            return (
              (t[e] = (r, o = !1, i = !1) => (hn || xp(), n.schedule(r, o, i))),
              t
            );
          }, {})),
          (tn = mn.reduce((t, e) => ((t[e] = ar[e].cancel), t), {})),
          (Oo = mn.reduce((t, e) => ((t[e] = () => ar[e].process(Ye)), t), {})),
          (Ep = (t) => ar[t].process(Ye)),
          (la = (t) => {
            (hn = !1),
              (Ye.delta = no
                ? ss
                : Math.max(Math.min(t - Ye.timestamp, bp), 1)),
              (Ye.timestamp = t),
              (ro = !0),
              mn.forEach(Ep),
              (ro = !1),
              hn && ((no = !1), ls(la));
          }),
          (xp = () => {
            (hn = !0), (no = !0), ro || ls(la);
          }),
          (Mr = () => Ye),
          (te = wp);
      });
    function iv(t, e, n = 0) {
      return t - e - n;
    }
    function hE(t, e, n = 0, r = !0) {
      return r ? iv(e + -t, e, n) : e - (t - e) + n;
    }
    function mE(t, e, n, r) {
      return r ? t >= e + n : t <= -n;
    }
    var vE = v(() => {});
    function av(t) {
      var e,
        n,
        {
          from: r,
          autoplay: o = !0,
          driver: i = sv,
          elapsed: a = 0,
          repeat: s = 0,
          repeatType: l = 'loop',
          repeatDelay: u = 0,
          onPlay: c,
          onStop: f,
          onComplete: p,
          onRepeat: d,
          onUpdate: h,
        } = t,
        m = jt(t, [
          'from',
          'autoplay',
          'driver',
          'elapsed',
          'repeat',
          'repeatType',
          'repeatDelay',
          'onPlay',
          'onStop',
          'onComplete',
          'onRepeat',
          'onUpdate',
        ]);
      let { to: y } = m,
        E,
        x = 0,
        b = m.duration,
        w,
        O = !1,
        S = !0,
        M,
        N = uE(m);
      !((n = (e = N).needsInterpolation) === null || n === void 0) &&
        n.call(e, r, y) &&
        ((M = Xm([0, 100], [r, y], { clamp: !1 })), (r = 0), (y = 100));
      let z = N(Object.assign(Object.assign({}, m), { from: r, to: y }));
      function X() {
        x++,
          l === 'reverse'
            ? ((S = x % 2 === 0), (a = hE(a, b, u, S)))
            : ((a = iv(a, b, u)), l === 'mirror' && z.flipTarget()),
          (O = !1),
          d && d();
      }
      function et() {
        E.stop(), p && p();
      }
      function rt(Tt) {
        if ((S || (Tt = -Tt), (a += Tt), !O)) {
          let Ct = z.next(Math.max(0, a));
          (w = Ct.value), M && (w = M(w)), (O = S ? Ct.done : a <= 0);
        }
        h?.(w),
          O &&
            (x === 0 && (b ?? (b = a)), x < s ? mE(a, b, u, S) && X() : et());
      }
      function ht() {
        c?.(), (E = i(rt)), E.start();
      }
      return (
        o && ht(),
        {
          stop: () => {
            f?.(), E.stop();
          },
        }
      );
    }
    var sv,
      lv = v(() => {
        G(),
          cE(),
          on(),
          Km(),
          vE(),
          (sv = (t) => {
            let e = ({ delta: n }) => t(n);
            return { start: () => te.update(e, !0), stop: () => tn.update(e) };
          });
      });
    function uv(t, e) {
      return e ? t * (1e3 / e) : 0;
    }
    var cv = v(() => {});
    function gE({
      from: t = 0,
      velocity: e = 0,
      min: n,
      max: r,
      power: o = 0.8,
      timeConstant: i = 750,
      bounceStiffness: a = 500,
      bounceDamping: s = 10,
      restDelta: l = 1,
      modifyTarget: u,
      driver: c,
      onUpdate: f,
      onComplete: p,
      onStop: d,
    }) {
      let h;
      function m(b) {
        return (n !== void 0 && b < n) || (r !== void 0 && b > r);
      }
      function y(b) {
        return n === void 0
          ? r
          : r === void 0 || Math.abs(n - b) < Math.abs(r - b)
            ? n
            : r;
      }
      function E(b) {
        h?.stop(),
          (h = av(
            Object.assign(Object.assign({}, b), {
              driver: c,
              onUpdate: (w) => {
                var O;
                f?.(w),
                  (O = b.onUpdate) === null || O === void 0 || O.call(b, w);
              },
              onComplete: p,
              onStop: d,
            })
          ));
      }
      function x(b) {
        E(
          Object.assign(
            { type: 'spring', stiffness: a, damping: s, restDelta: l },
            b
          )
        );
      }
      if (m(t)) x({ from: t, velocity: e, to: y(t) });
      else {
        let b = o * e + t;
        typeof u < 'u' && (b = u(b));
        let w = y(b),
          O = w === n ? -1 : 1,
          S,
          M,
          N = (z) => {
            (S = M),
              (M = z),
              (e = uv(z - S, Mr().delta)),
              ((O === 1 && z > w) || (O === -1 && z < w)) &&
                x({ from: z, to: w, velocity: e });
          };
        E({
          type: 'decay',
          from: t,
          velocity: e,
          timeConstant: i,
          power: o,
          restDelta: l,
          modifyTarget: u,
          onUpdate: m(b) ? N : void 0,
        });
      }
      return { stop: () => h?.stop() };
    }
    var yE = v(() => {
        lv(), cv(), on();
      }),
      Xo,
      pv = v(() => {
        Xo = (t) => t.hasOwnProperty('x') && t.hasOwnProperty('y');
      }),
      us,
      bE = v(() => {
        pv(), (us = (t) => Xo(t) && t.hasOwnProperty('z'));
      });
    function fv(t, e) {
      if (qo(t) && qo(e)) return mr(t, e);
      if (Xo(t) && Xo(e)) {
        let n = mr(t.x, e.x),
          r = mr(t.y, e.y),
          o = us(t) && us(e) ? mr(t.z, e.z) : 0;
        return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(o, 2));
      }
    }
    var mr,
      wE = v(() => {
        pv(), bE(), qm(), (mr = (t, e) => Math.abs(t - e));
      });
    function EE(t, e, n, r, o) {
      let i,
        a,
        s = 0;
      do
        (a = e + (n - e) / 2), (i = Dr(a, r, o) - t), i > 0 ? (n = a) : (e = a);
      while (Math.abs(i) > dv && ++s < hv);
      return a;
    }
    function xE(t, e, n, r) {
      for (let o = 0; o < mv; ++o) {
        let i = Al(e, n, r);
        if (i === 0) return e;
        let a = Dr(e, n, r) - t;
        e -= a / i;
      }
      return e;
    }
    function OE(t, e, n, r) {
      if (t === e && n === r) return vi;
      let o = new Float32Array(Sr);
      for (let a = 0; a < Sr; ++a) o[a] = Dr(a * vr, t, n);
      function i(a) {
        let s = 0,
          l = 1,
          u = Sr - 1;
        for (; l !== u && o[l] <= a; ++l) s += vr;
        --l;
        let c = (a - o[l]) / (o[l + 1] - o[l]),
          f = s + c * vr,
          p = Al(f, t, n);
        return p >= vv ? xE(a, f, t, n) : p === 0 ? f : EE(a, s, s + vr, t, n);
      }
      return (a) => (a === 0 || a === 1 ? a : Dr(i(a), e, r));
    }
    var ua,
      ca,
      pa,
      Dr,
      Al,
      dv,
      hv,
      mv,
      vv,
      Sr,
      vr,
      SE = v(() => {
        Cl(),
          (ua = (t, e) => 1 - 3 * e + 3 * t),
          (ca = (t, e) => 3 * e - 6 * t),
          (pa = (t) => 3 * t),
          (Dr = (t, e, n) => ((ua(e, n) * t + ca(e, n)) * t + pa(e)) * t),
          (Al = (t, e, n) => 3 * ua(e, n) * t * t + 2 * ca(e, n) * t + pa(e)),
          (dv = 1e-7),
          (hv = 10),
          (mv = 8),
          (vv = 0.001),
          (Sr = 11),
          (vr = 1 / (Sr - 1));
      }),
      Ht = v(() => {
        lv(), yE(), El(), wE(), mi(), Sl(), Wm(), cv(), Cl(), SE();
      });
    function PE(t) {
      var e = t.onTap,
        n = t.onTapStart,
        r = t.onTapCancel,
        o = t.whileTap,
        i = t.visualElement,
        a = e || n || r || o,
        s = nt(!1),
        l = nt(null),
        u = { passive: !(n || e || r || h) };
      function c() {
        var m;
        (m = l.current) === null || m === void 0 || m.call(l),
          (l.current = null);
      }
      function f() {
        var m;
        return (
          c(),
          (s.current = !1),
          (m = i.animationState) === null ||
            m === void 0 ||
            m.setActive(st.Tap, !1),
          !Im()
        );
      }
      function p(m, y) {
        f() && ($a(i.getInstance(), m.target) ? e?.(m, y) : r?.(m, y));
      }
      function d(m, y) {
        f() && r?.(m, y);
      }
      function h(m, y) {
        var E;
        c(),
          !s.current &&
            ((s.current = !0),
            (l.current = Hr(
              Cn(window, 'pointerup', p, u),
              Cn(window, 'pointercancel', d, u)
            )),
            (E = i.animationState) === null ||
              E === void 0 ||
              E.setActive(st.Tap, !0),
            n?.(m, y));
      }
      Yo(i, 'pointerdown', a ? h : void 0, u), Lm(c);
    }
    var TE = v(() => {
      Yw(), Ur(), jm(), Ht(), rn(), wl();
    });
    function CE(t, e, n) {
      t || cs.has(e) || (console.warn(e), n && console.warn(n), cs.add(e));
    }
    var cs,
      AE = v(() => {
        cs = new Set();
      });
    function kE(t) {
      var e = t.root,
        n = jt(t, ['root']),
        r = e || document;
      So.has(r) || So.set(r, {});
      var o = So.get(r),
        i = JSON.stringify(n);
      return (
        o[i] || (o[i] = new IntersectionObserver(gv, A({ root: e }, n))), o[i]
      );
    }
    function RE(t, e, n) {
      var r = kE(e);
      return (
        _o.set(t, n),
        r.observe(t),
        function () {
          _o.delete(t), r.unobserve(t);
        }
      );
    }
    var _o,
      So,
      Op,
      gv,
      ME = v(() => {
        G(),
          (_o = new WeakMap()),
          (So = new WeakMap()),
          (Op = function (t) {
            var e;
            (e = _o.get(t.target)) === null || e === void 0 || e(t);
          }),
          (gv = function (t) {
            t.forEach(Op);
          });
      });
    function DE(t) {
      var e = t.visualElement,
        n = t.whileInView,
        r = t.onViewportEnter,
        o = t.onViewportLeave,
        i = t.viewport,
        a = i === void 0 ? {} : i,
        s = nt({ hasEnteredView: !1, isInView: !1 }),
        l = !!(n || r || o);
      a.once && s.current.hasEnteredView && (l = !1);
      var u = typeof IntersectionObserver > 'u' ? IE : NE;
      u(l, s.current, e, a);
    }
    function NE(t, e, n, r) {
      var o = r.root,
        i = r.margin,
        a = r.amount,
        s = a === void 0 ? 'some' : a,
        l = r.once;
      W(
        function () {
          if (t) {
            var u = {
                root: o?.current,
                rootMargin: i,
                threshold: typeof s == 'number' ? s : yv[s],
              },
              c = function (f) {
                var p,
                  d = f.isIntersecting;
                if (
                  e.isInView !== d &&
                  ((e.isInView = d), !(l && !d && e.hasEnteredView))
                ) {
                  d && (e.hasEnteredView = !0),
                    (p = n.animationState) === null ||
                      p === void 0 ||
                      p.setActive(st.InView, d);
                  var h = n.getProps(),
                    m = d ? h.onViewportEnter : h.onViewportLeave;
                  m?.(f);
                }
              };
            return RE(n.getInstance(), u, c);
          }
        },
        [t, o, i, s]
      );
    }
    function IE(t, e, n, r) {
      var o = r.fallback,
        i = o === void 0 ? !0 : o;
      W(
        function () {
          !t ||
            !i ||
            (js !== 'production' &&
              CE(
                !1,
                'IntersectionObserver not available on this device. whileInView animations will trigger on mount.'
              ),
            requestAnimationFrame(function () {
              var a;
              e.hasEnteredView = !0;
              var s = n.getProps().onViewportEnter;
              s?.(null),
                (a = n.animationState) === null ||
                  a === void 0 ||
                  a.setActive(st.InView, !0);
            }));
        },
        [t]
      );
    }
    var yv,
      LE = v(() => {
        Eh(), rn(), AE(), ME(), (yv = { some: 0, all: 1 });
      }),
      be,
      kl = v(() => {
        be = function (t) {
          return function (e) {
            return t(e), null;
          };
        };
      }),
      bv,
      jE = v(() => {
        Fw(),
          Ww(),
          TE(),
          LE(),
          kl(),
          (bv = { inView: be(DE), tap: be(PE), focus: be(jw), hover: be(Hw) });
      }),
      Sp,
      Pp,
      wv,
      FE = v(() => {
        li(),
          (Sp = 0),
          (Pp = function () {
            return Sp++;
          }),
          (wv = function () {
            return si(Pp);
          });
      });
    function Ev() {
      var t = mt(zr);
      if (t === null) return [!0, null];
      var e = t.isPresent,
        n = t.onExitComplete,
        r = t.register,
        o = wv();
      W(function () {
        return r(o);
      }, []);
      var i = function () {
        return n?.(o);
      };
      return !e && n ? [!1, i] : [!0];
    }
    var xv = v(() => {
      ri(), FE();
    });
    function Ov(t, e) {
      if (!Array.isArray(e)) return !1;
      var n = e.length;
      if (n !== t.length) return !1;
      for (var r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
      return !0;
    }
    var VE = v(() => {}),
      Nr,
      Sv = v(() => {
        Nr = function (t) {
          return t * 1e3;
        };
      }),
      fa,
      ps,
      Pv,
      zE = v(() => {
        G(),
          fe(),
          Ht(),
          (fa = {
            linear: vi,
            easeIn: wo,
            easeInOut: Tl,
            easeOut: Zm,
            circIn: is,
            circInOut: $m,
            circOut: Go,
            backIn: Eo,
            backInOut: ev,
            backOut: tv,
            anticipate: nv,
            bounceIn: rv,
            bounceInOut: ov,
            bounceOut: hr,
          }),
          (ps = function (t) {
            if (Array.isArray(t)) {
              qt(
                t.length === 4,
                'Cubic bezier arrays must contain four numerical values.'
              );
              var e = bt(t, 4),
                n = e[0],
                r = e[1],
                o = e[2],
                i = e[3];
              return OE(n, r, o, i);
            } else if (typeof t == 'string')
              return (
                qt(fa[t] !== void 0, "Invalid easing type '".concat(t, "'")),
                fa[t]
              );
            return t;
          }),
          (Pv = function (t) {
            return Array.isArray(t) && typeof t[0] != 'number';
          });
      }),
      fs,
      BE = v(() => {
        wt(),
          (fs = function (t, e) {
            return t === 'zIndex'
              ? !1
              : !!(
                  typeof e == 'number' ||
                  Array.isArray(e) ||
                  (typeof e == 'string' && pe.test(e) && !e.startsWith('url('))
                );
          });
      }),
      Te,
      sr,
      oo,
      Tp,
      da,
      Tv,
      UE = v(() => {
        G(),
          fi(),
          (Te = function () {
            return {
              type: 'spring',
              stiffness: 500,
              damping: 25,
              restSpeed: 10,
            };
          }),
          (sr = function (t) {
            return {
              type: 'spring',
              stiffness: 550,
              damping: t === 0 ? 2 * Math.sqrt(550) : 30,
              restSpeed: 10,
            };
          }),
          (oo = function () {
            return { type: 'keyframes', ease: 'linear', duration: 0.3 };
          }),
          (Tp = function (t) {
            return { type: 'keyframes', duration: 0.8, values: t };
          }),
          (da = {
            x: Te,
            y: Te,
            z: Te,
            rotate: Te,
            rotateX: Te,
            rotateY: Te,
            rotateZ: Te,
            scaleX: sr,
            scaleY: sr,
            scale: sr,
            opacity: oo,
            backgroundColor: oo,
            color: oo,
            default: sr,
          }),
          (Tv = function (t, e) {
            var n;
            return (
              In(e) ? (n = Tp) : (n = da[t] || da.default), A({ to: e }, n(e))
            );
          });
      }),
      Cp,
      gi,
      Rl = v(() => {
        G(),
          wt(),
          em(),
          (Cp = A(A({}, $s), {
            color: Rt,
            backgroundColor: Rt,
            outlineColor: Rt,
            fill: Rt,
            stroke: Rt,
            borderColor: Rt,
            borderTopColor: Rt,
            borderRightColor: Rt,
            borderBottomColor: Rt,
            borderLeftColor: Rt,
            filter: Ho,
            WebkitFilter: Ho,
          })),
          (gi = function (t) {
            return Cp[t];
          });
      });
    function Ml(t, e) {
      var n,
        r = gi(t);
      return (
        r !== Ho && (r = pe),
        (n = r.getAnimatableNone) === null || n === void 0
          ? void 0
          : n.call(r, e)
      );
    }
    var Cv = v(() => {
        wt(), Rl();
      }),
      Av,
      HE = v(() => {
        Av = { current: !1 };
      });
    function WE(t) {
      t.when,
        t.delay,
        t.delayChildren,
        t.staggerChildren,
        t.staggerDirection,
        t.repeat,
        t.repeatType,
        t.repeatDelay,
        t.from;
      var e = jt(t, [
        'when',
        'delay',
        'delayChildren',
        'staggerChildren',
        'staggerDirection',
        'repeat',
        'repeatType',
        'repeatDelay',
        'from',
      ]);
      return !!Object.keys(e).length;
    }
    function YE(t) {
      var e = t.ease,
        n = t.times,
        r = t.yoyo,
        o = t.flip,
        i = t.loop,
        a = jt(t, ['ease', 'times', 'yoyo', 'flip', 'loop']),
        s = A({}, a);
      return (
        n && (s.offset = n),
        a.duration && (s.duration = Nr(a.duration)),
        a.repeatDelay && (s.repeatDelay = Nr(a.repeatDelay)),
        e && (s.ease = Pv(e) ? e.map(ps) : ps(e)),
        a.type === 'tween' && (s.type = 'keyframes'),
        (r || i || o) &&
          (Fr(
            !ds,
            'yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options.'
          ),
          (ds = !0),
          r
            ? (s.repeatType = 'reverse')
            : i
              ? (s.repeatType = 'loop')
              : o && (s.repeatType = 'mirror'),
          (s.repeat = i || r || o || a.repeat)),
        a.type !== 'spring' && (s.type = 'keyframes'),
        s
      );
    }
    function qE(t, e) {
      var n,
        r,
        o = Dl(t, e) || {};
      return (r = (n = o.delay) !== null && n !== void 0 ? n : t.delay) !==
        null && r !== void 0
        ? r
        : 0;
    }
    function GE(t) {
      return (
        Array.isArray(t.to) &&
          t.to[0] === null &&
          ((t.to = $t([], bt(t.to), !1)), (t.to[0] = t.from)),
        t
      );
    }
    function XE(t, e, n) {
      var r;
      return (
        Array.isArray(e.to) &&
          (((r = t.duration) !== null && r !== void 0) || (t.duration = 0.8)),
        GE(e),
        WE(t) || (t = A(A({}, t), Tv(n, e.to))),
        A(A({}, e), YE(t))
      );
    }
    function _E(t, e, n, r, o) {
      var i,
        a = Dl(r, t),
        s = (i = a.from) !== null && i !== void 0 ? i : e.get(),
        l = fs(t, n);
      s === 'none' && l && typeof n == 'string'
        ? (s = Ml(t, n))
        : Ap(s) && typeof n == 'string'
          ? (s = kp(n))
          : !Array.isArray(n) && Ap(n) && typeof s == 'string' && (n = kp(s));
      var u = fs(t, s);
      Fr(
        u === l,
        'You are trying to animate '
          .concat(t, ' from "')
          .concat(s, '" to "')
          .concat(n, '". ')
          .concat(
            s,
            ' is not an animatable value - to enable this animation set '
          )
          .concat(s, ' to a value animatable to ')
          .concat(n, ' via the `style` property.')
      );
      function c() {
        var p = {
          from: s,
          to: n,
          velocity: e.getVelocity(),
          onComplete: o,
          onUpdate: function (d) {
            return e.set(d);
          },
        };
        return a.type === 'inertia' || a.type === 'decay'
          ? gE(A(A({}, p), a))
          : av(
              A(A({}, XE(a, p, t)), {
                onUpdate: function (d) {
                  var h;
                  p.onUpdate(d),
                    (h = a.onUpdate) === null || h === void 0 || h.call(a, d);
                },
                onComplete: function () {
                  var d;
                  p.onComplete(),
                    (d = a.onComplete) === null || d === void 0 || d.call(a);
                },
              })
            );
      }
      function f() {
        var p,
          d,
          h = dl(n);
        return (
          e.set(h),
          o(),
          (p = a?.onUpdate) === null || p === void 0 || p.call(a, h),
          (d = a?.onComplete) === null || d === void 0 || d.call(a),
          { stop: function () {} }
        );
      }
      return !u || !l || a.type === !1 ? f : c;
    }
    function Ap(t) {
      return (
        t === 0 ||
        (typeof t == 'string' && parseFloat(t) === 0 && t.indexOf(' ') === -1)
      );
    }
    function kp(t) {
      return typeof t == 'number' ? 0 : Ml('', t);
    }
    function Dl(t, e) {
      return t[e] || t.default || t;
    }
    function Nl(t, e, n, r) {
      return (
        r === void 0 && (r = {}),
        Av.current && (r = { type: !1 }),
        e.start(function (o) {
          var i,
            a,
            s = _E(t, e, n, r, o),
            l = qE(r, t),
            u = function () {
              return (a = s());
            };
          return (
            l ? (i = window.setTimeout(u, Nr(l))) : u(),
            function () {
              clearTimeout(i), a?.stop();
            }
          );
        })
      );
    }
    var ds,
      yi = v(() => {
        G(), Ht(), Sv(), zE(), BE(), UE(), fe(), Cv(), HE(), hl(), (ds = !1);
      }),
      kv,
      KE = v(() => {
        kv = function (t) {
          return /^\-?\d*\.?\d+$/.test(t);
        };
      }),
      Rv,
      QE = v(() => {
        Rv = function (t) {
          return /^0[^.\s]+$/.test(t);
        };
      });
    function Il(t, e) {
      t.indexOf(e) === -1 && t.push(e);
    }
    function Ll(t, e) {
      var n = t.indexOf(e);
      n > -1 && t.splice(n, 1);
    }
    var jl = v(() => {}),
      An,
      Fl = v(() => {
        jl(),
          (An = (function () {
            function t() {
              this.subscriptions = [];
            }
            return (
              (t.prototype.add = function (e) {
                var n = this;
                return (
                  Il(this.subscriptions, e),
                  function () {
                    return Ll(n.subscriptions, e);
                  }
                );
              }),
              (t.prototype.notify = function (e, n, r) {
                var o = this.subscriptions.length;
                if (o)
                  if (o === 1) this.subscriptions[0](e, n, r);
                  else
                    for (var i = 0; i < o; i++) {
                      var a = this.subscriptions[i];
                      a && a(e, n, r);
                    }
              }),
              (t.prototype.getSize = function () {
                return this.subscriptions.length;
              }),
              (t.prototype.clear = function () {
                this.subscriptions.length = 0;
              }),
              t
            );
          })());
      });
    function jn(t) {
      return new Mv(t);
    }
    var Rp,
      Mv,
      bi = v(() => {
        on(),
          Ht(),
          Fl(),
          (Rp = function (t) {
            return !isNaN(parseFloat(t));
          }),
          (Mv = (function () {
            function t(e) {
              var n = this;
              (this.version = '6.5.1'),
                (this.timeDelta = 0),
                (this.lastUpdated = 0),
                (this.updateSubscribers = new An()),
                (this.velocityUpdateSubscribers = new An()),
                (this.renderSubscribers = new An()),
                (this.canTrackVelocity = !1),
                (this.updateAndNotify = function (r, o) {
                  o === void 0 && (o = !0),
                    (n.prev = n.current),
                    (n.current = r);
                  var i = Mr(),
                    a = i.delta,
                    s = i.timestamp;
                  n.lastUpdated !== s &&
                    ((n.timeDelta = a),
                    (n.lastUpdated = s),
                    te.postRender(n.scheduleVelocityCheck)),
                    n.prev !== n.current &&
                      n.updateSubscribers.notify(n.current),
                    n.velocityUpdateSubscribers.getSize() &&
                      n.velocityUpdateSubscribers.notify(n.getVelocity()),
                    o && n.renderSubscribers.notify(n.current);
                }),
                (this.scheduleVelocityCheck = function () {
                  return te.postRender(n.velocityCheck);
                }),
                (this.velocityCheck = function (r) {
                  var o = r.timestamp;
                  o !== n.lastUpdated &&
                    ((n.prev = n.current),
                    n.velocityUpdateSubscribers.notify(n.getVelocity()));
                }),
                (this.hasAnimated = !1),
                (this.prev = this.current = e),
                (this.canTrackVelocity = Rp(this.current));
            }
            return (
              (t.prototype.onChange = function (e) {
                return this.updateSubscribers.add(e);
              }),
              (t.prototype.clearListeners = function () {
                this.updateSubscribers.clear();
              }),
              (t.prototype.onRenderRequest = function (e) {
                return e(this.get()), this.renderSubscribers.add(e);
              }),
              (t.prototype.attach = function (e) {
                this.passiveEffect = e;
              }),
              (t.prototype.set = function (e, n) {
                n === void 0 && (n = !0),
                  !n || !this.passiveEffect
                    ? this.updateAndNotify(e, n)
                    : this.passiveEffect(e, this.updateAndNotify);
              }),
              (t.prototype.get = function () {
                return this.current;
              }),
              (t.prototype.getPrevious = function () {
                return this.prev;
              }),
              (t.prototype.getVelocity = function () {
                return this.canTrackVelocity
                  ? uv(
                      parseFloat(this.current) - parseFloat(this.prev),
                      this.timeDelta
                    )
                  : 0;
              }),
              (t.prototype.start = function (e) {
                var n = this;
                return (
                  this.stop(),
                  new Promise(function (r) {
                    (n.hasAnimated = !0), (n.stopAnimation = e(r));
                  }).then(function () {
                    return n.clearAnimation();
                  })
                );
              }),
              (t.prototype.stop = function () {
                this.stopAnimation && this.stopAnimation(),
                  this.clearAnimation();
              }),
              (t.prototype.isAnimating = function () {
                return !!this.stopAnimation;
              }),
              (t.prototype.clearAnimation = function () {
                this.stopAnimation = null;
              }),
              (t.prototype.destroy = function () {
                this.updateSubscribers.clear(),
                  this.renderSubscribers.clear(),
                  this.stop();
              }),
              t
            );
          })());
      }),
      Vl,
      Dv = v(() => {
        Vl = function (t) {
          return function (e) {
            return e.test(t);
          };
        };
      }),
      Nv,
      JE = v(() => {
        Nv = {
          test: function (t) {
            return t === 'auto';
          },
          parse: function (t) {
            return t;
          },
        };
      }),
      hs,
      gn,
      Iv = v(() => {
        wt(),
          Dv(),
          JE(),
          (hs = [Ie, U, Zt, ge, Yh, Wh, Nv]),
          (gn = function (t) {
            return hs.find(Vl(t));
          });
      }),
      Mp,
      Lv,
      ZE = v(() => {
        G(),
          wt(),
          Iv(),
          Dv(),
          (Mp = $t($t([], bt(hs), !1), [Rt, pe], !1)),
          (Lv = function (t) {
            return Mp.find(Vl(t));
          });
      });
    function $E(t, e, n) {
      t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, jn(n));
    }
    function tx(t, e) {
      var n = ii(t, e),
        r = n ? t.makeTargetAnimatable(n, !1) : {},
        o = r.transitionEnd,
        i = o === void 0 ? {} : o;
      r.transition;
      var a = jt(r, ['transitionEnd', 'transition']);
      a = A(A({}, a), i);
      for (var s in a) {
        var l = dl(a[s]);
        $E(t, s, l);
      }
    }
    function ex(t, e, n) {
      var r,
        o,
        i,
        a,
        s = Object.keys(e).filter(function (d) {
          return !t.hasValue(d);
        }),
        l = s.length;
      if (l)
        for (var u = 0; u < l; u++) {
          var c = s[u],
            f = e[c],
            p = null;
          Array.isArray(f) && (p = f[0]),
            p === null &&
              (p =
                (o =
                  (r = n[c]) !== null && r !== void 0 ? r : t.readValue(c)) !==
                  null && o !== void 0
                  ? o
                  : e[c]),
            p != null &&
              (typeof p == 'string' && (kv(p) || Rv(p))
                ? (p = parseFloat(p))
                : !Lv(p) && pe.test(f) && (p = Ml(c, f)),
              t.addValue(c, jn(p)),
              ((i = (a = n)[c]) !== null && i !== void 0) || (a[c] = p),
              t.setBaseTarget(c, p));
        }
    }
    function nx(t, e) {
      if (e) {
        var n = e[t] || e.default || e;
        return n.from;
      }
    }
    function rx(t, e, n) {
      var r,
        o,
        i = {};
      for (var a in t)
        i[a] =
          (r = nx(a, e)) !== null && r !== void 0
            ? r
            : (o = n.getValue(a)) === null || o === void 0
              ? void 0
              : o.get();
      return i;
    }
    var jv = v(() => {
      G(), wt(), KE(), QE(), hl(), bi(), Cv(), ZE(), zn();
    });
    function ox(t, e, n) {
      n === void 0 && (n = {}), t.notifyAnimationStart(e);
      var r;
      if (Array.isArray(e)) {
        var o = e.map(function (a) {
          return ms(t, a, n);
        });
        r = Promise.all(o);
      } else if (typeof e == 'string') r = ms(t, e, n);
      else {
        var i = typeof e == 'function' ? ii(t, e, n.custom) : e;
        r = Fv(t, i, n);
      }
      return r.then(function () {
        return t.notifyAnimationComplete(e);
      });
    }
    function ms(t, e, n) {
      var r;
      n === void 0 && (n = {});
      var o = ii(t, e, n.custom),
        i = (o || {}).transition,
        a = i === void 0 ? t.getDefaultTransition() || {} : i;
      n.transitionOverride && (a = n.transitionOverride);
      var s = o
          ? function () {
              return Fv(t, o, n);
            }
          : function () {
              return Promise.resolve();
            },
        l =
          !((r = t.variantChildren) === null || r === void 0) && r.size
            ? function (d) {
                d === void 0 && (d = 0);
                var h = a.delayChildren,
                  m = h === void 0 ? 0 : h,
                  y = a.staggerChildren,
                  E = a.staggerDirection;
                return ix(t, e, m + d, y, E, n);
              }
            : function () {
                return Promise.resolve();
              },
        u = a.when;
      if (u) {
        var c = bt(u === 'beforeChildren' ? [s, l] : [l, s], 2),
          f = c[0],
          p = c[1];
        return f().then(p);
      } else return Promise.all([s(), l(n.delay)]);
    }
    function Fv(t, e, n) {
      var r,
        o = n === void 0 ? {} : n,
        i = o.delay,
        a = i === void 0 ? 0 : i,
        s = o.transitionOverride,
        l = o.type,
        u = t.makeTargetAnimatable(e),
        c = u.transition,
        f = c === void 0 ? t.getDefaultTransition() : c,
        p = u.transitionEnd,
        d = jt(u, ['transition', 'transitionEnd']);
      s && (f = s);
      var h = [],
        m =
          l &&
          ((r = t.animationState) === null || r === void 0
            ? void 0
            : r.getState()[l]);
      for (var y in d) {
        var E = t.getValue(y),
          x = d[y];
        if (!(!E || x === void 0 || (m && sx(m, y)))) {
          var b = A({ delay: a }, f);
          t.shouldReduceMotion &&
            Br(y) &&
            (b = A(A({}, b), { type: !1, delay: 0 }));
          var w = Nl(y, E, x, b);
          h.push(w);
        }
      }
      return Promise.all(h).then(function () {
        p && tx(t, p);
      });
    }
    function ix(t, e, n, r, o, i) {
      n === void 0 && (n = 0), r === void 0 && (r = 0), o === void 0 && (o = 1);
      var a = [],
        s = (t.variantChildren.size - 1) * r,
        l =
          o === 1
            ? function (u) {
                return u === void 0 && (u = 0), u * r;
              }
            : function (u) {
                return u === void 0 && (u = 0), s - u * r;
              };
      return (
        Array.from(t.variantChildren)
          .sort(ax)
          .forEach(function (u, c) {
            a.push(
              ms(u, e, A(A({}, i), { delay: n + l(c) })).then(function () {
                return u.notifyAnimationComplete(e);
              })
            );
          }),
        Promise.all(a)
      );
    }
    function ax(t, e) {
      return t.sortNodePosition(e);
    }
    function sx(t, e) {
      var n = t.protectedKeys,
        r = t.needsAnimating,
        o = n.hasOwnProperty(e) && r[e] !== !0;
      return (r[e] = !1), o;
    }
    var lx = v(() => {
      G(), yi(), jv(), zn(), je();
    });
    function ux(t) {
      return function (e) {
        return Promise.all(
          e.map(function (n) {
            var r = n.animation,
              o = n.options;
            return ox(t, r, o);
          })
        );
      };
    }
    function cx(t) {
      var e = ux(t),
        n = fx(),
        r = {},
        o = !0,
        i = function (c, f) {
          var p = ii(t, f);
          if (p) {
            p.transition;
            var d = p.transitionEnd,
              h = jt(p, ['transition', 'transitionEnd']);
            c = A(A(A({}, c), h), d);
          }
          return c;
        };
      function a(c) {
        return r[c] !== void 0;
      }
      function s(c) {
        e = c(t);
      }
      function l(c, f) {
        for (
          var p,
            d = t.getProps(),
            h = t.getVariantContext(!0) || {},
            m = [],
            y = new Set(),
            E = {},
            x = 1 / 0,
            b = function (M) {
              var N = Vv[M],
                z = n[N],
                X = (p = d[N]) !== null && p !== void 0 ? p : h[N],
                et = Jt(X),
                rt = N === f ? z.isActive : null;
              rt === !1 && (x = M);
              var ht = X === h[N] && X !== d[N] && et;
              if (
                (ht && o && t.manuallyAnimateOnMount && (ht = !1),
                (z.protectedKeys = A({}, E)),
                (!z.isActive && rt === null) ||
                  (!X && !z.prevProp) ||
                  pl(X) ||
                  typeof X == 'boolean')
              )
                return 'continue';
              var Tt = px(z.prevProp, X),
                Ct =
                  Tt || (N === f && z.isActive && !ht && et) || (M > x && et),
                Ft = Array.isArray(X) ? X : [X],
                St = Ft.reduce(i, {});
              rt === !1 && (St = {});
              var It = z.prevResolvedValues,
                Wt = It === void 0 ? {} : It,
                ne = A(A({}, Wt), St),
                Mt = function (B) {
                  (Ct = !0), y.delete(B), (z.needsAnimating[B] = !0);
                };
              for (var At in ne) {
                var Z = St[At],
                  I = Wt[At];
                E.hasOwnProperty(At) ||
                  (Z !== I
                    ? In(Z) && In(I)
                      ? !Ov(Z, I) || Tt
                        ? Mt(At)
                        : (z.protectedKeys[At] = !0)
                      : Z !== void 0
                        ? Mt(At)
                        : y.add(At)
                    : Z !== void 0 && y.has(At)
                      ? Mt(At)
                      : (z.protectedKeys[At] = !0));
              }
              (z.prevProp = X),
                (z.prevResolvedValues = St),
                z.isActive && (E = A(A({}, E), St)),
                o && t.blockInitialAnimation && (Ct = !1),
                Ct &&
                  !ht &&
                  m.push.apply(
                    m,
                    $t(
                      [],
                      bt(
                        Ft.map(function (B) {
                          return { animation: B, options: A({ type: N }, c) };
                        })
                      ),
                      !1
                    )
                  );
            },
            w = 0;
          w < zv;
          w++
        )
          b(w);
        if (((r = A({}, E)), y.size)) {
          var O = {};
          y.forEach(function (M) {
            var N = t.getBaseTarget(M);
            N !== void 0 && (O[M] = N);
          }),
            m.push({ animation: O });
        }
        var S = !!m.length;
        return (
          o && d.initial === !1 && !t.manuallyAnimateOnMount && (S = !1),
          (o = !1),
          S ? e(m) : Promise.resolve()
        );
      }
      function u(c, f, p) {
        var d;
        if (n[c].isActive === f) return Promise.resolve();
        (d = t.variantChildren) === null ||
          d === void 0 ||
          d.forEach(function (y) {
            var E;
            return (E = y.animationState) === null || E === void 0
              ? void 0
              : E.setActive(c, f);
          }),
          (n[c].isActive = f);
        var h = l(p, c);
        for (var m in n) n[m].protectedKeys = {};
        return h;
      }
      return {
        isAnimated: a,
        animateChanges: l,
        setActive: u,
        setAnimateFunction: s,
        getState: function () {
          return n;
        },
      };
    }
    function px(t, e) {
      return typeof e == 'string' ? e !== t : Ph(e) ? !Ov(e, t) : !1;
    }
    function qe(t) {
      return (
        t === void 0 && (t = !1),
        {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        }
      );
    }
    function fx() {
      var t;
      return (
        (t = {}),
        (t[st.Animate] = qe(!0)),
        (t[st.InView] = qe()),
        (t[st.Hover] = qe()),
        (t[st.Tap] = qe()),
        (t[st.Drag] = qe()),
        (t[st.Focus] = qe()),
        (t[st.Exit] = qe()),
        t
      );
    }
    var Po,
      Vv,
      zv,
      Bv = v(() => {
        G(),
          fl(),
          fi(),
          VE(),
          lx(),
          rn(),
          zn(),
          (Po = [
            st.Animate,
            st.InView,
            st.Focus,
            st.Hover,
            st.Tap,
            st.Drag,
            st.Exit,
          ]),
          (Vv = $t([], bt(Po), !1).reverse()),
          (zv = Po.length);
      }),
      Uv,
      dx = v(() => {
        G(),
          fl(),
          xv(),
          ri(),
          Bv(),
          rn(),
          kl(),
          (Uv = {
            animation: be(function (t) {
              var e = t.visualElement,
                n = t.animate;
              e.animationState || (e.animationState = cx(e)),
                pl(n) &&
                  W(
                    function () {
                      return n.subscribe(e);
                    },
                    [n]
                  );
            }),
            exit: be(function (t) {
              var e = t.custom,
                n = t.visualElement,
                r = bt(Ev(), 2),
                o = r[0],
                i = r[1],
                a = mt(zr);
              W(
                function () {
                  var s, l;
                  n.isPresent = o;
                  var u =
                    (s = n.animationState) === null || s === void 0
                      ? void 0
                      : s.setActive(st.Exit, !o, {
                          custom:
                            (l = a?.custom) !== null && l !== void 0 ? l : e,
                        });
                  !o && u?.then(i);
                },
                [o]
              );
            }),
          });
      });
    function ha(t, e) {
      return e ? { point: e(t.point) } : t;
    }
    function Dp(t, e) {
      return { x: t.x - e.x, y: t.y - e.y };
    }
    function ma(t, e) {
      var n = t.point;
      return {
        point: n,
        delta: Dp(n, Hv(e)),
        offset: Dp(n, hx(e)),
        velocity: mx(e, 0.1),
      };
    }
    function hx(t) {
      return t[0];
    }
    function Hv(t) {
      return t[t.length - 1];
    }
    function mx(t, e) {
      if (t.length < 2) return { x: 0, y: 0 };
      for (
        var n = t.length - 1, r = null, o = Hv(t);
        n >= 0 && ((r = t[n]), !(o.timestamp - r.timestamp > Nr(e)));

      )
        n--;
      if (!r) return { x: 0, y: 0 };
      var i = (o.timestamp - r.timestamp) / 1e3;
      if (i === 0) return { x: 0, y: 0 };
      var a = { x: (o.x - r.x) / i, y: (o.y - r.y) / i };
      return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
    }
    var zl,
      Wv = v(() => {
        G(),
          vl(),
          bl(),
          on(),
          Sv(),
          Ur(),
          Ht(),
          (zl = (function () {
            function t(e, n, r) {
              var o = this,
                i = r === void 0 ? {} : r,
                a = i.transformPagePoint;
              if (
                ((this.startEvent = null),
                (this.lastMoveEvent = null),
                (this.lastMoveEventInfo = null),
                (this.handlers = {}),
                (this.updatePoint = function () {
                  if (o.lastMoveEvent && o.lastMoveEventInfo) {
                    var p = ma(o.lastMoveEventInfo, o.history),
                      d = o.startEvent !== null,
                      h = fv(p.offset, { x: 0, y: 0 }) >= 3;
                    if (!(!d && !h)) {
                      var m = p.point,
                        y = Mr().timestamp;
                      o.history.push(A(A({}, m), { timestamp: y }));
                      var E = o.handlers,
                        x = E.onStart,
                        b = E.onMove;
                      d ||
                        (x && x(o.lastMoveEvent, p),
                        (o.startEvent = o.lastMoveEvent)),
                        b && b(o.lastMoveEvent, p);
                    }
                  }
                }),
                (this.handlePointerMove = function (p, d) {
                  if (
                    ((o.lastMoveEvent = p),
                    (o.lastMoveEventInfo = ha(d, o.transformPagePoint)),
                    Sm(p) && p.buttons === 0)
                  ) {
                    o.handlePointerUp(p, d);
                    return;
                  }
                  te.update(o.updatePoint, !0);
                }),
                (this.handlePointerUp = function (p, d) {
                  o.end();
                  var h = o.handlers,
                    m = h.onEnd,
                    y = h.onSessionEnd,
                    E = ma(ha(d, o.transformPagePoint), o.history);
                  o.startEvent && m && m(p, E), y && y(p, E);
                }),
                !(Pm(e) && e.touches.length > 1))
              ) {
                (this.handlers = n), (this.transformPagePoint = a);
                var s = gl(e),
                  l = ha(s, this.transformPagePoint),
                  u = l.point,
                  c = Mr().timestamp;
                this.history = [A(A({}, u), { timestamp: c })];
                var f = n.onSessionStart;
                f && f(e, ma(l, this.history)),
                  (this.removeListeners = Hr(
                    Cn(window, 'pointermove', this.handlePointerMove),
                    Cn(window, 'pointerup', this.handlePointerUp),
                    Cn(window, 'pointercancel', this.handlePointerUp)
                  ));
              }
            }
            return (
              (t.prototype.updateHandlers = function (e) {
                this.handlers = e;
              }),
              (t.prototype.end = function () {
                this.removeListeners && this.removeListeners(),
                  tn.update(this.updatePoint);
              }),
              t
            );
          })());
      });
    function we(t) {
      return t.max - t.min;
    }
    function Np(t, e, n) {
      return e === void 0 && (e = 0), n === void 0 && (n = 0.01), fv(t, e) < n;
    }
    function Ip(t, e, n, r) {
      r === void 0 && (r = 0.5),
        (t.origin = r),
        (t.originPoint = dt(e.min, e.max, t.origin)),
        (t.scale = we(n) / we(e)),
        (Np(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
        (t.translate = dt(n.min, n.max, t.origin) - t.originPoint),
        (Np(t.translate) || isNaN(t.translate)) && (t.translate = 0);
    }
    function Pr(t, e, n, r) {
      Ip(t.x, e.x, n.x, r?.originX), Ip(t.y, e.y, n.y, r?.originY);
    }
    function Lp(t, e, n) {
      (t.min = n.min + e.min), (t.max = t.min + we(e));
    }
    function vx(t, e, n) {
      Lp(t.x, e.x, n.x), Lp(t.y, e.y, n.y);
    }
    function jp(t, e, n) {
      (t.min = e.min - n.min), (t.max = t.min + we(e));
    }
    function Tr(t, e, n) {
      jp(t.x, e.x, n.x), jp(t.y, e.y, n.y);
    }
    var Bl = v(() => {
      Ht();
    });
    function gx(t, e, n) {
      var r = e.min,
        o = e.max;
      return (
        r !== void 0 && t < r
          ? (t = n ? dt(r, t, n.min) : Math.max(t, r))
          : o !== void 0 && t > o && (t = n ? dt(o, t, n.max) : Math.min(t, o)),
        t
      );
    }
    function Fp(t, e, n) {
      return {
        min: e !== void 0 ? t.min + e : void 0,
        max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0,
      };
    }
    function yx(t, e) {
      var n = e.top,
        r = e.left,
        o = e.bottom,
        i = e.right;
      return { x: Fp(t.x, r, i), y: Fp(t.y, n, o) };
    }
    function Vp(t, e) {
      var n,
        r = e.min - t.min,
        o = e.max - t.max;
      return (
        e.max - e.min < t.max - t.min &&
          ((n = bt([o, r], 2)), (r = n[0]), (o = n[1])),
        { min: r, max: o }
      );
    }
    function bx(t, e) {
      return { x: Vp(t.x, e.x), y: Vp(t.y, e.y) };
    }
    function wx(t, e) {
      var n = 0.5,
        r = we(t),
        o = we(e);
      return (
        o > r
          ? (n = Ln(e.min, e.max - r, t.min))
          : r > o && (n = Ln(t.min, t.max - o, e.min)),
        Rr(0, 1, n)
      );
    }
    function Ex(t, e) {
      var n = {};
      return (
        e.min !== void 0 && (n.min = e.min - t.min),
        e.max !== void 0 && (n.max = e.max - t.min),
        n
      );
    }
    function xx(t) {
      return (
        t === void 0 && (t = Ko),
        t === !1 ? (t = 0) : t === !0 && (t = Ko),
        { x: zp(t, 'left', 'right'), y: zp(t, 'top', 'bottom') }
      );
    }
    function zp(t, e, n) {
      return { min: Bp(t, e), max: Bp(t, n) };
    }
    function Bp(t, e) {
      var n;
      return typeof t == 'number'
        ? t
        : (n = t[e]) !== null && n !== void 0
          ? n
          : 0;
    }
    var Ko,
      Ox = v(() => {
        G(), Ht(), Bl(), (Ko = 0.35);
      }),
      va,
      kn,
      ga,
      Pt,
      Yv = v(() => {
        (va = function () {
          return { translate: 0, scale: 1, origin: 0, originPoint: 0 };
        }),
          (kn = function () {
            return { x: va(), y: va() };
          }),
          (ga = function () {
            return { min: 0, max: 0 };
          }),
          (Pt = function () {
            return { x: ga(), y: ga() };
          });
      });
    function se(t) {
      return [t('x'), t('y')];
    }
    var qv = v(() => {});
    function Gv(t) {
      var e = t.top,
        n = t.left,
        r = t.right,
        o = t.bottom;
      return { x: { min: n, max: r }, y: { min: e, max: o } };
    }
    function Sx(t) {
      var e = t.x,
        n = t.y;
      return { top: n.min, right: e.max, bottom: n.max, left: e.min };
    }
    function Px(t, e) {
      if (!e) return t;
      var n = e({ x: t.left, y: t.top }),
        r = e({ x: t.right, y: t.bottom });
      return { top: n.y, left: n.x, bottom: r.y, right: r.x };
    }
    var Xv = v(() => {});
    function ya(t) {
      return t === void 0 || t === 1;
    }
    function _v(t) {
      var e = t.scale,
        n = t.scaleX,
        r = t.scaleY;
      return !ya(e) || !ya(n) || !ya(r);
    }
    function ke(t) {
      return (
        _v(t) || Up(t.x) || Up(t.y) || t.z || t.rotate || t.rotateX || t.rotateY
      );
    }
    function Up(t) {
      return t && t !== '0%';
    }
    var Kv = v(() => {});
    function Qo(t, e, n) {
      var r = t - n,
        o = e * r;
      return n + o;
    }
    function Hp(t, e, n, r, o) {
      return o !== void 0 && (t = Qo(t, o, r)), Qo(t, n, r) + e;
    }
    function vs(t, e, n, r, o) {
      e === void 0 && (e = 0),
        n === void 0 && (n = 1),
        (t.min = Hp(t.min, e, n, r, o)),
        (t.max = Hp(t.max, e, n, r, o));
    }
    function Qv(t, e) {
      var n = e.x,
        r = e.y;
      vs(t.x, n.translate, n.scale, n.originPoint),
        vs(t.y, r.translate, r.scale, r.originPoint);
    }
    function Tx(t, e, n, r) {
      var o, i;
      r === void 0 && (r = !1);
      var a = n.length;
      if (a) {
        e.x = e.y = 1;
        for (var s, l, u = 0; u < a; u++)
          (s = n[u]),
            (l = s.projectionDelta),
            ((i =
              (o = s.instance) === null || o === void 0 ? void 0 : o.style) ===
              null || i === void 0
              ? void 0
              : i.display) !== 'contents' &&
              (r &&
                s.options.layoutScroll &&
                s.scroll &&
                s !== s.root &&
                En(t, { x: -s.scroll.x, y: -s.scroll.y }),
              l && ((e.x *= l.x.scale), (e.y *= l.y.scale), Qv(t, l)),
              r && ke(s.latestValues) && En(t, s.latestValues));
      }
    }
    function Re(t, e) {
      (t.min = t.min + e), (t.max = t.max + e);
    }
    function Wp(t, e, n) {
      var r = bt(n, 3),
        o = r[0],
        i = r[1],
        a = r[2],
        s = e[a] !== void 0 ? e[a] : 0.5,
        l = dt(t.min, t.max, s);
      vs(t, e[o], e[i], l, e.scale);
    }
    function En(t, e) {
      Wp(t.x, e, Jv), Wp(t.y, e, Zv);
    }
    var Jv,
      Zv,
      Ul = v(() => {
        G(),
          Ht(),
          Kv(),
          (Jv = ['x', 'scaleX', 'originX']),
          (Zv = ['y', 'scaleY', 'originY']);
      });
    function $v(t, e) {
      return Gv(Px(t.getBoundingClientRect(), e));
    }
    function Cx(t, e, n) {
      var r = $v(t, n),
        o = e.scroll;
      return o && (Re(r.x, o.x), Re(r.y, o.y)), r;
    }
    var tg = v(() => {
      Xv(), Ul();
    });
    function io(t, e, n) {
      return (e === !0 || e === t) && (n === null || n === t);
    }
    function Ax(t, e) {
      e === void 0 && (e = 10);
      var n = null;
      return Math.abs(t.y) > e ? (n = 'y') : Math.abs(t.x) > e && (n = 'x'), n;
    }
    var Yp,
      eg,
      kx = v(() => {
        G(),
          fe(),
          Wv(),
          wl(),
          Bs(),
          Ur(),
          Ox(),
          rn(),
          Yv(),
          qv(),
          tg(),
          bl(),
          yi(),
          Xv(),
          hi(),
          Ht(),
          wt(),
          Bl(),
          (Yp = new WeakMap()),
          (eg = (function () {
            function t(e) {
              (this.openGlobalLock = null),
                (this.isDragging = !1),
                (this.currentDirection = null),
                (this.originPoint = { x: 0, y: 0 }),
                (this.constraints = !1),
                (this.hasMutatedConstraints = !1),
                (this.elastic = Pt()),
                (this.visualElement = e);
            }
            return (
              (t.prototype.start = function (e, n) {
                var r = this,
                  o = n === void 0 ? {} : n,
                  i = o.snapToCursor,
                  a = i === void 0 ? !1 : i;
                if (this.visualElement.isPresent !== !1) {
                  var s = function (f) {
                      r.stopAnimation(),
                        a && r.snapToCursor(gl(f, 'page').point);
                    },
                    l = function (f, p) {
                      var d,
                        h = r.getProps(),
                        m = h.drag,
                        y = h.dragPropagation,
                        E = h.onDragStart;
                      (m &&
                        !y &&
                        (r.openGlobalLock && r.openGlobalLock(),
                        (r.openGlobalLock = Nm(m)),
                        !r.openGlobalLock)) ||
                        ((r.isDragging = !0),
                        (r.currentDirection = null),
                        r.resolveConstraints(),
                        r.visualElement.projection &&
                          ((r.visualElement.projection.isAnimationBlocked = !0),
                          (r.visualElement.projection.target = void 0)),
                        se(function (x) {
                          var b,
                            w,
                            O = r.getAxisMotionValue(x).get() || 0;
                          if (Zt.test(O)) {
                            var S =
                              (w =
                                (b = r.visualElement.projection) === null ||
                                b === void 0
                                  ? void 0
                                  : b.layout) === null || w === void 0
                                ? void 0
                                : w.actual[x];
                            if (S) {
                              var M = we(S);
                              O = M * (parseFloat(O) / 100);
                            }
                          }
                          r.originPoint[x] = O;
                        }),
                        E?.(f, p),
                        (d = r.visualElement.animationState) === null ||
                          d === void 0 ||
                          d.setActive(st.Drag, !0));
                    },
                    u = function (f, p) {
                      var d = r.getProps(),
                        h = d.dragPropagation,
                        m = d.dragDirectionLock,
                        y = d.onDirectionLock,
                        E = d.onDrag;
                      if (!(!h && !r.openGlobalLock)) {
                        var x = p.offset;
                        if (m && r.currentDirection === null) {
                          (r.currentDirection = Ax(x)),
                            r.currentDirection !== null &&
                              y?.(r.currentDirection);
                          return;
                        }
                        r.updateAxis('x', p.point, x),
                          r.updateAxis('y', p.point, x),
                          r.visualElement.syncRender(),
                          E?.(f, p);
                      }
                    },
                    c = function (f, p) {
                      return r.stop(f, p);
                    };
                  this.panSession = new zl(
                    e,
                    {
                      onSessionStart: s,
                      onStart: l,
                      onMove: u,
                      onSessionEnd: c,
                    },
                    {
                      transformPagePoint:
                        this.visualElement.getTransformPagePoint(),
                    }
                  );
                }
              }),
              (t.prototype.stop = function (e, n) {
                var r = this.isDragging;
                if ((this.cancel(), !!r)) {
                  var o = n.velocity;
                  this.startAnimation(o);
                  var i = this.getProps().onDragEnd;
                  i?.(e, n);
                }
              }),
              (t.prototype.cancel = function () {
                var e, n;
                (this.isDragging = !1),
                  this.visualElement.projection &&
                    (this.visualElement.projection.isAnimationBlocked = !1),
                  (e = this.panSession) === null || e === void 0 || e.end(),
                  (this.panSession = void 0);
                var r = this.getProps().dragPropagation;
                !r &&
                  this.openGlobalLock &&
                  (this.openGlobalLock(), (this.openGlobalLock = null)),
                  (n = this.visualElement.animationState) === null ||
                    n === void 0 ||
                    n.setActive(st.Drag, !1);
              }),
              (t.prototype.updateAxis = function (e, n, r) {
                var o = this.getProps().drag;
                if (!(!r || !io(e, o, this.currentDirection))) {
                  var i = this.getAxisMotionValue(e),
                    a = this.originPoint[e] + r[e];
                  this.constraints &&
                    this.constraints[e] &&
                    (a = gx(a, this.constraints[e], this.elastic[e])),
                    i.set(a);
                }
              }),
              (t.prototype.resolveConstraints = function () {
                var e = this,
                  n = this.getProps(),
                  r = n.dragConstraints,
                  o = n.dragElastic,
                  i = (this.visualElement.projection || {}).layout,
                  a = this.constraints;
                r && wn(r)
                  ? this.constraints ||
                    (this.constraints = this.resolveRefConstraints())
                  : r && i
                    ? (this.constraints = yx(i.actual, r))
                    : (this.constraints = !1),
                  (this.elastic = xx(o)),
                  a !== this.constraints &&
                    i &&
                    this.constraints &&
                    !this.hasMutatedConstraints &&
                    se(function (s) {
                      e.getAxisMotionValue(s) &&
                        (e.constraints[s] = Ex(i.actual[s], e.constraints[s]));
                    });
              }),
              (t.prototype.resolveRefConstraints = function () {
                var e = this.getProps(),
                  n = e.dragConstraints,
                  r = e.onMeasureDragConstraints;
                if (!n || !wn(n)) return !1;
                var o = n.current;
                qt(
                  o !== null,
                  "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
                );
                var i = this.visualElement.projection;
                if (!i || !i.layout) return !1;
                var a = Cx(
                    o,
                    i.root,
                    this.visualElement.getTransformPagePoint()
                  ),
                  s = bx(i.layout.actual, a);
                if (r) {
                  var l = r(Sx(s));
                  (this.hasMutatedConstraints = !!l), l && (s = Gv(l));
                }
                return s;
              }),
              (t.prototype.startAnimation = function (e) {
                var n = this,
                  r = this.getProps(),
                  o = r.drag,
                  i = r.dragMomentum,
                  a = r.dragElastic,
                  s = r.dragTransition,
                  l = r.dragSnapToOrigin,
                  u = r.onDragTransitionEnd,
                  c = this.constraints || {},
                  f = se(function (p) {
                    var d;
                    if (io(p, o, n.currentDirection)) {
                      var h = (d = c?.[p]) !== null && d !== void 0 ? d : {};
                      l && (h = { min: 0, max: 0 });
                      var m = a ? 200 : 1e6,
                        y = a ? 40 : 1e7,
                        E = A(
                          A(
                            {
                              type: 'inertia',
                              velocity: i ? e[p] : 0,
                              bounceStiffness: m,
                              bounceDamping: y,
                              timeConstant: 750,
                              restDelta: 1,
                              restSpeed: 10,
                            },
                            s
                          ),
                          h
                        );
                      return n.startAxisValueAnimation(p, E);
                    }
                  });
                return Promise.all(f).then(u);
              }),
              (t.prototype.startAxisValueAnimation = function (e, n) {
                var r = this.getAxisMotionValue(e);
                return Nl(e, r, 0, n);
              }),
              (t.prototype.stopAnimation = function () {
                var e = this;
                se(function (n) {
                  return e.getAxisMotionValue(n).stop();
                });
              }),
              (t.prototype.getAxisMotionValue = function (e) {
                var n,
                  r,
                  o = '_drag' + e.toUpperCase(),
                  i = this.visualElement.getProps()[o];
                return (
                  i ||
                  this.visualElement.getValue(
                    e,
                    (r =
                      (n = this.visualElement.getProps().initial) === null ||
                      n === void 0
                        ? void 0
                        : n[e]) !== null && r !== void 0
                      ? r
                      : 0
                  )
                );
              }),
              (t.prototype.snapToCursor = function (e) {
                var n = this;
                se(function (r) {
                  var o = n.getProps().drag;
                  if (io(r, o, n.currentDirection)) {
                    var i = n.visualElement.projection,
                      a = n.getAxisMotionValue(r);
                    if (i && i.layout) {
                      var s = i.layout.actual[r],
                        l = s.min,
                        u = s.max;
                      a.set(e[r] - dt(l, u, 0.5));
                    }
                  }
                });
              }),
              (t.prototype.scalePositionWithinConstraints = function () {
                var e = this,
                  n,
                  r = this.getProps(),
                  o = r.drag,
                  i = r.dragConstraints,
                  a = this.visualElement.projection;
                if (!(!wn(i) || !a || !this.constraints)) {
                  this.stopAnimation();
                  var s = { x: 0, y: 0 };
                  se(function (u) {
                    var c = e.getAxisMotionValue(u);
                    if (c) {
                      var f = c.get();
                      s[u] = wx({ min: f, max: f }, e.constraints[u]);
                    }
                  });
                  var l = this.visualElement.getProps().transformTemplate;
                  (this.visualElement.getInstance().style.transform = l
                    ? l({}, '')
                    : 'none'),
                    (n = a.root) === null || n === void 0 || n.updateScroll(),
                    a.updateLayout(),
                    this.resolveConstraints(),
                    se(function (u) {
                      if (io(u, o, null)) {
                        var c = e.getAxisMotionValue(u),
                          f = e.constraints[u],
                          p = f.min,
                          d = f.max;
                        c.set(dt(p, d, s[u]));
                      }
                    });
                }
              }),
              (t.prototype.addListeners = function () {
                var e = this,
                  n;
                Yp.set(this.visualElement, this);
                var r = this.visualElement.getInstance(),
                  o = Cn(r, 'pointerdown', function (u) {
                    var c = e.getProps(),
                      f = c.drag,
                      p = c.dragListener,
                      d = p === void 0 ? !0 : p;
                    f && d && e.start(u);
                  }),
                  i = function () {
                    var u = e.getProps().dragConstraints;
                    wn(u) && (e.constraints = e.resolveRefConstraints());
                  },
                  a = this.visualElement.projection,
                  s = a.addEventListener('measure', i);
                a &&
                  !a.layout &&
                  ((n = a.root) === null || n === void 0 || n.updateScroll(),
                  a.updateLayout()),
                  i();
                var l = di(window, 'resize', function () {
                  return e.scalePositionWithinConstraints();
                });
                return (
                  a.addEventListener('didUpdate', function (u) {
                    var c = u.delta,
                      f = u.hasLayoutChanged;
                    e.isDragging &&
                      f &&
                      (se(function (p) {
                        var d = e.getAxisMotionValue(p);
                        d &&
                          ((e.originPoint[p] += c[p].translate),
                          d.set(d.get() + c[p].translate));
                      }),
                      e.visualElement.syncRender());
                  }),
                  function () {
                    l(), o(), s();
                  }
                );
              }),
              (t.prototype.getProps = function () {
                var e = this.visualElement.getProps(),
                  n = e.drag,
                  r = n === void 0 ? !1 : n,
                  o = e.dragDirectionLock,
                  i = o === void 0 ? !1 : o,
                  a = e.dragPropagation,
                  s = a === void 0 ? !1 : a,
                  l = e.dragConstraints,
                  u = l === void 0 ? !1 : l,
                  c = e.dragElastic,
                  f = c === void 0 ? Ko : c,
                  p = e.dragMomentum,
                  d = p === void 0 ? !0 : p;
                return A(A({}, e), {
                  drag: r,
                  dragDirectionLock: i,
                  dragPropagation: s,
                  dragConstraints: u,
                  dragElastic: f,
                  dragMomentum: d,
                });
              }),
              t
            );
          })());
      });
    function Rx(t) {
      var e = t.dragControls,
        n = t.visualElement,
        r = si(function () {
          return new eg(n);
        });
      W(
        function () {
          return e && e.subscribe(r);
        },
        [r, e]
      ),
        W(
          function () {
            return r.addListeners();
          },
          [r]
        );
    }
    var Mx = v(() => {
      kx(), li();
    });
    function Dx(t) {
      var e = t.onPan,
        n = t.onPanStart,
        r = t.onPanEnd,
        o = t.onPanSessionStart,
        i = t.visualElement,
        a = e || n || r || o,
        s = nt(null),
        l = mt(ei).transformPagePoint,
        u = {
          onSessionStart: o,
          onStart: n,
          onMove: e,
          onEnd: function (f, p) {
            (s.current = null), r && r(f, p);
          },
        };
      W(function () {
        s.current !== null && s.current.updateHandlers(u);
      });
      function c(f) {
        s.current = new zl(f, u, { transformPagePoint: l });
      }
      Yo(i, 'pointerdown', a && c),
        Lm(function () {
          return s.current && s.current.end();
        });
    }
    var Nx = v(() => {
        Vs(), jm(), Ur(), Wv();
      }),
      ng,
      Ix = v(() => {
        Mx(), Nx(), kl(), (ng = { pan: be(Dx), drag: be(Rx) });
      });
    function Lx() {
      var t = gr.map(function () {
          return new An();
        }),
        e = {},
        n = {
          clearAllListeners: function () {
            return t.forEach(function (r) {
              return r.clear();
            });
          },
          updatePropListeners: function (r) {
            gr.forEach(function (o) {
              var i,
                a = 'on' + o,
                s = r[a];
              (i = e[o]) === null || i === void 0 || i.call(e),
                s && (e[o] = n[a](s));
            });
          },
        };
      return (
        t.forEach(function (r, o) {
          (n['on' + gr[o]] = function (i) {
            return r.add(i);
          }),
            (n['notify' + gr[o]] = function () {
              for (var i = [], a = 0; a < arguments.length; a++)
                i[a] = arguments[a];
              return r.notify.apply(r, $t([], bt(i), !1));
            });
        }),
        n
      );
    }
    var gr,
      jx = v(() => {
        G(),
          Fl(),
          (gr = [
            'LayoutMeasure',
            'BeforeLayoutMeasure',
            'LayoutUpdate',
            'ViewportBoxUpdate',
            'Update',
            'Render',
            'AnimationComplete',
            'LayoutAnimationComplete',
            'AnimationStart',
            'LayoutAnimationStart',
            'SetAxisTarget',
            'Unmount',
          ]);
      });
    function Fx(t, e, n) {
      var r;
      for (var o in e) {
        var i = e[o],
          a = n[o];
        if (ce(i)) t.addValue(o, i);
        else if (ce(a)) t.addValue(o, jn(i));
        else if (a !== i)
          if (t.hasValue(o)) {
            var s = t.getValue(o);
            !s.hasAnimated && s.set(i);
          } else
            t.addValue(
              o,
              jn((r = t.getStaticValue(o)) !== null && r !== void 0 ? r : i)
            );
      }
      for (var o in n) e[o] === void 0 && t.removeValue(o);
      return e;
    }
    var Vx = v(() => {
        bi(), nn();
      }),
      Hl,
      ba,
      qp,
      rg = v(() => {
        G(),
          on(),
          bi(),
          nn(),
          Bv(),
          jx(),
          Vx(),
          zn(),
          (Hl = function (t) {
            var e = t.treeType,
              n = e === void 0 ? '' : e,
              r = t.build,
              o = t.getBaseTarget,
              i = t.makeTargetAnimatable,
              a = t.measureViewportBox,
              s = t.render,
              l = t.readValueFromInstance,
              u = t.removeValueFromRenderState,
              c = t.sortNodePosition,
              f = t.scrapeMotionValuesFromProps;
            return function (p, d) {
              var h = p.parent,
                m = p.props,
                y = p.presenceId,
                E = p.blockInitialAnimation,
                x = p.visualState,
                b = p.shouldReduceMotion;
              d === void 0 && (d = {});
              var w = !1,
                O = x.latestValues,
                S = x.renderState,
                M,
                N = Lx(),
                z = new Map(),
                X = new Map(),
                et = {},
                rt = A({}, O),
                ht;
              function Tt() {
                !M || !w || (Ct(), s(M, S, m.style, Z.projection));
              }
              function Ct() {
                r(Z, S, O, d, m);
              }
              function Ft() {
                N.notifyUpdate(O);
              }
              function St(I, B) {
                var P = B.onChange(function (k) {
                    (O[I] = k), m.onUpdate && te.update(Ft, !1, !0);
                  }),
                  T = B.onRenderRequest(Z.scheduleRender);
                X.set(I, function () {
                  P(), T();
                });
              }
              var It = f(m);
              for (var Wt in It) {
                var ne = It[Wt];
                O[Wt] !== void 0 && ce(ne) && ne.set(O[Wt], !1);
              }
              var Mt = ai(m),
                At = Ch(m),
                Z = A(
                  A(
                    {
                      treeType: n,
                      current: null,
                      depth: h ? h.depth + 1 : 0,
                      parent: h,
                      children: new Set(),
                      presenceId: y,
                      shouldReduceMotion: b,
                      variantChildren: At ? new Set() : void 0,
                      isVisible: void 0,
                      manuallyAnimateOnMount: !!h?.isMounted(),
                      blockInitialAnimation: E,
                      isMounted: function () {
                        return !!M;
                      },
                      mount: function (I) {
                        (w = !0),
                          (M = Z.current = I),
                          Z.projection && Z.projection.mount(I),
                          At && h && !Mt && (ht = h?.addVariantChild(Z)),
                          z.forEach(function (B, P) {
                            return St(P, B);
                          }),
                          h?.children.add(Z),
                          Z.setProps(m);
                      },
                      unmount: function () {
                        var I;
                        (I = Z.projection) === null ||
                          I === void 0 ||
                          I.unmount(),
                          tn.update(Ft),
                          tn.render(Tt),
                          X.forEach(function (B) {
                            return B();
                          }),
                          ht?.(),
                          h?.children.delete(Z),
                          N.clearAllListeners(),
                          (M = void 0),
                          (w = !1);
                      },
                      addVariantChild: function (I) {
                        var B,
                          P = Z.getClosestVariantNode();
                        if (P)
                          return (
                            (B = P.variantChildren) === null ||
                              B === void 0 ||
                              B.add(I),
                            function () {
                              return P.variantChildren.delete(I);
                            }
                          );
                      },
                      sortNodePosition: function (I) {
                        return !c || n !== I.treeType
                          ? 0
                          : c(Z.getInstance(), I.getInstance());
                      },
                      getClosestVariantNode: function () {
                        return At ? Z : h?.getClosestVariantNode();
                      },
                      getLayoutId: function () {
                        return m.layoutId;
                      },
                      getInstance: function () {
                        return M;
                      },
                      getStaticValue: function (I) {
                        return O[I];
                      },
                      setStaticValue: function (I, B) {
                        return (O[I] = B);
                      },
                      getLatestValues: function () {
                        return O;
                      },
                      setVisibility: function (I) {
                        Z.isVisible !== I &&
                          ((Z.isVisible = I), Z.scheduleRender());
                      },
                      makeTargetAnimatable: function (I, B) {
                        return B === void 0 && (B = !0), i(Z, I, m, B);
                      },
                      measureViewportBox: function () {
                        return a(M, m);
                      },
                      addValue: function (I, B) {
                        Z.hasValue(I) && Z.removeValue(I),
                          z.set(I, B),
                          (O[I] = B.get()),
                          St(I, B);
                      },
                      removeValue: function (I) {
                        var B;
                        z.delete(I),
                          (B = X.get(I)) === null || B === void 0 || B(),
                          X.delete(I),
                          delete O[I],
                          u(I, S);
                      },
                      hasValue: function (I) {
                        return z.has(I);
                      },
                      getValue: function (I, B) {
                        var P = z.get(I);
                        return (
                          P === void 0 &&
                            B !== void 0 &&
                            ((P = jn(B)), Z.addValue(I, P)),
                          P
                        );
                      },
                      forEachValue: function (I) {
                        return z.forEach(I);
                      },
                      readValue: function (I) {
                        var B;
                        return (B = O[I]) !== null && B !== void 0
                          ? B
                          : l(M, I, d);
                      },
                      setBaseTarget: function (I, B) {
                        rt[I] = B;
                      },
                      getBaseTarget: function (I) {
                        if (o) {
                          var B = o(m, I);
                          if (B !== void 0 && !ce(B)) return B;
                        }
                        return rt[I];
                      },
                    },
                    N
                  ),
                  {
                    build: function () {
                      return Ct(), S;
                    },
                    scheduleRender: function () {
                      te.render(Tt, !1, !0);
                    },
                    syncRender: Tt,
                    setProps: function (I) {
                      (I.transformTemplate || m.transformTemplate) &&
                        Z.scheduleRender(),
                        (m = I),
                        N.updatePropListeners(I),
                        (et = Fx(Z, f(m), et));
                    },
                    getProps: function () {
                      return m;
                    },
                    getVariant: function (I) {
                      var B;
                      return (B = m.variants) === null || B === void 0
                        ? void 0
                        : B[I];
                    },
                    getDefaultTransition: function () {
                      return m.transition;
                    },
                    getTransformPagePoint: function () {
                      return m.transformPagePoint;
                    },
                    getVariantContext: function (I) {
                      if ((I === void 0 && (I = !1), I))
                        return h?.getVariantContext();
                      if (!Mt) {
                        var B = h?.getVariantContext() || {};
                        return (
                          m.initial !== void 0 && (B.initial = m.initial), B
                        );
                      }
                      for (var P = {}, T = 0; T < qp; T++) {
                        var k = ba[T],
                          C = m[k];
                        (Jt(C) || C === !1) && (P[k] = C);
                      }
                      return P;
                    },
                  }
                );
              return Z;
            };
          }),
          (ba = $t(['initial'], bt(Po), !1)),
          (qp = ba.length);
      });
    function gs(t) {
      return typeof t == 'string' && t.startsWith('var(--');
    }
    function zx(t) {
      var e = Wl.exec(t);
      if (!e) return [,];
      var n = bt(e, 3),
        r = n[1],
        o = n[2];
      return [r, o];
    }
    function ys(t, e, n) {
      n === void 0 && (n = 1),
        qt(
          n <= og,
          'Max CSS variable fallback depth detected in property "'.concat(
            t,
            '". This may indicate a circular fallback dependency.'
          )
        );
      var r = bt(zx(t), 2),
        o = r[0],
        i = r[1];
      if (o) {
        var a = window.getComputedStyle(e).getPropertyValue(o);
        return a ? a.trim() : gs(i) ? ys(i, e, n + 1) : i;
      }
    }
    function Bx(t, e, n) {
      var r,
        o = jt(e, []),
        i = t.getInstance();
      if (!(i instanceof Element)) return { target: o, transitionEnd: n };
      n && (n = A({}, n)),
        t.forEachValue(function (u) {
          var c = u.get();
          if (gs(c)) {
            var f = ys(c, i);
            f && u.set(f);
          }
        });
      for (var a in o) {
        var s = o[a];
        if (gs(s)) {
          var l = ys(s, i);
          l &&
            ((o[a] = l),
            n && (((r = n[a]) !== null && r !== void 0) || (n[a] = s)));
        }
      }
      return { target: o, transitionEnd: n };
    }
    var Wl,
      og,
      ig = v(() => {
        G(),
          fe(),
          (Wl = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/),
          (og = 4);
      });
    function Ux(t) {
      var e = [];
      return (
        sg.forEach(function (n) {
          var r = t.getValue(n);
          r !== void 0 &&
            (e.push([n, r.get()]), r.set(n.startsWith('scale') ? 1 : 0));
        }),
        e.length && t.syncRender(),
        e
      );
    }
    function Hx(t, e, n, r) {
      return ag(e) ? lg(t, e, n, r) : { target: e, transitionEnd: r };
    }
    var Gp,
      wa,
      ag,
      Ea,
      lr,
      Xp,
      xa,
      Oa,
      _p,
      sg,
      Sa,
      Kp,
      lg,
      Wx = v(() => {
        G(),
          wt(),
          fi(),
          fe(),
          je(),
          Iv(),
          (Gp = new Set([
            'width',
            'height',
            'top',
            'left',
            'right',
            'bottom',
            'x',
            'y',
          ])),
          (wa = function (t) {
            return Gp.has(t);
          }),
          (ag = function (t) {
            return Object.keys(t).some(wa);
          }),
          (Ea = function (t, e) {
            t.set(e, !1), t.set(e);
          }),
          (lr = function (t) {
            return t === Ie || t === U;
          }),
          (function (t) {
            (t.width = 'width'),
              (t.height = 'height'),
              (t.left = 'left'),
              (t.right = 'right'),
              (t.top = 'top'),
              (t.bottom = 'bottom');
          })(Xp || (Xp = {})),
          (xa = function (t, e) {
            return parseFloat(t.split(', ')[e]);
          }),
          (Oa = function (t, e) {
            return function (n, r) {
              var o = r.transform;
              if (o === 'none' || !o) return 0;
              var i = o.match(/^matrix3d\((.+)\)$/);
              if (i) return xa(i[1], e);
              var a = o.match(/^matrix\((.+)\)$/);
              return a ? xa(a[1], t) : 0;
            };
          }),
          (_p = new Set(['x', 'y', 'z'])),
          (sg = Sn.filter(function (t) {
            return !_p.has(t);
          })),
          (Sa = {
            width: function (t, e) {
              var n = t.x,
                r = e.paddingLeft,
                o = r === void 0 ? '0' : r,
                i = e.paddingRight,
                a = i === void 0 ? '0' : i;
              return n.max - n.min - parseFloat(o) - parseFloat(a);
            },
            height: function (t, e) {
              var n = t.y,
                r = e.paddingTop,
                o = r === void 0 ? '0' : r,
                i = e.paddingBottom,
                a = i === void 0 ? '0' : i;
              return n.max - n.min - parseFloat(o) - parseFloat(a);
            },
            top: function (t, e) {
              var n = e.top;
              return parseFloat(n);
            },
            left: function (t, e) {
              var n = e.left;
              return parseFloat(n);
            },
            bottom: function (t, e) {
              var n = t.y,
                r = e.top;
              return parseFloat(r) + (n.max - n.min);
            },
            right: function (t, e) {
              var n = t.x,
                r = e.left;
              return parseFloat(r) + (n.max - n.min);
            },
            x: Oa(4, 13),
            y: Oa(5, 14),
          }),
          (Kp = function (t, e, n) {
            var r = e.measureViewportBox(),
              o = e.getInstance(),
              i = getComputedStyle(o),
              a = i.display,
              s = {};
            a === 'none' && e.setStaticValue('display', t.display || 'block'),
              n.forEach(function (u) {
                s[u] = Sa[u](r, i);
              }),
              e.syncRender();
            var l = e.measureViewportBox();
            return (
              n.forEach(function (u) {
                var c = e.getValue(u);
                Ea(c, s[u]), (t[u] = Sa[u](l, i));
              }),
              t
            );
          }),
          (lg = function (t, e, n, r) {
            n === void 0 && (n = {}),
              r === void 0 && (r = {}),
              (e = A({}, e)),
              (r = A({}, r));
            var o = Object.keys(e).filter(wa),
              i = [],
              a = !1,
              s = [];
            if (
              (o.forEach(function (c) {
                var f = t.getValue(c);
                if (t.hasValue(c)) {
                  var p = n[c],
                    d = gn(p),
                    h = e[c],
                    m;
                  if (In(h)) {
                    var y = h.length,
                      E = h[0] === null ? 1 : 0;
                    (p = h[E]), (d = gn(p));
                    for (var x = E; x < y; x++)
                      m
                        ? qt(
                            gn(h[x]) === m,
                            'All keyframes must be of the same type'
                          )
                        : ((m = gn(h[x])),
                          qt(
                            m === d || (lr(d) && lr(m)),
                            'Keyframes must be of the same dimension as the current value'
                          ));
                  } else m = gn(h);
                  if (d !== m)
                    if (lr(d) && lr(m)) {
                      var b = f.get();
                      typeof b == 'string' && f.set(parseFloat(b)),
                        typeof h == 'string'
                          ? (e[c] = parseFloat(h))
                          : Array.isArray(h) &&
                            m === U &&
                            (e[c] = h.map(parseFloat));
                    } else
                      d?.transform && m?.transform && (p === 0 || h === 0)
                        ? p === 0
                          ? f.set(m.transform(p))
                          : (e[c] = d.transform(h))
                        : (a || ((i = Ux(t)), (a = !0)),
                          s.push(c),
                          (r[c] = r[c] !== void 0 ? r[c] : e[c]),
                          Ea(f, h));
                }
              }),
              s.length)
            ) {
              var l = s.indexOf('height') >= 0 ? window.pageYOffset : null,
                u = Kp(e, t, s);
              return (
                i.length &&
                  i.forEach(function (c) {
                    var f = bt(c, 2),
                      p = f[0],
                      d = f[1];
                    t.getValue(p).set(d);
                  }),
                t.syncRender(),
                l !== null && window.scrollTo({ top: l }),
                { target: u, transitionEnd: r }
              );
            } else return { target: e, transitionEnd: r };
          });
      }),
      ug,
      Yx = v(() => {
        ig(),
          Wx(),
          (ug = function (t, e, n, r) {
            var o = Bx(t, e, r);
            return (e = o.target), (r = o.transitionEnd), Hx(t, e, n, r);
          });
      });
    function qx(t) {
      return window.getComputedStyle(t);
    }
    var bs,
      cg,
      pg = v(() => {
        G(),
          rg(),
          jv(),
          el(),
          Bh(),
          Yx(),
          je(),
          cl(),
          dm(),
          Rl(),
          tg(),
          (bs = {
            treeType: 'dom',
            readValueFromInstance: function (t, e) {
              if (Br(e)) {
                var n = gi(e);
                return (n && n.default) || 0;
              } else {
                var r = qx(t);
                return (zh(e) ? r.getPropertyValue(e) : r[e]) || 0;
              }
            },
            sortNodePosition: function (t, e) {
              return t.compareDocumentPosition(e) & 2 ? 1 : -1;
            },
            getBaseTarget: function (t, e) {
              var n;
              return (n = t.style) === null || n === void 0 ? void 0 : n[e];
            },
            measureViewportBox: function (t, e) {
              var n = e.transformPagePoint;
              return $v(t, n);
            },
            resetTransform: function (t, e, n) {
              var r = n.transformTemplate;
              (e.style.transform = r ? r({}, '') : 'none'), t.scheduleRender();
            },
            restoreTransform: function (t, e) {
              t.style.transform = e.style.transform;
            },
            removeValueFromRenderState: function (t, e) {
              var n = e.vars,
                r = e.style;
              delete n[t], delete r[t];
            },
            makeTargetAnimatable: function (t, e, n, r) {
              var o = n.transformValues;
              r === void 0 && (r = !0);
              var i = e.transition,
                a = e.transitionEnd,
                s = jt(e, ['transition', 'transitionEnd']),
                l = rx(s, i || {}, t);
              if (
                (o && (a && (a = o(a)), s && (s = o(s)), l && (l = o(l))), r)
              ) {
                ex(t, s, l);
                var u = ug(t, s, l, a);
                (a = u.transitionEnd), (s = u.target);
              }
              return A({ transition: i, transitionEnd: a }, s);
            },
            scrapeMotionValuesFromProps: ul,
            build: function (t, e, n, r, o) {
              t.isVisible !== void 0 &&
                (e.style.visibility = t.isVisible ? 'visible' : 'hidden'),
                tl(e, n, r, o.transformTemplate);
            },
            render: fm,
          }),
          (cg = Hl(bs));
      }),
      fg,
      Gx = v(() => {
        G(),
          rg(),
          ym(),
          pg(),
          il(),
          pm(),
          hm(),
          je(),
          vm(),
          Rl(),
          (fg = Hl(
            A(A({}, bs), {
              getBaseTarget: function (t, e) {
                return t[e];
              },
              readValueFromInstance: function (t, e) {
                var n;
                return Br(e)
                  ? ((n = gi(e)) === null || n === void 0
                      ? void 0
                      : n.default) || 0
                  : ((e = ll.has(e) ? e : sl(e)), t.getAttribute(e));
              },
              scrapeMotionValuesFromProps: gm,
              build: function (t, e, n, r, o) {
                ol(e, n, r, o.transformTemplate);
              },
              render: mm,
            })
          ));
      }),
      dg,
      Xx = v(() => {
        pg(),
          Gx(),
          qs(),
          (dg = function (t, e) {
            return Ys(t)
              ? fg(e, { enableHardwareAcceleration: !1 })
              : cg(e, { enableHardwareAcceleration: !0 });
          });
      });
    function Qp(t, e) {
      return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
    }
    var yn,
      _x = v(() => {
        wt(),
          (yn = {
            correct: function (t, e) {
              if (!e.target) return t;
              if (typeof t == 'string')
                if (U.test(t)) t = parseFloat(t);
                else return t;
              var n = Qp(t, e.target.x),
                r = Qp(t, e.target.y);
              return ''.concat(n, '% ').concat(r, '%');
            },
          });
      }),
      Pa,
      hg,
      Kx = v(() => {
        Ht(),
          wt(),
          ig(),
          (Pa = '_$css'),
          (hg = {
            correct: function (t, e) {
              var n = e.treeScale,
                r = e.projectionDelta,
                o = t,
                i = t.includes('var('),
                a = [];
              i &&
                (t = t.replace(Wl, function (m) {
                  return a.push(m), Pa;
                }));
              var s = pe.parse(t);
              if (s.length > 5) return o;
              var l = pe.createTransformer(t),
                u = typeof s[0] != 'number' ? 1 : 0,
                c = r.x.scale * n.x,
                f = r.y.scale * n.y;
              (s[0 + u] /= c), (s[1 + u] /= f);
              var p = dt(c, f, 0.5);
              typeof s[2 + u] == 'number' && (s[2 + u] /= p),
                typeof s[3 + u] == 'number' && (s[3 + u] /= p);
              var d = l(s);
              if (i) {
                var h = 0;
                d = d.replace(Pa, function () {
                  var m = a[h];
                  return h++, m;
                });
              }
              return d;
            },
          });
      });
    function Qx(t) {
      var e = bt(Ev(), 2),
        n = e[0],
        r = e[1],
        o = mt(Hs);
      return g.createElement(
        mg,
        A({}, t, {
          layoutGroup: o,
          switchLayoutGroup: mt(Ws),
          isPresent: n,
          safeToRemove: r,
        })
      );
    }
    var mg,
      Jp,
      Jx = v(() => {
        G(),
          on(),
          xv(),
          kh(),
          Rh(),
          Us(),
          _x(),
          Kx(),
          Gs(),
          (mg = (function (t) {
            kd(e, t);
            function e() {
              return (t !== null && t.apply(this, arguments)) || this;
            }
            return (
              (e.prototype.componentDidMount = function () {
                var n = this,
                  r = this.props,
                  o = r.visualElement,
                  i = r.layoutGroup,
                  a = r.switchLayoutGroup,
                  s = r.layoutId,
                  l = o.projection;
                ew(Jp),
                  l &&
                    (i?.group && i.group.add(l),
                    a?.register && s && a.register(l),
                    l.root.didUpdate(),
                    l.addEventListener('animationComplete', function () {
                      n.safeToRemove();
                    }),
                    l.setOptions(
                      A(A({}, l.options), {
                        onExitComplete: function () {
                          return n.safeToRemove();
                        },
                      })
                    )),
                  (On.hasEverUpdated = !0);
              }),
              (e.prototype.getSnapshotBeforeUpdate = function (n) {
                var r = this,
                  o = this.props,
                  i = o.layoutDependency,
                  a = o.visualElement,
                  s = o.drag,
                  l = o.isPresent,
                  u = a.projection;
                return (
                  u &&
                    ((u.isPresent = l),
                    s || n.layoutDependency !== i || i === void 0
                      ? u.willUpdate()
                      : this.safeToRemove(),
                    n.isPresent !== l &&
                      (l
                        ? u.promote()
                        : u.relegate() ||
                          te.postRender(function () {
                            var c;
                            (!((c = u.getStack()) === null || c === void 0) &&
                              c.members.length) ||
                              r.safeToRemove();
                          }))),
                  null
                );
              }),
              (e.prototype.componentDidUpdate = function () {
                var n = this.props.visualElement.projection;
                n &&
                  (n.root.didUpdate(),
                  !n.currentAnimation && n.isLead() && this.safeToRemove());
              }),
              (e.prototype.componentWillUnmount = function () {
                var n = this.props,
                  r = n.visualElement,
                  o = n.layoutGroup,
                  i = n.switchLayoutGroup,
                  a = r.projection;
                a &&
                  (a.scheduleCheckAfterUnmount(),
                  o?.group && o.group.remove(a),
                  i?.deregister && i.deregister(a));
              }),
              (e.prototype.safeToRemove = function () {
                var n = this.props.safeToRemove;
                n?.();
              }),
              (e.prototype.render = function () {
                return null;
              }),
              e
            );
          })(g.Component)),
          (Jp = {
            borderRadius: A(A({}, yn), {
              applyTo: [
                'borderTopLeftRadius',
                'borderTopRightRadius',
                'borderBottomLeftRadius',
                'borderBottomRightRadius',
              ],
            }),
            borderTopLeftRadius: yn,
            borderTopRightRadius: yn,
            borderBottomLeftRadius: yn,
            borderBottomRightRadius: yn,
            boxShadow: hg,
          });
      }),
      vg,
      Zx = v(() => {
        Jx(), (vg = { measureLayout: Qx });
      });
    function $x(t, e, n) {
      n === void 0 && (n = {});
      var r = ce(t) ? t : jn(t);
      return (
        Nl('', r, e, n),
        {
          stop: function () {
            return r.stop();
          },
          isAnimating: function () {
            return r.isAnimating();
          },
        }
      );
    }
    var tO = v(() => {
      bi(), nn(), yi();
    });
    function eO(t, e, n, r, o, i) {
      var a, s, l, u;
      o
        ? ((t.opacity = dt(
            0,
            (a = n.opacity) !== null && a !== void 0 ? a : 1,
            yg(r)
          )),
          (t.opacityExit = dt(
            (s = e.opacity) !== null && s !== void 0 ? s : 1,
            0,
            bg(r)
          )))
        : i &&
          (t.opacity = dt(
            (l = e.opacity) !== null && l !== void 0 ? l : 1,
            (u = n.opacity) !== null && u !== void 0 ? u : 1,
            r
          ));
      for (var c = 0; c < gg; c++) {
        var f = 'border'.concat(ws[c], 'Radius'),
          p = Zp(e, f),
          d = Zp(n, f);
        if (!(p === void 0 && d === void 0)) {
          p || (p = 0), d || (d = 0);
          var h = p === 0 || d === 0 || xs(p) === xs(d);
          h
            ? ((t[f] = Math.max(dt(Es(p), Es(d), r), 0)),
              (Zt.test(d) || Zt.test(p)) && (t[f] += '%'))
            : (t[f] = d);
        }
      }
      (e.rotate || n.rotate) &&
        (t.rotate = dt(e.rotate || 0, n.rotate || 0, r));
    }
    function Zp(t, e) {
      var n;
      return (n = t[e]) !== null && n !== void 0 ? n : t.borderRadius;
    }
    function $p(t, e, n) {
      return function (r) {
        return r < t ? 0 : r > e ? 1 : n(Ln(t, e, r));
      };
    }
    var ws,
      gg,
      Es,
      xs,
      yg,
      bg,
      nO = v(() => {
        Ht(),
          wt(),
          (ws = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight']),
          (gg = ws.length),
          (Es = function (t) {
            return typeof t == 'string' ? parseFloat(t) : t;
          }),
          (xs = function (t) {
            return typeof t == 'number' || U.test(t);
          }),
          (yg = $p(0, 0.5, Go)),
          (bg = $p(0.5, 0.95, vi));
      });
    function tf(t, e) {
      (t.min = e.min), (t.max = e.max);
    }
    function Qt(t, e) {
      tf(t.x, e.x), tf(t.y, e.y);
    }
    var rO = v(() => {});
    function ef(t, e, n, r, o) {
      return (
        (t -= e),
        (t = Qo(t, 1 / n, r)),
        o !== void 0 && (t = Qo(t, 1 / o, r)),
        t
      );
    }
    function oO(t, e, n, r, o, i, a) {
      if (
        (e === void 0 && (e = 0),
        n === void 0 && (n = 1),
        r === void 0 && (r = 0.5),
        i === void 0 && (i = t),
        a === void 0 && (a = t),
        Zt.test(e))
      ) {
        e = parseFloat(e);
        var s = dt(a.min, a.max, e / 100);
        e = s - a.min;
      }
      if (typeof e == 'number') {
        var l = dt(i.min, i.max, r);
        t === i && (l -= e),
          (t.min = ef(t.min, e, n, l, o)),
          (t.max = ef(t.max, e, n, l, o));
      }
    }
    function nf(t, e, n, r, o) {
      var i = bt(n, 3),
        a = i[0],
        s = i[1],
        l = i[2];
      oO(t, e[a], e[s], e[l], e.scale, r, o);
    }
    function rf(t, e, n, r) {
      nf(t.x, e, wg, n?.x, r?.x), nf(t.y, e, Eg, n?.y, r?.y);
    }
    var wg,
      Eg,
      iO = v(() => {
        G(),
          Ht(),
          wt(),
          Ul(),
          (wg = ['x', 'scaleX', 'originX']),
          (Eg = ['y', 'scaleY', 'originY']);
      });
    function of(t) {
      return t.translate === 0 && t.scale === 1;
    }
    function xg(t) {
      return of(t.x) && of(t.y);
    }
    function Og(t, e) {
      return (
        t.x.min === e.x.min &&
        t.x.max === e.x.max &&
        t.y.min === e.y.min &&
        t.y.max === e.y.max
      );
    }
    var aO = v(() => {}),
      Sg,
      sO = v(() => {
        jl(),
          (Sg = (function () {
            function t() {
              this.members = [];
            }
            return (
              (t.prototype.add = function (e) {
                Il(this.members, e), e.scheduleRender();
              }),
              (t.prototype.remove = function (e) {
                if (
                  (Ll(this.members, e),
                  e === this.prevLead && (this.prevLead = void 0),
                  e === this.lead)
                ) {
                  var n = this.members[this.members.length - 1];
                  n && this.promote(n);
                }
              }),
              (t.prototype.relegate = function (e) {
                var n = this.members.findIndex(function (a) {
                  return e === a;
                });
                if (n === 0) return !1;
                for (var r, o = n; o >= 0; o--) {
                  var i = this.members[o];
                  if (i.isPresent !== !1) {
                    r = i;
                    break;
                  }
                }
                return r ? (this.promote(r), !0) : !1;
              }),
              (t.prototype.promote = function (e, n) {
                var r,
                  o = this.lead;
                if (
                  e !== o &&
                  ((this.prevLead = o), (this.lead = e), e.show(), o)
                ) {
                  o.instance && o.scheduleRender(),
                    e.scheduleRender(),
                    (e.resumeFrom = o),
                    n && (e.resumeFrom.preserveOpacity = !0),
                    o.snapshot &&
                      ((e.snapshot = o.snapshot),
                      (e.snapshot.latestValues =
                        o.animationValues || o.latestValues),
                      (e.snapshot.isShared = !0)),
                    !((r = e.root) === null || r === void 0) &&
                      r.isUpdating &&
                      (e.isLayoutDirty = !0);
                  var i = e.options.crossfade;
                  i === !1 && o.hide();
                }
              }),
              (t.prototype.exitAnimationComplete = function () {
                this.members.forEach(function (e) {
                  var n, r, o, i, a;
                  (r = (n = e.options).onExitComplete) === null ||
                    r === void 0 ||
                    r.call(n),
                    (a =
                      (o = e.resumingFrom) === null || o === void 0
                        ? void 0
                        : (i = o.options).onExitComplete) === null ||
                      a === void 0 ||
                      a.call(i);
                });
              }),
              (t.prototype.scheduleRender = function () {
                this.members.forEach(function (e) {
                  e.instance && e.scheduleRender(!1);
                });
              }),
              (t.prototype.removeLeadSnapshot = function () {
                this.lead &&
                  this.lead.snapshot &&
                  (this.lead.snapshot = void 0);
              }),
              t
            );
          })());
      });
    function af(t, e, n) {
      var r = t.x.translate / e.x,
        o = t.y.translate / e.y,
        i = 'translate3d('.concat(r, 'px, ').concat(o, 'px, 0) ');
      if (((i += 'scale('.concat(1 / e.x, ', ').concat(1 / e.y, ') ')), n)) {
        var a = n.rotate,
          s = n.rotateX,
          l = n.rotateY;
        a && (i += 'rotate('.concat(a, 'deg) ')),
          s && (i += 'rotateX('.concat(s, 'deg) ')),
          l && (i += 'rotateY('.concat(l, 'deg) '));
      }
      var u = t.x.scale * e.x,
        c = t.y.scale * e.y;
      return (
        (i += 'scale('.concat(u, ', ').concat(c, ')')), i === Pg ? 'none' : i
      );
    }
    var Pg,
      lO = v(() => {
        Pg = 'translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)';
      }),
      Tg,
      uO = v(() => {
        Tg = function (t, e) {
          return t.depth - e.depth;
        };
      }),
      Cg,
      cO = v(() => {
        jl(),
          uO(),
          (Cg = (function () {
            function t() {
              (this.children = []), (this.isDirty = !1);
            }
            return (
              (t.prototype.add = function (e) {
                Il(this.children, e), (this.isDirty = !0);
              }),
              (t.prototype.remove = function (e) {
                Ll(this.children, e), (this.isDirty = !0);
              }),
              (t.prototype.forEach = function (e) {
                this.isDirty && this.children.sort(Tg),
                  (this.isDirty = !1),
                  this.children.forEach(e);
              }),
              t
            );
          })());
      });
    function Ag(t) {
      var e = t.attachResizeListener,
        n = t.defaultParent,
        r = t.measureScroll,
        o = t.checkIsScrollRoot,
        i = t.resetTransform;
      return (function () {
        function a(s, l, u) {
          var c = this;
          l === void 0 && (l = {}),
            u === void 0 && (u = n?.()),
            (this.children = new Set()),
            (this.options = {}),
            (this.isTreeAnimating = !1),
            (this.isAnimationBlocked = !1),
            (this.isLayoutDirty = !1),
            (this.updateManuallyBlocked = !1),
            (this.updateBlockedByResize = !1),
            (this.isUpdating = !1),
            (this.isSVG = !1),
            (this.needsReset = !1),
            (this.shouldResetTransform = !1),
            (this.treeScale = { x: 1, y: 1 }),
            (this.eventHandlers = new Map()),
            (this.potentialNodes = new Map()),
            (this.checkUpdateFailed = function () {
              c.isUpdating && ((c.isUpdating = !1), c.clearAllSnapshots());
            }),
            (this.updateProjection = function () {
              c.nodes.forEach(vO), c.nodes.forEach(gO);
            }),
            (this.hasProjected = !1),
            (this.isVisible = !0),
            (this.animationProgress = 0),
            (this.sharedNodes = new Map()),
            (this.id = s),
            (this.latestValues = l),
            (this.root = u ? u.root || u : this),
            (this.path = u ? $t($t([], bt(u.path), !1), [u], !1) : []),
            (this.parent = u),
            (this.depth = u ? u.depth + 1 : 0),
            s && this.root.registerPotentialNode(s, this);
          for (var f = 0; f < this.path.length; f++)
            this.path[f].shouldResetTransform = !0;
          this.root === this && (this.nodes = new Cg());
        }
        return (
          (a.prototype.addEventListener = function (s, l) {
            return (
              this.eventHandlers.has(s) || this.eventHandlers.set(s, new An()),
              this.eventHandlers.get(s).add(l)
            );
          }),
          (a.prototype.notifyListeners = function (s) {
            for (var l = [], u = 1; u < arguments.length; u++)
              l[u - 1] = arguments[u];
            var c = this.eventHandlers.get(s);
            c?.notify.apply(c, $t([], bt(l), !1));
          }),
          (a.prototype.hasListeners = function (s) {
            return this.eventHandlers.has(s);
          }),
          (a.prototype.registerPotentialNode = function (s, l) {
            this.potentialNodes.set(s, l);
          }),
          (a.prototype.mount = function (s, l) {
            var u = this,
              c;
            if ((l === void 0 && (l = !1), !this.instance)) {
              (this.isSVG = s instanceof SVGElement && s.tagName !== 'svg'),
                (this.instance = s);
              var f = this.options,
                p = f.layoutId,
                d = f.layout,
                h = f.visualElement;
              if (
                (h && !h.getInstance() && h.mount(s),
                this.root.nodes.add(this),
                (c = this.parent) === null ||
                  c === void 0 ||
                  c.children.add(this),
                this.id && this.root.potentialNodes.delete(this.id),
                l && (d || p) && (this.isLayoutDirty = !0),
                e)
              ) {
                var m,
                  y = function () {
                    return (u.root.updateBlockedByResize = !1);
                  };
                e(s, function () {
                  (u.root.updateBlockedByResize = !0),
                    clearTimeout(m),
                    (m = window.setTimeout(y, 250)),
                    On.hasAnimatedSinceResize &&
                      ((On.hasAnimatedSinceResize = !1), u.nodes.forEach(mO));
                });
              }
              p && this.root.registerSharedNode(p, this),
                this.options.animate !== !1 &&
                  h &&
                  (p || d) &&
                  this.addEventListener('didUpdate', function (E) {
                    var x,
                      b,
                      w,
                      O,
                      S,
                      M = E.delta,
                      N = E.hasLayoutChanged,
                      z = E.hasRelativeTargetChanged,
                      X = E.layout;
                    if (u.isTreeAnimationBlocked()) {
                      (u.target = void 0), (u.relativeTarget = void 0);
                      return;
                    }
                    var et =
                        (b =
                          (x = u.options.transition) !== null && x !== void 0
                            ? x
                            : h.getDefaultTransition()) !== null && b !== void 0
                          ? b
                          : kg,
                      rt = h.getProps(),
                      ht = rt.onLayoutAnimationStart,
                      Tt = rt.onLayoutAnimationComplete,
                      Ct = !u.targetLayout || !Og(u.targetLayout, X) || z,
                      Ft = !N && z;
                    if (
                      (!((w = u.resumeFrom) === null || w === void 0) &&
                        w.instance) ||
                      Ft ||
                      (N && (Ct || !u.currentAnimation))
                    ) {
                      u.resumeFrom &&
                        ((u.resumingFrom = u.resumeFrom),
                        (u.resumingFrom.resumingFrom = void 0)),
                        u.setAnimationOrigin(M, Ft);
                      var St = A(A({}, Dl(et, 'layout')), {
                        onPlay: ht,
                        onComplete: Tt,
                      });
                      h.shouldReduceMotion && ((St.delay = 0), (St.type = !1)),
                        u.startAnimation(St);
                    } else
                      !N && u.animationProgress === 0 && u.finishAnimation(),
                        u.isLead() &&
                          ((S = (O = u.options).onExitComplete) === null ||
                            S === void 0 ||
                            S.call(O));
                    u.targetLayout = X;
                  });
            }
          }),
          (a.prototype.unmount = function () {
            var s, l;
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this),
              (s = this.getStack()) === null || s === void 0 || s.remove(this),
              (l = this.parent) === null ||
                l === void 0 ||
                l.children.delete(this),
              (this.instance = void 0),
              tn.preRender(this.updateProjection);
          }),
          (a.prototype.blockUpdate = function () {
            this.updateManuallyBlocked = !0;
          }),
          (a.prototype.unblockUpdate = function () {
            this.updateManuallyBlocked = !1;
          }),
          (a.prototype.isUpdateBlocked = function () {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }),
          (a.prototype.isTreeAnimationBlocked = function () {
            var s;
            return (
              this.isAnimationBlocked ||
              ((s = this.parent) === null || s === void 0
                ? void 0
                : s.isTreeAnimationBlocked()) ||
              !1
            );
          }),
          (a.prototype.startUpdate = function () {
            var s;
            this.isUpdateBlocked() ||
              ((this.isUpdating = !0),
              (s = this.nodes) === null || s === void 0 || s.forEach(yO));
          }),
          (a.prototype.willUpdate = function (s) {
            var l, u, c;
            if ((s === void 0 && (s = !0), this.root.isUpdateBlocked())) {
              (u = (l = this.options).onExitComplete) === null ||
                u === void 0 ||
                u.call(l);
              return;
            }
            if (
              (!this.root.isUpdating && this.root.startUpdate(),
              !this.isLayoutDirty)
            ) {
              this.isLayoutDirty = !0;
              for (var f = 0; f < this.path.length; f++) {
                var p = this.path[f];
                (p.shouldResetTransform = !0), p.updateScroll();
              }
              var d = this.options,
                h = d.layoutId,
                m = d.layout;
              if (!(h === void 0 && !m)) {
                var y =
                  (c = this.options.visualElement) === null || c === void 0
                    ? void 0
                    : c.getProps().transformTemplate;
                (this.prevTransformTemplateValue = y?.(this.latestValues, '')),
                  this.updateSnapshot(),
                  s && this.notifyListeners('willUpdate');
              }
            }
          }),
          (a.prototype.didUpdate = function () {
            var s = this.isUpdateBlocked();
            if (s) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(sf);
              return;
            }
            this.isUpdating &&
              ((this.isUpdating = !1),
              this.potentialNodes.size &&
                (this.potentialNodes.forEach(xO), this.potentialNodes.clear()),
              this.nodes.forEach(hO),
              this.nodes.forEach(pO),
              this.nodes.forEach(fO),
              this.clearAllSnapshots(),
              Oo.update(),
              Oo.preRender(),
              Oo.render());
          }),
          (a.prototype.clearAllSnapshots = function () {
            this.nodes.forEach(dO), this.sharedNodes.forEach(bO);
          }),
          (a.prototype.scheduleUpdateProjection = function () {
            te.preRender(this.updateProjection, !1, !0);
          }),
          (a.prototype.scheduleCheckAfterUnmount = function () {
            var s = this;
            te.postRender(function () {
              s.isLayoutDirty ? s.root.didUpdate() : s.root.checkUpdateFailed();
            });
          }),
          (a.prototype.updateSnapshot = function () {
            if (!(this.snapshot || !this.instance)) {
              var s = this.measure(),
                l = this.removeTransform(this.removeElementScroll(s));
              pf(l),
                (this.snapshot = { measured: s, layout: l, latestValues: {} });
            }
          }),
          (a.prototype.updateLayout = function () {
            var s;
            if (
              this.instance &&
              (this.updateScroll(),
              !(
                !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty
              ))
            ) {
              if (this.resumeFrom && !this.resumeFrom.instance)
                for (var l = 0; l < this.path.length; l++) {
                  var u = this.path[l];
                  u.updateScroll();
                }
              var c = this.measure();
              pf(c);
              var f = this.layout;
              (this.layout = {
                measured: c,
                actual: this.removeElementScroll(c),
              }),
                (this.layoutCorrected = Pt()),
                (this.isLayoutDirty = !1),
                (this.projectionDelta = void 0),
                this.notifyListeners('measure', this.layout.actual),
                (s = this.options.visualElement) === null ||
                  s === void 0 ||
                  s.notifyLayoutMeasure(this.layout.actual, f?.actual);
            }
          }),
          (a.prototype.updateScroll = function () {
            this.options.layoutScroll &&
              this.instance &&
              ((this.isScrollRoot = o(this.instance)),
              (this.scroll = r(this.instance)));
          }),
          (a.prototype.resetTransform = function () {
            var s;
            if (i) {
              var l = this.isLayoutDirty || this.shouldResetTransform,
                u = this.projectionDelta && !xg(this.projectionDelta),
                c =
                  (s = this.options.visualElement) === null || s === void 0
                    ? void 0
                    : s.getProps().transformTemplate,
                f = c?.(this.latestValues, ''),
                p = f !== this.prevTransformTemplateValue;
              l &&
                (u || ke(this.latestValues) || p) &&
                (i(this.instance, f),
                (this.shouldResetTransform = !1),
                this.scheduleRender());
            }
          }),
          (a.prototype.measure = function () {
            var s = this.options.visualElement;
            if (!s) return Pt();
            var l = s.measureViewportBox(),
              u = this.root.scroll;
            return u && (Re(l.x, u.x), Re(l.y, u.y)), l;
          }),
          (a.prototype.removeElementScroll = function (s) {
            var l = Pt();
            Qt(l, s);
            for (var u = 0; u < this.path.length; u++) {
              var c = this.path[u],
                f = c.scroll,
                p = c.options,
                d = c.isScrollRoot;
              if (c !== this.root && f && p.layoutScroll) {
                if (d) {
                  Qt(l, s);
                  var h = this.root.scroll;
                  h && (Re(l.x, -h.x), Re(l.y, -h.y));
                }
                Re(l.x, f.x), Re(l.y, f.y);
              }
            }
            return l;
          }),
          (a.prototype.applyTransform = function (s, l) {
            l === void 0 && (l = !1);
            var u = Pt();
            Qt(u, s);
            for (var c = 0; c < this.path.length; c++) {
              var f = this.path[c];
              !l &&
                f.options.layoutScroll &&
                f.scroll &&
                f !== f.root &&
                En(u, { x: -f.scroll.x, y: -f.scroll.y }),
                ke(f.latestValues) && En(u, f.latestValues);
            }
            return ke(this.latestValues) && En(u, this.latestValues), u;
          }),
          (a.prototype.removeTransform = function (s) {
            var l,
              u = Pt();
            Qt(u, s);
            for (var c = 0; c < this.path.length; c++) {
              var f = this.path[c];
              if (f.instance && ke(f.latestValues)) {
                _v(f.latestValues) && f.updateSnapshot();
                var p = Pt(),
                  d = f.measure();
                Qt(p, d),
                  rf(
                    u,
                    f.latestValues,
                    (l = f.snapshot) === null || l === void 0
                      ? void 0
                      : l.layout,
                    p
                  );
              }
            }
            return ke(this.latestValues) && rf(u, this.latestValues), u;
          }),
          (a.prototype.setTargetDelta = function (s) {
            (this.targetDelta = s), this.root.scheduleUpdateProjection();
          }),
          (a.prototype.setOptions = function (s) {
            var l;
            this.options = A(A(A({}, this.options), s), {
              crossfade: (l = s.crossfade) !== null && l !== void 0 ? l : !0,
            });
          }),
          (a.prototype.clearMeasurements = function () {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }),
          (a.prototype.resolveTargetDelta = function () {
            var s,
              l = this.options,
              u = l.layout,
              c = l.layoutId;
            !this.layout ||
              !(u || c) ||
              (!this.targetDelta &&
                !this.relativeTarget &&
                ((this.relativeParent = this.getClosestProjectingParent()),
                this.relativeParent &&
                  this.relativeParent.layout &&
                  ((this.relativeTarget = Pt()),
                  (this.relativeTargetOrigin = Pt()),
                  Tr(
                    this.relativeTargetOrigin,
                    this.layout.actual,
                    this.relativeParent.layout.actual
                  ),
                  Qt(this.relativeTarget, this.relativeTargetOrigin))),
              !(!this.relativeTarget && !this.targetDelta) &&
                (this.target ||
                  ((this.target = Pt()), (this.targetWithTransforms = Pt())),
                this.relativeTarget &&
                this.relativeTargetOrigin &&
                !((s = this.relativeParent) === null || s === void 0) &&
                s.target
                  ? vx(
                      this.target,
                      this.relativeTarget,
                      this.relativeParent.target
                    )
                  : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.actual
                          ))
                        : Qt(this.target, this.layout.actual),
                      Qv(this.target, this.targetDelta))
                    : Qt(this.target, this.layout.actual),
                this.attemptToResolveRelativeTarget &&
                  ((this.attemptToResolveRelativeTarget = !1),
                  (this.relativeParent = this.getClosestProjectingParent()),
                  this.relativeParent &&
                    !!this.relativeParent.resumingFrom == !!this.resumingFrom &&
                    !this.relativeParent.options.layoutScroll &&
                    this.relativeParent.target &&
                    ((this.relativeTarget = Pt()),
                    (this.relativeTargetOrigin = Pt()),
                    Tr(
                      this.relativeTargetOrigin,
                      this.target,
                      this.relativeParent.target
                    ),
                    Qt(this.relativeTarget, this.relativeTargetOrigin)))));
          }),
          (a.prototype.getClosestProjectingParent = function () {
            if (!(!this.parent || ke(this.parent.latestValues)))
              return (this.parent.relativeTarget || this.parent.targetDelta) &&
                this.parent.layout
                ? this.parent
                : this.parent.getClosestProjectingParent();
          }),
          (a.prototype.calcProjection = function () {
            var s,
              l = this.options,
              u = l.layout,
              c = l.layoutId;
            if (
              ((this.isTreeAnimating = !!(
                (!((s = this.parent) === null || s === void 0) &&
                  s.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !(!this.layout || !(u || c)))
            ) {
              var f = this.getLead();
              Qt(this.layoutCorrected, this.layout.actual),
                Tx(
                  this.layoutCorrected,
                  this.treeScale,
                  this.path,
                  !!this.resumingFrom || this !== f
                );
              var p = f.target;
              if (p) {
                this.projectionDelta ||
                  ((this.projectionDelta = kn()),
                  (this.projectionDeltaWithTransform = kn()));
                var d = this.treeScale.x,
                  h = this.treeScale.y,
                  m = this.projectionTransform;
                Pr(
                  this.projectionDelta,
                  this.layoutCorrected,
                  p,
                  this.latestValues
                ),
                  (this.projectionTransform = af(
                    this.projectionDelta,
                    this.treeScale
                  )),
                  (this.projectionTransform !== m ||
                    this.treeScale.x !== d ||
                    this.treeScale.y !== h) &&
                    ((this.hasProjected = !0),
                    this.scheduleRender(),
                    this.notifyListeners('projectionUpdate', p));
              }
            }
          }),
          (a.prototype.hide = function () {
            this.isVisible = !1;
          }),
          (a.prototype.show = function () {
            this.isVisible = !0;
          }),
          (a.prototype.scheduleRender = function (s) {
            var l, u, c;
            s === void 0 && (s = !0),
              (u = (l = this.options).scheduleRender) === null ||
                u === void 0 ||
                u.call(l),
              s &&
                ((c = this.getStack()) === null ||
                  c === void 0 ||
                  c.scheduleRender()),
              this.resumingFrom &&
                !this.resumingFrom.instance &&
                (this.resumingFrom = void 0);
          }),
          (a.prototype.setAnimationOrigin = function (s, l) {
            var u = this,
              c;
            l === void 0 && (l = !1);
            var f = this.snapshot,
              p = f?.latestValues || {},
              d = A({}, this.latestValues),
              h = kn();
            (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !l);
            var m = Pt(),
              y = f?.isShared,
              E =
                (((c = this.getStack()) === null || c === void 0
                  ? void 0
                  : c.members.length) || 0) <= 1,
              x = !!(
                y &&
                !E &&
                this.options.crossfade === !0 &&
                !this.path.some(EO)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = function (b) {
                var w,
                  O = b / 1e3;
                lf(h.x, s.x, O),
                  lf(h.y, s.y, O),
                  u.setTargetDelta(h),
                  u.relativeTarget &&
                    u.relativeTargetOrigin &&
                    u.layout &&
                    !((w = u.relativeParent) === null || w === void 0) &&
                    w.layout &&
                    (Tr(m, u.layout.actual, u.relativeParent.layout.actual),
                    wO(u.relativeTarget, u.relativeTargetOrigin, m, O)),
                  y &&
                    ((u.animationValues = d),
                    eO(d, p, u.latestValues, O, x, E)),
                  u.root.scheduleUpdateProjection(),
                  u.scheduleRender(),
                  (u.animationProgress = O);
              }),
              this.mixTargetDelta(0);
          }),
          (a.prototype.startAnimation = function (s) {
            var l = this,
              u,
              c;
            this.notifyListeners('animationStart'),
              (u = this.currentAnimation) === null || u === void 0 || u.stop(),
              this.resumingFrom &&
                ((c = this.resumingFrom.currentAnimation) === null ||
                  c === void 0 ||
                  c.stop()),
              this.pendingAnimation &&
                (tn.update(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = te.update(function () {
                (On.hasAnimatedSinceResize = !0),
                  (l.currentAnimation = $x(
                    0,
                    Os,
                    A(A({}, s), {
                      onUpdate: function (f) {
                        var p;
                        l.mixTargetDelta(f),
                          (p = s.onUpdate) === null ||
                            p === void 0 ||
                            p.call(s, f);
                      },
                      onComplete: function () {
                        var f;
                        (f = s.onComplete) === null ||
                          f === void 0 ||
                          f.call(s),
                          l.completeAnimation();
                      },
                    })
                  )),
                  l.resumingFrom &&
                    (l.resumingFrom.currentAnimation = l.currentAnimation),
                  (l.pendingAnimation = void 0);
              }));
          }),
          (a.prototype.completeAnimation = function () {
            var s;
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0)),
              (s = this.getStack()) === null ||
                s === void 0 ||
                s.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners('animationComplete');
          }),
          (a.prototype.finishAnimation = function () {
            var s;
            this.currentAnimation &&
              ((s = this.mixTargetDelta) === null ||
                s === void 0 ||
                s.call(this, Os),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }),
          (a.prototype.applyTransformsToTarget = function () {
            var s = this.getLead(),
              l = s.targetWithTransforms,
              u = s.target,
              c = s.layout,
              f = s.latestValues;
            !l ||
              !u ||
              !c ||
              (Qt(l, u),
              En(l, f),
              Pr(
                this.projectionDeltaWithTransform,
                this.layoutCorrected,
                l,
                f
              ));
          }),
          (a.prototype.registerSharedNode = function (s, l) {
            var u, c, f;
            this.sharedNodes.has(s) || this.sharedNodes.set(s, new Sg());
            var p = this.sharedNodes.get(s);
            p.add(l),
              l.promote({
                transition:
                  (u = l.options.initialPromotionConfig) === null ||
                  u === void 0
                    ? void 0
                    : u.transition,
                preserveFollowOpacity:
                  (f =
                    (c = l.options.initialPromotionConfig) === null ||
                    c === void 0
                      ? void 0
                      : c.shouldPreserveFollowOpacity) === null || f === void 0
                    ? void 0
                    : f.call(c, l),
              });
          }),
          (a.prototype.isLead = function () {
            var s = this.getStack();
            return s ? s.lead === this : !0;
          }),
          (a.prototype.getLead = function () {
            var s,
              l = this.options.layoutId;
            return l
              ? ((s = this.getStack()) === null || s === void 0
                  ? void 0
                  : s.lead) || this
              : this;
          }),
          (a.prototype.getPrevLead = function () {
            var s,
              l = this.options.layoutId;
            return l
              ? (s = this.getStack()) === null || s === void 0
                ? void 0
                : s.prevLead
              : void 0;
          }),
          (a.prototype.getStack = function () {
            var s = this.options.layoutId;
            if (s) return this.root.sharedNodes.get(s);
          }),
          (a.prototype.promote = function (s) {
            var l = s === void 0 ? {} : s,
              u = l.needsReset,
              c = l.transition,
              f = l.preserveFollowOpacity,
              p = this.getStack();
            p && p.promote(this, f),
              u && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              c && this.setOptions({ transition: c });
          }),
          (a.prototype.relegate = function () {
            var s = this.getStack();
            return s ? s.relegate(this) : !1;
          }),
          (a.prototype.resetRotation = function () {
            var s = this.options.visualElement;
            if (s) {
              for (var l = !1, u = {}, c = 0; c < zo.length; c++) {
                var f = zo[c],
                  p = 'rotate' + f;
                s.getStaticValue(p) &&
                  ((l = !0),
                  (u[p] = s.getStaticValue(p)),
                  s.setStaticValue(p, 0));
              }
              if (l) {
                s?.syncRender();
                for (var p in u) s.setStaticValue(p, u[p]);
                s.scheduleRender();
              }
            }
          }),
          (a.prototype.getProjectionStyles = function (s) {
            var l, u, c, f, p, d;
            s === void 0 && (s = {});
            var h = {};
            if (!this.instance || this.isSVG) return h;
            if (this.isVisible) h.visibility = '';
            else return { visibility: 'hidden' };
            var m =
              (l = this.options.visualElement) === null || l === void 0
                ? void 0
                : l.getProps().transformTemplate;
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (h.opacity = ''),
                (h.pointerEvents = go(s.pointerEvents) || ''),
                (h.transform = m ? m(this.latestValues, '') : 'none'),
                h
              );
            var y = this.getLead();
            if (!this.projectionDelta || !this.layout || !y.target) {
              var E = {};
              return (
                this.options.layoutId &&
                  ((E.opacity =
                    (u = this.latestValues.opacity) !== null && u !== void 0
                      ? u
                      : 1),
                  (E.pointerEvents = go(s.pointerEvents) || '')),
                this.hasProjected &&
                  !ke(this.latestValues) &&
                  ((E.transform = m ? m({}, '') : 'none'),
                  (this.hasProjected = !1)),
                E
              );
            }
            var x = y.animationValues || y.latestValues;
            this.applyTransformsToTarget(),
              (h.transform = af(
                this.projectionDeltaWithTransform,
                this.treeScale,
                x
              )),
              m && (h.transform = m(x, h.transform));
            var b = this.projectionDelta,
              w = b.x,
              O = b.y;
            (h.transformOrigin = ''
              .concat(w.origin * 100, '% ')
              .concat(O.origin * 100, '% 0')),
              y.animationValues
                ? (h.opacity =
                    y === this
                      ? (f =
                          (c = x.opacity) !== null && c !== void 0
                            ? c
                            : this.latestValues.opacity) !== null &&
                        f !== void 0
                        ? f
                        : 1
                      : this.preserveOpacity
                        ? this.latestValues.opacity
                        : x.opacityExit)
                : (h.opacity =
                    y === this
                      ? (p = x.opacity) !== null && p !== void 0
                        ? p
                        : ''
                      : (d = x.opacityExit) !== null && d !== void 0
                        ? d
                        : 0);
            for (var S in Ar)
              if (x[S] !== void 0) {
                var M = Ar[S],
                  N = M.correct,
                  z = M.applyTo,
                  X = N(x[S], y);
                if (z)
                  for (var et = z.length, rt = 0; rt < et; rt++) h[z[rt]] = X;
                else h[S] = X;
              }
            return (
              this.options.layoutId &&
                (h.pointerEvents =
                  y === this ? go(s.pointerEvents) || '' : 'none'),
              h
            );
          }),
          (a.prototype.clearSnapshot = function () {
            this.resumeFrom = this.snapshot = void 0;
          }),
          (a.prototype.resetTree = function () {
            this.root.nodes.forEach(function (s) {
              var l;
              return (l = s.currentAnimation) === null || l === void 0
                ? void 0
                : l.stop();
            }),
              this.root.nodes.forEach(sf),
              this.root.sharedNodes.clear();
          }),
          a
        );
      })();
    }
    function pO(t) {
      t.updateLayout();
    }
    function fO(t) {
      var e,
        n,
        r,
        o,
        i =
          (n =
            (e = t.resumeFrom) === null || e === void 0
              ? void 0
              : e.snapshot) !== null && n !== void 0
            ? n
            : t.snapshot;
      if (t.isLead() && t.layout && i && t.hasListeners('didUpdate')) {
        var a = t.layout,
          s = a.actual,
          l = a.measured;
        t.options.animationType === 'size'
          ? se(function (x) {
              var b = i.isShared ? i.measured[x] : i.layout[x],
                w = we(b);
              (b.min = s[x].min), (b.max = b.min + w);
            })
          : t.options.animationType === 'position' &&
            se(function (x) {
              var b = i.isShared ? i.measured[x] : i.layout[x],
                w = we(s[x]);
              b.max = b.min + w;
            });
        var u = kn();
        Pr(u, s, i.layout);
        var c = kn();
        i.isShared
          ? Pr(c, t.applyTransform(l, !0), i.measured)
          : Pr(c, s, i.layout);
        var f = !xg(u),
          p = !1;
        if (
          !t.resumeFrom &&
          ((t.relativeParent = t.getClosestProjectingParent()),
          t.relativeParent && !t.relativeParent.resumeFrom)
        ) {
          var d = t.relativeParent,
            h = d.snapshot,
            m = d.layout;
          if (h && m) {
            var y = Pt();
            Tr(y, i.layout, h.layout);
            var E = Pt();
            Tr(E, s, m.actual), Og(y, E) || (p = !0);
          }
        }
        t.notifyListeners('didUpdate', {
          layout: s,
          snapshot: i,
          delta: c,
          layoutDelta: u,
          hasLayoutChanged: f,
          hasRelativeTargetChanged: p,
        });
      } else
        t.isLead() &&
          ((o = (r = t.options).onExitComplete) === null ||
            o === void 0 ||
            o.call(r));
      t.options.transition = void 0;
    }
    function dO(t) {
      t.clearSnapshot();
    }
    function sf(t) {
      t.clearMeasurements();
    }
    function hO(t) {
      var e = t.options.visualElement;
      e?.getProps().onBeforeLayoutMeasure && e.notifyBeforeLayoutMeasure(),
        t.resetTransform();
    }
    function mO(t) {
      t.finishAnimation(),
        (t.targetDelta = t.relativeTarget = t.target = void 0);
    }
    function vO(t) {
      t.resolveTargetDelta();
    }
    function gO(t) {
      t.calcProjection();
    }
    function yO(t) {
      t.resetRotation();
    }
    function bO(t) {
      t.removeLeadSnapshot();
    }
    function lf(t, e, n) {
      (t.translate = dt(e.translate, 0, n)),
        (t.scale = dt(e.scale, 1, n)),
        (t.origin = e.origin),
        (t.originPoint = e.originPoint);
    }
    function uf(t, e, n, r) {
      (t.min = dt(e.min, n.min, r)), (t.max = dt(e.max, n.max, r));
    }
    function wO(t, e, n, r) {
      uf(t.x, e.x, n.x, r), uf(t.y, e.y, n.y, r);
    }
    function EO(t) {
      return t.animationValues && t.animationValues.opacityExit !== void 0;
    }
    function xO(t, e) {
      for (var n = t.root, r = t.path.length - 1; r >= 0; r--)
        if (t.path[r].instance) {
          n = t.path[r];
          break;
        }
      var o = n && n !== t.root ? n.instance : document,
        i = o.querySelector('[data-projection-id="'.concat(e, '"]'));
      i && t.mount(i, !0);
    }
    function cf(t) {
      (t.min = Math.round(t.min)), (t.max = Math.round(t.max));
    }
    function pf(t) {
      cf(t.x), cf(t.y);
    }
    var Os,
      kg,
      Rg = v(() => {
        G(),
          on(),
          Ht(),
          tO(),
          Fl(),
          nO(),
          rO(),
          Ul(),
          Bl(),
          iO(),
          Yv(),
          yi(),
          aO(),
          sO(),
          Gs(),
          lO(),
          qv(),
          Kv(),
          je(),
          cO(),
          wm(),
          Us(),
          (Os = 1e3),
          (kg = { duration: 0.45, ease: [0.4, 0, 0.1, 1] });
      }),
      Mg,
      OO = v(() => {
        Rg(),
          hi(),
          (Mg = Ag({
            attachResizeListener: function (t, e) {
              return di(t, 'resize', e);
            },
            measureScroll: function () {
              return {
                x:
                  document.documentElement.scrollLeft ||
                  document.body.scrollLeft,
                y:
                  document.documentElement.scrollTop || document.body.scrollTop,
              };
            },
            checkIsScrollRoot: function () {
              return !0;
            },
          }));
      }),
      ao,
      Dg,
      SO = v(() => {
        Rg(),
          OO(),
          (ao = { current: void 0 }),
          (Dg = Ag({
            measureScroll: function (t) {
              return { x: t.scrollLeft, y: t.scrollTop };
            },
            defaultParent: function () {
              if (!ao.current) {
                var t = new Mg(0, {});
                t.mount(window),
                  t.setOptions({ layoutScroll: !0 }),
                  (ao.current = t);
              }
              return ao.current;
            },
            resetTransform: function (t, e) {
              t.style.transform = e ?? 'none';
            },
            checkIsScrollRoot: function (t) {
              return window.getComputedStyle(t).position === 'fixed';
            },
          }));
      }),
      ff,
      Qe,
      PO = v(() => {
        G(),
          $1(),
          Lw(),
          jE(),
          dx(),
          Ix(),
          Xx(),
          Zx(),
          SO(),
          (ff = A(A(A(A({}, Uv), bv), ng), vg)),
          (Qe = Z1(function (t, e) {
            return Iw(t, e, ff, dg, Dg);
          }));
      }),
      Yl = v(() => {
        PO();
      }),
      Ng,
      Ig,
      Lg,
      jg,
      TO = v(() => {
        Yl(),
          (Ng = Y(Qe.div)`
  position: relative;
  z-index: 2;
`),
          (Ig = Y(Qe.div)`
  position: relative;
  padding-top: 10px;
  padding-bottom: 10px;
`),
          Y(Qe.div)`
  position: relative;
  padding-top: 12px;
  padding-bottom: 12px;
`,
          (Lg = Y.div`
  position: relative;
  box-sizing: border-box;
  background: #171c23;
  width: ${({ width: t }) => t}px;
  height: 100%;
  overflow: hidden;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 4px;
  border-left: ${({ theme: t }) => (t.base === 'dark' ? 1 : 0)}px solid #fff2;
  border-bottom: ${({ theme: t }) => (t.base === 'dark' ? 1 : 0)}px solid #fff2;
  border-top: ${({ theme: t }) => (t.base === 'dark' ? 1 : 0)}px solid #fff2;
  border-radius: 6px 0 0 6px;
  overflow: hidden;

  && {
    pre {
      background: transparent !important;
      margin: 0 !important;
      padding: 0 !important;
    }
  }
`),
          (jg = Y(Qe.div)`
  background: #143046;
  position: absolute;
  z-index: 1;
  left: 0;
  top: 44px;
  width: 100%;
  height: 81px;
`);
      }),
      Fg,
      CO = v(() => {
        Yl(),
          (Fg = Y(Qe.div)`
  position: relative;
  padding-top: 12px;
  padding-bottom: 12px;
  min-height: 57px;
`);
      }),
      df,
      Vg,
      AO = v(() => {
        Yl(),
          CO(),
          (df = {
            default: { filter: 'grayscale(1)', opacity: 0.5 },
            active: { filter: 'grayscale(0)', opacity: 1 },
          }),
          (Vg = ct(({ active: t, content: e, open: n }, r) => {
            let o = { fontSize: '0.8125rem', lineHeight: '1.1875rem' };
            return g.createElement(
              Fg,
              {
                ref: r,
                initial: 'default',
                animate: t ? 'active' : 'default',
                'aria-hidden': !t,
                variants: df,
                transition: { ease: 'easeInOut', duration: 0.6 },
              },
              e.map(({ toggle: i, snippet: a }, s) =>
                g.createElement(
                  Se,
                  { key: s },
                  i === void 0 &&
                    g.createElement(
                      _n,
                      { language: 'typescript', customStyle: o },
                      a
                    ),
                  i &&
                    !n &&
                    g.createElement(
                      _n,
                      { language: 'typescript', customStyle: o },
                      '  // ...'
                    ),
                  i &&
                    n &&
                    g.createElement(
                      Qe.div,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { delay: 0.4 },
                      },
                      g.createElement(
                        _n,
                        {
                          language: 'typescript',
                          customStyle: o,
                          codeTagProps: { style: { paddingLeft: '15px' } },
                        },
                        a
                      )
                    )
                )
              )
            );
          }));
      }),
      zg,
      kO = v(() => {
        TO(),
          AO(),
          (zg = ({ activeStep: t, data: e, width: n, filename: r }) => {
            let [o, i] = at([]),
              a = Nt(() => e.map(() => Si()), [e]),
              s = (c) => {
                let f = 0;
                for (let p = 0; p < c; p++)
                  f -= a[p].current.getBoundingClientRect().height;
                return f;
              },
              l = xt(() => {
                let c = e.flatMap((f, p) => {
                  let d = a[p].current.getBoundingClientRect().height,
                    h = [{ yPos: s(p), backdropHeight: d, index: p, open: !1 }];
                  return (
                    f.length > 1 &&
                      h.push({
                        yPos: s(p),
                        backdropHeight: d,
                        index: p,
                        open: !0,
                      }),
                    h
                  );
                });
                i(c);
              }, [e]);
            Wn(() => {
              let c = new ResizeObserver(() => {
                l();
              });
              return (
                a.forEach((f) => {
                  c.observe(f.current);
                }),
                () => {
                  c.disconnect();
                }
              );
            }, []);
            let u = { fontSize: '0.8125rem', lineHeight: '1.1875rem' };
            return g.createElement(
              Lg,
              { width: n },
              g.createElement(
                Ri,
                { theme: tu(eu.dark) },
                g.createElement(
                  Ng,
                  {
                    animate: { y: o[t]?.yPos ?? 0 },
                    transition: { ease: 'easeInOut', duration: 0.4 },
                  },
                  g.createElement(
                    Ig,
                    null,
                    g.createElement(
                      _n,
                      { language: 'typescript', customStyle: u },
                      '// ' + r
                    )
                  ),
                  e.map((c, f) =>
                    g.createElement(Vg, {
                      key: f,
                      ref: a[f],
                      active: o[t]?.index === f,
                      open: o[t]?.index > f ? !0 : (o[t]?.open ?? !1),
                      content: c,
                    })
                  )
                )
              ),
              g.createElement(jg, {
                initial: { height: 81 },
                animate: { height: o[t]?.backdropHeight ?? 81 },
                transition: { ease: 'easeInOut', duration: 0.4 },
                className: 'syntax-highlighter-backdrop',
              })
            );
          });
      }),
      Bg,
      RO = v(() => {
        Bg = Y.ul(() => ({
          display: 'flex',
          flexDirection: 'column',
          rowGap: 16,
          padding: 0,
          margin: 0,
        }));
      }),
      Ug,
      MO = v(() => {
        RO(), (Ug = ({ children: t }) => g.createElement(Bg, null, t));
      }),
      Hg,
      Wg,
      Yg,
      DO = v(() => {
        (Hg = Y.li(() => ({
          display: 'flex',
          alignItems: 'flex-start',
          columnGap: 12,
        }))),
          (Wg = Y.div`
  font-family: ${({ theme: t }) => t.typography.fonts.base};
  color: ${({ theme: t }) => t.color.darker};
  font-size: 13px;
  line-height: 18px;
  margin-top: 2px;
`),
          (Yg = Y.div(({ isCompleted: t, theme: e }) => ({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: `1px solid ${t ? 'transparent' : e.color.medium}`,
            width: 20,
            height: 20,
            flexShrink: 0,
            borderRadius: '50%',
            backgroundColor: t ? e.color.green : 'white',
            fontFamily: e.typography.fonts.base,
            fontSize: 10,
            fontWeight: 600,
            color: e.color.dark,
          })));
      }),
      To,
      NO = v(() => {
        DO(),
          (To = ({ children: t, index: e, isCompleted: n }) =>
            g.createElement(
              Hg,
              null,
              g.createElement(
                Yg,
                {
                  'aria-label': n ? 'complete' : 'not complete',
                  isCompleted: n,
                },
                n
                  ? g.createElement(Xn, {
                      width: 10,
                      height: 10,
                      icon: 'check',
                      color: 'white',
                    })
                  : e
              ),
              g.createElement(Wg, null, t)
            ));
      });
    function IO() {
      let [t, e] = at(null);
      return (
        W(() => {
          (async () => {
            try {
              let n = (await (await fetch('/index.json')).json()).entries[
                'example-button--primary'
              ].importPath;
              e({ data: n, error: null });
            } catch (n) {
              e({ data: null, error: n });
            }
          })();
        }, []),
        t
      );
    }
    var LO = v(() => {}),
      qg,
      jO = v(() => {
        qg = (t, e, n) => {
          let [r, o] = at(null);
          return (
            W(() => {
              if (t) {
                let i = () => {
                  n.getChannel().once(nu, () => {
                    let a = e.getData('example-button--warning');
                    o(
                      a ? { data: !0, error: null } : { data: !1, error: null }
                    );
                  });
                };
                return (
                  e.getData('example-button--warning')
                    ? o({ data: !0, error: null })
                    : n.getServerChannel().on(Di, i),
                  () => {
                    n.getServerChannel().off(Di, i);
                  }
                );
              }
            }, [t]),
            r
          );
        };
      }),
      Gg,
      FO = v(() => {
        Gg = (t, e) => {
          let [n, r] = at(null),
            o = document.querySelector(`.${t}`);
          return (
            W(() => {
              if (e) {
                let i = new ResizeObserver(() => {
                  o &&
                    r({
                      top: o.offsetTop,
                      left: o.offsetLeft,
                      height: o.offsetHeight,
                      width: o.offsetWidth,
                    });
                });
                return (
                  i.observe(o),
                  () => {
                    i.disconnect();
                  }
                );
              }
            }, [t, e]),
            n
          );
        };
      }),
      Xg,
      VO = v(() => {
        Xg =
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZgAAAECCAMAAAD0GDFCAAAB0VBMVEUAAABzgo3d5eno8PFzgoxzgotzgoze5upzhIze5up0g4t2gI/s9Pnt8/ns9Prs9Pnf5+ve5ut0g4zf5upygo3e5uvf5+vf3+f////3+vzs9Pne5urq7/Lmlk33+flzgozV1teEkpouNDj6+/voo2NanTvz4dDl5ubqr3n17ebx1br19fXq6+u5wcXc4OKWmZvu7/Hf4OHuyKT9/f7a29zL0NTZ8P/s9//LzM2oy5vx8/PT7f/Y2dnl9f/nnVjM7P/39/dBtf3v8PCws7Tsu47z+//wz6+Woal8gILy8vOAzf7o6On3+Pjj4+SNmqL29PHl6OrQ48x8ipP059unsbe817O/5v+VwIPj7uTpqW6BtGtiZ2qEkZvP48tITlECnP3CyM3y28U7QUUkqv3y9fXtwprrtYS9v8Gip6vd3t/T2NuJlZ728/GUv4Pl7O/U2dvvyKTtwpluqVNko0fg9P/W7//s7O25wMbsu4+i2//t9fDuyKXrtYPc8v/t7e2xub6JjI9VWl5cv/7N1Nna6djGzNCXoqqy0advdHZITVH5/f8So/3G3cB3rl/v+f/p7vGCkJiJjY+LuneQ1P7c4eXF3cCwub+exo9wx/6stbs7QUSS4OMQAAAAGHRSTlMA34AgmXvv3yifQBDv77+vf+/Kv2BbQBAH3mwLAAAPmUlEQVR42uyZO2/bMBCADXTtY5aB20iC5KhNCyeCq2qohiMDAarBWuoCfixG4q1uszQoEDQI+m/Lh2TKiRrHboPSrb4h4ZGyadzn05l2r/fi9at+x+G8edF7Vl50Wo7k5fOaedPvRx1H0O+/7j0nnZejzbzsNejEBEO/32vQiQmGTkygdGICpRMTKJ2YQOnEBEonJlA6MYHSiQmUTkygdGIC5a+KOVuMWmY/Ys0wOgwGwNwoIxUsOgrQoF8vT0m23YRFfwgO8JfFXI03TTF4XA8346Qefk2S8W+IoVDBo6OI4/gxMRwu9V8ElrxNjaR+nNL5aYj5iAeN6CLZ5v8cN4sn+S0xkltYdCyPiUGCWTEzztUaRNpyBTRfFj1FMZpnEONL5RnEcJAu+cTtpf4FMfoedY1HSZJ8deWicfnfJMkIX+vwyovxVXUzHp1Xwdv37z8fIobHbjK2/8llSemEuYWspBmTVJnHxsV0QilvE0MkpYo1s84aYmKrScVuE2XHsYBYk5nnjeeATOC6kyppaTZxO+oXowIR8xFXjFyD0bgeM8QViwdihku8XGCcuOjThw9fDhFDAJl7zQwmNgCBBNhlCjnSkQ6JWaBIIIDVQzErACQAsZ2C8WJy4Dbwj0KNDkegxr5CsyG4CiJQ2h3LMMT4W5lv/ntuZWfL5UD/vcaDPWJSztNaTBlbTKCMkswlOpuZ/BZCpOaiIpKw1kvSJjCfRiwHdV/MBOjUPEneLBj3f8K5ojbNXsyjt7I1TOwml1aMMIGArLqM8xMTM9IDd6EXswcKFVXEmenXHgmFmWYRB+0OqBXDbLboPTEM0NQ9hNQVKOvkW9bsyWKYW85AmOdxwRx4KOeYQ8Us8e25YYlt+O3797f7xcyJxVUSEqXv0ExPr4Cbi6KIm3mUmzS5ihCQ7orhUBLDJUzq5yZ18hUhhQTEniqGw9rXHHEBh/hExZzhLWfRXlo/lRHQWXUoAYZaDDEDhHyp5MB2xcyhRvo0N3uMAvpUMTHE3i0BeepiloOK6EgxbCtmBkgRQmSLmHWds10xEuTOtwgrILtiUoD/U8wFXvrJo8QwJPJqQrhWM28Rk7dVjE9ms014MQYA9kQxCiZhi7k9qMcs8CZq8P3dux+HiSlB2ebvc0RbxAj39he7zd/d4zwr4PfEMIDUBKlp615M2iKmAFo3shDFXOGkXcxGDz3DWlOCb1zpnPtPZYeImYF0pxmb99Qmo0UM2LOhvvZBj3cDkvqCaS7MbK2VNli5ZRfWeNmpgKzqSiGKGWA8qk7+V0lyhxdJkgyq2hj7k//FAt+MRmbhGi+ubod3y9EBYnJq4fZdzOzda2IXUFFcAmoRg0SsV4BtbzuolPPIKlsVhaLAfMFYkN1EgMhsfpHiK2TFuHASx2bBbbo9UiFlNiFBiom+XmPtxpmoSFz13Czdyd9F4+qr/4s7bBgPDz/HxBGrz4P27JiuAUCouEWMnJmlwhcagurYkYNGyNR0KxQ1xBjQnG0/vSFfULPcf7fNpNCBmxZukzDFHMFgsLmI/giMZNOWaQLSLbXB6o9kSsv9FRnJoidASHYaP5QFghGzH4TYo+v/0i+YgWDEBEcnphMTLCknUXB0Yn6ycycnAAIBEARX9OnxN/9AzWFhocGqFJr5TpQwUcJECRMlTJQwUcJECRMlTNTiMKcwzTC3ycx2ecZK+/ky5Vp9WPa8TGS59wEAAADAvxzHoGjbBkXCRAkTJUyUMFHCRAkTJUyUMFHCRAkTJUyUMB/7dIwCIAxEQbSwkHSxkcBPl/vtVbyylSJq7X5h3hWGMUUYU4QxRRhTH4RZyyycljJ5hKlSdBy2kKpDmKoYDRcjVPPDTIqGm9CaHqaIXx6GSnqYhWFexJweRlvDQ1d+mN5AmL8gjCnCmCKMKcKYIowpwpgizM5+Hes4CkNRGH6N0x1ZW2Pdxs1W6dyw0chy6YIyotkyZap9hXneHZuQcEFDRppMBAl/eUVS8MlcWGgbzELbYBbaBrPQNpiFtsEstA1moa0OxpuuE7pkb47INca0KPVzi2EH0+Dc3ryhz5T2UdBnjRGozLkGn/fyMIZBwaAhs4CQRwxypNeiDDv1iy7m/wtkuFhZUqAifwTGnZ4LxkEXaXZ5nsaAtAqmlxOjYVw5X/RzMBb3z6VDfGqYOtHjnUn0gfEV4wgmlEsqTmHgGB4M45IgxmeGwVug52hs2NaBOwWTipQwhSlMSz4CRrsAMa4Q5s/fS7+Hd/xQ5QTXGo4WDCwTENXQsykgkc5MYOrD/KMsVrkd7pcX5E7t+mB+/avOWXUUuoazOozvpacDLMNOjRp6CBM0zN57H8h2DqZLcKvXeCvrZSwUTHQ5wbV3jl7BhJRicdRWe9pIp2G6vMUczNHl5k7MK8GcZeytHePIKgwNEEnzUWDQMJaBCSOYRkRqAN/cMa8EU2QsbsBIRlHfJsJLTsHAl8umOwYPhxGUalklzIeMxTxM/wVzoJHrgfEoVfTjtRPxBRgruZ+EqZMrPGaFy181Wf7xumCC9F8zXXLBqwOtgindhumy4+Vf4X7Jf3bsmLVtIArgeAW2MdYWMrxN6Dpois6LQUOHGi1yh2BK8aIigzLIeM7iKY2mlEAgZMnHzbMS5+kcgy/DwZPz/oPtJ529/EBnbiszDifdfJRZnJWtdyclcRhOdpcu4a2b8B3wT7im34gJGi+bzcO3YjdnZSSDLh3dY0668d/fk65u/qfdOO7sv7IvnMAwTWCYJjBMEximCQzTBIZpAsM0gWGawDBNYJgmMEwTGKYJDNMEhmkCwzSBYZrAME1gmCYwTLOAORsYo8DY5R6mF/jtUWDscg/TD0btUWDscg8zCvrtUWDcRjBHGxibjMC4jWA++SwTGMvcw/iDM2N2BDO++QmSBQzVd7jLEMw6uDwus6inu+praBclTRGcRlYwvhcMaXIFAxcfZL7DXtfLerPZPC/x5Wl69QCttHqtfJzBCYQwFg0HHsk4gTksM4/BrK4BWyyb4X5jwqQJVmUqh71WeQRYklfQmRDGpvOAZJzAHJaZX+zJTH8RDA4mTARNmUrALHu9laoUOhPBHJOhfcYVDMkQDMlYw6Rq9YVgvg29wDun0QUMyRAMyVjDVKoCiHQC2ExXkOpb9U/rlb5Tdxrn7c0sS5vViY5mODAEI5hj+b0g8Hoj3yEMyRCMKTOtF9jTcrHt6jBMXuKHRGnAIpVBVpSqKIoc38qieNyuLG9z9f9H86VViXdwFbde2rmX1iaiKIDjvl87FfFCRY69i7uYiF7mkoi9JXEk4DgdcOWmEMEKNS5c2YCLFt1pBR+4ET+t58xkMomjeaHmTD3/xXjntemPeTT2BmHm7typ4zh198zxP9znzzfGw+8QGYOh7o7BfNjBPjzZoZ78BPP8Pvam99SrCZjJWxn98zbGPb3vcfYqt0uW+FhiFsIs0oXTpy79a5hH897Khr0z02G2ca044hbux3bxscQshFlx1VvZ1gTMo8WeMfH93nszFaZ4nV5/SyfdKZCYxQ0mcylhyGUxGPopv5kGQ5uyeu8FZjZM1SWDQZeFYdTT7Wkw8fq74WFyxcwDU3UhGHSZ6OG9EubVh8e/hlkvYe5UYBDkvcrN3gnMnDDkMv2zso87O/jx5c6Te9iHb6oKQwO6lRnUwd5lMG+KH/+bbD/5kNZ9gZkJU7rM6vXDYV/peqm+Lt/C31BM9u714M7uNi6zn/v757u7Kn66/mX3vop761/wIzVUEpi5YF6Qy+KVMFlP396KFWa2cWXbIwzt663TO5jv4f5YmQd03C0lMPPB3L6JLn+w2MTlijHDf+J8F/v/tmEEIwlMDRIYpgkM0wSGaQLDNIFhmsAwTWCYJjBMEximCQzTBIZpAsM0gWGawDBNYJgmMEwTGKYJDNMEhmkCwzSBYVrdYLr7G8P2Xh2q8XQQVoZTCph/2wNvmLDi0t5stVqv2i1abkzsbkBQDA1oNSuwinW8YXRHTbb/KudR1EZLYCr9I5i7P8k0N0sYXBGYSv8K5m5HYFbQbBiUWRpGN1Kb5ERBkloTq3xsrAkKmMjYNMq2NrRO0kBxiT/MhExzv4VttlvU3nSYyHuTOE+np+DT1MFBvtMbC40MRvfBJikk2emJ932BWQDmWTgGs5HVzpc/wZjGsD7BaEjpROtCNAoU1vc0BINL7TKYNGOLIKLT0Y1R/GHQZc5b2Vh6dD8LygtpAMjg/HCzpUWiKGvpdF5TZtjDoMtyzxjf11nQUFSo9QEeEYLNVyHDiDVlPI353MbqAIMuS8JAEcJ0Ug9UoHRxYThLxxUJzIIw6LI0TKqKtHcxbonGYQBhEjouS2AWhAnVZJt74QjmsN2dBmO9KorhYHSEd4raAktSkcAsA1Mt3Gg3m829fLGppsE0hg+XgABoGDo6IskxDMGE3mXyYUdgloQp67aKumoqjLJg4iCy0EESHwVx39IR2oHBrc5ZRWJuEESJTwVmFszyDVxQDBOnMyoHAJa2agvgD2KXjQ2O09CmargDfCOk0wWmCvO3CnU4GlUeXeUKx442TI0TGKYJDNMEhmkCwzSBYZrAME1gmCYwTBMYpgkM0wSGaQLDNIFhmsAwTWCYJjBMEximCQzTBIZpAsM0gWGawDCtbjAfmxtF+4dqvE5ExQHPPxM7YjBhxaW92e12W+0uVpnnP8wcCRreMNPn+e+1JmFijQWG+3zkIwGzzDx/w+zPw48mzBLz/GNoqPrHHmbxef4BwQSN1NpouMHQMDJhsZJoxT7+MAvP848gwhWfGgs23+FN6lwKxGHANhLn+MvUAGZynn8zn1FGtX8J03FeqyCiYUKbOuB0Ni6nmWnH//2AP8z88/ytwfpQTqzcggO6Rjo0Dj3BDEUGwP6Vmj3MAvP8HTV6gIQ6yOZe9v1o/h9KJZqK+b+4cYdZYp4/pY0H8I5gnCthAhgmMH94nv/+nDDODzSePn7FWLpieH1fTI1hqvP8D0cw3d/N8yeRdPTinOTbNSBMWJ9PBXjDVAqb7Q0sW/x+nn8BkBKM9k7jlr4HXX4qwP5OVjeY8Xn+h6oKU5SACWKbwajIQ78PxgD5ODBRlDinuFc7mHnm+ROTA9/YcgMa64FJAoUwNDYOwNfgV/+jAzMrC6pO/Qcw+eXRYfZFcQKjHaSNhvE1+Hzs/4JROrLOuRo8Vv43mHomMEwTGKYJDNMEhmkCwzSBYZrAME1gmMYA5uInJVV6uXqYy2vs/2RlBT26fGzVnVh7pqSferZ25diqu3pWZKouZ4+tvpNn165tXZdGbb1cO3vyGINOnl+TJrrMwoVorpyQRl25egz7AYGGi8bk2+PGAAAAAElFTkSuQmCC';
      }),
      _g,
      zO = v(() => {
        _g =
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAAEICAMAAABrir8vAAAB3VBMVEUAAABzgo3d5enp8fNzgox+ipjt9Pl0hItzgozf6Ovp8fZygoze5urs9Prf5+ve5ut0g4xzgoze5uve5urf5erf5uvd5+rd5erf5Or////3+vzs9Pne5urq7/L7/PxzgowuNDigZsaEkprmlk3V1tfl5ubLzM18gIKWmZu5wcX6+/vs5/Xh1e/y8vNITVHc4OLWw+jvyKTt7/Gws7TLsOH19farec22i9P39/jq6uvoo2Psu47f4OHx1br17ebz4dBBtf2WoanY2dnRueXy8fnBndrL0NPqr3nt+P/m6OljZ2r9/f47QUXa8f/U7v+Azf58ipPU2dtiZ2q/5v/Gp97a29y7lNfM6//L0NSnsbfl9f/Andqlb8k31dPDyc6lcMqkpqjnnFjz+//v8PG1i9Ob6unj4+SJjI9VWl4CnP3m+vnn3vL29PHczOtp396NmaIiqf3MsOGxgtC+v8FS29m9v8Dwzq+NmqG07+/059uxs7TtwppvdHbx9PTl7O/t7e25wMb28/GXmpvg9P+g2v/y28Wxub7rtYRcv/47QUQSo/1E19afqbDm5+iQ1P7h1e7Antqwub9wdHfpqW5wx/4xr/33+fna9/fN9fSo7eyP5+brtYPm9f+w4P/A8vFZOmLPAAAAGXRSTlMA34AghxXvOu86s2bfv3/PyqXv759wn59gUVCBVgAAD1BJREFUeNrsmT+Lo0AUwBcOrji4L/BSPV45FgqioKiFil8gpLmACOkSi6RYCKlShJR7sOV92Xszo8luJnvrwf6R7PyKxJl5M+7+5vmMyd3dt5/fJ5an/Ph290F8s+oNvn+U/R+TCVieMZn8vPsYrHuTyffrrqz8D2Ayue7Kyjex8m8JK384Vv4tYeUPx8q/Jaz84Vj5t4SVPxwr/5aw8odj5X8caSbZwnWi6uvKd0L3vdfySBHdwzUo+rryXfTfey2PqiS5j4mu2vfurfx3lR8Ds6MGnnEDNd8tw+5q9/0CGOHnstsv3FlYClAU61k4c0HT+kK2pwKWvj/D0Pd5hokz5fndnPw0vfBdyOXkPijkEdl46NdyX5C/Ikrlm5dAFlfHRA0xOvO33nZXJeBV8Ypb+2R3lCGazNvuvWO1SznqAIrESz9fvthgHdQYFNIQlsDMUKoMsUQemC9VVMBRiFNQ/EI3QMYHFzsCMFhzb8BBUviTkwhchBjw2DmoVkE+dixekA9EW35NqfJIorqYSNukKCI6Ng3tuFWRakarboH7iJgYVvQIkpSiEWT+DKeF/MfDk/a1dhwiOgC5lhSgr3Yg7+QHCx5z3X+VnTUGjhzO1YSwAPiNoZKPm0Ku1cpdwUDI9HeHlJ0t0Up7I28PaQyak/wYMmr20Mi2l+xVofK6BR6jDCDjVkWZ7kk+X76DG9CqhXQRzIWQCaozX785MirQwWEv//WaH6CAHtSrz7Fg+bqR41StOBtc89OIKmDS/sZ7KT+BVEYcCXpW3ZhHUQqaA+2AiSj9fPlTnDqSEl1glrgJagG99V6S30lhe1p+/qowBxfG8QxdKX+j+0qQjbkYIr+JVBFJtfwGrsrPYCXlx9rrfptlWdOcd0+zapoVQEZ/RnDDDbHHB+0a835kqX2Uqsifs1k2nVeE6Xk9Lc66nc5VzT/L51KEm9IVQ+T/4Vqj5VcvyQeKO/lpRZq+5kPPTh7HdBiF/NzRaAHrs3wtuu3l91fDcPnGsY/+pXxwFzXivB1QdpjB8tOI4gNnfkRwWeEzqjj9ozF81FRazwgMuOwbmc8p+xaZzycz5DPLXzh/Y/lJN4NM+VDRiofHIF+W9DOC7TqnG25+qu+5NiWkJFN+CQYq1jjeoGPI7zf1TeX3trNr8u/Jqygdg/xi3iV6V0/8036EGHbbwVGootZYmvKXKs4kxLUeV8etigzgQn4h9B+B/SUSvo18FgzM0ZCvb7lUjeMJN8egbN11iEru7JzzIdZh6270TkwxyNsp1sKUDwHOjCdcvW1l2+YbX5meT9t1je6lfKcuc4dPUvapINdyh8tPPM+jhl8Oz+SzYIqzpIrMms/siJJxyAf9sFpPVcEXStt8vpTyH+TIb1D4yATcbcoXi9p4wtX9as7D6SR1DpfyxUafvHi61mK4/Io64ufy4RBxZ5VelZ9RsxqJfICl44hrZUOA4xTQUTjOEv4T8WRhnl7AFQo18A68/ANAQvFovlg7Ycq/TSrKrPxPYZvt6HE8Xyl/LfkVUZSOXr7jFnCDZMlhP6IfUyxW/v9g5d8SVv5fdu4YBWEgiqLohATBYKYQwcJxq1m7jQTEwl/IRD/nLOHy6hcnfibix4mfifhx4mfSLf5B/P3iL6b/3n4un7h8efrfy5cyzjde0i9jAQAAAAAA4PdNU2Evw1AIEj8T8ePEz0T8OPEzET9O/EzEjxM/ky/FP15Ojc35OvaLX1tb72zW1mqv+LU92LFjF7dhKI7jQ6dCt5bCg9z94G3uItDkVUsgm7xJi8euN97UkClTlvuPa1t2zrKvOUET4yjvS8ggnAQ+UZ5F9s8kjXreN/qL4H/Z7EmatN98XQT/50b2/aznzY9F8L/Lxv+g/bdF8DdPJM162gh+aoKfU4KfnuDnlOCnJ/g5JfjpCX5OCX56gp9Tgp+e4OeU4Kcn+Dkl+Ok9Br7h0JFC+oUP1FYzV9Q1rCsad+Ka+l54R0Pc9eo1DSlmTVHcV9O/ewh8ho3wqQZUiw0caJQDDI0zsGX0ihBgmW3zvDvjAxN84Cb47nh/+FuK8+CyXefplwQV4Q/fjuYYf9v9TmAu4Su6fo5P/u7xS27g3sCRmIMp4Cf4trukwByftrAL4zvW5P2949POopF1k8uq0qKM8Bm+m09s5/gVsCR+sKdGf6X4v6tzf8aqp6Jt7FMjGvgdIBP5aNGg7tA9HM/wy9PlseOLtpKulwmfcazWif+rLvpUtKVD47XSTr0MXKtoy/HStm6ENZhi/FdjjAWqS/ghTZ+U0Wln0FcU4ftt2xjiDZOjjQ5QBocIn16gPFyMHzKKLuEftm2Xdn5u+L2++mzmO6Cw0YjxADdZ2BhfwYJpgl9rrTvW/5v5ueF3+oo+wdcNfHx21zjnInwy3WXzmU+L42vqKvVq8Rt9RZfxhxP+aXTW9MMQKmBifAVPCfhKt90Sv2RHTZpXesP9OEbIvw98q4fTfkgz3PlOrCL8phT8kJrecAu6Xppd97TesZPw307FXAczZjcsvVLfkT31ea7e3+Mdn2d7b8d96nb/7QT95rHimZ91mq1b8w0377Ra9WnngRP89AQ/pwQ/PcHPKcH/yw4d0wAAADAM8u96FnY3IIGf/BL5P/kl8n/yS+T/5JfI/8kvkf+TXyL/J79E/k9+ifyf/BL5P/kl8seOHauoDkRhHH+OrzvNZGYvzNwiLxCs1jAgTF4gXZJOkDTibdQi18Ji2S3vu96TUdEECRvYZUfJvzAcZ2x+kSHk8034z1SI+FmTXGp2uE1EPoHn6Ofxf6HXrmr2+/17xR/HZPmKmxSdsoXGE/Tz+PPf6NY04LLKD4d9Fz+OuJUkh165E+Ait8LDFAD+S08/WVzxeejiC/gkRegmT0sxxXiYQsBn/bH4MeUT/pfgs/5Y/BWtAKEicFrViFVJhVK5eqON4hkQWyljvztSQvMQ4E0JA7+jnzQZd6yyto/7+M4KViUFTpCENJaMMY4v1pgC2JItUzIz/6PcmtSQRGgFgv/y5wb/sOQO1bKt6uHnMVcYO0MHv3/sxFRqQJi/GlBENYCUIgRWIPjzzx475zZiGD/l6bJD+XWsKEdghYE/H3fm67UxYhCfHHxUAoqiy40IrCDw5xiF7yWLAXz/lc+YCX8Yf47R+LBuCF/TBj47/fOH8Xv2WCRX/N0hu49PV/yoj89ZgzZBmwl/1Lud1+UySZKPKuEO77iLv6WipXXg3jx+cSEuThvX4CStJ/wWf0T/FueOGXDnUVM5MgJASjKqnSPpbU1e19CWijqGNlREtaQCE/4A/qgU+WypNDiR8uBmHh/KEJXAjC9WQ8h2n8KE7/G/JS30dRDifNGnpeBf+z84/mP3n537d00eCAM4TkCJ4KLjTXe8cCYdkqEunR1DlmYXQkEMDm8HlYo4Obwgbu/SH8P7t753Z/AhtbVPGzzk8nyhoU3O5UNIIvWR8PERvksRPj7CdynCx0f4LkX4+AjfpQgfH+G7FOHjI3yXInx8hO9ShF8jC/i9DuFDlvH7vE34kF38LvcJH7KL7/MW4ess4kOdDuFDlvFb3Cd8yC5+u9Ozi3/754592MOq7B9zIYWPOfW7VvHv+dPH+pP94tCYuRAKv+1x3yY+u/lEf/KbmWaAX5mOHlV2Xv2nphQ+Ir/jta3hgz4ePxCH0i2D4usbBELiV+tyz7eHD/p4/HygWhcigJ1J7Aa+0ucta/igj8fXztc59obAR1z3va49fNDH41/p2FsNfNBvce61/LYlfNDH45cfBB+Fo2i7mbN5GDG9GQTZVLIoDzbD6LBoutmoPaphztRRs1IXhWtmJcBH8/c9znnH+0G/fhLnT9/GH4q1+gnTNF6rnVIfCcw4tCzSJBaZFo5FnCRiNzK3BT0tHeUiLF99tfgqv9XvWcR//C6+jIVUhMJ8JUyJX6htLoqN2vXXLJvqjUwzjb8zN+Uo3R2HF60F+PgsXnYe7/D4WaDKUhEyhR8wBvhrrSuEfHdHKLR3IpYMplf0aN3ZGoNv7PH4sSnQhkNNDPij4zkNo0GRlIkw+OXfIitfcL6G4Jf2p/iz1blr/nEcFPDle/xllgoV4JtfIiYRJ34j8Ev7U/znxf6tHv5QFANp3AHfHBl+/R6hEfil/Sn+aj+ZLRYvdfDNhQjwy5Idiwv2ZQ3AB/tqk/H4lbHZYl8L36yVooqfiy3mOdN9/Huwr/a6f2G6txr4ahMPZB5nVfwoFYjnzAbg39589s+UB3bouQY+m+s56WUA+KYQMyTdAPyLJyU7KcE8ZxL+JcI9ZxL+BcK+wSL8ixTFG8QqwncnwsdH+C5F+PgI36UIHx/huxTh4yN8lyL8/+3cMYvbMBTA8XBHhysHBy0HfeBmeloEHgU2aNJkI+xNGDLGoG+Rerg56039sJUcx40TSEV65/OJ9xsU2ZaWf4JIloSj+DGh+OEofkwofjiKHxOKH47ix4Tih6P4MaH44Sh+TJYYf1vVRy9rOMWFnk6vExks2sfH1xftm01RFC9N4cd68jhHAQOGHP4FJSzax8fnGUxVL4e3ALy6oPjvGT/NzuJvxvj+guK/a/w0o/gTs8ZPs5vj89zKkoMnSitZCj3BJBPH+C2Ttu3v5pyXVsBSLCP+pH5VFc7vpvDq6/FbpVhplN9uUVlrsDs8VExi3sfnEmVpcd9v3yslKf5Z/J0+id/UTuNGpzmLz/KB9PE5Wr9RGje2fVSp/BSZG7np41uVgb/V+u3YwYIsI/5Ohx47J/h49ggUMOjQpTZquC39sAdPSr99WX9/tIj4O33jma8M72EOnua8cyvWw1nfv+aYco8pP1/OkbOU+K79jfFx4ONnVqEngCODnpF+3RHFv8Rd+5vjWzjiyqQcoD2NjxKg9Ot6FP8S1zC1qfUYf91sr8WXCo5S7MYVyoCX+fgtthQfgum6qapqGDZwLX4+HPbCRe6n2vgV5SE48/HXymhwdEbxg2yLoy1cjQ8SWSpaiRmsjWpFKqVfwQ0yd9cY2X/JNJ1oS2Up/v/pzFhvbzg4uUFEKQ4/plB1qennzM2tlhaGB6hy7bdT/LeluR5n8BfX04sl+vzxPzGKH47ix4Tih6P4MaH44Sh+TCh+OIofE4ofjuLHhOKHo/gxofjhKH5MKH44ih+TmeI/JUAu/HpazeEu2QE5I5Ifqzl8eUw4kAmePN6vZvHwPfn5uiaj113y7WE1k/unhEx8vV/N5+H5joye+4/9H9E5eAp4eScvAAAAAElFTkSuQmCC';
      }),
      Kg,
      BO = v(() => {
        Kg =
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfoAAADkCAMAAABHYBYkAAACClBMVEUAAAAsLCxzgo10g4wkJCSCgpDt9Pl0gYvv9/dwgI/Q0NbT1dd0g43b4+Xe5urT1tjd4uXe5uvs9Prs9PnZ3d7X2ty+wMTV2Nrd5enR1ddzg4x0gI/Q0tTV2dva3d7f5ura3N/W2NvS1dZzg4xzg43V19rQ09bZ3N3Nz9LV19j3+vz////Z3N7s9Pne5uru8vRanTv/AADmlk3Y293X2tzV2Nqoy5tFTlS817PQ48wuNDiDiIuVwIPz4dDU19nR09X17eaBtGtuqVPqr3nj7uRko0ft9fBzgozoo2PeDRGvsrTS1dfuBwnuyKSy0aeJlZ7O0dPsu45uqFPo6eqipqnLzM309fWexo/P0tT29PHq7fCYnJ/Jy83w1bp0en+LundcZGnj7+TMz9Hl5ubJzM53r1+jp6q5vb+Nk5Xa3N3wz6/059vDx8nF3cDFyMrd3+GLkJT29/hRWV/m6Ontwpr5+vra6djy28Xw8fLm7O/ByM2IjZDIy8yOk5XnnFizt7ljZ2rw9vmWmp3rtYT8/Py9wcRqcHXpqW7x1bqmr7aXoqrnnVjq7Ozb4eW5vL/Z6NjG3cDvyKTlQkXiKy/mCg32AwXuyKXh6OvN1NmfqbCpra98ipOAhYpVWl3G3b+vuL798PDi6e374eHvhoh8gIM7QUXgDBDx1LqEkZuEkprzpKbzpKU7QUTZ6dd0VV5XAAAAKnRSTlMABd/PBxDvgCAQEYJ/IN9if8+/r+/gJJFg1FAg8O/Pv7+hUr+vwLKvwcA/a0FOAAAWL0lEQVR42uzWwWrCMBzH8eYiokhFa2UHxyaMgUlOMde8gMdBX6CnnUSGsKvgsQ+9JP+W7ra6ptCW3ydNTKm3r1EjAAAAAAAAAAAAAAAAAAAAeABj9FLd0gIjx6xy5wajbfWKz8AIMYpuw9JK6X11WhF9jFg17JZQ7HJPq7+QfyyothtN0Lv9tGsD09VEDtN6GvXKLN6+bxLRgnLTOnpaazcrxg3jprtx6MYO2voHm7dtnDY7/tOhhrcmPWo/W76I9pQSvryPXzfXJ3MydLnFM25Dl0WPLe36P8Vpg3/9a3k7DNRNrqKemC0TEYJybPg6u9F5kV15Y/fLd65s/tc0Yn+kl/IwWHIS9YMNH7C8V4Y/Z3f+uEsutJ4zxsabXkZ9sHgOF16o31/254z/07U4mk1q4yN9h+JEhFIeek3tRcZbuOZ6t8ep79JShC3v21vmfOftfBg9R/pab8srry7/xVu7uB98pO/IXgROT+WNLjgP0j6OGEP6DiwSEYz6VCrcmSfZaZcynPofds7tN2koDOBTY4y37MVpvMa7sW3iCds62kK5jCKBDLu5OZCQZZQBbizGOCeRIGQTL1GjvvhgMp/0zT/S73Baa7V4ih4MGn7q6Tk9p3358Z1bW/vBGMuBXiAxD+7VCZ4Rt1PHh+pNBnOgF8bhj+UeeMCz4q4K6/uhetYcFthhiccxr97kmfFAPX1gqJ455wRW3LE27ycx4zxDbqoHh+pHRgY36MG7YG3gpmo8Q55A2P+x+vTcOjdQ9E/9yX176Y1GBTeKVRPBRq8Wab29tbBzn+NNLnxjku8RIwVh/4fqReTn+sDGdHjg1J+4vofu3n3rvqIQGoJNUslR1MNfgKg3+J9oyd9o9b7Au/TH6iVxk+sD077BUz+yj+7+sNBFfaOE+dCTesA0P5Fy2bqvt1qtHVnegUOd75VJ9cCAjvUDqd6D+9Fu6ksk07N6a6jn3VmQ5QX+dzBSo7vo6sV0XFyK+OOk9FaM4eLicifkARL1af/HpcDy5lLkLS5J6UCENCE34KRAZMkPrURyl2URCsCjR4+ucT+Rn5lJ+DZmZmaCZjGbfT89nYcfw+pMluPwgcNkV7ent/MM1LNzf4yuvlguVy31pNwuWjVV1eneWtqlhF+rrxkGX0tO8HAADKPWOSTbxi+2dY55iHoUXUFzGooSawHkjyJAxE4RQCTORTUNrUTnEIJmMYQ0uAKlrRv4ESbGLZqtA+bxxo0bt91C3mTGLAYTuASSE7gzwAechhO+l1CxzUA9M/dnaeqbdQVo6JZ6PdcpF0F8BWeajqC33KeMX6tPylNbslw3SEmWk/BraMlAvetOfujyyC66ehSNYVuiaS26IkHw+53TvDkQG0GLXBqXY6LEQappcXIDLboYh5MxTkIRDohrUc5WT+nwIZ/YXuOyz4NO9ZC+z3LhWd97BupZuR/79VjfFpL1UrNZUXKW+pKyVW6XKrqgV5QP7XJFqTrfyTOj/j5N/Rd56mnye/U78k57YUfe6ra8C42Bebp6CesyRQas8P9BfRSqoOEmEjkLK8aRfW4F4Yv9KNCbepJxqs/7ZnE++/hxloF6Ru6FbuoJSUFXoVhVFKIe17QhVfFvoNSpmRdszGkeRP1tmvqO4+/Ut+WpGoT+5y98F/TTntSb1t4Q9WnOTX0E8qA+ZlpdliRp0WyKUMxuLkIawbfCvH79mvOg/rmLeji9GsRM+9b6pf7CbheuX9/zG+pzZUwRLFfL5aai6Kb6nNJIVnXIbCmlMq5puD2wDdHV15zq6/JOEpiSjW7qVU9jvT0+k9Cmqk9rqINodvicRVyD/DJa6WWGD25d1ENike+X+ous1DvH+noD1DvG+nnVXvq7vKCjelDPO9V/kk0WuqlP9UV9GkXTEPUkxMkNLJaQBNX+3tSH3dXng4S/2uEfur5nf/faIxT1uqI0VaFI1G8JGLXahGEemjTdHtzhoAf1r3pVX6dt8+jqLs/qQZpX9VHSw7upl9Airv4z9T6s/pndGTBQz8I8MEZRD9JVGOaJ+jpki2SdV4J/DRWyuuoIeqJ+MmTQ1WM6Q34J1OOKSbzqm+i2nZcZ8zTDj0MKwt54U2//WGz1Npq2Dk1MXrx44T7N23ZXT7LhjvoN3yoD9SzNA1co6tU6rN8+1LH6KnTuOaHS+IDLZUGFVcB8Kacknet6c3F315t6WNA9bcmfQT3/CbKfPn3uFvu1zFUvHT5ahHQdBHpVTxYDm8hNvYg0fAfKDH8WvLqoJ6ffddQHfQlyPsxAPRPz9C0dsnqvt7F6HPuKkKxAWm/ieC8pQK5qX2Vv5KZC3tQbU7L8eX4Kq+e3IC9PzfPuGKFjntSjwLqoYcdO9cuiKEbQEqRxh3rIRP1wxYqb+jiCIk09eH08S3bziHr79Gp+NkHW9e98idWH+Y2X0wzUMzIPG7lUikXVzKlVnTzBU80y5Nze1AD1hQe8NyYmanZ+weC7MR4a9TTNE8G+luZ+VC8hi5hTfTzQucDvpp6LIJGmHnj+zNzNc477G3A2sQbqMasJKIF/BuqZmAcOCIywg34cP7jL3OSZ8qCQOuptmheTpDjXC90voEzyaISDa5zNWjAY/nsPbWnmyU4uW/nWFH+cZ8qrwvERDF09Q/BerpN/51UNME/jIEvzgqke9/g1niWhzOhfVh+X1qM/LOr/HfWeOHCEddSTwT4zyTboQ0d3/V31krXDZ/OfqWcb9vZj2xDTsM9kznl6D9//ll3U+/2bnJP/TT2EPUu+vaGlZ57wrDBgkjf8BAMY3LD/7v/TUEOFuzwj7hUzB4ff3PWDMyzdC1g9cb/wipF5vTD88MqFQfvcEv5az+z1wi2eAU9ShVNHhx9Z94dR9j0+uJ8IFVi4fxIqhM4Pv6//yt7d9aQNxXEcL5lPkYACM+rGxbaLZWkVCQuIiQjMsZEQtAhzddZNz7oYZ9KYgVMMl0vmhffbre90fw92rfGxiqztfh/aI22JN9+0hpqcWjnyz/2WGZ9/uVfrd77aM6b4BR/SG5zanrJbv91nWeuOM6p80Jjs92FWjXv07GHH59UgcyVZk4/ucMqXVBYd8mEunXsVGOng3dyJ0/TJuZLCWqwq3cr+VkuTx+ku3lX6kN5BF33rDLk8vsq2jmxe93/sfy7pqhz19/iEK4XdPFFqRHCIwNPO/vOW1iTFL2VlprZ0tUTz7NBC68mLe0nMffwHP5Zkuq6+Y1H/oA/TI3dHYKgDt3d4Q8uJzy/7CmOaqmkqadFystKg0Urv6EXao8YHjTHlxfXhefvIpDv1hR1Uvl1/9MlIJ674xtzYyfZlv0T5s1lFkWlVZL4oWRqz7b2ywkfaJ8tydPz56FAvHojgDT7S00PLjdCHEd47Tmqaz73hBMHYYxymFQ9A8Rozp9GaXuZ+nzHimWfeh7MbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgswbCLp5X46/IgNB9g8OhmOOFxrw4oco/nlwlEIw1pxyvGQsGhAtF3DuN0tkplcJCtwWPdyUX2D0ODnpu3jyryT6hy8ZirihP7WPD3k4/KXRZqCm5RDOE9B0Vm5JcYiqG9EiP9EiP9EjvfkiP9JdBeqRHeqRHetETkB7pL4P0V6dPxUlaPC9/6ZPol+JEvF4ukciJhszXSmONb1YSJCOaR4oN8bx5+ohFhn7XvaZ/3N/7v6WfSaXyNtMvpFIFm+lXGglum97vlcs/z6RPVByQ/tHbB723Sr+8WavpdYlsTtBQz9Ylk65LNnQ5PUnZTE+WbKavJIqZ3PZhMWNsWrrmynsOSC/0U3v76Zd3prkdCj5dox01Gk0f16Wb8Wz6tUSx/W7FTG/lhPS8vd30y+vTq1VJqta+rZ6m13d0V6afWZjN599vGOnTn/KztMGl6Uj6ovS/Dg60a9JTx0PRZE2fKxPzrN+rzM83cmb6lXI51630vL3N9KuUm6tWeXrOjelfx+OFpUI8vtBOPxunjcJ3kWx84UdevTmf/vfi4p92zqS3aSAKwAjEKoRYLggOHODkCBgs4cRSosRO7KQVGEKihKTKdogQqVJKWlqJQw8gWkpV9kUIxCqxiv/Imxm7DsSoTjIpSfs+qfbYnvHl85t547jzYB31BSh4qwelQNppkJLlFPzFHPWFJfmlgKgX4d5bfctVa6vPZXh3cCOa4+r5c7Ee/119XqVbg5hMPT1tcd11kjdpxXA36gulUsH2tiB1qPdI81LyLDSIpR318Cg02u41aPXcfTfqo8HxP9SzU1HYjrdg/H87w9U/DE77NPbfx3p+rHHPLP1/RzSJH5j+1bvMyyk/6ktuNaYezH/d2Hk9d+9f/XhwylN9lmYA0XIG1Ps0PwTqa6qq5onCNDclwCJ5ScqTvEoJk1CH+uLq6qt11Jf8qb/rZgQsPaDmB6j+5HYPkskd/tWD4qin+mrZHevhMfDh6r+rtwzC4OpVCXhHKrTsoHhm+GKiHgK9XT3QGKT6U/2rv+Yd9Xwc4OrpZE844tWHiK48VlWFKO7kTiUaLVsqJ9GL+kl5wZ/6WLv6lfmFhckN7vD3J3fs7X+sn4I/TjkYLAfEI159ndu2/ox6GPIr0Pnb9KK+sCDHfHX483/O6xtyqrCh6rl5/+pzrbK3+oejFvVEZ7uKrd6SgDzdKUT5W73pFFeXl9+v/37m5V/q5z3UP+G1XPVQb1aAeiHmvSd3WSfsZ3KgfsJWnwtOt431orI88ep5n84wSA22c85YX4etqZMEbA0DrgC/JE6FqH4zfG6Xd90xO/gboLRTfUxeiLF9wVFfgExPgHpB5r3f5mVnYJdtQWy3yk6ad4c9EeM5UA+7Ic7wQa8WDqs0uPVQUzHqtnpDa4ZgQs/HAD3fDCmavva0GJVw2Ld6CGg5XWpQnc4IcDfNpu/wLi8tL8F2ktVKpedLsyv2vJ4/MzEB6sWYd9W7ZOAdfqsKI3qGOq4u5pj6XDm4WG61oqCeJYNvcwJ0ilcPJDT7h9swAZSQM9brcBQ2eQaoE8CgF/hxHQ79qgdgpgbEHY+xuP3DrexQaqtlRz1/ZpYEqBdh3ls9yB+fmBi/wRP+iQn4IS9Di1PZiXHwHZ1iVa5FxRgVr94loaqm5KKqNclhjh70wWQkUhBQa4A/2u7dYr/Xjy6iP9XYu9U+1Rhd8AMtVP8vUD2qR/WoHtVLmwJUj+r/BapH9age1aN6aVOA6lH9v0D1qJ6Ci6cBu1B9jxwcnSUTvZfJPbxZFko9sm2D2TciC6Xe/HgAl0duA5dHpu6PnB59dh0G8xvP0VFYFP3gvm0IgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIsoXZc3iTrKvhgyN7xC6pcvDEmaHnECyks7kXVPG77AouqLLGkc2xjJLfxZYOC1R/4NVoLKP06sC+Tb1unj9O7xK4kM6Zm4GR4NaZg6geVtfbkksmnkD1oB4XSkX1qB7Vo/otAapH9age1aP6LQKqR/XC1X/4/HTsD57+CAwLqH6Q6j89G3t+4Q+ejz37FBgOUP0g1T/78uLcX7z48uxDYCjwpZ7okg/CJCSJJUTC0jqk5IuSL0pOxYgs96r++O6dXan/MQbmO9yPfQ4MBai+C/XHkjt2dqP+6fNzHjx/6tbIRRk3vOXMRHNiLBdfo/p+1AO7wX0X6scueKm/MObWiAY5VU/52WBGjPrLb1B9f+q5e7HqpzLAVLU1M0j1r/uIelOpaCGTHahWWNPyNclGpUdqm3pLSTBtFS1cewxlimLRehV2nd4q3JQocwprqCpztIFi0jr2jWmx6ag/e/v27bPrqi9dLMRm4/FSgQlOx+ONGBR4OT0pRD13L1R9lO0zwYmBqC9eZrs3sLt8szf1dXLFIDp1nyDEgDKxJIqpEXLlCiEJR70ZJooE5Am00DWi2jcIEYBWqxnQnpA8j2pWV2HPjEbyhN5Y5VdouW6rL166dKm4rvq4HFmRgRKU07KcWpFTzP0TVk4LUc/di1YPVN/ysZ+55iUR6i99o9sbyWIg8O1BT+qJngC1TESChXjCICaP9IpJzznqzTq3GbJbOOoNPW9KCdoH6LRCQiehTvV1lT4yFSjXWEOFrK9+vjTpql+5G5MK9yOSNCvHIfYb8hKcjskrEerfUV8olfpQz92LV9+i6qPlYJCH/wyUWtm+1b//VqS725dgU3zzvhf1zI1pGLzLd3WpRDfbx3puHtDsFo56OM15RzSJNdQ61PMmxICtxZ1r66pvJw6mAWY7VZBY7EfopkHLS6BexLyeuxetPht8SA8mMoFodQLMV6vRTHSx2qf6e0meQTxY5rF/uxf13Kctsqaqap5ZU+jWVW+Bec8WtKvn8HZgmJgd6h9JwBXitrOcsX51dVXyoX5+LaW7G6G8lGepc9YvzPak/uR2D5LJHeLUl6eBcjBLO/1FfioXuMOc51r9qT9vu76ZPM/2t5M3es3weR5nGYTCrFVIs109kGfFhNPCUW+0TwO44USH+sSa+jp55GT4/okzx1yzQ5pmA6wHaPSk/tTA1S+Wy+VgawrK1yHyKbArL7LSnX7Uu2F+PnnTVn++L/UwiiuPVVXxVG/pRPVUr3enHq72oj5ml9JyOsKBMwsy7wmEdfj7kzv2iu3wM60yK3NAfbUsIsN3wnyZJ3gzyXs9dPgQtI7oOrdiEcUR6Vq16OBfg6LptPineqOtw8+LiXpX/cV2zSl++qIY9dy86DRvPDhFo/5ahpFjXT/Qf5r3pkjTfBb8xe+9pXlghQtxLFaYNYvl465VqlFjArlzvUO9xYeEGjHcNE/rUM9uBTtnrF9eXi52oT4ix93Td+V5thOjnpsXnuFXqzC0w4Bv87aVY7u+J3cPvoNzHvvfL/U0uWO+mkygQWhYzxGitKXwNXPNV51YrA+vMM8d6hPEqLHr4bU8v0Y61NsX9C4z/Jgb6RH+DLApXpwl/ULUc/PC1cN+HIb2FnWU47k+lB4G+1Z/87L9Fhd2xZ7UGyTctAxmSCF6qKkYdi5vEbgSUgx7Xs9n/HPwTOikruRJvUM9dAu61QwT1sKE+4YsXe9QDwfwLk83elUfgQRvfr7BzhRSUG6kFkSo5+aFqwfKEOe5RZrvt6o52tVXp8vVaVAv/C2uf/XuyzjDchN5hfXVQEgngOZEPWCxuX4iTBt0pHnMPVB/xMpzOq2ldKpPVOhdld7UA5NLMrCSLtCAT0Ex3hCgnpsXqX4ma8u9kaURPzUxPX0NzLNSNnc1C+W+eXO5D/WAqaqm02e7RaaPHnpRc9K8zlvVOm7bwZw6J/VDjKX3nMnIpJBPNY6BeSE/2m4or4vdqheBTqRRwP+nGmC+C/WfvT/V+BkYCgalPhyqSbU8pIejwKA+0Prg/YFWYDgYlPorhFKRRgL8LFOkevOxpViqNBoIV+/y8++PsT8PyUeZ+EUu/gsGqkf1qB7VS1sIVI/qUT2qR/VbBFSP6gVwYnQWTzu0zYtdqL5HDp4ZicUy4af8M97L5B7eWgulHhG4OPKBVyOxXCYslIrLI+PyyH+5P3J6q7DrMJgXydFDZ4aeEwf3bfPkN1yBOqAk6i9ZAAAAAElFTkSuQmCC';
      }),
      xn,
      Qg = v(() => {
        xn = 'STORYBOOK_ADDON_ONBOARDING_CHANNEL';
      }),
      Jg,
      UO = v(() => {
        Ds(),
          sh(),
          S1(),
          hd(),
          kO(),
          MO(),
          NO(),
          LO(),
          jO(),
          FO(),
          VO(),
          zO(),
          BO(),
          Qg(),
          (Jg = ({
            onFinish: t,
            api: e,
            addonsStore: n,
            skipOnboarding: r,
            codeSnippets: o,
          }) => {
            let [i, a] = at('imports'),
              s = Mi(),
              l = { imports: 0, meta: 1, story: 2, args: 3, customStory: 4 },
              [u, c] = at(!1),
              [f, p] = E1(),
              d = IO(),
              h = qg(i === 'customStory', e, n),
              m = Gg('syntax-highlighter-backdrop', i === 'customStory'),
              y = o?.language === 'javascript',
              E = () => {
                let b = o.code[3][0].snippet;
                navigator.clipboard.writeText(
                  b.replace('// Copy the code below', '')
                ),
                  c(!0);
              },
              x = xt(() => {
                e.emit(xn, {
                  step: 'X:SkippedOnboarding',
                  where: `HowToWriteAStoryModal:${i}`,
                  type: 'telemetry',
                });
              }, [e, i]);
            return g.createElement(
              ah,
              { width: 740, height: 430, defaultOpen: !0 },
              ({ Title: b, Description: w, Close: O }) =>
                g.createElement(
                  od,
                  null,
                  o
                    ? g.createElement(zg, {
                        activeStep: l[i] || 0,
                        data: o.code,
                        width: 480,
                        filename: o.filename,
                      })
                    : null,
                  i === 'customStory' &&
                    m &&
                    !h?.data &&
                    g.createElement(
                      Bt,
                      {
                        ref: f,
                        onClick: () => E(),
                        style: {
                          position: 'absolute',
                          opacity: p.width ? 1 : 0,
                          top: m.top + m.height - 45,
                          left: m.left + m.width - (p.width ?? 0) - 10,
                          zIndex: 1e3,
                        },
                      },
                      u ? 'Copied to clipboard' : 'Copy code'
                    ),
                  g.createElement(
                    id,
                    null,
                    g.createElement(
                      ad,
                      null,
                      g.createElement(
                        b,
                        { asChild: !0 },
                        g.createElement(
                          sd,
                          null,
                          g.createElement(Xn, {
                            icon: 'bookmarkhollow',
                            width: 13,
                          }),
                          g.createElement('span', null, 'How to write a story')
                        )
                      ),
                      g.createElement(
                        O,
                        { onClick: x, asChild: !0 },
                        g.createElement(Xn, {
                          style: { cursor: 'pointer' },
                          icon: 'cross',
                          width: 13,
                          onClick: r,
                          color: s.color.darkest,
                        })
                      )
                    ),
                    g.createElement(
                      w,
                      { asChild: !0 },
                      g.createElement(
                        ld,
                        null,
                        i === 'imports' &&
                          g.createElement(
                            g.Fragment,
                            null,
                            g.createElement(
                              'div',
                              null,
                              g.createElement('h3', null, 'Imports'),
                              y
                                ? g.createElement(
                                    'p',
                                    null,
                                    'Import a component. In this case, the Button component.'
                                  )
                                : g.createElement(
                                    g.Fragment,
                                    null,
                                    g.createElement(
                                      'p',
                                      null,
                                      'First, import ',
                                      g.createElement(br, null, 'Meta'),
                                      ' and',
                                      ' ',
                                      g.createElement(br, null, 'StoryObj'),
                                      ' for type safety and autocompletion in TypeScript stories.'
                                    ),
                                    g.createElement(
                                      'p',
                                      null,
                                      'Next, import a component. In this case, the Button component.'
                                    )
                                  )
                            ),
                            g.createElement(
                              Bt,
                              {
                                style: { marginTop: 4 },
                                onClick: () => {
                                  a('meta');
                                },
                              },
                              'Next'
                            )
                          ),
                        i === 'meta' &&
                          g.createElement(
                            g.Fragment,
                            null,
                            g.createElement(
                              'div',
                              null,
                              g.createElement('h3', null, 'Meta'),
                              g.createElement(
                                'p',
                                null,
                                "The default export, Meta, contains metadata about this component's stories. The title field (optional) controls where stories appear in the sidebar."
                              ),
                              g.createElement(fo, {
                                width: '204',
                                alt: "Title property pointing to Storybook's sidebar",
                                src: Xg,
                              })
                            ),
                            g.createElement(
                              cr,
                              null,
                              g.createElement(
                                Bt,
                                {
                                  variant: 'secondary',
                                  onClick: () => a('imports'),
                                },
                                'Previous'
                              ),
                              g.createElement(
                                Bt,
                                { onClick: () => a('story') },
                                'Next'
                              )
                            )
                          ),
                        i === 'story' &&
                          g.createElement(
                            g.Fragment,
                            null,
                            g.createElement(
                              'div',
                              null,
                              g.createElement('h3', null, 'Story'),
                              g.createElement(
                                'p',
                                null,
                                'Each named export is a story. Its contents specify how the story is rendered in addition to other configuration options.'
                              ),
                              g.createElement(fo, {
                                width: '190',
                                alt: 'Story export pointing to the sidebar entry of the story',
                                src: _g,
                              })
                            ),
                            g.createElement(
                              cr,
                              null,
                              g.createElement(
                                Bt,
                                {
                                  variant: 'secondary',
                                  onClick: () => a('meta'),
                                },
                                'Previous'
                              ),
                              g.createElement(
                                Bt,
                                { onClick: () => a('args') },
                                'Next'
                              )
                            )
                          ),
                        i === 'args' &&
                          g.createElement(
                            g.Fragment,
                            null,
                            g.createElement(
                              'div',
                              null,
                              g.createElement('h3', null, 'Args'),
                              g.createElement(
                                'p',
                                null,
                                'Args are inputs that are passed to the component, which Storybook uses to render the component in different states. In React, args = props. They also specify the initial control values for the story.'
                              ),
                              g.createElement(fo, {
                                alt: 'Args mapped to their controls in Storybook',
                                width: '253',
                                src: Kg,
                              })
                            ),
                            g.createElement(
                              cr,
                              null,
                              g.createElement(
                                Bt,
                                {
                                  variant: 'secondary',
                                  onClick: () => a('story'),
                                },
                                'Previous'
                              ),
                              g.createElement(
                                Bt,
                                { onClick: () => a('customStory') },
                                'Next'
                              )
                            )
                          ),
                        i === 'customStory' &&
                          (h?.error
                            ? null
                            : g.createElement(
                                g.Fragment,
                                null,
                                g.createElement(
                                  'div',
                                  null,
                                  g.createElement(
                                    'h3',
                                    null,
                                    'Create your first story'
                                  ),
                                  g.createElement(
                                    'p',
                                    null,
                                    "Now it's your turn. See how easy it is to create your first story by following these steps below."
                                  ),
                                  g.createElement(
                                    Ug,
                                    null,
                                    g.createElement(
                                      To,
                                      { isCompleted: u || h?.data, index: 1 },
                                      'Copy the Warning story.'
                                    ),
                                    g.createElement(
                                      To,
                                      { isCompleted: h?.data, index: 2 },
                                      g.createElement(
                                        dd,
                                        null,
                                        'Open the Button story in your current working directory.'
                                      ),
                                      d?.data &&
                                        g.createElement(
                                          br,
                                          null,
                                          d.data
                                            .replaceAll('/', '/\u200B')
                                            .replaceAll('\\', '\\\u200B')
                                        )
                                    ),
                                    g.createElement(
                                      To,
                                      { isCompleted: h?.data, index: 3 },
                                      'Paste it at the bottom of the file and save.'
                                    )
                                  )
                                ),
                                g.createElement(
                                  cr,
                                  null,
                                  g.createElement(
                                    Bt,
                                    {
                                      variant: 'secondary',
                                      onClick: () => a('args'),
                                    },
                                    'Previous'
                                  ),
                                  h?.data
                                    ? g.createElement(
                                        Bt,
                                        { onClick: () => t() },
                                        'Go to story'
                                      )
                                    : null
                                )
                              ))
                      )
                    ),
                    g.createElement(
                      ud,
                      null,
                      g.createElement(cd, null),
                      g.createElement(pd, null),
                      g.createElement(fd, null)
                    )
                  )
                )
            );
          });
      }),
      hf,
      Zg,
      HO = v(() => {
        (hf = {
          filename: 'Button.stories.js',
          language: 'typescript',
          code: [
            [{ snippet: "import { Button } from './Button';" }],
            [
              {
                snippet: `export default {
      title: 'Example/Button',
      component: Button,
      // ...
    };`,
              },
            ],
            [
              { snippet: 'export const Primary = {' },
              {
                snippet: `args: {
        primary: true,
        label: 'Click',
        background: 'red'
      }`,
                toggle: !0,
              },
              { snippet: '};' },
            ],
            [
              {
                snippet: `// Copy the code below
export const Warning = {
  args: {
    primary: true,
    label: 'Delete now',
    backgroundColor: 'red',
  }
};`,
              },
            ],
          ],
        }),
          (Zg = hf);
      }),
      mf,
      $g,
      WO = v(() => {
        (mf = {
          filename: 'Button.stories.ts',
          language: 'typescript',
          code: [
            [
              {
                snippet: `import type { Meta, StoryObj } from '@storybook/react';
      
      import { Button } from './Button';`,
              },
            ],
            [
              {
                snippet: `const meta: Meta<typeof Button> = {
        title: 'Example/Button',
        component: Button,
        // ...
      };
          
      export default meta;`,
              },
            ],
            [
              {
                snippet: `type Story = StoryObj<Button>;
        
      export const Primary: Story = {`,
              },
              {
                snippet: `args: {
          primary: true,
          label: 'Click',
          background: 'red'
        }`,
                toggle: !0,
              },
              { snippet: '};' },
            ],
            [
              {
                snippet: `// Copy the code below
  export const Warning: Story = {
    args: {
      primary: true,
      label: 'Delete now',
      backgroundColor: 'red',
    }
  };`,
              },
            ],
          ],
        }),
          ($g = mf);
      });
    function YO() {
      let [t, e] = at({ data: null, error: null });
      return (
        W(() => {
          (async () => {
            try {
              let n =
                (await (await fetch('/project.json')).json())?.language ===
                'javascript'
                  ? Zg
                  : $g;
              e({ data: n, error: null });
            } catch (n) {
              e({ data: null, error: n });
            }
          })();
        }, []),
        t
      );
    }
    var qO = v(() => {
        HO(), WO();
      }),
      ty = {};
    gf(ty, { default: () => GO });
    function GO({ api: t }) {
      let [e, n] = at(!0),
        [r, o] = at(!1),
        [i, a] = at('1:Welcome'),
        { data: s } = YO(),
        l = xt(() => {
          let u = new URL(window.location.href),
            c = decodeURIComponent(u.searchParams.get('path'));
          (u.search = `?path=${c}&onboarding=false`),
            history.replaceState({}, '', u.href),
            t.setQueryParams({ onboarding: 'false' }),
            n(!1);
        }, [n, t]);
      return (
        W(() => {
          t.emit(xn, { step: '1:Welcome', type: 'telemetry' });
        }, []),
        W(() => {
          i !== '1:Welcome' && t.emit(xn, { step: i, type: 'telemetry' });
        }, [t, i]),
        W(() => {
          let u;
          return (
            i === '4:VisitNewStory' &&
              (o(!0),
              (u = window.setTimeout(() => {
                a('5:ConfigureYourProject');
              }, 2e3))),
            () => {
              clearTimeout(u);
            }
          );
        }, [i]),
        W(() => {
          let u = t.getCurrentStoryData()?.id;
          t.setQueryParams({ onboarding: 'true' }),
            u !== 'example-button--primary' &&
              t.selectStory('example-button--primary', void 0, { ref: void 0 });
        }, []),
        e
          ? g.createElement(
              Ri,
              { theme: ey },
              e &&
                r &&
                g.createElement(td, {
                  numberOfPieces: 800,
                  recycle: !1,
                  tweenDuration: 2e4,
                  onConfettiComplete: (u) => {
                    u.reset(), o(!1);
                  },
                }),
              e &&
                i === '1:Welcome' &&
                g.createElement(yh, {
                  onProceed: () => {
                    a('2:StorybookTour');
                  },
                  skipOnboarding: () => {
                    l(),
                      t.emit(xn, {
                        step: 'X:SkippedOnboarding',
                        where: 'WelcomeModal',
                        type: 'telemetry',
                      });
                  },
                }),
              e &&
                (i === '2:StorybookTour' || i === '5:ConfigureYourProject') &&
                g.createElement(sb, {
                  api: t,
                  isFinalStep: i === '5:ConfigureYourProject',
                  onFirstTourDone: () => {
                    a('3:WriteYourStory');
                  },
                  codeSnippets: s,
                  onLastTourDone: () => {
                    t.selectStory('configure-your-project--docs'),
                      t.emit(xn, {
                        step: '6:FinishedOnboarding',
                        type: 'telemetry',
                      }),
                      l();
                  },
                }),
              e &&
                i === '3:WriteYourStory' &&
                g.createElement(Jg, {
                  api: t,
                  codeSnippets: s,
                  addonsStore: Ni,
                  onFinish: () => {
                    t.selectStory('example-button--warning'),
                      a('4:VisitNewStory');
                  },
                  skipOnboarding: l,
                })
            )
          : null
      );
    }
    var ey,
      XO = v(() => {
        lb(), b1(), UO(), nd(), Qg(), qO(), (ey = Zl());
      }),
      _O = Pi(() => Promise.resolve().then(() => (XO(), ty)));
    Ni.register('@storybook/addon-onboarding', async (t) => {
      let e = t.getUrlState(),
        n = e.path === '/onboarding' || e.queryParams.onboarding === 'true';
      t.once(ru, () => {
        if (
          !(
            t.getData('example-button--primary') ||
            document.getElementById('example-button--primary')
          )
        ) {
          console.warn(
            '[@storybook/addon-onboarding] It seems like you have finished the onboarding experience in Storybook! Therefore this addon is not necessary anymore and will not be loaded. You are free to remove it from your project. More info: https://github.com/storybookjs/addon-onboarding#uninstalling'
          );
          return;
        }
        if (!n || window.innerWidth < 730) return;
        t.togglePanel(!0),
          t.togglePanelPosition('bottom'),
          t.setSelectedPanel('addon-controls');
        let r = document.createElement('div');
        (r.id = 'storybook-addon-onboarding'),
          document.body.appendChild(r),
          oe.render(
            g.createElement(
              Oi,
              { fallback: g.createElement('div', null, 'Loading...') },
              g.createElement(_O, { api: t })
            ),
            r
          );
      });
    });
  })();
} catch (e) {
  console.error(
    '[Storybook] One of your manager-entries failed: ' + import.meta.url,
    e
  );
}
