try {
  (() => {
    var Vy = Object.create;
    var fa = Object.defineProperty;
    var Ky = Object.getOwnPropertyDescriptor;
    var Yy = Object.getOwnPropertyNames;
    var Jy = Object.getPrototypeOf,
      Xy = Object.prototype.hasOwnProperty;
    var ir = ((e) =>
      typeof require < 'u'
        ? require
        : typeof Proxy < 'u'
          ? new Proxy(e, {
              get: (t, r) => (typeof require < 'u' ? require : t)[r],
            })
          : e)(function (e) {
      if (typeof require < 'u') return require.apply(this, arguments);
      throw Error('Dynamic require of "' + e + '" is not supported');
    });
    var Ke = (e, t) => () => (e && (t = e((e = 0))), t);
    var S = (e, t) => () => (
        t || e((t = { exports: {} }).exports, t), t.exports
      ),
      eu = (e, t) => {
        for (var r in t) fa(e, r, { get: t[r], enumerable: !0 });
      },
      Qy = (e, t, r, n) => {
        if ((t && typeof t == 'object') || typeof t == 'function')
          for (let a of Yy(t))
            !Xy.call(e, a) &&
              a !== r &&
              fa(e, a, {
                get: () => t[a],
                enumerable: !(n = Ky(t, a)) || n.enumerable,
              });
        return e;
      };
    var pe = (e, t, r) => (
      (r = e != null ? Vy(Jy(e)) : {}),
      Qy(
        t || !e || !e.__esModule
          ? fa(r, 'default', { value: e, enumerable: !0 })
          : r,
        e
      )
    );
    var l = Ke(() => {});
    var c = Ke(() => {});
    var d = Ke(() => {});
    var g,
      tu,
      Ze,
      ru,
      cI,
      dI,
      pI,
      nu,
      fI,
      fe,
      ur,
      ha,
      hI,
      mI,
      gI,
      yI,
      au,
      bI,
      me,
      Kr,
      EI,
      he,
      AI,
      ou,
      et,
      vI,
      we,
      te,
      DI,
      Ft = Ke(() => {
        l();
        c();
        d();
        (g = __REACT__),
          ({
            Children: tu,
            Component: Ze,
            Fragment: ru,
            Profiler: cI,
            PureComponent: dI,
            StrictMode: pI,
            Suspense: nu,
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: fI,
            cloneElement: fe,
            createContext: ur,
            createElement: ha,
            createFactory: hI,
            createRef: mI,
            forwardRef: gI,
            isValidElement: yI,
            lazy: au,
            memo: bI,
            useCallback: me,
            useContext: Kr,
            useDebugValue: EI,
            useEffect: he,
            useImperativeHandle: AI,
            useLayoutEffect: ou,
            useMemo: et,
            useReducer: vI,
            useRef: we,
            useState: te,
            version: DI,
          } = __REACT__);
      });
    var gu = {};
    eu(gu, {
      A: () => t2,
      ActionBar: () => ya,
      AddonPanel: () => ba,
      Badge: () => Ea,
      Bar: () => r2,
      Blockquote: () => n2,
      Button: () => a2,
      ClipboardCode: () => o2,
      Code: () => du,
      DL: () => i2,
      Div: () => u2,
      DocumentWrapper: () => s2,
      ErrorFormatter: () => pu,
      FlexBar: () => Aa,
      Form: () => Te,
      H1: () => l2,
      H2: () => va,
      H3: () => fu,
      H4: () => c2,
      H5: () => d2,
      H6: () => p2,
      HR: () => f2,
      IconButton: () => ft,
      IconButtonSkeleton: () => Da,
      Icons: () => Be,
      Img: () => h2,
      LI: () => m2,
      Link: () => ht,
      ListItem: () => g2,
      Loader: () => hu,
      OL: () => y2,
      P: () => b2,
      Placeholder: () => E2,
      Pre: () => A2,
      ResetWrapper: () => Ca,
      ScrollArea: () => v2,
      Separator: () => D2,
      Spaced: () => xa,
      Span: () => C2,
      StorybookIcon: () => x2,
      StorybookLogo: () => S2,
      Symbols: () => F2,
      SyntaxHighlighter: () => Yr,
      TT: () => w2,
      TabBar: () => B2,
      TabButton: () => T2,
      TabWrapper: () => _2,
      Table: () => O2,
      Tabs: () => R2,
      TabsState: () => Sa,
      TooltipLinkList: () => P2,
      TooltipMessage: () => I2,
      TooltipNote: () => Fa,
      UL: () => k2,
      WithTooltip: () => Jr,
      WithTooltipPure: () => wa,
      Zoom: () => Ba,
      codeCommon: () => wt,
      components: () => Ta,
      createCopyToClipboardFunction: () => N2,
      default: () => e2,
      getStoryHref: () => mu,
      icons: () => L2,
      interleaveSeparators: () => q2,
      nameSpaceClassNames: () => _a,
      resetComponents: () => j2,
      withReset: () => Bt,
    });
    var e2,
      t2,
      ya,
      ba,
      Ea,
      r2,
      n2,
      a2,
      o2,
      du,
      i2,
      u2,
      s2,
      pu,
      Aa,
      Te,
      l2,
      va,
      fu,
      c2,
      d2,
      p2,
      f2,
      ft,
      Da,
      Be,
      h2,
      m2,
      ht,
      g2,
      hu,
      y2,
      b2,
      E2,
      A2,
      Ca,
      v2,
      D2,
      xa,
      C2,
      x2,
      S2,
      F2,
      Yr,
      w2,
      B2,
      T2,
      _2,
      O2,
      R2,
      Sa,
      P2,
      I2,
      Fa,
      k2,
      Jr,
      wa,
      Ba,
      wt,
      Ta,
      N2,
      mu,
      L2,
      q2,
      _a,
      j2,
      Bt,
      sr = Ke(() => {
        l();
        c();
        d();
        (e2 = __STORYBOOK_COMPONENTS__),
          ({
            A: t2,
            ActionBar: ya,
            AddonPanel: ba,
            Badge: Ea,
            Bar: r2,
            Blockquote: n2,
            Button: a2,
            ClipboardCode: o2,
            Code: du,
            DL: i2,
            Div: u2,
            DocumentWrapper: s2,
            ErrorFormatter: pu,
            FlexBar: Aa,
            Form: Te,
            H1: l2,
            H2: va,
            H3: fu,
            H4: c2,
            H5: d2,
            H6: p2,
            HR: f2,
            IconButton: ft,
            IconButtonSkeleton: Da,
            Icons: Be,
            Img: h2,
            LI: m2,
            Link: ht,
            ListItem: g2,
            Loader: hu,
            OL: y2,
            P: b2,
            Placeholder: E2,
            Pre: A2,
            ResetWrapper: Ca,
            ScrollArea: v2,
            Separator: D2,
            Spaced: xa,
            Span: C2,
            StorybookIcon: x2,
            StorybookLogo: S2,
            Symbols: F2,
            SyntaxHighlighter: Yr,
            TT: w2,
            TabBar: B2,
            TabButton: T2,
            TabWrapper: _2,
            Table: O2,
            Tabs: R2,
            TabsState: Sa,
            TooltipLinkList: P2,
            TooltipMessage: I2,
            TooltipNote: Fa,
            UL: k2,
            WithTooltip: Jr,
            WithTooltipPure: wa,
            Zoom: Ba,
            codeCommon: wt,
            components: Ta,
            createCopyToClipboardFunction: N2,
            getStoryHref: mu,
            icons: L2,
            interleaveSeparators: q2,
            nameSpaceClassNames: _a,
            resetComponents: j2,
            withReset: Bt,
          } = __STORYBOOK_COMPONENTS__);
      });
    var _e,
      lr,
      Oa = Ke(() => {
        l();
        c();
        d();
        (_e = (e) => `control-${e.replace(/\s+/g, '-')}`),
          (lr = (e) => `set-${e.replace(/\s+/g, '-')}`);
      });
    var uk,
      sk,
      lk,
      ck,
      yu,
      dk,
      pk,
      bu,
      fk,
      hk,
      mk,
      gk,
      yk,
      bk,
      M2,
      Eu,
      Ek,
      Ak,
      vk,
      Dk,
      j,
      Ra,
      Ck,
      Au,
      xk,
      Pa = Ke(() => {
        l();
        c();
        d();
        (uk = __STORYBOOK_THEMING__),
          ({
            CacheProvider: sk,
            ClassNames: lk,
            Global: ck,
            ThemeProvider: yu,
            background: dk,
            color: pk,
            convert: bu,
            create: fk,
            createCache: hk,
            createGlobal: mk,
            createReset: gk,
            css: yk,
            darken: bk,
            ensure: M2,
            ignoreSsrWarning: Eu,
            isPropValid: Ek,
            jsx: Ak,
            keyframes: vk,
            lighten: Dk,
            styled: j,
            themes: Ra,
            typography: Ck,
            useTheme: Au,
            withTheme: xk,
          } = __STORYBOOK_THEMING__);
      });
    var za = S((W7, wu) => {
      l();
      c();
      d();
      function S1(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
          a[r] = t(e[r], r, e);
        return a;
      }
      wu.exports = S1;
    });
    var Tu = S((J7, Bu) => {
      l();
      c();
      d();
      function F1() {
        (this.__data__ = []), (this.size = 0);
      }
      Bu.exports = F1;
    });
    var Zr = S((eN, _u) => {
      l();
      c();
      d();
      function w1(e, t) {
        return e === t || (e !== e && t !== t);
      }
      _u.exports = w1;
    });
    var hr = S((aN, Ou) => {
      l();
      c();
      d();
      var B1 = Zr();
      function T1(e, t) {
        for (var r = e.length; r--; ) if (B1(e[r][0], t)) return r;
        return -1;
      }
      Ou.exports = T1;
    });
    var Pu = S((sN, Ru) => {
      l();
      c();
      d();
      var _1 = hr(),
        O1 = Array.prototype,
        R1 = O1.splice;
      function P1(e) {
        var t = this.__data__,
          r = _1(t, e);
        if (r < 0) return !1;
        var n = t.length - 1;
        return r == n ? t.pop() : R1.call(t, r, 1), --this.size, !0;
      }
      Ru.exports = P1;
    });
    var ku = S((pN, Iu) => {
      l();
      c();
      d();
      var I1 = hr();
      function k1(e) {
        var t = this.__data__,
          r = I1(t, e);
        return r < 0 ? void 0 : t[r][1];
      }
      Iu.exports = k1;
    });
    var Lu = S((gN, Nu) => {
      l();
      c();
      d();
      var N1 = hr();
      function L1(e) {
        return N1(this.__data__, e) > -1;
      }
      Nu.exports = L1;
    });
    var ju = S((AN, qu) => {
      l();
      c();
      d();
      var q1 = hr();
      function j1(e, t) {
        var r = this.__data__,
          n = q1(r, e);
        return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
      }
      qu.exports = j1;
    });
    var mr = S((xN, Mu) => {
      l();
      c();
      d();
      var M1 = Tu(),
        $1 = Pu(),
        U1 = ku(),
        z1 = Lu(),
        H1 = ju();
      function Ot(e) {
        var t = -1,
          r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      Ot.prototype.clear = M1;
      Ot.prototype.delete = $1;
      Ot.prototype.get = U1;
      Ot.prototype.has = z1;
      Ot.prototype.set = H1;
      Mu.exports = Ot;
    });
    var Uu = S((BN, $u) => {
      l();
      c();
      d();
      var G1 = mr();
      function W1() {
        (this.__data__ = new G1()), (this.size = 0);
      }
      $u.exports = W1;
    });
    var Hu = S((RN, zu) => {
      l();
      c();
      d();
      function V1(e) {
        var t = this.__data__,
          r = t.delete(e);
        return (this.size = t.size), r;
      }
      zu.exports = V1;
    });
    var Wu = S((NN, Gu) => {
      l();
      c();
      d();
      function K1(e) {
        return this.__data__.get(e);
      }
      Gu.exports = K1;
    });
    var Ku = S((MN, Vu) => {
      l();
      c();
      d();
      function Y1(e) {
        return this.__data__.has(e);
      }
      Vu.exports = Y1;
    });
    var Ha = S((HN, Yu) => {
      l();
      c();
      d();
      var J1 =
        typeof window == 'object' &&
        window &&
        window.Object === Object &&
        window;
      Yu.exports = J1;
    });
    var Le = S((KN, Ju) => {
      l();
      c();
      d();
      var X1 = Ha(),
        Q1 = typeof self == 'object' && self && self.Object === Object && self,
        Z1 = X1 || Q1 || Function('return this')();
      Ju.exports = Z1;
    });
    var gt = S((QN, Xu) => {
      l();
      c();
      d();
      var eb = Le(),
        tb = eb.Symbol;
      Xu.exports = tb;
    });
    var ts = S((rL, es) => {
      l();
      c();
      d();
      var Qu = gt(),
        Zu = Object.prototype,
        rb = Zu.hasOwnProperty,
        nb = Zu.toString,
        gr = Qu ? Qu.toStringTag : void 0;
      function ab(e) {
        var t = rb.call(e, gr),
          r = e[gr];
        try {
          e[gr] = void 0;
          var n = !0;
        } catch {}
        var a = nb.call(e);
        return n && (t ? (e[gr] = r) : delete e[gr]), a;
      }
      es.exports = ab;
    });
    var ns = S((iL, rs) => {
      l();
      c();
      d();
      var ob = Object.prototype,
        ib = ob.toString;
      function ub(e) {
        return ib.call(e);
      }
      rs.exports = ub;
    });
    var yt = S((cL, is) => {
      l();
      c();
      d();
      var as = gt(),
        sb = ts(),
        lb = ns(),
        cb = '[object Null]',
        db = '[object Undefined]',
        os = as ? as.toStringTag : void 0;
      function pb(e) {
        return e == null
          ? e === void 0
            ? db
            : cb
          : os && os in Object(e)
            ? sb(e)
            : lb(e);
      }
      is.exports = pb;
    });
    var $e = S((hL, us) => {
      l();
      c();
      d();
      function fb(e) {
        var t = typeof e;
        return e != null && (t == 'object' || t == 'function');
      }
      us.exports = fb;
    });
    var Ga = S((bL, ss) => {
      l();
      c();
      d();
      var hb = yt(),
        mb = $e(),
        gb = '[object AsyncFunction]',
        yb = '[object Function]',
        bb = '[object GeneratorFunction]',
        Eb = '[object Proxy]';
      function Ab(e) {
        if (!mb(e)) return !1;
        var t = hb(e);
        return t == yb || t == bb || t == gb || t == Eb;
      }
      ss.exports = Ab;
    });
    var cs = S((DL, ls) => {
      l();
      c();
      d();
      var vb = Le(),
        Db = vb['__core-js_shared__'];
      ls.exports = Db;
    });
    var fs = S((FL, ps) => {
      l();
      c();
      d();
      var Wa = cs(),
        ds = (function () {
          var e = /[^.]+$/.exec((Wa && Wa.keys && Wa.keys.IE_PROTO) || '');
          return e ? 'Symbol(src)_1.' + e : '';
        })();
      function Cb(e) {
        return !!ds && ds in e;
      }
      ps.exports = Cb;
    });
    var Va = S((_L, hs) => {
      l();
      c();
      d();
      var xb = Function.prototype,
        Sb = xb.toString;
      function Fb(e) {
        if (e != null) {
          try {
            return Sb.call(e);
          } catch {}
          try {
            return e + '';
          } catch {}
        }
        return '';
      }
      hs.exports = Fb;
    });
    var gs = S((IL, ms) => {
      l();
      c();
      d();
      var wb = Ga(),
        Bb = fs(),
        Tb = $e(),
        _b = Va(),
        Ob = /[\\^$.*+?()[\]{}|]/g,
        Rb = /^\[object .+?Constructor\]$/,
        Pb = Function.prototype,
        Ib = Object.prototype,
        kb = Pb.toString,
        Nb = Ib.hasOwnProperty,
        Lb = RegExp(
          '^' +
            kb
              .call(Nb)
              .replace(Ob, '\\$&')
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                '$1.*?'
              ) +
            '$'
        );
      function qb(e) {
        if (!Tb(e) || Bb(e)) return !1;
        var t = wb(e) ? Lb : Rb;
        return t.test(_b(e));
      }
      ms.exports = qb;
    });
    var bs = S((qL, ys) => {
      l();
      c();
      d();
      function jb(e, t) {
        return e?.[t];
      }
      ys.exports = jb;
    });
    var at = S((UL, Es) => {
      l();
      c();
      d();
      var Mb = gs(),
        $b = bs();
      function Ub(e, t) {
        var r = $b(e, t);
        return Mb(r) ? r : void 0;
      }
      Es.exports = Ub;
    });
    var en = S((WL, As) => {
      l();
      c();
      d();
      var zb = at(),
        Hb = Le(),
        Gb = zb(Hb, 'Map');
      As.exports = Gb;
    });
    var yr = S((JL, vs) => {
      l();
      c();
      d();
      var Wb = at(),
        Vb = Wb(Object, 'create');
      vs.exports = Vb;
    });
    var xs = S((eq, Cs) => {
      l();
      c();
      d();
      var Ds = yr();
      function Kb() {
        (this.__data__ = Ds ? Ds(null) : {}), (this.size = 0);
      }
      Cs.exports = Kb;
    });
    var Fs = S((aq, Ss) => {
      l();
      c();
      d();
      function Yb(e) {
        var t = this.has(e) && delete this.__data__[e];
        return (this.size -= t ? 1 : 0), t;
      }
      Ss.exports = Yb;
    });
    var Bs = S((sq, ws) => {
      l();
      c();
      d();
      var Jb = yr(),
        Xb = '__lodash_hash_undefined__',
        Qb = Object.prototype,
        Zb = Qb.hasOwnProperty;
      function eE(e) {
        var t = this.__data__;
        if (Jb) {
          var r = t[e];
          return r === Xb ? void 0 : r;
        }
        return Zb.call(t, e) ? t[e] : void 0;
      }
      ws.exports = eE;
    });
    var _s = S((pq, Ts) => {
      l();
      c();
      d();
      var tE = yr(),
        rE = Object.prototype,
        nE = rE.hasOwnProperty;
      function aE(e) {
        var t = this.__data__;
        return tE ? t[e] !== void 0 : nE.call(t, e);
      }
      Ts.exports = aE;
    });
    var Rs = S((gq, Os) => {
      l();
      c();
      d();
      var oE = yr(),
        iE = '__lodash_hash_undefined__';
      function uE(e, t) {
        var r = this.__data__;
        return (
          (this.size += this.has(e) ? 0 : 1),
          (r[e] = oE && t === void 0 ? iE : t),
          this
        );
      }
      Os.exports = uE;
    });
    var Is = S((Aq, Ps) => {
      l();
      c();
      d();
      var sE = xs(),
        lE = Fs(),
        cE = Bs(),
        dE = _s(),
        pE = Rs();
      function Rt(e) {
        var t = -1,
          r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      Rt.prototype.clear = sE;
      Rt.prototype.delete = lE;
      Rt.prototype.get = cE;
      Rt.prototype.has = dE;
      Rt.prototype.set = pE;
      Ps.exports = Rt;
    });
    var Ls = S((xq, Ns) => {
      l();
      c();
      d();
      var ks = Is(),
        fE = mr(),
        hE = en();
      function mE() {
        (this.size = 0),
          (this.__data__ = {
            hash: new ks(),
            map: new (hE || fE)(),
            string: new ks(),
          });
      }
      Ns.exports = mE;
    });
    var js = S((Bq, qs) => {
      l();
      c();
      d();
      function gE(e) {
        var t = typeof e;
        return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
          ? e !== '__proto__'
          : e === null;
      }
      qs.exports = gE;
    });
    var br = S((Rq, Ms) => {
      l();
      c();
      d();
      var yE = js();
      function bE(e, t) {
        var r = e.__data__;
        return yE(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map;
      }
      Ms.exports = bE;
    });
    var Us = S((Nq, $s) => {
      l();
      c();
      d();
      var EE = br();
      function AE(e) {
        var t = EE(this, e).delete(e);
        return (this.size -= t ? 1 : 0), t;
      }
      $s.exports = AE;
    });
    var Hs = S((Mq, zs) => {
      l();
      c();
      d();
      var vE = br();
      function DE(e) {
        return vE(this, e).get(e);
      }
      zs.exports = DE;
    });
    var Ws = S((Hq, Gs) => {
      l();
      c();
      d();
      var CE = br();
      function xE(e) {
        return CE(this, e).has(e);
      }
      Gs.exports = xE;
    });
    var Ks = S((Kq, Vs) => {
      l();
      c();
      d();
      var SE = br();
      function FE(e, t) {
        var r = SE(this, e),
          n = r.size;
        return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
      }
      Vs.exports = FE;
    });
    var tn = S((Qq, Ys) => {
      l();
      c();
      d();
      var wE = Ls(),
        BE = Us(),
        TE = Hs(),
        _E = Ws(),
        OE = Ks();
      function Pt(e) {
        var t = -1,
          r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      Pt.prototype.clear = wE;
      Pt.prototype.delete = BE;
      Pt.prototype.get = TE;
      Pt.prototype.has = _E;
      Pt.prototype.set = OE;
      Ys.exports = Pt;
    });
    var Xs = S((rj, Js) => {
      l();
      c();
      d();
      var RE = mr(),
        PE = en(),
        IE = tn(),
        kE = 200;
      function NE(e, t) {
        var r = this.__data__;
        if (r instanceof RE) {
          var n = r.__data__;
          if (!PE || n.length < kE - 1)
            return n.push([e, t]), (this.size = ++r.size), this;
          r = this.__data__ = new IE(n);
        }
        return r.set(e, t), (this.size = r.size), this;
      }
      Js.exports = NE;
    });
    var rn = S((ij, Qs) => {
      l();
      c();
      d();
      var LE = mr(),
        qE = Uu(),
        jE = Hu(),
        ME = Wu(),
        $E = Ku(),
        UE = Xs();
      function It(e) {
        var t = (this.__data__ = new LE(e));
        this.size = t.size;
      }
      It.prototype.clear = qE;
      It.prototype.delete = jE;
      It.prototype.get = ME;
      It.prototype.has = $E;
      It.prototype.set = UE;
      Qs.exports = It;
    });
    var el = S((cj, Zs) => {
      l();
      c();
      d();
      var zE = '__lodash_hash_undefined__';
      function HE(e) {
        return this.__data__.set(e, zE), this;
      }
      Zs.exports = HE;
    });
    var rl = S((hj, tl) => {
      l();
      c();
      d();
      function GE(e) {
        return this.__data__.has(e);
      }
      tl.exports = GE;
    });
    var Ka = S((bj, nl) => {
      l();
      c();
      d();
      var WE = tn(),
        VE = el(),
        KE = rl();
      function nn(e) {
        var t = -1,
          r = e == null ? 0 : e.length;
        for (this.__data__ = new WE(); ++t < r; ) this.add(e[t]);
      }
      nn.prototype.add = nn.prototype.push = VE;
      nn.prototype.has = KE;
      nl.exports = nn;
    });
    var ol = S((Dj, al) => {
      l();
      c();
      d();
      function YE(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
          if (t(e[r], r, e)) return !0;
        return !1;
      }
      al.exports = YE;
    });
    var Ya = S((Fj, il) => {
      l();
      c();
      d();
      function JE(e, t) {
        return e.has(t);
      }
      il.exports = JE;
    });
    var Ja = S((_j, ul) => {
      l();
      c();
      d();
      var XE = Ka(),
        QE = ol(),
        ZE = Ya(),
        eA = 1,
        tA = 2;
      function rA(e, t, r, n, a, o) {
        var i = r & eA,
          u = e.length,
          s = t.length;
        if (u != s && !(i && s > u)) return !1;
        var p = o.get(e),
          y = o.get(t);
        if (p && y) return p == t && y == e;
        var A = -1,
          m = !0,
          h = r & tA ? new XE() : void 0;
        for (o.set(e, t), o.set(t, e); ++A < u; ) {
          var E = e[A],
            b = t[A];
          if (n) var x = i ? n(b, E, A, t, e, o) : n(E, b, A, e, t, o);
          if (x !== void 0) {
            if (x) continue;
            m = !1;
            break;
          }
          if (h) {
            if (
              !QE(t, function (F, B) {
                if (!ZE(h, B) && (E === F || a(E, F, r, n, o)))
                  return h.push(B);
              })
            ) {
              m = !1;
              break;
            }
          } else if (!(E === b || a(E, b, r, n, o))) {
            m = !1;
            break;
          }
        }
        return o.delete(e), o.delete(t), m;
      }
      ul.exports = rA;
    });
    var Xa = S((Ij, sl) => {
      l();
      c();
      d();
      var nA = Le(),
        aA = nA.Uint8Array;
      sl.exports = aA;
    });
    var cl = S((qj, ll) => {
      l();
      c();
      d();
      function oA(e) {
        var t = -1,
          r = Array(e.size);
        return (
          e.forEach(function (n, a) {
            r[++t] = [a, n];
          }),
          r
        );
      }
      ll.exports = oA;
    });
    var an = S((Uj, dl) => {
      l();
      c();
      d();
      function iA(e) {
        var t = -1,
          r = Array(e.size);
        return (
          e.forEach(function (n) {
            r[++t] = n;
          }),
          r
        );
      }
      dl.exports = iA;
    });
    var gl = S((Wj, ml) => {
      l();
      c();
      d();
      var pl = gt(),
        fl = Xa(),
        uA = Zr(),
        sA = Ja(),
        lA = cl(),
        cA = an(),
        dA = 1,
        pA = 2,
        fA = '[object Boolean]',
        hA = '[object Date]',
        mA = '[object Error]',
        gA = '[object Map]',
        yA = '[object Number]',
        bA = '[object RegExp]',
        EA = '[object Set]',
        AA = '[object String]',
        vA = '[object Symbol]',
        DA = '[object ArrayBuffer]',
        CA = '[object DataView]',
        hl = pl ? pl.prototype : void 0,
        Qa = hl ? hl.valueOf : void 0;
      function xA(e, t, r, n, a, o, i) {
        switch (r) {
          case CA:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
            (e = e.buffer), (t = t.buffer);
          case DA:
            return !(e.byteLength != t.byteLength || !o(new fl(e), new fl(t)));
          case fA:
          case hA:
          case yA:
            return uA(+e, +t);
          case mA:
            return e.name == t.name && e.message == t.message;
          case bA:
          case AA:
            return e == t + '';
          case gA:
            var u = lA;
          case EA:
            var s = n & dA;
            if ((u || (u = cA), e.size != t.size && !s)) return !1;
            var p = i.get(e);
            if (p) return p == t;
            (n |= pA), i.set(e, t);
            var y = sA(u(e), u(t), n, a, o, i);
            return i.delete(e), y;
          case vA:
            if (Qa) return Qa.call(e) == Qa.call(t);
        }
        return !1;
      }
      ml.exports = xA;
    });
    var on = S((Jj, yl) => {
      l();
      c();
      d();
      function SA(e, t) {
        for (var r = -1, n = t.length, a = e.length; ++r < n; ) e[a + r] = t[r];
        return e;
      }
      yl.exports = SA;
    });
    var Ue = S((eM, bl) => {
      l();
      c();
      d();
      var FA = Array.isArray;
      bl.exports = FA;
    });
    var Za = S((aM, El) => {
      l();
      c();
      d();
      var wA = on(),
        BA = Ue();
      function TA(e, t, r) {
        var n = t(e);
        return BA(e) ? n : wA(n, r(e));
      }
      El.exports = TA;
    });
    var vl = S((sM, Al) => {
      l();
      c();
      d();
      function _A(e, t) {
        for (
          var r = -1, n = e == null ? 0 : e.length, a = 0, o = [];
          ++r < n;

        ) {
          var i = e[r];
          t(i, r, e) && (o[a++] = i);
        }
        return o;
      }
      Al.exports = _A;
    });
    var eo = S((pM, Dl) => {
      l();
      c();
      d();
      function OA() {
        return [];
      }
      Dl.exports = OA;
    });
    var un = S((gM, xl) => {
      l();
      c();
      d();
      var RA = vl(),
        PA = eo(),
        IA = Object.prototype,
        kA = IA.propertyIsEnumerable,
        Cl = Object.getOwnPropertySymbols,
        NA = Cl
          ? function (e) {
              return e == null
                ? []
                : ((e = Object(e)),
                  RA(Cl(e), function (t) {
                    return kA.call(e, t);
                  }));
            }
          : PA;
      xl.exports = NA;
    });
    var Fl = S((AM, Sl) => {
      l();
      c();
      d();
      function LA(e, t) {
        for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
        return n;
      }
      Sl.exports = LA;
    });
    var Je = S((xM, wl) => {
      l();
      c();
      d();
      function qA(e) {
        return e != null && typeof e == 'object';
      }
      wl.exports = qA;
    });
    var Tl = S((BM, Bl) => {
      l();
      c();
      d();
      var jA = yt(),
        MA = Je(),
        $A = '[object Arguments]';
      function UA(e) {
        return MA(e) && jA(e) == $A;
      }
      Bl.exports = UA;
    });
    var sn = S((RM, Rl) => {
      l();
      c();
      d();
      var _l = Tl(),
        zA = Je(),
        Ol = Object.prototype,
        HA = Ol.hasOwnProperty,
        GA = Ol.propertyIsEnumerable,
        WA = _l(
          (function () {
            return arguments;
          })()
        )
          ? _l
          : function (e) {
              return zA(e) && HA.call(e, 'callee') && !GA.call(e, 'callee');
            };
      Rl.exports = WA;
    });
    var Il = S((NM, Pl) => {
      l();
      c();
      d();
      function VA() {
        return !1;
      }
      Pl.exports = VA;
    });
    var ln = S((Er, kt) => {
      l();
      c();
      d();
      var KA = Le(),
        YA = Il(),
        Ll = typeof Er == 'object' && Er && !Er.nodeType && Er,
        kl = Ll && typeof kt == 'object' && kt && !kt.nodeType && kt,
        JA = kl && kl.exports === Ll,
        Nl = JA ? KA.Buffer : void 0,
        XA = Nl ? Nl.isBuffer : void 0,
        QA = XA || YA;
      kt.exports = QA;
    });
    var cn = S((zM, ql) => {
      l();
      c();
      d();
      var ZA = 9007199254740991,
        ev = /^(?:0|[1-9]\d*)$/;
      function tv(e, t) {
        var r = typeof e;
        return (
          (t = t ?? ZA),
          !!t &&
            (r == 'number' || (r != 'symbol' && ev.test(e))) &&
            e > -1 &&
            e % 1 == 0 &&
            e < t
        );
      }
      ql.exports = tv;
    });
    var dn = S((VM, jl) => {
      l();
      c();
      d();
      var rv = 9007199254740991;
      function nv(e) {
        return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= rv;
      }
      jl.exports = nv;
    });
    var $l = S((XM, Ml) => {
      l();
      c();
      d();
      var av = yt(),
        ov = dn(),
        iv = Je(),
        uv = '[object Arguments]',
        sv = '[object Array]',
        lv = '[object Boolean]',
        cv = '[object Date]',
        dv = '[object Error]',
        pv = '[object Function]',
        fv = '[object Map]',
        hv = '[object Number]',
        mv = '[object Object]',
        gv = '[object RegExp]',
        yv = '[object Set]',
        bv = '[object String]',
        Ev = '[object WeakMap]',
        Av = '[object ArrayBuffer]',
        vv = '[object DataView]',
        Dv = '[object Float32Array]',
        Cv = '[object Float64Array]',
        xv = '[object Int8Array]',
        Sv = '[object Int16Array]',
        Fv = '[object Int32Array]',
        wv = '[object Uint8Array]',
        Bv = '[object Uint8ClampedArray]',
        Tv = '[object Uint16Array]',
        _v = '[object Uint32Array]',
        le = {};
      le[Dv] =
        le[Cv] =
        le[xv] =
        le[Sv] =
        le[Fv] =
        le[wv] =
        le[Bv] =
        le[Tv] =
        le[_v] =
          !0;
      le[uv] =
        le[sv] =
        le[Av] =
        le[lv] =
        le[vv] =
        le[cv] =
        le[dv] =
        le[pv] =
        le[fv] =
        le[hv] =
        le[mv] =
        le[gv] =
        le[yv] =
        le[bv] =
        le[Ev] =
          !1;
      function Ov(e) {
        return iv(e) && ov(e.length) && !!le[av(e)];
      }
      Ml.exports = Ov;
    });
    var pn = S((t$, Ul) => {
      l();
      c();
      d();
      function Rv(e) {
        return function (t) {
          return e(t);
        };
      }
      Ul.exports = Rv;
    });
    var fn = S((Ar, Nt) => {
      l();
      c();
      d();
      var Pv = Ha(),
        zl = typeof Ar == 'object' && Ar && !Ar.nodeType && Ar,
        vr = zl && typeof Nt == 'object' && Nt && !Nt.nodeType && Nt,
        Iv = vr && vr.exports === zl,
        to = Iv && Pv.process,
        kv = (function () {
          try {
            var e = vr && vr.require && vr.require('util').types;
            return e || (to && to.binding && to.binding('util'));
          } catch {}
        })();
      Nt.exports = kv;
    });
    var ro = S((s$, Wl) => {
      l();
      c();
      d();
      var Nv = $l(),
        Lv = pn(),
        Hl = fn(),
        Gl = Hl && Hl.isTypedArray,
        qv = Gl ? Lv(Gl) : Nv;
      Wl.exports = qv;
    });
    var no = S((p$, Vl) => {
      l();
      c();
      d();
      var jv = Fl(),
        Mv = sn(),
        $v = Ue(),
        Uv = ln(),
        zv = cn(),
        Hv = ro(),
        Gv = Object.prototype,
        Wv = Gv.hasOwnProperty;
      function Vv(e, t) {
        var r = $v(e),
          n = !r && Mv(e),
          a = !r && !n && Uv(e),
          o = !r && !n && !a && Hv(e),
          i = r || n || a || o,
          u = i ? jv(e.length, String) : [],
          s = u.length;
        for (var p in e)
          (t || Wv.call(e, p)) &&
            !(
              i &&
              (p == 'length' ||
                (a && (p == 'offset' || p == 'parent')) ||
                (o &&
                  (p == 'buffer' || p == 'byteLength' || p == 'byteOffset')) ||
                zv(p, s))
            ) &&
            u.push(p);
        return u;
      }
      Vl.exports = Vv;
    });
    var hn = S((g$, Kl) => {
      l();
      c();
      d();
      var Kv = Object.prototype;
      function Yv(e) {
        var t = e && e.constructor,
          r = (typeof t == 'function' && t.prototype) || Kv;
        return e === r;
      }
      Kl.exports = Yv;
    });
    var ao = S((A$, Yl) => {
      l();
      c();
      d();
      function Jv(e, t) {
        return function (r) {
          return e(t(r));
        };
      }
      Yl.exports = Jv;
    });
    var Xl = S((x$, Jl) => {
      l();
      c();
      d();
      var Xv = ao(),
        Qv = Xv(Object.keys, Object);
      Jl.exports = Qv;
    });
    var Zl = S((B$, Ql) => {
      l();
      c();
      d();
      var Zv = hn(),
        eD = Xl(),
        tD = Object.prototype,
        rD = tD.hasOwnProperty;
      function nD(e) {
        if (!Zv(e)) return eD(e);
        var t = [];
        for (var r in Object(e))
          rD.call(e, r) && r != 'constructor' && t.push(r);
        return t;
      }
      Ql.exports = nD;
    });
    var oo = S((R$, ec) => {
      l();
      c();
      d();
      var aD = Ga(),
        oD = dn();
      function iD(e) {
        return e != null && oD(e.length) && !aD(e);
      }
      ec.exports = iD;
    });
    var Lt = S((N$, tc) => {
      l();
      c();
      d();
      var uD = no(),
        sD = Zl(),
        lD = oo();
      function cD(e) {
        return lD(e) ? uD(e) : sD(e);
      }
      tc.exports = cD;
    });
    var io = S((M$, rc) => {
      l();
      c();
      d();
      var dD = Za(),
        pD = un(),
        fD = Lt();
      function hD(e) {
        return dD(e, fD, pD);
      }
      rc.exports = hD;
    });
    var oc = S((H$, ac) => {
      l();
      c();
      d();
      var nc = io(),
        mD = 1,
        gD = Object.prototype,
        yD = gD.hasOwnProperty;
      function bD(e, t, r, n, a, o) {
        var i = r & mD,
          u = nc(e),
          s = u.length,
          p = nc(t),
          y = p.length;
        if (s != y && !i) return !1;
        for (var A = s; A--; ) {
          var m = u[A];
          if (!(i ? m in t : yD.call(t, m))) return !1;
        }
        var h = o.get(e),
          E = o.get(t);
        if (h && E) return h == t && E == e;
        var b = !0;
        o.set(e, t), o.set(t, e);
        for (var x = i; ++A < s; ) {
          m = u[A];
          var F = e[m],
            B = t[m];
          if (n) var I = i ? n(B, F, m, t, e, o) : n(F, B, m, e, t, o);
          if (!(I === void 0 ? F === B || a(F, B, r, n, o) : I)) {
            b = !1;
            break;
          }
          x || (x = m == 'constructor');
        }
        if (b && !x) {
          var q = e.constructor,
            w = t.constructor;
          q != w &&
            'constructor' in e &&
            'constructor' in t &&
            !(
              typeof q == 'function' &&
              q instanceof q &&
              typeof w == 'function' &&
              w instanceof w
            ) &&
            (b = !1);
        }
        return o.delete(e), o.delete(t), b;
      }
      ac.exports = bD;
    });
    var uc = S((K$, ic) => {
      l();
      c();
      d();
      var ED = at(),
        AD = Le(),
        vD = ED(AD, 'DataView');
      ic.exports = vD;
    });
    var lc = S((Q$, sc) => {
      l();
      c();
      d();
      var DD = at(),
        CD = Le(),
        xD = DD(CD, 'Promise');
      sc.exports = xD;
    });
    var uo = S((rU, cc) => {
      l();
      c();
      d();
      var SD = at(),
        FD = Le(),
        wD = SD(FD, 'Set');
      cc.exports = wD;
    });
    var pc = S((iU, dc) => {
      l();
      c();
      d();
      var BD = at(),
        TD = Le(),
        _D = BD(TD, 'WeakMap');
      dc.exports = _D;
    });
    var Dr = S((cU, Ec) => {
      l();
      c();
      d();
      var so = uc(),
        lo = en(),
        co = lc(),
        po = uo(),
        fo = pc(),
        bc = yt(),
        qt = Va(),
        fc = '[object Map]',
        OD = '[object Object]',
        hc = '[object Promise]',
        mc = '[object Set]',
        gc = '[object WeakMap]',
        yc = '[object DataView]',
        RD = qt(so),
        PD = qt(lo),
        ID = qt(co),
        kD = qt(po),
        ND = qt(fo),
        bt = bc;
      ((so && bt(new so(new ArrayBuffer(1))) != yc) ||
        (lo && bt(new lo()) != fc) ||
        (co && bt(co.resolve()) != hc) ||
        (po && bt(new po()) != mc) ||
        (fo && bt(new fo()) != gc)) &&
        (bt = function (e) {
          var t = bc(e),
            r = t == OD ? e.constructor : void 0,
            n = r ? qt(r) : '';
          if (n)
            switch (n) {
              case RD:
                return yc;
              case PD:
                return fc;
              case ID:
                return hc;
              case kD:
                return mc;
              case ND:
                return gc;
            }
          return t;
        });
      Ec.exports = bt;
    });
    var wc = S((hU, Fc) => {
      l();
      c();
      d();
      var ho = rn(),
        LD = Ja(),
        qD = gl(),
        jD = oc(),
        Ac = Dr(),
        vc = Ue(),
        Dc = ln(),
        MD = ro(),
        $D = 1,
        Cc = '[object Arguments]',
        xc = '[object Array]',
        mn = '[object Object]',
        UD = Object.prototype,
        Sc = UD.hasOwnProperty;
      function zD(e, t, r, n, a, o) {
        var i = vc(e),
          u = vc(t),
          s = i ? xc : Ac(e),
          p = u ? xc : Ac(t);
        (s = s == Cc ? mn : s), (p = p == Cc ? mn : p);
        var y = s == mn,
          A = p == mn,
          m = s == p;
        if (m && Dc(e)) {
          if (!Dc(t)) return !1;
          (i = !0), (y = !1);
        }
        if (m && !y)
          return (
            o || (o = new ho()),
            i || MD(e) ? LD(e, t, r, n, a, o) : qD(e, t, s, r, n, a, o)
          );
        if (!(r & $D)) {
          var h = y && Sc.call(e, '__wrapped__'),
            E = A && Sc.call(t, '__wrapped__');
          if (h || E) {
            var b = h ? e.value() : e,
              x = E ? t.value() : t;
            return o || (o = new ho()), a(b, x, r, n, o);
          }
        }
        return m ? (o || (o = new ho()), jD(e, t, r, n, a, o)) : !1;
      }
      Fc.exports = zD;
    });
    var mo = S((bU, _c) => {
      l();
      c();
      d();
      var HD = wc(),
        Bc = Je();
      function Tc(e, t, r, n, a) {
        return e === t
          ? !0
          : e == null || t == null || (!Bc(e) && !Bc(t))
            ? e !== e && t !== t
            : HD(e, t, r, n, Tc, a);
      }
      _c.exports = Tc;
    });
    var Rc = S((DU, Oc) => {
      l();
      c();
      d();
      var GD = rn(),
        WD = mo(),
        VD = 1,
        KD = 2;
      function YD(e, t, r, n) {
        var a = r.length,
          o = a,
          i = !n;
        if (e == null) return !o;
        for (e = Object(e); a--; ) {
          var u = r[a];
          if (i && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
        }
        for (; ++a < o; ) {
          u = r[a];
          var s = u[0],
            p = e[s],
            y = u[1];
          if (i && u[2]) {
            if (p === void 0 && !(s in e)) return !1;
          } else {
            var A = new GD();
            if (n) var m = n(p, y, s, e, t, A);
            if (!(m === void 0 ? WD(y, p, VD | KD, n, A) : m)) return !1;
          }
        }
        return !0;
      }
      Oc.exports = YD;
    });
    var go = S((FU, Pc) => {
      l();
      c();
      d();
      var JD = $e();
      function XD(e) {
        return e === e && !JD(e);
      }
      Pc.exports = XD;
    });
    var kc = S((_U, Ic) => {
      l();
      c();
      d();
      var QD = go(),
        ZD = Lt();
      function eC(e) {
        for (var t = ZD(e), r = t.length; r--; ) {
          var n = t[r],
            a = e[n];
          t[r] = [n, a, QD(a)];
        }
        return t;
      }
      Ic.exports = eC;
    });
    var yo = S((IU, Nc) => {
      l();
      c();
      d();
      function tC(e, t) {
        return function (r) {
          return r == null
            ? !1
            : r[e] === t && (t !== void 0 || e in Object(r));
        };
      }
      Nc.exports = tC;
    });
    var qc = S((qU, Lc) => {
      l();
      c();
      d();
      var rC = Rc(),
        nC = kc(),
        aC = yo();
      function oC(e) {
        var t = nC(e);
        return t.length == 1 && t[0][2]
          ? aC(t[0][0], t[0][1])
          : function (r) {
              return r === e || rC(r, e, t);
            };
      }
      Lc.exports = oC;
    });
    var Cr = S((UU, jc) => {
      l();
      c();
      d();
      var iC = yt(),
        uC = Je(),
        sC = '[object Symbol]';
      function lC(e) {
        return typeof e == 'symbol' || (uC(e) && iC(e) == sC);
      }
      jc.exports = lC;
    });
    var gn = S((WU, Mc) => {
      l();
      c();
      d();
      var cC = Ue(),
        dC = Cr(),
        pC = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        fC = /^\w*$/;
      function hC(e, t) {
        if (cC(e)) return !1;
        var r = typeof e;
        return r == 'number' ||
          r == 'symbol' ||
          r == 'boolean' ||
          e == null ||
          dC(e)
          ? !0
          : fC.test(e) || !pC.test(e) || (t != null && e in Object(t));
      }
      Mc.exports = hC;
    });
    var zc = S((JU, Uc) => {
      l();
      c();
      d();
      var $c = tn(),
        mC = 'Expected a function';
      function bo(e, t) {
        if (typeof e != 'function' || (t != null && typeof t != 'function'))
          throw new TypeError(mC);
        var r = function () {
          var n = arguments,
            a = t ? t.apply(this, n) : n[0],
            o = r.cache;
          if (o.has(a)) return o.get(a);
          var i = e.apply(this, n);
          return (r.cache = o.set(a, i) || o), i;
        };
        return (r.cache = new (bo.Cache || $c)()), r;
      }
      bo.Cache = $c;
      Uc.exports = bo;
    });
    var Gc = S((ez, Hc) => {
      l();
      c();
      d();
      var gC = zc(),
        yC = 500;
      function bC(e) {
        var t = gC(e, function (n) {
            return r.size === yC && r.clear(), n;
          }),
          r = t.cache;
        return t;
      }
      Hc.exports = bC;
    });
    var Vc = S((az, Wc) => {
      l();
      c();
      d();
      var EC = Gc(),
        AC =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        vC = /\\(\\)?/g,
        DC = EC(function (e) {
          var t = [];
          return (
            e.charCodeAt(0) === 46 && t.push(''),
            e.replace(AC, function (r, n, a, o) {
              t.push(a ? o.replace(vC, '$1') : n || r);
            }),
            t
          );
        });
      Wc.exports = DC;
    });
    var Zc = S((sz, Qc) => {
      l();
      c();
      d();
      var Kc = gt(),
        CC = za(),
        xC = Ue(),
        SC = Cr(),
        FC = 1 / 0,
        Yc = Kc ? Kc.prototype : void 0,
        Jc = Yc ? Yc.toString : void 0;
      function Xc(e) {
        if (typeof e == 'string') return e;
        if (xC(e)) return CC(e, Xc) + '';
        if (SC(e)) return Jc ? Jc.call(e) : '';
        var t = e + '';
        return t == '0' && 1 / e == -FC ? '-0' : t;
      }
      Qc.exports = Xc;
    });
    var td = S((pz, ed) => {
      l();
      c();
      d();
      var wC = Zc();
      function BC(e) {
        return e == null ? '' : wC(e);
      }
      ed.exports = BC;
    });
    var xr = S((gz, rd) => {
      l();
      c();
      d();
      var TC = Ue(),
        _C = gn(),
        OC = Vc(),
        RC = td();
      function PC(e, t) {
        return TC(e) ? e : _C(e, t) ? [e] : OC(RC(e));
      }
      rd.exports = PC;
    });
    var jt = S((Az, nd) => {
      l();
      c();
      d();
      var IC = Cr(),
        kC = 1 / 0;
      function NC(e) {
        if (typeof e == 'string' || IC(e)) return e;
        var t = e + '';
        return t == '0' && 1 / e == -kC ? '-0' : t;
      }
      nd.exports = NC;
    });
    var yn = S((xz, ad) => {
      l();
      c();
      d();
      var LC = xr(),
        qC = jt();
      function jC(e, t) {
        t = LC(t, e);
        for (var r = 0, n = t.length; e != null && r < n; ) e = e[qC(t[r++])];
        return r && r == n ? e : void 0;
      }
      ad.exports = jC;
    });
    var id = S((Bz, od) => {
      l();
      c();
      d();
      var MC = yn();
      function $C(e, t, r) {
        var n = e == null ? void 0 : MC(e, t);
        return n === void 0 ? r : n;
      }
      od.exports = $C;
    });
    var sd = S((Rz, ud) => {
      l();
      c();
      d();
      function UC(e, t) {
        return e != null && t in Object(e);
      }
      ud.exports = UC;
    });
    var cd = S((Nz, ld) => {
      l();
      c();
      d();
      var zC = xr(),
        HC = sn(),
        GC = Ue(),
        WC = cn(),
        VC = dn(),
        KC = jt();
      function YC(e, t, r) {
        t = zC(t, e);
        for (var n = -1, a = t.length, o = !1; ++n < a; ) {
          var i = KC(t[n]);
          if (!(o = e != null && r(e, i))) break;
          e = e[i];
        }
        return o || ++n != a
          ? o
          : ((a = e == null ? 0 : e.length),
            !!a && VC(a) && WC(i, a) && (GC(e) || HC(e)));
      }
      ld.exports = YC;
    });
    var Eo = S((Mz, dd) => {
      l();
      c();
      d();
      var JC = sd(),
        XC = cd();
      function QC(e, t) {
        return e != null && XC(e, t, JC);
      }
      dd.exports = QC;
    });
    var fd = S((Hz, pd) => {
      l();
      c();
      d();
      var ZC = mo(),
        ex = id(),
        tx = Eo(),
        rx = gn(),
        nx = go(),
        ax = yo(),
        ox = jt(),
        ix = 1,
        ux = 2;
      function sx(e, t) {
        return rx(e) && nx(t)
          ? ax(ox(e), t)
          : function (r) {
              var n = ex(r, e);
              return n === void 0 && n === t ? tx(r, e) : ZC(t, n, ix | ux);
            };
      }
      pd.exports = sx;
    });
    var Ao = S((Kz, hd) => {
      l();
      c();
      d();
      function lx(e) {
        return e;
      }
      hd.exports = lx;
    });
    var gd = S((Qz, md) => {
      l();
      c();
      d();
      function cx(e) {
        return function (t) {
          return t?.[e];
        };
      }
      md.exports = cx;
    });
    var bd = S((rH, yd) => {
      l();
      c();
      d();
      var dx = yn();
      function px(e) {
        return function (t) {
          return dx(t, e);
        };
      }
      yd.exports = px;
    });
    var Ad = S((iH, Ed) => {
      l();
      c();
      d();
      var fx = gd(),
        hx = bd(),
        mx = gn(),
        gx = jt();
      function yx(e) {
        return mx(e) ? fx(gx(e)) : hx(e);
      }
      Ed.exports = yx;
    });
    var vo = S((cH, vd) => {
      l();
      c();
      d();
      var bx = qc(),
        Ex = fd(),
        Ax = Ao(),
        vx = Ue(),
        Dx = Ad();
      function Cx(e) {
        return typeof e == 'function'
          ? e
          : e == null
            ? Ax
            : typeof e == 'object'
              ? vx(e)
                ? Ex(e[0], e[1])
                : bx(e)
              : Dx(e);
      }
      vd.exports = Cx;
    });
    var Do = S((hH, Dd) => {
      l();
      c();
      d();
      var xx = at(),
        Sx = (function () {
          try {
            var e = xx(Object, 'defineProperty');
            return e({}, '', {}), e;
          } catch {}
        })();
      Dd.exports = Sx;
    });
    var bn = S((bH, xd) => {
      l();
      c();
      d();
      var Cd = Do();
      function Fx(e, t, r) {
        t == '__proto__' && Cd
          ? Cd(e, t, {
              configurable: !0,
              enumerable: !0,
              value: r,
              writable: !0,
            })
          : (e[t] = r);
      }
      xd.exports = Fx;
    });
    var En = S((DH, Sd) => {
      l();
      c();
      d();
      var wx = bn(),
        Bx = Zr(),
        Tx = Object.prototype,
        _x = Tx.hasOwnProperty;
      function Ox(e, t, r) {
        var n = e[t];
        (!(_x.call(e, t) && Bx(n, r)) || (r === void 0 && !(t in e))) &&
          wx(e, t, r);
      }
      Sd.exports = Ox;
    });
    var Bd = S((FH, wd) => {
      l();
      c();
      d();
      var Rx = En(),
        Px = xr(),
        Ix = cn(),
        Fd = $e(),
        kx = jt();
      function Nx(e, t, r, n) {
        if (!Fd(e)) return e;
        t = Px(t, e);
        for (
          var a = -1, o = t.length, i = o - 1, u = e;
          u != null && ++a < o;

        ) {
          var s = kx(t[a]),
            p = r;
          if (s === '__proto__' || s === 'constructor' || s === 'prototype')
            return e;
          if (a != i) {
            var y = u[s];
            (p = n ? n(y, s, u) : void 0),
              p === void 0 && (p = Fd(y) ? y : Ix(t[a + 1]) ? [] : {});
          }
          Rx(u, s, p), (u = u[s]);
        }
        return e;
      }
      wd.exports = Nx;
    });
    var Co = S((_H, Td) => {
      l();
      c();
      d();
      var Lx = yn(),
        qx = Bd(),
        jx = xr();
      function Mx(e, t, r) {
        for (var n = -1, a = t.length, o = {}; ++n < a; ) {
          var i = t[n],
            u = Lx(e, i);
          r(u, i) && qx(o, jx(i, e), u);
        }
        return o;
      }
      Td.exports = Mx;
    });
    var An = S((IH, _d) => {
      l();
      c();
      d();
      var $x = ao(),
        Ux = $x(Object.getPrototypeOf, Object);
      _d.exports = Ux;
    });
    var xo = S((qH, Od) => {
      l();
      c();
      d();
      var zx = on(),
        Hx = An(),
        Gx = un(),
        Wx = eo(),
        Vx = Object.getOwnPropertySymbols,
        Kx = Vx
          ? function (e) {
              for (var t = []; e; ) zx(t, Gx(e)), (e = Hx(e));
              return t;
            }
          : Wx;
      Od.exports = Kx;
    });
    var Pd = S((UH, Rd) => {
      l();
      c();
      d();
      function Yx(e) {
        var t = [];
        if (e != null) for (var r in Object(e)) t.push(r);
        return t;
      }
      Rd.exports = Yx;
    });
    var kd = S((WH, Id) => {
      l();
      c();
      d();
      var Jx = $e(),
        Xx = hn(),
        Qx = Pd(),
        Zx = Object.prototype,
        eS = Zx.hasOwnProperty;
      function tS(e) {
        if (!Jx(e)) return Qx(e);
        var t = Xx(e),
          r = [];
        for (var n in e)
          (n == 'constructor' && (t || !eS.call(e, n))) || r.push(n);
        return r;
      }
      Id.exports = tS;
    });
    var vn = S((JH, Nd) => {
      l();
      c();
      d();
      var rS = no(),
        nS = kd(),
        aS = oo();
      function oS(e) {
        return aS(e) ? rS(e, !0) : nS(e);
      }
      Nd.exports = oS;
    });
    var So = S((eG, Ld) => {
      l();
      c();
      d();
      var iS = Za(),
        uS = xo(),
        sS = vn();
      function lS(e) {
        return iS(e, sS, uS);
      }
      Ld.exports = lS;
    });
    var Fo = S((aG, qd) => {
      l();
      c();
      d();
      var cS = za(),
        dS = vo(),
        pS = Co(),
        fS = So();
      function hS(e, t) {
        if (e == null) return {};
        var r = cS(fS(e), function (n) {
          return [n];
        });
        return (
          (t = dS(t)),
          pS(e, r, function (n, a) {
            return t(n, a[0]);
          })
        );
      }
      qd.exports = hS;
    });
    var Sn = S((yp, No) => {
      l();
      c();
      d();
      (function (e) {
        if (typeof yp == 'object' && typeof No < 'u') No.exports = e();
        else if (typeof define == 'function' && define.amd) define([], e);
        else {
          var t;
          typeof window < 'u' || typeof window < 'u'
            ? (t = window)
            : typeof self < 'u'
              ? (t = self)
              : (t = this),
            (t.memoizerific = e());
        }
      })(function () {
        var e, t, r;
        return (function n(a, o, i) {
          function u(y, A) {
            if (!o[y]) {
              if (!a[y]) {
                var m = typeof ir == 'function' && ir;
                if (!A && m) return m(y, !0);
                if (s) return s(y, !0);
                var h = new Error("Cannot find module '" + y + "'");
                throw ((h.code = 'MODULE_NOT_FOUND'), h);
              }
              var E = (o[y] = { exports: {} });
              a[y][0].call(
                E.exports,
                function (b) {
                  var x = a[y][1][b];
                  return u(x || b);
                },
                E,
                E.exports,
                n,
                a,
                o,
                i
              );
            }
            return o[y].exports;
          }
          for (var s = typeof ir == 'function' && ir, p = 0; p < i.length; p++)
            u(i[p]);
          return u;
        })(
          {
            1: [
              function (n, a, o) {
                a.exports = function (i) {
                  if (typeof Map != 'function' || i) {
                    var u = n('./similar');
                    return new u();
                  } else return new Map();
                };
              },
              { './similar': 2 },
            ],
            2: [
              function (n, a, o) {
                function i() {
                  return (
                    (this.list = []),
                    (this.lastItem = void 0),
                    (this.size = 0),
                    this
                  );
                }
                (i.prototype.get = function (u) {
                  var s;
                  if (this.lastItem && this.isEqual(this.lastItem.key, u))
                    return this.lastItem.val;
                  if (((s = this.indexOf(u)), s >= 0))
                    return (this.lastItem = this.list[s]), this.list[s].val;
                }),
                  (i.prototype.set = function (u, s) {
                    var p;
                    return this.lastItem && this.isEqual(this.lastItem.key, u)
                      ? ((this.lastItem.val = s), this)
                      : ((p = this.indexOf(u)),
                        p >= 0
                          ? ((this.lastItem = this.list[p]),
                            (this.list[p].val = s),
                            this)
                          : ((this.lastItem = { key: u, val: s }),
                            this.list.push(this.lastItem),
                            this.size++,
                            this));
                  }),
                  (i.prototype.delete = function (u) {
                    var s;
                    if (
                      (this.lastItem &&
                        this.isEqual(this.lastItem.key, u) &&
                        (this.lastItem = void 0),
                      (s = this.indexOf(u)),
                      s >= 0)
                    )
                      return this.size--, this.list.splice(s, 1)[0];
                  }),
                  (i.prototype.has = function (u) {
                    var s;
                    return this.lastItem && this.isEqual(this.lastItem.key, u)
                      ? !0
                      : ((s = this.indexOf(u)),
                        s >= 0 ? ((this.lastItem = this.list[s]), !0) : !1);
                  }),
                  (i.prototype.forEach = function (u, s) {
                    var p;
                    for (p = 0; p < this.size; p++)
                      u.call(
                        s || this,
                        this.list[p].val,
                        this.list[p].key,
                        this
                      );
                  }),
                  (i.prototype.indexOf = function (u) {
                    var s;
                    for (s = 0; s < this.size; s++)
                      if (this.isEqual(this.list[s].key, u)) return s;
                    return -1;
                  }),
                  (i.prototype.isEqual = function (u, s) {
                    return u === s || (u !== u && s !== s);
                  }),
                  (a.exports = i);
              },
              {},
            ],
            3: [
              function (n, a, o) {
                var i = n('map-or-similar');
                a.exports = function (y) {
                  var A = new i(!1),
                    m = [];
                  return function (h) {
                    var E = function () {
                      var b = A,
                        x,
                        F,
                        B = arguments.length - 1,
                        I = Array(B + 1),
                        q = !0,
                        w;
                      if ((E.numArgs || E.numArgs === 0) && E.numArgs !== B + 1)
                        throw new Error(
                          'Memoizerific functions should always be called with the same number of arguments'
                        );
                      for (w = 0; w < B; w++) {
                        if (
                          ((I[w] = { cacheItem: b, arg: arguments[w] }),
                          b.has(arguments[w]))
                        ) {
                          b = b.get(arguments[w]);
                          continue;
                        }
                        (q = !1),
                          (x = new i(!1)),
                          b.set(arguments[w], x),
                          (b = x);
                      }
                      return (
                        q &&
                          (b.has(arguments[B])
                            ? (F = b.get(arguments[B]))
                            : (q = !1)),
                        q ||
                          ((F = h.apply(null, arguments)),
                          b.set(arguments[B], F)),
                        y > 0 &&
                          ((I[B] = { cacheItem: b, arg: arguments[B] }),
                          q ? u(m, I) : m.push(I),
                          m.length > y && s(m.shift())),
                        (E.wasMemoized = q),
                        (E.numArgs = B + 1),
                        F
                      );
                    };
                    return (
                      (E.limit = y),
                      (E.wasMemoized = !1),
                      (E.cache = A),
                      (E.lru = m),
                      E
                    );
                  };
                };
                function u(y, A) {
                  var m = y.length,
                    h = A.length,
                    E,
                    b,
                    x;
                  for (b = 0; b < m; b++) {
                    for (E = !0, x = 0; x < h; x++)
                      if (!p(y[b][x].arg, A[x].arg)) {
                        E = !1;
                        break;
                      }
                    if (E) break;
                  }
                  y.push(y.splice(b, 1)[0]);
                }
                function s(y) {
                  var A = y.length,
                    m = y[A - 1],
                    h,
                    E;
                  for (
                    m.cacheItem.delete(m.arg), E = A - 2;
                    E >= 0 &&
                    ((m = y[E]), (h = m.cacheItem.get(m.arg)), !h || !h.size);
                    E--
                  )
                    m.cacheItem.delete(m.arg);
                }
                function p(y, A) {
                  return y === A || (y !== y && A !== A);
                }
              },
              { 'map-or-similar': 1 },
            ],
          },
          {},
          [3]
        )(3);
      });
    });
    var Ep = S((FG, bp) => {
      l();
      c();
      d();
      function BF(e, t, r, n) {
        for (var a = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < a; )
          if (t(e[o], o, e)) return o;
        return -1;
      }
      bp.exports = BF;
    });
    var vp = S((_G, Ap) => {
      l();
      c();
      d();
      function TF(e) {
        return e !== e;
      }
      Ap.exports = TF;
    });
    var Cp = S((IG, Dp) => {
      l();
      c();
      d();
      function _F(e, t, r) {
        for (var n = r - 1, a = e.length; ++n < a; ) if (e[n] === t) return n;
        return -1;
      }
      Dp.exports = _F;
    });
    var Sp = S((qG, xp) => {
      l();
      c();
      d();
      var OF = Ep(),
        RF = vp(),
        PF = Cp();
      function IF(e, t, r) {
        return t === t ? PF(e, t, r) : OF(e, RF, r);
      }
      xp.exports = IF;
    });
    var wp = S((UG, Fp) => {
      l();
      c();
      d();
      var kF = Sp();
      function NF(e, t) {
        var r = e == null ? 0 : e.length;
        return !!r && kF(e, t, 0) > -1;
      }
      Fp.exports = NF;
    });
    var Tp = S((WG, Bp) => {
      l();
      c();
      d();
      function LF(e, t, r) {
        for (var n = -1, a = e == null ? 0 : e.length; ++n < a; )
          if (r(t, e[n])) return !0;
        return !1;
      }
      Bp.exports = LF;
    });
    var Op = S((JG, _p) => {
      l();
      c();
      d();
      function qF() {}
      _p.exports = qF;
    });
    var Pp = S((eW, Rp) => {
      l();
      c();
      d();
      var Lo = uo(),
        jF = Op(),
        MF = an(),
        $F = 1 / 0,
        UF =
          Lo && 1 / MF(new Lo([, -0]))[1] == $F
            ? function (e) {
                return new Lo(e);
              }
            : jF;
      Rp.exports = UF;
    });
    var kp = S((aW, Ip) => {
      l();
      c();
      d();
      var zF = Ka(),
        HF = wp(),
        GF = Tp(),
        WF = Ya(),
        VF = Pp(),
        KF = an(),
        YF = 200;
      function JF(e, t, r) {
        var n = -1,
          a = HF,
          o = e.length,
          i = !0,
          u = [],
          s = u;
        if (r) (i = !1), (a = GF);
        else if (o >= YF) {
          var p = t ? null : VF(e);
          if (p) return KF(p);
          (i = !1), (a = WF), (s = new zF());
        } else s = t ? [] : u;
        e: for (; ++n < o; ) {
          var y = e[n],
            A = t ? t(y) : y;
          if (((y = r || y !== 0 ? y : 0), i && A === A)) {
            for (var m = s.length; m--; ) if (s[m] === A) continue e;
            t && s.push(A), u.push(y);
          } else a(s, A, r) || (s !== u && s.push(A), u.push(y));
        }
        return u;
      }
      Ip.exports = JF;
    });
    var Lp = S((sW, Np) => {
      l();
      c();
      d();
      var XF = kp();
      function QF(e) {
        return e && e.length ? XF(e) : [];
      }
      Np.exports = QF;
    });
    var jp = S((pW, qp) => {
      l();
      c();
      d();
      function ZF(e, t) {
        for (
          var r = -1, n = e == null ? 0 : e.length;
          ++r < n && t(e[r], r, e) !== !1;

        );
        return e;
      }
      qp.exports = ZF;
    });
    var Fr = S((gW, Mp) => {
      l();
      c();
      d();
      var ew = En(),
        tw = bn();
      function rw(e, t, r, n) {
        var a = !r;
        r || (r = {});
        for (var o = -1, i = t.length; ++o < i; ) {
          var u = t[o],
            s = n ? n(r[u], e[u], u, r, e) : void 0;
          s === void 0 && (s = e[u]), a ? tw(r, u, s) : ew(r, u, s);
        }
        return r;
      }
      Mp.exports = rw;
    });
    var Up = S((AW, $p) => {
      l();
      c();
      d();
      var nw = Fr(),
        aw = Lt();
      function ow(e, t) {
        return e && nw(t, aw(t), e);
      }
      $p.exports = ow;
    });
    var Hp = S((xW, zp) => {
      l();
      c();
      d();
      var iw = Fr(),
        uw = vn();
      function sw(e, t) {
        return e && iw(t, uw(t), e);
      }
      zp.exports = sw;
    });
    var Yp = S((wr, $t) => {
      l();
      c();
      d();
      var lw = Le(),
        Kp = typeof wr == 'object' && wr && !wr.nodeType && wr,
        Gp = Kp && typeof $t == 'object' && $t && !$t.nodeType && $t,
        cw = Gp && Gp.exports === Kp,
        Wp = cw ? lw.Buffer : void 0,
        Vp = Wp ? Wp.allocUnsafe : void 0;
      function dw(e, t) {
        if (t) return e.slice();
        var r = e.length,
          n = Vp ? Vp(r) : new e.constructor(r);
        return e.copy(n), n;
      }
      $t.exports = dw;
    });
    var Xp = S((OW, Jp) => {
      l();
      c();
      d();
      function pw(e, t) {
        var r = -1,
          n = e.length;
        for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
        return t;
      }
      Jp.exports = pw;
    });
    var Zp = S((kW, Qp) => {
      l();
      c();
      d();
      var fw = Fr(),
        hw = un();
      function mw(e, t) {
        return fw(e, hw(e), t);
      }
      Qp.exports = mw;
    });
    var tf = S((jW, ef) => {
      l();
      c();
      d();
      var gw = Fr(),
        yw = xo();
      function bw(e, t) {
        return gw(e, yw(e), t);
      }
      ef.exports = bw;
    });
    var nf = S((zW, rf) => {
      l();
      c();
      d();
      var Ew = Object.prototype,
        Aw = Ew.hasOwnProperty;
      function vw(e) {
        var t = e.length,
          r = new e.constructor(t);
        return (
          t &&
            typeof e[0] == 'string' &&
            Aw.call(e, 'index') &&
            ((r.index = e.index), (r.input = e.input)),
          r
        );
      }
      rf.exports = vw;
    });
    var Fn = S((VW, of) => {
      l();
      c();
      d();
      var af = Xa();
      function Dw(e) {
        var t = new e.constructor(e.byteLength);
        return new af(t).set(new af(e)), t;
      }
      of.exports = Dw;
    });
    var sf = S((XW, uf) => {
      l();
      c();
      d();
      var Cw = Fn();
      function xw(e, t) {
        var r = t ? Cw(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.byteLength);
      }
      uf.exports = xw;
    });
    var cf = S((tV, lf) => {
      l();
      c();
      d();
      var Sw = /\w*$/;
      function Fw(e) {
        var t = new e.constructor(e.source, Sw.exec(e));
        return (t.lastIndex = e.lastIndex), t;
      }
      lf.exports = Fw;
    });
    var mf = S((oV, hf) => {
      l();
      c();
      d();
      var df = gt(),
        pf = df ? df.prototype : void 0,
        ff = pf ? pf.valueOf : void 0;
      function ww(e) {
        return ff ? Object(ff.call(e)) : {};
      }
      hf.exports = ww;
    });
    var yf = S((lV, gf) => {
      l();
      c();
      d();
      var Bw = Fn();
      function Tw(e, t) {
        var r = t ? Bw(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.length);
      }
      gf.exports = Tw;
    });
    var Ef = S((fV, bf) => {
      l();
      c();
      d();
      var _w = Fn(),
        Ow = sf(),
        Rw = cf(),
        Pw = mf(),
        Iw = yf(),
        kw = '[object Boolean]',
        Nw = '[object Date]',
        Lw = '[object Map]',
        qw = '[object Number]',
        jw = '[object RegExp]',
        Mw = '[object Set]',
        $w = '[object String]',
        Uw = '[object Symbol]',
        zw = '[object ArrayBuffer]',
        Hw = '[object DataView]',
        Gw = '[object Float32Array]',
        Ww = '[object Float64Array]',
        Vw = '[object Int8Array]',
        Kw = '[object Int16Array]',
        Yw = '[object Int32Array]',
        Jw = '[object Uint8Array]',
        Xw = '[object Uint8ClampedArray]',
        Qw = '[object Uint16Array]',
        Zw = '[object Uint32Array]';
      function e5(e, t, r) {
        var n = e.constructor;
        switch (t) {
          case zw:
            return _w(e);
          case kw:
          case Nw:
            return new n(+e);
          case Hw:
            return Ow(e, r);
          case Gw:
          case Ww:
          case Vw:
          case Kw:
          case Yw:
          case Jw:
          case Xw:
          case Qw:
          case Zw:
            return Iw(e, r);
          case Lw:
            return new n();
          case qw:
          case $w:
            return new n(e);
          case jw:
            return Rw(e);
          case Mw:
            return new n();
          case Uw:
            return Pw(e);
        }
      }
      bf.exports = e5;
    });
    var Df = S((yV, vf) => {
      l();
      c();
      d();
      var t5 = $e(),
        Af = Object.create,
        r5 = (function () {
          function e() {}
          return function (t) {
            if (!t5(t)) return {};
            if (Af) return Af(t);
            e.prototype = t;
            var r = new e();
            return (e.prototype = void 0), r;
          };
        })();
      vf.exports = r5;
    });
    var xf = S((vV, Cf) => {
      l();
      c();
      d();
      var n5 = Df(),
        a5 = An(),
        o5 = hn();
      function i5(e) {
        return typeof e.constructor == 'function' && !o5(e) ? n5(a5(e)) : {};
      }
      Cf.exports = i5;
    });
    var Ff = S((SV, Sf) => {
      l();
      c();
      d();
      var u5 = Dr(),
        s5 = Je(),
        l5 = '[object Map]';
      function c5(e) {
        return s5(e) && u5(e) == l5;
      }
      Sf.exports = c5;
    });
    var _f = S((TV, Tf) => {
      l();
      c();
      d();
      var d5 = Ff(),
        p5 = pn(),
        wf = fn(),
        Bf = wf && wf.isMap,
        f5 = Bf ? p5(Bf) : d5;
      Tf.exports = f5;
    });
    var Rf = S((PV, Of) => {
      l();
      c();
      d();
      var h5 = Dr(),
        m5 = Je(),
        g5 = '[object Set]';
      function y5(e) {
        return m5(e) && h5(e) == g5;
      }
      Of.exports = y5;
    });
    var Nf = S((LV, kf) => {
      l();
      c();
      d();
      var b5 = Rf(),
        E5 = pn(),
        Pf = fn(),
        If = Pf && Pf.isSet,
        A5 = If ? E5(If) : b5;
      kf.exports = A5;
    });
    var $f = S(($V, Mf) => {
      l();
      c();
      d();
      var v5 = rn(),
        D5 = jp(),
        C5 = En(),
        x5 = Up(),
        S5 = Hp(),
        F5 = Yp(),
        w5 = Xp(),
        B5 = Zp(),
        T5 = tf(),
        _5 = io(),
        O5 = So(),
        R5 = Dr(),
        P5 = nf(),
        I5 = Ef(),
        k5 = xf(),
        N5 = Ue(),
        L5 = ln(),
        q5 = _f(),
        j5 = $e(),
        M5 = Nf(),
        $5 = Lt(),
        U5 = vn(),
        z5 = 1,
        H5 = 2,
        G5 = 4,
        Lf = '[object Arguments]',
        W5 = '[object Array]',
        V5 = '[object Boolean]',
        K5 = '[object Date]',
        Y5 = '[object Error]',
        qf = '[object Function]',
        J5 = '[object GeneratorFunction]',
        X5 = '[object Map]',
        Q5 = '[object Number]',
        jf = '[object Object]',
        Z5 = '[object RegExp]',
        e3 = '[object Set]',
        t3 = '[object String]',
        r3 = '[object Symbol]',
        n3 = '[object WeakMap]',
        a3 = '[object ArrayBuffer]',
        o3 = '[object DataView]',
        i3 = '[object Float32Array]',
        u3 = '[object Float64Array]',
        s3 = '[object Int8Array]',
        l3 = '[object Int16Array]',
        c3 = '[object Int32Array]',
        d3 = '[object Uint8Array]',
        p3 = '[object Uint8ClampedArray]',
        f3 = '[object Uint16Array]',
        h3 = '[object Uint32Array]',
        se = {};
      se[Lf] =
        se[W5] =
        se[a3] =
        se[o3] =
        se[V5] =
        se[K5] =
        se[i3] =
        se[u3] =
        se[s3] =
        se[l3] =
        se[c3] =
        se[X5] =
        se[Q5] =
        se[jf] =
        se[Z5] =
        se[e3] =
        se[t3] =
        se[r3] =
        se[d3] =
        se[p3] =
        se[f3] =
        se[h3] =
          !0;
      se[Y5] = se[qf] = se[n3] = !1;
      function wn(e, t, r, n, a, o) {
        var i,
          u = t & z5,
          s = t & H5,
          p = t & G5;
        if ((r && (i = a ? r(e, n, a, o) : r(e)), i !== void 0)) return i;
        if (!j5(e)) return e;
        var y = N5(e);
        if (y) {
          if (((i = P5(e)), !u)) return w5(e, i);
        } else {
          var A = R5(e),
            m = A == qf || A == J5;
          if (L5(e)) return F5(e, u);
          if (A == jf || A == Lf || (m && !a)) {
            if (((i = s || m ? {} : k5(e)), !u))
              return s ? T5(e, S5(i, e)) : B5(e, x5(i, e));
          } else {
            if (!se[A]) return a ? e : {};
            i = I5(e, A, u);
          }
        }
        o || (o = new v5());
        var h = o.get(e);
        if (h) return h;
        o.set(e, i),
          M5(e)
            ? e.forEach(function (x) {
                i.add(wn(x, t, r, x, e, o));
              })
            : q5(e) &&
              e.forEach(function (x, F) {
                i.set(F, wn(x, t, r, F, e, o));
              });
        var E = p ? (s ? O5 : _5) : s ? U5 : $5,
          b = y ? void 0 : E(e);
        return (
          D5(b || e, function (x, F) {
            b && ((F = x), (x = e[F])), C5(i, F, wn(x, t, r, F, e, o));
          }),
          i
        );
      }
      Mf.exports = wn;
    });
    var zf = S((GV, Uf) => {
      l();
      c();
      d();
      var m3 = $f(),
        g3 = 1,
        y3 = 4;
      function b3(e) {
        return m3(e, g3 | y3);
      }
      Uf.exports = b3;
    });
    var Qf = S((RK, Xf) => {
      l();
      c();
      d();
      function J3(e) {
        return function (t, r, n) {
          for (var a = -1, o = Object(t), i = n(t), u = i.length; u--; ) {
            var s = i[e ? u : ++a];
            if (r(o[s], s, o) === !1) break;
          }
          return t;
        };
      }
      Xf.exports = J3;
    });
    var e0 = S((NK, Zf) => {
      l();
      c();
      d();
      var X3 = Qf(),
        Q3 = X3();
      Zf.exports = Q3;
    });
    var r0 = S((MK, t0) => {
      l();
      c();
      d();
      var Z3 = e0(),
        eB = Lt();
      function tB(e, t) {
        return e && Z3(e, t, eB);
      }
      t0.exports = tB;
    });
    var Pn = S((HK, n0) => {
      l();
      c();
      d();
      var rB = bn(),
        nB = r0(),
        aB = vo();
      function oB(e, t) {
        var r = {};
        return (
          (t = aB(t, 3)),
          nB(e, function (n, a, o) {
            rB(r, a, t(n, a, o));
          }),
          r
        );
      }
      n0.exports = oB;
    });
    var o0 = S((KK, a0) => {
      l();
      c();
      d();
      var iB = Co(),
        uB = Eo();
      function sB(e, t) {
        return iB(e, t, function (r, n) {
          return uB(e, n);
        });
      }
      a0.exports = sB;
    });
    var l0 = S((QK, s0) => {
      l();
      c();
      d();
      var i0 = gt(),
        lB = sn(),
        cB = Ue(),
        u0 = i0 ? i0.isConcatSpreadable : void 0;
      function dB(e) {
        return cB(e) || lB(e) || !!(u0 && e && e[u0]);
      }
      s0.exports = dB;
    });
    var p0 = S((rY, d0) => {
      l();
      c();
      d();
      var pB = on(),
        fB = l0();
      function c0(e, t, r, n, a) {
        var o = -1,
          i = e.length;
        for (r || (r = fB), a || (a = []); ++o < i; ) {
          var u = e[o];
          t > 0 && r(u)
            ? t > 1
              ? c0(u, t - 1, r, n, a)
              : pB(a, u)
            : n || (a[a.length] = u);
        }
        return a;
      }
      d0.exports = c0;
    });
    var h0 = S((iY, f0) => {
      l();
      c();
      d();
      var hB = p0();
      function mB(e) {
        var t = e == null ? 0 : e.length;
        return t ? hB(e, 1) : [];
      }
      f0.exports = mB;
    });
    var g0 = S((cY, m0) => {
      l();
      c();
      d();
      function gB(e, t, r) {
        switch (r.length) {
          case 0:
            return e.call(t);
          case 1:
            return e.call(t, r[0]);
          case 2:
            return e.call(t, r[0], r[1]);
          case 3:
            return e.call(t, r[0], r[1], r[2]);
        }
        return e.apply(t, r);
      }
      m0.exports = gB;
    });
    var E0 = S((hY, b0) => {
      l();
      c();
      d();
      var yB = g0(),
        y0 = Math.max;
      function bB(e, t, r) {
        return (
          (t = y0(t === void 0 ? e.length - 1 : t, 0)),
          function () {
            for (
              var n = arguments, a = -1, o = y0(n.length - t, 0), i = Array(o);
              ++a < o;

            )
              i[a] = n[t + a];
            a = -1;
            for (var u = Array(t + 1); ++a < t; ) u[a] = n[a];
            return (u[t] = r(i)), yB(e, this, u);
          }
        );
      }
      b0.exports = bB;
    });
    var v0 = S((bY, A0) => {
      l();
      c();
      d();
      function EB(e) {
        return function () {
          return e;
        };
      }
      A0.exports = EB;
    });
    var x0 = S((DY, C0) => {
      l();
      c();
      d();
      var AB = v0(),
        D0 = Do(),
        vB = Ao(),
        DB = D0
          ? function (e, t) {
              return D0(e, 'toString', {
                configurable: !0,
                enumerable: !1,
                value: AB(t),
                writable: !0,
              });
            }
          : vB;
      C0.exports = DB;
    });
    var F0 = S((FY, S0) => {
      l();
      c();
      d();
      var CB = 800,
        xB = 16,
        SB = Date.now;
      function FB(e) {
        var t = 0,
          r = 0;
        return function () {
          var n = SB(),
            a = xB - (n - r);
          if (((r = n), a > 0)) {
            if (++t >= CB) return arguments[0];
          } else t = 0;
          return e.apply(void 0, arguments);
        };
      }
      S0.exports = FB;
    });
    var B0 = S((_Y, w0) => {
      l();
      c();
      d();
      var wB = x0(),
        BB = F0(),
        TB = BB(wB);
      w0.exports = TB;
    });
    var _0 = S((IY, T0) => {
      l();
      c();
      d();
      var _B = h0(),
        OB = E0(),
        RB = B0();
      function PB(e) {
        return RB(OB(e, void 0, _B), e + '');
      }
      T0.exports = PB;
    });
    var R0 = S((qY, O0) => {
      l();
      c();
      d();
      var IB = o0(),
        kB = _0(),
        NB = kB(function (e, t) {
          return e == null ? {} : IB(e, t);
        });
      O0.exports = NB;
    });
    var kn = S((UY, q0) => {
      'use strict';
      l();
      c();
      d();
      function In(e) {
        return Array.prototype.slice.apply(e);
      }
      var N0 = 'pending',
        P0 = 'resolved',
        I0 = 'rejected';
      function re(e) {
        (this.status = N0),
          (this._continuations = []),
          (this._parent = null),
          (this._paused = !1),
          e &&
            e.call(
              this,
              this._continueWith.bind(this),
              this._failWith.bind(this)
            );
      }
      function Br(e) {
        return e && typeof e.then == 'function';
      }
      function LB(e) {
        return e;
      }
      re.prototype = {
        then: function (e, t) {
          var r = re.unresolved()._setParent(this);
          if (this._isRejected()) {
            if (this._paused)
              return (
                this._continuations.push({ promise: r, nextFn: e, catchFn: t }),
                r
              );
            if (t)
              try {
                var n = t(this._error);
                return Br(n)
                  ? (this._chainPromiseData(n, r), r)
                  : re.resolve(n)._setParent(this);
              } catch (a) {
                return re.reject(a)._setParent(this);
              }
            return re.reject(this._error)._setParent(this);
          }
          return (
            this._continuations.push({ promise: r, nextFn: e, catchFn: t }),
            this._runResolutions(),
            r
          );
        },
        catch: function (e) {
          if (this._isResolved())
            return re.resolve(this._data)._setParent(this);
          var t = re.unresolved()._setParent(this);
          return (
            this._continuations.push({ promise: t, catchFn: e }),
            this._runRejections(),
            t
          );
        },
        finally: function (e) {
          var t = !1;
          function r(n, a) {
            if (!t) {
              (t = !0), e || (e = LB);
              var o = e(n);
              return Br(o)
                ? o.then(function () {
                    if (a) throw a;
                    return n;
                  })
                : n;
            }
          }
          return this.then(function (n) {
            return r(n);
          }).catch(function (n) {
            return r(null, n);
          });
        },
        pause: function () {
          return (this._paused = !0), this;
        },
        resume: function () {
          var e = this._findFirstPaused();
          return (
            e && ((e._paused = !1), e._runResolutions(), e._runRejections()),
            this
          );
        },
        _findAncestry: function () {
          return this._continuations.reduce(function (e, t) {
            if (t.promise) {
              var r = {
                promise: t.promise,
                children: t.promise._findAncestry(),
              };
              e.push(r);
            }
            return e;
          }, []);
        },
        _setParent: function (e) {
          if (this._parent) throw new Error('parent already set');
          return (this._parent = e), this;
        },
        _continueWith: function (e) {
          var t = this._findFirstPending();
          t && ((t._data = e), t._setResolved());
        },
        _findFirstPending: function () {
          return this._findFirstAncestor(function (e) {
            return e._isPending && e._isPending();
          });
        },
        _findFirstPaused: function () {
          return this._findFirstAncestor(function (e) {
            return e._paused;
          });
        },
        _findFirstAncestor: function (e) {
          for (var t = this, r; t; ) e(t) && (r = t), (t = t._parent);
          return r;
        },
        _failWith: function (e) {
          var t = this._findFirstPending();
          t && ((t._error = e), t._setRejected());
        },
        _takeContinuations: function () {
          return this._continuations.splice(0, this._continuations.length);
        },
        _runRejections: function () {
          if (!(this._paused || !this._isRejected())) {
            var e = this._error,
              t = this._takeContinuations(),
              r = this;
            t.forEach(function (n) {
              if (n.catchFn)
                try {
                  var a = n.catchFn(e);
                  r._handleUserFunctionResult(a, n.promise);
                } catch (o) {
                  n.promise.reject(o);
                }
              else n.promise.reject(e);
            });
          }
        },
        _runResolutions: function () {
          if (!(this._paused || !this._isResolved() || this._isPending())) {
            var e = this._takeContinuations(),
              t = this._data,
              r = this;
            if (
              (e.forEach(function (n) {
                if (n.nextFn)
                  try {
                    var a = n.nextFn(t);
                    r._handleUserFunctionResult(a, n.promise);
                  } catch (o) {
                    r._handleResolutionError(o, n);
                  }
                else n.promise && n.promise.resolve(t);
              }),
              Br(this._data))
            )
              return this._handleWhenResolvedDataIsPromise(this._data);
          }
        },
        _handleResolutionError: function (e, t) {
          if ((this._setRejected(), t.catchFn))
            try {
              t.catchFn(e);
              return;
            } catch (r) {
              e = r;
            }
          t.promise && t.promise.reject(e);
        },
        _handleWhenResolvedDataIsPromise: function (e) {
          var t = this;
          return e
            .then(function (r) {
              (t._data = r), t._runResolutions();
            })
            .catch(function (r) {
              (t._error = r), t._setRejected(), t._runRejections();
            });
        },
        _handleUserFunctionResult: function (e, t) {
          Br(e) ? this._chainPromiseData(e, t) : t.resolve(e);
        },
        _chainPromiseData: function (e, t) {
          e.then(function (r) {
            t.resolve(r);
          }).catch(function (r) {
            t.reject(r);
          });
        },
        _setResolved: function () {
          (this.status = P0), this._paused || this._runResolutions();
        },
        _setRejected: function () {
          (this.status = I0), this._paused || this._runRejections();
        },
        _isPending: function () {
          return this.status === N0;
        },
        _isResolved: function () {
          return this.status === P0;
        },
        _isRejected: function () {
          return this.status === I0;
        },
      };
      re.resolve = function (e) {
        return new re(function (t, r) {
          Br(e)
            ? e
                .then(function (n) {
                  t(n);
                })
                .catch(function (n) {
                  r(n);
                })
            : t(e);
        });
      };
      re.reject = function (e) {
        return new re(function (t, r) {
          r(e);
        });
      };
      re.unresolved = function () {
        return new re(function (e, t) {
          (this.resolve = e), (this.reject = t);
        });
      };
      re.all = function () {
        var e = In(arguments);
        return (
          Array.isArray(e[0]) && (e = e[0]),
          e.length
            ? new re(function (t, r) {
                var n = [],
                  a = 0,
                  o = function () {
                    a === e.length && t(n);
                  },
                  i = !1,
                  u = function (s) {
                    i || ((i = !0), r(s));
                  };
                e.forEach(function (s, p) {
                  re.resolve(s)
                    .then(function (y) {
                      (n[p] = y), (a += 1), o();
                    })
                    .catch(function (y) {
                      u(y);
                    });
                });
              })
            : re.resolve([])
        );
      };
      function k0(e) {
        return typeof window < 'u' && 'AggregateError' in window
          ? new window.AggregateError(e)
          : { errors: e };
      }
      re.any = function () {
        var e = In(arguments);
        return (
          Array.isArray(e[0]) && (e = e[0]),
          e.length
            ? new re(function (t, r) {
                var n = [],
                  a = 0,
                  o = function () {
                    a === e.length && r(k0(n));
                  },
                  i = !1,
                  u = function (s) {
                    i || ((i = !0), t(s));
                  };
                e.forEach(function (s, p) {
                  re.resolve(s)
                    .then(function (y) {
                      u(y);
                    })
                    .catch(function (y) {
                      (n[p] = y), (a += 1), o();
                    });
                });
              })
            : re.reject(k0([]))
        );
      };
      re.allSettled = function () {
        var e = In(arguments);
        return (
          Array.isArray(e[0]) && (e = e[0]),
          e.length
            ? new re(function (t) {
                var r = [],
                  n = 0,
                  a = function () {
                    (n += 1), n === e.length && t(r);
                  };
                e.forEach(function (o, i) {
                  re.resolve(o)
                    .then(function (u) {
                      (r[i] = { status: 'fulfilled', value: u }), a();
                    })
                    .catch(function (u) {
                      (r[i] = { status: 'rejected', reason: u }), a();
                    });
                });
              })
            : re.resolve([])
        );
      };
      if (Promise === re)
        throw new Error(
          'Please use SynchronousPromise.installGlobally() to install globally'
        );
      var L0 = Promise;
      re.installGlobally = function (e) {
        if (Promise === re) return e;
        var t = qB(e);
        return (Promise = re), t;
      };
      re.uninstallGlobally = function () {
        Promise === re && (Promise = L0);
      };
      function qB(e) {
        if (typeof e > 'u' || e.__patched) return e;
        var t = e;
        return (
          (e = function () {
            var r = L0;
            t.apply(this, In(arguments));
          }),
          (e.__patched = !0),
          e
        );
      }
      q0.exports = { SynchronousPromise: re };
    });
    var $o = S((dJ, M0) => {
      l();
      c();
      d();
      var MB = yt(),
        $B = An(),
        UB = Je(),
        zB = '[object Object]',
        HB = Function.prototype,
        GB = Object.prototype,
        j0 = HB.toString,
        WB = GB.hasOwnProperty,
        VB = j0.call(Object);
      function KB(e) {
        if (!UB(e) || MB(e) != zB) return !1;
        var t = $B(e);
        if (t === null) return !0;
        var r = WB.call(t, 'constructor') && t.constructor;
        return typeof r == 'function' && r instanceof r && j0.call(r) == VB;
      }
      M0.exports = KB;
    });
    var U0 = S((mJ, $0) => {
      l();
      c();
      d();
      $0.exports = YB;
      function YB(e, t) {
        if (Uo('noDeprecation')) return e;
        var r = !1;
        function n() {
          if (!r) {
            if (Uo('throwDeprecation')) throw new Error(t);
            Uo('traceDeprecation') ? console.trace(t) : console.warn(t),
              (r = !0);
          }
          return e.apply(this, arguments);
        }
        return n;
      }
      function Uo(e) {
        try {
          if (!window.localStorage) return !1;
        } catch {
          return !1;
        }
        var t = window.localStorage[e];
        return t == null ? !1 : String(t).toLowerCase() === 'true';
      }
    });
    var Y0 = S((qJ, K0) => {
      'use strict';
      l();
      c();
      d();
      K0.exports = function () {
        if (
          typeof Symbol != 'function' ||
          typeof Object.getOwnPropertySymbols != 'function'
        )
          return !1;
        if (typeof Symbol.iterator == 'symbol') return !0;
        var t = {},
          r = Symbol('test'),
          n = Object(r);
        if (
          typeof r == 'string' ||
          Object.prototype.toString.call(r) !== '[object Symbol]' ||
          Object.prototype.toString.call(n) !== '[object Symbol]'
        )
          return !1;
        var a = 42;
        t[r] = a;
        for (r in t) return !1;
        if (
          (typeof Object.keys == 'function' && Object.keys(t).length !== 0) ||
          (typeof Object.getOwnPropertyNames == 'function' &&
            Object.getOwnPropertyNames(t).length !== 0)
        )
          return !1;
        var o = Object.getOwnPropertySymbols(t);
        if (
          o.length !== 1 ||
          o[0] !== r ||
          !Object.prototype.propertyIsEnumerable.call(t, r)
        )
          return !1;
        if (typeof Object.getOwnPropertyDescriptor == 'function') {
          var i = Object.getOwnPropertyDescriptor(t, r);
          if (i.value !== a || i.enumerable !== !0) return !1;
        }
        return !0;
      };
    });
    var Q0 = S((UJ, X0) => {
      'use strict';
      l();
      c();
      d();
      var J0 = typeof Symbol < 'u' && Symbol,
        dT = Y0();
      X0.exports = function () {
        return typeof J0 != 'function' ||
          typeof Symbol != 'function' ||
          typeof J0('foo') != 'symbol' ||
          typeof Symbol('bar') != 'symbol'
          ? !1
          : dT();
      };
    });
    var th = S((WJ, eh) => {
      'use strict';
      l();
      c();
      d();
      var Z0 = { foo: {} },
        pT = Object;
      eh.exports = function () {
        return (
          { __proto__: Z0 }.foo === Z0.foo &&
          !({ __proto__: null } instanceof pT)
        );
      };
    });
    var ah = S((JJ, nh) => {
      'use strict';
      l();
      c();
      d();
      var fT = 'Function.prototype.bind called on incompatible ',
        hT = Object.prototype.toString,
        mT = Math.max,
        gT = '[object Function]',
        rh = function (t, r) {
          for (var n = [], a = 0; a < t.length; a += 1) n[a] = t[a];
          for (var o = 0; o < r.length; o += 1) n[o + t.length] = r[o];
          return n;
        },
        yT = function (t, r) {
          for (var n = [], a = r || 0, o = 0; a < t.length; a += 1, o += 1)
            n[o] = t[a];
          return n;
        },
        bT = function (e, t) {
          for (var r = '', n = 0; n < e.length; n += 1)
            (r += e[n]), n + 1 < e.length && (r += t);
          return r;
        };
      nh.exports = function (t) {
        var r = this;
        if (typeof r != 'function' || hT.apply(r) !== gT)
          throw new TypeError(fT + r);
        for (
          var n = yT(arguments, 1),
            a,
            o = function () {
              if (this instanceof a) {
                var y = r.apply(this, rh(n, arguments));
                return Object(y) === y ? y : this;
              }
              return r.apply(t, rh(n, arguments));
            },
            i = mT(0, r.length - n.length),
            u = [],
            s = 0;
          s < i;
          s++
        )
          u[s] = '$' + s;
        if (
          ((a = Function(
            'binder',
            'return function (' +
              bT(u, ',') +
              '){ return binder.apply(this,arguments); }'
          )(o)),
          r.prototype)
        ) {
          var p = function () {};
          (p.prototype = r.prototype),
            (a.prototype = new p()),
            (p.prototype = null);
        }
        return a;
      };
    });
    var Mn = S((eX, oh) => {
      'use strict';
      l();
      c();
      d();
      var ET = ah();
      oh.exports = Function.prototype.bind || ET;
    });
    var uh = S((aX, ih) => {
      'use strict';
      l();
      c();
      d();
      var AT = Function.prototype.call,
        vT = Object.prototype.hasOwnProperty,
        DT = Mn();
      ih.exports = DT.call(AT, vT);
    });
    var ut = S((sX, ph) => {
      'use strict';
      l();
      c();
      d();
      var ee,
        Wt = SyntaxError,
        dh = Function,
        Gt = TypeError,
        Wo = function (e) {
          try {
            return dh('"use strict"; return (' + e + ').constructor;')();
          } catch {}
        },
        vt = Object.getOwnPropertyDescriptor;
      if (vt)
        try {
          vt({}, '');
        } catch {
          vt = null;
        }
      var Vo = function () {
          throw new Gt();
        },
        CT = vt
          ? (function () {
              try {
                return arguments.callee, Vo;
              } catch {
                try {
                  return vt(arguments, 'callee').get;
                } catch {
                  return Vo;
                }
              }
            })()
          : Vo,
        zt = Q0()(),
        xT = th()(),
        Ee =
          Object.getPrototypeOf ||
          (xT
            ? function (e) {
                return e.__proto__;
              }
            : null),
        Ht = {},
        ST = typeof Uint8Array > 'u' || !Ee ? ee : Ee(Uint8Array),
        Dt = {
          '%AggregateError%': typeof AggregateError > 'u' ? ee : AggregateError,
          '%Array%': Array,
          '%ArrayBuffer%': typeof ArrayBuffer > 'u' ? ee : ArrayBuffer,
          '%ArrayIteratorPrototype%': zt && Ee ? Ee([][Symbol.iterator]()) : ee,
          '%AsyncFromSyncIteratorPrototype%': ee,
          '%AsyncFunction%': Ht,
          '%AsyncGenerator%': Ht,
          '%AsyncGeneratorFunction%': Ht,
          '%AsyncIteratorPrototype%': Ht,
          '%Atomics%': typeof Atomics > 'u' ? ee : Atomics,
          '%BigInt%': typeof BigInt > 'u' ? ee : BigInt,
          '%BigInt64Array%': typeof BigInt64Array > 'u' ? ee : BigInt64Array,
          '%BigUint64Array%': typeof BigUint64Array > 'u' ? ee : BigUint64Array,
          '%Boolean%': Boolean,
          '%DataView%': typeof DataView > 'u' ? ee : DataView,
          '%Date%': Date,
          '%decodeURI%': decodeURI,
          '%decodeURIComponent%': decodeURIComponent,
          '%encodeURI%': encodeURI,
          '%encodeURIComponent%': encodeURIComponent,
          '%Error%': Error,
          '%eval%': eval,
          '%EvalError%': EvalError,
          '%Float32Array%': typeof Float32Array > 'u' ? ee : Float32Array,
          '%Float64Array%': typeof Float64Array > 'u' ? ee : Float64Array,
          '%FinalizationRegistry%':
            typeof FinalizationRegistry > 'u' ? ee : FinalizationRegistry,
          '%Function%': dh,
          '%GeneratorFunction%': Ht,
          '%Int8Array%': typeof Int8Array > 'u' ? ee : Int8Array,
          '%Int16Array%': typeof Int16Array > 'u' ? ee : Int16Array,
          '%Int32Array%': typeof Int32Array > 'u' ? ee : Int32Array,
          '%isFinite%': isFinite,
          '%isNaN%': isNaN,
          '%IteratorPrototype%': zt && Ee ? Ee(Ee([][Symbol.iterator]())) : ee,
          '%JSON%': typeof JSON == 'object' ? JSON : ee,
          '%Map%': typeof Map > 'u' ? ee : Map,
          '%MapIteratorPrototype%':
            typeof Map > 'u' || !zt || !Ee
              ? ee
              : Ee(new Map()[Symbol.iterator]()),
          '%Math%': Math,
          '%Number%': Number,
          '%Object%': Object,
          '%parseFloat%': parseFloat,
          '%parseInt%': parseInt,
          '%Promise%': typeof Promise > 'u' ? ee : Promise,
          '%Proxy%': typeof Proxy > 'u' ? ee : Proxy,
          '%RangeError%': RangeError,
          '%ReferenceError%': ReferenceError,
          '%Reflect%': typeof Reflect > 'u' ? ee : Reflect,
          '%RegExp%': RegExp,
          '%Set%': typeof Set > 'u' ? ee : Set,
          '%SetIteratorPrototype%':
            typeof Set > 'u' || !zt || !Ee
              ? ee
              : Ee(new Set()[Symbol.iterator]()),
          '%SharedArrayBuffer%':
            typeof SharedArrayBuffer > 'u' ? ee : SharedArrayBuffer,
          '%String%': String,
          '%StringIteratorPrototype%':
            zt && Ee ? Ee(''[Symbol.iterator]()) : ee,
          '%Symbol%': zt ? Symbol : ee,
          '%SyntaxError%': Wt,
          '%ThrowTypeError%': CT,
          '%TypedArray%': ST,
          '%TypeError%': Gt,
          '%Uint8Array%': typeof Uint8Array > 'u' ? ee : Uint8Array,
          '%Uint8ClampedArray%':
            typeof Uint8ClampedArray > 'u' ? ee : Uint8ClampedArray,
          '%Uint16Array%': typeof Uint16Array > 'u' ? ee : Uint16Array,
          '%Uint32Array%': typeof Uint32Array > 'u' ? ee : Uint32Array,
          '%URIError%': URIError,
          '%WeakMap%': typeof WeakMap > 'u' ? ee : WeakMap,
          '%WeakRef%': typeof WeakRef > 'u' ? ee : WeakRef,
          '%WeakSet%': typeof WeakSet > 'u' ? ee : WeakSet,
        };
      if (Ee)
        try {
          null.error;
        } catch (e) {
          (sh = Ee(Ee(e))), (Dt['%Error.prototype%'] = sh);
        }
      var sh,
        FT = function e(t) {
          var r;
          if (t === '%AsyncFunction%') r = Wo('async function () {}');
          else if (t === '%GeneratorFunction%') r = Wo('function* () {}');
          else if (t === '%AsyncGeneratorFunction%')
            r = Wo('async function* () {}');
          else if (t === '%AsyncGenerator%') {
            var n = e('%AsyncGeneratorFunction%');
            n && (r = n.prototype);
          } else if (t === '%AsyncIteratorPrototype%') {
            var a = e('%AsyncGenerator%');
            a && Ee && (r = Ee(a.prototype));
          }
          return (Dt[t] = r), r;
        },
        lh = {
          '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
          '%ArrayPrototype%': ['Array', 'prototype'],
          '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
          '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
          '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
          '%ArrayProto_values%': ['Array', 'prototype', 'values'],
          '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
          '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
          '%AsyncGeneratorPrototype%': [
            'AsyncGeneratorFunction',
            'prototype',
            'prototype',
          ],
          '%BooleanPrototype%': ['Boolean', 'prototype'],
          '%DataViewPrototype%': ['DataView', 'prototype'],
          '%DatePrototype%': ['Date', 'prototype'],
          '%ErrorPrototype%': ['Error', 'prototype'],
          '%EvalErrorPrototype%': ['EvalError', 'prototype'],
          '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
          '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
          '%FunctionPrototype%': ['Function', 'prototype'],
          '%Generator%': ['GeneratorFunction', 'prototype'],
          '%GeneratorPrototype%': [
            'GeneratorFunction',
            'prototype',
            'prototype',
          ],
          '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
          '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
          '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
          '%JSONParse%': ['JSON', 'parse'],
          '%JSONStringify%': ['JSON', 'stringify'],
          '%MapPrototype%': ['Map', 'prototype'],
          '%NumberPrototype%': ['Number', 'prototype'],
          '%ObjectPrototype%': ['Object', 'prototype'],
          '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
          '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
          '%PromisePrototype%': ['Promise', 'prototype'],
          '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
          '%Promise_all%': ['Promise', 'all'],
          '%Promise_reject%': ['Promise', 'reject'],
          '%Promise_resolve%': ['Promise', 'resolve'],
          '%RangeErrorPrototype%': ['RangeError', 'prototype'],
          '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
          '%RegExpPrototype%': ['RegExp', 'prototype'],
          '%SetPrototype%': ['Set', 'prototype'],
          '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
          '%StringPrototype%': ['String', 'prototype'],
          '%SymbolPrototype%': ['Symbol', 'prototype'],
          '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
          '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
          '%TypeErrorPrototype%': ['TypeError', 'prototype'],
          '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
          '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
          '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
          '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
          '%URIErrorPrototype%': ['URIError', 'prototype'],
          '%WeakMapPrototype%': ['WeakMap', 'prototype'],
          '%WeakSetPrototype%': ['WeakSet', 'prototype'],
        },
        Pr = Mn(),
        $n = uh(),
        wT = Pr.call(Function.call, Array.prototype.concat),
        BT = Pr.call(Function.apply, Array.prototype.splice),
        ch = Pr.call(Function.call, String.prototype.replace),
        Un = Pr.call(Function.call, String.prototype.slice),
        TT = Pr.call(Function.call, RegExp.prototype.exec),
        _T =
          /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        OT = /\\(\\)?/g,
        RT = function (t) {
          var r = Un(t, 0, 1),
            n = Un(t, -1);
          if (r === '%' && n !== '%')
            throw new Wt('invalid intrinsic syntax, expected closing `%`');
          if (n === '%' && r !== '%')
            throw new Wt('invalid intrinsic syntax, expected opening `%`');
          var a = [];
          return (
            ch(t, _T, function (o, i, u, s) {
              a[a.length] = u ? ch(s, OT, '$1') : i || o;
            }),
            a
          );
        },
        PT = function (t, r) {
          var n = t,
            a;
          if (($n(lh, n) && ((a = lh[n]), (n = '%' + a[0] + '%')), $n(Dt, n))) {
            var o = Dt[n];
            if ((o === Ht && (o = FT(n)), typeof o > 'u' && !r))
              throw new Gt(
                'intrinsic ' +
                  t +
                  ' exists, but is not available. Please file an issue!'
              );
            return { alias: a, name: n, value: o };
          }
          throw new Wt('intrinsic ' + t + ' does not exist!');
        };
      ph.exports = function (t, r) {
        if (typeof t != 'string' || t.length === 0)
          throw new Gt('intrinsic name must be a non-empty string');
        if (arguments.length > 1 && typeof r != 'boolean')
          throw new Gt('"allowMissing" argument must be a boolean');
        if (TT(/^%?[^%]*%?$/, t) === null)
          throw new Wt(
            '`%` may not be present anywhere but at the beginning and end of the intrinsic name'
          );
        var n = RT(t),
          a = n.length > 0 ? n[0] : '',
          o = PT('%' + a + '%', r),
          i = o.name,
          u = o.value,
          s = !1,
          p = o.alias;
        p && ((a = p[0]), BT(n, wT([0, 1], p)));
        for (var y = 1, A = !0; y < n.length; y += 1) {
          var m = n[y],
            h = Un(m, 0, 1),
            E = Un(m, -1);
          if (
            (h === '"' ||
              h === "'" ||
              h === '`' ||
              E === '"' ||
              E === "'" ||
              E === '`') &&
            h !== E
          )
            throw new Wt(
              'property names with quotes must have matching quotes'
            );
          if (
            ((m === 'constructor' || !A) && (s = !0),
            (a += '.' + m),
            (i = '%' + a + '%'),
            $n(Dt, i))
          )
            u = Dt[i];
          else if (u != null) {
            if (!(m in u)) {
              if (!r)
                throw new Gt(
                  'base intrinsic for ' +
                    t +
                    ' exists, but the property is not available.'
                );
              return;
            }
            if (vt && y + 1 >= n.length) {
              var b = vt(u, m);
              (A = !!b),
                A && 'get' in b && !('originalValue' in b.get)
                  ? (u = b.get)
                  : (u = u[m]);
            } else (A = $n(u, m)), (u = u[m]);
            A && !s && (Dt[i] = u);
          }
        }
        return u;
      };
    });
    var Jo = S((pX, fh) => {
      'use strict';
      l();
      c();
      d();
      var IT = ut(),
        Ko = IT('%Object.defineProperty%', !0),
        Yo = function () {
          if (Ko)
            try {
              return Ko({}, 'a', { value: 1 }), !0;
            } catch {
              return !1;
            }
          return !1;
        };
      Yo.hasArrayLengthDefineBug = function () {
        if (!Yo()) return null;
        try {
          return Ko([], 'length', { value: 1 }).length !== 1;
        } catch {
          return !0;
        }
      };
      fh.exports = Yo;
    });
    var Xo = S((gX, hh) => {
      'use strict';
      l();
      c();
      d();
      var kT = ut(),
        zn = kT('%Object.getOwnPropertyDescriptor%', !0);
      if (zn)
        try {
          zn([], 'length');
        } catch {
          zn = null;
        }
      hh.exports = zn;
    });
    var yh = S((AX, gh) => {
      'use strict';
      l();
      c();
      d();
      var NT = Jo()(),
        Qo = ut(),
        Ir = NT && Qo('%Object.defineProperty%', !0);
      if (Ir)
        try {
          Ir({}, 'a', { value: 1 });
        } catch {
          Ir = !1;
        }
      var LT = Qo('%SyntaxError%'),
        Vt = Qo('%TypeError%'),
        mh = Xo();
      gh.exports = function (t, r, n) {
        if (!t || (typeof t != 'object' && typeof t != 'function'))
          throw new Vt('`obj` must be an object or a function`');
        if (typeof r != 'string' && typeof r != 'symbol')
          throw new Vt('`property` must be a string or a symbol`');
        if (
          arguments.length > 3 &&
          typeof arguments[3] != 'boolean' &&
          arguments[3] !== null
        )
          throw new Vt(
            '`nonEnumerable`, if provided, must be a boolean or null'
          );
        if (
          arguments.length > 4 &&
          typeof arguments[4] != 'boolean' &&
          arguments[4] !== null
        )
          throw new Vt('`nonWritable`, if provided, must be a boolean or null');
        if (
          arguments.length > 5 &&
          typeof arguments[5] != 'boolean' &&
          arguments[5] !== null
        )
          throw new Vt(
            '`nonConfigurable`, if provided, must be a boolean or null'
          );
        if (arguments.length > 6 && typeof arguments[6] != 'boolean')
          throw new Vt('`loose`, if provided, must be a boolean');
        var a = arguments.length > 3 ? arguments[3] : null,
          o = arguments.length > 4 ? arguments[4] : null,
          i = arguments.length > 5 ? arguments[5] : null,
          u = arguments.length > 6 ? arguments[6] : !1,
          s = !!mh && mh(t, r);
        if (Ir)
          Ir(t, r, {
            configurable: i === null && s ? s.configurable : !i,
            enumerable: a === null && s ? s.enumerable : !a,
            value: n,
            writable: o === null && s ? s.writable : !o,
          });
        else if (u || (!a && !o && !i)) t[r] = n;
        else
          throw new LT(
            'This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.'
          );
      };
    });
    var Ch = S((xX, Dh) => {
      'use strict';
      l();
      c();
      d();
      var vh = ut(),
        bh = yh(),
        qT = Jo()(),
        Eh = Xo(),
        Ah = vh('%TypeError%'),
        jT = vh('%Math.floor%');
      Dh.exports = function (t, r) {
        if (typeof t != 'function') throw new Ah('`fn` is not a function');
        if (typeof r != 'number' || r < 0 || r > 4294967295 || jT(r) !== r)
          throw new Ah('`length` must be a positive 32-bit integer');
        var n = arguments.length > 2 && !!arguments[2],
          a = !0,
          o = !0;
        if ('length' in t && Eh) {
          var i = Eh(t, 'length');
          i && !i.configurable && (a = !1), i && !i.writable && (o = !1);
        }
        return (
          (a || o || !n) &&
            (qT ? bh(t, 'length', r, !0, !0) : bh(t, 'length', r)),
          t
        );
      };
    });
    var Bh = S((BX, Hn) => {
      'use strict';
      l();
      c();
      d();
      var Zo = Mn(),
        Kt = ut(),
        MT = Ch(),
        $T = Kt('%TypeError%'),
        Sh = Kt('%Function.prototype.apply%'),
        Fh = Kt('%Function.prototype.call%'),
        wh = Kt('%Reflect.apply%', !0) || Zo.call(Fh, Sh),
        kr = Kt('%Object.defineProperty%', !0),
        UT = Kt('%Math.max%');
      if (kr)
        try {
          kr({}, 'a', { value: 1 });
        } catch {
          kr = null;
        }
      Hn.exports = function (t) {
        if (typeof t != 'function') throw new $T('a function is required');
        var r = wh(Zo, Fh, arguments);
        return MT(r, 1 + UT(0, t.length - (arguments.length - 1)), !0);
      };
      var xh = function () {
        return wh(Zo, Sh, arguments);
      };
      kr ? kr(Hn.exports, 'apply', { value: xh }) : (Hn.exports.apply = xh);
    });
    var Rh = S((RX, Oh) => {
      'use strict';
      l();
      c();
      d();
      var Th = ut(),
        _h = Bh(),
        zT = _h(Th('String.prototype.indexOf'));
      Oh.exports = function (t, r) {
        var n = Th(t, !!r);
        return typeof n == 'function' && zT(t, '.prototype.') > -1 ? _h(n) : n;
      };
    });
    var Ph = S(() => {
      l();
      c();
      d();
    });
    var Zh = S(($X, Qh) => {
      l();
      c();
      d();
      var li = typeof Map == 'function' && Map.prototype,
        ei =
          Object.getOwnPropertyDescriptor && li
            ? Object.getOwnPropertyDescriptor(Map.prototype, 'size')
            : null,
        Wn = li && ei && typeof ei.get == 'function' ? ei.get : null,
        Ih = li && Map.prototype.forEach,
        ci = typeof Set == 'function' && Set.prototype,
        ti =
          Object.getOwnPropertyDescriptor && ci
            ? Object.getOwnPropertyDescriptor(Set.prototype, 'size')
            : null,
        Vn = ci && ti && typeof ti.get == 'function' ? ti.get : null,
        kh = ci && Set.prototype.forEach,
        HT = typeof WeakMap == 'function' && WeakMap.prototype,
        Lr = HT ? WeakMap.prototype.has : null,
        GT = typeof WeakSet == 'function' && WeakSet.prototype,
        qr = GT ? WeakSet.prototype.has : null,
        WT = typeof WeakRef == 'function' && WeakRef.prototype,
        Nh = WT ? WeakRef.prototype.deref : null,
        VT = Boolean.prototype.valueOf,
        KT = Object.prototype.toString,
        YT = Function.prototype.toString,
        JT = String.prototype.match,
        di = String.prototype.slice,
        lt = String.prototype.replace,
        XT = String.prototype.toUpperCase,
        Lh = String.prototype.toLowerCase,
        Wh = RegExp.prototype.test,
        qh = Array.prototype.concat,
        Ge = Array.prototype.join,
        QT = Array.prototype.slice,
        jh = Math.floor,
        ai = typeof BigInt == 'function' ? BigInt.prototype.valueOf : null,
        ri = Object.getOwnPropertySymbols,
        oi =
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? Symbol.prototype.toString
            : null,
        Yt = typeof Symbol == 'function' && typeof Symbol.iterator == 'object',
        xe =
          typeof Symbol == 'function' &&
          Symbol.toStringTag &&
          (typeof Symbol.toStringTag === Yt || 'symbol')
            ? Symbol.toStringTag
            : null,
        Vh = Object.prototype.propertyIsEnumerable,
        Mh =
          (typeof Reflect == 'function'
            ? Reflect.getPrototypeOf
            : Object.getPrototypeOf) ||
          ([].__proto__ === Array.prototype
            ? function (e) {
                return e.__proto__;
              }
            : null);
      function $h(e, t) {
        if (
          e === 1 / 0 ||
          e === -1 / 0 ||
          e !== e ||
          (e && e > -1e3 && e < 1e3) ||
          Wh.call(/e/, t)
        )
          return t;
        var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
        if (typeof e == 'number') {
          var n = e < 0 ? -jh(-e) : jh(e);
          if (n !== e) {
            var a = String(n),
              o = di.call(t, a.length + 1);
            return (
              lt.call(a, r, '$&_') +
              '.' +
              lt.call(lt.call(o, /([0-9]{3})/g, '$&_'), /_$/, '')
            );
          }
        }
        return lt.call(t, r, '$&_');
      }
      var ii = Ph(),
        Uh = ii.custom,
        zh = Yh(Uh) ? Uh : null;
      Qh.exports = function e(t, r, n, a) {
        var o = r || {};
        if (
          st(o, 'quoteStyle') &&
          o.quoteStyle !== 'single' &&
          o.quoteStyle !== 'double'
        )
          throw new TypeError(
            'option "quoteStyle" must be "single" or "double"'
          );
        if (
          st(o, 'maxStringLength') &&
          (typeof o.maxStringLength == 'number'
            ? o.maxStringLength < 0 && o.maxStringLength !== 1 / 0
            : o.maxStringLength !== null)
        )
          throw new TypeError(
            'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
          );
        var i = st(o, 'customInspect') ? o.customInspect : !0;
        if (typeof i != 'boolean' && i !== 'symbol')
          throw new TypeError(
            'option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`'
          );
        if (
          st(o, 'indent') &&
          o.indent !== null &&
          o.indent !== '	' &&
          !(parseInt(o.indent, 10) === o.indent && o.indent > 0)
        )
          throw new TypeError(
            'option "indent" must be "\\t", an integer > 0, or `null`'
          );
        if (st(o, 'numericSeparator') && typeof o.numericSeparator != 'boolean')
          throw new TypeError(
            'option "numericSeparator", if provided, must be `true` or `false`'
          );
        var u = o.numericSeparator;
        if (typeof t > 'u') return 'undefined';
        if (t === null) return 'null';
        if (typeof t == 'boolean') return t ? 'true' : 'false';
        if (typeof t == 'string') return Xh(t, o);
        if (typeof t == 'number') {
          if (t === 0) return 1 / 0 / t > 0 ? '0' : '-0';
          var s = String(t);
          return u ? $h(t, s) : s;
        }
        if (typeof t == 'bigint') {
          var p = String(t) + 'n';
          return u ? $h(t, p) : p;
        }
        var y = typeof o.depth > 'u' ? 5 : o.depth;
        if (
          (typeof n > 'u' && (n = 0), n >= y && y > 0 && typeof t == 'object')
        )
          return ui(t) ? '[Array]' : '[Object]';
        var A = g8(o, n);
        if (typeof a > 'u') a = [];
        else if (Jh(a, t) >= 0) return '[Circular]';
        function m(Y, R, _) {
          if ((R && ((a = QT.call(a)), a.push(R)), _)) {
            var M = { depth: o.depth };
            return (
              st(o, 'quoteStyle') && (M.quoteStyle = o.quoteStyle),
              e(Y, M, n + 1, a)
            );
          }
          return e(Y, o, n + 1, a);
        }
        if (typeof t == 'function' && !Hh(t)) {
          var h = u8(t),
            E = Gn(t, m);
          return (
            '[Function' +
            (h ? ': ' + h : ' (anonymous)') +
            ']' +
            (E.length > 0 ? ' { ' + Ge.call(E, ', ') + ' }' : '')
          );
        }
        if (Yh(t)) {
          var b = Yt
            ? lt.call(String(t), /^(Symbol\(.*\))_[^)]*$/, '$1')
            : oi.call(t);
          return typeof t == 'object' && !Yt ? Nr(b) : b;
        }
        if (f8(t)) {
          for (
            var x = '<' + Lh.call(String(t.nodeName)),
              F = t.attributes || [],
              B = 0;
            B < F.length;
            B++
          )
            x += ' ' + F[B].name + '=' + Kh(ZT(F[B].value), 'double', o);
          return (
            (x += '>'),
            t.childNodes && t.childNodes.length && (x += '...'),
            (x += '</' + Lh.call(String(t.nodeName)) + '>'),
            x
          );
        }
        if (ui(t)) {
          if (t.length === 0) return '[]';
          var I = Gn(t, m);
          return A && !m8(I)
            ? '[' + si(I, A) + ']'
            : '[ ' + Ge.call(I, ', ') + ' ]';
        }
        if (t8(t)) {
          var q = Gn(t, m);
          return !('cause' in Error.prototype) &&
            'cause' in t &&
            !Vh.call(t, 'cause')
            ? '{ [' +
                String(t) +
                '] ' +
                Ge.call(qh.call('[cause]: ' + m(t.cause), q), ', ') +
                ' }'
            : q.length === 0
              ? '[' + String(t) + ']'
              : '{ [' + String(t) + '] ' + Ge.call(q, ', ') + ' }';
        }
        if (typeof t == 'object' && i) {
          if (zh && typeof t[zh] == 'function' && ii)
            return ii(t, { depth: y - n });
          if (i !== 'symbol' && typeof t.inspect == 'function')
            return t.inspect();
        }
        if (s8(t)) {
          var w = [];
          return (
            Ih &&
              Ih.call(t, function (Y, R) {
                w.push(m(R, t, !0) + ' => ' + m(Y, t));
              }),
            Gh('Map', Wn.call(t), w, A)
          );
        }
        if (d8(t)) {
          var N = [];
          return (
            kh &&
              kh.call(t, function (Y) {
                N.push(m(Y, t));
              }),
            Gh('Set', Vn.call(t), N, A)
          );
        }
        if (l8(t)) return ni('WeakMap');
        if (p8(t)) return ni('WeakSet');
        if (c8(t)) return ni('WeakRef');
        if (n8(t)) return Nr(m(Number(t)));
        if (o8(t)) return Nr(m(ai.call(t)));
        if (a8(t)) return Nr(VT.call(t));
        if (r8(t)) return Nr(m(String(t)));
        if (typeof window < 'u' && t === window) return '{ [object Window] }';
        if (t === window) return '{ [object globalThis] }';
        if (!e8(t) && !Hh(t)) {
          var k = Gn(t, m),
            z = Mh
              ? Mh(t) === Object.prototype
              : t instanceof Object || t.constructor === Object,
            V = t instanceof Object ? '' : 'null prototype',
            U =
              !z && xe && Object(t) === t && xe in t
                ? di.call(ct(t), 8, -1)
                : V
                  ? 'Object'
                  : '',
            ne =
              z || typeof t.constructor != 'function'
                ? ''
                : t.constructor.name
                  ? t.constructor.name + ' '
                  : '',
            Q =
              ne +
              (U || V
                ? '[' + Ge.call(qh.call([], U || [], V || []), ': ') + '] '
                : '');
          return k.length === 0
            ? Q + '{}'
            : A
              ? Q + '{' + si(k, A) + '}'
              : Q + '{ ' + Ge.call(k, ', ') + ' }';
        }
        return String(t);
      };
      function Kh(e, t, r) {
        var n = (r.quoteStyle || t) === 'double' ? '"' : "'";
        return n + e + n;
      }
      function ZT(e) {
        return lt.call(String(e), /"/g, '&quot;');
      }
      function ui(e) {
        return (
          ct(e) === '[object Array]' &&
          (!xe || !(typeof e == 'object' && xe in e))
        );
      }
      function e8(e) {
        return (
          ct(e) === '[object Date]' &&
          (!xe || !(typeof e == 'object' && xe in e))
        );
      }
      function Hh(e) {
        return (
          ct(e) === '[object RegExp]' &&
          (!xe || !(typeof e == 'object' && xe in e))
        );
      }
      function t8(e) {
        return (
          ct(e) === '[object Error]' &&
          (!xe || !(typeof e == 'object' && xe in e))
        );
      }
      function r8(e) {
        return (
          ct(e) === '[object String]' &&
          (!xe || !(typeof e == 'object' && xe in e))
        );
      }
      function n8(e) {
        return (
          ct(e) === '[object Number]' &&
          (!xe || !(typeof e == 'object' && xe in e))
        );
      }
      function a8(e) {
        return (
          ct(e) === '[object Boolean]' &&
          (!xe || !(typeof e == 'object' && xe in e))
        );
      }
      function Yh(e) {
        if (Yt) return e && typeof e == 'object' && e instanceof Symbol;
        if (typeof e == 'symbol') return !0;
        if (!e || typeof e != 'object' || !oi) return !1;
        try {
          return oi.call(e), !0;
        } catch {}
        return !1;
      }
      function o8(e) {
        if (!e || typeof e != 'object' || !ai) return !1;
        try {
          return ai.call(e), !0;
        } catch {}
        return !1;
      }
      var i8 =
        Object.prototype.hasOwnProperty ||
        function (e) {
          return e in this;
        };
      function st(e, t) {
        return i8.call(e, t);
      }
      function ct(e) {
        return KT.call(e);
      }
      function u8(e) {
        if (e.name) return e.name;
        var t = JT.call(YT.call(e), /^function\s*([\w$]+)/);
        return t ? t[1] : null;
      }
      function Jh(e, t) {
        if (e.indexOf) return e.indexOf(t);
        for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
        return -1;
      }
      function s8(e) {
        if (!Wn || !e || typeof e != 'object') return !1;
        try {
          Wn.call(e);
          try {
            Vn.call(e);
          } catch {
            return !0;
          }
          return e instanceof Map;
        } catch {}
        return !1;
      }
      function l8(e) {
        if (!Lr || !e || typeof e != 'object') return !1;
        try {
          Lr.call(e, Lr);
          try {
            qr.call(e, qr);
          } catch {
            return !0;
          }
          return e instanceof WeakMap;
        } catch {}
        return !1;
      }
      function c8(e) {
        if (!Nh || !e || typeof e != 'object') return !1;
        try {
          return Nh.call(e), !0;
        } catch {}
        return !1;
      }
      function d8(e) {
        if (!Vn || !e || typeof e != 'object') return !1;
        try {
          Vn.call(e);
          try {
            Wn.call(e);
          } catch {
            return !0;
          }
          return e instanceof Set;
        } catch {}
        return !1;
      }
      function p8(e) {
        if (!qr || !e || typeof e != 'object') return !1;
        try {
          qr.call(e, qr);
          try {
            Lr.call(e, Lr);
          } catch {
            return !0;
          }
          return e instanceof WeakSet;
        } catch {}
        return !1;
      }
      function f8(e) {
        return !e || typeof e != 'object'
          ? !1
          : typeof HTMLElement < 'u' && e instanceof HTMLElement
            ? !0
            : typeof e.nodeName == 'string' &&
              typeof e.getAttribute == 'function';
      }
      function Xh(e, t) {
        if (e.length > t.maxStringLength) {
          var r = e.length - t.maxStringLength,
            n = '... ' + r + ' more character' + (r > 1 ? 's' : '');
          return Xh(di.call(e, 0, t.maxStringLength), t) + n;
        }
        var a = lt.call(lt.call(e, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, h8);
        return Kh(a, 'single', t);
      }
      function h8(e) {
        var t = e.charCodeAt(0),
          r = { 8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r' }[t];
        return r
          ? '\\' + r
          : '\\x' + (t < 16 ? '0' : '') + XT.call(t.toString(16));
      }
      function Nr(e) {
        return 'Object(' + e + ')';
      }
      function ni(e) {
        return e + ' { ? }';
      }
      function Gh(e, t, r, n) {
        var a = n ? si(r, n) : Ge.call(r, ', ');
        return e + ' (' + t + ') {' + a + '}';
      }
      function m8(e) {
        for (var t = 0; t < e.length; t++)
          if (
            Jh(
              e[t],
              `
`
            ) >= 0
          )
            return !1;
        return !0;
      }
      function g8(e, t) {
        var r;
        if (e.indent === '	') r = '	';
        else if (typeof e.indent == 'number' && e.indent > 0)
          r = Ge.call(Array(e.indent + 1), ' ');
        else return null;
        return { base: r, prev: Ge.call(Array(t + 1), r) };
      }
      function si(e, t) {
        if (e.length === 0) return '';
        var r =
          `
` +
          t.prev +
          t.base;
        return (
          r +
          Ge.call(e, ',' + r) +
          `
` +
          t.prev
        );
      }
      function Gn(e, t) {
        var r = ui(e),
          n = [];
        if (r) {
          n.length = e.length;
          for (var a = 0; a < e.length; a++) n[a] = st(e, a) ? t(e[a], e) : '';
        }
        var o = typeof ri == 'function' ? ri(e) : [],
          i;
        if (Yt) {
          i = {};
          for (var u = 0; u < o.length; u++) i['$' + o[u]] = o[u];
        }
        for (var s in e)
          st(e, s) &&
            ((r && String(Number(s)) === s && s < e.length) ||
              (Yt && i['$' + s] instanceof Symbol) ||
              (Wh.call(/[^\w$]/, s)
                ? n.push(t(s, e) + ': ' + t(e[s], e))
                : n.push(s + ': ' + t(e[s], e))));
        if (typeof ri == 'function')
          for (var p = 0; p < o.length; p++)
            Vh.call(e, o[p]) && n.push('[' + t(o[p]) + ']: ' + t(e[o[p]], e));
        return n;
      }
    });
    var tm = S((GX, em) => {
      'use strict';
      l();
      c();
      d();
      var pi = ut(),
        Jt = Rh(),
        y8 = Zh(),
        b8 = pi('%TypeError%'),
        Kn = pi('%WeakMap%', !0),
        Yn = pi('%Map%', !0),
        E8 = Jt('WeakMap.prototype.get', !0),
        A8 = Jt('WeakMap.prototype.set', !0),
        v8 = Jt('WeakMap.prototype.has', !0),
        D8 = Jt('Map.prototype.get', !0),
        C8 = Jt('Map.prototype.set', !0),
        x8 = Jt('Map.prototype.has', !0),
        fi = function (e, t) {
          for (var r = e, n; (n = r.next) !== null; r = n)
            if (n.key === t)
              return (r.next = n.next), (n.next = e.next), (e.next = n), n;
        },
        S8 = function (e, t) {
          var r = fi(e, t);
          return r && r.value;
        },
        F8 = function (e, t, r) {
          var n = fi(e, t);
          n ? (n.value = r) : (e.next = { key: t, next: e.next, value: r });
        },
        w8 = function (e, t) {
          return !!fi(e, t);
        };
      em.exports = function () {
        var t,
          r,
          n,
          a = {
            assert: function (o) {
              if (!a.has(o))
                throw new b8('Side channel does not contain ' + y8(o));
            },
            get: function (o) {
              if (Kn && o && (typeof o == 'object' || typeof o == 'function')) {
                if (t) return E8(t, o);
              } else if (Yn) {
                if (r) return D8(r, o);
              } else if (n) return S8(n, o);
            },
            has: function (o) {
              if (Kn && o && (typeof o == 'object' || typeof o == 'function')) {
                if (t) return v8(t, o);
              } else if (Yn) {
                if (r) return x8(r, o);
              } else if (n) return w8(n, o);
              return !1;
            },
            set: function (o, i) {
              Kn && o && (typeof o == 'object' || typeof o == 'function')
                ? (t || (t = new Kn()), A8(t, o, i))
                : Yn
                  ? (r || (r = new Yn()), C8(r, o, i))
                  : (n || (n = { key: {}, next: null }), F8(n, o, i));
            },
          };
        return a;
      };
    });
    var Jn = S((YX, rm) => {
      'use strict';
      l();
      c();
      d();
      var B8 = String.prototype.replace,
        T8 = /%20/g,
        hi = { RFC1738: 'RFC1738', RFC3986: 'RFC3986' };
      rm.exports = {
        default: hi.RFC3986,
        formatters: {
          RFC1738: function (e) {
            return B8.call(e, T8, '+');
          },
          RFC3986: function (e) {
            return String(e);
          },
        },
        RFC1738: hi.RFC1738,
        RFC3986: hi.RFC3986,
      };
    });
    var gi = S((ZX, am) => {
      'use strict';
      l();
      c();
      d();
      var _8 = Jn(),
        mi = Object.prototype.hasOwnProperty,
        Ct = Array.isArray,
        We = (function () {
          for (var e = [], t = 0; t < 256; ++t)
            e.push('%' + ((t < 16 ? '0' : '') + t.toString(16)).toUpperCase());
          return e;
        })(),
        O8 = function (t) {
          for (; t.length > 1; ) {
            var r = t.pop(),
              n = r.obj[r.prop];
            if (Ct(n)) {
              for (var a = [], o = 0; o < n.length; ++o)
                typeof n[o] < 'u' && a.push(n[o]);
              r.obj[r.prop] = a;
            }
          }
        },
        nm = function (t, r) {
          for (
            var n = r && r.plainObjects ? Object.create(null) : {}, a = 0;
            a < t.length;
            ++a
          )
            typeof t[a] < 'u' && (n[a] = t[a]);
          return n;
        },
        R8 = function e(t, r, n) {
          if (!r) return t;
          if (typeof r != 'object') {
            if (Ct(t)) t.push(r);
            else if (t && typeof t == 'object')
              ((n && (n.plainObjects || n.allowPrototypes)) ||
                !mi.call(Object.prototype, r)) &&
                (t[r] = !0);
            else return [t, r];
            return t;
          }
          if (!t || typeof t != 'object') return [t].concat(r);
          var a = t;
          return (
            Ct(t) && !Ct(r) && (a = nm(t, n)),
            Ct(t) && Ct(r)
              ? (r.forEach(function (o, i) {
                  if (mi.call(t, i)) {
                    var u = t[i];
                    u && typeof u == 'object' && o && typeof o == 'object'
                      ? (t[i] = e(u, o, n))
                      : t.push(o);
                  } else t[i] = o;
                }),
                t)
              : Object.keys(r).reduce(function (o, i) {
                  var u = r[i];
                  return mi.call(o, i) ? (o[i] = e(o[i], u, n)) : (o[i] = u), o;
                }, a)
          );
        },
        P8 = function (t, r) {
          return Object.keys(r).reduce(function (n, a) {
            return (n[a] = r[a]), n;
          }, t);
        },
        I8 = function (e, t, r) {
          var n = e.replace(/\+/g, ' ');
          if (r === 'iso-8859-1') return n.replace(/%[0-9a-f]{2}/gi, unescape);
          try {
            return decodeURIComponent(n);
          } catch {
            return n;
          }
        },
        k8 = function (t, r, n, a, o) {
          if (t.length === 0) return t;
          var i = t;
          if (
            (typeof t == 'symbol'
              ? (i = Symbol.prototype.toString.call(t))
              : typeof t != 'string' && (i = String(t)),
            n === 'iso-8859-1')
          )
            return escape(i).replace(/%u[0-9a-f]{4}/gi, function (y) {
              return '%26%23' + parseInt(y.slice(2), 16) + '%3B';
            });
          for (var u = '', s = 0; s < i.length; ++s) {
            var p = i.charCodeAt(s);
            if (
              p === 45 ||
              p === 46 ||
              p === 95 ||
              p === 126 ||
              (p >= 48 && p <= 57) ||
              (p >= 65 && p <= 90) ||
              (p >= 97 && p <= 122) ||
              (o === _8.RFC1738 && (p === 40 || p === 41))
            ) {
              u += i.charAt(s);
              continue;
            }
            if (p < 128) {
              u = u + We[p];
              continue;
            }
            if (p < 2048) {
              u = u + (We[192 | (p >> 6)] + We[128 | (p & 63)]);
              continue;
            }
            if (p < 55296 || p >= 57344) {
              u =
                u +
                (We[224 | (p >> 12)] +
                  We[128 | ((p >> 6) & 63)] +
                  We[128 | (p & 63)]);
              continue;
            }
            (s += 1),
              (p = 65536 + (((p & 1023) << 10) | (i.charCodeAt(s) & 1023))),
              (u +=
                We[240 | (p >> 18)] +
                We[128 | ((p >> 12) & 63)] +
                We[128 | ((p >> 6) & 63)] +
                We[128 | (p & 63)]);
          }
          return u;
        },
        N8 = function (t) {
          for (
            var r = [{ obj: { o: t }, prop: 'o' }], n = [], a = 0;
            a < r.length;
            ++a
          )
            for (
              var o = r[a], i = o.obj[o.prop], u = Object.keys(i), s = 0;
              s < u.length;
              ++s
            ) {
              var p = u[s],
                y = i[p];
              typeof y == 'object' &&
                y !== null &&
                n.indexOf(y) === -1 &&
                (r.push({ obj: i, prop: p }), n.push(y));
            }
          return O8(r), t;
        },
        L8 = function (t) {
          return Object.prototype.toString.call(t) === '[object RegExp]';
        },
        q8 = function (t) {
          return !t || typeof t != 'object'
            ? !1
            : !!(
                t.constructor &&
                t.constructor.isBuffer &&
                t.constructor.isBuffer(t)
              );
        },
        j8 = function (t, r) {
          return [].concat(t, r);
        },
        M8 = function (t, r) {
          if (Ct(t)) {
            for (var n = [], a = 0; a < t.length; a += 1) n.push(r(t[a]));
            return n;
          }
          return r(t);
        };
      am.exports = {
        arrayToObject: nm,
        assign: P8,
        combine: j8,
        compact: N8,
        decode: I8,
        encode: k8,
        isBuffer: q8,
        isRegExp: L8,
        maybeMap: M8,
        merge: R8,
      };
    });
    var cm = S((nQ, lm) => {
      'use strict';
      l();
      c();
      d();
      var um = tm(),
        bi = gi(),
        jr = Jn(),
        $8 = Object.prototype.hasOwnProperty,
        om = {
          brackets: function (t) {
            return t + '[]';
          },
          comma: 'comma',
          indices: function (t, r) {
            return t + '[' + r + ']';
          },
          repeat: function (t) {
            return t;
          },
        },
        Qe = Array.isArray,
        U8 = String.prototype.split,
        z8 = Array.prototype.push,
        sm = function (e, t) {
          z8.apply(e, Qe(t) ? t : [t]);
        },
        H8 = Date.prototype.toISOString,
        im = jr.default,
        De = {
          addQueryPrefix: !1,
          allowDots: !1,
          charset: 'utf-8',
          charsetSentinel: !1,
          delimiter: '&',
          encode: !0,
          encoder: bi.encode,
          encodeValuesOnly: !1,
          format: im,
          formatter: jr.formatters[im],
          indices: !1,
          serializeDate: function (t) {
            return H8.call(t);
          },
          skipNulls: !1,
          strictNullHandling: !1,
        },
        G8 = function (t) {
          return (
            typeof t == 'string' ||
            typeof t == 'number' ||
            typeof t == 'boolean' ||
            typeof t == 'symbol' ||
            typeof t == 'bigint'
          );
        },
        yi = {},
        W8 = function e(t, r, n, a, o, i, u, s, p, y, A, m, h, E, b, x) {
          for (
            var F = t, B = x, I = 0, q = !1;
            (B = B.get(yi)) !== void 0 && !q;

          ) {
            var w = B.get(t);
            if (((I += 1), typeof w < 'u')) {
              if (w === I) throw new RangeError('Cyclic object value');
              q = !0;
            }
            typeof B.get(yi) > 'u' && (I = 0);
          }
          if (
            (typeof s == 'function'
              ? (F = s(r, F))
              : F instanceof Date
                ? (F = A(F))
                : n === 'comma' &&
                  Qe(F) &&
                  (F = bi.maybeMap(F, function (K) {
                    return K instanceof Date ? A(K) : K;
                  })),
            F === null)
          ) {
            if (o) return u && !E ? u(r, De.encoder, b, 'key', m) : r;
            F = '';
          }
          if (G8(F) || bi.isBuffer(F)) {
            if (u) {
              var N = E ? r : u(r, De.encoder, b, 'key', m);
              if (n === 'comma' && E) {
                for (
                  var k = U8.call(String(F), ','), z = '', V = 0;
                  V < k.length;
                  ++V
                )
                  z +=
                    (V === 0 ? '' : ',') +
                    h(u(k[V], De.encoder, b, 'value', m));
                return [
                  h(N) + (a && Qe(F) && k.length === 1 ? '[]' : '') + '=' + z,
                ];
              }
              return [h(N) + '=' + h(u(F, De.encoder, b, 'value', m))];
            }
            return [h(r) + '=' + h(String(F))];
          }
          var U = [];
          if (typeof F > 'u') return U;
          var ne;
          if (n === 'comma' && Qe(F))
            ne = [{ value: F.length > 0 ? F.join(',') || null : void 0 }];
          else if (Qe(s)) ne = s;
          else {
            var Q = Object.keys(F);
            ne = p ? Q.sort(p) : Q;
          }
          for (
            var Y = a && Qe(F) && F.length === 1 ? r + '[]' : r, R = 0;
            R < ne.length;
            ++R
          ) {
            var _ = ne[R],
              M = typeof _ == 'object' && typeof _.value < 'u' ? _.value : F[_];
            if (!(i && M === null)) {
              var G = Qe(F)
                ? typeof n == 'function'
                  ? n(Y, _)
                  : Y
                : Y + (y ? '.' + _ : '[' + _ + ']');
              x.set(t, I);
              var J = um();
              J.set(yi, x),
                sm(U, e(M, G, n, a, o, i, u, s, p, y, A, m, h, E, b, J));
            }
          }
          return U;
        },
        V8 = function (t) {
          if (!t) return De;
          if (
            t.encoder !== null &&
            typeof t.encoder < 'u' &&
            typeof t.encoder != 'function'
          )
            throw new TypeError('Encoder has to be a function.');
          var r = t.charset || De.charset;
          if (
            typeof t.charset < 'u' &&
            t.charset !== 'utf-8' &&
            t.charset !== 'iso-8859-1'
          )
            throw new TypeError(
              'The charset option must be either utf-8, iso-8859-1, or undefined'
            );
          var n = jr.default;
          if (typeof t.format < 'u') {
            if (!$8.call(jr.formatters, t.format))
              throw new TypeError('Unknown format option provided.');
            n = t.format;
          }
          var a = jr.formatters[n],
            o = De.filter;
          return (
            (typeof t.filter == 'function' || Qe(t.filter)) && (o = t.filter),
            {
              addQueryPrefix:
                typeof t.addQueryPrefix == 'boolean'
                  ? t.addQueryPrefix
                  : De.addQueryPrefix,
              allowDots:
                typeof t.allowDots > 'u' ? De.allowDots : !!t.allowDots,
              charset: r,
              charsetSentinel:
                typeof t.charsetSentinel == 'boolean'
                  ? t.charsetSentinel
                  : De.charsetSentinel,
              delimiter: typeof t.delimiter > 'u' ? De.delimiter : t.delimiter,
              encode: typeof t.encode == 'boolean' ? t.encode : De.encode,
              encoder: typeof t.encoder == 'function' ? t.encoder : De.encoder,
              encodeValuesOnly:
                typeof t.encodeValuesOnly == 'boolean'
                  ? t.encodeValuesOnly
                  : De.encodeValuesOnly,
              filter: o,
              format: n,
              formatter: a,
              serializeDate:
                typeof t.serializeDate == 'function'
                  ? t.serializeDate
                  : De.serializeDate,
              skipNulls:
                typeof t.skipNulls == 'boolean' ? t.skipNulls : De.skipNulls,
              sort: typeof t.sort == 'function' ? t.sort : null,
              strictNullHandling:
                typeof t.strictNullHandling == 'boolean'
                  ? t.strictNullHandling
                  : De.strictNullHandling,
            }
          );
        };
      lm.exports = function (e, t) {
        var r = e,
          n = V8(t),
          a,
          o;
        typeof n.filter == 'function'
          ? ((o = n.filter), (r = o('', r)))
          : Qe(n.filter) && ((o = n.filter), (a = o));
        var i = [];
        if (typeof r != 'object' || r === null) return '';
        var u;
        t && t.arrayFormat in om
          ? (u = t.arrayFormat)
          : t && 'indices' in t
            ? (u = t.indices ? 'indices' : 'repeat')
            : (u = 'indices');
        var s = om[u];
        if (t && 'commaRoundTrip' in t && typeof t.commaRoundTrip != 'boolean')
          throw new TypeError('`commaRoundTrip` must be a boolean, or absent');
        var p = s === 'comma' && t && t.commaRoundTrip;
        a || (a = Object.keys(r)), n.sort && a.sort(n.sort);
        for (var y = um(), A = 0; A < a.length; ++A) {
          var m = a[A];
          (n.skipNulls && r[m] === null) ||
            sm(
              i,
              W8(
                r[m],
                m,
                s,
                p,
                n.strictNullHandling,
                n.skipNulls,
                n.encode ? n.encoder : null,
                n.filter,
                n.sort,
                n.allowDots,
                n.serializeDate,
                n.format,
                n.formatter,
                n.encodeValuesOnly,
                n.charset,
                y
              )
            );
        }
        var h = i.join(n.delimiter),
          E = n.addQueryPrefix === !0 ? '?' : '';
        return (
          n.charsetSentinel &&
            (n.charset === 'iso-8859-1'
              ? (E += 'utf8=%26%2310003%3B&')
              : (E += 'utf8=%E2%9C%93&')),
          h.length > 0 ? E + h : ''
        );
      };
    });
    var fm = S((uQ, pm) => {
      'use strict';
      l();
      c();
      d();
      var Xt = gi(),
        Ei = Object.prototype.hasOwnProperty,
        K8 = Array.isArray,
        Ae = {
          allowDots: !1,
          allowPrototypes: !1,
          allowSparse: !1,
          arrayLimit: 20,
          charset: 'utf-8',
          charsetSentinel: !1,
          comma: !1,
          decoder: Xt.decode,
          delimiter: '&',
          depth: 5,
          ignoreQueryPrefix: !1,
          interpretNumericEntities: !1,
          parameterLimit: 1e3,
          parseArrays: !0,
          plainObjects: !1,
          strictNullHandling: !1,
        },
        Y8 = function (e) {
          return e.replace(/&#(\d+);/g, function (t, r) {
            return String.fromCharCode(parseInt(r, 10));
          });
        },
        dm = function (e, t) {
          return e && typeof e == 'string' && t.comma && e.indexOf(',') > -1
            ? e.split(',')
            : e;
        },
        J8 = 'utf8=%26%2310003%3B',
        X8 = 'utf8=%E2%9C%93',
        Q8 = function (t, r) {
          var n = {},
            a = r.ignoreQueryPrefix ? t.replace(/^\?/, '') : t,
            o = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
            i = a.split(r.delimiter, o),
            u = -1,
            s,
            p = r.charset;
          if (r.charsetSentinel)
            for (s = 0; s < i.length; ++s)
              i[s].indexOf('utf8=') === 0 &&
                (i[s] === X8
                  ? (p = 'utf-8')
                  : i[s] === J8 && (p = 'iso-8859-1'),
                (u = s),
                (s = i.length));
          for (s = 0; s < i.length; ++s)
            if (s !== u) {
              var y = i[s],
                A = y.indexOf(']='),
                m = A === -1 ? y.indexOf('=') : A + 1,
                h,
                E;
              m === -1
                ? ((h = r.decoder(y, Ae.decoder, p, 'key')),
                  (E = r.strictNullHandling ? null : ''))
                : ((h = r.decoder(y.slice(0, m), Ae.decoder, p, 'key')),
                  (E = Xt.maybeMap(dm(y.slice(m + 1), r), function (b) {
                    return r.decoder(b, Ae.decoder, p, 'value');
                  }))),
                E &&
                  r.interpretNumericEntities &&
                  p === 'iso-8859-1' &&
                  (E = Y8(E)),
                y.indexOf('[]=') > -1 && (E = K8(E) ? [E] : E),
                Ei.call(n, h) ? (n[h] = Xt.combine(n[h], E)) : (n[h] = E);
            }
          return n;
        },
        Z8 = function (e, t, r, n) {
          for (var a = n ? t : dm(t, r), o = e.length - 1; o >= 0; --o) {
            var i,
              u = e[o];
            if (u === '[]' && r.parseArrays) i = [].concat(a);
            else {
              i = r.plainObjects ? Object.create(null) : {};
              var s =
                  u.charAt(0) === '[' && u.charAt(u.length - 1) === ']'
                    ? u.slice(1, -1)
                    : u,
                p = parseInt(s, 10);
              !r.parseArrays && s === ''
                ? (i = { 0: a })
                : !isNaN(p) &&
                    u !== s &&
                    String(p) === s &&
                    p >= 0 &&
                    r.parseArrays &&
                    p <= r.arrayLimit
                  ? ((i = []), (i[p] = a))
                  : s !== '__proto__' && (i[s] = a);
            }
            a = i;
          }
          return a;
        },
        e_ = function (t, r, n, a) {
          if (t) {
            var o = n.allowDots ? t.replace(/\.([^.[]+)/g, '[$1]') : t,
              i = /(\[[^[\]]*])/,
              u = /(\[[^[\]]*])/g,
              s = n.depth > 0 && i.exec(o),
              p = s ? o.slice(0, s.index) : o,
              y = [];
            if (p) {
              if (
                !n.plainObjects &&
                Ei.call(Object.prototype, p) &&
                !n.allowPrototypes
              )
                return;
              y.push(p);
            }
            for (
              var A = 0;
              n.depth > 0 && (s = u.exec(o)) !== null && A < n.depth;

            ) {
              if (
                ((A += 1),
                !n.plainObjects &&
                  Ei.call(Object.prototype, s[1].slice(1, -1)) &&
                  !n.allowPrototypes)
              )
                return;
              y.push(s[1]);
            }
            return s && y.push('[' + o.slice(s.index) + ']'), Z8(y, r, n, a);
          }
        },
        t_ = function (t) {
          if (!t) return Ae;
          if (
            t.decoder !== null &&
            t.decoder !== void 0 &&
            typeof t.decoder != 'function'
          )
            throw new TypeError('Decoder has to be a function.');
          if (
            typeof t.charset < 'u' &&
            t.charset !== 'utf-8' &&
            t.charset !== 'iso-8859-1'
          )
            throw new TypeError(
              'The charset option must be either utf-8, iso-8859-1, or undefined'
            );
          var r = typeof t.charset > 'u' ? Ae.charset : t.charset;
          return {
            allowDots: typeof t.allowDots > 'u' ? Ae.allowDots : !!t.allowDots,
            allowPrototypes:
              typeof t.allowPrototypes == 'boolean'
                ? t.allowPrototypes
                : Ae.allowPrototypes,
            allowSparse:
              typeof t.allowSparse == 'boolean'
                ? t.allowSparse
                : Ae.allowSparse,
            arrayLimit:
              typeof t.arrayLimit == 'number' ? t.arrayLimit : Ae.arrayLimit,
            charset: r,
            charsetSentinel:
              typeof t.charsetSentinel == 'boolean'
                ? t.charsetSentinel
                : Ae.charsetSentinel,
            comma: typeof t.comma == 'boolean' ? t.comma : Ae.comma,
            decoder: typeof t.decoder == 'function' ? t.decoder : Ae.decoder,
            delimiter:
              typeof t.delimiter == 'string' || Xt.isRegExp(t.delimiter)
                ? t.delimiter
                : Ae.delimiter,
            depth:
              typeof t.depth == 'number' || t.depth === !1
                ? +t.depth
                : Ae.depth,
            ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
            interpretNumericEntities:
              typeof t.interpretNumericEntities == 'boolean'
                ? t.interpretNumericEntities
                : Ae.interpretNumericEntities,
            parameterLimit:
              typeof t.parameterLimit == 'number'
                ? t.parameterLimit
                : Ae.parameterLimit,
            parseArrays: t.parseArrays !== !1,
            plainObjects:
              typeof t.plainObjects == 'boolean'
                ? t.plainObjects
                : Ae.plainObjects,
            strictNullHandling:
              typeof t.strictNullHandling == 'boolean'
                ? t.strictNullHandling
                : Ae.strictNullHandling,
          };
        };
      pm.exports = function (e, t) {
        var r = t_(t);
        if (e === '' || e === null || typeof e > 'u')
          return r.plainObjects ? Object.create(null) : {};
        for (
          var n = typeof e == 'string' ? Q8(e, r) : e,
            a = r.plainObjects ? Object.create(null) : {},
            o = Object.keys(n),
            i = 0;
          i < o.length;
          ++i
        ) {
          var u = o[i],
            s = e_(u, n[u], r, typeof e == 'string');
          a = Xt.merge(a, s, r);
        }
        return r.allowSparse === !0 ? a : Xt.compact(a);
      };
    });
    var Ai = S((dQ, hm) => {
      'use strict';
      l();
      c();
      d();
      var r_ = cm(),
        n_ = fm(),
        a_ = Jn();
      hm.exports = { formats: a_, parse: n_, stringify: r_ };
    });
    var Am = S((JZ, Em) => {
      l();
      c();
      d();
      (function () {
        'use strict';
        function e(i) {
          if (i == null) return !1;
          switch (i.type) {
            case 'ArrayExpression':
            case 'AssignmentExpression':
            case 'BinaryExpression':
            case 'CallExpression':
            case 'ConditionalExpression':
            case 'FunctionExpression':
            case 'Identifier':
            case 'Literal':
            case 'LogicalExpression':
            case 'MemberExpression':
            case 'NewExpression':
            case 'ObjectExpression':
            case 'SequenceExpression':
            case 'ThisExpression':
            case 'UnaryExpression':
            case 'UpdateExpression':
              return !0;
          }
          return !1;
        }
        function t(i) {
          if (i == null) return !1;
          switch (i.type) {
            case 'DoWhileStatement':
            case 'ForInStatement':
            case 'ForStatement':
            case 'WhileStatement':
              return !0;
          }
          return !1;
        }
        function r(i) {
          if (i == null) return !1;
          switch (i.type) {
            case 'BlockStatement':
            case 'BreakStatement':
            case 'ContinueStatement':
            case 'DebuggerStatement':
            case 'DoWhileStatement':
            case 'EmptyStatement':
            case 'ExpressionStatement':
            case 'ForInStatement':
            case 'ForStatement':
            case 'IfStatement':
            case 'LabeledStatement':
            case 'ReturnStatement':
            case 'SwitchStatement':
            case 'ThrowStatement':
            case 'TryStatement':
            case 'VariableDeclaration':
            case 'WhileStatement':
            case 'WithStatement':
              return !0;
          }
          return !1;
        }
        function n(i) {
          return r(i) || (i != null && i.type === 'FunctionDeclaration');
        }
        function a(i) {
          switch (i.type) {
            case 'IfStatement':
              return i.alternate != null ? i.alternate : i.consequent;
            case 'LabeledStatement':
            case 'ForStatement':
            case 'ForInStatement':
            case 'WhileStatement':
            case 'WithStatement':
              return i.body;
          }
          return null;
        }
        function o(i) {
          var u;
          if (i.type !== 'IfStatement' || i.alternate == null) return !1;
          u = i.consequent;
          do {
            if (u.type === 'IfStatement' && u.alternate == null) return !0;
            u = a(u);
          } while (u);
          return !1;
        }
        Em.exports = {
          isExpression: e,
          isStatement: r,
          isIterationStatement: t,
          isSourceElement: n,
          isProblematicIfStatement: o,
          trailingStatement: a,
        };
      })();
    });
    var vi = S((eee, vm) => {
      l();
      c();
      d();
      (function () {
        'use strict';
        var e, t, r, n, a, o;
        (t = {
          NonAsciiIdentifierStart:
            /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
          NonAsciiIdentifierPart:
            /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
        }),
          (e = {
            NonAsciiIdentifierStart:
              /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
            NonAsciiIdentifierPart:
              /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
          });
        function i(x) {
          return 48 <= x && x <= 57;
        }
        function u(x) {
          return (
            (48 <= x && x <= 57) ||
            (97 <= x && x <= 102) ||
            (65 <= x && x <= 70)
          );
        }
        function s(x) {
          return x >= 48 && x <= 55;
        }
        r = [
          5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201,
          8202, 8239, 8287, 12288, 65279,
        ];
        function p(x) {
          return (
            x === 32 ||
            x === 9 ||
            x === 11 ||
            x === 12 ||
            x === 160 ||
            (x >= 5760 && r.indexOf(x) >= 0)
          );
        }
        function y(x) {
          return x === 10 || x === 13 || x === 8232 || x === 8233;
        }
        function A(x) {
          if (x <= 65535) return String.fromCharCode(x);
          var F = String.fromCharCode(Math.floor((x - 65536) / 1024) + 55296),
            B = String.fromCharCode(((x - 65536) % 1024) + 56320);
          return F + B;
        }
        for (n = new Array(128), o = 0; o < 128; ++o)
          n[o] =
            (o >= 97 && o <= 122) ||
            (o >= 65 && o <= 90) ||
            o === 36 ||
            o === 95;
        for (a = new Array(128), o = 0; o < 128; ++o)
          a[o] =
            (o >= 97 && o <= 122) ||
            (o >= 65 && o <= 90) ||
            (o >= 48 && o <= 57) ||
            o === 36 ||
            o === 95;
        function m(x) {
          return x < 128 ? n[x] : t.NonAsciiIdentifierStart.test(A(x));
        }
        function h(x) {
          return x < 128 ? a[x] : t.NonAsciiIdentifierPart.test(A(x));
        }
        function E(x) {
          return x < 128 ? n[x] : e.NonAsciiIdentifierStart.test(A(x));
        }
        function b(x) {
          return x < 128 ? a[x] : e.NonAsciiIdentifierPart.test(A(x));
        }
        vm.exports = {
          isDecimalDigit: i,
          isHexDigit: u,
          isOctalDigit: s,
          isWhiteSpace: p,
          isLineTerminator: y,
          isIdentifierStartES5: m,
          isIdentifierPartES5: h,
          isIdentifierStartES6: E,
          isIdentifierPartES6: b,
        };
      })();
    });
    var Cm = S((aee, Dm) => {
      l();
      c();
      d();
      (function () {
        'use strict';
        var e = vi();
        function t(m) {
          switch (m) {
            case 'implements':
            case 'interface':
            case 'package':
            case 'private':
            case 'protected':
            case 'public':
            case 'static':
            case 'let':
              return !0;
            default:
              return !1;
          }
        }
        function r(m, h) {
          return !h && m === 'yield' ? !1 : n(m, h);
        }
        function n(m, h) {
          if (h && t(m)) return !0;
          switch (m.length) {
            case 2:
              return m === 'if' || m === 'in' || m === 'do';
            case 3:
              return m === 'var' || m === 'for' || m === 'new' || m === 'try';
            case 4:
              return (
                m === 'this' ||
                m === 'else' ||
                m === 'case' ||
                m === 'void' ||
                m === 'with' ||
                m === 'enum'
              );
            case 5:
              return (
                m === 'while' ||
                m === 'break' ||
                m === 'catch' ||
                m === 'throw' ||
                m === 'const' ||
                m === 'yield' ||
                m === 'class' ||
                m === 'super'
              );
            case 6:
              return (
                m === 'return' ||
                m === 'typeof' ||
                m === 'delete' ||
                m === 'switch' ||
                m === 'export' ||
                m === 'import'
              );
            case 7:
              return m === 'default' || m === 'finally' || m === 'extends';
            case 8:
              return m === 'function' || m === 'continue' || m === 'debugger';
            case 10:
              return m === 'instanceof';
            default:
              return !1;
          }
        }
        function a(m, h) {
          return m === 'null' || m === 'true' || m === 'false' || r(m, h);
        }
        function o(m, h) {
          return m === 'null' || m === 'true' || m === 'false' || n(m, h);
        }
        function i(m) {
          return m === 'eval' || m === 'arguments';
        }
        function u(m) {
          var h, E, b;
          if (
            m.length === 0 ||
            ((b = m.charCodeAt(0)), !e.isIdentifierStartES5(b))
          )
            return !1;
          for (h = 1, E = m.length; h < E; ++h)
            if (((b = m.charCodeAt(h)), !e.isIdentifierPartES5(b))) return !1;
          return !0;
        }
        function s(m, h) {
          return (m - 55296) * 1024 + (h - 56320) + 65536;
        }
        function p(m) {
          var h, E, b, x, F;
          if (m.length === 0) return !1;
          for (F = e.isIdentifierStartES6, h = 0, E = m.length; h < E; ++h) {
            if (((b = m.charCodeAt(h)), 55296 <= b && b <= 56319)) {
              if (
                (++h,
                h >= E || ((x = m.charCodeAt(h)), !(56320 <= x && x <= 57343)))
              )
                return !1;
              b = s(b, x);
            }
            if (!F(b)) return !1;
            F = e.isIdentifierPartES6;
          }
          return !0;
        }
        function y(m, h) {
          return u(m) && !a(m, h);
        }
        function A(m, h) {
          return p(m) && !o(m, h);
        }
        Dm.exports = {
          isKeywordES5: r,
          isKeywordES6: n,
          isReservedWordES5: a,
          isReservedWordES6: o,
          isRestrictedWord: i,
          isIdentifierNameES5: u,
          isIdentifierNameES6: p,
          isIdentifierES5: y,
          isIdentifierES6: A,
        };
      })();
    });
    var Di = S((Xn) => {
      l();
      c();
      d();
      (function () {
        'use strict';
        (Xn.ast = Am()), (Xn.code = vi()), (Xn.keyword = Cm());
      })();
    });
    var xm = S((pee, C_) => {
      C_.exports = {
        name: 'doctrine',
        description: 'JSDoc parser',
        homepage: 'https://github.com/eslint/doctrine',
        main: 'lib/doctrine.js',
        version: '3.0.0',
        engines: { node: '>=6.0.0' },
        directories: { lib: './lib' },
        files: ['lib'],
        maintainers: [
          {
            name: 'Nicholas C. Zakas',
            email: 'nicholas+npm@nczconsulting.com',
            web: 'https://www.nczonline.net',
          },
          {
            name: 'Yusuke Suzuki',
            email: 'utatane.tea@gmail.com',
            web: 'https://github.com/Constellation',
          },
        ],
        repository: 'eslint/doctrine',
        devDependencies: {
          coveralls: '^3.0.1',
          dateformat: '^1.0.11',
          eslint: '^1.10.3',
          'eslint-release': '^1.0.0',
          linefix: '^0.1.1',
          mocha: '^3.4.2',
          'npm-license': '^0.3.1',
          nyc: '^10.3.2',
          semver: '^5.0.3',
          shelljs: '^0.5.3',
          'shelljs-nodecli': '^0.1.1',
          should: '^5.0.1',
        },
        license: 'Apache-2.0',
        scripts: {
          pretest: 'npm run lint',
          test: 'nyc mocha',
          coveralls: 'nyc report --reporter=text-lcov | coveralls',
          lint: 'eslint lib/',
          'generate-release': 'eslint-generate-release',
          'generate-alpharelease': 'eslint-generate-prerelease alpha',
          'generate-betarelease': 'eslint-generate-prerelease beta',
          'generate-rcrelease': 'eslint-generate-prerelease rc',
          'publish-release': 'eslint-publish-release',
        },
        dependencies: { esutils: '^2.0.2' },
      };
    });
    var Fm = S((fee, Sm) => {
      l();
      c();
      d();
      function x_(e, t) {
        if (!e) throw new Error(t || 'unknown assertion error');
      }
      Sm.exports = x_;
    });
    var Ci = S((Mr) => {
      l();
      c();
      d();
      (function () {
        'use strict';
        var e;
        (e = xm().version), (Mr.VERSION = e);
        function t(n) {
          (this.name = 'DoctrineError'), (this.message = n);
        }
        (t.prototype = (function () {
          var n = function () {};
          return (n.prototype = Error.prototype), new n();
        })()),
          (t.prototype.constructor = t),
          (Mr.DoctrineError = t);
        function r(n) {
          throw new t(n);
        }
        (Mr.throwError = r), (Mr.assert = Fm());
      })();
    });
    var wm = S(($r) => {
      l();
      c();
      d();
      (function () {
        'use strict';
        var e, t, r, n, a, o, i, u, s, p, y, A;
        (s = Di()),
          (p = Ci()),
          (e = {
            NullableLiteral: 'NullableLiteral',
            AllLiteral: 'AllLiteral',
            NullLiteral: 'NullLiteral',
            UndefinedLiteral: 'UndefinedLiteral',
            VoidLiteral: 'VoidLiteral',
            UnionType: 'UnionType',
            ArrayType: 'ArrayType',
            RecordType: 'RecordType',
            FieldType: 'FieldType',
            FunctionType: 'FunctionType',
            ParameterType: 'ParameterType',
            RestType: 'RestType',
            NonNullableType: 'NonNullableType',
            OptionalType: 'OptionalType',
            NullableType: 'NullableType',
            NameExpression: 'NameExpression',
            TypeApplication: 'TypeApplication',
            StringLiteralType: 'StringLiteralType',
            NumericLiteralType: 'NumericLiteralType',
            BooleanLiteralType: 'BooleanLiteralType',
          }),
          (t = {
            ILLEGAL: 0,
            DOT_LT: 1,
            REST: 2,
            LT: 3,
            GT: 4,
            LPAREN: 5,
            RPAREN: 6,
            LBRACE: 7,
            RBRACE: 8,
            LBRACK: 9,
            RBRACK: 10,
            COMMA: 11,
            COLON: 12,
            STAR: 13,
            PIPE: 14,
            QUESTION: 15,
            BANG: 16,
            EQUAL: 17,
            NAME: 18,
            STRING: 19,
            NUMBER: 20,
            EOF: 21,
          });
        function m(T) {
          return (
            '><(){}[],:*|?!='.indexOf(String.fromCharCode(T)) === -1 &&
            !s.code.isWhiteSpace(T) &&
            !s.code.isLineTerminator(T)
          );
        }
        function h(T, P, L, O) {
          (this._previous = T),
            (this._index = P),
            (this._token = L),
            (this._value = O);
        }
        (h.prototype.restore = function () {
          (o = this._previous),
            (a = this._index),
            (i = this._token),
            (u = this._value);
        }),
          (h.save = function () {
            return new h(o, a, i, u);
          });
        function E(T, P) {
          return A && (T.range = [P[0] + y, P[1] + y]), T;
        }
        function b() {
          var T = r.charAt(a);
          return (a += 1), T;
        }
        function x(T) {
          var P,
            L,
            O,
            $ = 0;
          for (L = T === 'u' ? 4 : 2, P = 0; P < L; ++P)
            if (a < n && s.code.isHexDigit(r.charCodeAt(a)))
              (O = b()),
                ($ = $ * 16 + '0123456789abcdef'.indexOf(O.toLowerCase()));
            else return '';
          return String.fromCharCode($);
        }
        function F() {
          var T = '',
            P,
            L,
            O,
            $,
            H;
          for (P = r.charAt(a), ++a; a < n; )
            if (((L = b()), L === P)) {
              P = '';
              break;
            } else if (L === '\\')
              if (((L = b()), s.code.isLineTerminator(L.charCodeAt(0))))
                L === '\r' && r.charCodeAt(a) === 10 && ++a;
              else
                switch (L) {
                  case 'n':
                    T += `
`;
                    break;
                  case 'r':
                    T += '\r';
                    break;
                  case 't':
                    T += '	';
                    break;
                  case 'u':
                  case 'x':
                    (H = a), ($ = x(L)), $ ? (T += $) : ((a = H), (T += L));
                    break;
                  case 'b':
                    T += '\b';
                    break;
                  case 'f':
                    T += '\f';
                    break;
                  case 'v':
                    T += '\v';
                    break;
                  default:
                    s.code.isOctalDigit(L.charCodeAt(0))
                      ? ((O = '01234567'.indexOf(L)),
                        a < n &&
                          s.code.isOctalDigit(r.charCodeAt(a)) &&
                          ((O = O * 8 + '01234567'.indexOf(b())),
                          '0123'.indexOf(L) >= 0 &&
                            a < n &&
                            s.code.isOctalDigit(r.charCodeAt(a)) &&
                            (O = O * 8 + '01234567'.indexOf(b()))),
                        (T += String.fromCharCode(O)))
                      : (T += L);
                    break;
                }
            else {
              if (s.code.isLineTerminator(L.charCodeAt(0))) break;
              T += L;
            }
          return (
            P !== '' && p.throwError('unexpected quote'), (u = T), t.STRING
          );
        }
        function B() {
          var T, P;
          if (((T = ''), (P = r.charCodeAt(a)), P !== 46)) {
            if (((T = b()), (P = r.charCodeAt(a)), T === '0')) {
              if (P === 120 || P === 88) {
                for (
                  T += b();
                  a < n && ((P = r.charCodeAt(a)), !!s.code.isHexDigit(P));

                )
                  T += b();
                return (
                  T.length <= 2 && p.throwError('unexpected token'),
                  a < n &&
                    ((P = r.charCodeAt(a)),
                    s.code.isIdentifierStartES5(P) &&
                      p.throwError('unexpected token')),
                  (u = parseInt(T, 16)),
                  t.NUMBER
                );
              }
              if (s.code.isOctalDigit(P)) {
                for (
                  T += b();
                  a < n && ((P = r.charCodeAt(a)), !!s.code.isOctalDigit(P));

                )
                  T += b();
                return (
                  a < n &&
                    ((P = r.charCodeAt(a)),
                    (s.code.isIdentifierStartES5(P) ||
                      s.code.isDecimalDigit(P)) &&
                      p.throwError('unexpected token')),
                  (u = parseInt(T, 8)),
                  t.NUMBER
                );
              }
              s.code.isDecimalDigit(P) && p.throwError('unexpected token');
            }
            for (
              ;
              a < n && ((P = r.charCodeAt(a)), !!s.code.isDecimalDigit(P));

            )
              T += b();
          }
          if (P === 46)
            for (
              T += b();
              a < n && ((P = r.charCodeAt(a)), !!s.code.isDecimalDigit(P));

            )
              T += b();
          if (P === 101 || P === 69)
            if (
              ((T += b()),
              (P = r.charCodeAt(a)),
              (P === 43 || P === 45) && (T += b()),
              (P = r.charCodeAt(a)),
              s.code.isDecimalDigit(P))
            )
              for (
                T += b();
                a < n && ((P = r.charCodeAt(a)), !!s.code.isDecimalDigit(P));

              )
                T += b();
            else p.throwError('unexpected token');
          return (
            a < n &&
              ((P = r.charCodeAt(a)),
              s.code.isIdentifierStartES5(P) &&
                p.throwError('unexpected token')),
            (u = parseFloat(T)),
            t.NUMBER
          );
        }
        function I() {
          var T, P;
          for (u = b(); a < n && m(r.charCodeAt(a)); ) {
            if (((T = r.charCodeAt(a)), T === 46)) {
              if (a + 1 >= n) return t.ILLEGAL;
              if (((P = r.charCodeAt(a + 1)), P === 60)) break;
            }
            u += b();
          }
          return t.NAME;
        }
        function q() {
          var T;
          for (o = a; a < n && s.code.isWhiteSpace(r.charCodeAt(a)); ) b();
          if (a >= n) return (i = t.EOF), i;
          switch (((T = r.charCodeAt(a)), T)) {
            case 39:
            case 34:
              return (i = F()), i;
            case 58:
              return b(), (i = t.COLON), i;
            case 44:
              return b(), (i = t.COMMA), i;
            case 40:
              return b(), (i = t.LPAREN), i;
            case 41:
              return b(), (i = t.RPAREN), i;
            case 91:
              return b(), (i = t.LBRACK), i;
            case 93:
              return b(), (i = t.RBRACK), i;
            case 123:
              return b(), (i = t.LBRACE), i;
            case 125:
              return b(), (i = t.RBRACE), i;
            case 46:
              if (a + 1 < n) {
                if (((T = r.charCodeAt(a + 1)), T === 60))
                  return b(), b(), (i = t.DOT_LT), i;
                if (T === 46 && a + 2 < n && r.charCodeAt(a + 2) === 46)
                  return b(), b(), b(), (i = t.REST), i;
                if (s.code.isDecimalDigit(T)) return (i = B()), i;
              }
              return (i = t.ILLEGAL), i;
            case 60:
              return b(), (i = t.LT), i;
            case 62:
              return b(), (i = t.GT), i;
            case 42:
              return b(), (i = t.STAR), i;
            case 124:
              return b(), (i = t.PIPE), i;
            case 63:
              return b(), (i = t.QUESTION), i;
            case 33:
              return b(), (i = t.BANG), i;
            case 61:
              return b(), (i = t.EQUAL), i;
            case 45:
              return (i = B()), i;
            default:
              return s.code.isDecimalDigit(T)
                ? ((i = B()), i)
                : (p.assert(m(T)), (i = I()), i);
          }
        }
        function w(T, P) {
          p.assert(i === T, P || 'consumed token not matched'), q();
        }
        function N(T, P) {
          i !== T && p.throwError(P || 'unexpected token'), q();
        }
        function k() {
          var T,
            P = a - 1;
          if (
            (w(t.LPAREN, 'UnionType should start with ('),
            (T = []),
            i !== t.RPAREN)
          )
            for (; T.push(K()), i !== t.RPAREN; ) N(t.PIPE);
          return (
            w(t.RPAREN, 'UnionType should end with )'),
            E({ type: e.UnionType, elements: T }, [P, o])
          );
        }
        function z() {
          var T,
            P = a - 1,
            L;
          for (
            w(t.LBRACK, 'ArrayType should start with ['), T = [];
            i !== t.RBRACK;

          ) {
            if (i === t.REST) {
              (L = a - 3),
                w(t.REST),
                T.push(E({ type: e.RestType, expression: K() }, [L, o]));
              break;
            } else T.push(K());
            i !== t.RBRACK && N(t.COMMA);
          }
          return N(t.RBRACK), E({ type: e.ArrayType, elements: T }, [P, o]);
        }
        function V() {
          var T = u;
          if (i === t.NAME || i === t.STRING) return q(), T;
          if (i === t.NUMBER) return w(t.NUMBER), String(T);
          p.throwError('unexpected token');
        }
        function U() {
          var T,
            P = o;
          return (
            (T = V()),
            i === t.COLON
              ? (w(t.COLON),
                E({ type: e.FieldType, key: T, value: K() }, [P, o]))
              : E({ type: e.FieldType, key: T, value: null }, [P, o])
          );
        }
        function ne() {
          var T,
            P = a - 1,
            L;
          if (
            (w(t.LBRACE, 'RecordType should start with {'),
            (T = []),
            i === t.COMMA)
          )
            w(t.COMMA);
          else
            for (; i !== t.RBRACE; ) T.push(U()), i !== t.RBRACE && N(t.COMMA);
          return (
            (L = a), N(t.RBRACE), E({ type: e.RecordType, fields: T }, [P, L])
          );
        }
        function Q() {
          var T = u,
            P = a - T.length;
          return (
            N(t.NAME),
            i === t.COLON &&
              (T === 'module' || T === 'external' || T === 'event') &&
              (w(t.COLON), (T += ':' + u), N(t.NAME)),
            E({ type: e.NameExpression, name: T }, [P, o])
          );
        }
        function Y() {
          var T = [];
          for (T.push(Z()); i === t.COMMA; ) w(t.COMMA), T.push(Z());
          return T;
        }
        function R() {
          var T,
            P,
            L = a - u.length;
          return (
            (T = Q()),
            i === t.DOT_LT || i === t.LT
              ? (q(),
                (P = Y()),
                N(t.GT),
                E({ type: e.TypeApplication, expression: T, applications: P }, [
                  L,
                  o,
                ]))
              : T
          );
        }
        function _() {
          return (
            w(t.COLON, 'ResultType should start with :'),
            i === t.NAME && u === 'void'
              ? (w(t.NAME), { type: e.VoidLiteral })
              : K()
          );
        }
        function M() {
          for (
            var T = [], P = !1, L, O = !1, $, H = a - 3, de;
            i !== t.RPAREN;

          )
            i === t.REST && (w(t.REST), (O = !0)),
              ($ = o),
              (L = K()),
              L.type === e.NameExpression &&
                i === t.COLON &&
                ((de = o - L.name.length),
                w(t.COLON),
                (L = E(
                  { type: e.ParameterType, name: L.name, expression: K() },
                  [de, o]
                ))),
              i === t.EQUAL
                ? (w(t.EQUAL),
                  (L = E({ type: e.OptionalType, expression: L }, [$, o])),
                  (P = !0))
                : P && p.throwError('unexpected token'),
              O && (L = E({ type: e.RestType, expression: L }, [H, o])),
              T.push(L),
              i !== t.RPAREN && N(t.COMMA);
          return T;
        }
        function G() {
          var T,
            P,
            L,
            O,
            $,
            H = a - u.length;
          return (
            p.assert(
              i === t.NAME && u === 'function',
              "FunctionType should start with 'function'"
            ),
            w(t.NAME),
            N(t.LPAREN),
            (T = !1),
            (L = []),
            (P = null),
            i !== t.RPAREN &&
              (i === t.NAME && (u === 'this' || u === 'new')
                ? ((T = u === 'new'),
                  w(t.NAME),
                  N(t.COLON),
                  (P = R()),
                  i === t.COMMA && (w(t.COMMA), (L = M())))
                : (L = M())),
            N(t.RPAREN),
            (O = null),
            i === t.COLON && (O = _()),
            ($ = E({ type: e.FunctionType, params: L, result: O }, [H, o])),
            P && (($.this = P), T && ($.new = !0)),
            $
          );
        }
        function J() {
          var T, P;
          switch (i) {
            case t.STAR:
              return w(t.STAR), E({ type: e.AllLiteral }, [o - 1, o]);
            case t.LPAREN:
              return k();
            case t.LBRACK:
              return z();
            case t.LBRACE:
              return ne();
            case t.NAME:
              if (((P = a - u.length), u === 'null'))
                return w(t.NAME), E({ type: e.NullLiteral }, [P, o]);
              if (u === 'undefined')
                return w(t.NAME), E({ type: e.UndefinedLiteral }, [P, o]);
              if (u === 'true' || u === 'false')
                return (
                  w(t.NAME),
                  E({ type: e.BooleanLiteralType, value: u === 'true' }, [P, o])
                );
              if (((T = h.save()), u === 'function'))
                try {
                  return G();
                } catch {
                  T.restore();
                }
              return R();
            case t.STRING:
              return (
                q(),
                E({ type: e.StringLiteralType, value: u }, [
                  o - u.length - 2,
                  o,
                ])
              );
            case t.NUMBER:
              return (
                q(),
                E({ type: e.NumericLiteralType, value: u }, [
                  o - String(u).length,
                  o,
                ])
              );
            default:
              p.throwError('unexpected token');
          }
        }
        function K() {
          var T, P;
          return i === t.QUESTION
            ? ((P = a - 1),
              w(t.QUESTION),
              i === t.COMMA ||
              i === t.EQUAL ||
              i === t.RBRACE ||
              i === t.RPAREN ||
              i === t.PIPE ||
              i === t.EOF ||
              i === t.RBRACK ||
              i === t.GT
                ? E({ type: e.NullableLiteral }, [P, o])
                : E({ type: e.NullableType, expression: J(), prefix: !0 }, [
                    P,
                    o,
                  ]))
            : i === t.BANG
              ? ((P = a - 1),
                w(t.BANG),
                E({ type: e.NonNullableType, expression: J(), prefix: !0 }, [
                  P,
                  o,
                ]))
              : ((P = o),
                (T = J()),
                i === t.BANG
                  ? (w(t.BANG),
                    E({ type: e.NonNullableType, expression: T, prefix: !1 }, [
                      P,
                      o,
                    ]))
                  : i === t.QUESTION
                    ? (w(t.QUESTION),
                      E({ type: e.NullableType, expression: T, prefix: !1 }, [
                        P,
                        o,
                      ]))
                    : i === t.LBRACK
                      ? (w(t.LBRACK),
                        N(
                          t.RBRACK,
                          'expected an array-style type declaration (' +
                            u +
                            '[])'
                        ),
                        E(
                          {
                            type: e.TypeApplication,
                            expression: E(
                              { type: e.NameExpression, name: 'Array' },
                              [P, o]
                            ),
                            applications: [T],
                          },
                          [P, o]
                        ))
                      : T);
        }
        function Z() {
          var T, P;
          if (((T = K()), i !== t.PIPE)) return T;
          for (P = [T], w(t.PIPE); P.push(K()), i === t.PIPE; ) w(t.PIPE);
          return E({ type: e.UnionType, elements: P }, [0, a]);
        }
        function ue() {
          var T;
          return i === t.REST
            ? (w(t.REST), E({ type: e.RestType, expression: Z() }, [0, a]))
            : ((T = Z()),
              i === t.EQUAL
                ? (w(t.EQUAL),
                  E({ type: e.OptionalType, expression: T }, [0, a]))
                : T);
        }
        function Re(T, P) {
          var L;
          return (
            (r = T),
            (n = r.length),
            (a = 0),
            (o = 0),
            (A = P && P.range),
            (y = (P && P.startIndex) || 0),
            q(),
            (L = Z()),
            P && P.midstream
              ? { expression: L, index: o }
              : (i !== t.EOF && p.throwError('not reach to EOF'), L)
          );
        }
        function Pe(T, P) {
          var L;
          return (
            (r = T),
            (n = r.length),
            (a = 0),
            (o = 0),
            (A = P && P.range),
            (y = (P && P.startIndex) || 0),
            q(),
            (L = ue()),
            P && P.midstream
              ? { expression: L, index: o }
              : (i !== t.EOF && p.throwError('not reach to EOF'), L)
          );
        }
        function X(T, P, L) {
          var O, $, H;
          switch (T.type) {
            case e.NullableLiteral:
              O = '?';
              break;
            case e.AllLiteral:
              O = '*';
              break;
            case e.NullLiteral:
              O = 'null';
              break;
            case e.UndefinedLiteral:
              O = 'undefined';
              break;
            case e.VoidLiteral:
              O = 'void';
              break;
            case e.UnionType:
              for (
                L ? (O = '') : (O = '('), $ = 0, H = T.elements.length;
                $ < H;
                ++$
              )
                (O += X(T.elements[$], P)),
                  $ + 1 !== H && (O += P ? '|' : ' | ');
              L || (O += ')');
              break;
            case e.ArrayType:
              for (O = '[', $ = 0, H = T.elements.length; $ < H; ++$)
                (O += X(T.elements[$], P)),
                  $ + 1 !== H && (O += P ? ',' : ', ');
              O += ']';
              break;
            case e.RecordType:
              for (O = '{', $ = 0, H = T.fields.length; $ < H; ++$)
                (O += X(T.fields[$], P)), $ + 1 !== H && (O += P ? ',' : ', ');
              O += '}';
              break;
            case e.FieldType:
              T.value
                ? (O = T.key + (P ? ':' : ': ') + X(T.value, P))
                : (O = T.key);
              break;
            case e.FunctionType:
              for (
                O = P ? 'function(' : 'function (',
                  T.this &&
                    (T.new
                      ? (O += P ? 'new:' : 'new: ')
                      : (O += P ? 'this:' : 'this: '),
                    (O += X(T.this, P)),
                    T.params.length !== 0 && (O += P ? ',' : ', ')),
                  $ = 0,
                  H = T.params.length;
                $ < H;
                ++$
              )
                (O += X(T.params[$], P)), $ + 1 !== H && (O += P ? ',' : ', ');
              (O += ')'), T.result && (O += (P ? ':' : ': ') + X(T.result, P));
              break;
            case e.ParameterType:
              O = T.name + (P ? ':' : ': ') + X(T.expression, P);
              break;
            case e.RestType:
              (O = '...'), T.expression && (O += X(T.expression, P));
              break;
            case e.NonNullableType:
              T.prefix
                ? (O = '!' + X(T.expression, P))
                : (O = X(T.expression, P) + '!');
              break;
            case e.OptionalType:
              O = X(T.expression, P) + '=';
              break;
            case e.NullableType:
              T.prefix
                ? (O = '?' + X(T.expression, P))
                : (O = X(T.expression, P) + '?');
              break;
            case e.NameExpression:
              O = T.name;
              break;
            case e.TypeApplication:
              for (
                O = X(T.expression, P) + '.<', $ = 0, H = T.applications.length;
                $ < H;
                ++$
              )
                (O += X(T.applications[$], P)),
                  $ + 1 !== H && (O += P ? ',' : ', ');
              O += '>';
              break;
            case e.StringLiteralType:
              O = '"' + T.value + '"';
              break;
            case e.NumericLiteralType:
              O = String(T.value);
              break;
            case e.BooleanLiteralType:
              O = String(T.value);
              break;
            default:
              p.throwError('Unknown type ' + T.type);
          }
          return O;
        }
        function qe(T, P) {
          return P == null && (P = {}), X(T, P.compact, P.topLevel);
        }
        ($r.parseType = Re),
          ($r.parseParamType = Pe),
          ($r.stringify = qe),
          ($r.Syntax = e);
      })();
    });
    var Bm = S((Ve) => {
      l();
      c();
      d();
      (function () {
        'use strict';
        var e, t, r, n, a;
        (n = Di()), (e = wm()), (t = Ci());
        function o(w, N, k) {
          return w.slice(N, k);
        }
        a = (function () {
          var w = Object.prototype.hasOwnProperty;
          return function (k, z) {
            return w.call(k, z);
          };
        })();
        function i(w) {
          var N = {},
            k;
          for (k in w) w.hasOwnProperty(k) && (N[k] = w[k]);
          return N;
        }
        function u(w) {
          return (
            (w >= 97 && w <= 122) ||
            (w >= 65 && w <= 90) ||
            (w >= 48 && w <= 57)
          );
        }
        function s(w) {
          return w === 'param' || w === 'argument' || w === 'arg';
        }
        function p(w) {
          return w === 'return' || w === 'returns';
        }
        function y(w) {
          return w === 'property' || w === 'prop';
        }
        function A(w) {
          return (
            s(w) ||
            y(w) ||
            w === 'alias' ||
            w === 'this' ||
            w === 'mixes' ||
            w === 'requires'
          );
        }
        function m(w) {
          return A(w) || w === 'const' || w === 'constant';
        }
        function h(w) {
          return y(w) || s(w);
        }
        function E(w) {
          return y(w) || s(w);
        }
        function b(w) {
          return (
            s(w) ||
            p(w) ||
            w === 'define' ||
            w === 'enum' ||
            w === 'implements' ||
            w === 'this' ||
            w === 'type' ||
            w === 'typedef' ||
            y(w)
          );
        }
        function x(w) {
          return (
            b(w) ||
            w === 'throws' ||
            w === 'const' ||
            w === 'constant' ||
            w === 'namespace' ||
            w === 'member' ||
            w === 'var' ||
            w === 'module' ||
            w === 'constructor' ||
            w === 'class' ||
            w === 'extends' ||
            w === 'augments' ||
            w === 'public' ||
            w === 'private' ||
            w === 'protected'
          );
        }
        var F =
            '[ \\f\\t\\v\\u00a0\\u1680\\u180e\\u2000-\\u200a\\u202f\\u205f\\u3000\\ufeff]',
          B =
            '(' +
            F +
            '*(?:\\*' +
            F +
            `?)?)(.+|[\r
\u2028\u2029])`;
        function I(w) {
          return w
            .replace(/^\/\*\*?/, '')
            .replace(/\*\/$/, '')
            .replace(new RegExp(B, 'g'), '$2')
            .replace(/\s*$/, '');
        }
        function q(w, N) {
          for (
            var k = w.replace(/^\/\*\*?/, ''), z = 0, V = new RegExp(B, 'g'), U;
            (U = V.exec(k));

          )
            if (((z += U[1].length), U.index + U[0].length > N + z))
              return N + z + w.length - k.length;
          return w.replace(/\*\/$/, '').replace(/\s*$/, '').length;
        }
        (function (w) {
          var N, k, z, V, U, ne, Q, Y, R;
          function _() {
            var L = U.charCodeAt(k);
            return (
              (k += 1),
              n.code.isLineTerminator(L) &&
                !(L === 13 && U.charCodeAt(k) === 10) &&
                (z += 1),
              String.fromCharCode(L)
            );
          }
          function M() {
            var L = '';
            for (_(); k < V && u(U.charCodeAt(k)); ) L += _();
            return L;
          }
          function G() {
            var L,
              O,
              $ = k;
            for (O = !1; $ < V; ) {
              if (
                ((L = U.charCodeAt($)),
                n.code.isLineTerminator(L) &&
                  !(L === 13 && U.charCodeAt($ + 1) === 10))
              )
                O = !0;
              else if (O) {
                if (L === 64) break;
                n.code.isWhiteSpace(L) || (O = !1);
              }
              $ += 1;
            }
            return $;
          }
          function J(L, O, $) {
            for (var H, de, ae, oe, be = !1; k < O; )
              if (((H = U.charCodeAt(k)), n.code.isWhiteSpace(H))) _();
              else if (H === 123) {
                _();
                break;
              } else {
                be = !0;
                break;
              }
            if (be) return null;
            for (de = 1, ae = ''; k < O; )
              if (((H = U.charCodeAt(k)), n.code.isLineTerminator(H))) _();
              else {
                if (H === 125) {
                  if (((de -= 1), de === 0)) {
                    _();
                    break;
                  }
                } else H === 123 && (de += 1);
                ae === '' && (oe = k), (ae += _());
              }
            return de !== 0
              ? t.throwError('Braces are not balanced')
              : E(L)
                ? e.parseParamType(ae, { startIndex: Pe(oe), range: $ })
                : e.parseType(ae, { startIndex: Pe(oe), range: $ });
          }
          function K(L) {
            var O;
            if (
              !n.code.isIdentifierStartES5(U.charCodeAt(k)) &&
              !U[k].match(/[0-9]/)
            )
              return null;
            for (
              O = _();
              k < L && n.code.isIdentifierPartES5(U.charCodeAt(k));

            )
              O += _();
            return O;
          }
          function Z(L) {
            for (
              ;
              k < L &&
              (n.code.isWhiteSpace(U.charCodeAt(k)) ||
                n.code.isLineTerminator(U.charCodeAt(k)));

            )
              _();
          }
          function ue(L, O, $) {
            var H = '',
              de,
              ae;
            if ((Z(L), k >= L)) return null;
            if (U.charCodeAt(k) === 91)
              if (O) (de = !0), (H = _());
              else return null;
            if (((H += K(L)), $))
              for (
                U.charCodeAt(k) === 58 &&
                  (H === 'module' || H === 'external' || H === 'event') &&
                  ((H += _()), (H += K(L))),
                  U.charCodeAt(k) === 91 &&
                    U.charCodeAt(k + 1) === 93 &&
                    ((H += _()), (H += _()));
                U.charCodeAt(k) === 46 ||
                U.charCodeAt(k) === 47 ||
                U.charCodeAt(k) === 35 ||
                U.charCodeAt(k) === 45 ||
                U.charCodeAt(k) === 126;

              )
                (H += _()), (H += K(L));
            if (de) {
              if ((Z(L), U.charCodeAt(k) === 61)) {
                (H += _()), Z(L);
                for (var oe, be = 1; k < L; ) {
                  if (
                    ((oe = U.charCodeAt(k)),
                    n.code.isWhiteSpace(oe) &&
                      (ae || (Z(L), (oe = U.charCodeAt(k)))),
                    oe === 39 && (ae ? ae === "'" && (ae = '') : (ae = "'")),
                    oe === 34 && (ae ? ae === '"' && (ae = '') : (ae = '"')),
                    oe === 91)
                  )
                    be++;
                  else if (oe === 93 && --be === 0) break;
                  H += _();
                }
              }
              if ((Z(L), k >= L || U.charCodeAt(k) !== 93)) return null;
              H += _();
            }
            return H;
          }
          function Re() {
            for (; k < V && U.charCodeAt(k) !== 64; ) _();
            return k >= V ? !1 : (t.assert(U.charCodeAt(k) === 64), !0);
          }
          function Pe(L) {
            return U === ne ? L : q(ne, L);
          }
          function X(L, O) {
            (this._options = L),
              (this._title = O.toLowerCase()),
              (this._tag = { title: O, description: null }),
              this._options.lineNumbers && (this._tag.lineNumber = z),
              (this._first = k - O.length - 1),
              (this._last = 0),
              (this._extra = {});
          }
          (X.prototype.addError = function (O) {
            var $ = Array.prototype.slice.call(arguments, 1),
              H = O.replace(/%(\d)/g, function (de, ae) {
                return (
                  t.assert(ae < $.length, 'Message reference must be in range'),
                  $[ae]
                );
              });
            return (
              this._tag.errors || (this._tag.errors = []),
              R && t.throwError(H),
              this._tag.errors.push(H),
              Q
            );
          }),
            (X.prototype.parseType = function () {
              if (b(this._title))
                try {
                  if (
                    ((this._tag.type = J(
                      this._title,
                      this._last,
                      this._options.range
                    )),
                    !this._tag.type &&
                      !s(this._title) &&
                      !p(this._title) &&
                      !this.addError('Missing or invalid tag type'))
                  )
                    return !1;
                } catch (L) {
                  if (((this._tag.type = null), !this.addError(L.message)))
                    return !1;
                }
              else if (x(this._title))
                try {
                  this._tag.type = J(
                    this._title,
                    this._last,
                    this._options.range
                  );
                } catch {}
              return !0;
            }),
            (X.prototype._parseNamePath = function (L) {
              var O;
              return (
                (O = ue(this._last, Y && E(this._title), !0)),
                !O && !L && !this.addError('Missing or invalid tag name')
                  ? !1
                  : ((this._tag.name = O), !0)
              );
            }),
            (X.prototype.parseNamePath = function () {
              return this._parseNamePath(!1);
            }),
            (X.prototype.parseNamePathOptional = function () {
              return this._parseNamePath(!0);
            }),
            (X.prototype.parseName = function () {
              var L, O;
              if (m(this._title))
                if (
                  ((this._tag.name = ue(
                    this._last,
                    Y && E(this._title),
                    h(this._title)
                  )),
                  this._tag.name)
                )
                  (O = this._tag.name),
                    O.charAt(0) === '[' &&
                      O.charAt(O.length - 1) === ']' &&
                      ((L = O.substring(1, O.length - 1).split('=')),
                      L.length > 1 &&
                        (this._tag.default = L.slice(1).join('=')),
                      (this._tag.name = L[0]),
                      this._tag.type &&
                        this._tag.type.type !== 'OptionalType' &&
                        (this._tag.type = {
                          type: 'OptionalType',
                          expression: this._tag.type,
                        }));
                else {
                  if (!A(this._title)) return !0;
                  if (s(this._title) && this._tag.type && this._tag.type.name)
                    (this._extra.name = this._tag.type),
                      (this._tag.name = this._tag.type.name),
                      (this._tag.type = null);
                  else if (!this.addError('Missing or invalid tag name'))
                    return !1;
                }
              return !0;
            }),
            (X.prototype.parseDescription = function () {
              var O = o(U, k, this._last).trim();
              return (
                O &&
                  (/^-\s+/.test(O) && (O = O.substring(2)),
                  (this._tag.description = O)),
                !0
              );
            }),
            (X.prototype.parseCaption = function () {
              var O = o(U, k, this._last).trim(),
                $ = '<caption>',
                H = '</caption>',
                de = O.indexOf($),
                ae = O.indexOf(H);
              return (
                de >= 0 && ae >= 0
                  ? ((this._tag.caption = O.substring(
                      de + $.length,
                      ae
                    ).trim()),
                    (this._tag.description = O.substring(ae + H.length).trim()))
                  : (this._tag.description = O),
                !0
              );
            }),
            (X.prototype.parseKind = function () {
              var O, $;
              return (
                ($ = {
                  class: !0,
                  constant: !0,
                  event: !0,
                  external: !0,
                  file: !0,
                  function: !0,
                  member: !0,
                  mixin: !0,
                  module: !0,
                  namespace: !0,
                  typedef: !0,
                }),
                (O = o(U, k, this._last).trim()),
                (this._tag.kind = O),
                !(!a($, O) && !this.addError("Invalid kind name '%0'", O))
              );
            }),
            (X.prototype.parseAccess = function () {
              var O;
              return (
                (O = o(U, k, this._last).trim()),
                (this._tag.access = O),
                !(
                  O !== 'private' &&
                  O !== 'protected' &&
                  O !== 'public' &&
                  !this.addError("Invalid access name '%0'", O)
                )
              );
            }),
            (X.prototype.parseThis = function () {
              var O = o(U, k, this._last).trim();
              if (O && O.charAt(0) === '{') {
                var $ = this.parseType();
                return ($ && this._tag.type.type === 'NameExpression') ||
                  this._tag.type.type === 'UnionType'
                  ? ((this._tag.name = this._tag.type.name), !0)
                  : this.addError('Invalid name for this');
              } else return this.parseNamePath();
            }),
            (X.prototype.parseVariation = function () {
              var O, $;
              return (
                ($ = o(U, k, this._last).trim()),
                (O = parseFloat($, 10)),
                (this._tag.variation = O),
                !(isNaN(O) && !this.addError("Invalid variation '%0'", $))
              );
            }),
            (X.prototype.ensureEnd = function () {
              var L = o(U, k, this._last).trim();
              return !(L && !this.addError("Unknown content '%0'", L));
            }),
            (X.prototype.epilogue = function () {
              var O;
              return (
                (O = this._tag.description),
                !(
                  E(this._title) &&
                  !this._tag.type &&
                  O &&
                  O.charAt(0) === '[' &&
                  ((this._tag.type = this._extra.name),
                  this._tag.name || (this._tag.name = void 0),
                  !Y && !this.addError('Missing or invalid tag name'))
                )
              );
            }),
            (N = {
              access: ['parseAccess'],
              alias: ['parseNamePath', 'ensureEnd'],
              augments: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
              constructor: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
              class: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
              extends: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
              example: ['parseCaption'],
              deprecated: ['parseDescription'],
              global: ['ensureEnd'],
              inner: ['ensureEnd'],
              instance: ['ensureEnd'],
              kind: ['parseKind'],
              mixes: ['parseNamePath', 'ensureEnd'],
              mixin: ['parseNamePathOptional', 'ensureEnd'],
              member: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
              method: ['parseNamePathOptional', 'ensureEnd'],
              module: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
              func: ['parseNamePathOptional', 'ensureEnd'],
              function: ['parseNamePathOptional', 'ensureEnd'],
              var: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
              name: ['parseNamePath', 'ensureEnd'],
              namespace: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
              private: ['parseType', 'parseDescription'],
              protected: ['parseType', 'parseDescription'],
              public: ['parseType', 'parseDescription'],
              readonly: ['ensureEnd'],
              requires: ['parseNamePath', 'ensureEnd'],
              since: ['parseDescription'],
              static: ['ensureEnd'],
              summary: ['parseDescription'],
              this: ['parseThis', 'ensureEnd'],
              todo: ['parseDescription'],
              typedef: ['parseType', 'parseNamePathOptional'],
              variation: ['parseVariation'],
              version: ['parseDescription'],
            }),
            (X.prototype.parse = function () {
              var O, $, H, de;
              if (!this._title && !this.addError('Missing or invalid title'))
                return null;
              for (
                this._last = G(this._title),
                  this._options.range &&
                    (this._tag.range = [
                      this._first,
                      U.slice(0, this._last).replace(/\s*$/, '').length,
                    ].map(Pe)),
                  a(N, this._title)
                    ? (H = N[this._title])
                    : (H = [
                        'parseType',
                        'parseName',
                        'parseDescription',
                        'epilogue',
                      ]),
                  O = 0,
                  $ = H.length;
                O < $;
                ++O
              )
                if (((de = H[O]), !this[de]())) return null;
              return this._tag;
            });
          function qe(L) {
            var O, $, H;
            if (!Re()) return null;
            for (O = M(), $ = new X(L, O), H = $.parse(); k < $._last; ) _();
            return H;
          }
          function T(L) {
            var O = '',
              $,
              H;
            for (H = !0; k < V && (($ = U.charCodeAt(k)), !(H && $ === 64)); )
              n.code.isLineTerminator($)
                ? (H = !0)
                : H && !n.code.isWhiteSpace($) && (H = !1),
                (O += _());
            return L ? O : O.trim();
          }
          function P(L, O) {
            var $ = [],
              H,
              de,
              ae,
              oe,
              be;
            if (
              (O === void 0 && (O = {}),
              typeof O.unwrap == 'boolean' && O.unwrap ? (U = I(L)) : (U = L),
              (ne = L),
              O.tags)
            )
              if (Array.isArray(O.tags))
                for (ae = {}, oe = 0, be = O.tags.length; oe < be; oe++)
                  typeof O.tags[oe] == 'string'
                    ? (ae[O.tags[oe]] = !0)
                    : t.throwError('Invalid "tags" parameter: ' + O.tags);
              else t.throwError('Invalid "tags" parameter: ' + O.tags);
            for (
              V = U.length,
                k = 0,
                z = 0,
                Q = O.recoverable,
                Y = O.sloppy,
                R = O.strict,
                de = T(O.preserveWhitespace);
              (H = qe(O)), !!H;

            )
              (!ae || ae.hasOwnProperty(H.title)) && $.push(H);
            return { description: de, tags: $ };
          }
          w.parse = P;
        })((r = {})),
          (Ve.version = t.VERSION),
          (Ve.parse = r.parse),
          (Ve.parseType = e.parseType),
          (Ve.parseParamType = e.parseParamType),
          (Ve.unwrapComment = I),
          (Ve.Syntax = i(e.Syntax)),
          (Ve.Error = t.DoctrineError),
          (Ve.type = {
            Syntax: Ve.Syntax,
            parseType: e.parseType,
            parseParamType: e.parseParamType,
            stringify: e.stringify,
          });
      })();
    });
    var Qm = S((Gee, Xm) => {
      l();
      c();
      d();
      Xm.exports = {
        tocSelector: '.js-toc',
        contentSelector: '.js-toc-content',
        headingSelector: 'h1, h2, h3',
        ignoreSelector: '.js-toc-ignore',
        hasInnerContainers: !1,
        linkClass: 'toc-link',
        extraLinkClasses: '',
        activeLinkClass: 'is-active-link',
        listClass: 'toc-list',
        extraListClasses: '',
        isCollapsedClass: 'is-collapsed',
        collapsibleClass: 'is-collapsible',
        listItemClass: 'toc-list-item',
        activeListItemClass: 'is-active-li',
        collapseDepth: 0,
        scrollSmooth: !0,
        scrollSmoothDuration: 420,
        scrollSmoothOffset: 0,
        scrollEndCallback: function (e) {},
        headingsOffset: 1,
        throttleTimeout: 50,
        positionFixedSelector: null,
        positionFixedClass: 'is-position-fixed',
        fixedSidebarOffset: 'auto',
        includeHtml: !1,
        includeTitleTags: !1,
        onClick: function (e) {},
        orderedList: !0,
        scrollContainer: null,
        skipRendering: !1,
        headingLabelCallback: !1,
        ignoreHiddenElements: !1,
        headingObjectCallback: null,
        basePath: '',
        disableTocScrollSync: !1,
        tocScrollOffset: 0,
      };
    });
    var eg = S((Yee, Zm) => {
      l();
      c();
      d();
      Zm.exports = function (e) {
        var t = [].forEach,
          r = [].some,
          n = document.body,
          a,
          o = !0,
          i = ' ';
        function u(B, I) {
          var q = I.appendChild(p(B));
          if (B.children.length) {
            var w = y(B.isCollapsed);
            B.children.forEach(function (N) {
              u(N, w);
            }),
              q.appendChild(w);
          }
        }
        function s(B, I) {
          var q = !1,
            w = y(q);
          if (
            (I.forEach(function (N) {
              u(N, w);
            }),
            (a = B || a),
            a !== null)
          )
            return (
              a.firstChild && a.removeChild(a.firstChild),
              I.length === 0 ? a : a.appendChild(w)
            );
        }
        function p(B) {
          var I = document.createElement('li'),
            q = document.createElement('a');
          return (
            e.listItemClass && I.setAttribute('class', e.listItemClass),
            e.onClick && (q.onclick = e.onClick),
            e.includeTitleTags && q.setAttribute('title', B.textContent),
            e.includeHtml && B.childNodes.length
              ? t.call(B.childNodes, function (w) {
                  q.appendChild(w.cloneNode(!0));
                })
              : (q.textContent = B.textContent),
            q.setAttribute('href', e.basePath + '#' + B.id),
            q.setAttribute(
              'class',
              e.linkClass +
                i +
                'node-name--' +
                B.nodeName +
                i +
                e.extraLinkClasses
            ),
            I.appendChild(q),
            I
          );
        }
        function y(B) {
          var I = e.orderedList ? 'ol' : 'ul',
            q = document.createElement(I),
            w = e.listClass + i + e.extraListClasses;
          return (
            B &&
              ((w = w + i + e.collapsibleClass),
              (w = w + i + e.isCollapsedClass)),
            q.setAttribute('class', w),
            q
          );
        }
        function A() {
          if (e.scrollContainer && document.querySelector(e.scrollContainer)) {
            var B;
            B = document.querySelector(e.scrollContainer).scrollTop;
          } else B = document.documentElement.scrollTop || n.scrollTop;
          var I = document.querySelector(e.positionFixedSelector);
          e.fixedSidebarOffset === 'auto' &&
            (e.fixedSidebarOffset = a.offsetTop),
            B > e.fixedSidebarOffset
              ? I.className.indexOf(e.positionFixedClass) === -1 &&
                (I.className += i + e.positionFixedClass)
              : (I.className = I.className.replace(
                  i + e.positionFixedClass,
                  ''
                ));
        }
        function m(B) {
          var I = 0;
          return (
            B !== null &&
              ((I = B.offsetTop),
              e.hasInnerContainers && (I += m(B.offsetParent))),
            I
          );
        }
        function h(B, I) {
          return B && B.className !== I && (B.className = I), B;
        }
        function E(B) {
          if (e.scrollContainer && document.querySelector(e.scrollContainer)) {
            var I;
            I = document.querySelector(e.scrollContainer).scrollTop;
          } else I = document.documentElement.scrollTop || n.scrollTop;
          e.positionFixedSelector && A();
          var q = B,
            w;
          if (o && a !== null && q.length > 0) {
            r.call(q, function (Q, Y) {
              if (m(Q) > I + e.headingsOffset + 10) {
                var R = Y === 0 ? Y : Y - 1;
                return (w = q[R]), !0;
              } else if (Y === q.length - 1) return (w = q[q.length - 1]), !0;
            });
            var N = a.querySelector('.' + e.activeLinkClass),
              k = a.querySelector(
                '.' +
                  e.linkClass +
                  '.node-name--' +
                  w.nodeName +
                  '[href="' +
                  e.basePath +
                  '#' +
                  w.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/\\@])/g, '\\$1') +
                  '"]'
              );
            if (N === k) return;
            var z = a.querySelectorAll('.' + e.linkClass);
            t.call(z, function (Q) {
              h(Q, Q.className.replace(i + e.activeLinkClass, ''));
            });
            var V = a.querySelectorAll('.' + e.listItemClass);
            t.call(V, function (Q) {
              h(Q, Q.className.replace(i + e.activeListItemClass, ''));
            }),
              k &&
                k.className.indexOf(e.activeLinkClass) === -1 &&
                (k.className += i + e.activeLinkClass);
            var U = k && k.parentNode;
            U &&
              U.className.indexOf(e.activeListItemClass) === -1 &&
              (U.className += i + e.activeListItemClass);
            var ne = a.querySelectorAll(
              '.' + e.listClass + '.' + e.collapsibleClass
            );
            t.call(ne, function (Q) {
              Q.className.indexOf(e.isCollapsedClass) === -1 &&
                (Q.className += i + e.isCollapsedClass);
            }),
              k &&
                k.nextSibling &&
                k.nextSibling.className.indexOf(e.isCollapsedClass) !== -1 &&
                h(
                  k.nextSibling,
                  k.nextSibling.className.replace(i + e.isCollapsedClass, '')
                ),
              b(k && k.parentNode.parentNode);
          }
        }
        function b(B) {
          return B &&
            B.className.indexOf(e.collapsibleClass) !== -1 &&
            B.className.indexOf(e.isCollapsedClass) !== -1
            ? (h(B, B.className.replace(i + e.isCollapsedClass, '')),
              b(B.parentNode.parentNode))
            : B;
        }
        function x(B) {
          var I = B.target || B.srcElement;
          typeof I.className != 'string' ||
            I.className.indexOf(e.linkClass) === -1 ||
            (o = !1);
        }
        function F() {
          o = !0;
        }
        return {
          enableTocAnimation: F,
          disableTocAnimation: x,
          render: s,
          updateToc: E,
        };
      };
    });
    var rg = S((Zee, tg) => {
      l();
      c();
      d();
      tg.exports = function (t) {
        var r = [].reduce;
        function n(y) {
          return y[y.length - 1];
        }
        function a(y) {
          return +y.nodeName.toUpperCase().replace('H', '');
        }
        function o(y) {
          try {
            return (
              y instanceof window.HTMLElement ||
              y instanceof window.parent.HTMLElement
            );
          } catch {
            return y instanceof window.HTMLElement;
          }
        }
        function i(y) {
          if (!o(y)) return y;
          if (t.ignoreHiddenElements && (!y.offsetHeight || !y.offsetParent))
            return null;
          let A =
            y.getAttribute('data-heading-label') ||
            (t.headingLabelCallback
              ? String(t.headingLabelCallback(y.innerText))
              : (y.innerText || y.textContent).trim());
          var m = {
            id: y.id,
            children: [],
            nodeName: y.nodeName,
            headingLevel: a(y),
            textContent: A,
          };
          return (
            t.includeHtml && (m.childNodes = y.childNodes),
            t.headingObjectCallback ? t.headingObjectCallback(m, y) : m
          );
        }
        function u(y, A) {
          for (
            var m = i(y),
              h = m.headingLevel,
              E = A,
              b = n(E),
              x = b ? b.headingLevel : 0,
              F = h - x;
            F > 0 && ((b = n(E)), !(b && h === b.headingLevel));

          )
            b && b.children !== void 0 && (E = b.children), F--;
          return h >= t.collapseDepth && (m.isCollapsed = !0), E.push(m), E;
        }
        function s(y, A) {
          var m = A;
          t.ignoreSelector &&
            (m = A.split(',').map(function (E) {
              return E.trim() + ':not(' + t.ignoreSelector + ')';
            }));
          try {
            return y.querySelectorAll(m);
          } catch {
            return console.warn('Headers not found with selector: ' + m), null;
          }
        }
        function p(y) {
          return r.call(
            y,
            function (m, h) {
              var E = i(h);
              return E && u(E, m.nest), m;
            },
            { nest: [] }
          );
        }
        return { nestHeadingsArray: p, selectHeadings: s };
      };
    });
    var ag = S((nte, ng) => {
      l();
      c();
      d();
      ng.exports = function (t) {
        var r = t.tocElement || document.querySelector(t.tocSelector);
        if (r && r.scrollHeight > r.clientHeight) {
          var n = r.querySelector('.' + t.activeListItemClass);
          if (n) {
            var a = r.scrollTop,
              o = a + r.clientHeight,
              i = n.offsetTop,
              u = i + n.clientHeight;
            i < a + t.tocScrollOffset
              ? (r.scrollTop -= a - i + t.tocScrollOffset)
              : u > o - t.tocScrollOffset - 30 &&
                (r.scrollTop += u - o + t.tocScrollOffset + 2 * 30);
          }
        }
      };
    });
    var ig = S((og) => {
      l();
      c();
      d();
      og.initSmoothScrolling = b4;
      function b4(e) {
        var t = e.duration,
          r = e.offset,
          n = location.hash ? i(location.href) : location.href;
        a();
        function a() {
          document.body.addEventListener('click', s, !1);
          function s(p) {
            !o(p.target) ||
              p.target.className.indexOf('no-smooth-scroll') > -1 ||
              (p.target.href.charAt(p.target.href.length - 2) === '#' &&
                p.target.href.charAt(p.target.href.length - 1) === '!') ||
              p.target.className.indexOf(e.linkClass) === -1 ||
              E4(p.target.hash, {
                duration: t,
                offset: r,
                callback: function () {
                  u(p.target.hash);
                },
              });
          }
        }
        function o(s) {
          return (
            s.tagName.toLowerCase() === 'a' &&
            (s.hash.length > 0 || s.href.charAt(s.href.length - 1) === '#') &&
            (i(s.href) === n || i(s.href) + '#' === n)
          );
        }
        function i(s) {
          return s.slice(0, s.lastIndexOf('#'));
        }
        function u(s) {
          var p = document.getElementById(s.substring(1));
          p &&
            (/^(?:a|select|input|button|textarea)$/i.test(p.tagName) ||
              (p.tabIndex = -1),
            p.focus());
        }
      }
      function E4(e, t) {
        var r = window.pageYOffset,
          n = {
            duration: t.duration,
            offset: t.offset || 0,
            callback: t.callback,
            easing: t.easing || A,
          },
          a =
            document.querySelector(
              '[id="' + decodeURI(e).split('#').join('') + '"]'
            ) || document.querySelector('[id="' + e.split('#').join('') + '"]'),
          o =
            typeof e == 'string'
              ? n.offset +
                (e
                  ? (a && a.getBoundingClientRect().top) || 0
                  : -(
                      document.documentElement.scrollTop ||
                      document.body.scrollTop
                    ))
              : e,
          i = typeof n.duration == 'function' ? n.duration(o) : n.duration,
          u,
          s;
        requestAnimationFrame(function (m) {
          (u = m), p(m);
        });
        function p(m) {
          (s = m - u),
            window.scrollTo(0, n.easing(s, r, o, i)),
            s < i ? requestAnimationFrame(p) : y();
        }
        function y() {
          window.scrollTo(0, r + o),
            typeof n.callback == 'function' && n.callback();
        }
        function A(m, h, E, b) {
          return (
            (m /= b / 2),
            m < 1
              ? (E / 2) * m * m + h
              : (m--, (-E / 2) * (m * (m - 2) - 1) + h)
          );
        }
      }
    });
    var lg = S((ug, sg) => {
      l();
      c();
      d();
      (function (e, t) {
        typeof define == 'function' && define.amd
          ? define([], t(e))
          : typeof ug == 'object'
            ? (sg.exports = t(e))
            : (e.tocbot = t(e));
      })(typeof window < 'u' ? window : window || window, function (e) {
        'use strict';
        var t = Qm(),
          r = {},
          n = {},
          a = eg(),
          o = rg(),
          i = ag(),
          u,
          s,
          p =
            !!e &&
            !!e.document &&
            !!e.document.querySelector &&
            !!e.addEventListener;
        if (typeof window > 'u' && !p) return;
        var y,
          A = Object.prototype.hasOwnProperty;
        function m() {
          for (var x = {}, F = 0; F < arguments.length; F++) {
            var B = arguments[F];
            for (var I in B) A.call(B, I) && (x[I] = B[I]);
          }
          return x;
        }
        function h(x, F, B) {
          F || (F = 250);
          var I, q;
          return function () {
            var w = B || this,
              N = +new Date(),
              k = arguments;
            I && N < I + F
              ? (clearTimeout(q),
                (q = setTimeout(function () {
                  (I = N), x.apply(w, k);
                }, F)))
              : ((I = N), x.apply(w, k));
          };
        }
        function E(x) {
          try {
            return (
              x.contentElement || document.querySelector(x.contentSelector)
            );
          } catch {
            return (
              console.warn('Contents element not found: ' + x.contentSelector),
              null
            );
          }
        }
        function b(x) {
          try {
            return x.tocElement || document.querySelector(x.tocSelector);
          } catch {
            return (
              console.warn('TOC element not found: ' + x.tocSelector), null
            );
          }
        }
        return (
          (n.destroy = function () {
            var x = b(r);
            x !== null &&
              (r.skipRendering || (x && (x.innerHTML = '')),
              r.scrollContainer && document.querySelector(r.scrollContainer)
                ? (document
                    .querySelector(r.scrollContainer)
                    .removeEventListener('scroll', this._scrollListener, !1),
                  document
                    .querySelector(r.scrollContainer)
                    .removeEventListener('resize', this._scrollListener, !1),
                  u &&
                    document
                      .querySelector(r.scrollContainer)
                      .removeEventListener('click', this._clickListener, !1))
                : (document.removeEventListener(
                    'scroll',
                    this._scrollListener,
                    !1
                  ),
                  document.removeEventListener(
                    'resize',
                    this._scrollListener,
                    !1
                  ),
                  u &&
                    document.removeEventListener(
                      'click',
                      this._clickListener,
                      !1
                    )));
          }),
          (n.init = function (x) {
            if (p) {
              (r = m(t, x || {})),
                (this.options = r),
                (this.state = {}),
                r.scrollSmooth &&
                  ((r.duration = r.scrollSmoothDuration),
                  (r.offset = r.scrollSmoothOffset),
                  (n.scrollSmooth = ig().initSmoothScrolling(r))),
                (u = a(r)),
                (s = o(r)),
                (this._buildHtml = u),
                (this._parseContent = s),
                (this._headingsArray = y),
                n.destroy();
              var F = E(r);
              if (F !== null) {
                var B = b(r);
                if (
                  B !== null &&
                  ((y = s.selectHeadings(F, r.headingSelector)), y !== null)
                ) {
                  var I = s.nestHeadingsArray(y),
                    q = I.nest;
                  if (!r.skipRendering) u.render(B, q);
                  else return this;
                  (this._scrollListener = h(function (N) {
                    u.updateToc(y), !r.disableTocScrollSync && i(r);
                    var k =
                      N &&
                      N.target &&
                      N.target.scrollingElement &&
                      N.target.scrollingElement.scrollTop === 0;
                    ((N && (N.eventPhase === 0 || N.currentTarget === null)) ||
                      k) &&
                      (u.updateToc(y),
                      r.scrollEndCallback && r.scrollEndCallback(N));
                  }, r.throttleTimeout)),
                    this._scrollListener(),
                    r.scrollContainer &&
                    document.querySelector(r.scrollContainer)
                      ? (document
                          .querySelector(r.scrollContainer)
                          .addEventListener('scroll', this._scrollListener, !1),
                        document
                          .querySelector(r.scrollContainer)
                          .addEventListener('resize', this._scrollListener, !1))
                      : (document.addEventListener(
                          'scroll',
                          this._scrollListener,
                          !1
                        ),
                        document.addEventListener(
                          'resize',
                          this._scrollListener,
                          !1
                        ));
                  var w = null;
                  return (
                    (this._clickListener = h(function (N) {
                      r.scrollSmooth && u.disableTocAnimation(N),
                        u.updateToc(y),
                        w && clearTimeout(w),
                        (w = setTimeout(function () {
                          u.enableTocAnimation();
                        }, r.scrollSmoothDuration));
                    }, r.throttleTimeout)),
                    r.scrollContainer &&
                    document.querySelector(r.scrollContainer)
                      ? document
                          .querySelector(r.scrollContainer)
                          .addEventListener('click', this._clickListener, !1)
                      : document.addEventListener(
                          'click',
                          this._clickListener,
                          !1
                        ),
                    this
                  );
                }
              }
            }
          }),
          (n.refresh = function (x) {
            n.destroy(), n.init(x || this.options);
          }),
          (e.tocbot = n),
          n
        );
      });
    });
    function xt() {
      return (xt =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }).apply(this, arguments);
    }
    function Ii(e, t) {
      if (e == null) return {};
      var r,
        n,
        a = {},
        o = Object.keys(e);
      for (n = 0; n < o.length; n++)
        t.indexOf((r = o[n])) >= 0 || (a[r] = e[r]);
      return a;
    }
    function _i(e) {
      var t = we(e),
        r = we(function (n) {
          t.current && t.current(n);
        });
      return (t.current = e), r.current;
    }
    function Ag(e, t, r) {
      var n = _i(r),
        a = te(function () {
          return e.toHsva(t);
        }),
        o = a[0],
        i = a[1],
        u = we({ color: t, hsva: o });
      he(
        function () {
          if (!e.equal(t, u.current.color)) {
            var p = e.toHsva(t);
            (u.current = { hsva: p, color: t }), i(p);
          }
        },
        [t, e]
      ),
        he(
          function () {
            var p;
            bg(o, u.current.hsva) ||
              e.equal((p = e.fromHsva(o)), u.current.color) ||
              ((u.current = { hsva: o, color: p }), n(p));
          },
          [o, e, n]
        );
      var s = me(function (p) {
        i(function (y) {
          return Object.assign({}, y, p);
        });
      }, []);
      return [o, s];
    }
    var rr,
      Hr,
      Oi,
      cg,
      dg,
      ki,
      Gr,
      Ni,
      ve,
      A4,
      v4,
      Ri,
      D4,
      C4,
      x4,
      S4,
      fg,
      Pi,
      na,
      hg,
      F4,
      ra,
      w4,
      mg,
      gg,
      yg,
      bg,
      Eg,
      B4,
      T4,
      _4,
      O4,
      pg,
      vg,
      R4,
      P4,
      Dg,
      I4,
      Cg,
      k4,
      xg,
      N4,
      Sg,
      Fg = Ke(() => {
        l();
        c();
        d();
        Ft();
        (rr = function (e, t, r) {
          return (
            t === void 0 && (t = 0),
            r === void 0 && (r = 1),
            e > r ? r : e < t ? t : e
          );
        }),
          (Hr = function (e) {
            return 'touches' in e;
          }),
          (Oi = function (e) {
            return (e && e.ownerDocument.defaultView) || self;
          }),
          (cg = function (e, t, r) {
            var n = e.getBoundingClientRect(),
              a = Hr(t)
                ? (function (o, i) {
                    for (var u = 0; u < o.length; u++)
                      if (o[u].identifier === i) return o[u];
                    return o[0];
                  })(t.touches, r)
                : t;
            return {
              left: rr((a.pageX - (n.left + Oi(e).pageXOffset)) / n.width),
              top: rr((a.pageY - (n.top + Oi(e).pageYOffset)) / n.height),
            };
          }),
          (dg = function (e) {
            !Hr(e) && e.preventDefault();
          }),
          (ki = g.memo(function (e) {
            var t = e.onMove,
              r = e.onKey,
              n = Ii(e, ['onMove', 'onKey']),
              a = we(null),
              o = _i(t),
              i = _i(r),
              u = we(null),
              s = we(!1),
              p = et(
                function () {
                  var h = function (x) {
                      dg(x),
                        (Hr(x) ? x.touches.length > 0 : x.buttons > 0) &&
                        a.current
                          ? o(cg(a.current, x, u.current))
                          : b(!1);
                    },
                    E = function () {
                      return b(!1);
                    };
                  function b(x) {
                    var F = s.current,
                      B = Oi(a.current),
                      I = x ? B.addEventListener : B.removeEventListener;
                    I(F ? 'touchmove' : 'mousemove', h),
                      I(F ? 'touchend' : 'mouseup', E);
                  }
                  return [
                    function (x) {
                      var F = x.nativeEvent,
                        B = a.current;
                      if (
                        B &&
                        (dg(F),
                        !(function (q, w) {
                          return w && !Hr(q);
                        })(F, s.current) && B)
                      ) {
                        if (Hr(F)) {
                          s.current = !0;
                          var I = F.changedTouches || [];
                          I.length && (u.current = I[0].identifier);
                        }
                        B.focus(), o(cg(B, F, u.current)), b(!0);
                      }
                    },
                    function (x) {
                      var F = x.which || x.keyCode;
                      F < 37 ||
                        F > 40 ||
                        (x.preventDefault(),
                        i({
                          left: F === 39 ? 0.05 : F === 37 ? -0.05 : 0,
                          top: F === 40 ? 0.05 : F === 38 ? -0.05 : 0,
                        }));
                    },
                    b,
                  ];
                },
                [i, o]
              ),
              y = p[0],
              A = p[1],
              m = p[2];
            return (
              he(
                function () {
                  return m;
                },
                [m]
              ),
              g.createElement(
                'div',
                xt({}, n, {
                  onTouchStart: y,
                  onMouseDown: y,
                  className: 'react-colorful__interactive',
                  ref: a,
                  onKeyDown: A,
                  tabIndex: 0,
                  role: 'slider',
                })
              )
            );
          })),
          (Gr = function (e) {
            return e.filter(Boolean).join(' ');
          }),
          (Ni = function (e) {
            var t = e.color,
              r = e.left,
              n = e.top,
              a = n === void 0 ? 0.5 : n,
              o = Gr(['react-colorful__pointer', e.className]);
            return g.createElement(
              'div',
              {
                className: o,
                style: { top: 100 * a + '%', left: 100 * r + '%' },
              },
              g.createElement('div', {
                className: 'react-colorful__pointer-fill',
                style: { backgroundColor: t },
              })
            );
          }),
          (ve = function (e, t, r) {
            return (
              t === void 0 && (t = 0),
              r === void 0 && (r = Math.pow(10, t)),
              Math.round(r * e) / r
            );
          }),
          (A4 = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) }),
          (v4 = function (e) {
            return mg(Ri(e));
          }),
          (Ri = function (e) {
            return (
              e[0] === '#' && (e = e.substring(1)),
              e.length < 6
                ? {
                    r: parseInt(e[0] + e[0], 16),
                    g: parseInt(e[1] + e[1], 16),
                    b: parseInt(e[2] + e[2], 16),
                    a:
                      e.length === 4
                        ? ve(parseInt(e[3] + e[3], 16) / 255, 2)
                        : 1,
                  }
                : {
                    r: parseInt(e.substring(0, 2), 16),
                    g: parseInt(e.substring(2, 4), 16),
                    b: parseInt(e.substring(4, 6), 16),
                    a:
                      e.length === 8
                        ? ve(parseInt(e.substring(6, 8), 16) / 255, 2)
                        : 1,
                  }
            );
          }),
          (D4 = function (e, t) {
            return t === void 0 && (t = 'deg'), Number(e) * (A4[t] || 1);
          }),
          (C4 = function (e) {
            var t =
              /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
                e
              );
            return t
              ? x4({
                  h: D4(t[1], t[2]),
                  s: Number(t[3]),
                  l: Number(t[4]),
                  a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1),
                })
              : { h: 0, s: 0, v: 0, a: 1 };
          }),
          (x4 = function (e) {
            var t = e.s,
              r = e.l;
            return {
              h: e.h,
              s:
                (t *= (r < 50 ? r : 100 - r) / 100) > 0
                  ? ((2 * t) / (r + t)) * 100
                  : 0,
              v: r + t,
              a: e.a,
            };
          }),
          (S4 = function (e) {
            return w4(hg(e));
          }),
          (fg = function (e) {
            var t = e.s,
              r = e.v,
              n = e.a,
              a = ((200 - t) * r) / 100;
            return {
              h: ve(e.h),
              s: ve(
                a > 0 && a < 200
                  ? ((t * r) / 100 / (a <= 100 ? a : 200 - a)) * 100
                  : 0
              ),
              l: ve(a / 2),
              a: ve(n, 2),
            };
          }),
          (Pi = function (e) {
            var t = fg(e);
            return 'hsl(' + t.h + ', ' + t.s + '%, ' + t.l + '%)';
          }),
          (na = function (e) {
            var t = fg(e);
            return 'hsla(' + t.h + ', ' + t.s + '%, ' + t.l + '%, ' + t.a + ')';
          }),
          (hg = function (e) {
            var t = e.h,
              r = e.s,
              n = e.v,
              a = e.a;
            (t = (t / 360) * 6), (r /= 100), (n /= 100);
            var o = Math.floor(t),
              i = n * (1 - r),
              u = n * (1 - (t - o) * r),
              s = n * (1 - (1 - t + o) * r),
              p = o % 6;
            return {
              r: ve(255 * [n, u, i, i, s, n][p]),
              g: ve(255 * [s, n, n, u, i, i][p]),
              b: ve(255 * [i, i, s, n, n, u][p]),
              a: ve(a, 2),
            };
          }),
          (F4 = function (e) {
            var t =
              /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
                e
              );
            return t
              ? mg({
                  r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
                  g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
                  b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
                  a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1),
                })
              : { h: 0, s: 0, v: 0, a: 1 };
          }),
          (ra = function (e) {
            var t = e.toString(16);
            return t.length < 2 ? '0' + t : t;
          }),
          (w4 = function (e) {
            var t = e.r,
              r = e.g,
              n = e.b,
              a = e.a,
              o = a < 1 ? ra(ve(255 * a)) : '';
            return '#' + ra(t) + ra(r) + ra(n) + o;
          }),
          (mg = function (e) {
            var t = e.r,
              r = e.g,
              n = e.b,
              a = e.a,
              o = Math.max(t, r, n),
              i = o - Math.min(t, r, n),
              u = i
                ? o === t
                  ? (r - n) / i
                  : o === r
                    ? 2 + (n - t) / i
                    : 4 + (t - r) / i
                : 0;
            return {
              h: ve(60 * (u < 0 ? u + 6 : u)),
              s: ve(o ? (i / o) * 100 : 0),
              v: ve((o / 255) * 100),
              a,
            };
          }),
          (gg = g.memo(function (e) {
            var t = e.hue,
              r = e.onChange,
              n = Gr(['react-colorful__hue', e.className]);
            return g.createElement(
              'div',
              { className: n },
              g.createElement(
                ki,
                {
                  onMove: function (a) {
                    r({ h: 360 * a.left });
                  },
                  onKey: function (a) {
                    r({ h: rr(t + 360 * a.left, 0, 360) });
                  },
                  'aria-label': 'Hue',
                  'aria-valuenow': ve(t),
                  'aria-valuemax': '360',
                  'aria-valuemin': '0',
                },
                g.createElement(Ni, {
                  className: 'react-colorful__hue-pointer',
                  left: t / 360,
                  color: Pi({ h: t, s: 100, v: 100, a: 1 }),
                })
              )
            );
          })),
          (yg = g.memo(function (e) {
            var t = e.hsva,
              r = e.onChange,
              n = { backgroundColor: Pi({ h: t.h, s: 100, v: 100, a: 1 }) };
            return g.createElement(
              'div',
              { className: 'react-colorful__saturation', style: n },
              g.createElement(
                ki,
                {
                  onMove: function (a) {
                    r({ s: 100 * a.left, v: 100 - 100 * a.top });
                  },
                  onKey: function (a) {
                    r({
                      s: rr(t.s + 100 * a.left, 0, 100),
                      v: rr(t.v - 100 * a.top, 0, 100),
                    });
                  },
                  'aria-label': 'Color',
                  'aria-valuetext':
                    'Saturation ' + ve(t.s) + '%, Brightness ' + ve(t.v) + '%',
                },
                g.createElement(Ni, {
                  className: 'react-colorful__saturation-pointer',
                  top: 1 - t.v / 100,
                  left: t.s / 100,
                  color: Pi(t),
                })
              )
            );
          })),
          (bg = function (e, t) {
            if (e === t) return !0;
            for (var r in e) if (e[r] !== t[r]) return !1;
            return !0;
          }),
          (Eg = function (e, t) {
            return e.replace(/\s/g, '') === t.replace(/\s/g, '');
          }),
          (B4 = function (e, t) {
            return e.toLowerCase() === t.toLowerCase() || bg(Ri(e), Ri(t));
          });
        (_4 = typeof window < 'u' ? ou : he),
          (O4 = function () {
            return (
              T4 ||
              (typeof __webpack_nonce__ < 'u' ? __webpack_nonce__ : void 0)
            );
          }),
          (pg = new Map()),
          (vg = function (e) {
            _4(function () {
              var t = e.current ? e.current.ownerDocument : document;
              if (t !== void 0 && !pg.has(t)) {
                var r = t.createElement('style');
                (r.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`),
                  pg.set(t, r);
                var n = O4();
                n && r.setAttribute('nonce', n), t.head.appendChild(r);
              }
            }, []);
          }),
          (R4 = function (e) {
            var t = e.className,
              r = e.colorModel,
              n = e.color,
              a = n === void 0 ? r.defaultColor : n,
              o = e.onChange,
              i = Ii(e, ['className', 'colorModel', 'color', 'onChange']),
              u = we(null);
            vg(u);
            var s = Ag(r, a, o),
              p = s[0],
              y = s[1],
              A = Gr(['react-colorful', t]);
            return g.createElement(
              'div',
              xt({}, i, { ref: u, className: A }),
              g.createElement(yg, { hsva: p, onChange: y }),
              g.createElement(gg, {
                hue: p.h,
                onChange: y,
                className: 'react-colorful__last-control',
              })
            );
          }),
          (P4 = {
            defaultColor: '000',
            toHsva: v4,
            fromHsva: function (e) {
              return S4({ h: e.h, s: e.s, v: e.v, a: 1 });
            },
            equal: B4,
          }),
          (Dg = function (e) {
            return g.createElement(R4, xt({}, e, { colorModel: P4 }));
          }),
          (I4 = function (e) {
            var t = e.className,
              r = e.hsva,
              n = e.onChange,
              a = {
                backgroundImage:
                  'linear-gradient(90deg, ' +
                  na(Object.assign({}, r, { a: 0 })) +
                  ', ' +
                  na(Object.assign({}, r, { a: 1 })) +
                  ')',
              },
              o = Gr(['react-colorful__alpha', t]),
              i = ve(100 * r.a);
            return g.createElement(
              'div',
              { className: o },
              g.createElement('div', {
                className: 'react-colorful__alpha-gradient',
                style: a,
              }),
              g.createElement(
                ki,
                {
                  onMove: function (u) {
                    n({ a: u.left });
                  },
                  onKey: function (u) {
                    n({ a: rr(r.a + u.left) });
                  },
                  'aria-label': 'Alpha',
                  'aria-valuetext': i + '%',
                  'aria-valuenow': i,
                  'aria-valuemin': '0',
                  'aria-valuemax': '100',
                },
                g.createElement(Ni, {
                  className: 'react-colorful__alpha-pointer',
                  left: r.a,
                  color: na(r),
                })
              )
            );
          }),
          (Cg = function (e) {
            var t = e.className,
              r = e.colorModel,
              n = e.color,
              a = n === void 0 ? r.defaultColor : n,
              o = e.onChange,
              i = Ii(e, ['className', 'colorModel', 'color', 'onChange']),
              u = we(null);
            vg(u);
            var s = Ag(r, a, o),
              p = s[0],
              y = s[1],
              A = Gr(['react-colorful', t]);
            return g.createElement(
              'div',
              xt({}, i, { ref: u, className: A }),
              g.createElement(yg, { hsva: p, onChange: y }),
              g.createElement(gg, { hue: p.h, onChange: y }),
              g.createElement(I4, {
                hsva: p,
                onChange: y,
                className: 'react-colorful__last-control',
              })
            );
          }),
          (k4 = {
            defaultColor: 'hsla(0, 0%, 0%, 1)',
            toHsva: C4,
            fromHsva: na,
            equal: Eg,
          }),
          (xg = function (e) {
            return g.createElement(Cg, xt({}, e, { colorModel: k4 }));
          }),
          (N4 = {
            defaultColor: 'rgba(0, 0, 0, 1)',
            toHsva: F4,
            fromHsva: function (e) {
              var t = hg(e);
              return 'rgba(' + t.r + ', ' + t.g + ', ' + t.b + ', ' + t.a + ')';
            },
            equal: Eg,
          }),
          (Sg = function (e) {
            return g.createElement(Cg, xt({}, e, { colorModel: N4 }));
          });
      });
    var Bg = S((Ete, wg) => {
      'use strict';
      l();
      c();
      d();
      wg.exports = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50],
      };
    });
    var Li = S((Cte, _g) => {
      l();
      c();
      d();
      var Wr = Bg(),
        Tg = {};
      for (let e of Object.keys(Wr)) Tg[Wr[e]] = e;
      var W = {
        rgb: { channels: 3, labels: 'rgb' },
        hsl: { channels: 3, labels: 'hsl' },
        hsv: { channels: 3, labels: 'hsv' },
        hwb: { channels: 3, labels: 'hwb' },
        cmyk: { channels: 4, labels: 'cmyk' },
        xyz: { channels: 3, labels: 'xyz' },
        lab: { channels: 3, labels: 'lab' },
        lch: { channels: 3, labels: 'lch' },
        hex: { channels: 1, labels: ['hex'] },
        keyword: { channels: 1, labels: ['keyword'] },
        ansi16: { channels: 1, labels: ['ansi16'] },
        ansi256: { channels: 1, labels: ['ansi256'] },
        hcg: { channels: 3, labels: ['h', 'c', 'g'] },
        apple: { channels: 3, labels: ['r16', 'g16', 'b16'] },
        gray: { channels: 1, labels: ['gray'] },
      };
      _g.exports = W;
      for (let e of Object.keys(W)) {
        if (!('channels' in W[e]))
          throw new Error('missing channels property: ' + e);
        if (!('labels' in W[e]))
          throw new Error('missing channel labels property: ' + e);
        if (W[e].labels.length !== W[e].channels)
          throw new Error('channel and label counts mismatch: ' + e);
        let { channels: t, labels: r } = W[e];
        delete W[e].channels,
          delete W[e].labels,
          Object.defineProperty(W[e], 'channels', { value: t }),
          Object.defineProperty(W[e], 'labels', { value: r });
      }
      W.rgb.hsl = function (e) {
        let t = e[0] / 255,
          r = e[1] / 255,
          n = e[2] / 255,
          a = Math.min(t, r, n),
          o = Math.max(t, r, n),
          i = o - a,
          u,
          s;
        o === a
          ? (u = 0)
          : t === o
            ? (u = (r - n) / i)
            : r === o
              ? (u = 2 + (n - t) / i)
              : n === o && (u = 4 + (t - r) / i),
          (u = Math.min(u * 60, 360)),
          u < 0 && (u += 360);
        let p = (a + o) / 2;
        return (
          o === a
            ? (s = 0)
            : p <= 0.5
              ? (s = i / (o + a))
              : (s = i / (2 - o - a)),
          [u, s * 100, p * 100]
        );
      };
      W.rgb.hsv = function (e) {
        let t,
          r,
          n,
          a,
          o,
          i = e[0] / 255,
          u = e[1] / 255,
          s = e[2] / 255,
          p = Math.max(i, u, s),
          y = p - Math.min(i, u, s),
          A = function (m) {
            return (p - m) / 6 / y + 1 / 2;
          };
        return (
          y === 0
            ? ((a = 0), (o = 0))
            : ((o = y / p),
              (t = A(i)),
              (r = A(u)),
              (n = A(s)),
              i === p
                ? (a = n - r)
                : u === p
                  ? (a = 1 / 3 + t - n)
                  : s === p && (a = 2 / 3 + r - t),
              a < 0 ? (a += 1) : a > 1 && (a -= 1)),
          [a * 360, o * 100, p * 100]
        );
      };
      W.rgb.hwb = function (e) {
        let t = e[0],
          r = e[1],
          n = e[2],
          a = W.rgb.hsl(e)[0],
          o = (1 / 255) * Math.min(t, Math.min(r, n));
        return (
          (n = 1 - (1 / 255) * Math.max(t, Math.max(r, n))),
          [a, o * 100, n * 100]
        );
      };
      W.rgb.cmyk = function (e) {
        let t = e[0] / 255,
          r = e[1] / 255,
          n = e[2] / 255,
          a = Math.min(1 - t, 1 - r, 1 - n),
          o = (1 - t - a) / (1 - a) || 0,
          i = (1 - r - a) / (1 - a) || 0,
          u = (1 - n - a) / (1 - a) || 0;
        return [o * 100, i * 100, u * 100, a * 100];
      };
      function L4(e, t) {
        return (e[0] - t[0]) ** 2 + (e[1] - t[1]) ** 2 + (e[2] - t[2]) ** 2;
      }
      W.rgb.keyword = function (e) {
        let t = Tg[e];
        if (t) return t;
        let r = 1 / 0,
          n;
        for (let a of Object.keys(Wr)) {
          let o = Wr[a],
            i = L4(e, o);
          i < r && ((r = i), (n = a));
        }
        return n;
      };
      W.keyword.rgb = function (e) {
        return Wr[e];
      };
      W.rgb.xyz = function (e) {
        let t = e[0] / 255,
          r = e[1] / 255,
          n = e[2] / 255;
        (t = t > 0.04045 ? ((t + 0.055) / 1.055) ** 2.4 : t / 12.92),
          (r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92),
          (n = n > 0.04045 ? ((n + 0.055) / 1.055) ** 2.4 : n / 12.92);
        let a = t * 0.4124 + r * 0.3576 + n * 0.1805,
          o = t * 0.2126 + r * 0.7152 + n * 0.0722,
          i = t * 0.0193 + r * 0.1192 + n * 0.9505;
        return [a * 100, o * 100, i * 100];
      };
      W.rgb.lab = function (e) {
        let t = W.rgb.xyz(e),
          r = t[0],
          n = t[1],
          a = t[2];
        (r /= 95.047),
          (n /= 100),
          (a /= 108.883),
          (r = r > 0.008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116),
          (n = n > 0.008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116),
          (a = a > 0.008856 ? a ** (1 / 3) : 7.787 * a + 16 / 116);
        let o = 116 * n - 16,
          i = 500 * (r - n),
          u = 200 * (n - a);
        return [o, i, u];
      };
      W.hsl.rgb = function (e) {
        let t = e[0] / 360,
          r = e[1] / 100,
          n = e[2] / 100,
          a,
          o,
          i;
        if (r === 0) return (i = n * 255), [i, i, i];
        n < 0.5 ? (a = n * (1 + r)) : (a = n + r - n * r);
        let u = 2 * n - a,
          s = [0, 0, 0];
        for (let p = 0; p < 3; p++)
          (o = t + (1 / 3) * -(p - 1)),
            o < 0 && o++,
            o > 1 && o--,
            6 * o < 1
              ? (i = u + (a - u) * 6 * o)
              : 2 * o < 1
                ? (i = a)
                : 3 * o < 2
                  ? (i = u + (a - u) * (2 / 3 - o) * 6)
                  : (i = u),
            (s[p] = i * 255);
        return s;
      };
      W.hsl.hsv = function (e) {
        let t = e[0],
          r = e[1] / 100,
          n = e[2] / 100,
          a = r,
          o = Math.max(n, 0.01);
        (n *= 2), (r *= n <= 1 ? n : 2 - n), (a *= o <= 1 ? o : 2 - o);
        let i = (n + r) / 2,
          u = n === 0 ? (2 * a) / (o + a) : (2 * r) / (n + r);
        return [t, u * 100, i * 100];
      };
      W.hsv.rgb = function (e) {
        let t = e[0] / 60,
          r = e[1] / 100,
          n = e[2] / 100,
          a = Math.floor(t) % 6,
          o = t - Math.floor(t),
          i = 255 * n * (1 - r),
          u = 255 * n * (1 - r * o),
          s = 255 * n * (1 - r * (1 - o));
        switch (((n *= 255), a)) {
          case 0:
            return [n, s, i];
          case 1:
            return [u, n, i];
          case 2:
            return [i, n, s];
          case 3:
            return [i, u, n];
          case 4:
            return [s, i, n];
          case 5:
            return [n, i, u];
        }
      };
      W.hsv.hsl = function (e) {
        let t = e[0],
          r = e[1] / 100,
          n = e[2] / 100,
          a = Math.max(n, 0.01),
          o,
          i;
        i = (2 - r) * n;
        let u = (2 - r) * a;
        return (
          (o = r * a),
          (o /= u <= 1 ? u : 2 - u),
          (o = o || 0),
          (i /= 2),
          [t, o * 100, i * 100]
        );
      };
      W.hwb.rgb = function (e) {
        let t = e[0] / 360,
          r = e[1] / 100,
          n = e[2] / 100,
          a = r + n,
          o;
        a > 1 && ((r /= a), (n /= a));
        let i = Math.floor(6 * t),
          u = 1 - n;
        (o = 6 * t - i), i & 1 && (o = 1 - o);
        let s = r + o * (u - r),
          p,
          y,
          A;
        switch (i) {
          default:
          case 6:
          case 0:
            (p = u), (y = s), (A = r);
            break;
          case 1:
            (p = s), (y = u), (A = r);
            break;
          case 2:
            (p = r), (y = u), (A = s);
            break;
          case 3:
            (p = r), (y = s), (A = u);
            break;
          case 4:
            (p = s), (y = r), (A = u);
            break;
          case 5:
            (p = u), (y = r), (A = s);
            break;
        }
        return [p * 255, y * 255, A * 255];
      };
      W.cmyk.rgb = function (e) {
        let t = e[0] / 100,
          r = e[1] / 100,
          n = e[2] / 100,
          a = e[3] / 100,
          o = 1 - Math.min(1, t * (1 - a) + a),
          i = 1 - Math.min(1, r * (1 - a) + a),
          u = 1 - Math.min(1, n * (1 - a) + a);
        return [o * 255, i * 255, u * 255];
      };
      W.xyz.rgb = function (e) {
        let t = e[0] / 100,
          r = e[1] / 100,
          n = e[2] / 100,
          a,
          o,
          i;
        return (
          (a = t * 3.2406 + r * -1.5372 + n * -0.4986),
          (o = t * -0.9689 + r * 1.8758 + n * 0.0415),
          (i = t * 0.0557 + r * -0.204 + n * 1.057),
          (a = a > 0.0031308 ? 1.055 * a ** (1 / 2.4) - 0.055 : a * 12.92),
          (o = o > 0.0031308 ? 1.055 * o ** (1 / 2.4) - 0.055 : o * 12.92),
          (i = i > 0.0031308 ? 1.055 * i ** (1 / 2.4) - 0.055 : i * 12.92),
          (a = Math.min(Math.max(0, a), 1)),
          (o = Math.min(Math.max(0, o), 1)),
          (i = Math.min(Math.max(0, i), 1)),
          [a * 255, o * 255, i * 255]
        );
      };
      W.xyz.lab = function (e) {
        let t = e[0],
          r = e[1],
          n = e[2];
        (t /= 95.047),
          (r /= 100),
          (n /= 108.883),
          (t = t > 0.008856 ? t ** (1 / 3) : 7.787 * t + 16 / 116),
          (r = r > 0.008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116),
          (n = n > 0.008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116);
        let a = 116 * r - 16,
          o = 500 * (t - r),
          i = 200 * (r - n);
        return [a, o, i];
      };
      W.lab.xyz = function (e) {
        let t = e[0],
          r = e[1],
          n = e[2],
          a,
          o,
          i;
        (o = (t + 16) / 116), (a = r / 500 + o), (i = o - n / 200);
        let u = o ** 3,
          s = a ** 3,
          p = i ** 3;
        return (
          (o = u > 0.008856 ? u : (o - 16 / 116) / 7.787),
          (a = s > 0.008856 ? s : (a - 16 / 116) / 7.787),
          (i = p > 0.008856 ? p : (i - 16 / 116) / 7.787),
          (a *= 95.047),
          (o *= 100),
          (i *= 108.883),
          [a, o, i]
        );
      };
      W.lab.lch = function (e) {
        let t = e[0],
          r = e[1],
          n = e[2],
          a;
        (a = (Math.atan2(n, r) * 360) / 2 / Math.PI), a < 0 && (a += 360);
        let i = Math.sqrt(r * r + n * n);
        return [t, i, a];
      };
      W.lch.lab = function (e) {
        let t = e[0],
          r = e[1],
          a = (e[2] / 360) * 2 * Math.PI,
          o = r * Math.cos(a),
          i = r * Math.sin(a);
        return [t, o, i];
      };
      W.rgb.ansi16 = function (e, t = null) {
        let [r, n, a] = e,
          o = t === null ? W.rgb.hsv(e)[2] : t;
        if (((o = Math.round(o / 50)), o === 0)) return 30;
        let i =
          30 +
          ((Math.round(a / 255) << 2) |
            (Math.round(n / 255) << 1) |
            Math.round(r / 255));
        return o === 2 && (i += 60), i;
      };
      W.hsv.ansi16 = function (e) {
        return W.rgb.ansi16(W.hsv.rgb(e), e[2]);
      };
      W.rgb.ansi256 = function (e) {
        let t = e[0],
          r = e[1],
          n = e[2];
        return t === r && r === n
          ? t < 8
            ? 16
            : t > 248
              ? 231
              : Math.round(((t - 8) / 247) * 24) + 232
          : 16 +
              36 * Math.round((t / 255) * 5) +
              6 * Math.round((r / 255) * 5) +
              Math.round((n / 255) * 5);
      };
      W.ansi16.rgb = function (e) {
        let t = e % 10;
        if (t === 0 || t === 7)
          return e > 50 && (t += 3.5), (t = (t / 10.5) * 255), [t, t, t];
        let r = (~~(e > 50) + 1) * 0.5,
          n = (t & 1) * r * 255,
          a = ((t >> 1) & 1) * r * 255,
          o = ((t >> 2) & 1) * r * 255;
        return [n, a, o];
      };
      W.ansi256.rgb = function (e) {
        if (e >= 232) {
          let o = (e - 232) * 10 + 8;
          return [o, o, o];
        }
        e -= 16;
        let t,
          r = (Math.floor(e / 36) / 5) * 255,
          n = (Math.floor((t = e % 36) / 6) / 5) * 255,
          a = ((t % 6) / 5) * 255;
        return [r, n, a];
      };
      W.rgb.hex = function (e) {
        let r = (
          ((Math.round(e[0]) & 255) << 16) +
          ((Math.round(e[1]) & 255) << 8) +
          (Math.round(e[2]) & 255)
        )
          .toString(16)
          .toUpperCase();
        return '000000'.substring(r.length) + r;
      };
      W.hex.rgb = function (e) {
        let t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
        if (!t) return [0, 0, 0];
        let r = t[0];
        t[0].length === 3 &&
          (r = r
            .split('')
            .map((u) => u + u)
            .join(''));
        let n = parseInt(r, 16),
          a = (n >> 16) & 255,
          o = (n >> 8) & 255,
          i = n & 255;
        return [a, o, i];
      };
      W.rgb.hcg = function (e) {
        let t = e[0] / 255,
          r = e[1] / 255,
          n = e[2] / 255,
          a = Math.max(Math.max(t, r), n),
          o = Math.min(Math.min(t, r), n),
          i = a - o,
          u,
          s;
        return (
          i < 1 ? (u = o / (1 - i)) : (u = 0),
          i <= 0
            ? (s = 0)
            : a === t
              ? (s = ((r - n) / i) % 6)
              : a === r
                ? (s = 2 + (n - t) / i)
                : (s = 4 + (t - r) / i),
          (s /= 6),
          (s %= 1),
          [s * 360, i * 100, u * 100]
        );
      };
      W.hsl.hcg = function (e) {
        let t = e[1] / 100,
          r = e[2] / 100,
          n = r < 0.5 ? 2 * t * r : 2 * t * (1 - r),
          a = 0;
        return n < 1 && (a = (r - 0.5 * n) / (1 - n)), [e[0], n * 100, a * 100];
      };
      W.hsv.hcg = function (e) {
        let t = e[1] / 100,
          r = e[2] / 100,
          n = t * r,
          a = 0;
        return n < 1 && (a = (r - n) / (1 - n)), [e[0], n * 100, a * 100];
      };
      W.hcg.rgb = function (e) {
        let t = e[0] / 360,
          r = e[1] / 100,
          n = e[2] / 100;
        if (r === 0) return [n * 255, n * 255, n * 255];
        let a = [0, 0, 0],
          o = (t % 1) * 6,
          i = o % 1,
          u = 1 - i,
          s = 0;
        switch (Math.floor(o)) {
          case 0:
            (a[0] = 1), (a[1] = i), (a[2] = 0);
            break;
          case 1:
            (a[0] = u), (a[1] = 1), (a[2] = 0);
            break;
          case 2:
            (a[0] = 0), (a[1] = 1), (a[2] = i);
            break;
          case 3:
            (a[0] = 0), (a[1] = u), (a[2] = 1);
            break;
          case 4:
            (a[0] = i), (a[1] = 0), (a[2] = 1);
            break;
          default:
            (a[0] = 1), (a[1] = 0), (a[2] = u);
        }
        return (
          (s = (1 - r) * n),
          [(r * a[0] + s) * 255, (r * a[1] + s) * 255, (r * a[2] + s) * 255]
        );
      };
      W.hcg.hsv = function (e) {
        let t = e[1] / 100,
          r = e[2] / 100,
          n = t + r * (1 - t),
          a = 0;
        return n > 0 && (a = t / n), [e[0], a * 100, n * 100];
      };
      W.hcg.hsl = function (e) {
        let t = e[1] / 100,
          n = (e[2] / 100) * (1 - t) + 0.5 * t,
          a = 0;
        return (
          n > 0 && n < 0.5
            ? (a = t / (2 * n))
            : n >= 0.5 && n < 1 && (a = t / (2 * (1 - n))),
          [e[0], a * 100, n * 100]
        );
      };
      W.hcg.hwb = function (e) {
        let t = e[1] / 100,
          r = e[2] / 100,
          n = t + r * (1 - t);
        return [e[0], (n - t) * 100, (1 - n) * 100];
      };
      W.hwb.hcg = function (e) {
        let t = e[1] / 100,
          n = 1 - e[2] / 100,
          a = n - t,
          o = 0;
        return a < 1 && (o = (n - a) / (1 - a)), [e[0], a * 100, o * 100];
      };
      W.apple.rgb = function (e) {
        return [
          (e[0] / 65535) * 255,
          (e[1] / 65535) * 255,
          (e[2] / 65535) * 255,
        ];
      };
      W.rgb.apple = function (e) {
        return [
          (e[0] / 255) * 65535,
          (e[1] / 255) * 65535,
          (e[2] / 255) * 65535,
        ];
      };
      W.gray.rgb = function (e) {
        return [(e[0] / 100) * 255, (e[0] / 100) * 255, (e[0] / 100) * 255];
      };
      W.gray.hsl = function (e) {
        return [0, 0, e[0]];
      };
      W.gray.hsv = W.gray.hsl;
      W.gray.hwb = function (e) {
        return [0, 100, e[0]];
      };
      W.gray.cmyk = function (e) {
        return [0, 0, 0, e[0]];
      };
      W.gray.lab = function (e) {
        return [e[0], 0, 0];
      };
      W.gray.hex = function (e) {
        let t = Math.round((e[0] / 100) * 255) & 255,
          n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
        return '000000'.substring(n.length) + n;
      };
      W.rgb.gray = function (e) {
        return [((e[0] + e[1] + e[2]) / 3 / 255) * 100];
      };
    });
    var Rg = S((wte, Og) => {
      l();
      c();
      d();
      var aa = Li();
      function q4() {
        let e = {},
          t = Object.keys(aa);
        for (let r = t.length, n = 0; n < r; n++)
          e[t[n]] = { distance: -1, parent: null };
        return e;
      }
      function j4(e) {
        let t = q4(),
          r = [e];
        for (t[e].distance = 0; r.length; ) {
          let n = r.pop(),
            a = Object.keys(aa[n]);
          for (let o = a.length, i = 0; i < o; i++) {
            let u = a[i],
              s = t[u];
            s.distance === -1 &&
              ((s.distance = t[n].distance + 1), (s.parent = n), r.unshift(u));
          }
        }
        return t;
      }
      function M4(e, t) {
        return function (r) {
          return t(e(r));
        };
      }
      function $4(e, t) {
        let r = [t[e].parent, e],
          n = aa[t[e].parent][e],
          a = t[e].parent;
        for (; t[a].parent; )
          r.unshift(t[a].parent),
            (n = M4(aa[t[a].parent][a], n)),
            (a = t[a].parent);
        return (n.conversion = r), n;
      }
      Og.exports = function (e) {
        let t = j4(e),
          r = {},
          n = Object.keys(t);
        for (let a = n.length, o = 0; o < a; o++) {
          let i = n[o];
          t[i].parent !== null && (r[i] = $4(i, t));
        }
        return r;
      };
    });
    var Ig = S((Ote, Pg) => {
      l();
      c();
      d();
      var qi = Li(),
        U4 = Rg(),
        nr = {},
        z4 = Object.keys(qi);
      function H4(e) {
        let t = function (...r) {
          let n = r[0];
          return n == null ? n : (n.length > 1 && (r = n), e(r));
        };
        return 'conversion' in e && (t.conversion = e.conversion), t;
      }
      function G4(e) {
        let t = function (...r) {
          let n = r[0];
          if (n == null) return n;
          n.length > 1 && (r = n);
          let a = e(r);
          if (typeof a == 'object')
            for (let o = a.length, i = 0; i < o; i++) a[i] = Math.round(a[i]);
          return a;
        };
        return 'conversion' in e && (t.conversion = e.conversion), t;
      }
      z4.forEach((e) => {
        (nr[e] = {}),
          Object.defineProperty(nr[e], 'channels', { value: qi[e].channels }),
          Object.defineProperty(nr[e], 'labels', { value: qi[e].labels });
        let t = U4(e);
        Object.keys(t).forEach((n) => {
          let a = t[n];
          (nr[e][n] = G4(a)), (nr[e][n].raw = H4(a));
        });
      });
      Pg.exports = nr;
    });
    var Ng = S((kte, kg) => {
      l();
      c();
      d();
      var W4 = Le(),
        V4 = function () {
          return W4.Date.now();
        };
      kg.exports = V4;
    });
    var qg = S((jte, Lg) => {
      l();
      c();
      d();
      var K4 = /\s/;
      function Y4(e) {
        for (var t = e.length; t-- && K4.test(e.charAt(t)); );
        return t;
      }
      Lg.exports = Y4;
    });
    var Mg = S((zte, jg) => {
      l();
      c();
      d();
      var J4 = qg(),
        X4 = /^\s+/;
      function Q4(e) {
        return e && e.slice(0, J4(e) + 1).replace(X4, '');
      }
      jg.exports = Q4;
    });
    var Hg = S((Vte, zg) => {
      l();
      c();
      d();
      var Z4 = Mg(),
        $g = $e(),
        eR = Cr(),
        Ug = 0 / 0,
        tR = /^[-+]0x[0-9a-f]+$/i,
        rR = /^0b[01]+$/i,
        nR = /^0o[0-7]+$/i,
        aR = parseInt;
      function oR(e) {
        if (typeof e == 'number') return e;
        if (eR(e)) return Ug;
        if ($g(e)) {
          var t = typeof e.valueOf == 'function' ? e.valueOf() : e;
          e = $g(t) ? t + '' : t;
        }
        if (typeof e != 'string') return e === 0 ? e : +e;
        e = Z4(e);
        var r = rR.test(e);
        return r || nR.test(e)
          ? aR(e.slice(2), r ? 2 : 8)
          : tR.test(e)
            ? Ug
            : +e;
      }
      zg.exports = oR;
    });
    var Vg = S((Xte, Wg) => {
      l();
      c();
      d();
      var iR = $e(),
        ji = Ng(),
        Gg = Hg(),
        uR = 'Expected a function',
        sR = Math.max,
        lR = Math.min;
      function cR(e, t, r) {
        var n,
          a,
          o,
          i,
          u,
          s,
          p = 0,
          y = !1,
          A = !1,
          m = !0;
        if (typeof e != 'function') throw new TypeError(uR);
        (t = Gg(t) || 0),
          iR(r) &&
            ((y = !!r.leading),
            (A = 'maxWait' in r),
            (o = A ? sR(Gg(r.maxWait) || 0, t) : o),
            (m = 'trailing' in r ? !!r.trailing : m));
        function h(N) {
          var k = n,
            z = a;
          return (n = a = void 0), (p = N), (i = e.apply(z, k)), i;
        }
        function E(N) {
          return (p = N), (u = setTimeout(F, t)), y ? h(N) : i;
        }
        function b(N) {
          var k = N - s,
            z = N - p,
            V = t - k;
          return A ? lR(V, o - z) : V;
        }
        function x(N) {
          var k = N - s,
            z = N - p;
          return s === void 0 || k >= t || k < 0 || (A && z >= o);
        }
        function F() {
          var N = ji();
          if (x(N)) return B(N);
          u = setTimeout(F, b(N));
        }
        function B(N) {
          return (u = void 0), m && n ? h(N) : ((n = a = void 0), i);
        }
        function I() {
          u !== void 0 && clearTimeout(u), (p = 0), (n = s = a = u = void 0);
        }
        function q() {
          return u === void 0 ? i : B(ji());
        }
        function w() {
          var N = ji(),
            k = x(N);
          if (((n = arguments), (a = this), (s = N), k)) {
            if (u === void 0) return E(s);
            if (A) return clearTimeout(u), (u = setTimeout(F, t)), h(s);
          }
          return u === void 0 && (u = setTimeout(F, t)), i;
        }
        return (w.cancel = I), (w.flush = q), w;
      }
      Wg.exports = cR;
    });
    var Yg = S((tre, Kg) => {
      l();
      c();
      d();
      var dR = Vg(),
        pR = $e(),
        fR = 'Expected a function';
      function hR(e, t, r) {
        var n = !0,
          a = !0;
        if (typeof e != 'function') throw new TypeError(fR);
        return (
          pR(r) &&
            ((n = 'leading' in r ? !!r.leading : n),
            (a = 'trailing' in r ? !!r.trailing : a)),
          dR(e, t, { leading: n, maxWait: t, trailing: a })
        );
      }
      Kg.exports = hR;
    });
    var ty = {};
    eu(ty, { ColorControl: () => ey, default: () => RR });
    var Ne,
      Qg,
      mR,
      gR,
      yR,
      bR,
      ER,
      AR,
      vR,
      Jg,
      DR,
      CR,
      Zg,
      oa,
      xR,
      SR,
      FR,
      Mi,
      wR,
      BR,
      ia,
      Xg,
      ar,
      TR,
      _R,
      ua,
      OR,
      ey,
      RR,
      ry = Ke(() => {
        l();
        c();
        d();
        Oa();
        Ft();
        Fg();
        (Ne = pe(Ig(), 1)), (Qg = pe(Yg(), 1));
        Pa();
        sr();
        (mR = j.div({ position: 'relative', maxWidth: 250 })),
          (gR = j(Jr)({ position: 'absolute', zIndex: 1, top: 4, left: 4 })),
          (yR = j.div({
            width: 200,
            margin: 5,
            '.react-colorful__saturation': { borderRadius: '4px 4px 0 0' },
            '.react-colorful__hue': {
              boxShadow: 'inset 0 0 0 1px rgb(0 0 0 / 5%)',
            },
            '.react-colorful__last-control': { borderRadius: '0 0 4px 4px' },
          })),
          (bR = j(Fa)(({ theme: e }) => ({
            fontFamily: e.typography.fonts.base,
          }))),
          (ER = j.div({
            display: 'grid',
            gridTemplateColumns: 'repeat(9, 16px)',
            gap: 6,
            padding: 3,
            marginTop: 5,
            width: 200,
          })),
          (AR = j.div(({ theme: e, active: t }) => ({
            width: 16,
            height: 16,
            boxShadow: t
              ? `${e.appBorderColor} 0 0 0 1px inset, ${e.textMutedColor}50 0 0 0 4px`
              : `${e.appBorderColor} 0 0 0 1px inset`,
            borderRadius: e.appBorderRadius,
          }))),
          (vR = `url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`),
          (Jg = ({ value: e, active: t, onClick: r, style: n, ...a }) => {
            let o = `linear-gradient(${e}, ${e}), ${vR}, linear-gradient(#fff, #fff)`;
            return g.createElement(AR, {
              ...a,
              active: t,
              onClick: r,
              style: { ...n, backgroundImage: o },
            });
          }),
          (DR = j(Te.Input)(({ theme: e }) => ({
            width: '100%',
            paddingLeft: 30,
            paddingRight: 30,
            boxSizing: 'border-box',
            fontFamily: e.typography.fonts.base,
          }))),
          (CR = j(Be)(({ theme: e }) => ({
            position: 'absolute',
            zIndex: 1,
            top: 6,
            right: 7,
            width: 20,
            height: 20,
            padding: 4,
            boxSizing: 'border-box',
            cursor: 'pointer',
            color: e.input.color,
          }))),
          (Zg = ((e) => ((e.RGB = 'rgb'), (e.HSL = 'hsl'), (e.HEX = 'hex'), e))(
            Zg || {}
          )),
          (oa = Object.values(Zg)),
          (xR = /\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/),
          (SR =
            /^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i),
          (FR =
            /^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i),
          (Mi = /^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i),
          (wR = /^\s*#?([0-9a-f]{3})\s*$/i),
          (BR = { hex: Dg, rgb: Sg, hsl: xg }),
          (ia = {
            hex: 'transparent',
            rgb: 'rgba(0, 0, 0, 0)',
            hsl: 'hsla(0, 0%, 0%, 0)',
          }),
          (Xg = (e) => {
            let t = e?.match(xR);
            if (!t) return [0, 0, 0, 1];
            let [, r, n, a, o = 1] = t;
            return [r, n, a, o].map(Number);
          }),
          (ar = (e) => {
            if (!e) return;
            let t = !0;
            if (SR.test(e)) {
              let [i, u, s, p] = Xg(e),
                [y, A, m] = Ne.default.rgb.hsl([i, u, s]) || [0, 0, 0];
              return {
                valid: t,
                value: e,
                keyword: Ne.default.rgb.keyword([i, u, s]),
                colorSpace: 'rgb',
                rgb: e,
                hsl: `hsla(${y}, ${A}%, ${m}%, ${p})`,
                hex: `#${Ne.default.rgb.hex([i, u, s]).toLowerCase()}`,
              };
            }
            if (FR.test(e)) {
              let [i, u, s, p] = Xg(e),
                [y, A, m] = Ne.default.hsl.rgb([i, u, s]) || [0, 0, 0];
              return {
                valid: t,
                value: e,
                keyword: Ne.default.hsl.keyword([i, u, s]),
                colorSpace: 'hsl',
                rgb: `rgba(${y}, ${A}, ${m}, ${p})`,
                hsl: e,
                hex: `#${Ne.default.hsl.hex([i, u, s]).toLowerCase()}`,
              };
            }
            let r = e.replace('#', ''),
              n = Ne.default.keyword.rgb(r) || Ne.default.hex.rgb(r),
              a = Ne.default.rgb.hsl(n),
              o = e;
            if (
              (/[^#a-f0-9]/i.test(e) ? (o = r) : Mi.test(e) && (o = `#${r}`),
              o.startsWith('#'))
            )
              t = Mi.test(o);
            else
              try {
                Ne.default.keyword.hex(o);
              } catch {
                t = !1;
              }
            return {
              valid: t,
              value: o,
              keyword: Ne.default.rgb.keyword(n),
              colorSpace: 'hex',
              rgb: `rgba(${n[0]}, ${n[1]}, ${n[2]}, 1)`,
              hsl: `hsla(${a[0]}, ${a[1]}%, ${a[2]}%, 1)`,
              hex: o,
            };
          }),
          (TR = (e, t, r) => {
            if (!e || !t?.valid) return ia[r];
            if (r !== 'hex') return t?.[r] || ia[r];
            if (!t.hex.startsWith('#'))
              try {
                return `#${Ne.default.keyword.hex(t.hex)}`;
              } catch {
                return ia.hex;
              }
            let n = t.hex.match(wR);
            if (!n) return Mi.test(t.hex) ? t.hex : ia.hex;
            let [a, o, i] = n[1].split('');
            return `#${a}${a}${o}${o}${i}${i}`;
          }),
          (_R = (e, t) => {
            let [r, n] = te(e || ''),
              [a, o] = te(() => ar(r)),
              [i, u] = te(a?.colorSpace || 'hex');
            he(() => {
              let A = e || '',
                m = ar(A);
              n(A), o(m), u(m?.colorSpace || 'hex');
            }, [e]);
            let s = et(() => TR(r, a, i).toLowerCase(), [r, a, i]),
              p = me(
                (A) => {
                  let m = ar(A),
                    h = m?.value || A || '';
                  n(h),
                    h === '' && (o(void 0), t(void 0)),
                    m && (o(m), u(m.colorSpace), t(m.value));
                },
                [t]
              ),
              y = me(() => {
                let A = oa.indexOf(i) + 1;
                A >= oa.length && (A = 0), u(oa[A]);
                let m = a?.[oa[A]] || '';
                n(m), t(m);
              }, [a, i, t]);
            return {
              value: r,
              realValue: s,
              updateValue: p,
              color: a,
              colorSpace: i,
              cycleColorSpace: y,
            };
          }),
          (ua = (e) => e.replace(/\s*/, '').toLowerCase()),
          (OR = (e, t, r) => {
            let [n, a] = te(t?.valid ? [t] : []);
            he(() => {
              t === void 0 && a([]);
            }, [t]);
            let o = et(
                () =>
                  (e || [])
                    .map((u) =>
                      typeof u == 'string'
                        ? ar(u)
                        : u.title
                          ? { ...ar(u.color), keyword: u.title }
                          : ar(u.color)
                    )
                    .concat(n)
                    .filter(Boolean)
                    .slice(-27),
                [e, n]
              ),
              i = me(
                (u) => {
                  u?.valid &&
                    (o.some((s) => ua(s[r]) === ua(u[r])) ||
                      a((s) => s.concat(u)));
                },
                [r, o]
              );
            return { presets: o, addPreset: i };
          }),
          (ey = ({
            name: e,
            value: t,
            onChange: r,
            onFocus: n,
            onBlur: a,
            presetColors: o,
            startOpen: i = !1,
          }) => {
            let u = me((0, Qg.default)(r, 200), [r]),
              {
                value: s,
                realValue: p,
                updateValue: y,
                color: A,
                colorSpace: m,
                cycleColorSpace: h,
              } = _R(t, u),
              { presets: E, addPreset: b } = OR(o, A, m),
              x = BR[m];
            return g.createElement(
              mR,
              null,
              g.createElement(
                gR,
                {
                  startOpen: i,
                  closeOnOutsideClick: !0,
                  onVisibleChange: () => b(A),
                  tooltip: g.createElement(
                    yR,
                    null,
                    g.createElement(x, {
                      color: p === 'transparent' ? '#000000' : p,
                      onChange: y,
                      onFocus: n,
                      onBlur: a,
                    }),
                    E.length > 0 &&
                      g.createElement(
                        ER,
                        null,
                        E.map((F, B) =>
                          g.createElement(
                            Jr,
                            {
                              key: `${F.value}-${B}`,
                              hasChrome: !1,
                              tooltip: g.createElement(bR, {
                                note: F.keyword || F.value,
                              }),
                            },
                            g.createElement(Jg, {
                              value: F[m],
                              active: A && ua(F[m]) === ua(A[m]),
                              onClick: () => y(F.value),
                            })
                          )
                        )
                      )
                  ),
                },
                g.createElement(Jg, { value: p, style: { margin: 4 } })
              ),
              g.createElement(DR, {
                id: _e(e),
                value: s,
                onChange: (F) => y(F.target.value),
                onFocus: (F) => F.target.select(),
                placeholder: 'Choose color...',
              }),
              s ? g.createElement(CR, { icon: 'markup', onClick: h }) : null
            );
          }),
          (RR = ey);
      });
    l();
    c();
    d();
    l();
    c();
    d();
    l();
    c();
    d();
    Ft();
    l();
    c();
    d();
    var FI = __STORYBOOK_API__,
      {
        ActiveTabs: wI,
        Consumer: BI,
        ManagerContext: TI,
        Provider: _I,
        addons: ma,
        combineParameters: OI,
        controlOrMetaKey: RI,
        controlOrMetaSymbol: PI,
        eventMatchesShortcut: II,
        eventToShortcut: kI,
        isMacLike: NI,
        isShortcutTaken: LI,
        keyToSymbol: qI,
        merge: jI,
        mockChannel: MI,
        optionOrAltSymbol: $I,
        shortcutMatchesShortcut: UI,
        shortcutToHumanString: zI,
        types: iu,
        useAddonState: HI,
        useArgTypes: ga,
        useArgs: uu,
        useChannel: GI,
        useGlobalTypes: WI,
        useGlobals: su,
        useParameter: lu,
        useSharedState: VI,
        useStoryPrepared: KI,
        useStorybookApi: YI,
        useStorybookState: cu,
      } = __STORYBOOK_API__;
    sr();
    l();
    c();
    d();
    Oa();
    Pa();
    Ft();
    sr();
    l();
    c();
    d();
    l();
    c();
    d();
    function Ce() {
      return (
        (Ce = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
        Ce.apply(this, arguments)
      );
    }
    l();
    c();
    d();
    function Ia(e) {
      if (e === void 0)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    l();
    c();
    d();
    l();
    c();
    d();
    function Ye(e, t) {
      return (
        (Ye = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (n, a) {
              return (n.__proto__ = a), n;
            }),
        Ye(e, t)
      );
    }
    function ka(e, t) {
      (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        Ye(e, t);
    }
    l();
    c();
    d();
    l();
    c();
    d();
    function cr(e) {
      return (
        (cr = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (r) {
              return r.__proto__ || Object.getPrototypeOf(r);
            }),
        cr(e)
      );
    }
    l();
    c();
    d();
    function Na(e) {
      try {
        return Function.toString.call(e).indexOf('[native code]') !== -1;
      } catch {
        return typeof e == 'function';
      }
    }
    l();
    c();
    d();
    l();
    c();
    d();
    function Xr() {
      try {
        var e = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        );
      } catch {}
      return (Xr = function () {
        return !!e;
      })();
    }
    function La(e, t, r) {
      if (Xr()) return Reflect.construct.apply(null, arguments);
      var n = [null];
      n.push.apply(n, t);
      var a = new (e.bind.apply(e, n))();
      return r && Ye(a, r.prototype), a;
    }
    function dr(e) {
      var t = typeof Map == 'function' ? new Map() : void 0;
      return (
        (dr = function (n) {
          if (n === null || !Na(n)) return n;
          if (typeof n != 'function')
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          if (typeof t < 'u') {
            if (t.has(n)) return t.get(n);
            t.set(n, a);
          }
          function a() {
            return La(n, arguments, cr(this).constructor);
          }
          return (
            (a.prototype = Object.create(n.prototype, {
              constructor: {
                value: a,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            Ye(a, n)
          );
        }),
        dr(e)
      );
    }
    l();
    c();
    d();
    var Oe = (function (e) {
      ka(t, e);
      function t(r) {
        var n;
        if (!0)
          n =
            e.call(
              this,
              'An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#' +
                r +
                ' for more information.'
            ) || this;
        else for (var a, o, i; i < a; i++);
        return Ia(n);
      }
      return t;
    })(dr(Error));
    function vu(e, t) {
      return e.substr(-t.length) === t;
    }
    var $2 = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
    function Du(e) {
      if (typeof e != 'string') return e;
      var t = e.match($2);
      return t ? parseFloat(e) : e;
    }
    var U2 = function (t) {
        return function (r, n) {
          n === void 0 && (n = '16px');
          var a = r,
            o = n;
          if (typeof r == 'string') {
            if (!vu(r, 'px')) throw new Oe(69, t, r);
            a = Du(r);
          }
          if (typeof n == 'string') {
            if (!vu(n, 'px')) throw new Oe(70, t, n);
            o = Du(n);
          }
          if (typeof a == 'string') throw new Oe(71, r, t);
          if (typeof o == 'string') throw new Oe(72, n, t);
          return '' + a / o + t;
        };
      },
      xu = U2,
      B7 = xu('em');
    var T7 = xu('rem');
    function qa(e) {
      return Math.round(e * 255);
    }
    function z2(e, t, r) {
      return qa(e) + ',' + qa(t) + ',' + qa(r);
    }
    function pr(e, t, r, n) {
      if ((n === void 0 && (n = z2), t === 0)) return n(r, r, r);
      var a = (((e % 360) + 360) % 360) / 60,
        o = (1 - Math.abs(2 * r - 1)) * t,
        i = o * (1 - Math.abs((a % 2) - 1)),
        u = 0,
        s = 0,
        p = 0;
      a >= 0 && a < 1
        ? ((u = o), (s = i))
        : a >= 1 && a < 2
          ? ((u = i), (s = o))
          : a >= 2 && a < 3
            ? ((s = o), (p = i))
            : a >= 3 && a < 4
              ? ((s = i), (p = o))
              : a >= 4 && a < 5
                ? ((u = i), (p = o))
                : a >= 5 && a < 6 && ((u = o), (p = i));
      var y = r - o / 2,
        A = u + y,
        m = s + y,
        h = p + y;
      return n(A, m, h);
    }
    var Cu = {
      aliceblue: 'f0f8ff',
      antiquewhite: 'faebd7',
      aqua: '00ffff',
      aquamarine: '7fffd4',
      azure: 'f0ffff',
      beige: 'f5f5dc',
      bisque: 'ffe4c4',
      black: '000',
      blanchedalmond: 'ffebcd',
      blue: '0000ff',
      blueviolet: '8a2be2',
      brown: 'a52a2a',
      burlywood: 'deb887',
      cadetblue: '5f9ea0',
      chartreuse: '7fff00',
      chocolate: 'd2691e',
      coral: 'ff7f50',
      cornflowerblue: '6495ed',
      cornsilk: 'fff8dc',
      crimson: 'dc143c',
      cyan: '00ffff',
      darkblue: '00008b',
      darkcyan: '008b8b',
      darkgoldenrod: 'b8860b',
      darkgray: 'a9a9a9',
      darkgreen: '006400',
      darkgrey: 'a9a9a9',
      darkkhaki: 'bdb76b',
      darkmagenta: '8b008b',
      darkolivegreen: '556b2f',
      darkorange: 'ff8c00',
      darkorchid: '9932cc',
      darkred: '8b0000',
      darksalmon: 'e9967a',
      darkseagreen: '8fbc8f',
      darkslateblue: '483d8b',
      darkslategray: '2f4f4f',
      darkslategrey: '2f4f4f',
      darkturquoise: '00ced1',
      darkviolet: '9400d3',
      deeppink: 'ff1493',
      deepskyblue: '00bfff',
      dimgray: '696969',
      dimgrey: '696969',
      dodgerblue: '1e90ff',
      firebrick: 'b22222',
      floralwhite: 'fffaf0',
      forestgreen: '228b22',
      fuchsia: 'ff00ff',
      gainsboro: 'dcdcdc',
      ghostwhite: 'f8f8ff',
      gold: 'ffd700',
      goldenrod: 'daa520',
      gray: '808080',
      green: '008000',
      greenyellow: 'adff2f',
      grey: '808080',
      honeydew: 'f0fff0',
      hotpink: 'ff69b4',
      indianred: 'cd5c5c',
      indigo: '4b0082',
      ivory: 'fffff0',
      khaki: 'f0e68c',
      lavender: 'e6e6fa',
      lavenderblush: 'fff0f5',
      lawngreen: '7cfc00',
      lemonchiffon: 'fffacd',
      lightblue: 'add8e6',
      lightcoral: 'f08080',
      lightcyan: 'e0ffff',
      lightgoldenrodyellow: 'fafad2',
      lightgray: 'd3d3d3',
      lightgreen: '90ee90',
      lightgrey: 'd3d3d3',
      lightpink: 'ffb6c1',
      lightsalmon: 'ffa07a',
      lightseagreen: '20b2aa',
      lightskyblue: '87cefa',
      lightslategray: '789',
      lightslategrey: '789',
      lightsteelblue: 'b0c4de',
      lightyellow: 'ffffe0',
      lime: '0f0',
      limegreen: '32cd32',
      linen: 'faf0e6',
      magenta: 'f0f',
      maroon: '800000',
      mediumaquamarine: '66cdaa',
      mediumblue: '0000cd',
      mediumorchid: 'ba55d3',
      mediumpurple: '9370db',
      mediumseagreen: '3cb371',
      mediumslateblue: '7b68ee',
      mediumspringgreen: '00fa9a',
      mediumturquoise: '48d1cc',
      mediumvioletred: 'c71585',
      midnightblue: '191970',
      mintcream: 'f5fffa',
      mistyrose: 'ffe4e1',
      moccasin: 'ffe4b5',
      navajowhite: 'ffdead',
      navy: '000080',
      oldlace: 'fdf5e6',
      olive: '808000',
      olivedrab: '6b8e23',
      orange: 'ffa500',
      orangered: 'ff4500',
      orchid: 'da70d6',
      palegoldenrod: 'eee8aa',
      palegreen: '98fb98',
      paleturquoise: 'afeeee',
      palevioletred: 'db7093',
      papayawhip: 'ffefd5',
      peachpuff: 'ffdab9',
      peru: 'cd853f',
      pink: 'ffc0cb',
      plum: 'dda0dd',
      powderblue: 'b0e0e6',
      purple: '800080',
      rebeccapurple: '639',
      red: 'f00',
      rosybrown: 'bc8f8f',
      royalblue: '4169e1',
      saddlebrown: '8b4513',
      salmon: 'fa8072',
      sandybrown: 'f4a460',
      seagreen: '2e8b57',
      seashell: 'fff5ee',
      sienna: 'a0522d',
      silver: 'c0c0c0',
      skyblue: '87ceeb',
      slateblue: '6a5acd',
      slategray: '708090',
      slategrey: '708090',
      snow: 'fffafa',
      springgreen: '00ff7f',
      steelblue: '4682b4',
      tan: 'd2b48c',
      teal: '008080',
      thistle: 'd8bfd8',
      tomato: 'ff6347',
      turquoise: '40e0d0',
      violet: 'ee82ee',
      wheat: 'f5deb3',
      white: 'fff',
      whitesmoke: 'f5f5f5',
      yellow: 'ff0',
      yellowgreen: '9acd32',
    };
    function H2(e) {
      if (typeof e != 'string') return e;
      var t = e.toLowerCase();
      return Cu[t] ? '#' + Cu[t] : e;
    }
    var G2 = /^#[a-fA-F0-9]{6}$/,
      W2 = /^#[a-fA-F0-9]{8}$/,
      V2 = /^#[a-fA-F0-9]{3}$/,
      K2 = /^#[a-fA-F0-9]{4}$/,
      ja =
        /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
      Y2 =
        /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
      J2 =
        /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
      X2 =
        /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
    function Tt(e) {
      if (typeof e != 'string') throw new Oe(3);
      var t = H2(e);
      if (t.match(G2))
        return {
          red: parseInt('' + t[1] + t[2], 16),
          green: parseInt('' + t[3] + t[4], 16),
          blue: parseInt('' + t[5] + t[6], 16),
        };
      if (t.match(W2)) {
        var r = parseFloat((parseInt('' + t[7] + t[8], 16) / 255).toFixed(2));
        return {
          red: parseInt('' + t[1] + t[2], 16),
          green: parseInt('' + t[3] + t[4], 16),
          blue: parseInt('' + t[5] + t[6], 16),
          alpha: r,
        };
      }
      if (t.match(V2))
        return {
          red: parseInt('' + t[1] + t[1], 16),
          green: parseInt('' + t[2] + t[2], 16),
          blue: parseInt('' + t[3] + t[3], 16),
        };
      if (t.match(K2)) {
        var n = parseFloat((parseInt('' + t[4] + t[4], 16) / 255).toFixed(2));
        return {
          red: parseInt('' + t[1] + t[1], 16),
          green: parseInt('' + t[2] + t[2], 16),
          blue: parseInt('' + t[3] + t[3], 16),
          alpha: n,
        };
      }
      var a = ja.exec(t);
      if (a)
        return {
          red: parseInt('' + a[1], 10),
          green: parseInt('' + a[2], 10),
          blue: parseInt('' + a[3], 10),
        };
      var o = Y2.exec(t.substring(0, 50));
      if (o)
        return {
          red: parseInt('' + o[1], 10),
          green: parseInt('' + o[2], 10),
          blue: parseInt('' + o[3], 10),
          alpha:
            parseFloat('' + o[4]) > 1
              ? parseFloat('' + o[4]) / 100
              : parseFloat('' + o[4]),
        };
      var i = J2.exec(t);
      if (i) {
        var u = parseInt('' + i[1], 10),
          s = parseInt('' + i[2], 10) / 100,
          p = parseInt('' + i[3], 10) / 100,
          y = 'rgb(' + pr(u, s, p) + ')',
          A = ja.exec(y);
        if (!A) throw new Oe(4, t, y);
        return {
          red: parseInt('' + A[1], 10),
          green: parseInt('' + A[2], 10),
          blue: parseInt('' + A[3], 10),
        };
      }
      var m = X2.exec(t.substring(0, 50));
      if (m) {
        var h = parseInt('' + m[1], 10),
          E = parseInt('' + m[2], 10) / 100,
          b = parseInt('' + m[3], 10) / 100,
          x = 'rgb(' + pr(h, E, b) + ')',
          F = ja.exec(x);
        if (!F) throw new Oe(4, t, x);
        return {
          red: parseInt('' + F[1], 10),
          green: parseInt('' + F[2], 10),
          blue: parseInt('' + F[3], 10),
          alpha:
            parseFloat('' + m[4]) > 1
              ? parseFloat('' + m[4]) / 100
              : parseFloat('' + m[4]),
        };
      }
      throw new Oe(5);
    }
    function Q2(e) {
      var t = e.red / 255,
        r = e.green / 255,
        n = e.blue / 255,
        a = Math.max(t, r, n),
        o = Math.min(t, r, n),
        i = (a + o) / 2;
      if (a === o)
        return e.alpha !== void 0
          ? { hue: 0, saturation: 0, lightness: i, alpha: e.alpha }
          : { hue: 0, saturation: 0, lightness: i };
      var u,
        s = a - o,
        p = i > 0.5 ? s / (2 - a - o) : s / (a + o);
      switch (a) {
        case t:
          u = (r - n) / s + (r < n ? 6 : 0);
          break;
        case r:
          u = (n - t) / s + 2;
          break;
        default:
          u = (t - r) / s + 4;
          break;
      }
      return (
        (u *= 60),
        e.alpha !== void 0
          ? { hue: u, saturation: p, lightness: i, alpha: e.alpha }
          : { hue: u, saturation: p, lightness: i }
      );
    }
    function tt(e) {
      return Q2(Tt(e));
    }
    var Z2 = function (t) {
        return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6]
          ? '#' + t[1] + t[3] + t[5]
          : t;
      },
      $a = Z2;
    function mt(e) {
      var t = e.toString(16);
      return t.length === 1 ? '0' + t : t;
    }
    function Ma(e) {
      return mt(Math.round(e * 255));
    }
    function e1(e, t, r) {
      return $a('#' + Ma(e) + Ma(t) + Ma(r));
    }
    function Qr(e, t, r) {
      return pr(e, t, r, e1);
    }
    function t1(e, t, r) {
      if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number')
        return Qr(e, t, r);
      if (typeof e == 'object' && t === void 0 && r === void 0)
        return Qr(e.hue, e.saturation, e.lightness);
      throw new Oe(1);
    }
    function r1(e, t, r, n) {
      if (
        typeof e == 'number' &&
        typeof t == 'number' &&
        typeof r == 'number' &&
        typeof n == 'number'
      )
        return n >= 1 ? Qr(e, t, r) : 'rgba(' + pr(e, t, r) + ',' + n + ')';
      if (typeof e == 'object' && t === void 0 && r === void 0 && n === void 0)
        return e.alpha >= 1
          ? Qr(e.hue, e.saturation, e.lightness)
          : 'rgba(' +
              pr(e.hue, e.saturation, e.lightness) +
              ',' +
              e.alpha +
              ')';
      throw new Oe(2);
    }
    function Ua(e, t, r) {
      if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number')
        return $a('#' + mt(e) + mt(t) + mt(r));
      if (typeof e == 'object' && t === void 0 && r === void 0)
        return $a('#' + mt(e.red) + mt(e.green) + mt(e.blue));
      throw new Oe(6);
    }
    function je(e, t, r, n) {
      if (typeof e == 'string' && typeof t == 'number') {
        var a = Tt(e);
        return 'rgba(' + a.red + ',' + a.green + ',' + a.blue + ',' + t + ')';
      } else {
        if (
          typeof e == 'number' &&
          typeof t == 'number' &&
          typeof r == 'number' &&
          typeof n == 'number'
        )
          return n >= 1
            ? Ua(e, t, r)
            : 'rgba(' + e + ',' + t + ',' + r + ',' + n + ')';
        if (
          typeof e == 'object' &&
          t === void 0 &&
          r === void 0 &&
          n === void 0
        )
          return e.alpha >= 1
            ? Ua(e.red, e.green, e.blue)
            : 'rgba(' +
                e.red +
                ',' +
                e.green +
                ',' +
                e.blue +
                ',' +
                e.alpha +
                ')';
      }
      throw new Oe(7);
    }
    var n1 = function (t) {
        return (
          typeof t.red == 'number' &&
          typeof t.green == 'number' &&
          typeof t.blue == 'number' &&
          (typeof t.alpha != 'number' || typeof t.alpha > 'u')
        );
      },
      a1 = function (t) {
        return (
          typeof t.red == 'number' &&
          typeof t.green == 'number' &&
          typeof t.blue == 'number' &&
          typeof t.alpha == 'number'
        );
      },
      o1 = function (t) {
        return (
          typeof t.hue == 'number' &&
          typeof t.saturation == 'number' &&
          typeof t.lightness == 'number' &&
          (typeof t.alpha != 'number' || typeof t.alpha > 'u')
        );
      },
      i1 = function (t) {
        return (
          typeof t.hue == 'number' &&
          typeof t.saturation == 'number' &&
          typeof t.lightness == 'number' &&
          typeof t.alpha == 'number'
        );
      };
    function rt(e) {
      if (typeof e != 'object') throw new Oe(8);
      if (a1(e)) return je(e);
      if (n1(e)) return Ua(e);
      if (i1(e)) return r1(e);
      if (o1(e)) return t1(e);
      throw new Oe(8);
    }
    function Su(e, t, r) {
      return function () {
        var a = r.concat(Array.prototype.slice.call(arguments));
        return a.length >= t ? e.apply(this, a) : Su(e, t, a);
      };
    }
    function Ie(e) {
      return Su(e, e.length, []);
    }
    function u1(e, t) {
      if (t === 'transparent') return t;
      var r = tt(t);
      return rt(Ce({}, r, { hue: r.hue + parseFloat(e) }));
    }
    var _7 = Ie(u1);
    function _t(e, t, r) {
      return Math.max(e, Math.min(t, r));
    }
    function s1(e, t) {
      if (t === 'transparent') return t;
      var r = tt(t);
      return rt(
        Ce({}, r, { lightness: _t(0, 1, r.lightness - parseFloat(e)) })
      );
    }
    var l1 = Ie(s1),
      Me = l1;
    function c1(e, t) {
      if (t === 'transparent') return t;
      var r = tt(t);
      return rt(
        Ce({}, r, { saturation: _t(0, 1, r.saturation - parseFloat(e)) })
      );
    }
    var O7 = Ie(c1);
    function d1(e, t) {
      if (t === 'transparent') return t;
      var r = tt(t);
      return rt(
        Ce({}, r, { lightness: _t(0, 1, r.lightness + parseFloat(e)) })
      );
    }
    var p1 = Ie(d1),
      nt = p1;
    function f1(e, t, r) {
      if (t === 'transparent') return r;
      if (r === 'transparent') return t;
      if (e === 0) return r;
      var n = Tt(t),
        a = Ce({}, n, { alpha: typeof n.alpha == 'number' ? n.alpha : 1 }),
        o = Tt(r),
        i = Ce({}, o, { alpha: typeof o.alpha == 'number' ? o.alpha : 1 }),
        u = a.alpha - i.alpha,
        s = parseFloat(e) * 2 - 1,
        p = s * u === -1 ? s : s + u,
        y = 1 + s * u,
        A = (p / y + 1) / 2,
        m = 1 - A,
        h = {
          red: Math.floor(a.red * A + i.red * m),
          green: Math.floor(a.green * A + i.green * m),
          blue: Math.floor(a.blue * A + i.blue * m),
          alpha: a.alpha * parseFloat(e) + i.alpha * (1 - parseFloat(e)),
        };
      return je(h);
    }
    var h1 = Ie(f1),
      Fu = h1;
    function m1(e, t) {
      if (t === 'transparent') return t;
      var r = Tt(t),
        n = typeof r.alpha == 'number' ? r.alpha : 1,
        a = Ce({}, r, {
          alpha: _t(0, 1, (n * 100 + parseFloat(e) * 100) / 100),
        });
      return je(a);
    }
    var g1 = Ie(m1),
      fr = g1;
    function y1(e, t) {
      if (t === 'transparent') return t;
      var r = tt(t);
      return rt(
        Ce({}, r, { saturation: _t(0, 1, r.saturation + parseFloat(e)) })
      );
    }
    var R7 = Ie(y1);
    function b1(e, t) {
      return t === 'transparent'
        ? t
        : rt(Ce({}, tt(t), { hue: parseFloat(e) }));
    }
    var P7 = Ie(b1);
    function E1(e, t) {
      return t === 'transparent'
        ? t
        : rt(Ce({}, tt(t), { lightness: parseFloat(e) }));
    }
    var I7 = Ie(E1);
    function A1(e, t) {
      return t === 'transparent'
        ? t
        : rt(Ce({}, tt(t), { saturation: parseFloat(e) }));
    }
    var k7 = Ie(A1);
    function v1(e, t) {
      return t === 'transparent' ? t : Fu(parseFloat(e), 'rgb(0, 0, 0)', t);
    }
    var N7 = Ie(v1);
    function D1(e, t) {
      return t === 'transparent'
        ? t
        : Fu(parseFloat(e), 'rgb(255, 255, 255)', t);
    }
    var L7 = Ie(D1);
    function C1(e, t) {
      if (t === 'transparent') return t;
      var r = Tt(t),
        n = typeof r.alpha == 'number' ? r.alpha : 1,
        a = Ce({}, r, {
          alpha: _t(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100),
        });
      return je(a);
    }
    var x1 = Ie(C1),
      ce = x1;
    l();
    c();
    d();
    var ie = (() => {
      let e;
      return (
        typeof window < 'u'
          ? (e = window)
          : typeof globalThis < 'u'
            ? (e = globalThis)
            : typeof window < 'u'
              ? (e = window)
              : typeof self < 'u'
                ? (e = self)
                : (e = {}),
        e
      );
    })();
    var yy = pe(Fo(), 1);
    l();
    c();
    d();
    var mS = Object.create,
      Md = Object.defineProperty,
      gS = Object.getOwnPropertyDescriptor,
      yS = Object.getOwnPropertyNames,
      bS = Object.getPrototypeOf,
      ES = Object.prototype.hasOwnProperty,
      AS = (e, t) => () => (
        t || e((t = { exports: {} }).exports, t), t.exports
      ),
      vS = (e, t, r, n) => {
        if ((t && typeof t == 'object') || typeof t == 'function')
          for (let a of yS(t))
            !ES.call(e, a) &&
              a !== r &&
              Md(e, a, {
                get: () => t[a],
                enumerable: !(n = gS(t, a)) || n.enumerable,
              });
        return e;
      },
      DS = (e, t, r) => (
        (r = e != null ? mS(bS(e)) : {}),
        vS(
          t || !e || !e.__esModule
            ? Md(r, 'default', { value: e, enumerable: !0 })
            : r,
          e
        )
      ),
      CS = AS((e) => {
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.isEqual = (function () {
            var t = Object.prototype.toString,
              r = Object.getPrototypeOf,
              n = Object.getOwnPropertySymbols
                ? function (a) {
                    return Object.keys(a).concat(
                      Object.getOwnPropertySymbols(a)
                    );
                  }
                : Object.keys;
            return function (a, o) {
              return (function i(u, s, p) {
                var y,
                  A,
                  m,
                  h = t.call(u),
                  E = t.call(s);
                if (u === s) return !0;
                if (u == null || s == null) return !1;
                if (p.indexOf(u) > -1 && p.indexOf(s) > -1) return !0;
                if (
                  (p.push(u, s),
                  h != E ||
                    ((y = n(u)),
                    (A = n(s)),
                    y.length != A.length ||
                      y.some(function (b) {
                        return !i(u[b], s[b], p);
                      })))
                )
                  return !1;
                switch (h.slice(8, -1)) {
                  case 'Symbol':
                    return u.valueOf() == s.valueOf();
                  case 'Date':
                  case 'Number':
                    return +u == +s || (+u != +u && +s != +s);
                  case 'RegExp':
                  case 'Function':
                  case 'String':
                  case 'Boolean':
                    return '' + u == '' + s;
                  case 'Set':
                  case 'Map':
                    (y = u.entries()), (A = s.entries());
                    do
                      if (!i((m = y.next()).value, A.next().value, p))
                        return !1;
                    while (!m.done);
                    return !0;
                  case 'ArrayBuffer':
                    (u = new Uint8Array(u)), (s = new Uint8Array(s));
                  case 'DataView':
                    (u = new Uint8Array(u.buffer)),
                      (s = new Uint8Array(s.buffer));
                  case 'Float32Array':
                  case 'Float64Array':
                  case 'Int8Array':
                  case 'Int16Array':
                  case 'Int32Array':
                  case 'Uint8Array':
                  case 'Uint16Array':
                  case 'Uint32Array':
                  case 'Uint8ClampedArray':
                  case 'Arguments':
                  case 'Array':
                    if (u.length != s.length) return !1;
                    for (m = 0; m < u.length; m++)
                      if (
                        (m in u || m in s) &&
                        (m in u != m in s || !i(u[m], s[m], p))
                      )
                        return !1;
                    return !0;
                  case 'Object':
                    return i(r(u), r(s), p);
                  default:
                    return !1;
                }
              })(a, o, []);
            };
          })());
      });
    var jd = DS(CS()),
      $d = (e) => e.map((t) => typeof t < 'u').filter(Boolean).length,
      xS = (e, t) => {
        let { exists: r, eq: n, neq: a, truthy: o } = e;
        if ($d([r, n, a, o]) > 1)
          throw new Error(
            `Invalid conditional test ${JSON.stringify({ exists: r, eq: n, neq: a })}`
          );
        if (typeof n < 'u') return (0, jd.isEqual)(t, n);
        if (typeof a < 'u') return !(0, jd.isEqual)(t, a);
        if (typeof r < 'u') {
          let i = typeof t < 'u';
          return r ? i : !i;
        }
        return typeof o > 'u' || o ? !!t : !t;
      },
      wo = (e, t, r) => {
        if (!e.if) return !0;
        let { arg: n, global: a } = e.if;
        if ($d([n, a]) !== 1)
          throw new Error(
            `Invalid conditional value ${JSON.stringify({ arg: n, global: a })}`
          );
        let o = n ? t[n] : r[a];
        return xS(e.if, o);
      };
    l();
    c();
    d();
    var pG = __STORYBOOK_CLIENT_LOGGER__,
      {
        deprecate: Dn,
        logger: ze,
        once: Cn,
        pretty: fG,
      } = __STORYBOOK_CLIENT_LOGGER__;
    l();
    c();
    d();
    Ft();
    function Et() {
      return (
        (Et = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
        Et.apply(this, arguments)
      );
    }
    var SS = ['children', 'options'],
      Ud,
      zd;
    (function (e) {
      (e.blockQuote = '0'),
        (e.breakLine = '1'),
        (e.breakThematic = '2'),
        (e.codeBlock = '3'),
        (e.codeFenced = '4'),
        (e.codeInline = '5'),
        (e.footnote = '6'),
        (e.footnoteReference = '7'),
        (e.gfmTask = '8'),
        (e.heading = '9'),
        (e.headingSetext = '10'),
        (e.htmlBlock = '11'),
        (e.htmlComment = '12'),
        (e.htmlSelfClosing = '13'),
        (e.image = '14'),
        (e.link = '15'),
        (e.linkAngleBraceStyleDetector = '16'),
        (e.linkBareUrlDetector = '17'),
        (e.linkMailtoDetector = '18'),
        (e.newlineCoalescer = '19'),
        (e.orderedList = '20'),
        (e.paragraph = '21'),
        (e.ref = '22'),
        (e.refImage = '23'),
        (e.refLink = '24'),
        (e.table = '25'),
        (e.tableSeparator = '26'),
        (e.text = '27'),
        (e.textBolded = '28'),
        (e.textEmphasized = '29'),
        (e.textEscaped = '30'),
        (e.textMarked = '31'),
        (e.textStrikethroughed = '32'),
        (e.unorderedList = '33');
    })(Ud || (Ud = {})),
      (function (e) {
        (e[(e.MAX = 0)] = 'MAX'),
          (e[(e.HIGH = 1)] = 'HIGH'),
          (e[(e.MED = 2)] = 'MED'),
          (e[(e.LOW = 3)] = 'LOW'),
          (e[(e.MIN = 4)] = 'MIN');
      })(zd || (zd = {}));
    var Hd = [
        'allowFullScreen',
        'allowTransparency',
        'autoComplete',
        'autoFocus',
        'autoPlay',
        'cellPadding',
        'cellSpacing',
        'charSet',
        'className',
        'classId',
        'colSpan',
        'contentEditable',
        'contextMenu',
        'crossOrigin',
        'encType',
        'formAction',
        'formEncType',
        'formMethod',
        'formNoValidate',
        'formTarget',
        'frameBorder',
        'hrefLang',
        'inputMode',
        'keyParams',
        'keyType',
        'marginHeight',
        'marginWidth',
        'maxLength',
        'mediaGroup',
        'minLength',
        'noValidate',
        'radioGroup',
        'readOnly',
        'rowSpan',
        'spellCheck',
        'srcDoc',
        'srcLang',
        'srcSet',
        'tabIndex',
        'useMap',
      ].reduce((e, t) => ((e[t.toLowerCase()] = t), e), { for: 'htmlFor' }),
      Gd = {
        amp: '&',
        apos: "'",
        gt: '>',
        lt: '<',
        nbsp: '\xA0',
        quot: '\u201C',
      },
      FS = ['style', 'script'],
      wS =
        /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,
      BS = /mailto:/i,
      TS = /\n{2,}$/,
      Xd = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,
      _S = /^ *> ?/gm,
      OS = /^ {2,}\n/,
      RS = /^(?:( *[-*_])){3,} *(?:\n *)+\n/,
      Qd = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,
      Zd = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
      PS = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
      IS = /^(?:\n *)*\n/,
      kS = /\r\n?/g,
      NS = /^\[\^([^\]]+)](:.*)\n/,
      LS = /^\[\^([^\]]+)]/,
      qS = /\f/g,
      jS = /^\s*?\[(x|\s)\]/,
      ep = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
      tp = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
      rp = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
      Ro =
        /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,
      MS = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,
      np = /^<!--[\s\S]*?(?:-->)/,
      $S = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
      Po =
        /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
      US = /^\{.*\}$/,
      zS = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
      HS = /^<([^ >]+@[^ >]+)>/,
      GS = /^<([^ >]+:\/[^ >]+)>/,
      WS = /-([a-z])?/gi,
      ap = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,
      VS = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,
      KS = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
      YS = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
      JS = /(\[|\])/g,
      XS = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
      QS = /\t/g,
      ZS = /^ *\| */,
      eF = /(^ *\||\| *$)/g,
      tF = / *$/,
      rF = /^ *:-+: *$/,
      nF = /^ *:-+ *$/,
      aF = /^ *-+: *$/,
      oF =
        /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,
      iF =
        /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,
      uF = /^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,
      sF = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,
      lF = /^\\([^0-9A-Za-z\s])/,
      cF =
        /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,
      dF = /^\n+/,
      pF = /^([ \t]*)/,
      fF = /\\([^\\])/g,
      Wd = / *\n+$/,
      hF = /(?:^|\n)( *)$/,
      Io = '(?:\\d+\\.)',
      ko = '(?:[*+-])';
    function op(e) {
      return '( *)(' + (e === 1 ? Io : ko) + ') +';
    }
    var ip = op(1),
      up = op(2);
    function sp(e) {
      return new RegExp('^' + (e === 1 ? ip : up));
    }
    var mF = sp(1),
      gF = sp(2);
    function lp(e) {
      return new RegExp(
        '^' +
          (e === 1 ? ip : up) +
          '[^\\n]*(?:\\n(?!\\1' +
          (e === 1 ? Io : ko) +
          ' )[^\\n]*)*(\\n|$)',
        'gm'
      );
    }
    var cp = lp(1),
      dp = lp(2);
    function pp(e) {
      let t = e === 1 ? Io : ko;
      return new RegExp(
        '^( *)(' +
          t +
          ') [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1' +
          t +
          ' (?!' +
          t +
          ' ))\\n*|\\s*\\n*$)'
      );
    }
    var fp = pp(1),
      hp = pp(2);
    function Vd(e, t) {
      let r = t === 1,
        n = r ? fp : hp,
        a = r ? cp : dp,
        o = r ? mF : gF;
      return {
        match(i, u, s) {
          let p = hF.exec(s);
          return p && (u.list || (!u.inline && !u.simple))
            ? n.exec((i = p[1] + i))
            : null;
        },
        order: 1,
        parse(i, u, s) {
          let p = r ? +i[2] : void 0,
            y = i[0]
              .replace(
                TS,
                `
`
              )
              .match(a),
            A = !1;
          return {
            items: y.map(function (m, h) {
              let E = o.exec(m)[0].length,
                b = new RegExp('^ {1,' + E + '}', 'gm'),
                x = m.replace(b, '').replace(o, ''),
                F = h === y.length - 1,
                B =
                  x.indexOf(`

`) !== -1 ||
                  (F && A);
              A = B;
              let I = s.inline,
                q = s.list,
                w;
              (s.list = !0),
                B
                  ? ((s.inline = !1),
                    (w = x.replace(
                      Wd,
                      `

`
                    )))
                  : ((s.inline = !0), (w = x.replace(Wd, '')));
              let N = u(w, s);
              return (s.inline = I), (s.list = q), N;
            }),
            ordered: r,
            start: p,
          };
        },
        render: (i, u, s) =>
          e(
            i.ordered ? 'ol' : 'ul',
            { key: s.key, start: i.type === '20' ? i.start : void 0 },
            i.items.map(function (p, y) {
              return e('li', { key: y }, u(p, s));
            })
          ),
      };
    }
    var yF = /^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
      bF = /^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
      mp = [Xd, Qd, Zd, ep, rp, tp, np, ap, cp, fp, dp, hp],
      EF = [...mp, /^[^\n]+(?:  \n|\n{2,})/, Ro, Po];
    function AF(e) {
      return e
        .replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, 'a')
        .replace(/[çÇ]/g, 'c')
        .replace(/[ðÐ]/g, 'd')
        .replace(/[ÈÉÊËéèêë]/g, 'e')
        .replace(/[ÏïÎîÍíÌì]/g, 'i')
        .replace(/[Ññ]/g, 'n')
        .replace(/[øØœŒÕõÔôÓóÒò]/g, 'o')
        .replace(/[ÜüÛûÚúÙù]/g, 'u')
        .replace(/[ŸÿÝý]/g, 'y')
        .replace(/[^a-z0-9- ]/gi, '')
        .replace(/ /gi, '-')
        .toLowerCase();
    }
    function vF(e) {
      return aF.test(e)
        ? 'right'
        : rF.test(e)
          ? 'center'
          : nF.test(e)
            ? 'left'
            : null;
    }
    function Kd(e, t, r) {
      let n = r.inTable;
      r.inTable = !0;
      let a = t(e.trim(), r);
      r.inTable = n;
      let o = [[]];
      return (
        a.forEach(function (i, u) {
          i.type === '26'
            ? u !== 0 && u !== a.length - 1 && o.push([])
            : (i.type !== '27' ||
                (a[u + 1] != null && a[u + 1].type !== '26') ||
                (i.text = i.text.replace(tF, '')),
              o[o.length - 1].push(i));
        }),
        o
      );
    }
    function DF(e, t, r) {
      r.inline = !0;
      let n = Kd(e[1], t, r),
        a = e[2].replace(eF, '').split('|').map(vF),
        o = (function (i, u, s) {
          return i
            .trim()
            .split(
              `
`
            )
            .map(function (p) {
              return Kd(p, u, s);
            });
        })(e[3], t, r);
      return (r.inline = !1), { align: a, cells: o, header: n, type: '25' };
    }
    function Yd(e, t) {
      return e.align[t] == null ? {} : { textAlign: e.align[t] };
    }
    function ot(e) {
      return function (t, r) {
        return r.inline ? e.exec(t) : null;
      };
    }
    function it(e) {
      return function (t, r) {
        return r.inline || r.simple ? e.exec(t) : null;
      };
    }
    function Xe(e) {
      return function (t, r) {
        return r.inline || r.simple ? null : e.exec(t);
      };
    }
    function Sr(e) {
      return function (t) {
        return e.exec(t);
      };
    }
    function CF(e, t, r) {
      if (
        t.inline ||
        t.simple ||
        (r &&
          !r.endsWith(`
`))
      )
        return null;
      let n = '';
      e.split(
        `
`
      ).every(
        (o) =>
          !mp.some((i) => i.test(o)) &&
          ((n +=
            o +
            `
`),
          o.trim())
      );
      let a = n.trimEnd();
      return a == '' ? null : [n, a];
    }
    function Mt(e) {
      try {
        if (
          decodeURIComponent(e)
            .replace(/[^A-Za-z0-9/:]/g, '')
            .match(/^\s*(javascript|vbscript|data(?!:image)):/i)
        )
          return;
      } catch {
        return null;
      }
      return e;
    }
    function Jd(e) {
      return e.replace(fF, '$1');
    }
    function xn(e, t, r) {
      let n = r.inline || !1,
        a = r.simple || !1;
      (r.inline = !0), (r.simple = !0);
      let o = e(t, r);
      return (r.inline = n), (r.simple = a), o;
    }
    function xF(e, t, r) {
      let n = r.inline || !1,
        a = r.simple || !1;
      (r.inline = !1), (r.simple = !0);
      let o = e(t, r);
      return (r.inline = n), (r.simple = a), o;
    }
    function SF(e, t, r) {
      return (r.inline = !1), e(t, r);
    }
    var Bo = (e, t, r) => ({ children: xn(t, e[1], r) });
    function To() {
      return {};
    }
    function _o() {
      return null;
    }
    function FF(...e) {
      return e.filter(Boolean).join(' ');
    }
    function Oo(e, t, r) {
      let n = e,
        a = t.split('.');
      for (; a.length && ((n = n[a[0]]), n !== void 0); ) a.shift();
      return n || r;
    }
    function wF(e, t = {}) {
      (t.overrides = t.overrides || {}),
        (t.slugify = t.slugify || AF),
        (t.namedCodesToUnicode = t.namedCodesToUnicode
          ? Et({}, Gd, t.namedCodesToUnicode)
          : Gd);
      let r = t.createElement || ha;
      function n(h, E, ...b) {
        let x = Oo(t.overrides, `${h}.props`, {});
        return r(
          (function (F, B) {
            let I = Oo(B, F);
            return I
              ? typeof I == 'function' ||
                (typeof I == 'object' && 'render' in I)
                ? I
                : Oo(B, `${F}.component`, F)
              : F;
          })(h, t.overrides),
          Et({}, E, x, { className: FF(E?.className, x.className) || void 0 }),
          ...b
        );
      }
      function a(h) {
        let E = !1;
        t.forceInline ? (E = !0) : t.forceBlock || (E = XS.test(h) === !1);
        let b = y(
          p(
            E
              ? h
              : `${h.trimEnd().replace(dF, '')}

`,
            { inline: E }
          )
        );
        for (; typeof b[b.length - 1] == 'string' && !b[b.length - 1].trim(); )
          b.pop();
        if (t.wrapper === null) return b;
        let x = t.wrapper || (E ? 'span' : 'div'),
          F;
        if (b.length > 1 || t.forceWrapper) F = b;
        else {
          if (b.length === 1)
            return (
              (F = b[0]),
              typeof F == 'string' ? n('span', { key: 'outer' }, F) : F
            );
          F = null;
        }
        return ha(x, { key: 'outer' }, F);
      }
      function o(h) {
        let E = h.match(wS);
        return E
          ? E.reduce(function (b, x, F) {
              let B = x.indexOf('=');
              if (B !== -1) {
                let I = (function (k) {
                    return (
                      k.indexOf('-') !== -1 &&
                        k.match($S) === null &&
                        (k = k.replace(WS, function (z, V) {
                          return V.toUpperCase();
                        })),
                      k
                    );
                  })(x.slice(0, B)).trim(),
                  q = (function (k) {
                    let z = k[0];
                    return (z === '"' || z === "'") &&
                      k.length >= 2 &&
                      k[k.length - 1] === z
                      ? k.slice(1, -1)
                      : k;
                  })(x.slice(B + 1).trim()),
                  w = Hd[I] || I,
                  N = (b[w] = (function (k, z) {
                    return k === 'style'
                      ? z.split(/;\s?/).reduce(function (V, U) {
                          let ne = U.slice(0, U.indexOf(':'));
                          return (
                            (V[
                              ne.replace(/(-[a-z])/g, (Q) => Q[1].toUpperCase())
                            ] = U.slice(ne.length + 1).trim()),
                            V
                          );
                        }, {})
                      : k === 'href' || k === 'src'
                        ? Mt(z)
                        : (z.match(US) && (z = z.slice(1, z.length - 1)),
                          z === 'true' || (z !== 'false' && z));
                  })(I, q));
                typeof N == 'string' &&
                  (Ro.test(N) || Po.test(N)) &&
                  (b[w] = fe(a(N.trim()), { key: F }));
              } else x !== 'style' && (b[Hd[x] || x] = !0);
              return b;
            }, {})
          : null;
      }
      let i = [],
        u = {},
        s = {
          0: {
            match: Xe(Xd),
            order: 1,
            parse: (h, E, b) => ({ children: E(h[0].replace(_S, ''), b) }),
            render: (h, E, b) =>
              n('blockquote', { key: b.key }, E(h.children, b)),
          },
          1: {
            match: Sr(OS),
            order: 1,
            parse: To,
            render: (h, E, b) => n('br', { key: b.key }),
          },
          2: {
            match: Xe(RS),
            order: 1,
            parse: To,
            render: (h, E, b) => n('hr', { key: b.key }),
          },
          3: {
            match: Xe(Zd),
            order: 0,
            parse: (h) => ({
              lang: void 0,
              text: h[0].replace(/^ {4}/gm, '').replace(/\n+$/, ''),
            }),
            render: (h, E, b) =>
              n(
                'pre',
                { key: b.key },
                n(
                  'code',
                  Et({}, h.attrs, {
                    className: h.lang ? `lang-${h.lang}` : '',
                  }),
                  h.text
                )
              ),
          },
          4: {
            match: Xe(Qd),
            order: 0,
            parse: (h) => ({
              attrs: o(h[3] || ''),
              lang: h[2] || void 0,
              text: h[4],
              type: '3',
            }),
          },
          5: {
            match: it(PS),
            order: 3,
            parse: (h) => ({ text: h[2] }),
            render: (h, E, b) => n('code', { key: b.key }, h.text),
          },
          6: {
            match: Xe(NS),
            order: 0,
            parse: (h) => (i.push({ footnote: h[2], identifier: h[1] }), {}),
            render: _o,
          },
          7: {
            match: ot(LS),
            order: 1,
            parse: (h) => ({ target: `#${t.slugify(h[1])}`, text: h[1] }),
            render: (h, E, b) =>
              n(
                'a',
                { key: b.key, href: Mt(h.target) },
                n('sup', { key: b.key }, h.text)
              ),
          },
          8: {
            match: ot(jS),
            order: 1,
            parse: (h) => ({ completed: h[1].toLowerCase() === 'x' }),
            render: (h, E, b) =>
              n('input', {
                checked: h.completed,
                key: b.key,
                readOnly: !0,
                type: 'checkbox',
              }),
          },
          9: {
            match: Xe(t.enforceAtxHeadings ? tp : ep),
            order: 1,
            parse: (h, E, b) => ({
              children: xn(E, h[2], b),
              id: t.slugify(h[2]),
              level: h[1].length,
            }),
            render: (h, E, b) =>
              n(`h${h.level}`, { id: h.id, key: b.key }, E(h.children, b)),
          },
          10: {
            match: Xe(rp),
            order: 0,
            parse: (h, E, b) => ({
              children: xn(E, h[1], b),
              level: h[2] === '=' ? 1 : 2,
              type: '9',
            }),
          },
          11: {
            match: Sr(Ro),
            order: 1,
            parse(h, E, b) {
              let [, x] = h[3].match(pF),
                F = new RegExp(`^${x}`, 'gm'),
                B = h[3].replace(F, ''),
                I = ((q = B), EF.some((z) => z.test(q)) ? SF : xn);
              var q;
              let w = h[1].toLowerCase(),
                N = FS.indexOf(w) !== -1,
                k = { attrs: o(h[2]), noInnerParse: N, tag: N ? w : h[1] };
              return (
                (b.inAnchor = b.inAnchor || w === 'a'),
                N ? (k.text = h[3]) : (k.children = I(E, B, b)),
                (b.inAnchor = !1),
                k
              );
            },
            render: (h, E, b) =>
              n(h.tag, Et({ key: b.key }, h.attrs), h.text || E(h.children, b)),
          },
          13: {
            match: Sr(Po),
            order: 1,
            parse: (h) => ({ attrs: o(h[2] || ''), tag: h[1] }),
            render: (h, E, b) => n(h.tag, Et({}, h.attrs, { key: b.key })),
          },
          12: { match: Sr(np), order: 1, parse: () => ({}), render: _o },
          14: {
            match: it(bF),
            order: 1,
            parse: (h) => ({ alt: h[1], target: Jd(h[2]), title: h[3] }),
            render: (h, E, b) =>
              n('img', {
                key: b.key,
                alt: h.alt || void 0,
                title: h.title || void 0,
                src: Mt(h.target),
              }),
          },
          15: {
            match: ot(yF),
            order: 3,
            parse: (h, E, b) => ({
              children: xF(E, h[1], b),
              target: Jd(h[2]),
              title: h[3],
            }),
            render: (h, E, b) =>
              n(
                'a',
                { key: b.key, href: Mt(h.target), title: h.title },
                E(h.children, b)
              ),
          },
          16: {
            match: ot(GS),
            order: 0,
            parse: (h) => ({
              children: [{ text: h[1], type: '27' }],
              target: h[1],
              type: '15',
            }),
          },
          17: {
            match: (h, E) => (E.inAnchor ? null : ot(zS)(h, E)),
            order: 0,
            parse: (h) => ({
              children: [{ text: h[1], type: '27' }],
              target: h[1],
              title: void 0,
              type: '15',
            }),
          },
          18: {
            match: ot(HS),
            order: 0,
            parse(h) {
              let E = h[1],
                b = h[1];
              return (
                BS.test(b) || (b = 'mailto:' + b),
                {
                  children: [{ text: E.replace('mailto:', ''), type: '27' }],
                  target: b,
                  type: '15',
                }
              );
            },
          },
          20: Vd(n, 1),
          33: Vd(n, 2),
          19: {
            match: Xe(IS),
            order: 3,
            parse: To,
            render: () => `
`,
          },
          21: {
            match: CF,
            order: 3,
            parse: Bo,
            render: (h, E, b) => n('p', { key: b.key }, E(h.children, b)),
          },
          22: {
            match: ot(VS),
            order: 0,
            parse: (h) => ((u[h[1]] = { target: h[2], title: h[4] }), {}),
            render: _o,
          },
          23: {
            match: it(KS),
            order: 0,
            parse: (h) => ({ alt: h[1] || void 0, ref: h[2] }),
            render: (h, E, b) =>
              n('img', {
                key: b.key,
                alt: h.alt,
                src: Mt(u[h.ref].target),
                title: u[h.ref].title,
              }),
          },
          24: {
            match: ot(YS),
            order: 0,
            parse: (h, E, b) => ({
              children: E(h[1], b),
              fallbackChildren: E(h[0].replace(JS, '\\$1'), b),
              ref: h[2],
            }),
            render: (h, E, b) =>
              u[h.ref]
                ? n(
                    'a',
                    {
                      key: b.key,
                      href: Mt(u[h.ref].target),
                      title: u[h.ref].title,
                    },
                    E(h.children, b)
                  )
                : n('span', { key: b.key }, E(h.fallbackChildren, b)),
          },
          25: {
            match: Xe(ap),
            order: 1,
            parse: DF,
            render: (h, E, b) =>
              n(
                'table',
                { key: b.key },
                n(
                  'thead',
                  null,
                  n(
                    'tr',
                    null,
                    h.header.map(function (x, F) {
                      return n('th', { key: F, style: Yd(h, F) }, E(x, b));
                    })
                  )
                ),
                n(
                  'tbody',
                  null,
                  h.cells.map(function (x, F) {
                    return n(
                      'tr',
                      { key: F },
                      x.map(function (B, I) {
                        return n('td', { key: I, style: Yd(h, I) }, E(B, b));
                      })
                    );
                  })
                )
              ),
          },
          26: {
            match: function (h, E) {
              return E.inTable ? ((E.inline = !0), ZS.exec(h)) : null;
            },
            order: 1,
            parse: function () {
              return { type: '26' };
            },
            render: () => ' | ',
          },
          27: {
            match: Sr(cF),
            order: 4,
            parse: (h) => ({
              text: h[0].replace(MS, (E, b) =>
                t.namedCodesToUnicode[b] ? t.namedCodesToUnicode[b] : E
              ),
            }),
            render: (h) => h.text,
          },
          28: {
            match: it(oF),
            order: 2,
            parse: (h, E, b) => ({ children: E(h[2], b) }),
            render: (h, E, b) => n('strong', { key: b.key }, E(h.children, b)),
          },
          29: {
            match: it(iF),
            order: 3,
            parse: (h, E, b) => ({ children: E(h[2], b) }),
            render: (h, E, b) => n('em', { key: b.key }, E(h.children, b)),
          },
          30: {
            match: it(lF),
            order: 1,
            parse: (h) => ({ text: h[1], type: '27' }),
          },
          31: {
            match: it(uF),
            order: 3,
            parse: Bo,
            render: (h, E, b) => n('mark', { key: b.key }, E(h.children, b)),
          },
          32: {
            match: it(sF),
            order: 3,
            parse: Bo,
            render: (h, E, b) => n('del', { key: b.key }, E(h.children, b)),
          },
        };
      t.disableParsingRawHTML === !0 && (delete s[11], delete s[13]);
      let p = (function (h) {
          let E = Object.keys(h);
          function b(x, F) {
            let B = [],
              I = '';
            for (; x; ) {
              let q = 0;
              for (; q < E.length; ) {
                let w = E[q],
                  N = h[w],
                  k = N.match(x, F, I);
                if (k) {
                  let z = k[0];
                  x = x.substring(z.length);
                  let V = N.parse(k, b, F);
                  V.type == null && (V.type = w), B.push(V), (I = z);
                  break;
                }
                q++;
              }
            }
            return B;
          }
          return (
            E.sort(function (x, F) {
              let B = h[x].order,
                I = h[F].order;
              return B !== I ? B - I : 1;
            }),
            function (x, F) {
              return b(
                (function (B) {
                  return B.replace(
                    kS,
                    `
`
                  )
                    .replace(qS, '')
                    .replace(QS, '    ');
                })(x),
                F
              );
            }
          );
        })(s),
        y =
          ((A = (function (h, E) {
            return function (b, x, F) {
              let B = h[b.type].render;
              return E ? E(() => B(b, x, F), b, x, F) : B(b, x, F);
            };
          })(s, t.renderRule)),
          function h(E, b = {}) {
            if (Array.isArray(E)) {
              let x = b.key,
                F = [],
                B = !1;
              for (let I = 0; I < E.length; I++) {
                b.key = I;
                let q = h(E[I], b),
                  w = typeof q == 'string';
                w && B ? (F[F.length - 1] += q) : q !== null && F.push(q),
                  (B = w);
              }
              return (b.key = x), F;
            }
            return A(E, h, b);
          });
      var A;
      let m = a(e);
      return i.length
        ? n(
            'div',
            null,
            m,
            n(
              'footer',
              { key: 'footer' },
              i.map(function (h) {
                return n(
                  'div',
                  { id: t.slugify(h.identifier), key: h.identifier },
                  h.identifier,
                  y(p(h.footnote, { inline: !0 }))
                );
              })
            )
          )
        : m;
    }
    var gp = (e) => {
      let { children: t, options: r } = e,
        n = (function (a, o) {
          if (a == null) return {};
          var i,
            u,
            s = {},
            p = Object.keys(a);
          for (u = 0; u < p.length; u++)
            o.indexOf((i = p[u])) >= 0 || (s[i] = a[i]);
          return s;
        })(e, SS);
      return fe(wF(t, r), n);
    };
    var by = pe(Sn(), 1),
      Ey = pe(Lp(), 1),
      Ay = pe(zf(), 1);
    l();
    c();
    d();
    l();
    c();
    d();
    l();
    c();
    d();
    l();
    c();
    d();
    l();
    c();
    d();
    l();
    c();
    d();
    var YV = __STORYBOOK_CHANNELS__,
      {
        Channel: qo,
        PostMessageTransport: JV,
        WebsocketTransport: XV,
        createBrowserChannel: E3,
        createPostMessageChannel: QV,
        createWebSocketChannel: ZV,
      } = __STORYBOOK_CHANNELS__;
    l();
    c();
    d();
    var aK = __STORYBOOK_CORE_EVENTS__,
      {
        CHANNEL_CREATED: oK,
        CONFIG_ERROR: A3,
        CURRENT_STORY_WAS_SET: v3,
        DOCS_PREPARED: D3,
        DOCS_RENDERED: C3,
        FORCE_REMOUNT: x3,
        FORCE_RE_RENDER: jo,
        GLOBALS_UPDATED: Bn,
        IGNORED_EXCEPTION: iK,
        NAVIGATE_URL: Hf,
        PLAY_FUNCTION_THREW_EXCEPTION: S3,
        PRELOAD_ENTRIES: F3,
        PREVIEW_BUILDER_PROGRESS: uK,
        PREVIEW_KEYDOWN: w3,
        REGISTER_SUBSCRIPTION: sK,
        REQUEST_WHATS_NEW_DATA: lK,
        RESET_STORY_ARGS: Tn,
        RESULT_WHATS_NEW_DATA: cK,
        SELECT_STORY: dK,
        SET_CONFIG: pK,
        SET_CURRENT_STORY: B3,
        SET_GLOBALS: T3,
        SET_INDEX: _3,
        SET_STORIES: fK,
        SET_WHATS_NEW_CACHE: hK,
        SHARED_STATE_CHANGED: O3,
        SHARED_STATE_SET: R3,
        STORIES_COLLAPSE_ALL: mK,
        STORIES_EXPAND_ALL: gK,
        STORY_ARGS_UPDATED: _n,
        STORY_CHANGED: P3,
        STORY_ERRORED: I3,
        STORY_INDEX_INVALIDATED: k3,
        STORY_MISSING: N3,
        STORY_PREPARED: L3,
        STORY_RENDERED: Gf,
        STORY_RENDER_PHASE_CHANGED: q3,
        STORY_SPECIFIED: j3,
        STORY_THREW_EXCEPTION: M3,
        STORY_UNCHANGED: $3,
        TELEMETRY_ERROR: yK,
        TOGGLE_WHATS_NEW_NOTIFICATIONS: bK,
        UPDATE_GLOBALS: Wf,
        UPDATE_QUERY_PARAMS: U3,
        UPDATE_STORY_ARGS: On,
      } = __STORYBOOK_CORE_EVENTS__;
    var z3 = Object.create,
      Vf = Object.defineProperty,
      H3 = Object.getOwnPropertyDescriptor,
      Kf = Object.getOwnPropertyNames,
      G3 = Object.getPrototypeOf,
      W3 = Object.prototype.hasOwnProperty,
      He = (e, t) =>
        function () {
          return (
            t || (0, e[Kf(e)[0]])((t = { exports: {} }).exports, t), t.exports
          );
        },
      V3 = (e, t, r, n) => {
        if ((t && typeof t == 'object') || typeof t == 'function')
          for (let a of Kf(t))
            !W3.call(e, a) &&
              a !== r &&
              Vf(e, a, {
                get: () => t[a],
                enumerable: !(n = H3(t, a)) || n.enumerable,
              });
        return e;
      },
      Yf = (e, t, r) => (
        (r = e != null ? z3(G3(e)) : {}),
        V3(
          t || !e || !e.__esModule
            ? Vf(r, 'default', { value: e, enumerable: !0 })
            : r,
          e
        )
      );
    function Jf() {
      let e = { setHandler: () => {}, send: () => {} };
      return new qo({ transport: e });
    }
    var K3 = class {
        constructor() {
          (this.getChannel = () => {
            if (!this.channel) {
              let e = Jf();
              return this.setChannel(e), e;
            }
            return this.channel;
          }),
            (this.getServerChannel = () => {
              if (!this.serverChannel)
                throw new Error('Accessing non-existent serverChannel');
              return this.serverChannel;
            }),
            (this.ready = () => this.promise),
            (this.hasChannel = () => !!this.channel),
            (this.hasServerChannel = () => !!this.serverChannel),
            (this.setChannel = (e) => {
              (this.channel = e), this.resolve();
            }),
            (this.setServerChannel = (e) => {
              this.serverChannel = e;
            }),
            (this.promise = new Promise((e) => {
              this.resolve = () => e(this.getChannel());
            }));
        }
      },
      Mo = '__STORYBOOK_ADDONS_PREVIEW';
    function Y3() {
      return ie[Mo] || (ie[Mo] = new K3()), ie[Mo];
    }
    var Rn = Y3();
    var H0 = pe(Sn(), 1),
      _r = pe(Pn(), 1),
      iT = pe(R0(), 1),
      uT = pe(kn(), 1);
    l();
    c();
    d();
    l();
    c();
    d();
    l();
    c();
    d();
    function Ut(e) {
      for (var t = [], r = 1; r < arguments.length; r++)
        t[r - 1] = arguments[r];
      var n = Array.from(typeof e == 'string' ? [e] : e);
      n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, '');
      var a = n.reduce(function (u, s) {
        var p = s.match(/\n([\t ]+|(?!\s).)/g);
        return p
          ? u.concat(
              p.map(function (y) {
                var A, m;
                return (m =
                  (A = y.match(/[\t ]/g)) === null || A === void 0
                    ? void 0
                    : A.length) !== null && m !== void 0
                  ? m
                  : 0;
              })
            )
          : u;
      }, []);
      if (a.length) {
        var o = new RegExp(
          `
[	 ]{` +
            Math.min.apply(Math, a) +
            '}',
          'g'
        );
        n = n.map(function (u) {
          return u.replace(
            o,
            `
`
          );
        });
      }
      n[0] = n[0].replace(/^\r?\n/, '');
      var i = n[0];
      return (
        t.forEach(function (u, s) {
          var p = i.match(/(?:^|\n)( *)$/),
            y = p ? p[1] : '',
            A = u;
          typeof u == 'string' &&
            u.includes(`
`) &&
            (A = String(u)
              .split(
                `
`
              )
              .map(function (m, h) {
                return h === 0 ? m : '' + y + m;
              }).join(`
`)),
            (i += A + n[s + 1]);
        }),
        i
      );
    }
    var Tr = Ut;
    var jB = ((e) => (
      (e.PREVIEW_CLIENT_LOGGER = 'PREVIEW_CLIENT-LOGGER'),
      (e.PREVIEW_CHANNELS = 'PREVIEW_CHANNELS'),
      (e.PREVIEW_CORE_EVENTS = 'PREVIEW_CORE-EVENTS'),
      (e.PREVIEW_INSTRUMENTER = 'PREVIEW_INSTRUMENTER'),
      (e.PREVIEW_API = 'PREVIEW_API'),
      (e.PREVIEW_REACT_DOM_SHIM = 'PREVIEW_REACT-DOM-SHIM'),
      (e.PREVIEW_ROUTER = 'PREVIEW_ROUTER'),
      (e.PREVIEW_THEMING = 'PREVIEW_THEMING'),
      (e.RENDERER_HTML = 'RENDERER_HTML'),
      (e.RENDERER_PREACT = 'RENDERER_PREACT'),
      (e.RENDERER_REACT = 'RENDERER_REACT'),
      (e.RENDERER_SERVER = 'RENDERER_SERVER'),
      (e.RENDERER_SVELTE = 'RENDERER_SVELTE'),
      (e.RENDERER_VUE = 'RENDERER_VUE'),
      (e.RENDERER_VUE3 = 'RENDERER_VUE3'),
      (e.RENDERER_WEB_COMPONENTS = 'RENDERER_WEB-COMPONENTS'),
      e
    ))(jB || {});
    l();
    c();
    d();
    var jn = pe($o(), 1);
    var G0 = pe(U0(), 1);
    var W0 = pe(Fo(), 1);
    var TJ = (0, H0.default)(1)((e) =>
      Object.values(e).reduce(
        (t, r) => ((t[r.importPath] = t[r.importPath] || r), t),
        {}
      )
    );
    var _J = Symbol('incompatible');
    var OJ = Symbol('Deeply equal');
    var sT = Ut`
CSF .story annotations deprecated; annotate story functions directly:
- StoryFn.story.name => StoryFn.storyName
- StoryFn.story.(parameters|decorators) => StoryFn.(parameters|decorators)
See https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#hoisted-csf-annotations for details and codemod.
`,
      RJ = (0, G0.default)(() => {}, sT);
    var At = (...e) => {
      let t = {},
        r = e.filter(Boolean),
        n = r.reduce(
          (a, o) => (
            Object.entries(o).forEach(([i, u]) => {
              let s = a[i];
              Array.isArray(u) || typeof s > 'u'
                ? (a[i] = u)
                : (0, jn.default)(u) && (0, jn.default)(s)
                  ? (t[i] = !0)
                  : typeof u < 'u' && (a[i] = u);
            }),
            a
          ),
          {}
        );
      return (
        Object.keys(t).forEach((a) => {
          let o = r
            .filter(Boolean)
            .map((i) => i[a])
            .filter((i) => typeof i < 'u');
          o.every((i) => (0, jn.default)(i))
            ? (n[a] = At(...o))
            : (n[a] = o[o.length - 1]);
        }),
        n
      );
    };
    var zo = (e, t, r) => {
        let n = typeof e;
        switch (n) {
          case 'boolean':
          case 'string':
          case 'number':
          case 'function':
          case 'symbol':
            return { name: n };
        }
        return e
          ? r.has(e)
            ? (ze.warn(Ut`
        We've detected a cycle in arg '${t}'. Args should be JSON-serializable.

        Consider using the mapping feature or fully custom args:
        - Mapping: https://storybook.js.org/docs/react/writing-stories/args#mapping-to-complex-arg-values
        - Custom args: https://storybook.js.org/docs/react/essentials/controls#fully-custom-args
      `),
              { name: 'other', value: 'cyclic object' })
            : (r.add(e),
              Array.isArray(e)
                ? {
                    name: 'array',
                    value:
                      e.length > 0
                        ? zo(e[0], t, new Set(r))
                        : { name: 'other', value: 'unknown' },
                  }
                : {
                    name: 'object',
                    value: (0, _r.default)(e, (a) => zo(a, t, new Set(r))),
                  })
          : { name: 'object', value: {} };
      },
      lT = (e) => {
        let { id: t, argTypes: r = {}, initialArgs: n = {} } = e,
          a = (0, _r.default)(n, (i, u) => ({
            name: u,
            type: zo(i, `${t}.${u}`, new Set()),
          })),
          o = (0, _r.default)(r, (i, u) => ({ name: u }));
        return At(a, o, r);
      };
    lT.secondPass = !0;
    var z0 = (e, t) => (Array.isArray(t) ? t.includes(e) : e.match(t)),
      Rr = (e, t, r) =>
        !t && !r
          ? e
          : e &&
            (0, W0.default)(e, (n, a) => {
              let o = n.name || a;
              return (!t || z0(o, t)) && (!r || !z0(o, r));
            }),
      cT = (e, t, r) => {
        let { type: n, options: a } = e;
        if (n) {
          if (r.color && r.color.test(t)) {
            let o = n.name;
            if (o === 'string') return { control: { type: 'color' } };
            o !== 'enum' &&
              ze.warn(
                `Addon controls: Control of type color only supports string, received "${o}" instead`
              );
          }
          if (r.date && r.date.test(t)) return { control: { type: 'date' } };
          switch (n.name) {
            case 'array':
              return { control: { type: 'object' } };
            case 'boolean':
              return { control: { type: 'boolean' } };
            case 'string':
              return { control: { type: 'text' } };
            case 'number':
              return { control: { type: 'number' } };
            case 'enum': {
              let { value: o } = n;
              return {
                control: { type: o?.length <= 5 ? 'radio' : 'select' },
                options: o,
              };
            }
            case 'function':
            case 'symbol':
              return null;
            default:
              return { control: { type: a ? 'select' : 'object' } };
          }
        }
      },
      V0 = (e) => {
        let {
          argTypes: t,
          parameters: {
            __isArgsStory: r,
            controls: {
              include: n = null,
              exclude: a = null,
              matchers: o = {},
            } = {},
          },
        } = e;
        if (!r) return t;
        let i = Rr(t, n, a),
          u = (0, _r.default)(i, (s, p) => s?.type && cT(s, p, o));
        return At(u, i);
      };
    V0.secondPass = !0;
    function Ho(e) {
      return async (t, r, n) => {
        await e.reduceRight(
          (a, o) => async () => o(t, a, n),
          async () => r(n)
        )();
      };
    }
    function Or(e, t) {
      return e.map((r) => r.default?.[t] ?? r[t]).filter(Boolean);
    }
    function Nn(e, t, r = {}) {
      return Or(e, t).reduce(
        (n, a) => (r.reverseFileOrder ? [...a, ...n] : [...n, ...a]),
        []
      );
    }
    function Ln(e, t) {
      return Object.assign({}, ...Or(e, t));
    }
    function qn(e, t) {
      return Or(e, t).pop();
    }
    function Go(e) {
      let t = Nn(e, 'argTypesEnhancers'),
        r = Or(e, 'runStep');
      return {
        parameters: At(...Or(e, 'parameters')),
        decorators: Nn(e, 'decorators', {
          reverseFileOrder: !(ie.FEATURES?.legacyDecoratorFileOrder ?? !1),
        }),
        args: Ln(e, 'args'),
        argsEnhancers: Nn(e, 'argsEnhancers'),
        argTypes: Ln(e, 'argTypes'),
        argTypesEnhancers: [
          ...t.filter((n) => !n.secondPass),
          ...t.filter((n) => n.secondPass),
        ],
        globals: Ln(e, 'globals'),
        globalTypes: Ln(e, 'globalTypes'),
        loaders: Nn(e, 'loaders'),
        render: qn(e, 'render'),
        renderToCanvas: qn(e, 'renderToCanvas'),
        renderToDOM: qn(e, 'renderToDOM'),
        applyDecorators: qn(e, 'applyDecorators'),
        runStep: Ho(r),
      };
    }
    var PJ = Go([]);
    var i_ = pe(kn(), 1),
      u_ = pe(Ai(), 1);
    l();
    c();
    d();
    var l_ = pe(kn(), 1);
    var c_ = pe(Ai(), 1),
      d_ = pe($o(), 1),
      ym = He({
        '../../node_modules/entities/lib/maps/entities.json'(e, t) {
          t.exports = {
            Aacute: '\xC1',
            aacute: '\xE1',
            Abreve: '\u0102',
            abreve: '\u0103',
            ac: '\u223E',
            acd: '\u223F',
            acE: '\u223E\u0333',
            Acirc: '\xC2',
            acirc: '\xE2',
            acute: '\xB4',
            Acy: '\u0410',
            acy: '\u0430',
            AElig: '\xC6',
            aelig: '\xE6',
            af: '\u2061',
            Afr: '\u{1D504}',
            afr: '\u{1D51E}',
            Agrave: '\xC0',
            agrave: '\xE0',
            alefsym: '\u2135',
            aleph: '\u2135',
            Alpha: '\u0391',
            alpha: '\u03B1',
            Amacr: '\u0100',
            amacr: '\u0101',
            amalg: '\u2A3F',
            amp: '&',
            AMP: '&',
            andand: '\u2A55',
            And: '\u2A53',
            and: '\u2227',
            andd: '\u2A5C',
            andslope: '\u2A58',
            andv: '\u2A5A',
            ang: '\u2220',
            ange: '\u29A4',
            angle: '\u2220',
            angmsdaa: '\u29A8',
            angmsdab: '\u29A9',
            angmsdac: '\u29AA',
            angmsdad: '\u29AB',
            angmsdae: '\u29AC',
            angmsdaf: '\u29AD',
            angmsdag: '\u29AE',
            angmsdah: '\u29AF',
            angmsd: '\u2221',
            angrt: '\u221F',
            angrtvb: '\u22BE',
            angrtvbd: '\u299D',
            angsph: '\u2222',
            angst: '\xC5',
            angzarr: '\u237C',
            Aogon: '\u0104',
            aogon: '\u0105',
            Aopf: '\u{1D538}',
            aopf: '\u{1D552}',
            apacir: '\u2A6F',
            ap: '\u2248',
            apE: '\u2A70',
            ape: '\u224A',
            apid: '\u224B',
            apos: "'",
            ApplyFunction: '\u2061',
            approx: '\u2248',
            approxeq: '\u224A',
            Aring: '\xC5',
            aring: '\xE5',
            Ascr: '\u{1D49C}',
            ascr: '\u{1D4B6}',
            Assign: '\u2254',
            ast: '*',
            asymp: '\u2248',
            asympeq: '\u224D',
            Atilde: '\xC3',
            atilde: '\xE3',
            Auml: '\xC4',
            auml: '\xE4',
            awconint: '\u2233',
            awint: '\u2A11',
            backcong: '\u224C',
            backepsilon: '\u03F6',
            backprime: '\u2035',
            backsim: '\u223D',
            backsimeq: '\u22CD',
            Backslash: '\u2216',
            Barv: '\u2AE7',
            barvee: '\u22BD',
            barwed: '\u2305',
            Barwed: '\u2306',
            barwedge: '\u2305',
            bbrk: '\u23B5',
            bbrktbrk: '\u23B6',
            bcong: '\u224C',
            Bcy: '\u0411',
            bcy: '\u0431',
            bdquo: '\u201E',
            becaus: '\u2235',
            because: '\u2235',
            Because: '\u2235',
            bemptyv: '\u29B0',
            bepsi: '\u03F6',
            bernou: '\u212C',
            Bernoullis: '\u212C',
            Beta: '\u0392',
            beta: '\u03B2',
            beth: '\u2136',
            between: '\u226C',
            Bfr: '\u{1D505}',
            bfr: '\u{1D51F}',
            bigcap: '\u22C2',
            bigcirc: '\u25EF',
            bigcup: '\u22C3',
            bigodot: '\u2A00',
            bigoplus: '\u2A01',
            bigotimes: '\u2A02',
            bigsqcup: '\u2A06',
            bigstar: '\u2605',
            bigtriangledown: '\u25BD',
            bigtriangleup: '\u25B3',
            biguplus: '\u2A04',
            bigvee: '\u22C1',
            bigwedge: '\u22C0',
            bkarow: '\u290D',
            blacklozenge: '\u29EB',
            blacksquare: '\u25AA',
            blacktriangle: '\u25B4',
            blacktriangledown: '\u25BE',
            blacktriangleleft: '\u25C2',
            blacktriangleright: '\u25B8',
            blank: '\u2423',
            blk12: '\u2592',
            blk14: '\u2591',
            blk34: '\u2593',
            block: '\u2588',
            bne: '=\u20E5',
            bnequiv: '\u2261\u20E5',
            bNot: '\u2AED',
            bnot: '\u2310',
            Bopf: '\u{1D539}',
            bopf: '\u{1D553}',
            bot: '\u22A5',
            bottom: '\u22A5',
            bowtie: '\u22C8',
            boxbox: '\u29C9',
            boxdl: '\u2510',
            boxdL: '\u2555',
            boxDl: '\u2556',
            boxDL: '\u2557',
            boxdr: '\u250C',
            boxdR: '\u2552',
            boxDr: '\u2553',
            boxDR: '\u2554',
            boxh: '\u2500',
            boxH: '\u2550',
            boxhd: '\u252C',
            boxHd: '\u2564',
            boxhD: '\u2565',
            boxHD: '\u2566',
            boxhu: '\u2534',
            boxHu: '\u2567',
            boxhU: '\u2568',
            boxHU: '\u2569',
            boxminus: '\u229F',
            boxplus: '\u229E',
            boxtimes: '\u22A0',
            boxul: '\u2518',
            boxuL: '\u255B',
            boxUl: '\u255C',
            boxUL: '\u255D',
            boxur: '\u2514',
            boxuR: '\u2558',
            boxUr: '\u2559',
            boxUR: '\u255A',
            boxv: '\u2502',
            boxV: '\u2551',
            boxvh: '\u253C',
            boxvH: '\u256A',
            boxVh: '\u256B',
            boxVH: '\u256C',
            boxvl: '\u2524',
            boxvL: '\u2561',
            boxVl: '\u2562',
            boxVL: '\u2563',
            boxvr: '\u251C',
            boxvR: '\u255E',
            boxVr: '\u255F',
            boxVR: '\u2560',
            bprime: '\u2035',
            breve: '\u02D8',
            Breve: '\u02D8',
            brvbar: '\xA6',
            bscr: '\u{1D4B7}',
            Bscr: '\u212C',
            bsemi: '\u204F',
            bsim: '\u223D',
            bsime: '\u22CD',
            bsolb: '\u29C5',
            bsol: '\\',
            bsolhsub: '\u27C8',
            bull: '\u2022',
            bullet: '\u2022',
            bump: '\u224E',
            bumpE: '\u2AAE',
            bumpe: '\u224F',
            Bumpeq: '\u224E',
            bumpeq: '\u224F',
            Cacute: '\u0106',
            cacute: '\u0107',
            capand: '\u2A44',
            capbrcup: '\u2A49',
            capcap: '\u2A4B',
            cap: '\u2229',
            Cap: '\u22D2',
            capcup: '\u2A47',
            capdot: '\u2A40',
            CapitalDifferentialD: '\u2145',
            caps: '\u2229\uFE00',
            caret: '\u2041',
            caron: '\u02C7',
            Cayleys: '\u212D',
            ccaps: '\u2A4D',
            Ccaron: '\u010C',
            ccaron: '\u010D',
            Ccedil: '\xC7',
            ccedil: '\xE7',
            Ccirc: '\u0108',
            ccirc: '\u0109',
            Cconint: '\u2230',
            ccups: '\u2A4C',
            ccupssm: '\u2A50',
            Cdot: '\u010A',
            cdot: '\u010B',
            cedil: '\xB8',
            Cedilla: '\xB8',
            cemptyv: '\u29B2',
            cent: '\xA2',
            centerdot: '\xB7',
            CenterDot: '\xB7',
            cfr: '\u{1D520}',
            Cfr: '\u212D',
            CHcy: '\u0427',
            chcy: '\u0447',
            check: '\u2713',
            checkmark: '\u2713',
            Chi: '\u03A7',
            chi: '\u03C7',
            circ: '\u02C6',
            circeq: '\u2257',
            circlearrowleft: '\u21BA',
            circlearrowright: '\u21BB',
            circledast: '\u229B',
            circledcirc: '\u229A',
            circleddash: '\u229D',
            CircleDot: '\u2299',
            circledR: '\xAE',
            circledS: '\u24C8',
            CircleMinus: '\u2296',
            CirclePlus: '\u2295',
            CircleTimes: '\u2297',
            cir: '\u25CB',
            cirE: '\u29C3',
            cire: '\u2257',
            cirfnint: '\u2A10',
            cirmid: '\u2AEF',
            cirscir: '\u29C2',
            ClockwiseContourIntegral: '\u2232',
            CloseCurlyDoubleQuote: '\u201D',
            CloseCurlyQuote: '\u2019',
            clubs: '\u2663',
            clubsuit: '\u2663',
            colon: ':',
            Colon: '\u2237',
            Colone: '\u2A74',
            colone: '\u2254',
            coloneq: '\u2254',
            comma: ',',
            commat: '@',
            comp: '\u2201',
            compfn: '\u2218',
            complement: '\u2201',
            complexes: '\u2102',
            cong: '\u2245',
            congdot: '\u2A6D',
            Congruent: '\u2261',
            conint: '\u222E',
            Conint: '\u222F',
            ContourIntegral: '\u222E',
            copf: '\u{1D554}',
            Copf: '\u2102',
            coprod: '\u2210',
            Coproduct: '\u2210',
            copy: '\xA9',
            COPY: '\xA9',
            copysr: '\u2117',
            CounterClockwiseContourIntegral: '\u2233',
            crarr: '\u21B5',
            cross: '\u2717',
            Cross: '\u2A2F',
            Cscr: '\u{1D49E}',
            cscr: '\u{1D4B8}',
            csub: '\u2ACF',
            csube: '\u2AD1',
            csup: '\u2AD0',
            csupe: '\u2AD2',
            ctdot: '\u22EF',
            cudarrl: '\u2938',
            cudarrr: '\u2935',
            cuepr: '\u22DE',
            cuesc: '\u22DF',
            cularr: '\u21B6',
            cularrp: '\u293D',
            cupbrcap: '\u2A48',
            cupcap: '\u2A46',
            CupCap: '\u224D',
            cup: '\u222A',
            Cup: '\u22D3',
            cupcup: '\u2A4A',
            cupdot: '\u228D',
            cupor: '\u2A45',
            cups: '\u222A\uFE00',
            curarr: '\u21B7',
            curarrm: '\u293C',
            curlyeqprec: '\u22DE',
            curlyeqsucc: '\u22DF',
            curlyvee: '\u22CE',
            curlywedge: '\u22CF',
            curren: '\xA4',
            curvearrowleft: '\u21B6',
            curvearrowright: '\u21B7',
            cuvee: '\u22CE',
            cuwed: '\u22CF',
            cwconint: '\u2232',
            cwint: '\u2231',
            cylcty: '\u232D',
            dagger: '\u2020',
            Dagger: '\u2021',
            daleth: '\u2138',
            darr: '\u2193',
            Darr: '\u21A1',
            dArr: '\u21D3',
            dash: '\u2010',
            Dashv: '\u2AE4',
            dashv: '\u22A3',
            dbkarow: '\u290F',
            dblac: '\u02DD',
            Dcaron: '\u010E',
            dcaron: '\u010F',
            Dcy: '\u0414',
            dcy: '\u0434',
            ddagger: '\u2021',
            ddarr: '\u21CA',
            DD: '\u2145',
            dd: '\u2146',
            DDotrahd: '\u2911',
            ddotseq: '\u2A77',
            deg: '\xB0',
            Del: '\u2207',
            Delta: '\u0394',
            delta: '\u03B4',
            demptyv: '\u29B1',
            dfisht: '\u297F',
            Dfr: '\u{1D507}',
            dfr: '\u{1D521}',
            dHar: '\u2965',
            dharl: '\u21C3',
            dharr: '\u21C2',
            DiacriticalAcute: '\xB4',
            DiacriticalDot: '\u02D9',
            DiacriticalDoubleAcute: '\u02DD',
            DiacriticalGrave: '`',
            DiacriticalTilde: '\u02DC',
            diam: '\u22C4',
            diamond: '\u22C4',
            Diamond: '\u22C4',
            diamondsuit: '\u2666',
            diams: '\u2666',
            die: '\xA8',
            DifferentialD: '\u2146',
            digamma: '\u03DD',
            disin: '\u22F2',
            div: '\xF7',
            divide: '\xF7',
            divideontimes: '\u22C7',
            divonx: '\u22C7',
            DJcy: '\u0402',
            djcy: '\u0452',
            dlcorn: '\u231E',
            dlcrop: '\u230D',
            dollar: '$',
            Dopf: '\u{1D53B}',
            dopf: '\u{1D555}',
            Dot: '\xA8',
            dot: '\u02D9',
            DotDot: '\u20DC',
            doteq: '\u2250',
            doteqdot: '\u2251',
            DotEqual: '\u2250',
            dotminus: '\u2238',
            dotplus: '\u2214',
            dotsquare: '\u22A1',
            doublebarwedge: '\u2306',
            DoubleContourIntegral: '\u222F',
            DoubleDot: '\xA8',
            DoubleDownArrow: '\u21D3',
            DoubleLeftArrow: '\u21D0',
            DoubleLeftRightArrow: '\u21D4',
            DoubleLeftTee: '\u2AE4',
            DoubleLongLeftArrow: '\u27F8',
            DoubleLongLeftRightArrow: '\u27FA',
            DoubleLongRightArrow: '\u27F9',
            DoubleRightArrow: '\u21D2',
            DoubleRightTee: '\u22A8',
            DoubleUpArrow: '\u21D1',
            DoubleUpDownArrow: '\u21D5',
            DoubleVerticalBar: '\u2225',
            DownArrowBar: '\u2913',
            downarrow: '\u2193',
            DownArrow: '\u2193',
            Downarrow: '\u21D3',
            DownArrowUpArrow: '\u21F5',
            DownBreve: '\u0311',
            downdownarrows: '\u21CA',
            downharpoonleft: '\u21C3',
            downharpoonright: '\u21C2',
            DownLeftRightVector: '\u2950',
            DownLeftTeeVector: '\u295E',
            DownLeftVectorBar: '\u2956',
            DownLeftVector: '\u21BD',
            DownRightTeeVector: '\u295F',
            DownRightVectorBar: '\u2957',
            DownRightVector: '\u21C1',
            DownTeeArrow: '\u21A7',
            DownTee: '\u22A4',
            drbkarow: '\u2910',
            drcorn: '\u231F',
            drcrop: '\u230C',
            Dscr: '\u{1D49F}',
            dscr: '\u{1D4B9}',
            DScy: '\u0405',
            dscy: '\u0455',
            dsol: '\u29F6',
            Dstrok: '\u0110',
            dstrok: '\u0111',
            dtdot: '\u22F1',
            dtri: '\u25BF',
            dtrif: '\u25BE',
            duarr: '\u21F5',
            duhar: '\u296F',
            dwangle: '\u29A6',
            DZcy: '\u040F',
            dzcy: '\u045F',
            dzigrarr: '\u27FF',
            Eacute: '\xC9',
            eacute: '\xE9',
            easter: '\u2A6E',
            Ecaron: '\u011A',
            ecaron: '\u011B',
            Ecirc: '\xCA',
            ecirc: '\xEA',
            ecir: '\u2256',
            ecolon: '\u2255',
            Ecy: '\u042D',
            ecy: '\u044D',
            eDDot: '\u2A77',
            Edot: '\u0116',
            edot: '\u0117',
            eDot: '\u2251',
            ee: '\u2147',
            efDot: '\u2252',
            Efr: '\u{1D508}',
            efr: '\u{1D522}',
            eg: '\u2A9A',
            Egrave: '\xC8',
            egrave: '\xE8',
            egs: '\u2A96',
            egsdot: '\u2A98',
            el: '\u2A99',
            Element: '\u2208',
            elinters: '\u23E7',
            ell: '\u2113',
            els: '\u2A95',
            elsdot: '\u2A97',
            Emacr: '\u0112',
            emacr: '\u0113',
            empty: '\u2205',
            emptyset: '\u2205',
            EmptySmallSquare: '\u25FB',
            emptyv: '\u2205',
            EmptyVerySmallSquare: '\u25AB',
            emsp13: '\u2004',
            emsp14: '\u2005',
            emsp: '\u2003',
            ENG: '\u014A',
            eng: '\u014B',
            ensp: '\u2002',
            Eogon: '\u0118',
            eogon: '\u0119',
            Eopf: '\u{1D53C}',
            eopf: '\u{1D556}',
            epar: '\u22D5',
            eparsl: '\u29E3',
            eplus: '\u2A71',
            epsi: '\u03B5',
            Epsilon: '\u0395',
            epsilon: '\u03B5',
            epsiv: '\u03F5',
            eqcirc: '\u2256',
            eqcolon: '\u2255',
            eqsim: '\u2242',
            eqslantgtr: '\u2A96',
            eqslantless: '\u2A95',
            Equal: '\u2A75',
            equals: '=',
            EqualTilde: '\u2242',
            equest: '\u225F',
            Equilibrium: '\u21CC',
            equiv: '\u2261',
            equivDD: '\u2A78',
            eqvparsl: '\u29E5',
            erarr: '\u2971',
            erDot: '\u2253',
            escr: '\u212F',
            Escr: '\u2130',
            esdot: '\u2250',
            Esim: '\u2A73',
            esim: '\u2242',
            Eta: '\u0397',
            eta: '\u03B7',
            ETH: '\xD0',
            eth: '\xF0',
            Euml: '\xCB',
            euml: '\xEB',
            euro: '\u20AC',
            excl: '!',
            exist: '\u2203',
            Exists: '\u2203',
            expectation: '\u2130',
            exponentiale: '\u2147',
            ExponentialE: '\u2147',
            fallingdotseq: '\u2252',
            Fcy: '\u0424',
            fcy: '\u0444',
            female: '\u2640',
            ffilig: '\uFB03',
            fflig: '\uFB00',
            ffllig: '\uFB04',
            Ffr: '\u{1D509}',
            ffr: '\u{1D523}',
            filig: '\uFB01',
            FilledSmallSquare: '\u25FC',
            FilledVerySmallSquare: '\u25AA',
            fjlig: 'fj',
            flat: '\u266D',
            fllig: '\uFB02',
            fltns: '\u25B1',
            fnof: '\u0192',
            Fopf: '\u{1D53D}',
            fopf: '\u{1D557}',
            forall: '\u2200',
            ForAll: '\u2200',
            fork: '\u22D4',
            forkv: '\u2AD9',
            Fouriertrf: '\u2131',
            fpartint: '\u2A0D',
            frac12: '\xBD',
            frac13: '\u2153',
            frac14: '\xBC',
            frac15: '\u2155',
            frac16: '\u2159',
            frac18: '\u215B',
            frac23: '\u2154',
            frac25: '\u2156',
            frac34: '\xBE',
            frac35: '\u2157',
            frac38: '\u215C',
            frac45: '\u2158',
            frac56: '\u215A',
            frac58: '\u215D',
            frac78: '\u215E',
            frasl: '\u2044',
            frown: '\u2322',
            fscr: '\u{1D4BB}',
            Fscr: '\u2131',
            gacute: '\u01F5',
            Gamma: '\u0393',
            gamma: '\u03B3',
            Gammad: '\u03DC',
            gammad: '\u03DD',
            gap: '\u2A86',
            Gbreve: '\u011E',
            gbreve: '\u011F',
            Gcedil: '\u0122',
            Gcirc: '\u011C',
            gcirc: '\u011D',
            Gcy: '\u0413',
            gcy: '\u0433',
            Gdot: '\u0120',
            gdot: '\u0121',
            ge: '\u2265',
            gE: '\u2267',
            gEl: '\u2A8C',
            gel: '\u22DB',
            geq: '\u2265',
            geqq: '\u2267',
            geqslant: '\u2A7E',
            gescc: '\u2AA9',
            ges: '\u2A7E',
            gesdot: '\u2A80',
            gesdoto: '\u2A82',
            gesdotol: '\u2A84',
            gesl: '\u22DB\uFE00',
            gesles: '\u2A94',
            Gfr: '\u{1D50A}',
            gfr: '\u{1D524}',
            gg: '\u226B',
            Gg: '\u22D9',
            ggg: '\u22D9',
            gimel: '\u2137',
            GJcy: '\u0403',
            gjcy: '\u0453',
            gla: '\u2AA5',
            gl: '\u2277',
            glE: '\u2A92',
            glj: '\u2AA4',
            gnap: '\u2A8A',
            gnapprox: '\u2A8A',
            gne: '\u2A88',
            gnE: '\u2269',
            gneq: '\u2A88',
            gneqq: '\u2269',
            gnsim: '\u22E7',
            Gopf: '\u{1D53E}',
            gopf: '\u{1D558}',
            grave: '`',
            GreaterEqual: '\u2265',
            GreaterEqualLess: '\u22DB',
            GreaterFullEqual: '\u2267',
            GreaterGreater: '\u2AA2',
            GreaterLess: '\u2277',
            GreaterSlantEqual: '\u2A7E',
            GreaterTilde: '\u2273',
            Gscr: '\u{1D4A2}',
            gscr: '\u210A',
            gsim: '\u2273',
            gsime: '\u2A8E',
            gsiml: '\u2A90',
            gtcc: '\u2AA7',
            gtcir: '\u2A7A',
            gt: '>',
            GT: '>',
            Gt: '\u226B',
            gtdot: '\u22D7',
            gtlPar: '\u2995',
            gtquest: '\u2A7C',
            gtrapprox: '\u2A86',
            gtrarr: '\u2978',
            gtrdot: '\u22D7',
            gtreqless: '\u22DB',
            gtreqqless: '\u2A8C',
            gtrless: '\u2277',
            gtrsim: '\u2273',
            gvertneqq: '\u2269\uFE00',
            gvnE: '\u2269\uFE00',
            Hacek: '\u02C7',
            hairsp: '\u200A',
            half: '\xBD',
            hamilt: '\u210B',
            HARDcy: '\u042A',
            hardcy: '\u044A',
            harrcir: '\u2948',
            harr: '\u2194',
            hArr: '\u21D4',
            harrw: '\u21AD',
            Hat: '^',
            hbar: '\u210F',
            Hcirc: '\u0124',
            hcirc: '\u0125',
            hearts: '\u2665',
            heartsuit: '\u2665',
            hellip: '\u2026',
            hercon: '\u22B9',
            hfr: '\u{1D525}',
            Hfr: '\u210C',
            HilbertSpace: '\u210B',
            hksearow: '\u2925',
            hkswarow: '\u2926',
            hoarr: '\u21FF',
            homtht: '\u223B',
            hookleftarrow: '\u21A9',
            hookrightarrow: '\u21AA',
            hopf: '\u{1D559}',
            Hopf: '\u210D',
            horbar: '\u2015',
            HorizontalLine: '\u2500',
            hscr: '\u{1D4BD}',
            Hscr: '\u210B',
            hslash: '\u210F',
            Hstrok: '\u0126',
            hstrok: '\u0127',
            HumpDownHump: '\u224E',
            HumpEqual: '\u224F',
            hybull: '\u2043',
            hyphen: '\u2010',
            Iacute: '\xCD',
            iacute: '\xED',
            ic: '\u2063',
            Icirc: '\xCE',
            icirc: '\xEE',
            Icy: '\u0418',
            icy: '\u0438',
            Idot: '\u0130',
            IEcy: '\u0415',
            iecy: '\u0435',
            iexcl: '\xA1',
            iff: '\u21D4',
            ifr: '\u{1D526}',
            Ifr: '\u2111',
            Igrave: '\xCC',
            igrave: '\xEC',
            ii: '\u2148',
            iiiint: '\u2A0C',
            iiint: '\u222D',
            iinfin: '\u29DC',
            iiota: '\u2129',
            IJlig: '\u0132',
            ijlig: '\u0133',
            Imacr: '\u012A',
            imacr: '\u012B',
            image: '\u2111',
            ImaginaryI: '\u2148',
            imagline: '\u2110',
            imagpart: '\u2111',
            imath: '\u0131',
            Im: '\u2111',
            imof: '\u22B7',
            imped: '\u01B5',
            Implies: '\u21D2',
            incare: '\u2105',
            in: '\u2208',
            infin: '\u221E',
            infintie: '\u29DD',
            inodot: '\u0131',
            intcal: '\u22BA',
            int: '\u222B',
            Int: '\u222C',
            integers: '\u2124',
            Integral: '\u222B',
            intercal: '\u22BA',
            Intersection: '\u22C2',
            intlarhk: '\u2A17',
            intprod: '\u2A3C',
            InvisibleComma: '\u2063',
            InvisibleTimes: '\u2062',
            IOcy: '\u0401',
            iocy: '\u0451',
            Iogon: '\u012E',
            iogon: '\u012F',
            Iopf: '\u{1D540}',
            iopf: '\u{1D55A}',
            Iota: '\u0399',
            iota: '\u03B9',
            iprod: '\u2A3C',
            iquest: '\xBF',
            iscr: '\u{1D4BE}',
            Iscr: '\u2110',
            isin: '\u2208',
            isindot: '\u22F5',
            isinE: '\u22F9',
            isins: '\u22F4',
            isinsv: '\u22F3',
            isinv: '\u2208',
            it: '\u2062',
            Itilde: '\u0128',
            itilde: '\u0129',
            Iukcy: '\u0406',
            iukcy: '\u0456',
            Iuml: '\xCF',
            iuml: '\xEF',
            Jcirc: '\u0134',
            jcirc: '\u0135',
            Jcy: '\u0419',
            jcy: '\u0439',
            Jfr: '\u{1D50D}',
            jfr: '\u{1D527}',
            jmath: '\u0237',
            Jopf: '\u{1D541}',
            jopf: '\u{1D55B}',
            Jscr: '\u{1D4A5}',
            jscr: '\u{1D4BF}',
            Jsercy: '\u0408',
            jsercy: '\u0458',
            Jukcy: '\u0404',
            jukcy: '\u0454',
            Kappa: '\u039A',
            kappa: '\u03BA',
            kappav: '\u03F0',
            Kcedil: '\u0136',
            kcedil: '\u0137',
            Kcy: '\u041A',
            kcy: '\u043A',
            Kfr: '\u{1D50E}',
            kfr: '\u{1D528}',
            kgreen: '\u0138',
            KHcy: '\u0425',
            khcy: '\u0445',
            KJcy: '\u040C',
            kjcy: '\u045C',
            Kopf: '\u{1D542}',
            kopf: '\u{1D55C}',
            Kscr: '\u{1D4A6}',
            kscr: '\u{1D4C0}',
            lAarr: '\u21DA',
            Lacute: '\u0139',
            lacute: '\u013A',
            laemptyv: '\u29B4',
            lagran: '\u2112',
            Lambda: '\u039B',
            lambda: '\u03BB',
            lang: '\u27E8',
            Lang: '\u27EA',
            langd: '\u2991',
            langle: '\u27E8',
            lap: '\u2A85',
            Laplacetrf: '\u2112',
            laquo: '\xAB',
            larrb: '\u21E4',
            larrbfs: '\u291F',
            larr: '\u2190',
            Larr: '\u219E',
            lArr: '\u21D0',
            larrfs: '\u291D',
            larrhk: '\u21A9',
            larrlp: '\u21AB',
            larrpl: '\u2939',
            larrsim: '\u2973',
            larrtl: '\u21A2',
            latail: '\u2919',
            lAtail: '\u291B',
            lat: '\u2AAB',
            late: '\u2AAD',
            lates: '\u2AAD\uFE00',
            lbarr: '\u290C',
            lBarr: '\u290E',
            lbbrk: '\u2772',
            lbrace: '{',
            lbrack: '[',
            lbrke: '\u298B',
            lbrksld: '\u298F',
            lbrkslu: '\u298D',
            Lcaron: '\u013D',
            lcaron: '\u013E',
            Lcedil: '\u013B',
            lcedil: '\u013C',
            lceil: '\u2308',
            lcub: '{',
            Lcy: '\u041B',
            lcy: '\u043B',
            ldca: '\u2936',
            ldquo: '\u201C',
            ldquor: '\u201E',
            ldrdhar: '\u2967',
            ldrushar: '\u294B',
            ldsh: '\u21B2',
            le: '\u2264',
            lE: '\u2266',
            LeftAngleBracket: '\u27E8',
            LeftArrowBar: '\u21E4',
            leftarrow: '\u2190',
            LeftArrow: '\u2190',
            Leftarrow: '\u21D0',
            LeftArrowRightArrow: '\u21C6',
            leftarrowtail: '\u21A2',
            LeftCeiling: '\u2308',
            LeftDoubleBracket: '\u27E6',
            LeftDownTeeVector: '\u2961',
            LeftDownVectorBar: '\u2959',
            LeftDownVector: '\u21C3',
            LeftFloor: '\u230A',
            leftharpoondown: '\u21BD',
            leftharpoonup: '\u21BC',
            leftleftarrows: '\u21C7',
            leftrightarrow: '\u2194',
            LeftRightArrow: '\u2194',
            Leftrightarrow: '\u21D4',
            leftrightarrows: '\u21C6',
            leftrightharpoons: '\u21CB',
            leftrightsquigarrow: '\u21AD',
            LeftRightVector: '\u294E',
            LeftTeeArrow: '\u21A4',
            LeftTee: '\u22A3',
            LeftTeeVector: '\u295A',
            leftthreetimes: '\u22CB',
            LeftTriangleBar: '\u29CF',
            LeftTriangle: '\u22B2',
            LeftTriangleEqual: '\u22B4',
            LeftUpDownVector: '\u2951',
            LeftUpTeeVector: '\u2960',
            LeftUpVectorBar: '\u2958',
            LeftUpVector: '\u21BF',
            LeftVectorBar: '\u2952',
            LeftVector: '\u21BC',
            lEg: '\u2A8B',
            leg: '\u22DA',
            leq: '\u2264',
            leqq: '\u2266',
            leqslant: '\u2A7D',
            lescc: '\u2AA8',
            les: '\u2A7D',
            lesdot: '\u2A7F',
            lesdoto: '\u2A81',
            lesdotor: '\u2A83',
            lesg: '\u22DA\uFE00',
            lesges: '\u2A93',
            lessapprox: '\u2A85',
            lessdot: '\u22D6',
            lesseqgtr: '\u22DA',
            lesseqqgtr: '\u2A8B',
            LessEqualGreater: '\u22DA',
            LessFullEqual: '\u2266',
            LessGreater: '\u2276',
            lessgtr: '\u2276',
            LessLess: '\u2AA1',
            lesssim: '\u2272',
            LessSlantEqual: '\u2A7D',
            LessTilde: '\u2272',
            lfisht: '\u297C',
            lfloor: '\u230A',
            Lfr: '\u{1D50F}',
            lfr: '\u{1D529}',
            lg: '\u2276',
            lgE: '\u2A91',
            lHar: '\u2962',
            lhard: '\u21BD',
            lharu: '\u21BC',
            lharul: '\u296A',
            lhblk: '\u2584',
            LJcy: '\u0409',
            ljcy: '\u0459',
            llarr: '\u21C7',
            ll: '\u226A',
            Ll: '\u22D8',
            llcorner: '\u231E',
            Lleftarrow: '\u21DA',
            llhard: '\u296B',
            lltri: '\u25FA',
            Lmidot: '\u013F',
            lmidot: '\u0140',
            lmoustache: '\u23B0',
            lmoust: '\u23B0',
            lnap: '\u2A89',
            lnapprox: '\u2A89',
            lne: '\u2A87',
            lnE: '\u2268',
            lneq: '\u2A87',
            lneqq: '\u2268',
            lnsim: '\u22E6',
            loang: '\u27EC',
            loarr: '\u21FD',
            lobrk: '\u27E6',
            longleftarrow: '\u27F5',
            LongLeftArrow: '\u27F5',
            Longleftarrow: '\u27F8',
            longleftrightarrow: '\u27F7',
            LongLeftRightArrow: '\u27F7',
            Longleftrightarrow: '\u27FA',
            longmapsto: '\u27FC',
            longrightarrow: '\u27F6',
            LongRightArrow: '\u27F6',
            Longrightarrow: '\u27F9',
            looparrowleft: '\u21AB',
            looparrowright: '\u21AC',
            lopar: '\u2985',
            Lopf: '\u{1D543}',
            lopf: '\u{1D55D}',
            loplus: '\u2A2D',
            lotimes: '\u2A34',
            lowast: '\u2217',
            lowbar: '_',
            LowerLeftArrow: '\u2199',
            LowerRightArrow: '\u2198',
            loz: '\u25CA',
            lozenge: '\u25CA',
            lozf: '\u29EB',
            lpar: '(',
            lparlt: '\u2993',
            lrarr: '\u21C6',
            lrcorner: '\u231F',
            lrhar: '\u21CB',
            lrhard: '\u296D',
            lrm: '\u200E',
            lrtri: '\u22BF',
            lsaquo: '\u2039',
            lscr: '\u{1D4C1}',
            Lscr: '\u2112',
            lsh: '\u21B0',
            Lsh: '\u21B0',
            lsim: '\u2272',
            lsime: '\u2A8D',
            lsimg: '\u2A8F',
            lsqb: '[',
            lsquo: '\u2018',
            lsquor: '\u201A',
            Lstrok: '\u0141',
            lstrok: '\u0142',
            ltcc: '\u2AA6',
            ltcir: '\u2A79',
            lt: '<',
            LT: '<',
            Lt: '\u226A',
            ltdot: '\u22D6',
            lthree: '\u22CB',
            ltimes: '\u22C9',
            ltlarr: '\u2976',
            ltquest: '\u2A7B',
            ltri: '\u25C3',
            ltrie: '\u22B4',
            ltrif: '\u25C2',
            ltrPar: '\u2996',
            lurdshar: '\u294A',
            luruhar: '\u2966',
            lvertneqq: '\u2268\uFE00',
            lvnE: '\u2268\uFE00',
            macr: '\xAF',
            male: '\u2642',
            malt: '\u2720',
            maltese: '\u2720',
            Map: '\u2905',
            map: '\u21A6',
            mapsto: '\u21A6',
            mapstodown: '\u21A7',
            mapstoleft: '\u21A4',
            mapstoup: '\u21A5',
            marker: '\u25AE',
            mcomma: '\u2A29',
            Mcy: '\u041C',
            mcy: '\u043C',
            mdash: '\u2014',
            mDDot: '\u223A',
            measuredangle: '\u2221',
            MediumSpace: '\u205F',
            Mellintrf: '\u2133',
            Mfr: '\u{1D510}',
            mfr: '\u{1D52A}',
            mho: '\u2127',
            micro: '\xB5',
            midast: '*',
            midcir: '\u2AF0',
            mid: '\u2223',
            middot: '\xB7',
            minusb: '\u229F',
            minus: '\u2212',
            minusd: '\u2238',
            minusdu: '\u2A2A',
            MinusPlus: '\u2213',
            mlcp: '\u2ADB',
            mldr: '\u2026',
            mnplus: '\u2213',
            models: '\u22A7',
            Mopf: '\u{1D544}',
            mopf: '\u{1D55E}',
            mp: '\u2213',
            mscr: '\u{1D4C2}',
            Mscr: '\u2133',
            mstpos: '\u223E',
            Mu: '\u039C',
            mu: '\u03BC',
            multimap: '\u22B8',
            mumap: '\u22B8',
            nabla: '\u2207',
            Nacute: '\u0143',
            nacute: '\u0144',
            nang: '\u2220\u20D2',
            nap: '\u2249',
            napE: '\u2A70\u0338',
            napid: '\u224B\u0338',
            napos: '\u0149',
            napprox: '\u2249',
            natural: '\u266E',
            naturals: '\u2115',
            natur: '\u266E',
            nbsp: '\xA0',
            nbump: '\u224E\u0338',
            nbumpe: '\u224F\u0338',
            ncap: '\u2A43',
            Ncaron: '\u0147',
            ncaron: '\u0148',
            Ncedil: '\u0145',
            ncedil: '\u0146',
            ncong: '\u2247',
            ncongdot: '\u2A6D\u0338',
            ncup: '\u2A42',
            Ncy: '\u041D',
            ncy: '\u043D',
            ndash: '\u2013',
            nearhk: '\u2924',
            nearr: '\u2197',
            neArr: '\u21D7',
            nearrow: '\u2197',
            ne: '\u2260',
            nedot: '\u2250\u0338',
            NegativeMediumSpace: '\u200B',
            NegativeThickSpace: '\u200B',
            NegativeThinSpace: '\u200B',
            NegativeVeryThinSpace: '\u200B',
            nequiv: '\u2262',
            nesear: '\u2928',
            nesim: '\u2242\u0338',
            NestedGreaterGreater: '\u226B',
            NestedLessLess: '\u226A',
            NewLine: `
`,
            nexist: '\u2204',
            nexists: '\u2204',
            Nfr: '\u{1D511}',
            nfr: '\u{1D52B}',
            ngE: '\u2267\u0338',
            nge: '\u2271',
            ngeq: '\u2271',
            ngeqq: '\u2267\u0338',
            ngeqslant: '\u2A7E\u0338',
            nges: '\u2A7E\u0338',
            nGg: '\u22D9\u0338',
            ngsim: '\u2275',
            nGt: '\u226B\u20D2',
            ngt: '\u226F',
            ngtr: '\u226F',
            nGtv: '\u226B\u0338',
            nharr: '\u21AE',
            nhArr: '\u21CE',
            nhpar: '\u2AF2',
            ni: '\u220B',
            nis: '\u22FC',
            nisd: '\u22FA',
            niv: '\u220B',
            NJcy: '\u040A',
            njcy: '\u045A',
            nlarr: '\u219A',
            nlArr: '\u21CD',
            nldr: '\u2025',
            nlE: '\u2266\u0338',
            nle: '\u2270',
            nleftarrow: '\u219A',
            nLeftarrow: '\u21CD',
            nleftrightarrow: '\u21AE',
            nLeftrightarrow: '\u21CE',
            nleq: '\u2270',
            nleqq: '\u2266\u0338',
            nleqslant: '\u2A7D\u0338',
            nles: '\u2A7D\u0338',
            nless: '\u226E',
            nLl: '\u22D8\u0338',
            nlsim: '\u2274',
            nLt: '\u226A\u20D2',
            nlt: '\u226E',
            nltri: '\u22EA',
            nltrie: '\u22EC',
            nLtv: '\u226A\u0338',
            nmid: '\u2224',
            NoBreak: '\u2060',
            NonBreakingSpace: '\xA0',
            nopf: '\u{1D55F}',
            Nopf: '\u2115',
            Not: '\u2AEC',
            not: '\xAC',
            NotCongruent: '\u2262',
            NotCupCap: '\u226D',
            NotDoubleVerticalBar: '\u2226',
            NotElement: '\u2209',
            NotEqual: '\u2260',
            NotEqualTilde: '\u2242\u0338',
            NotExists: '\u2204',
            NotGreater: '\u226F',
            NotGreaterEqual: '\u2271',
            NotGreaterFullEqual: '\u2267\u0338',
            NotGreaterGreater: '\u226B\u0338',
            NotGreaterLess: '\u2279',
            NotGreaterSlantEqual: '\u2A7E\u0338',
            NotGreaterTilde: '\u2275',
            NotHumpDownHump: '\u224E\u0338',
            NotHumpEqual: '\u224F\u0338',
            notin: '\u2209',
            notindot: '\u22F5\u0338',
            notinE: '\u22F9\u0338',
            notinva: '\u2209',
            notinvb: '\u22F7',
            notinvc: '\u22F6',
            NotLeftTriangleBar: '\u29CF\u0338',
            NotLeftTriangle: '\u22EA',
            NotLeftTriangleEqual: '\u22EC',
            NotLess: '\u226E',
            NotLessEqual: '\u2270',
            NotLessGreater: '\u2278',
            NotLessLess: '\u226A\u0338',
            NotLessSlantEqual: '\u2A7D\u0338',
            NotLessTilde: '\u2274',
            NotNestedGreaterGreater: '\u2AA2\u0338',
            NotNestedLessLess: '\u2AA1\u0338',
            notni: '\u220C',
            notniva: '\u220C',
            notnivb: '\u22FE',
            notnivc: '\u22FD',
            NotPrecedes: '\u2280',
            NotPrecedesEqual: '\u2AAF\u0338',
            NotPrecedesSlantEqual: '\u22E0',
            NotReverseElement: '\u220C',
            NotRightTriangleBar: '\u29D0\u0338',
            NotRightTriangle: '\u22EB',
            NotRightTriangleEqual: '\u22ED',
            NotSquareSubset: '\u228F\u0338',
            NotSquareSubsetEqual: '\u22E2',
            NotSquareSuperset: '\u2290\u0338',
            NotSquareSupersetEqual: '\u22E3',
            NotSubset: '\u2282\u20D2',
            NotSubsetEqual: '\u2288',
            NotSucceeds: '\u2281',
            NotSucceedsEqual: '\u2AB0\u0338',
            NotSucceedsSlantEqual: '\u22E1',
            NotSucceedsTilde: '\u227F\u0338',
            NotSuperset: '\u2283\u20D2',
            NotSupersetEqual: '\u2289',
            NotTilde: '\u2241',
            NotTildeEqual: '\u2244',
            NotTildeFullEqual: '\u2247',
            NotTildeTilde: '\u2249',
            NotVerticalBar: '\u2224',
            nparallel: '\u2226',
            npar: '\u2226',
            nparsl: '\u2AFD\u20E5',
            npart: '\u2202\u0338',
            npolint: '\u2A14',
            npr: '\u2280',
            nprcue: '\u22E0',
            nprec: '\u2280',
            npreceq: '\u2AAF\u0338',
            npre: '\u2AAF\u0338',
            nrarrc: '\u2933\u0338',
            nrarr: '\u219B',
            nrArr: '\u21CF',
            nrarrw: '\u219D\u0338',
            nrightarrow: '\u219B',
            nRightarrow: '\u21CF',
            nrtri: '\u22EB',
            nrtrie: '\u22ED',
            nsc: '\u2281',
            nsccue: '\u22E1',
            nsce: '\u2AB0\u0338',
            Nscr: '\u{1D4A9}',
            nscr: '\u{1D4C3}',
            nshortmid: '\u2224',
            nshortparallel: '\u2226',
            nsim: '\u2241',
            nsime: '\u2244',
            nsimeq: '\u2244',
            nsmid: '\u2224',
            nspar: '\u2226',
            nsqsube: '\u22E2',
            nsqsupe: '\u22E3',
            nsub: '\u2284',
            nsubE: '\u2AC5\u0338',
            nsube: '\u2288',
            nsubset: '\u2282\u20D2',
            nsubseteq: '\u2288',
            nsubseteqq: '\u2AC5\u0338',
            nsucc: '\u2281',
            nsucceq: '\u2AB0\u0338',
            nsup: '\u2285',
            nsupE: '\u2AC6\u0338',
            nsupe: '\u2289',
            nsupset: '\u2283\u20D2',
            nsupseteq: '\u2289',
            nsupseteqq: '\u2AC6\u0338',
            ntgl: '\u2279',
            Ntilde: '\xD1',
            ntilde: '\xF1',
            ntlg: '\u2278',
            ntriangleleft: '\u22EA',
            ntrianglelefteq: '\u22EC',
            ntriangleright: '\u22EB',
            ntrianglerighteq: '\u22ED',
            Nu: '\u039D',
            nu: '\u03BD',
            num: '#',
            numero: '\u2116',
            numsp: '\u2007',
            nvap: '\u224D\u20D2',
            nvdash: '\u22AC',
            nvDash: '\u22AD',
            nVdash: '\u22AE',
            nVDash: '\u22AF',
            nvge: '\u2265\u20D2',
            nvgt: '>\u20D2',
            nvHarr: '\u2904',
            nvinfin: '\u29DE',
            nvlArr: '\u2902',
            nvle: '\u2264\u20D2',
            nvlt: '<\u20D2',
            nvltrie: '\u22B4\u20D2',
            nvrArr: '\u2903',
            nvrtrie: '\u22B5\u20D2',
            nvsim: '\u223C\u20D2',
            nwarhk: '\u2923',
            nwarr: '\u2196',
            nwArr: '\u21D6',
            nwarrow: '\u2196',
            nwnear: '\u2927',
            Oacute: '\xD3',
            oacute: '\xF3',
            oast: '\u229B',
            Ocirc: '\xD4',
            ocirc: '\xF4',
            ocir: '\u229A',
            Ocy: '\u041E',
            ocy: '\u043E',
            odash: '\u229D',
            Odblac: '\u0150',
            odblac: '\u0151',
            odiv: '\u2A38',
            odot: '\u2299',
            odsold: '\u29BC',
            OElig: '\u0152',
            oelig: '\u0153',
            ofcir: '\u29BF',
            Ofr: '\u{1D512}',
            ofr: '\u{1D52C}',
            ogon: '\u02DB',
            Ograve: '\xD2',
            ograve: '\xF2',
            ogt: '\u29C1',
            ohbar: '\u29B5',
            ohm: '\u03A9',
            oint: '\u222E',
            olarr: '\u21BA',
            olcir: '\u29BE',
            olcross: '\u29BB',
            oline: '\u203E',
            olt: '\u29C0',
            Omacr: '\u014C',
            omacr: '\u014D',
            Omega: '\u03A9',
            omega: '\u03C9',
            Omicron: '\u039F',
            omicron: '\u03BF',
            omid: '\u29B6',
            ominus: '\u2296',
            Oopf: '\u{1D546}',
            oopf: '\u{1D560}',
            opar: '\u29B7',
            OpenCurlyDoubleQuote: '\u201C',
            OpenCurlyQuote: '\u2018',
            operp: '\u29B9',
            oplus: '\u2295',
            orarr: '\u21BB',
            Or: '\u2A54',
            or: '\u2228',
            ord: '\u2A5D',
            order: '\u2134',
            orderof: '\u2134',
            ordf: '\xAA',
            ordm: '\xBA',
            origof: '\u22B6',
            oror: '\u2A56',
            orslope: '\u2A57',
            orv: '\u2A5B',
            oS: '\u24C8',
            Oscr: '\u{1D4AA}',
            oscr: '\u2134',
            Oslash: '\xD8',
            oslash: '\xF8',
            osol: '\u2298',
            Otilde: '\xD5',
            otilde: '\xF5',
            otimesas: '\u2A36',
            Otimes: '\u2A37',
            otimes: '\u2297',
            Ouml: '\xD6',
            ouml: '\xF6',
            ovbar: '\u233D',
            OverBar: '\u203E',
            OverBrace: '\u23DE',
            OverBracket: '\u23B4',
            OverParenthesis: '\u23DC',
            para: '\xB6',
            parallel: '\u2225',
            par: '\u2225',
            parsim: '\u2AF3',
            parsl: '\u2AFD',
            part: '\u2202',
            PartialD: '\u2202',
            Pcy: '\u041F',
            pcy: '\u043F',
            percnt: '%',
            period: '.',
            permil: '\u2030',
            perp: '\u22A5',
            pertenk: '\u2031',
            Pfr: '\u{1D513}',
            pfr: '\u{1D52D}',
            Phi: '\u03A6',
            phi: '\u03C6',
            phiv: '\u03D5',
            phmmat: '\u2133',
            phone: '\u260E',
            Pi: '\u03A0',
            pi: '\u03C0',
            pitchfork: '\u22D4',
            piv: '\u03D6',
            planck: '\u210F',
            planckh: '\u210E',
            plankv: '\u210F',
            plusacir: '\u2A23',
            plusb: '\u229E',
            pluscir: '\u2A22',
            plus: '+',
            plusdo: '\u2214',
            plusdu: '\u2A25',
            pluse: '\u2A72',
            PlusMinus: '\xB1',
            plusmn: '\xB1',
            plussim: '\u2A26',
            plustwo: '\u2A27',
            pm: '\xB1',
            Poincareplane: '\u210C',
            pointint: '\u2A15',
            popf: '\u{1D561}',
            Popf: '\u2119',
            pound: '\xA3',
            prap: '\u2AB7',
            Pr: '\u2ABB',
            pr: '\u227A',
            prcue: '\u227C',
            precapprox: '\u2AB7',
            prec: '\u227A',
            preccurlyeq: '\u227C',
            Precedes: '\u227A',
            PrecedesEqual: '\u2AAF',
            PrecedesSlantEqual: '\u227C',
            PrecedesTilde: '\u227E',
            preceq: '\u2AAF',
            precnapprox: '\u2AB9',
            precneqq: '\u2AB5',
            precnsim: '\u22E8',
            pre: '\u2AAF',
            prE: '\u2AB3',
            precsim: '\u227E',
            prime: '\u2032',
            Prime: '\u2033',
            primes: '\u2119',
            prnap: '\u2AB9',
            prnE: '\u2AB5',
            prnsim: '\u22E8',
            prod: '\u220F',
            Product: '\u220F',
            profalar: '\u232E',
            profline: '\u2312',
            profsurf: '\u2313',
            prop: '\u221D',
            Proportional: '\u221D',
            Proportion: '\u2237',
            propto: '\u221D',
            prsim: '\u227E',
            prurel: '\u22B0',
            Pscr: '\u{1D4AB}',
            pscr: '\u{1D4C5}',
            Psi: '\u03A8',
            psi: '\u03C8',
            puncsp: '\u2008',
            Qfr: '\u{1D514}',
            qfr: '\u{1D52E}',
            qint: '\u2A0C',
            qopf: '\u{1D562}',
            Qopf: '\u211A',
            qprime: '\u2057',
            Qscr: '\u{1D4AC}',
            qscr: '\u{1D4C6}',
            quaternions: '\u210D',
            quatint: '\u2A16',
            quest: '?',
            questeq: '\u225F',
            quot: '"',
            QUOT: '"',
            rAarr: '\u21DB',
            race: '\u223D\u0331',
            Racute: '\u0154',
            racute: '\u0155',
            radic: '\u221A',
            raemptyv: '\u29B3',
            rang: '\u27E9',
            Rang: '\u27EB',
            rangd: '\u2992',
            range: '\u29A5',
            rangle: '\u27E9',
            raquo: '\xBB',
            rarrap: '\u2975',
            rarrb: '\u21E5',
            rarrbfs: '\u2920',
            rarrc: '\u2933',
            rarr: '\u2192',
            Rarr: '\u21A0',
            rArr: '\u21D2',
            rarrfs: '\u291E',
            rarrhk: '\u21AA',
            rarrlp: '\u21AC',
            rarrpl: '\u2945',
            rarrsim: '\u2974',
            Rarrtl: '\u2916',
            rarrtl: '\u21A3',
            rarrw: '\u219D',
            ratail: '\u291A',
            rAtail: '\u291C',
            ratio: '\u2236',
            rationals: '\u211A',
            rbarr: '\u290D',
            rBarr: '\u290F',
            RBarr: '\u2910',
            rbbrk: '\u2773',
            rbrace: '}',
            rbrack: ']',
            rbrke: '\u298C',
            rbrksld: '\u298E',
            rbrkslu: '\u2990',
            Rcaron: '\u0158',
            rcaron: '\u0159',
            Rcedil: '\u0156',
            rcedil: '\u0157',
            rceil: '\u2309',
            rcub: '}',
            Rcy: '\u0420',
            rcy: '\u0440',
            rdca: '\u2937',
            rdldhar: '\u2969',
            rdquo: '\u201D',
            rdquor: '\u201D',
            rdsh: '\u21B3',
            real: '\u211C',
            realine: '\u211B',
            realpart: '\u211C',
            reals: '\u211D',
            Re: '\u211C',
            rect: '\u25AD',
            reg: '\xAE',
            REG: '\xAE',
            ReverseElement: '\u220B',
            ReverseEquilibrium: '\u21CB',
            ReverseUpEquilibrium: '\u296F',
            rfisht: '\u297D',
            rfloor: '\u230B',
            rfr: '\u{1D52F}',
            Rfr: '\u211C',
            rHar: '\u2964',
            rhard: '\u21C1',
            rharu: '\u21C0',
            rharul: '\u296C',
            Rho: '\u03A1',
            rho: '\u03C1',
            rhov: '\u03F1',
            RightAngleBracket: '\u27E9',
            RightArrowBar: '\u21E5',
            rightarrow: '\u2192',
            RightArrow: '\u2192',
            Rightarrow: '\u21D2',
            RightArrowLeftArrow: '\u21C4',
            rightarrowtail: '\u21A3',
            RightCeiling: '\u2309',
            RightDoubleBracket: '\u27E7',
            RightDownTeeVector: '\u295D',
            RightDownVectorBar: '\u2955',
            RightDownVector: '\u21C2',
            RightFloor: '\u230B',
            rightharpoondown: '\u21C1',
            rightharpoonup: '\u21C0',
            rightleftarrows: '\u21C4',
            rightleftharpoons: '\u21CC',
            rightrightarrows: '\u21C9',
            rightsquigarrow: '\u219D',
            RightTeeArrow: '\u21A6',
            RightTee: '\u22A2',
            RightTeeVector: '\u295B',
            rightthreetimes: '\u22CC',
            RightTriangleBar: '\u29D0',
            RightTriangle: '\u22B3',
            RightTriangleEqual: '\u22B5',
            RightUpDownVector: '\u294F',
            RightUpTeeVector: '\u295C',
            RightUpVectorBar: '\u2954',
            RightUpVector: '\u21BE',
            RightVectorBar: '\u2953',
            RightVector: '\u21C0',
            ring: '\u02DA',
            risingdotseq: '\u2253',
            rlarr: '\u21C4',
            rlhar: '\u21CC',
            rlm: '\u200F',
            rmoustache: '\u23B1',
            rmoust: '\u23B1',
            rnmid: '\u2AEE',
            roang: '\u27ED',
            roarr: '\u21FE',
            robrk: '\u27E7',
            ropar: '\u2986',
            ropf: '\u{1D563}',
            Ropf: '\u211D',
            roplus: '\u2A2E',
            rotimes: '\u2A35',
            RoundImplies: '\u2970',
            rpar: ')',
            rpargt: '\u2994',
            rppolint: '\u2A12',
            rrarr: '\u21C9',
            Rrightarrow: '\u21DB',
            rsaquo: '\u203A',
            rscr: '\u{1D4C7}',
            Rscr: '\u211B',
            rsh: '\u21B1',
            Rsh: '\u21B1',
            rsqb: ']',
            rsquo: '\u2019',
            rsquor: '\u2019',
            rthree: '\u22CC',
            rtimes: '\u22CA',
            rtri: '\u25B9',
            rtrie: '\u22B5',
            rtrif: '\u25B8',
            rtriltri: '\u29CE',
            RuleDelayed: '\u29F4',
            ruluhar: '\u2968',
            rx: '\u211E',
            Sacute: '\u015A',
            sacute: '\u015B',
            sbquo: '\u201A',
            scap: '\u2AB8',
            Scaron: '\u0160',
            scaron: '\u0161',
            Sc: '\u2ABC',
            sc: '\u227B',
            sccue: '\u227D',
            sce: '\u2AB0',
            scE: '\u2AB4',
            Scedil: '\u015E',
            scedil: '\u015F',
            Scirc: '\u015C',
            scirc: '\u015D',
            scnap: '\u2ABA',
            scnE: '\u2AB6',
            scnsim: '\u22E9',
            scpolint: '\u2A13',
            scsim: '\u227F',
            Scy: '\u0421',
            scy: '\u0441',
            sdotb: '\u22A1',
            sdot: '\u22C5',
            sdote: '\u2A66',
            searhk: '\u2925',
            searr: '\u2198',
            seArr: '\u21D8',
            searrow: '\u2198',
            sect: '\xA7',
            semi: ';',
            seswar: '\u2929',
            setminus: '\u2216',
            setmn: '\u2216',
            sext: '\u2736',
            Sfr: '\u{1D516}',
            sfr: '\u{1D530}',
            sfrown: '\u2322',
            sharp: '\u266F',
            SHCHcy: '\u0429',
            shchcy: '\u0449',
            SHcy: '\u0428',
            shcy: '\u0448',
            ShortDownArrow: '\u2193',
            ShortLeftArrow: '\u2190',
            shortmid: '\u2223',
            shortparallel: '\u2225',
            ShortRightArrow: '\u2192',
            ShortUpArrow: '\u2191',
            shy: '\xAD',
            Sigma: '\u03A3',
            sigma: '\u03C3',
            sigmaf: '\u03C2',
            sigmav: '\u03C2',
            sim: '\u223C',
            simdot: '\u2A6A',
            sime: '\u2243',
            simeq: '\u2243',
            simg: '\u2A9E',
            simgE: '\u2AA0',
            siml: '\u2A9D',
            simlE: '\u2A9F',
            simne: '\u2246',
            simplus: '\u2A24',
            simrarr: '\u2972',
            slarr: '\u2190',
            SmallCircle: '\u2218',
            smallsetminus: '\u2216',
            smashp: '\u2A33',
            smeparsl: '\u29E4',
            smid: '\u2223',
            smile: '\u2323',
            smt: '\u2AAA',
            smte: '\u2AAC',
            smtes: '\u2AAC\uFE00',
            SOFTcy: '\u042C',
            softcy: '\u044C',
            solbar: '\u233F',
            solb: '\u29C4',
            sol: '/',
            Sopf: '\u{1D54A}',
            sopf: '\u{1D564}',
            spades: '\u2660',
            spadesuit: '\u2660',
            spar: '\u2225',
            sqcap: '\u2293',
            sqcaps: '\u2293\uFE00',
            sqcup: '\u2294',
            sqcups: '\u2294\uFE00',
            Sqrt: '\u221A',
            sqsub: '\u228F',
            sqsube: '\u2291',
            sqsubset: '\u228F',
            sqsubseteq: '\u2291',
            sqsup: '\u2290',
            sqsupe: '\u2292',
            sqsupset: '\u2290',
            sqsupseteq: '\u2292',
            square: '\u25A1',
            Square: '\u25A1',
            SquareIntersection: '\u2293',
            SquareSubset: '\u228F',
            SquareSubsetEqual: '\u2291',
            SquareSuperset: '\u2290',
            SquareSupersetEqual: '\u2292',
            SquareUnion: '\u2294',
            squarf: '\u25AA',
            squ: '\u25A1',
            squf: '\u25AA',
            srarr: '\u2192',
            Sscr: '\u{1D4AE}',
            sscr: '\u{1D4C8}',
            ssetmn: '\u2216',
            ssmile: '\u2323',
            sstarf: '\u22C6',
            Star: '\u22C6',
            star: '\u2606',
            starf: '\u2605',
            straightepsilon: '\u03F5',
            straightphi: '\u03D5',
            strns: '\xAF',
            sub: '\u2282',
            Sub: '\u22D0',
            subdot: '\u2ABD',
            subE: '\u2AC5',
            sube: '\u2286',
            subedot: '\u2AC3',
            submult: '\u2AC1',
            subnE: '\u2ACB',
            subne: '\u228A',
            subplus: '\u2ABF',
            subrarr: '\u2979',
            subset: '\u2282',
            Subset: '\u22D0',
            subseteq: '\u2286',
            subseteqq: '\u2AC5',
            SubsetEqual: '\u2286',
            subsetneq: '\u228A',
            subsetneqq: '\u2ACB',
            subsim: '\u2AC7',
            subsub: '\u2AD5',
            subsup: '\u2AD3',
            succapprox: '\u2AB8',
            succ: '\u227B',
            succcurlyeq: '\u227D',
            Succeeds: '\u227B',
            SucceedsEqual: '\u2AB0',
            SucceedsSlantEqual: '\u227D',
            SucceedsTilde: '\u227F',
            succeq: '\u2AB0',
            succnapprox: '\u2ABA',
            succneqq: '\u2AB6',
            succnsim: '\u22E9',
            succsim: '\u227F',
            SuchThat: '\u220B',
            sum: '\u2211',
            Sum: '\u2211',
            sung: '\u266A',
            sup1: '\xB9',
            sup2: '\xB2',
            sup3: '\xB3',
            sup: '\u2283',
            Sup: '\u22D1',
            supdot: '\u2ABE',
            supdsub: '\u2AD8',
            supE: '\u2AC6',
            supe: '\u2287',
            supedot: '\u2AC4',
            Superset: '\u2283',
            SupersetEqual: '\u2287',
            suphsol: '\u27C9',
            suphsub: '\u2AD7',
            suplarr: '\u297B',
            supmult: '\u2AC2',
            supnE: '\u2ACC',
            supne: '\u228B',
            supplus: '\u2AC0',
            supset: '\u2283',
            Supset: '\u22D1',
            supseteq: '\u2287',
            supseteqq: '\u2AC6',
            supsetneq: '\u228B',
            supsetneqq: '\u2ACC',
            supsim: '\u2AC8',
            supsub: '\u2AD4',
            supsup: '\u2AD6',
            swarhk: '\u2926',
            swarr: '\u2199',
            swArr: '\u21D9',
            swarrow: '\u2199',
            swnwar: '\u292A',
            szlig: '\xDF',
            Tab: '	',
            target: '\u2316',
            Tau: '\u03A4',
            tau: '\u03C4',
            tbrk: '\u23B4',
            Tcaron: '\u0164',
            tcaron: '\u0165',
            Tcedil: '\u0162',
            tcedil: '\u0163',
            Tcy: '\u0422',
            tcy: '\u0442',
            tdot: '\u20DB',
            telrec: '\u2315',
            Tfr: '\u{1D517}',
            tfr: '\u{1D531}',
            there4: '\u2234',
            therefore: '\u2234',
            Therefore: '\u2234',
            Theta: '\u0398',
            theta: '\u03B8',
            thetasym: '\u03D1',
            thetav: '\u03D1',
            thickapprox: '\u2248',
            thicksim: '\u223C',
            ThickSpace: '\u205F\u200A',
            ThinSpace: '\u2009',
            thinsp: '\u2009',
            thkap: '\u2248',
            thksim: '\u223C',
            THORN: '\xDE',
            thorn: '\xFE',
            tilde: '\u02DC',
            Tilde: '\u223C',
            TildeEqual: '\u2243',
            TildeFullEqual: '\u2245',
            TildeTilde: '\u2248',
            timesbar: '\u2A31',
            timesb: '\u22A0',
            times: '\xD7',
            timesd: '\u2A30',
            tint: '\u222D',
            toea: '\u2928',
            topbot: '\u2336',
            topcir: '\u2AF1',
            top: '\u22A4',
            Topf: '\u{1D54B}',
            topf: '\u{1D565}',
            topfork: '\u2ADA',
            tosa: '\u2929',
            tprime: '\u2034',
            trade: '\u2122',
            TRADE: '\u2122',
            triangle: '\u25B5',
            triangledown: '\u25BF',
            triangleleft: '\u25C3',
            trianglelefteq: '\u22B4',
            triangleq: '\u225C',
            triangleright: '\u25B9',
            trianglerighteq: '\u22B5',
            tridot: '\u25EC',
            trie: '\u225C',
            triminus: '\u2A3A',
            TripleDot: '\u20DB',
            triplus: '\u2A39',
            trisb: '\u29CD',
            tritime: '\u2A3B',
            trpezium: '\u23E2',
            Tscr: '\u{1D4AF}',
            tscr: '\u{1D4C9}',
            TScy: '\u0426',
            tscy: '\u0446',
            TSHcy: '\u040B',
            tshcy: '\u045B',
            Tstrok: '\u0166',
            tstrok: '\u0167',
            twixt: '\u226C',
            twoheadleftarrow: '\u219E',
            twoheadrightarrow: '\u21A0',
            Uacute: '\xDA',
            uacute: '\xFA',
            uarr: '\u2191',
            Uarr: '\u219F',
            uArr: '\u21D1',
            Uarrocir: '\u2949',
            Ubrcy: '\u040E',
            ubrcy: '\u045E',
            Ubreve: '\u016C',
            ubreve: '\u016D',
            Ucirc: '\xDB',
            ucirc: '\xFB',
            Ucy: '\u0423',
            ucy: '\u0443',
            udarr: '\u21C5',
            Udblac: '\u0170',
            udblac: '\u0171',
            udhar: '\u296E',
            ufisht: '\u297E',
            Ufr: '\u{1D518}',
            ufr: '\u{1D532}',
            Ugrave: '\xD9',
            ugrave: '\xF9',
            uHar: '\u2963',
            uharl: '\u21BF',
            uharr: '\u21BE',
            uhblk: '\u2580',
            ulcorn: '\u231C',
            ulcorner: '\u231C',
            ulcrop: '\u230F',
            ultri: '\u25F8',
            Umacr: '\u016A',
            umacr: '\u016B',
            uml: '\xA8',
            UnderBar: '_',
            UnderBrace: '\u23DF',
            UnderBracket: '\u23B5',
            UnderParenthesis: '\u23DD',
            Union: '\u22C3',
            UnionPlus: '\u228E',
            Uogon: '\u0172',
            uogon: '\u0173',
            Uopf: '\u{1D54C}',
            uopf: '\u{1D566}',
            UpArrowBar: '\u2912',
            uparrow: '\u2191',
            UpArrow: '\u2191',
            Uparrow: '\u21D1',
            UpArrowDownArrow: '\u21C5',
            updownarrow: '\u2195',
            UpDownArrow: '\u2195',
            Updownarrow: '\u21D5',
            UpEquilibrium: '\u296E',
            upharpoonleft: '\u21BF',
            upharpoonright: '\u21BE',
            uplus: '\u228E',
            UpperLeftArrow: '\u2196',
            UpperRightArrow: '\u2197',
            upsi: '\u03C5',
            Upsi: '\u03D2',
            upsih: '\u03D2',
            Upsilon: '\u03A5',
            upsilon: '\u03C5',
            UpTeeArrow: '\u21A5',
            UpTee: '\u22A5',
            upuparrows: '\u21C8',
            urcorn: '\u231D',
            urcorner: '\u231D',
            urcrop: '\u230E',
            Uring: '\u016E',
            uring: '\u016F',
            urtri: '\u25F9',
            Uscr: '\u{1D4B0}',
            uscr: '\u{1D4CA}',
            utdot: '\u22F0',
            Utilde: '\u0168',
            utilde: '\u0169',
            utri: '\u25B5',
            utrif: '\u25B4',
            uuarr: '\u21C8',
            Uuml: '\xDC',
            uuml: '\xFC',
            uwangle: '\u29A7',
            vangrt: '\u299C',
            varepsilon: '\u03F5',
            varkappa: '\u03F0',
            varnothing: '\u2205',
            varphi: '\u03D5',
            varpi: '\u03D6',
            varpropto: '\u221D',
            varr: '\u2195',
            vArr: '\u21D5',
            varrho: '\u03F1',
            varsigma: '\u03C2',
            varsubsetneq: '\u228A\uFE00',
            varsubsetneqq: '\u2ACB\uFE00',
            varsupsetneq: '\u228B\uFE00',
            varsupsetneqq: '\u2ACC\uFE00',
            vartheta: '\u03D1',
            vartriangleleft: '\u22B2',
            vartriangleright: '\u22B3',
            vBar: '\u2AE8',
            Vbar: '\u2AEB',
            vBarv: '\u2AE9',
            Vcy: '\u0412',
            vcy: '\u0432',
            vdash: '\u22A2',
            vDash: '\u22A8',
            Vdash: '\u22A9',
            VDash: '\u22AB',
            Vdashl: '\u2AE6',
            veebar: '\u22BB',
            vee: '\u2228',
            Vee: '\u22C1',
            veeeq: '\u225A',
            vellip: '\u22EE',
            verbar: '|',
            Verbar: '\u2016',
            vert: '|',
            Vert: '\u2016',
            VerticalBar: '\u2223',
            VerticalLine: '|',
            VerticalSeparator: '\u2758',
            VerticalTilde: '\u2240',
            VeryThinSpace: '\u200A',
            Vfr: '\u{1D519}',
            vfr: '\u{1D533}',
            vltri: '\u22B2',
            vnsub: '\u2282\u20D2',
            vnsup: '\u2283\u20D2',
            Vopf: '\u{1D54D}',
            vopf: '\u{1D567}',
            vprop: '\u221D',
            vrtri: '\u22B3',
            Vscr: '\u{1D4B1}',
            vscr: '\u{1D4CB}',
            vsubnE: '\u2ACB\uFE00',
            vsubne: '\u228A\uFE00',
            vsupnE: '\u2ACC\uFE00',
            vsupne: '\u228B\uFE00',
            Vvdash: '\u22AA',
            vzigzag: '\u299A',
            Wcirc: '\u0174',
            wcirc: '\u0175',
            wedbar: '\u2A5F',
            wedge: '\u2227',
            Wedge: '\u22C0',
            wedgeq: '\u2259',
            weierp: '\u2118',
            Wfr: '\u{1D51A}',
            wfr: '\u{1D534}',
            Wopf: '\u{1D54E}',
            wopf: '\u{1D568}',
            wp: '\u2118',
            wr: '\u2240',
            wreath: '\u2240',
            Wscr: '\u{1D4B2}',
            wscr: '\u{1D4CC}',
            xcap: '\u22C2',
            xcirc: '\u25EF',
            xcup: '\u22C3',
            xdtri: '\u25BD',
            Xfr: '\u{1D51B}',
            xfr: '\u{1D535}',
            xharr: '\u27F7',
            xhArr: '\u27FA',
            Xi: '\u039E',
            xi: '\u03BE',
            xlarr: '\u27F5',
            xlArr: '\u27F8',
            xmap: '\u27FC',
            xnis: '\u22FB',
            xodot: '\u2A00',
            Xopf: '\u{1D54F}',
            xopf: '\u{1D569}',
            xoplus: '\u2A01',
            xotime: '\u2A02',
            xrarr: '\u27F6',
            xrArr: '\u27F9',
            Xscr: '\u{1D4B3}',
            xscr: '\u{1D4CD}',
            xsqcup: '\u2A06',
            xuplus: '\u2A04',
            xutri: '\u25B3',
            xvee: '\u22C1',
            xwedge: '\u22C0',
            Yacute: '\xDD',
            yacute: '\xFD',
            YAcy: '\u042F',
            yacy: '\u044F',
            Ycirc: '\u0176',
            ycirc: '\u0177',
            Ycy: '\u042B',
            ycy: '\u044B',
            yen: '\xA5',
            Yfr: '\u{1D51C}',
            yfr: '\u{1D536}',
            YIcy: '\u0407',
            yicy: '\u0457',
            Yopf: '\u{1D550}',
            yopf: '\u{1D56A}',
            Yscr: '\u{1D4B4}',
            yscr: '\u{1D4CE}',
            YUcy: '\u042E',
            yucy: '\u044E',
            yuml: '\xFF',
            Yuml: '\u0178',
            Zacute: '\u0179',
            zacute: '\u017A',
            Zcaron: '\u017D',
            zcaron: '\u017E',
            Zcy: '\u0417',
            zcy: '\u0437',
            Zdot: '\u017B',
            zdot: '\u017C',
            zeetrf: '\u2128',
            ZeroWidthSpace: '\u200B',
            Zeta: '\u0396',
            zeta: '\u03B6',
            zfr: '\u{1D537}',
            Zfr: '\u2128',
            ZHcy: '\u0416',
            zhcy: '\u0436',
            zigrarr: '\u21DD',
            zopf: '\u{1D56B}',
            Zopf: '\u2124',
            Zscr: '\u{1D4B5}',
            zscr: '\u{1D4CF}',
            zwj: '\u200D',
            zwnj: '\u200C',
          };
        },
      }),
      p_ = He({
        '../../node_modules/entities/lib/maps/legacy.json'(e, t) {
          t.exports = {
            Aacute: '\xC1',
            aacute: '\xE1',
            Acirc: '\xC2',
            acirc: '\xE2',
            acute: '\xB4',
            AElig: '\xC6',
            aelig: '\xE6',
            Agrave: '\xC0',
            agrave: '\xE0',
            amp: '&',
            AMP: '&',
            Aring: '\xC5',
            aring: '\xE5',
            Atilde: '\xC3',
            atilde: '\xE3',
            Auml: '\xC4',
            auml: '\xE4',
            brvbar: '\xA6',
            Ccedil: '\xC7',
            ccedil: '\xE7',
            cedil: '\xB8',
            cent: '\xA2',
            copy: '\xA9',
            COPY: '\xA9',
            curren: '\xA4',
            deg: '\xB0',
            divide: '\xF7',
            Eacute: '\xC9',
            eacute: '\xE9',
            Ecirc: '\xCA',
            ecirc: '\xEA',
            Egrave: '\xC8',
            egrave: '\xE8',
            ETH: '\xD0',
            eth: '\xF0',
            Euml: '\xCB',
            euml: '\xEB',
            frac12: '\xBD',
            frac14: '\xBC',
            frac34: '\xBE',
            gt: '>',
            GT: '>',
            Iacute: '\xCD',
            iacute: '\xED',
            Icirc: '\xCE',
            icirc: '\xEE',
            iexcl: '\xA1',
            Igrave: '\xCC',
            igrave: '\xEC',
            iquest: '\xBF',
            Iuml: '\xCF',
            iuml: '\xEF',
            laquo: '\xAB',
            lt: '<',
            LT: '<',
            macr: '\xAF',
            micro: '\xB5',
            middot: '\xB7',
            nbsp: '\xA0',
            not: '\xAC',
            Ntilde: '\xD1',
            ntilde: '\xF1',
            Oacute: '\xD3',
            oacute: '\xF3',
            Ocirc: '\xD4',
            ocirc: '\xF4',
            Ograve: '\xD2',
            ograve: '\xF2',
            ordf: '\xAA',
            ordm: '\xBA',
            Oslash: '\xD8',
            oslash: '\xF8',
            Otilde: '\xD5',
            otilde: '\xF5',
            Ouml: '\xD6',
            ouml: '\xF6',
            para: '\xB6',
            plusmn: '\xB1',
            pound: '\xA3',
            quot: '"',
            QUOT: '"',
            raquo: '\xBB',
            reg: '\xAE',
            REG: '\xAE',
            sect: '\xA7',
            shy: '\xAD',
            sup1: '\xB9',
            sup2: '\xB2',
            sup3: '\xB3',
            szlig: '\xDF',
            THORN: '\xDE',
            thorn: '\xFE',
            times: '\xD7',
            Uacute: '\xDA',
            uacute: '\xFA',
            Ucirc: '\xDB',
            ucirc: '\xFB',
            Ugrave: '\xD9',
            ugrave: '\xF9',
            uml: '\xA8',
            Uuml: '\xDC',
            uuml: '\xFC',
            Yacute: '\xDD',
            yacute: '\xFD',
            yen: '\xA5',
            yuml: '\xFF',
          };
        },
      }),
      bm = He({
        '../../node_modules/entities/lib/maps/xml.json'(e, t) {
          t.exports = { amp: '&', apos: "'", gt: '>', lt: '<', quot: '"' };
        },
      }),
      f_ = He({
        '../../node_modules/entities/lib/maps/decode.json'(e, t) {
          t.exports = {
            0: 65533,
            128: 8364,
            130: 8218,
            131: 402,
            132: 8222,
            133: 8230,
            134: 8224,
            135: 8225,
            136: 710,
            137: 8240,
            138: 352,
            139: 8249,
            140: 338,
            142: 381,
            145: 8216,
            146: 8217,
            147: 8220,
            148: 8221,
            149: 8226,
            150: 8211,
            151: 8212,
            152: 732,
            153: 8482,
            154: 353,
            155: 8250,
            156: 339,
            158: 382,
            159: 376,
          };
        },
      }),
      h_ = He({
        '../../node_modules/entities/lib/decode_codepoint.js'(e) {
          var t =
            (e && e.__importDefault) ||
            function (o) {
              return o && o.__esModule ? o : { default: o };
            };
          Object.defineProperty(e, '__esModule', { value: !0 });
          var r = t(f_()),
            n =
              String.fromCodePoint ||
              function (o) {
                var i = '';
                return (
                  o > 65535 &&
                    ((o -= 65536),
                    (i += String.fromCharCode(((o >>> 10) & 1023) | 55296)),
                    (o = 56320 | (o & 1023))),
                  (i += String.fromCharCode(o)),
                  i
                );
              };
          function a(o) {
            return (o >= 55296 && o <= 57343) || o > 1114111
              ? '\uFFFD'
              : (o in r.default && (o = r.default[o]), n(o));
          }
          e.default = a;
        },
      }),
      mm = He({
        '../../node_modules/entities/lib/decode.js'(e) {
          var t =
            (e && e.__importDefault) ||
            function (y) {
              return y && y.__esModule ? y : { default: y };
            };
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.decodeHTML = e.decodeHTMLStrict = e.decodeXML = void 0);
          var r = t(ym()),
            n = t(p_()),
            a = t(bm()),
            o = t(h_()),
            i = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
          (e.decodeXML = u(a.default)), (e.decodeHTMLStrict = u(r.default));
          function u(y) {
            var A = p(y);
            return function (m) {
              return String(m).replace(i, A);
            };
          }
          var s = function (y, A) {
            return y < A ? 1 : -1;
          };
          e.decodeHTML = (function () {
            for (
              var y = Object.keys(n.default).sort(s),
                A = Object.keys(r.default).sort(s),
                m = 0,
                h = 0;
              m < A.length;
              m++
            )
              y[h] === A[m] ? ((A[m] += ';?'), h++) : (A[m] += ';');
            var E = new RegExp(
                '&(?:' + A.join('|') + '|#[xX][\\da-fA-F]+;?|#\\d+;?)',
                'g'
              ),
              b = p(r.default);
            function x(F) {
              return F.substr(-1) !== ';' && (F += ';'), b(F);
            }
            return function (F) {
              return String(F).replace(E, x);
            };
          })();
          function p(y) {
            return function (A) {
              if (A.charAt(1) === '#') {
                var m = A.charAt(2);
                return m === 'X' || m === 'x'
                  ? o.default(parseInt(A.substr(3), 16))
                  : o.default(parseInt(A.substr(2), 10));
              }
              return y[A.slice(1, -1)] || A;
            };
          }
        },
      }),
      gm = He({
        '../../node_modules/entities/lib/encode.js'(e) {
          var t =
            (e && e.__importDefault) ||
            function (B) {
              return B && B.__esModule ? B : { default: B };
            };
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.escapeUTF8 =
              e.escape =
              e.encodeNonAsciiHTML =
              e.encodeHTML =
              e.encodeXML =
                void 0);
          var r = t(bm()),
            n = s(r.default),
            a = p(n);
          e.encodeXML = F(n);
          var o = t(ym()),
            i = s(o.default),
            u = p(i);
          (e.encodeHTML = h(i, u)), (e.encodeNonAsciiHTML = F(i));
          function s(B) {
            return Object.keys(B)
              .sort()
              .reduce(function (I, q) {
                return (I[B[q]] = '&' + q + ';'), I;
              }, {});
          }
          function p(B) {
            for (
              var I = [], q = [], w = 0, N = Object.keys(B);
              w < N.length;
              w++
            ) {
              var k = N[w];
              k.length === 1 ? I.push('\\' + k) : q.push(k);
            }
            I.sort();
            for (var z = 0; z < I.length - 1; z++) {
              for (
                var V = z;
                V < I.length - 1 &&
                I[V].charCodeAt(1) + 1 === I[V + 1].charCodeAt(1);

              )
                V += 1;
              var U = 1 + V - z;
              U < 3 || I.splice(z, U, I[z] + '-' + I[V]);
            }
            return (
              q.unshift('[' + I.join('') + ']'), new RegExp(q.join('|'), 'g')
            );
          }
          var y =
              /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
            A =
              String.prototype.codePointAt != null
                ? function (B) {
                    return B.codePointAt(0);
                  }
                : function (B) {
                    return (
                      (B.charCodeAt(0) - 55296) * 1024 +
                      B.charCodeAt(1) -
                      56320 +
                      65536
                    );
                  };
          function m(B) {
            return (
              '&#x' +
              (B.length > 1 ? A(B) : B.charCodeAt(0))
                .toString(16)
                .toUpperCase() +
              ';'
            );
          }
          function h(B, I) {
            return function (q) {
              return q
                .replace(I, function (w) {
                  return B[w];
                })
                .replace(y, m);
            };
          }
          var E = new RegExp(a.source + '|' + y.source, 'g');
          function b(B) {
            return B.replace(E, m);
          }
          e.escape = b;
          function x(B) {
            return B.replace(a, m);
          }
          e.escapeUTF8 = x;
          function F(B) {
            return function (I) {
              return I.replace(E, function (q) {
                return B[q] || m(q);
              });
            };
          }
        },
      }),
      m_ = He({
        '../../node_modules/entities/lib/index.js'(e) {
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.decodeXMLStrict =
              e.decodeHTML5Strict =
              e.decodeHTML4Strict =
              e.decodeHTML5 =
              e.decodeHTML4 =
              e.decodeHTMLStrict =
              e.decodeHTML =
              e.decodeXML =
              e.encodeHTML5 =
              e.encodeHTML4 =
              e.escapeUTF8 =
              e.escape =
              e.encodeNonAsciiHTML =
              e.encodeHTML =
              e.encodeXML =
              e.encode =
              e.decodeStrict =
              e.decode =
                void 0);
          var t = mm(),
            r = gm();
          function n(s, p) {
            return (!p || p <= 0 ? t.decodeXML : t.decodeHTML)(s);
          }
          e.decode = n;
          function a(s, p) {
            return (!p || p <= 0 ? t.decodeXML : t.decodeHTMLStrict)(s);
          }
          e.decodeStrict = a;
          function o(s, p) {
            return (!p || p <= 0 ? r.encodeXML : r.encodeHTML)(s);
          }
          e.encode = o;
          var i = gm();
          Object.defineProperty(e, 'encodeXML', {
            enumerable: !0,
            get: function () {
              return i.encodeXML;
            },
          }),
            Object.defineProperty(e, 'encodeHTML', {
              enumerable: !0,
              get: function () {
                return i.encodeHTML;
              },
            }),
            Object.defineProperty(e, 'encodeNonAsciiHTML', {
              enumerable: !0,
              get: function () {
                return i.encodeNonAsciiHTML;
              },
            }),
            Object.defineProperty(e, 'escape', {
              enumerable: !0,
              get: function () {
                return i.escape;
              },
            }),
            Object.defineProperty(e, 'escapeUTF8', {
              enumerable: !0,
              get: function () {
                return i.escapeUTF8;
              },
            }),
            Object.defineProperty(e, 'encodeHTML4', {
              enumerable: !0,
              get: function () {
                return i.encodeHTML;
              },
            }),
            Object.defineProperty(e, 'encodeHTML5', {
              enumerable: !0,
              get: function () {
                return i.encodeHTML;
              },
            });
          var u = mm();
          Object.defineProperty(e, 'decodeXML', {
            enumerable: !0,
            get: function () {
              return u.decodeXML;
            },
          }),
            Object.defineProperty(e, 'decodeHTML', {
              enumerable: !0,
              get: function () {
                return u.decodeHTML;
              },
            }),
            Object.defineProperty(e, 'decodeHTMLStrict', {
              enumerable: !0,
              get: function () {
                return u.decodeHTMLStrict;
              },
            }),
            Object.defineProperty(e, 'decodeHTML4', {
              enumerable: !0,
              get: function () {
                return u.decodeHTML;
              },
            }),
            Object.defineProperty(e, 'decodeHTML5', {
              enumerable: !0,
              get: function () {
                return u.decodeHTML;
              },
            }),
            Object.defineProperty(e, 'decodeHTML4Strict', {
              enumerable: !0,
              get: function () {
                return u.decodeHTMLStrict;
              },
            }),
            Object.defineProperty(e, 'decodeHTML5Strict', {
              enumerable: !0,
              get: function () {
                return u.decodeHTMLStrict;
              },
            }),
            Object.defineProperty(e, 'decodeXMLStrict', {
              enumerable: !0,
              get: function () {
                return u.decodeXML;
              },
            });
        },
      }),
      g_ = He({
        '../../node_modules/ansi-to-html/lib/ansi_to_html.js'(e, t) {
          function r(R, _) {
            if (!(R instanceof _))
              throw new TypeError('Cannot call a class as a function');
          }
          function n(R, _) {
            for (var M = 0; M < _.length; M++) {
              var G = _[M];
              (G.enumerable = G.enumerable || !1),
                (G.configurable = !0),
                'value' in G && (G.writable = !0),
                Object.defineProperty(R, G.key, G);
            }
          }
          function a(R, _, M) {
            return _ && n(R.prototype, _), M && n(R, M), R;
          }
          function o(R) {
            if (typeof Symbol > 'u' || R[Symbol.iterator] == null) {
              if (Array.isArray(R) || (R = i(R))) {
                var _ = 0,
                  M = function () {};
                return {
                  s: M,
                  n: function () {
                    return _ >= R.length
                      ? { done: !0 }
                      : { done: !1, value: R[_++] };
                  },
                  e: function (ue) {
                    throw ue;
                  },
                  f: M,
                };
              }
              throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }
            var G,
              J = !0,
              K = !1,
              Z;
            return {
              s: function () {
                G = R[Symbol.iterator]();
              },
              n: function () {
                var ue = G.next();
                return (J = ue.done), ue;
              },
              e: function (ue) {
                (K = !0), (Z = ue);
              },
              f: function () {
                try {
                  !J && G.return != null && G.return();
                } finally {
                  if (K) throw Z;
                }
              },
            };
          }
          function i(R, _) {
            if (R) {
              if (typeof R == 'string') return u(R, _);
              var M = Object.prototype.toString.call(R).slice(8, -1);
              if (
                (M === 'Object' && R.constructor && (M = R.constructor.name),
                M === 'Map' || M === 'Set')
              )
                return Array.from(M);
              if (
                M === 'Arguments' ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M)
              )
                return u(R, _);
            }
          }
          function u(R, _) {
            (_ == null || _ > R.length) && (_ = R.length);
            for (var M = 0, G = new Array(_); M < _; M++) G[M] = R[M];
            return G;
          }
          var s = m_(),
            p = {
              fg: '#FFF',
              bg: '#000',
              newline: !1,
              escapeXML: !1,
              stream: !1,
              colors: y(),
            };
          function y() {
            var R = {
              0: '#000',
              1: '#A00',
              2: '#0A0',
              3: '#A50',
              4: '#00A',
              5: '#A0A',
              6: '#0AA',
              7: '#AAA',
              8: '#555',
              9: '#F55',
              10: '#5F5',
              11: '#FF5',
              12: '#55F',
              13: '#F5F',
              14: '#5FF',
              15: '#FFF',
            };
            return (
              B(0, 5).forEach(function (_) {
                B(0, 5).forEach(function (M) {
                  B(0, 5).forEach(function (G) {
                    return A(_, M, G, R);
                  });
                });
              }),
              B(0, 23).forEach(function (_) {
                var M = _ + 232,
                  G = m(_ * 10 + 8);
                R[M] = '#' + G + G + G;
              }),
              R
            );
          }
          function A(R, _, M, G) {
            var J = 16 + R * 36 + _ * 6 + M,
              K = R > 0 ? R * 40 + 55 : 0,
              Z = _ > 0 ? _ * 40 + 55 : 0,
              ue = M > 0 ? M * 40 + 55 : 0;
            G[J] = h([K, Z, ue]);
          }
          function m(R) {
            for (var _ = R.toString(16); _.length < 2; ) _ = '0' + _;
            return _;
          }
          function h(R) {
            var _ = [],
              M = o(R),
              G;
            try {
              for (M.s(); !(G = M.n()).done; ) {
                var J = G.value;
                _.push(m(J));
              }
            } catch (K) {
              M.e(K);
            } finally {
              M.f();
            }
            return '#' + _.join('');
          }
          function E(R, _, M, G) {
            var J;
            return (
              _ === 'text'
                ? (J = w(M, G))
                : _ === 'display'
                  ? (J = x(R, M, G))
                  : _ === 'xterm256'
                    ? (J = z(R, G.colors[M]))
                    : _ === 'rgb' && (J = b(R, M)),
              J
            );
          }
          function b(R, _) {
            _ = _.substring(2).slice(0, -1);
            var M = +_.substr(0, 2),
              G = _.substring(5).split(';'),
              J = G.map(function (K) {
                return ('0' + Number(K).toString(16)).substr(-2);
              }).join('');
            return k(R, (M === 38 ? 'color:#' : 'background-color:#') + J);
          }
          function x(R, _, M) {
            _ = parseInt(_, 10);
            var G = {
                '-1': function () {
                  return '<br/>';
                },
                0: function () {
                  return R.length && F(R);
                },
                1: function () {
                  return N(R, 'b');
                },
                3: function () {
                  return N(R, 'i');
                },
                4: function () {
                  return N(R, 'u');
                },
                8: function () {
                  return k(R, 'display:none');
                },
                9: function () {
                  return N(R, 'strike');
                },
                22: function () {
                  return k(
                    R,
                    'font-weight:normal;text-decoration:none;font-style:normal'
                  );
                },
                23: function () {
                  return U(R, 'i');
                },
                24: function () {
                  return U(R, 'u');
                },
                39: function () {
                  return z(R, M.fg);
                },
                49: function () {
                  return V(R, M.bg);
                },
                53: function () {
                  return k(R, 'text-decoration:overline');
                },
              },
              J;
            return (
              G[_]
                ? (J = G[_]())
                : 4 < _ && _ < 7
                  ? (J = N(R, 'blink'))
                  : 29 < _ && _ < 38
                    ? (J = z(R, M.colors[_ - 30]))
                    : 39 < _ && _ < 48
                      ? (J = V(R, M.colors[_ - 40]))
                      : 89 < _ && _ < 98
                        ? (J = z(R, M.colors[8 + (_ - 90)]))
                        : 99 < _ &&
                          _ < 108 &&
                          (J = V(R, M.colors[8 + (_ - 100)])),
              J
            );
          }
          function F(R) {
            var _ = R.slice(0);
            return (
              (R.length = 0),
              _.reverse()
                .map(function (M) {
                  return '</' + M + '>';
                })
                .join('')
            );
          }
          function B(R, _) {
            for (var M = [], G = R; G <= _; G++) M.push(G);
            return M;
          }
          function I(R) {
            return function (_) {
              return (R === null || _.category !== R) && R !== 'all';
            };
          }
          function q(R) {
            R = parseInt(R, 10);
            var _ = null;
            return (
              R === 0
                ? (_ = 'all')
                : R === 1
                  ? (_ = 'bold')
                  : 2 < R && R < 5
                    ? (_ = 'underline')
                    : 4 < R && R < 7
                      ? (_ = 'blink')
                      : R === 8
                        ? (_ = 'hide')
                        : R === 9
                          ? (_ = 'strike')
                          : (29 < R && R < 38) || R === 39 || (89 < R && R < 98)
                            ? (_ = 'foreground-color')
                            : ((39 < R && R < 48) ||
                                R === 49 ||
                                (99 < R && R < 108)) &&
                              (_ = 'background-color'),
              _
            );
          }
          function w(R, _) {
            return _.escapeXML ? s.encodeXML(R) : R;
          }
          function N(R, _, M) {
            return (
              M || (M = ''),
              R.push(_),
              '<'.concat(_).concat(M ? ' style="'.concat(M, '"') : '', '>')
            );
          }
          function k(R, _) {
            return N(R, 'span', _);
          }
          function z(R, _) {
            return N(R, 'span', 'color:' + _);
          }
          function V(R, _) {
            return N(R, 'span', 'background-color:' + _);
          }
          function U(R, _) {
            var M;
            if ((R.slice(-1)[0] === _ && (M = R.pop()), M))
              return '</' + _ + '>';
          }
          function ne(R, _, M) {
            var G = !1,
              J = 3;
            function K() {
              return '';
            }
            function Z(oe, be) {
              return M('xterm256', be), '';
            }
            function ue(oe) {
              return _.newline ? M('display', -1) : M('text', oe), '';
            }
            function Re(oe, be) {
              (G = !0),
                be.trim().length === 0 && (be = '0'),
                (be = be.trimRight(';').split(';'));
              var Vr = o(be),
                Zi;
              try {
                for (Vr.s(); !(Zi = Vr.n()).done; ) {
                  var Gy = Zi.value;
                  M('display', Gy);
                }
              } catch (Wy) {
                Vr.e(Wy);
              } finally {
                Vr.f();
              }
              return '';
            }
            function Pe(oe) {
              return M('text', oe), '';
            }
            function X(oe) {
              return M('rgb', oe), '';
            }
            var qe = [
              { pattern: /^\x08+/, sub: K },
              { pattern: /^\x1b\[[012]?K/, sub: K },
              { pattern: /^\x1b\[\(B/, sub: K },
              { pattern: /^\x1b\[[34]8;2;\d+;\d+;\d+m/, sub: X },
              { pattern: /^\x1b\[38;5;(\d+)m/, sub: Z },
              { pattern: /^\n/, sub: ue },
              { pattern: /^\r+\n/, sub: ue },
              { pattern: /^\x1b\[((?:\d{1,3};?)+|)m/, sub: Re },
              { pattern: /^\x1b\[\d?J/, sub: K },
              { pattern: /^\x1b\[\d{0,3};\d{0,3}f/, sub: K },
              { pattern: /^\x1b\[?[\d;]{0,3}/, sub: K },
              { pattern: /^(([^\x1b\x08\r\n])+)/, sub: Pe },
            ];
            function T(oe, be) {
              (be > J && G) || ((G = !1), (R = R.replace(oe.pattern, oe.sub)));
            }
            var P = [],
              L = R,
              O = L.length;
            e: for (; O > 0; ) {
              for (var $ = 0, H = 0, de = qe.length; H < de; $ = ++H) {
                var ae = qe[$];
                if ((T(ae, $), R.length !== O)) {
                  O = R.length;
                  continue e;
                }
              }
              if (R.length === O) break;
              P.push(0), (O = R.length);
            }
            return P;
          }
          function Q(R, _, M) {
            return (
              _ !== 'text' &&
                ((R = R.filter(I(q(M)))),
                R.push({ token: _, data: M, category: q(M) })),
              R
            );
          }
          var Y = (function () {
            function R(_) {
              r(this, R),
                (_ = _ || {}),
                _.colors && (_.colors = Object.assign({}, p.colors, _.colors)),
                (this.options = Object.assign({}, p, _)),
                (this.stack = []),
                (this.stickyStack = []);
            }
            return (
              a(R, [
                {
                  key: 'toHtml',
                  value: function (_) {
                    var M = this;
                    _ = typeof _ == 'string' ? [_] : _;
                    var G = this.stack,
                      J = this.options,
                      K = [];
                    return (
                      this.stickyStack.forEach(function (Z) {
                        var ue = E(G, Z.token, Z.data, J);
                        ue && K.push(ue);
                      }),
                      ne(_.join(''), J, function (Z, ue) {
                        var Re = E(G, Z, ue, J);
                        Re && K.push(Re),
                          J.stream && (M.stickyStack = Q(M.stickyStack, Z, ue));
                      }),
                      G.length && K.push(F(G)),
                      K.join('')
                    );
                  },
                },
              ]),
              R
            );
          })();
          t.exports = Y;
        },
      }),
      RQ = new Error('prepareAborted'),
      { AbortController: PQ } = globalThis;
    var { fetch: IQ } = ie;
    var { history: kQ, document: NQ } = ie;
    var y_ = Yf(g_()),
      { document: LQ } = ie;
    var b_ = ((e) => (
      (e.MAIN = 'MAIN'),
      (e.NOPREVIEW = 'NOPREVIEW'),
      (e.PREPARING_STORY = 'PREPARING_STORY'),
      (e.PREPARING_DOCS = 'PREPARING_DOCS'),
      (e.ERROR = 'ERROR'),
      e
    ))(b_ || {});
    var qQ = new y_.default({ escapeXML: !0 });
    var { document: jQ } = ie;
    var { FEATURES: XQ } = ie;
    l();
    c();
    d();
    var vy = pe(Pn(), 1);
    l();
    c();
    d();
    var S_ = pe(Pn(), 1),
      F_ = pe(Bm(), 1);
    var w_ = ((e) => (
      (e.JAVASCRIPT = 'JavaScript'),
      (e.FLOW = 'Flow'),
      (e.TYPESCRIPT = 'TypeScript'),
      (e.UNKNOWN = 'Unknown'),
      e
    ))(w_ || {});
    var Tm = 'storybook/docs',
      _ee = `${Tm}/panel`;
    var B_ = `${Tm}/snippet-rendered`,
      _m = ((e) => (
        (e.AUTO = 'auto'), (e.CODE = 'code'), (e.DYNAMIC = 'dynamic'), e
      ))(_m || {});
    l();
    c();
    d();
    l();
    c();
    d();
    var T_ = Object.create,
      Om = Object.defineProperty,
      __ = Object.getOwnPropertyDescriptor,
      Rm = Object.getOwnPropertyNames,
      O_ = Object.getPrototypeOf,
      R_ = Object.prototype.hasOwnProperty,
      ke = (e, t) =>
        function () {
          return (
            t || (0, e[Rm(e)[0]])((t = { exports: {} }).exports, t), t.exports
          );
        },
      P_ = (e, t, r, n) => {
        if ((t && typeof t == 'object') || typeof t == 'function')
          for (let a of Rm(t))
            !R_.call(e, a) &&
              a !== r &&
              Om(e, a, {
                get: () => t[a],
                enumerable: !(n = __(t, a)) || n.enumerable,
              });
        return e;
      },
      Qn = (e, t, r) => (
        (r = e != null ? T_(O_(e)) : {}),
        P_(
          t || !e || !e.__esModule
            ? Om(r, 'default', { value: e, enumerable: !0 })
            : r,
          e
        )
      ),
      I_ = [
        'bubbles',
        'cancelBubble',
        'cancelable',
        'composed',
        'currentTarget',
        'defaultPrevented',
        'eventPhase',
        'isTrusted',
        'returnValue',
        'srcElement',
        'target',
        'timeStamp',
        'type',
      ],
      k_ = ['detail'];
    function Pm(e) {
      let t = I_.filter((r) => e[r] !== void 0).reduce(
        (r, n) => ({ ...r, [n]: e[n] }),
        {}
      );
      return (
        e instanceof CustomEvent &&
          k_
            .filter((r) => e[r] !== void 0)
            .forEach((r) => {
              t[r] = e[r];
            }),
        t
      );
    }
    var Km = pe(Sn(), 1),
      jm = ke({
        'node_modules/has-symbols/shams.js'(e, t) {
          'use strict';
          t.exports = function () {
            if (
              typeof Symbol != 'function' ||
              typeof Object.getOwnPropertySymbols != 'function'
            )
              return !1;
            if (typeof Symbol.iterator == 'symbol') return !0;
            var n = {},
              a = Symbol('test'),
              o = Object(a);
            if (
              typeof a == 'string' ||
              Object.prototype.toString.call(a) !== '[object Symbol]' ||
              Object.prototype.toString.call(o) !== '[object Symbol]'
            )
              return !1;
            var i = 42;
            n[a] = i;
            for (a in n) return !1;
            if (
              (typeof Object.keys == 'function' &&
                Object.keys(n).length !== 0) ||
              (typeof Object.getOwnPropertyNames == 'function' &&
                Object.getOwnPropertyNames(n).length !== 0)
            )
              return !1;
            var u = Object.getOwnPropertySymbols(n);
            if (
              u.length !== 1 ||
              u[0] !== a ||
              !Object.prototype.propertyIsEnumerable.call(n, a)
            )
              return !1;
            if (typeof Object.getOwnPropertyDescriptor == 'function') {
              var s = Object.getOwnPropertyDescriptor(n, a);
              if (s.value !== i || s.enumerable !== !0) return !1;
            }
            return !0;
          };
        },
      }),
      Mm = ke({
        'node_modules/has-symbols/index.js'(e, t) {
          'use strict';
          var r = typeof Symbol < 'u' && Symbol,
            n = jm();
          t.exports = function () {
            return typeof r != 'function' ||
              typeof Symbol != 'function' ||
              typeof r('foo') != 'symbol' ||
              typeof Symbol('bar') != 'symbol'
              ? !1
              : n();
          };
        },
      }),
      N_ = ke({
        'node_modules/function-bind/implementation.js'(e, t) {
          'use strict';
          var r = 'Function.prototype.bind called on incompatible ',
            n = Array.prototype.slice,
            a = Object.prototype.toString,
            o = '[object Function]';
          t.exports = function (u) {
            var s = this;
            if (typeof s != 'function' || a.call(s) !== o)
              throw new TypeError(r + s);
            for (
              var p = n.call(arguments, 1),
                y,
                A = function () {
                  if (this instanceof y) {
                    var x = s.apply(this, p.concat(n.call(arguments)));
                    return Object(x) === x ? x : this;
                  } else return s.apply(u, p.concat(n.call(arguments)));
                },
                m = Math.max(0, s.length - p.length),
                h = [],
                E = 0;
              E < m;
              E++
            )
              h.push('$' + E);
            if (
              ((y = Function(
                'binder',
                'return function (' +
                  h.join(',') +
                  '){ return binder.apply(this,arguments); }'
              )(A)),
              s.prototype)
            ) {
              var b = function () {};
              (b.prototype = s.prototype),
                (y.prototype = new b()),
                (b.prototype = null);
            }
            return y;
          };
        },
      }),
      Si = ke({
        'node_modules/function-bind/index.js'(e, t) {
          'use strict';
          var r = N_();
          t.exports = Function.prototype.bind || r;
        },
      }),
      L_ = ke({
        'node_modules/has/src/index.js'(e, t) {
          'use strict';
          var r = Si();
          t.exports = r.call(Function.call, Object.prototype.hasOwnProperty);
        },
      }),
      $m = ke({
        'node_modules/get-intrinsic/index.js'(e, t) {
          'use strict';
          var r,
            n = SyntaxError,
            a = Function,
            o = TypeError,
            i = function (Q) {
              try {
                return a('"use strict"; return (' + Q + ').constructor;')();
              } catch {}
            },
            u = Object.getOwnPropertyDescriptor;
          if (u)
            try {
              u({}, '');
            } catch {
              u = null;
            }
          var s = function () {
              throw new o();
            },
            p = u
              ? (function () {
                  try {
                    return arguments.callee, s;
                  } catch {
                    try {
                      return u(arguments, 'callee').get;
                    } catch {
                      return s;
                    }
                  }
                })()
              : s,
            y = Mm()(),
            A =
              Object.getPrototypeOf ||
              function (Q) {
                return Q.__proto__;
              },
            m = {},
            h = typeof Uint8Array > 'u' ? r : A(Uint8Array),
            E = {
              '%AggregateError%':
                typeof AggregateError > 'u' ? r : AggregateError,
              '%Array%': Array,
              '%ArrayBuffer%': typeof ArrayBuffer > 'u' ? r : ArrayBuffer,
              '%ArrayIteratorPrototype%': y ? A([][Symbol.iterator]()) : r,
              '%AsyncFromSyncIteratorPrototype%': r,
              '%AsyncFunction%': m,
              '%AsyncGenerator%': m,
              '%AsyncGeneratorFunction%': m,
              '%AsyncIteratorPrototype%': m,
              '%Atomics%': typeof Atomics > 'u' ? r : Atomics,
              '%BigInt%': typeof BigInt > 'u' ? r : BigInt,
              '%Boolean%': Boolean,
              '%DataView%': typeof DataView > 'u' ? r : DataView,
              '%Date%': Date,
              '%decodeURI%': decodeURI,
              '%decodeURIComponent%': decodeURIComponent,
              '%encodeURI%': encodeURI,
              '%encodeURIComponent%': encodeURIComponent,
              '%Error%': Error,
              '%eval%': eval,
              '%EvalError%': EvalError,
              '%Float32Array%': typeof Float32Array > 'u' ? r : Float32Array,
              '%Float64Array%': typeof Float64Array > 'u' ? r : Float64Array,
              '%FinalizationRegistry%':
                typeof FinalizationRegistry > 'u' ? r : FinalizationRegistry,
              '%Function%': a,
              '%GeneratorFunction%': m,
              '%Int8Array%': typeof Int8Array > 'u' ? r : Int8Array,
              '%Int16Array%': typeof Int16Array > 'u' ? r : Int16Array,
              '%Int32Array%': typeof Int32Array > 'u' ? r : Int32Array,
              '%isFinite%': isFinite,
              '%isNaN%': isNaN,
              '%IteratorPrototype%': y ? A(A([][Symbol.iterator]())) : r,
              '%JSON%': typeof JSON == 'object' ? JSON : r,
              '%Map%': typeof Map > 'u' ? r : Map,
              '%MapIteratorPrototype%':
                typeof Map > 'u' || !y ? r : A(new Map()[Symbol.iterator]()),
              '%Math%': Math,
              '%Number%': Number,
              '%Object%': Object,
              '%parseFloat%': parseFloat,
              '%parseInt%': parseInt,
              '%Promise%': typeof Promise > 'u' ? r : Promise,
              '%Proxy%': typeof Proxy > 'u' ? r : Proxy,
              '%RangeError%': RangeError,
              '%ReferenceError%': ReferenceError,
              '%Reflect%': typeof Reflect > 'u' ? r : Reflect,
              '%RegExp%': RegExp,
              '%Set%': typeof Set > 'u' ? r : Set,
              '%SetIteratorPrototype%':
                typeof Set > 'u' || !y ? r : A(new Set()[Symbol.iterator]()),
              '%SharedArrayBuffer%':
                typeof SharedArrayBuffer > 'u' ? r : SharedArrayBuffer,
              '%String%': String,
              '%StringIteratorPrototype%': y ? A(''[Symbol.iterator]()) : r,
              '%Symbol%': y ? Symbol : r,
              '%SyntaxError%': n,
              '%ThrowTypeError%': p,
              '%TypedArray%': h,
              '%TypeError%': o,
              '%Uint8Array%': typeof Uint8Array > 'u' ? r : Uint8Array,
              '%Uint8ClampedArray%':
                typeof Uint8ClampedArray > 'u' ? r : Uint8ClampedArray,
              '%Uint16Array%': typeof Uint16Array > 'u' ? r : Uint16Array,
              '%Uint32Array%': typeof Uint32Array > 'u' ? r : Uint32Array,
              '%URIError%': URIError,
              '%WeakMap%': typeof WeakMap > 'u' ? r : WeakMap,
              '%WeakRef%': typeof WeakRef > 'u' ? r : WeakRef,
              '%WeakSet%': typeof WeakSet > 'u' ? r : WeakSet,
            },
            b = function Q(Y) {
              var R;
              if (Y === '%AsyncFunction%') R = i('async function () {}');
              else if (Y === '%GeneratorFunction%') R = i('function* () {}');
              else if (Y === '%AsyncGeneratorFunction%')
                R = i('async function* () {}');
              else if (Y === '%AsyncGenerator%') {
                var _ = Q('%AsyncGeneratorFunction%');
                _ && (R = _.prototype);
              } else if (Y === '%AsyncIteratorPrototype%') {
                var M = Q('%AsyncGenerator%');
                M && (R = A(M.prototype));
              }
              return (E[Y] = R), R;
            },
            x = {
              '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
              '%ArrayPrototype%': ['Array', 'prototype'],
              '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
              '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
              '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
              '%ArrayProto_values%': ['Array', 'prototype', 'values'],
              '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
              '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
              '%AsyncGeneratorPrototype%': [
                'AsyncGeneratorFunction',
                'prototype',
                'prototype',
              ],
              '%BooleanPrototype%': ['Boolean', 'prototype'],
              '%DataViewPrototype%': ['DataView', 'prototype'],
              '%DatePrototype%': ['Date', 'prototype'],
              '%ErrorPrototype%': ['Error', 'prototype'],
              '%EvalErrorPrototype%': ['EvalError', 'prototype'],
              '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
              '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
              '%FunctionPrototype%': ['Function', 'prototype'],
              '%Generator%': ['GeneratorFunction', 'prototype'],
              '%GeneratorPrototype%': [
                'GeneratorFunction',
                'prototype',
                'prototype',
              ],
              '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
              '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
              '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
              '%JSONParse%': ['JSON', 'parse'],
              '%JSONStringify%': ['JSON', 'stringify'],
              '%MapPrototype%': ['Map', 'prototype'],
              '%NumberPrototype%': ['Number', 'prototype'],
              '%ObjectPrototype%': ['Object', 'prototype'],
              '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
              '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
              '%PromisePrototype%': ['Promise', 'prototype'],
              '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
              '%Promise_all%': ['Promise', 'all'],
              '%Promise_reject%': ['Promise', 'reject'],
              '%Promise_resolve%': ['Promise', 'resolve'],
              '%RangeErrorPrototype%': ['RangeError', 'prototype'],
              '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
              '%RegExpPrototype%': ['RegExp', 'prototype'],
              '%SetPrototype%': ['Set', 'prototype'],
              '%SharedArrayBufferPrototype%': [
                'SharedArrayBuffer',
                'prototype',
              ],
              '%StringPrototype%': ['String', 'prototype'],
              '%SymbolPrototype%': ['Symbol', 'prototype'],
              '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
              '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
              '%TypeErrorPrototype%': ['TypeError', 'prototype'],
              '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
              '%Uint8ClampedArrayPrototype%': [
                'Uint8ClampedArray',
                'prototype',
              ],
              '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
              '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
              '%URIErrorPrototype%': ['URIError', 'prototype'],
              '%WeakMapPrototype%': ['WeakMap', 'prototype'],
              '%WeakSetPrototype%': ['WeakSet', 'prototype'],
            },
            F = Si(),
            B = L_(),
            I = F.call(Function.call, Array.prototype.concat),
            q = F.call(Function.apply, Array.prototype.splice),
            w = F.call(Function.call, String.prototype.replace),
            N = F.call(Function.call, String.prototype.slice),
            k = F.call(Function.call, RegExp.prototype.exec),
            z =
              /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
            V = /\\(\\)?/g,
            U = function (Y) {
              var R = N(Y, 0, 1),
                _ = N(Y, -1);
              if (R === '%' && _ !== '%')
                throw new n('invalid intrinsic syntax, expected closing `%`');
              if (_ === '%' && R !== '%')
                throw new n('invalid intrinsic syntax, expected opening `%`');
              var M = [];
              return (
                w(Y, z, function (G, J, K, Z) {
                  M[M.length] = K ? w(Z, V, '$1') : J || G;
                }),
                M
              );
            },
            ne = function (Y, R) {
              var _ = Y,
                M;
              if ((B(x, _) && ((M = x[_]), (_ = '%' + M[0] + '%')), B(E, _))) {
                var G = E[_];
                if ((G === m && (G = b(_)), typeof G > 'u' && !R))
                  throw new o(
                    'intrinsic ' +
                      Y +
                      ' exists, but is not available. Please file an issue!'
                  );
                return { alias: M, name: _, value: G };
              }
              throw new n('intrinsic ' + Y + ' does not exist!');
            };
          t.exports = function (Y, R) {
            if (typeof Y != 'string' || Y.length === 0)
              throw new o('intrinsic name must be a non-empty string');
            if (arguments.length > 1 && typeof R != 'boolean')
              throw new o('"allowMissing" argument must be a boolean');
            if (k(/^%?[^%]*%?$/, Y) === null)
              throw new n(
                '`%` may not be present anywhere but at the beginning and end of the intrinsic name'
              );
            var _ = U(Y),
              M = _.length > 0 ? _[0] : '',
              G = ne('%' + M + '%', R),
              J = G.name,
              K = G.value,
              Z = !1,
              ue = G.alias;
            ue && ((M = ue[0]), q(_, I([0, 1], ue)));
            for (var Re = 1, Pe = !0; Re < _.length; Re += 1) {
              var X = _[Re],
                qe = N(X, 0, 1),
                T = N(X, -1);
              if (
                (qe === '"' ||
                  qe === "'" ||
                  qe === '`' ||
                  T === '"' ||
                  T === "'" ||
                  T === '`') &&
                qe !== T
              )
                throw new n(
                  'property names with quotes must have matching quotes'
                );
              if (
                ((X === 'constructor' || !Pe) && (Z = !0),
                (M += '.' + X),
                (J = '%' + M + '%'),
                B(E, J))
              )
                K = E[J];
              else if (K != null) {
                if (!(X in K)) {
                  if (!R)
                    throw new o(
                      'base intrinsic for ' +
                        Y +
                        ' exists, but the property is not available.'
                    );
                  return;
                }
                if (u && Re + 1 >= _.length) {
                  var P = u(K, X);
                  (Pe = !!P),
                    Pe && 'get' in P && !('originalValue' in P.get)
                      ? (K = P.get)
                      : (K = K[X]);
                } else (Pe = B(K, X)), (K = K[X]);
                Pe && !Z && (E[J] = K);
              }
            }
            return K;
          };
        },
      }),
      q_ = ke({
        'node_modules/call-bind/index.js'(e, t) {
          'use strict';
          var r = Si(),
            n = $m(),
            a = n('%Function.prototype.apply%'),
            o = n('%Function.prototype.call%'),
            i = n('%Reflect.apply%', !0) || r.call(o, a),
            u = n('%Object.getOwnPropertyDescriptor%', !0),
            s = n('%Object.defineProperty%', !0),
            p = n('%Math.max%');
          if (s)
            try {
              s({}, 'a', { value: 1 });
            } catch {
              s = null;
            }
          t.exports = function (m) {
            var h = i(r, o, arguments);
            if (u && s) {
              var E = u(h, 'length');
              E.configurable &&
                s(h, 'length', {
                  value: 1 + p(0, m.length - (arguments.length - 1)),
                });
            }
            return h;
          };
          var y = function () {
            return i(r, a, arguments);
          };
          s ? s(t.exports, 'apply', { value: y }) : (t.exports.apply = y);
        },
      }),
      j_ = ke({
        'node_modules/call-bind/callBound.js'(e, t) {
          'use strict';
          var r = $m(),
            n = q_(),
            a = n(r('String.prototype.indexOf'));
          t.exports = function (i, u) {
            var s = r(i, !!u);
            return typeof s == 'function' && a(i, '.prototype.') > -1
              ? n(s)
              : s;
          };
        },
      }),
      M_ = ke({
        'node_modules/has-tostringtag/shams.js'(e, t) {
          'use strict';
          var r = jm();
          t.exports = function () {
            return r() && !!Symbol.toStringTag;
          };
        },
      }),
      $_ = ke({
        'node_modules/is-regex/index.js'(e, t) {
          'use strict';
          var r = j_(),
            n = M_()(),
            a,
            o,
            i,
            u;
          n &&
            ((a = r('Object.prototype.hasOwnProperty')),
            (o = r('RegExp.prototype.exec')),
            (i = {}),
            (s = function () {
              throw i;
            }),
            (u = { toString: s, valueOf: s }),
            typeof Symbol.toPrimitive == 'symbol' &&
              (u[Symbol.toPrimitive] = s));
          var s,
            p = r('Object.prototype.toString'),
            y = Object.getOwnPropertyDescriptor,
            A = '[object RegExp]';
          t.exports = n
            ? function (h) {
                if (!h || typeof h != 'object') return !1;
                var E = y(h, 'lastIndex'),
                  b = E && a(E, 'value');
                if (!b) return !1;
                try {
                  o(h, u);
                } catch (x) {
                  return x === i;
                }
              }
            : function (h) {
                return !h || (typeof h != 'object' && typeof h != 'function')
                  ? !1
                  : p(h) === A;
              };
        },
      }),
      U_ = ke({
        'node_modules/is-function/index.js'(e, t) {
          t.exports = n;
          var r = Object.prototype.toString;
          function n(a) {
            if (!a) return !1;
            var o = r.call(a);
            return (
              o === '[object Function]' ||
              (typeof a == 'function' && o !== '[object RegExp]') ||
              (typeof window < 'u' &&
                (a === window.setTimeout ||
                  a === window.alert ||
                  a === window.confirm ||
                  a === window.prompt))
            );
          }
        },
      }),
      z_ = ke({
        'node_modules/is-symbol/index.js'(e, t) {
          'use strict';
          var r = Object.prototype.toString,
            n = Mm()();
          n
            ? ((a = Symbol.prototype.toString),
              (o = /^Symbol\(.*\)$/),
              (i = function (s) {
                return typeof s.valueOf() != 'symbol' ? !1 : o.test(a.call(s));
              }),
              (t.exports = function (s) {
                if (typeof s == 'symbol') return !0;
                if (r.call(s) !== '[object Symbol]') return !1;
                try {
                  return i(s);
                } catch {
                  return !1;
                }
              }))
            : (t.exports = function (s) {
                return !1;
              });
          var a, o, i;
        },
      }),
      H_ = Qn($_()),
      G_ = Qn(U_()),
      W_ = Qn(z_());
    function V_(e) {
      return e != null && typeof e == 'object' && Array.isArray(e) === !1;
    }
    var K_ =
        typeof window == 'object' &&
        window &&
        window.Object === Object &&
        window,
      Y_ = K_,
      J_ = typeof self == 'object' && self && self.Object === Object && self,
      X_ = Y_ || J_ || Function('return this')(),
      Fi = X_,
      Q_ = Fi.Symbol,
      Qt = Q_,
      Um = Object.prototype,
      Z_ = Um.hasOwnProperty,
      eO = Um.toString,
      Ur = Qt ? Qt.toStringTag : void 0;
    function tO(e) {
      var t = Z_.call(e, Ur),
        r = e[Ur];
      try {
        e[Ur] = void 0;
        var n = !0;
      } catch {}
      var a = eO.call(e);
      return n && (t ? (e[Ur] = r) : delete e[Ur]), a;
    }
    var rO = tO,
      nO = Object.prototype,
      aO = nO.toString;
    function oO(e) {
      return aO.call(e);
    }
    var iO = oO,
      uO = '[object Null]',
      sO = '[object Undefined]',
      Im = Qt ? Qt.toStringTag : void 0;
    function lO(e) {
      return e == null
        ? e === void 0
          ? sO
          : uO
        : Im && Im in Object(e)
          ? rO(e)
          : iO(e);
    }
    var zm = lO;
    function cO(e) {
      return e != null && typeof e == 'object';
    }
    var dO = cO,
      pO = '[object Symbol]';
    function fO(e) {
      return typeof e == 'symbol' || (dO(e) && zm(e) == pO);
    }
    var wi = fO;
    function hO(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
        a[r] = t(e[r], r, e);
      return a;
    }
    var mO = hO,
      gO = Array.isArray,
      Bi = gO,
      yO = 1 / 0,
      km = Qt ? Qt.prototype : void 0,
      Nm = km ? km.toString : void 0;
    function Hm(e) {
      if (typeof e == 'string') return e;
      if (Bi(e)) return mO(e, Hm) + '';
      if (wi(e)) return Nm ? Nm.call(e) : '';
      var t = e + '';
      return t == '0' && 1 / e == -yO ? '-0' : t;
    }
    var bO = Hm;
    function EO(e) {
      var t = typeof e;
      return e != null && (t == 'object' || t == 'function');
    }
    var Gm = EO,
      AO = '[object AsyncFunction]',
      vO = '[object Function]',
      DO = '[object GeneratorFunction]',
      CO = '[object Proxy]';
    function xO(e) {
      if (!Gm(e)) return !1;
      var t = zm(e);
      return t == vO || t == DO || t == AO || t == CO;
    }
    var SO = xO,
      FO = Fi['__core-js_shared__'],
      xi = FO,
      Lm = (function () {
        var e = /[^.]+$/.exec((xi && xi.keys && xi.keys.IE_PROTO) || '');
        return e ? 'Symbol(src)_1.' + e : '';
      })();
    function wO(e) {
      return !!Lm && Lm in e;
    }
    var BO = wO,
      TO = Function.prototype,
      _O = TO.toString;
    function OO(e) {
      if (e != null) {
        try {
          return _O.call(e);
        } catch {}
        try {
          return e + '';
        } catch {}
      }
      return '';
    }
    var RO = OO,
      PO = /[\\^$.*+?()[\]{}|]/g,
      IO = /^\[object .+?Constructor\]$/,
      kO = Function.prototype,
      NO = Object.prototype,
      LO = kO.toString,
      qO = NO.hasOwnProperty,
      jO = RegExp(
        '^' +
          LO.call(qO)
            .replace(PO, '\\$&')
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              '$1.*?'
            ) +
          '$'
      );
    function MO(e) {
      if (!Gm(e) || BO(e)) return !1;
      var t = SO(e) ? jO : IO;
      return t.test(RO(e));
    }
    var $O = MO;
    function UO(e, t) {
      return e?.[t];
    }
    var zO = UO;
    function HO(e, t) {
      var r = zO(e, t);
      return $O(r) ? r : void 0;
    }
    var Wm = HO;
    function GO(e, t) {
      return e === t || (e !== e && t !== t);
    }
    var WO = GO,
      VO = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      KO = /^\w*$/;
    function YO(e, t) {
      if (Bi(e)) return !1;
      var r = typeof e;
      return r == 'number' ||
        r == 'symbol' ||
        r == 'boolean' ||
        e == null ||
        wi(e)
        ? !0
        : KO.test(e) || !VO.test(e) || (t != null && e in Object(t));
    }
    var JO = YO,
      XO = Wm(Object, 'create'),
      zr = XO;
    function QO() {
      (this.__data__ = zr ? zr(null) : {}), (this.size = 0);
    }
    var ZO = QO;
    function e6(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    var t6 = e6,
      r6 = '__lodash_hash_undefined__',
      n6 = Object.prototype,
      a6 = n6.hasOwnProperty;
    function o6(e) {
      var t = this.__data__;
      if (zr) {
        var r = t[e];
        return r === r6 ? void 0 : r;
      }
      return a6.call(t, e) ? t[e] : void 0;
    }
    var i6 = o6,
      u6 = Object.prototype,
      s6 = u6.hasOwnProperty;
    function l6(e) {
      var t = this.__data__;
      return zr ? t[e] !== void 0 : s6.call(t, e);
    }
    var c6 = l6,
      d6 = '__lodash_hash_undefined__';
    function p6(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = zr && t === void 0 ? d6 : t),
        this
      );
    }
    var f6 = p6;
    function Zt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Zt.prototype.clear = ZO;
    Zt.prototype.delete = t6;
    Zt.prototype.get = i6;
    Zt.prototype.has = c6;
    Zt.prototype.set = f6;
    var qm = Zt;
    function h6() {
      (this.__data__ = []), (this.size = 0);
    }
    var m6 = h6;
    function g6(e, t) {
      for (var r = e.length; r--; ) if (WO(e[r][0], t)) return r;
      return -1;
    }
    var ea = g6,
      y6 = Array.prototype,
      b6 = y6.splice;
    function E6(e) {
      var t = this.__data__,
        r = ea(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : b6.call(t, r, 1), --this.size, !0;
    }
    var A6 = E6;
    function v6(e) {
      var t = this.__data__,
        r = ea(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    var D6 = v6;
    function C6(e) {
      return ea(this.__data__, e) > -1;
    }
    var x6 = C6;
    function S6(e, t) {
      var r = this.__data__,
        n = ea(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    var F6 = S6;
    function er(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    er.prototype.clear = m6;
    er.prototype.delete = A6;
    er.prototype.get = D6;
    er.prototype.has = x6;
    er.prototype.set = F6;
    var w6 = er,
      B6 = Wm(Fi, 'Map'),
      T6 = B6;
    function _6() {
      (this.size = 0),
        (this.__data__ = {
          hash: new qm(),
          map: new (T6 || w6)(),
          string: new qm(),
        });
    }
    var O6 = _6;
    function R6(e) {
      var t = typeof e;
      return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
        ? e !== '__proto__'
        : e === null;
    }
    var P6 = R6;
    function I6(e, t) {
      var r = e.__data__;
      return P6(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map;
    }
    var ta = I6;
    function k6(e) {
      var t = ta(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    var N6 = k6;
    function L6(e) {
      return ta(this, e).get(e);
    }
    var q6 = L6;
    function j6(e) {
      return ta(this, e).has(e);
    }
    var M6 = j6;
    function $6(e, t) {
      var r = ta(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    var U6 = $6;
    function tr(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    tr.prototype.clear = O6;
    tr.prototype.delete = N6;
    tr.prototype.get = q6;
    tr.prototype.has = M6;
    tr.prototype.set = U6;
    var Vm = tr,
      z6 = 'Expected a function';
    function Ti(e, t) {
      if (typeof e != 'function' || (t != null && typeof t != 'function'))
        throw new TypeError(z6);
      var r = function () {
        var n = arguments,
          a = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(a)) return o.get(a);
        var i = e.apply(this, n);
        return (r.cache = o.set(a, i) || o), i;
      };
      return (r.cache = new (Ti.Cache || Vm)()), r;
    }
    Ti.Cache = Vm;
    var H6 = Ti,
      G6 = 500;
    function W6(e) {
      var t = H6(e, function (n) {
          return r.size === G6 && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    var V6 = W6,
      K6 =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      Y6 = /\\(\\)?/g,
      J6 = V6(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(''),
          e.replace(K6, function (r, n, a, o) {
            t.push(a ? o.replace(Y6, '$1') : n || r);
          }),
          t
        );
      }),
      X6 = J6;
    function Q6(e) {
      return e == null ? '' : bO(e);
    }
    var Z6 = Q6;
    function e4(e, t) {
      return Bi(e) ? e : JO(e, t) ? [e] : X6(Z6(e));
    }
    var t4 = e4,
      r4 = 1 / 0;
    function n4(e) {
      if (typeof e == 'string' || wi(e)) return e;
      var t = e + '';
      return t == '0' && 1 / e == -r4 ? '-0' : t;
    }
    var a4 = n4;
    function o4(e, t) {
      t = t4(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[a4(t[r++])];
      return r && r == n ? e : void 0;
    }
    var i4 = o4;
    function u4(e, t, r) {
      var n = e == null ? void 0 : i4(e, t);
      return n === void 0 ? r : n;
    }
    var s4 = u4,
      Zn = V_,
      l4 = (e) => {
        let t = null,
          r = !1,
          n = !1,
          a = !1,
          o = '';
        if (e.indexOf('//') >= 0 || e.indexOf('/*') >= 0)
          for (let i = 0; i < e.length; i += 1)
            !t && !r && !n && !a
              ? e[i] === '"' || e[i] === "'" || e[i] === '`'
                ? (t = e[i])
                : e[i] === '/' && e[i + 1] === '*'
                  ? (r = !0)
                  : e[i] === '/' && e[i + 1] === '/'
                    ? (n = !0)
                    : e[i] === '/' && e[i + 1] !== '/' && (a = !0)
              : (t &&
                  ((e[i] === t && e[i - 1] !== '\\') ||
                    (e[i] ===
                      `
` &&
                      t !== '`')) &&
                  (t = null),
                a &&
                  ((e[i] === '/' && e[i - 1] !== '\\') ||
                    e[i] ===
                      `
`) &&
                  (a = !1),
                r && e[i - 1] === '/' && e[i - 2] === '*' && (r = !1),
                n &&
                  e[i] ===
                    `
` &&
                  (n = !1)),
              !r && !n && (o += e[i]);
        else o = e;
        return o;
      },
      c4 = (0, Km.default)(1e4)((e) => l4(e).replace(/\n\s*/g, '').trim()),
      d4 = function (t, r) {
        let n = r.slice(0, r.indexOf('{')),
          a = r.slice(r.indexOf('{'));
        if (n.includes('=>') || n.includes('function')) return r;
        let o = n;
        return (o = o.replace(t, 'function')), o + a;
      },
      p4 = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/,
      f4 = (e) => e.match(/^[\[\{\"\}].*[\]\}\"]$/);
    function Ym(e) {
      if (!Zn(e)) return e;
      let t = e,
        r = !1;
      return (
        typeof Event < 'u' && e instanceof Event && ((t = Pm(t)), (r = !0)),
        (t = Object.keys(t).reduce((n, a) => {
          try {
            t[a] && t[a].toJSON, (n[a] = t[a]);
          } catch {
            r = !0;
          }
          return n;
        }, {})),
        r ? t : e
      );
    }
    var h4 = function (t) {
        let r, n, a, o;
        return function (u, s) {
          try {
            if (u === '')
              return (
                (o = []),
                (r = new Map([[s, '[]']])),
                (n = new Map()),
                (a = []),
                s
              );
            let p = n.get(this) || this;
            for (; a.length && p !== a[0]; ) a.shift(), o.pop();
            if (typeof s == 'boolean') return s;
            if (s === void 0) return t.allowUndefined ? '_undefined_' : void 0;
            if (s === null) return null;
            if (typeof s == 'number')
              return s === -1 / 0
                ? '_-Infinity_'
                : s === 1 / 0
                  ? '_Infinity_'
                  : Number.isNaN(s)
                    ? '_NaN_'
                    : s;
            if (typeof s == 'bigint') return `_bigint_${s.toString()}`;
            if (typeof s == 'string')
              return p4.test(s) ? (t.allowDate ? `_date_${s}` : void 0) : s;
            if ((0, H_.default)(s))
              return t.allowRegExp ? `_regexp_${s.flags}|${s.source}` : void 0;
            if ((0, G_.default)(s)) {
              if (!t.allowFunction) return;
              let { name: A } = s,
                m = s.toString();
              return m.match(
                /(\[native code\]|WEBPACK_IMPORTED_MODULE|__webpack_exports__|__webpack_require__)/
              )
                ? `_function_${A}|${(() => {}).toString()}`
                : `_function_${A}|${c4(d4(u, m))}`;
            }
            if ((0, W_.default)(s)) {
              if (!t.allowSymbol) return;
              let A = Symbol.keyFor(s);
              return A !== void 0
                ? `_gsymbol_${A}`
                : `_symbol_${s.toString().slice(7, -1)}`;
            }
            if (a.length >= t.maxDepth)
              return Array.isArray(s) ? `[Array(${s.length})]` : '[Object]';
            if (s === this) return `_duplicate_${JSON.stringify(o)}`;
            if (s instanceof Error && t.allowError)
              return {
                __isConvertedError__: !0,
                errorProperties: {
                  ...(s.cause ? { cause: s.cause } : {}),
                  ...s,
                  name: s.name,
                  message: s.message,
                  stack: s.stack,
                  '_constructor-name_': s.constructor.name,
                },
              };
            if (
              s.constructor &&
              s.constructor.name &&
              s.constructor.name !== 'Object' &&
              !Array.isArray(s) &&
              !t.allowClass
            )
              return;
            let y = r.get(s);
            if (!y) {
              let A = Array.isArray(s) ? s : Ym(s);
              if (
                s.constructor &&
                s.constructor.name &&
                s.constructor.name !== 'Object' &&
                !Array.isArray(s) &&
                t.allowClass
              )
                try {
                  Object.assign(A, {
                    '_constructor-name_': s.constructor.name,
                  });
                } catch {}
              return (
                o.push(u),
                a.unshift(A),
                r.set(s, JSON.stringify(o)),
                s !== A && n.set(s, A),
                A
              );
            }
            return `_duplicate_${y}`;
          } catch {
            return;
          }
        };
      },
      m4 = function reviver(options) {
        let refs = [],
          root;
        return function revive(key, value) {
          if (
            (key === '' &&
              ((root = value),
              refs.forEach(({ target: e, container: t, replacement: r }) => {
                let n = f4(r) ? JSON.parse(r) : r.split('.');
                n.length === 0 ? (t[e] = root) : (t[e] = s4(root, n));
              })),
            key === '_constructor-name_')
          )
            return value;
          if (Zn(value) && value.__isConvertedError__) {
            let { message: e, ...t } = value.errorProperties,
              r = new Error(e);
            return Object.assign(r, t), r;
          }
          if (
            Zn(value) &&
            value['_constructor-name_'] &&
            options.allowFunction
          ) {
            let e = value['_constructor-name_'];
            if (e !== 'Object') {
              let t = new Function(
                `return function ${e.replace(/[^a-zA-Z0-9$_]+/g, '')}(){}`
              )();
              Object.setPrototypeOf(value, new t());
            }
            return delete value['_constructor-name_'], value;
          }
          if (
            typeof value == 'string' &&
            value.startsWith('_function_') &&
            options.allowFunction
          ) {
            let [, name, source] = value.match(/_function_([^|]*)\|(.*)/) || [],
              sourceSanitized = source.replace(/[(\(\))|\\| |\]|`]*$/, '');
            if (!options.lazyEval) return eval(`(${sourceSanitized})`);
            let result = (...args) => {
              let f = eval(`(${sourceSanitized})`);
              return f(...args);
            };
            return (
              Object.defineProperty(result, 'toString', {
                value: () => sourceSanitized,
              }),
              Object.defineProperty(result, 'name', { value: name }),
              result
            );
          }
          if (
            typeof value == 'string' &&
            value.startsWith('_regexp_') &&
            options.allowRegExp
          ) {
            let [, e, t] = value.match(/_regexp_([^|]*)\|(.*)/) || [];
            return new RegExp(t, e);
          }
          return typeof value == 'string' &&
            value.startsWith('_date_') &&
            options.allowDate
            ? new Date(value.replace('_date_', ''))
            : typeof value == 'string' && value.startsWith('_duplicate_')
              ? (refs.push({
                  target: key,
                  container: this,
                  replacement: value.replace(/^_duplicate_/, ''),
                }),
                null)
              : typeof value == 'string' &&
                  value.startsWith('_symbol_') &&
                  options.allowSymbol
                ? Symbol(value.replace('_symbol_', ''))
                : typeof value == 'string' &&
                    value.startsWith('_gsymbol_') &&
                    options.allowSymbol
                  ? Symbol.for(value.replace('_gsymbol_', ''))
                  : typeof value == 'string' && value === '_-Infinity_'
                    ? -1 / 0
                    : typeof value == 'string' && value === '_Infinity_'
                      ? 1 / 0
                      : typeof value == 'string' && value === '_NaN_'
                        ? NaN
                        : typeof value == 'string' &&
                            value.startsWith('_bigint_') &&
                            typeof BigInt == 'function'
                          ? BigInt(value.replace('_bigint_', ''))
                          : value;
        };
      },
      Jm = {
        maxDepth: 10,
        space: void 0,
        allowFunction: !0,
        allowRegExp: !0,
        allowDate: !0,
        allowClass: !0,
        allowError: !0,
        allowUndefined: !0,
        allowSymbol: !0,
        lazyEval: !0,
      },
      g4 = (e, t = {}) => {
        let r = { ...Jm, ...t };
        return JSON.stringify(Ym(e), h4(r), t.space);
      },
      y4 = () => {
        let e = new Map();
        return function t(r) {
          Zn(r) &&
            Object.entries(r).forEach(([n, a]) => {
              a === '_undefined_'
                ? (r[n] = void 0)
                : e.get(a) || (e.set(a, !0), t(a));
            }),
            Array.isArray(r) &&
              r.forEach((n, a) => {
                n === '_undefined_'
                  ? (e.set(n, !0), (r[a] = void 0))
                  : e.get(n) || (e.set(n, !0), t(n));
              });
        };
      },
      Mee = (e, t = {}) => {
        let r = { ...Jm, ...t },
          n = JSON.parse(e, m4(r));
        return y4()(n), n;
      };
    var Dy = pe(lg(), 1);
    var PR = j.div(Bt, ({ theme: e }) => ({
        backgroundColor:
          e.base === 'light' ? 'rgba(0,0,0,.01)' : 'rgba(255,255,255,.01)',
        borderRadius: e.appBorderRadius,
        border: `1px dashed ${e.appBorderColor}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        margin: '25px 0 40px',
        color: ce(0.3, e.color.defaultText),
        fontSize: e.typography.size.s2,
      })),
      Cy = (e) =>
        g.createElement(PR, {
          ...e,
          className: 'docblock-emptyblock sb-unstyled',
        }),
      IR = j(Yr)(({ theme: e }) => ({
        fontSize: `${e.typography.size.s2 - 1}px`,
        lineHeight: '19px',
        margin: '25px 0 40px',
        borderRadius: e.appBorderRadius,
        boxShadow:
          e.base === 'light'
            ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
            : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
        'pre.prismjs': { padding: 20, background: 'inherit' },
      })),
      kR = j.div(({ theme: e }) => ({
        background: e.background.content,
        borderRadius: e.appBorderRadius,
        border: `1px solid ${e.appBorderColor}`,
        boxShadow:
          e.base === 'light'
            ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
            : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
        margin: '25px 0 40px',
        padding: '20px 20px 20px 22px',
      })),
      sa = j.div(({ theme: e }) => ({
        animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
        background: e.appBorderColor,
        height: 17,
        marginTop: 1,
        width: '60%',
        [`&:first-child${Eu}`]: { margin: 0 },
      })),
      NR = () =>
        g.createElement(
          kR,
          null,
          g.createElement(sa, null),
          g.createElement(sa, { style: { width: '80%' } }),
          g.createElement(sa, { style: { width: '30%' } }),
          g.createElement(sa, { style: { width: '80%' } })
        ),
      xy = ({
        isLoading: e,
        error: t,
        language: r,
        code: n,
        dark: a,
        format: o,
        ...i
      }) => {
        if (e) return g.createElement(NR, null);
        if (t) return g.createElement(Cy, null, t);
        let u = g.createElement(
          IR,
          {
            bordered: !0,
            copyable: !0,
            format: o,
            language: r,
            className: 'docblock-source sb-unstyled',
            ...i,
          },
          n
        );
        if (typeof a > 'u') return u;
        let s = a ? Ra.dark : Ra.light;
        return g.createElement(yu, { theme: bu(s) }, u);
      };
    xy.defaultProps = { format: !1 };
    var ge = (e) =>
        `& :where(${e}:not(.sb-anchor, .sb-unstyled, .sb-unstyled ${e}))`,
      Ki = 600,
      Tre = j.h1(Bt, ({ theme: e }) => ({
        color: e.color.defaultText,
        fontSize: e.typography.size.m3,
        fontWeight: e.typography.weight.bold,
        lineHeight: '32px',
        [`@media (min-width: ${Ki}px)`]: {
          fontSize: e.typography.size.l1,
          lineHeight: '36px',
          marginBottom: '16px',
        },
      })),
      _re = j.h2(Bt, ({ theme: e }) => ({
        fontWeight: e.typography.weight.regular,
        fontSize: e.typography.size.s3,
        lineHeight: '20px',
        borderBottom: 'none',
        marginBottom: 15,
        [`@media (min-width: ${Ki}px)`]: {
          fontSize: e.typography.size.m1,
          lineHeight: '28px',
          marginBottom: 24,
        },
        color: ce(0.25, e.color.defaultText),
      })),
      Ore = j.div(({ theme: e }) => {
        let t = {
            fontFamily: e.typography.fonts.base,
            fontSize: e.typography.size.s3,
            margin: 0,
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
            WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
            WebkitOverflowScrolling: 'touch',
          },
          r = {
            margin: '20px 0 8px',
            padding: 0,
            cursor: 'text',
            position: 'relative',
            color: e.color.defaultText,
            '&:first-of-type': { marginTop: 0, paddingTop: 0 },
            '&:hover a.anchor': { textDecoration: 'none' },
            '& code': { fontSize: 'inherit' },
          },
          n = {
            lineHeight: 1,
            margin: '0 2px',
            padding: '3px 5px',
            whiteSpace: 'nowrap',
            borderRadius: 3,
            fontSize: e.typography.size.s2 - 1,
            border:
              e.base === 'light'
                ? `1px solid ${e.color.mediumlight}`
                : `1px solid ${e.color.darker}`,
            color:
              e.base === 'light'
                ? ce(0.1, e.color.defaultText)
                : ce(0.3, e.color.defaultText),
            backgroundColor:
              e.base === 'light' ? e.color.lighter : e.color.border,
          };
        return {
          maxWidth: 1e3,
          width: '100%',
          [ge('a')]: {
            ...t,
            fontSize: 'inherit',
            lineHeight: '24px',
            color: e.color.secondary,
            textDecoration: 'none',
            '&.absent': { color: '#cc0000' },
            '&.anchor': {
              display: 'block',
              paddingLeft: 30,
              marginLeft: -30,
              cursor: 'pointer',
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
            },
          },
          [ge('blockquote')]: {
            ...t,
            margin: '16px 0',
            borderLeft: `4px solid ${e.color.medium}`,
            padding: '0 15px',
            color: e.color.dark,
            '& > :first-of-type': { marginTop: 0 },
            '& > :last-child': { marginBottom: 0 },
          },
          [ge('div')]: t,
          [ge('dl')]: {
            ...t,
            margin: '16px 0',
            padding: 0,
            '& dt': {
              fontSize: '14px',
              fontWeight: 'bold',
              fontStyle: 'italic',
              padding: 0,
              margin: '16px 0 4px',
            },
            '& dt:first-of-type': { padding: 0 },
            '& dt > :first-of-type': { marginTop: 0 },
            '& dt > :last-child': { marginBottom: 0 },
            '& dd': { margin: '0 0 16px', padding: '0 15px' },
            '& dd > :first-of-type': { marginTop: 0 },
            '& dd > :last-child': { marginBottom: 0 },
          },
          [ge('h1')]: {
            ...t,
            ...r,
            fontSize: `${e.typography.size.l1}px`,
            fontWeight: e.typography.weight.bold,
          },
          [ge('h2')]: {
            ...t,
            ...r,
            fontSize: `${e.typography.size.m2}px`,
            paddingBottom: 4,
            borderBottom: `1px solid ${e.appBorderColor}`,
          },
          [ge('h3')]: {
            ...t,
            ...r,
            fontSize: `${e.typography.size.m1}px`,
            fontWeight: e.typography.weight.bold,
          },
          [ge('h4')]: { ...t, ...r, fontSize: `${e.typography.size.s3}px` },
          [ge('h5')]: { ...t, ...r, fontSize: `${e.typography.size.s2}px` },
          [ge('h6')]: {
            ...t,
            ...r,
            fontSize: `${e.typography.size.s2}px`,
            color: e.color.dark,
          },
          [ge('hr')]: {
            border: '0 none',
            borderTop: `1px solid ${e.appBorderColor}`,
            height: 4,
            padding: 0,
          },
          [ge('img')]: { maxWidth: '100%' },
          [ge('li')]: {
            ...t,
            fontSize: e.typography.size.s2,
            color: e.color.defaultText,
            lineHeight: '24px',
            '& + li': { marginTop: '.25em' },
            '& ul, & ol': { marginTop: '.25em', marginBottom: 0 },
            '& code': n,
          },
          [ge('ol')]: {
            ...t,
            margin: '16px 0',
            paddingLeft: 30,
            '& :first-of-type': { marginTop: 0 },
            '& :last-child': { marginBottom: 0 },
          },
          [ge('p')]: {
            ...t,
            margin: '16px 0',
            fontSize: e.typography.size.s2,
            lineHeight: '24px',
            color: e.color.defaultText,
            '& code': n,
          },
          [ge('pre')]: {
            ...t,
            fontFamily: e.typography.fonts.mono,
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
            lineHeight: '18px',
            padding: '11px 1rem',
            whiteSpace: 'pre-wrap',
            color: 'inherit',
            borderRadius: 3,
            margin: '1rem 0',
            '&:not(.prismjs)': {
              background: 'transparent',
              border: 'none',
              borderRadius: 0,
              padding: 0,
              margin: 0,
            },
            '& pre, &.prismjs': {
              padding: 15,
              margin: 0,
              whiteSpace: 'pre-wrap',
              color: 'inherit',
              fontSize: '13px',
              lineHeight: '19px',
              code: { color: 'inherit', fontSize: 'inherit' },
            },
            '& code': { whiteSpace: 'pre' },
            '& code, & tt': { border: 'none' },
          },
          [ge('span')]: {
            ...t,
            '&.frame': {
              display: 'block',
              overflow: 'hidden',
              '& > span': {
                border: `1px solid ${e.color.medium}`,
                display: 'block',
                float: 'left',
                overflow: 'hidden',
                margin: '13px 0 0',
                padding: 7,
                width: 'auto',
              },
              '& span img': { display: 'block', float: 'left' },
              '& span span': {
                clear: 'both',
                color: e.color.darkest,
                display: 'block',
                padding: '5px 0 0',
              },
            },
            '&.align-center': {
              display: 'block',
              overflow: 'hidden',
              clear: 'both',
              '& > span': {
                display: 'block',
                overflow: 'hidden',
                margin: '13px auto 0',
                textAlign: 'center',
              },
              '& span img': { margin: '0 auto', textAlign: 'center' },
            },
            '&.align-right': {
              display: 'block',
              overflow: 'hidden',
              clear: 'both',
              '& > span': {
                display: 'block',
                overflow: 'hidden',
                margin: '13px 0 0',
                textAlign: 'right',
              },
              '& span img': { margin: 0, textAlign: 'right' },
            },
            '&.float-left': {
              display: 'block',
              marginRight: 13,
              overflow: 'hidden',
              float: 'left',
              '& span': { margin: '13px 0 0' },
            },
            '&.float-right': {
              display: 'block',
              marginLeft: 13,
              overflow: 'hidden',
              float: 'right',
              '& > span': {
                display: 'block',
                overflow: 'hidden',
                margin: '13px auto 0',
                textAlign: 'right',
              },
            },
          },
          [ge('table')]: {
            ...t,
            margin: '16px 0',
            fontSize: e.typography.size.s2,
            lineHeight: '24px',
            padding: 0,
            borderCollapse: 'collapse',
            '& tr': {
              borderTop: `1px solid ${e.appBorderColor}`,
              backgroundColor: e.appContentBg,
              margin: 0,
              padding: 0,
            },
            '& tr:nth-of-type(2n)': {
              backgroundColor:
                e.base === 'dark' ? e.color.darker : e.color.lighter,
            },
            '& tr th': {
              fontWeight: 'bold',
              color: e.color.defaultText,
              border: `1px solid ${e.appBorderColor}`,
              margin: 0,
              padding: '6px 13px',
            },
            '& tr td': {
              border: `1px solid ${e.appBorderColor}`,
              color: e.color.defaultText,
              margin: 0,
              padding: '6px 13px',
            },
            '& tr th :first-of-type, & tr td :first-of-type': { marginTop: 0 },
            '& tr th :last-child, & tr td :last-child': { marginBottom: 0 },
          },
          [ge('ul')]: {
            ...t,
            margin: '16px 0',
            paddingLeft: 30,
            '& :first-of-type': { marginTop: 0 },
            '& :last-child': { marginBottom: 0 },
            listStyle: 'disc',
          },
        };
      }),
      Rre = j.div(({ theme: e }) => ({
        background: e.background.content,
        display: 'flex',
        justifyContent: 'center',
        padding: '4rem 20px',
        minHeight: '100vh',
        boxSizing: 'border-box',
        gap: '3rem',
        [`@media (min-width: ${Ki}px)`]: {},
      }));
    var da = (e) => ({
        borderRadius: e.appBorderRadius,
        background: e.background.content,
        boxShadow:
          e.base === 'light'
            ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
            : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
        border: `1px solid ${e.appBorderColor}`,
      }),
      LR = ({ zoom: e, resetZoom: t }) =>
        g.createElement(
          g.Fragment,
          null,
          g.createElement(
            ft,
            {
              key: 'zoomin',
              onClick: (r) => {
                r.preventDefault(), e(0.8);
              },
              title: 'Zoom in',
            },
            g.createElement(Be, { icon: 'zoom' })
          ),
          g.createElement(
            ft,
            {
              key: 'zoomout',
              onClick: (r) => {
                r.preventDefault(), e(1.25);
              },
              title: 'Zoom out',
            },
            g.createElement(Be, { icon: 'zoomout' })
          ),
          g.createElement(
            ft,
            {
              key: 'zoomreset',
              onClick: (r) => {
                r.preventDefault(), t();
              },
              title: 'Reset zoom',
            },
            g.createElement(Be, { icon: 'zoomreset' })
          )
        ),
      qR = j(Aa)({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        transition: 'transform .2s linear',
      }),
      jR = ({
        isLoading: e,
        storyId: t,
        baseUrl: r,
        zoom: n,
        resetZoom: a,
        ...o
      }) =>
        g.createElement(
          qR,
          { ...o },
          g.createElement(
            ru,
            { key: 'left' },
            e
              ? [1, 2, 3].map((i) => g.createElement(Da, { key: i }))
              : g.createElement(LR, { zoom: n, resetZoom: a })
          )
        ),
      MR = ur({ scale: 1 }),
      { window: Pre } = ie;
    var { PREVIEW_URL: Ire } = ie;
    var $R = j.div(
        ({ isColumn: e, columns: t, layout: r }) => ({
          display: e || !t ? 'block' : 'flex',
          position: 'relative',
          flexWrap: 'wrap',
          overflow: 'auto',
          flexDirection: e ? 'column' : 'row',
          '& .innerZoomElementWrapper > *': e
            ? {
                width: r !== 'fullscreen' ? 'calc(100% - 20px)' : '100%',
                display: 'block',
              }
            : {
                maxWidth: r !== 'fullscreen' ? 'calc(100% - 20px)' : '100%',
                display: 'inline-block',
              },
        }),
        ({ layout: e = 'padded' }) =>
          e === 'centered' || e === 'padded'
            ? {
                padding: '30px 20px',
                '& .innerZoomElementWrapper > *': {
                  width: 'auto',
                  border: '10px solid transparent!important',
                },
              }
            : {},
        ({ layout: e = 'padded' }) =>
          e === 'centered'
            ? {
                display: 'flex',
                justifyContent: 'center',
                justifyItems: 'center',
                alignContent: 'center',
                alignItems: 'center',
              }
            : {},
        ({ columns: e }) =>
          e && e > 1
            ? {
                '.innerZoomElementWrapper > *': {
                  minWidth: `calc(100% / ${e} - 20px)`,
                },
              }
            : {}
      ),
      ny = j(xy)(({ theme: e }) => ({
        margin: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: e.appBorderRadius,
        borderBottomRightRadius: e.appBorderRadius,
        border: 'none',
        background:
          e.base === 'light'
            ? 'rgba(0, 0, 0, 0.85)'
            : Me(0.05, e.background.content),
        color: e.color.lightest,
        button: {
          background:
            e.base === 'light'
              ? 'rgba(0, 0, 0, 0.85)'
              : Me(0.05, e.background.content),
        },
      })),
      UR = j.div(
        ({ theme: e, withSource: t, isExpanded: r }) => ({
          position: 'relative',
          overflow: 'hidden',
          margin: '25px 0 40px',
          ...da(e),
          borderBottomLeftRadius: t && r && 0,
          borderBottomRightRadius: t && r && 0,
          borderBottomWidth: r && 0,
          'h3 + &': { marginTop: '16px' },
        }),
        ({ withToolbar: e }) => e && { paddingTop: 40 }
      ),
      zR = (e, t, r) => {
        switch (!0) {
          case !!(e && e.error):
            return {
              source: null,
              actionItem: {
                title: 'No code available',
                className:
                  'docblock-code-toggle docblock-code-toggle--disabled',
                disabled: !0,
                onClick: () => r(!1),
              },
            };
          case t:
            return {
              source: g.createElement(ny, { ...e, dark: !0 }),
              actionItem: {
                title: 'Hide code',
                className:
                  'docblock-code-toggle docblock-code-toggle--expanded',
                onClick: () => r(!1),
              },
            };
          default:
            return {
              source: g.createElement(ny, { ...e, dark: !0 }),
              actionItem: {
                title: 'Show code',
                className: 'docblock-code-toggle',
                onClick: () => r(!0),
              },
            };
        }
      };
    function HR(e) {
      if (tu.count(e) === 1) {
        let t = e;
        if (t.props) return t.props.id;
      }
      return null;
    }
    var GR = j(jR)({
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 40,
      }),
      WR = j.div({ overflow: 'hidden', position: 'relative' }),
      VR = ({
        isLoading: e,
        isColumn: t,
        columns: r,
        children: n,
        withSource: a,
        withToolbar: o = !1,
        isExpanded: i = !1,
        additionalActions: u,
        className: s,
        layout: p = 'padded',
        ...y
      }) => {
        let [A, m] = te(i),
          { source: h, actionItem: E } = zR(a, A, m),
          [b, x] = te(1),
          F = [s].concat(['sbdocs', 'sbdocs-preview', 'sb-unstyled']),
          B = a ? [E] : [],
          [I, q] = te(u ? [...u] : []),
          w = [...B, ...I],
          { window: N } = ie,
          k = me(async (V) => {
            let { createCopyToClipboardFunction: U } =
              await Promise.resolve().then(() => (sr(), gu));
            U();
          }, []),
          z = (V) => {
            let U = N.getSelection();
            (U && U.type === 'Range') ||
              (V.preventDefault(),
              I.filter((ne) => ne.title === 'Copied').length === 0 &&
                k(h.props.code).then(() => {
                  q([...I, { title: 'Copied', onClick: () => {} }]),
                    N.setTimeout(
                      () => q(I.filter((ne) => ne.title !== 'Copied')),
                      1500
                    );
                }));
          };
        return g.createElement(
          UR,
          { withSource: a, withToolbar: o, ...y, className: F.join(' ') },
          o &&
            g.createElement(GR, {
              isLoading: e,
              border: !0,
              zoom: (V) => x(b * V),
              resetZoom: () => x(1),
              storyId: HR(n),
              baseUrl: './iframe.html',
            }),
          g.createElement(
            MR.Provider,
            { value: { scale: b } },
            g.createElement(
              WR,
              { className: 'docs-story', onCopyCapture: a && z },
              g.createElement(
                $R,
                { isColumn: t || !Array.isArray(n), columns: r, layout: p },
                g.createElement(
                  Ba.Element,
                  { scale: b },
                  Array.isArray(n)
                    ? n.map((V, U) => g.createElement('div', { key: U }, V))
                    : g.createElement('div', null, n)
                )
              ),
              g.createElement(ya, { actionItems: w })
            )
          ),
          a && A && h
        );
      },
      kre = j(VR)(() => ({
        '.docs-story': { paddingTop: 32, paddingBottom: 40 },
      }));
    var KR = j.table(({ theme: e }) => ({
        '&&': {
          borderCollapse: 'collapse',
          borderSpacing: 0,
          border: 'none',
          tr: { border: 'none !important', background: 'none' },
          'td, th': { padding: 0, border: 'none', width: 'auto!important' },
          marginTop: 0,
          marginBottom: 0,
          'th:first-of-type, td:first-of-type': { paddingLeft: 0 },
          'th:last-of-type, td:last-of-type': { paddingRight: 0 },
          td: {
            paddingTop: 0,
            paddingBottom: 4,
            '&:not(:first-of-type)': { paddingLeft: 10, paddingRight: 0 },
          },
          tbody: { boxShadow: 'none', border: 'none' },
          code: wt({ theme: e }),
          div: { span: { fontWeight: 'bold' } },
          '& code': {
            margin: 0,
            display: 'inline-block',
            fontSize: e.typography.size.s1,
          },
        },
      })),
      YR = ({ tags: e }) => {
        let t = (e.params || []).filter((o) => o.description),
          r = t.length !== 0,
          n = e.deprecated != null,
          a = e.returns != null && e.returns.description != null;
        return !r && !a && !n
          ? null
          : g.createElement(
              g.Fragment,
              null,
              g.createElement(
                KR,
                null,
                g.createElement(
                  'tbody',
                  null,
                  n &&
                    g.createElement(
                      'tr',
                      { key: 'deprecated' },
                      g.createElement(
                        'td',
                        { colSpan: 2 },
                        g.createElement('strong', null, 'Deprecated'),
                        ': ',
                        e.deprecated
                      )
                    ),
                  r &&
                    t.map((o) =>
                      g.createElement(
                        'tr',
                        { key: o.name },
                        g.createElement(
                          'td',
                          null,
                          g.createElement('code', null, o.name)
                        ),
                        g.createElement('td', null, o.description)
                      )
                    ),
                  a &&
                    g.createElement(
                      'tr',
                      { key: 'returns' },
                      g.createElement(
                        'td',
                        null,
                        g.createElement('code', null, 'Returns')
                      ),
                      g.createElement('td', null, e.returns.description)
                    )
                )
              )
            );
      },
      Hi = 8,
      ay = j.div(({ isExpanded: e }) => ({
        display: 'flex',
        flexDirection: e ? 'column' : 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        marginBottom: '-4px',
        minWidth: 100,
      })),
      JR = j.span(wt, ({ theme: e, simple: t = !1 }) => ({
        flex: '0 0 auto',
        fontFamily: e.typography.fonts.mono,
        fontSize: e.typography.size.s1,
        wordBreak: 'break-word',
        whiteSpace: 'normal',
        maxWidth: '100%',
        margin: 0,
        marginRight: '4px',
        marginBottom: '4px',
        paddingTop: '2px',
        paddingBottom: '2px',
        lineHeight: '13px',
        ...(t && {
          background: 'transparent',
          border: '0 none',
          paddingLeft: 0,
        }),
      })),
      XR = j.button(({ theme: e }) => ({
        fontFamily: e.typography.fonts.mono,
        color: e.color.secondary,
        marginBottom: '4px',
        background: 'none',
        border: 'none',
      })),
      QR = j.div(wt, ({ theme: e }) => ({
        fontFamily: e.typography.fonts.mono,
        color: e.color.secondary,
        fontSize: e.typography.size.s1,
        margin: 0,
        whiteSpace: 'nowrap',
        display: 'flex',
        alignItems: 'center',
      })),
      ZR = j.div(({ theme: e, width: t }) => ({
        width: t,
        minWidth: 200,
        maxWidth: 800,
        padding: 15,
        fontFamily: e.typography.fonts.mono,
        fontSize: e.typography.size.s1,
        boxSizing: 'content-box',
        '& code': { padding: '0 !important' },
      })),
      e9 = j(Be)({ height: 10, width: 10, minWidth: 10, marginLeft: 4 }),
      t9 = () => g.createElement('span', null, '-'),
      Sy = ({ text: e, simple: t }) => g.createElement(JR, { simple: t }, e),
      r9 = (0, by.default)(1e3)((e) => {
        let t = e.split(/\r?\n/);
        return `${Math.max(...t.map((r) => r.length))}ch`;
      }),
      n9 = (e) => {
        if (!e) return [e];
        let t = e.split('|').map((r) => r.trim());
        return (0, Ey.default)(t);
      },
      oy = (e, t = !0) => {
        let r = e;
        return (
          t || (r = e.slice(0, Hi)),
          r.map((n) =>
            g.createElement(Sy, { key: n, text: n === '' ? '""' : n })
          )
        );
      },
      a9 = ({ value: e, initialExpandedArgs: t }) => {
        let { summary: r, detail: n } = e,
          [a, o] = te(!1),
          [i, u] = te(t || !1);
        if (r == null) return null;
        let s = typeof r.toString == 'function' ? r.toString() : r;
        if (n == null) {
          if (/[(){}[\]<>]/.test(s)) return g.createElement(Sy, { text: s });
          let p = n9(s),
            y = p.length;
          return y > Hi
            ? g.createElement(
                ay,
                { isExpanded: i },
                oy(p, i),
                g.createElement(
                  XR,
                  { onClick: () => u(!i) },
                  i ? 'Show less...' : `Show ${y - Hi} more...`
                )
              )
            : g.createElement(ay, null, oy(p));
        }
        return g.createElement(
          wa,
          {
            closeOnOutsideClick: !0,
            placement: 'bottom',
            visible: a,
            onVisibleChange: (p) => {
              o(p);
            },
            tooltip: g.createElement(
              ZR,
              { width: r9(n) },
              g.createElement(Yr, { language: 'jsx', format: !1 }, n)
            ),
          },
          g.createElement(
            QR,
            { className: 'sbdocs-expandable' },
            g.createElement('span', null, s),
            g.createElement(e9, { icon: a ? 'arrowup' : 'arrowdown' })
          )
        );
      },
      $i = ({ value: e, initialExpandedArgs: t }) =>
        e == null
          ? g.createElement(t9, null)
          : g.createElement(a9, { value: e, initialExpandedArgs: t }),
      o9 = j.label(({ theme: e }) => ({
        lineHeight: '18px',
        alignItems: 'center',
        marginBottom: 8,
        display: 'inline-block',
        position: 'relative',
        whiteSpace: 'nowrap',
        background: e.boolean.background,
        borderRadius: '3em',
        padding: 1,
        input: {
          appearance: 'none',
          width: '100%',
          height: '100%',
          position: 'absolute',
          left: 0,
          top: 0,
          margin: 0,
          padding: 0,
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          borderRadius: '3em',
          '&:focus': {
            outline: 'none',
            boxShadow: `${e.color.secondary} 0 0 0 1px inset !important`,
          },
        },
        span: {
          textAlign: 'center',
          fontSize: e.typography.size.s1,
          fontWeight: e.typography.weight.bold,
          lineHeight: '1',
          cursor: 'pointer',
          display: 'inline-block',
          padding: '7px 15px',
          transition: 'all 100ms ease-out',
          userSelect: 'none',
          borderRadius: '3em',
          color: ce(0.5, e.color.defaultText),
          background: 'transparent',
          '&:hover': {
            boxShadow: `${fr(0.3, e.appBorderColor)} 0 0 0 1px inset`,
          },
          '&:active': {
            boxShadow: `${fr(0.05, e.appBorderColor)} 0 0 0 2px inset`,
            color: fr(1, e.appBorderColor),
          },
          '&:first-of-type': { paddingRight: 8 },
          '&:last-of-type': { paddingLeft: 8 },
        },
        'input:checked ~ span:last-of-type, input:not(:checked) ~ span:first-of-type':
          {
            background: e.boolean.selectedBackground,
            boxShadow:
              e.base === 'light'
                ? `${fr(0.1, e.appBorderColor)} 0 0 2px`
                : `${e.appBorderColor} 0 0 0 1px`,
            color: e.color.defaultText,
            padding: '7px 15px',
          },
      })),
      i9 = (e) => e === 'true',
      u9 = ({ name: e, value: t, onChange: r, onBlur: n, onFocus: a }) => {
        let o = me(() => r(!1), [r]);
        if (t === void 0)
          return g.createElement(
            Te.Button,
            { id: lr(e), onClick: o },
            'Set boolean'
          );
        let i = _e(e),
          u = typeof t == 'string' ? i9(t) : t;
        return g.createElement(
          o9,
          { htmlFor: i, 'aria-label': e },
          g.createElement('input', {
            id: i,
            type: 'checkbox',
            onChange: (s) => r(s.target.checked),
            checked: u,
            role: 'switch',
            name: e,
            onBlur: n,
            onFocus: a,
          }),
          g.createElement('span', { 'aria-hidden': 'true' }, 'False'),
          g.createElement('span', { 'aria-hidden': 'true' }, 'True')
        );
      },
      s9 = (e) => {
        let [t, r, n] = e.split('-'),
          a = new Date();
        return (
          a.setFullYear(parseInt(t, 10), parseInt(r, 10) - 1, parseInt(n, 10)),
          a
        );
      },
      l9 = (e) => {
        let [t, r] = e.split(':'),
          n = new Date();
        return n.setHours(parseInt(t, 10)), n.setMinutes(parseInt(r, 10)), n;
      },
      c9 = (e) => {
        let t = new Date(e),
          r = `000${t.getFullYear()}`.slice(-4),
          n = `0${t.getMonth() + 1}`.slice(-2),
          a = `0${t.getDate()}`.slice(-2);
        return `${r}-${n}-${a}`;
      },
      d9 = (e) => {
        let t = new Date(e),
          r = `0${t.getHours()}`.slice(-2),
          n = `0${t.getMinutes()}`.slice(-2);
        return `${r}:${n}`;
      },
      p9 = j.div(({ theme: e }) => ({
        flex: 1,
        display: 'flex',
        input: {
          marginLeft: 10,
          flex: 1,
          height: 32,
          '&::-webkit-calendar-picker-indicator': {
            opacity: 0.5,
            height: 12,
            filter: e.base === 'light' ? void 0 : 'invert(1)',
          },
        },
        'input:first-of-type': { marginLeft: 0, flexGrow: 4 },
        'input:last-of-type': { flexGrow: 3 },
      })),
      f9 = ({ name: e, value: t, onChange: r, onFocus: n, onBlur: a }) => {
        let [o, i] = te(!0),
          u = we(),
          s = we();
        he(() => {
          o !== !1 &&
            (u && u.current && (u.current.value = c9(t)),
            s && s.current && (s.current.value = d9(t)));
        }, [t]);
        let p = (m) => {
            let h = s9(m.target.value),
              E = new Date(t);
            E.setFullYear(h.getFullYear(), h.getMonth(), h.getDate());
            let b = E.getTime();
            b && r(b), i(!!b);
          },
          y = (m) => {
            let h = l9(m.target.value),
              E = new Date(t);
            E.setHours(h.getHours()), E.setMinutes(h.getMinutes());
            let b = E.getTime();
            b && r(b), i(!!b);
          },
          A = _e(e);
        return g.createElement(
          p9,
          null,
          g.createElement(Te.Input, {
            type: 'date',
            max: '9999-12-31',
            ref: u,
            id: `${A}-date`,
            name: `${A}-date`,
            onChange: p,
            onFocus: n,
            onBlur: a,
          }),
          g.createElement(Te.Input, {
            type: 'time',
            id: `${A}-time`,
            name: `${A}-time`,
            ref: s,
            onChange: y,
            onFocus: n,
            onBlur: a,
          }),
          o ? null : g.createElement('div', null, 'invalid')
        );
      },
      h9 = j.label({ display: 'flex' }),
      m9 = (e) => {
        let t = parseFloat(e);
        return Number.isNaN(t) ? void 0 : t;
      };
    var g9 = ({
        name: e,
        value: t,
        onChange: r,
        min: n,
        max: a,
        step: o,
        onBlur: i,
        onFocus: u,
      }) => {
        let [s, p] = te(typeof t == 'number' ? t : ''),
          [y, A] = te(!1),
          [m, h] = te(null),
          E = me(
            (F) => {
              p(F.target.value);
              let B = parseFloat(F.target.value);
              Number.isNaN(B)
                ? h(new Error(`'${F.target.value}' is not a number`))
                : (r(B), h(null));
            },
            [r, h]
          ),
          b = me(() => {
            p('0'), r(0), A(!0);
          }, [A]),
          x = we(null);
        return (
          he(() => {
            y && x.current && x.current.select();
          }, [y]),
          he(() => {
            s !== (typeof t == 'number' ? t : '') && p(t);
          }, [t]),
          !y && t === void 0
            ? g.createElement(
                Te.Button,
                { id: lr(e), onClick: b },
                'Set number'
              )
            : g.createElement(
                h9,
                null,
                g.createElement(Te.Input, {
                  ref: x,
                  id: _e(e),
                  type: 'number',
                  onChange: E,
                  size: 'flex',
                  placeholder: 'Edit number...',
                  value: s,
                  valid: m ? 'error' : null,
                  autoFocus: y,
                  name: e,
                  min: n,
                  max: a,
                  step: o,
                  onFocus: u,
                  onBlur: i,
                })
              )
        );
      },
      Fy = (e, t) => {
        let r = t && Object.entries(t).find(([n, a]) => a === e);
        return r ? r[0] : void 0;
      },
      Gi = (e, t) =>
        e && t
          ? Object.entries(t)
              .filter((r) => e.includes(r[1]))
              .map((r) => r[0])
          : [],
      wy = (e, t) => e && t && e.map((r) => t[r]),
      y9 = j.div(({ isInline: e }) =>
        e
          ? {
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-start',
              label: { display: 'inline-flex', marginRight: 15 },
            }
          : { label: { display: 'flex' } }
      ),
      b9 = j.span({}),
      E9 = j.label({
        lineHeight: '20px',
        alignItems: 'center',
        marginBottom: 8,
        '&:last-child': { marginBottom: 0 },
        input: { margin: 0, marginRight: 6 },
      }),
      iy = ({ name: e, options: t, value: r, onChange: n, isInline: a }) => {
        if (!t)
          return (
            ze.warn(`Checkbox with no options: ${e}`),
            g.createElement(g.Fragment, null, '-')
          );
        let o = Gi(r, t),
          [i, u] = te(o),
          s = (y) => {
            let A = y.target.value,
              m = [...i];
            m.includes(A) ? m.splice(m.indexOf(A), 1) : m.push(A),
              n(wy(m, t)),
              u(m);
          };
        he(() => {
          u(Gi(r, t));
        }, [r]);
        let p = _e(e);
        return g.createElement(
          y9,
          { isInline: a },
          Object.keys(t).map((y, A) => {
            let m = `${p}-${A}`;
            return g.createElement(
              E9,
              { key: m, htmlFor: m },
              g.createElement('input', {
                type: 'checkbox',
                id: m,
                name: m,
                value: y,
                onChange: s,
                checked: i?.includes(y),
              }),
              g.createElement(b9, null, y)
            );
          })
        );
      },
      A9 = j.div(({ isInline: e }) =>
        e
          ? {
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-start',
              label: { display: 'inline-flex', marginRight: 15 },
            }
          : { label: { display: 'flex' } }
      ),
      v9 = j.span({}),
      D9 = j.label({
        lineHeight: '20px',
        alignItems: 'center',
        marginBottom: 8,
        '&:last-child': { marginBottom: 0 },
        input: { margin: 0, marginRight: 6 },
      }),
      uy = ({ name: e, options: t, value: r, onChange: n, isInline: a }) => {
        if (!t)
          return (
            ze.warn(`Radio with no options: ${e}`),
            g.createElement(g.Fragment, null, '-')
          );
        let o = Fy(r, t),
          i = _e(e);
        return g.createElement(
          A9,
          { isInline: a },
          Object.keys(t).map((u, s) => {
            let p = `${i}-${s}`;
            return g.createElement(
              D9,
              { key: p, htmlFor: p },
              g.createElement('input', {
                type: 'radio',
                id: p,
                name: p,
                value: u,
                onChange: (y) => n(t[y.currentTarget.value]),
                checked: u === o,
              }),
              g.createElement(v9, null, u)
            );
          })
        );
      },
      C9 = {
        appearance: 'none',
        border: '0 none',
        boxSizing: 'inherit',
        display: ' block',
        margin: ' 0',
        background: 'transparent',
        padding: 0,
        fontSize: 'inherit',
        position: 'relative',
      },
      By = j.select(C9, ({ theme: e }) => ({
        boxSizing: 'border-box',
        position: 'relative',
        padding: '6px 10px',
        width: '100%',
        color: e.input.color || 'inherit',
        background: e.input.background,
        borderRadius: e.input.borderRadius,
        boxShadow: `${e.input.border} 0 0 0 1px inset`,
        fontSize: e.typography.size.s2 - 1,
        lineHeight: '20px',
        '&:focus': {
          boxShadow: `${e.color.secondary} 0 0 0 1px inset`,
          outline: 'none',
        },
        '&[disabled]': { cursor: 'not-allowed', opacity: 0.5 },
        '::placeholder': { color: e.textMutedColor },
        '&[multiple]': {
          overflow: 'auto',
          padding: 0,
          option: {
            display: 'block',
            padding: '6px 10px',
            marginLeft: 1,
            marginRight: 1,
          },
        },
      })),
      Ty = j.span(({ theme: e }) => ({
        display: 'inline-block',
        lineHeight: 'normal',
        overflow: 'hidden',
        position: 'relative',
        verticalAlign: 'top',
        width: '100%',
        svg: {
          position: 'absolute',
          zIndex: 1,
          pointerEvents: 'none',
          height: '12px',
          marginTop: '-6px',
          right: '12px',
          top: '50%',
          fill: e.textMutedColor,
          path: { fill: e.textMutedColor },
        },
      })),
      sy = 'Choose option...',
      x9 = ({ name: e, value: t, options: r, onChange: n }) => {
        let a = (u) => {
            n(r[u.currentTarget.value]);
          },
          o = Fy(t, r) || sy,
          i = _e(e);
        return g.createElement(
          Ty,
          null,
          g.createElement(Be, { icon: 'arrowdown' }),
          g.createElement(
            By,
            { id: i, value: o, onChange: a },
            g.createElement(
              'option',
              { key: 'no-selection', disabled: !0 },
              sy
            ),
            Object.keys(r).map((u) =>
              g.createElement('option', { key: u, value: u }, u)
            )
          )
        );
      },
      S9 = ({ name: e, value: t, options: r, onChange: n }) => {
        let a = (u) => {
            let s = Array.from(u.currentTarget.options)
              .filter((p) => p.selected)
              .map((p) => p.value);
            n(wy(s, r));
          },
          o = Gi(t, r),
          i = _e(e);
        return g.createElement(
          Ty,
          null,
          g.createElement(
            By,
            { id: i, multiple: !0, value: o, onChange: a },
            Object.keys(r).map((u) =>
              g.createElement('option', { key: u, value: u }, u)
            )
          )
        );
      },
      ly = (e) => {
        let { name: t, options: r } = e;
        return r
          ? e.isMulti
            ? g.createElement(S9, { ...e })
            : g.createElement(x9, { ...e })
          : (ze.warn(`Select with no options: ${t}`),
            g.createElement(g.Fragment, null, '-'));
      },
      F9 = (e, t) =>
        Array.isArray(e)
          ? e.reduce((r, n) => ((r[t?.[n] || String(n)] = n), r), {})
          : e,
      w9 = {
        check: iy,
        'inline-check': iy,
        radio: uy,
        'inline-radio': uy,
        select: ly,
        'multi-select': ly,
      },
      or = (e) => {
        let { type: t = 'select', labels: r, argType: n } = e,
          a = {
            ...e,
            options: n ? F9(n.options, r) : {},
            isInline: t.includes('inline'),
            isMulti: t.includes('multi'),
          },
          o = w9[t];
        if (o) return g.createElement(o, { ...a });
        throw new Error(`Unknown options type: ${t}`);
      },
      Yi = 'value',
      B9 = 'key',
      T9 = 'Error',
      _9 = 'Object',
      O9 = 'Array',
      R9 = 'String',
      P9 = 'Number',
      I9 = 'Boolean',
      k9 = 'Date',
      N9 = 'Null',
      L9 = 'Undefined',
      q9 = 'Function',
      j9 = 'Symbol',
      _y = 'ADD_DELTA_TYPE',
      Oy = 'REMOVE_DELTA_TYPE',
      Ry = 'UPDATE_DELTA_TYPE';
    function pt(e) {
      return e !== null &&
        typeof e == 'object' &&
        !Array.isArray(e) &&
        typeof e[Symbol.iterator] == 'function'
        ? 'Iterable'
        : Object.prototype.toString.call(e).slice(8, -1);
    }
    function Py(e, t) {
      let r = pt(e),
        n = pt(t);
      return (r === 'Function' || n === 'Function') && n !== r;
    }
    var Ji = class extends Ze {
      constructor(e) {
        super(e),
          (this.state = { inputRefKey: null, inputRefValue: null }),
          (this.refInputValue = this.refInputValue.bind(this)),
          (this.refInputKey = this.refInputKey.bind(this)),
          (this.onKeydown = this.onKeydown.bind(this)),
          (this.onSubmit = this.onSubmit.bind(this));
      }
      componentDidMount() {
        let { inputRefKey: e, inputRefValue: t } = this.state,
          { onlyValue: r } = this.props;
        e && typeof e.focus == 'function' && e.focus(),
          r && t && typeof t.focus == 'function' && t.focus(),
          document.addEventListener('keydown', this.onKeydown);
      }
      componentWillUnmount() {
        document.removeEventListener('keydown', this.onKeydown);
      }
      onKeydown(e) {
        e.altKey ||
          e.ctrlKey ||
          e.metaKey ||
          e.shiftKey ||
          e.repeat ||
          ((e.code === 'Enter' || e.key === 'Enter') &&
            (e.preventDefault(), this.onSubmit()),
          (e.code === 'Escape' || e.key === 'Escape') &&
            (e.preventDefault(), this.props.handleCancel()));
      }
      onSubmit() {
        let {
            handleAdd: e,
            onlyValue: t,
            onSubmitValueParser: r,
            keyPath: n,
            deep: a,
          } = this.props,
          { inputRefKey: o, inputRefValue: i } = this.state,
          u = {};
        if (!t) {
          if (!o.value) return;
          u.key = o.value;
        }
        (u.newValue = r(!1, n, a, u.key, i.value)), e(u);
      }
      refInputKey(e) {
        this.state.inputRefKey = e;
      }
      refInputValue(e) {
        this.state.inputRefValue = e;
      }
      render() {
        let {
            handleCancel: e,
            onlyValue: t,
            addButtonElement: r,
            cancelButtonElement: n,
            inputElementGenerator: a,
            keyPath: o,
            deep: i,
          } = this.props,
          u = fe(r, { onClick: this.onSubmit }),
          s = fe(n, { onClick: e }),
          p = a(Yi, o, i),
          y = fe(p, { placeholder: 'Value', ref: this.refInputValue }),
          A = null;
        if (!t) {
          let m = a(B9, o, i);
          A = fe(m, { placeholder: 'Key', ref: this.refInputKey });
        }
        return g.createElement(
          'span',
          { className: 'rejt-add-value-node' },
          A,
          y,
          s,
          u
        );
      }
    };
    Ji.defaultProps = {
      onlyValue: !1,
      addButtonElement: g.createElement('button', null, '+'),
      cancelButtonElement: g.createElement('button', null, 'c'),
    };
    var Iy = class extends Ze {
      constructor(e) {
        super(e);
        let t = [...e.keyPath, e.name];
        (this.state = {
          data: e.data,
          name: e.name,
          keyPath: t,
          deep: e.deep,
          nextDeep: e.deep + 1,
          collapsed: e.isCollapsed(t, e.deep, e.data),
          addFormVisible: !1,
        }),
          (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
          (this.handleRemoveItem = this.handleRemoveItem.bind(this)),
          (this.handleAddMode = this.handleAddMode.bind(this)),
          (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
          (this.handleAddValueCancel = this.handleAddValueCancel.bind(this)),
          (this.handleEditValue = this.handleEditValue.bind(this)),
          (this.onChildUpdate = this.onChildUpdate.bind(this)),
          (this.renderCollapsed = this.renderCollapsed.bind(this)),
          (this.renderNotCollapsed = this.renderNotCollapsed.bind(this));
      }
      static getDerivedStateFromProps(e, t) {
        return e.data !== t.data ? { data: e.data } : null;
      }
      onChildUpdate(e, t) {
        let { data: r, keyPath: n } = this.state;
        (r[e] = t), this.setState({ data: r });
        let { onUpdate: a } = this.props,
          o = n.length;
        a(n[o - 1], r);
      }
      handleAddMode() {
        this.setState({ addFormVisible: !0 });
      }
      handleCollapseMode() {
        this.setState((e) => ({ collapsed: !e.collapsed }));
      }
      handleRemoveItem(e) {
        return () => {
          let { beforeRemoveAction: t, logger: r } = this.props,
            { data: n, keyPath: a, nextDeep: o } = this.state,
            i = n[e];
          t(e, a, o, i)
            .then(() => {
              let u = { keyPath: a, deep: o, key: e, oldValue: i, type: Oy };
              n.splice(e, 1), this.setState({ data: n });
              let { onUpdate: s, onDeltaUpdate: p } = this.props;
              s(a[a.length - 1], n), p(u);
            })
            .catch(r.error);
        };
      }
      handleAddValueAdd({ newValue: e }) {
        let { data: t, keyPath: r, nextDeep: n } = this.state,
          { beforeAddAction: a, logger: o } = this.props;
        a(t.length, r, n, e)
          .then(() => {
            let i = [...t, e];
            this.setState({ data: i }), this.handleAddValueCancel();
            let { onUpdate: u, onDeltaUpdate: s } = this.props;
            u(r[r.length - 1], i),
              s({
                type: _y,
                keyPath: r,
                deep: n,
                key: i.length - 1,
                newValue: e,
              });
          })
          .catch(o.error);
      }
      handleAddValueCancel() {
        this.setState({ addFormVisible: !1 });
      }
      handleEditValue({ key: e, value: t }) {
        return new Promise((r, n) => {
          let { beforeUpdateAction: a } = this.props,
            { data: o, keyPath: i, nextDeep: u } = this.state,
            s = o[e];
          a(e, i, u, s, t)
            .then(() => {
              (o[e] = t), this.setState({ data: o });
              let { onUpdate: p, onDeltaUpdate: y } = this.props;
              p(i[i.length - 1], o),
                y({
                  type: Ry,
                  keyPath: i,
                  deep: u,
                  key: e,
                  newValue: t,
                  oldValue: s,
                }),
                r(void 0);
            })
            .catch(n);
        });
      }
      renderCollapsed() {
        let { name: e, data: t, keyPath: r, deep: n } = this.state,
          {
            handleRemove: a,
            readOnly: o,
            getStyle: i,
            dataType: u,
            minusMenuElement: s,
          } = this.props,
          { minus: p, collapsed: y } = i(e, t, r, n, u),
          A = o(e, t, r, n, u),
          m = fe(s, { onClick: a, className: 'rejt-minus-menu', style: p });
        return g.createElement(
          'span',
          { className: 'rejt-collapsed' },
          g.createElement(
            'span',
            {
              className: 'rejt-collapsed-text',
              style: y,
              onClick: this.handleCollapseMode,
            },
            '[...] ',
            t.length,
            ' ',
            t.length === 1 ? 'item' : 'items'
          ),
          !A && m
        );
      }
      renderNotCollapsed() {
        let {
            name: e,
            data: t,
            keyPath: r,
            deep: n,
            addFormVisible: a,
            nextDeep: o,
          } = this.state,
          {
            isCollapsed: i,
            handleRemove: u,
            onDeltaUpdate: s,
            readOnly: p,
            getStyle: y,
            dataType: A,
            addButtonElement: m,
            cancelButtonElement: h,
            editButtonElement: E,
            inputElementGenerator: b,
            textareaElementGenerator: x,
            minusMenuElement: F,
            plusMenuElement: B,
            beforeRemoveAction: I,
            beforeAddAction: q,
            beforeUpdateAction: w,
            logger: N,
            onSubmitValueParser: k,
          } = this.props,
          {
            minus: z,
            plus: V,
            delimiter: U,
            ul: ne,
            addForm: Q,
          } = y(e, t, r, n, A),
          Y = p(e, t, r, n, A),
          R = fe(B, {
            onClick: this.handleAddMode,
            className: 'rejt-plus-menu',
            style: V,
          }),
          _ = fe(F, { onClick: u, className: 'rejt-minus-menu', style: z }),
          M = !0,
          G = '[',
          J = ']';
        return g.createElement(
          'span',
          { className: 'rejt-not-collapsed' },
          g.createElement(
            'span',
            { className: 'rejt-not-collapsed-delimiter', style: U },
            G
          ),
          !a && R,
          g.createElement(
            'ul',
            { className: 'rejt-not-collapsed-list', style: ne },
            t.map((K, Z) =>
              g.createElement(pa, {
                key: Z,
                name: Z.toString(),
                data: K,
                keyPath: r,
                deep: o,
                isCollapsed: i,
                handleRemove: this.handleRemoveItem(Z),
                handleUpdateValue: this.handleEditValue,
                onUpdate: this.onChildUpdate,
                onDeltaUpdate: s,
                readOnly: p,
                getStyle: y,
                addButtonElement: m,
                cancelButtonElement: h,
                editButtonElement: E,
                inputElementGenerator: b,
                textareaElementGenerator: x,
                minusMenuElement: F,
                plusMenuElement: B,
                beforeRemoveAction: I,
                beforeAddAction: q,
                beforeUpdateAction: w,
                logger: N,
                onSubmitValueParser: k,
              })
            )
          ),
          !Y &&
            a &&
            g.createElement(
              'div',
              { className: 'rejt-add-form', style: Q },
              g.createElement(Ji, {
                handleAdd: this.handleAddValueAdd,
                handleCancel: this.handleAddValueCancel,
                onlyValue: M,
                addButtonElement: m,
                cancelButtonElement: h,
                inputElementGenerator: b,
                keyPath: r,
                deep: n,
                onSubmitValueParser: k,
              })
            ),
          g.createElement(
            'span',
            { className: 'rejt-not-collapsed-delimiter', style: U },
            J
          ),
          !Y && _
        );
      }
      render() {
        let {
            name: e,
            collapsed: t,
            data: r,
            keyPath: n,
            deep: a,
          } = this.state,
          { dataType: o, getStyle: i } = this.props,
          u = t ? this.renderCollapsed() : this.renderNotCollapsed(),
          s = i(e, r, n, a, o);
        return g.createElement(
          'div',
          { className: 'rejt-array-node' },
          g.createElement(
            'span',
            { onClick: this.handleCollapseMode },
            g.createElement(
              'span',
              { className: 'rejt-name', style: s.name },
              e,
              ' :',
              ' '
            )
          ),
          u
        );
      }
    };
    Iy.defaultProps = {
      keyPath: [],
      deep: 0,
      minusMenuElement: g.createElement('span', null, ' - '),
      plusMenuElement: g.createElement('span', null, ' + '),
    };
    var ky = class extends Ze {
      constructor(e) {
        super(e);
        let t = [...e.keyPath, e.name];
        (this.state = {
          value: e.value,
          name: e.name,
          keyPath: t,
          deep: e.deep,
          editEnabled: !1,
          inputRef: null,
        }),
          (this.handleEditMode = this.handleEditMode.bind(this)),
          (this.refInput = this.refInput.bind(this)),
          (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
          (this.handleEdit = this.handleEdit.bind(this)),
          (this.onKeydown = this.onKeydown.bind(this));
      }
      static getDerivedStateFromProps(e, t) {
        return e.value !== t.value ? { value: e.value } : null;
      }
      componentDidUpdate() {
        let {
            editEnabled: e,
            inputRef: t,
            name: r,
            value: n,
            keyPath: a,
            deep: o,
          } = this.state,
          { readOnly: i, dataType: u } = this.props,
          s = i(r, n, a, o, u);
        e && !s && typeof t.focus == 'function' && t.focus();
      }
      componentDidMount() {
        document.addEventListener('keydown', this.onKeydown);
      }
      componentWillUnmount() {
        document.removeEventListener('keydown', this.onKeydown);
      }
      onKeydown(e) {
        e.altKey ||
          e.ctrlKey ||
          e.metaKey ||
          e.shiftKey ||
          e.repeat ||
          ((e.code === 'Enter' || e.key === 'Enter') &&
            (e.preventDefault(), this.handleEdit()),
          (e.code === 'Escape' || e.key === 'Escape') &&
            (e.preventDefault(), this.handleCancelEdit()));
      }
      handleEdit() {
        let {
            handleUpdateValue: e,
            originalValue: t,
            logger: r,
            onSubmitValueParser: n,
            keyPath: a,
          } = this.props,
          { inputRef: o, name: i, deep: u } = this.state;
        if (!o) return;
        let s = n(!0, a, u, i, o.value);
        e({ value: s, key: i })
          .then(() => {
            Py(t, s) || this.handleCancelEdit();
          })
          .catch(r.error);
      }
      handleEditMode() {
        this.setState({ editEnabled: !0 });
      }
      refInput(e) {
        this.state.inputRef = e;
      }
      handleCancelEdit() {
        this.setState({ editEnabled: !1 });
      }
      render() {
        let {
            name: e,
            value: t,
            editEnabled: r,
            keyPath: n,
            deep: a,
          } = this.state,
          {
            handleRemove: o,
            originalValue: i,
            readOnly: u,
            dataType: s,
            getStyle: p,
            editButtonElement: y,
            cancelButtonElement: A,
            textareaElementGenerator: m,
            minusMenuElement: h,
            keyPath: E,
          } = this.props,
          b = p(e, i, n, a, s),
          x = null,
          F = null,
          B = u(e, i, n, a, s);
        if (r && !B) {
          let I = m(Yi, E, a, e, i, s),
            q = fe(y, { onClick: this.handleEdit }),
            w = fe(A, { onClick: this.handleCancelEdit }),
            N = fe(I, { ref: this.refInput, defaultValue: i });
          (x = g.createElement(
            'span',
            { className: 'rejt-edit-form', style: b.editForm },
            N,
            ' ',
            w,
            q
          )),
            (F = null);
        } else {
          x = g.createElement(
            'span',
            {
              className: 'rejt-value',
              style: b.value,
              onClick: B ? null : this.handleEditMode,
            },
            t
          );
          let I = fe(h, {
            onClick: o,
            className: 'rejt-minus-menu',
            style: b.minus,
          });
          F = B ? null : I;
        }
        return g.createElement(
          'li',
          { className: 'rejt-function-value-node', style: b.li },
          g.createElement(
            'span',
            { className: 'rejt-name', style: b.name },
            e,
            ' :',
            ' '
          ),
          x,
          F
        );
      }
    };
    ky.defaultProps = {
      keyPath: [],
      deep: 0,
      handleUpdateValue: () => {},
      editButtonElement: g.createElement('button', null, 'e'),
      cancelButtonElement: g.createElement('button', null, 'c'),
      minusMenuElement: g.createElement('span', null, ' - '),
    };
    var pa = class extends Ze {
      constructor(e) {
        super(e),
          (this.state = {
            data: e.data,
            name: e.name,
            keyPath: e.keyPath,
            deep: e.deep,
          });
      }
      static getDerivedStateFromProps(e, t) {
        return e.data !== t.data ? { data: e.data } : null;
      }
      render() {
        let { data: e, name: t, keyPath: r, deep: n } = this.state,
          {
            isCollapsed: a,
            handleRemove: o,
            handleUpdateValue: i,
            onUpdate: u,
            onDeltaUpdate: s,
            readOnly: p,
            getStyle: y,
            addButtonElement: A,
            cancelButtonElement: m,
            editButtonElement: h,
            inputElementGenerator: E,
            textareaElementGenerator: b,
            minusMenuElement: x,
            plusMenuElement: F,
            beforeRemoveAction: B,
            beforeAddAction: I,
            beforeUpdateAction: q,
            logger: w,
            onSubmitValueParser: N,
          } = this.props,
          k = () => !0,
          z = pt(e);
        switch (z) {
          case T9:
            return g.createElement(Wi, {
              data: e,
              name: t,
              isCollapsed: a,
              keyPath: r,
              deep: n,
              handleRemove: o,
              onUpdate: u,
              onDeltaUpdate: s,
              readOnly: k,
              dataType: z,
              getStyle: y,
              addButtonElement: A,
              cancelButtonElement: m,
              editButtonElement: h,
              inputElementGenerator: E,
              textareaElementGenerator: b,
              minusMenuElement: x,
              plusMenuElement: F,
              beforeRemoveAction: B,
              beforeAddAction: I,
              beforeUpdateAction: q,
              logger: w,
              onSubmitValueParser: N,
            });
          case _9:
            return g.createElement(Wi, {
              data: e,
              name: t,
              isCollapsed: a,
              keyPath: r,
              deep: n,
              handleRemove: o,
              onUpdate: u,
              onDeltaUpdate: s,
              readOnly: p,
              dataType: z,
              getStyle: y,
              addButtonElement: A,
              cancelButtonElement: m,
              editButtonElement: h,
              inputElementGenerator: E,
              textareaElementGenerator: b,
              minusMenuElement: x,
              plusMenuElement: F,
              beforeRemoveAction: B,
              beforeAddAction: I,
              beforeUpdateAction: q,
              logger: w,
              onSubmitValueParser: N,
            });
          case O9:
            return g.createElement(Iy, {
              data: e,
              name: t,
              isCollapsed: a,
              keyPath: r,
              deep: n,
              handleRemove: o,
              onUpdate: u,
              onDeltaUpdate: s,
              readOnly: p,
              dataType: z,
              getStyle: y,
              addButtonElement: A,
              cancelButtonElement: m,
              editButtonElement: h,
              inputElementGenerator: E,
              textareaElementGenerator: b,
              minusMenuElement: x,
              plusMenuElement: F,
              beforeRemoveAction: B,
              beforeAddAction: I,
              beforeUpdateAction: q,
              logger: w,
              onSubmitValueParser: N,
            });
          case R9:
            return g.createElement(dt, {
              name: t,
              value: `"${e}"`,
              originalValue: e,
              keyPath: r,
              deep: n,
              handleRemove: o,
              handleUpdateValue: i,
              readOnly: p,
              dataType: z,
              getStyle: y,
              cancelButtonElement: m,
              editButtonElement: h,
              inputElementGenerator: E,
              minusMenuElement: x,
              logger: w,
              onSubmitValueParser: N,
            });
          case P9:
            return g.createElement(dt, {
              name: t,
              value: e,
              originalValue: e,
              keyPath: r,
              deep: n,
              handleRemove: o,
              handleUpdateValue: i,
              readOnly: p,
              dataType: z,
              getStyle: y,
              cancelButtonElement: m,
              editButtonElement: h,
              inputElementGenerator: E,
              minusMenuElement: x,
              logger: w,
              onSubmitValueParser: N,
            });
          case I9:
            return g.createElement(dt, {
              name: t,
              value: e ? 'true' : 'false',
              originalValue: e,
              keyPath: r,
              deep: n,
              handleRemove: o,
              handleUpdateValue: i,
              readOnly: p,
              dataType: z,
              getStyle: y,
              cancelButtonElement: m,
              editButtonElement: h,
              inputElementGenerator: E,
              minusMenuElement: x,
              logger: w,
              onSubmitValueParser: N,
            });
          case k9:
            return g.createElement(dt, {
              name: t,
              value: e.toISOString(),
              originalValue: e,
              keyPath: r,
              deep: n,
              handleRemove: o,
              handleUpdateValue: i,
              readOnly: k,
              dataType: z,
              getStyle: y,
              cancelButtonElement: m,
              editButtonElement: h,
              inputElementGenerator: E,
              minusMenuElement: x,
              logger: w,
              onSubmitValueParser: N,
            });
          case N9:
            return g.createElement(dt, {
              name: t,
              value: 'null',
              originalValue: 'null',
              keyPath: r,
              deep: n,
              handleRemove: o,
              handleUpdateValue: i,
              readOnly: p,
              dataType: z,
              getStyle: y,
              cancelButtonElement: m,
              editButtonElement: h,
              inputElementGenerator: E,
              minusMenuElement: x,
              logger: w,
              onSubmitValueParser: N,
            });
          case L9:
            return g.createElement(dt, {
              name: t,
              value: 'undefined',
              originalValue: 'undefined',
              keyPath: r,
              deep: n,
              handleRemove: o,
              handleUpdateValue: i,
              readOnly: p,
              dataType: z,
              getStyle: y,
              cancelButtonElement: m,
              editButtonElement: h,
              inputElementGenerator: E,
              minusMenuElement: x,
              logger: w,
              onSubmitValueParser: N,
            });
          case q9:
            return g.createElement(ky, {
              name: t,
              value: e.toString(),
              originalValue: e,
              keyPath: r,
              deep: n,
              handleRemove: o,
              handleUpdateValue: i,
              readOnly: p,
              dataType: z,
              getStyle: y,
              cancelButtonElement: m,
              editButtonElement: h,
              textareaElementGenerator: b,
              minusMenuElement: x,
              logger: w,
              onSubmitValueParser: N,
            });
          case j9:
            return g.createElement(dt, {
              name: t,
              value: e.toString(),
              originalValue: e,
              keyPath: r,
              deep: n,
              handleRemove: o,
              handleUpdateValue: i,
              readOnly: k,
              dataType: z,
              getStyle: y,
              cancelButtonElement: m,
              editButtonElement: h,
              inputElementGenerator: E,
              minusMenuElement: x,
              logger: w,
              onSubmitValueParser: N,
            });
          default:
            return null;
        }
      }
    };
    pa.defaultProps = { keyPath: [], deep: 0 };
    var Wi = class extends Ze {
      constructor(e) {
        super(e);
        let t = e.deep === -1 ? [] : [...e.keyPath, e.name];
        (this.state = {
          name: e.name,
          data: e.data,
          keyPath: t,
          deep: e.deep,
          nextDeep: e.deep + 1,
          collapsed: e.isCollapsed(t, e.deep, e.data),
          addFormVisible: !1,
        }),
          (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
          (this.handleRemoveValue = this.handleRemoveValue.bind(this)),
          (this.handleAddMode = this.handleAddMode.bind(this)),
          (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
          (this.handleAddValueCancel = this.handleAddValueCancel.bind(this)),
          (this.handleEditValue = this.handleEditValue.bind(this)),
          (this.onChildUpdate = this.onChildUpdate.bind(this)),
          (this.renderCollapsed = this.renderCollapsed.bind(this)),
          (this.renderNotCollapsed = this.renderNotCollapsed.bind(this));
      }
      static getDerivedStateFromProps(e, t) {
        return e.data !== t.data ? { data: e.data } : null;
      }
      onChildUpdate(e, t) {
        let { data: r, keyPath: n } = this.state;
        (r[e] = t), this.setState({ data: r });
        let { onUpdate: a } = this.props,
          o = n.length;
        a(n[o - 1], r);
      }
      handleAddMode() {
        this.setState({ addFormVisible: !0 });
      }
      handleAddValueCancel() {
        this.setState({ addFormVisible: !1 });
      }
      handleAddValueAdd({ key: e, newValue: t }) {
        let { data: r, keyPath: n, nextDeep: a } = this.state,
          { beforeAddAction: o, logger: i } = this.props;
        o(e, n, a, t)
          .then(() => {
            (r[e] = t), this.setState({ data: r }), this.handleAddValueCancel();
            let { onUpdate: u, onDeltaUpdate: s } = this.props;
            u(n[n.length - 1], r),
              s({ type: _y, keyPath: n, deep: a, key: e, newValue: t });
          })
          .catch(i.error);
      }
      handleRemoveValue(e) {
        return () => {
          let { beforeRemoveAction: t, logger: r } = this.props,
            { data: n, keyPath: a, nextDeep: o } = this.state,
            i = n[e];
          t(e, a, o, i)
            .then(() => {
              let u = { keyPath: a, deep: o, key: e, oldValue: i, type: Oy };
              delete n[e], this.setState({ data: n });
              let { onUpdate: s, onDeltaUpdate: p } = this.props;
              s(a[a.length - 1], n), p(u);
            })
            .catch(r.error);
        };
      }
      handleCollapseMode() {
        this.setState((e) => ({ collapsed: !e.collapsed }));
      }
      handleEditValue({ key: e, value: t }) {
        return new Promise((r, n) => {
          let { beforeUpdateAction: a } = this.props,
            { data: o, keyPath: i, nextDeep: u } = this.state,
            s = o[e];
          a(e, i, u, s, t)
            .then(() => {
              (o[e] = t), this.setState({ data: o });
              let { onUpdate: p, onDeltaUpdate: y } = this.props;
              p(i[i.length - 1], o),
                y({
                  type: Ry,
                  keyPath: i,
                  deep: u,
                  key: e,
                  newValue: t,
                  oldValue: s,
                }),
                r();
            })
            .catch(n);
        });
      }
      renderCollapsed() {
        let { name: e, keyPath: t, deep: r, data: n } = this.state,
          {
            handleRemove: a,
            readOnly: o,
            dataType: i,
            getStyle: u,
            minusMenuElement: s,
          } = this.props,
          { minus: p, collapsed: y } = u(e, n, t, r, i),
          A = Object.getOwnPropertyNames(n),
          m = o(e, n, t, r, i),
          h = fe(s, { onClick: a, className: 'rejt-minus-menu', style: p });
        return g.createElement(
          'span',
          { className: 'rejt-collapsed' },
          g.createElement(
            'span',
            {
              className: 'rejt-collapsed-text',
              style: y,
              onClick: this.handleCollapseMode,
            },
            '{...}',
            ' ',
            A.length,
            ' ',
            A.length === 1 ? 'key' : 'keys'
          ),
          !m && h
        );
      }
      renderNotCollapsed() {
        let {
            name: e,
            data: t,
            keyPath: r,
            deep: n,
            nextDeep: a,
            addFormVisible: o,
          } = this.state,
          {
            isCollapsed: i,
            handleRemove: u,
            onDeltaUpdate: s,
            readOnly: p,
            getStyle: y,
            dataType: A,
            addButtonElement: m,
            cancelButtonElement: h,
            editButtonElement: E,
            inputElementGenerator: b,
            textareaElementGenerator: x,
            minusMenuElement: F,
            plusMenuElement: B,
            beforeRemoveAction: I,
            beforeAddAction: q,
            beforeUpdateAction: w,
            logger: N,
            onSubmitValueParser: k,
          } = this.props,
          {
            minus: z,
            plus: V,
            addForm: U,
            ul: ne,
            delimiter: Q,
          } = y(e, t, r, n, A),
          Y = Object.getOwnPropertyNames(t),
          R = p(e, t, r, n, A),
          _ = fe(B, {
            onClick: this.handleAddMode,
            className: 'rejt-plus-menu',
            style: V,
          }),
          M = fe(F, { onClick: u, className: 'rejt-minus-menu', style: z }),
          G = Y.map((Z) =>
            g.createElement(pa, {
              key: Z,
              name: Z,
              data: t[Z],
              keyPath: r,
              deep: a,
              isCollapsed: i,
              handleRemove: this.handleRemoveValue(Z),
              handleUpdateValue: this.handleEditValue,
              onUpdate: this.onChildUpdate,
              onDeltaUpdate: s,
              readOnly: p,
              getStyle: y,
              addButtonElement: m,
              cancelButtonElement: h,
              editButtonElement: E,
              inputElementGenerator: b,
              textareaElementGenerator: x,
              minusMenuElement: F,
              plusMenuElement: B,
              beforeRemoveAction: I,
              beforeAddAction: q,
              beforeUpdateAction: w,
              logger: N,
              onSubmitValueParser: k,
            })
          ),
          J = '{',
          K = '}';
        return g.createElement(
          'span',
          { className: 'rejt-not-collapsed' },
          g.createElement(
            'span',
            { className: 'rejt-not-collapsed-delimiter', style: Q },
            J
          ),
          !R && _,
          g.createElement(
            'ul',
            { className: 'rejt-not-collapsed-list', style: ne },
            G
          ),
          !R &&
            o &&
            g.createElement(
              'div',
              { className: 'rejt-add-form', style: U },
              g.createElement(Ji, {
                handleAdd: this.handleAddValueAdd,
                handleCancel: this.handleAddValueCancel,
                addButtonElement: m,
                cancelButtonElement: h,
                inputElementGenerator: b,
                keyPath: r,
                deep: n,
                onSubmitValueParser: k,
              })
            ),
          g.createElement(
            'span',
            { className: 'rejt-not-collapsed-delimiter', style: Q },
            K
          ),
          !R && M
        );
      }
      render() {
        let {
            name: e,
            collapsed: t,
            data: r,
            keyPath: n,
            deep: a,
          } = this.state,
          { getStyle: o, dataType: i } = this.props,
          u = t ? this.renderCollapsed() : this.renderNotCollapsed(),
          s = o(e, r, n, a, i);
        return g.createElement(
          'div',
          { className: 'rejt-object-node' },
          g.createElement(
            'span',
            { onClick: this.handleCollapseMode },
            g.createElement(
              'span',
              { className: 'rejt-name', style: s.name },
              e,
              ' :',
              ' '
            )
          ),
          u
        );
      }
    };
    Wi.defaultProps = {
      keyPath: [],
      deep: 0,
      minusMenuElement: g.createElement('span', null, ' - '),
      plusMenuElement: g.createElement('span', null, ' + '),
    };
    var dt = class extends Ze {
      constructor(e) {
        super(e);
        let t = [...e.keyPath, e.name];
        (this.state = {
          value: e.value,
          name: e.name,
          keyPath: t,
          deep: e.deep,
          editEnabled: !1,
          inputRef: null,
        }),
          (this.handleEditMode = this.handleEditMode.bind(this)),
          (this.refInput = this.refInput.bind(this)),
          (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
          (this.handleEdit = this.handleEdit.bind(this)),
          (this.onKeydown = this.onKeydown.bind(this));
      }
      static getDerivedStateFromProps(e, t) {
        return e.value !== t.value ? { value: e.value } : null;
      }
      componentDidUpdate() {
        let {
            editEnabled: e,
            inputRef: t,
            name: r,
            value: n,
            keyPath: a,
            deep: o,
          } = this.state,
          { readOnly: i, dataType: u } = this.props,
          s = i(r, n, a, o, u);
        e && !s && typeof t.focus == 'function' && t.focus();
      }
      componentDidMount() {
        document.addEventListener('keydown', this.onKeydown);
      }
      componentWillUnmount() {
        document.removeEventListener('keydown', this.onKeydown);
      }
      onKeydown(e) {
        e.altKey ||
          e.ctrlKey ||
          e.metaKey ||
          e.shiftKey ||
          e.repeat ||
          ((e.code === 'Enter' || e.key === 'Enter') &&
            (e.preventDefault(), this.handleEdit()),
          (e.code === 'Escape' || e.key === 'Escape') &&
            (e.preventDefault(), this.handleCancelEdit()));
      }
      handleEdit() {
        let {
            handleUpdateValue: e,
            originalValue: t,
            logger: r,
            onSubmitValueParser: n,
            keyPath: a,
          } = this.props,
          { inputRef: o, name: i, deep: u } = this.state;
        if (!o) return;
        let s = n(!0, a, u, i, o.value);
        e({ value: s, key: i })
          .then(() => {
            Py(t, s) || this.handleCancelEdit();
          })
          .catch(r.error);
      }
      handleEditMode() {
        this.setState({ editEnabled: !0 });
      }
      refInput(e) {
        this.state.inputRef = e;
      }
      handleCancelEdit() {
        this.setState({ editEnabled: !1 });
      }
      render() {
        let {
            name: e,
            value: t,
            editEnabled: r,
            keyPath: n,
            deep: a,
          } = this.state,
          {
            handleRemove: o,
            originalValue: i,
            readOnly: u,
            dataType: s,
            getStyle: p,
            editButtonElement: y,
            cancelButtonElement: A,
            inputElementGenerator: m,
            minusMenuElement: h,
            keyPath: E,
          } = this.props,
          b = p(e, i, n, a, s),
          x = u(e, i, n, a, s),
          F = r && !x,
          B = m(Yi, E, a, e, i, s),
          I = fe(y, { onClick: this.handleEdit }),
          q = fe(A, { onClick: this.handleCancelEdit }),
          w = fe(B, { ref: this.refInput, defaultValue: JSON.stringify(i) }),
          N = fe(h, {
            onClick: o,
            className: 'rejt-minus-menu',
            style: b.minus,
          });
        return g.createElement(
          'li',
          { className: 'rejt-value-node', style: b.li },
          g.createElement(
            'span',
            { className: 'rejt-name', style: b.name },
            e,
            ' : '
          ),
          F
            ? g.createElement(
                'span',
                { className: 'rejt-edit-form', style: b.editForm },
                w,
                ' ',
                q,
                I
              )
            : g.createElement(
                'span',
                {
                  className: 'rejt-value',
                  style: b.value,
                  onClick: x ? null : this.handleEditMode,
                },
                String(t)
              ),
          !x && !F && N
        );
      }
    };
    dt.defaultProps = {
      keyPath: [],
      deep: 0,
      handleUpdateValue: () => Promise.resolve(),
      editButtonElement: g.createElement('button', null, 'e'),
      cancelButtonElement: g.createElement('button', null, 'c'),
      minusMenuElement: g.createElement('span', null, ' - '),
    };
    var M9 = {
        minus: { color: 'red' },
        plus: { color: 'green' },
        collapsed: { color: 'grey' },
        delimiter: {},
        ul: { padding: '0px', margin: '0 0 0 25px', listStyle: 'none' },
        name: { color: '#2287CD' },
        addForm: {},
      },
      $9 = {
        minus: { color: 'red' },
        plus: { color: 'green' },
        collapsed: { color: 'grey' },
        delimiter: {},
        ul: { padding: '0px', margin: '0 0 0 25px', listStyle: 'none' },
        name: { color: '#2287CD' },
        addForm: {},
      },
      U9 = {
        minus: { color: 'red' },
        editForm: {},
        value: { color: '#7bba3d' },
        li: { minHeight: '22px', lineHeight: '22px', outline: '0px' },
        name: { color: '#2287CD' },
      };
    function z9(e) {
      let t = e;
      if (t.indexOf('function') === 0) return (0, eval)(`(${t})`);
      try {
        t = JSON.parse(e);
      } catch {}
      return t;
    }
    var Ny = class extends Ze {
      constructor(e) {
        super(e),
          (this.state = { data: e.data, rootName: e.rootName }),
          (this.onUpdate = this.onUpdate.bind(this)),
          (this.removeRoot = this.removeRoot.bind(this));
      }
      static getDerivedStateFromProps(e, t) {
        return e.data !== t.data || e.rootName !== t.rootName
          ? { data: e.data, rootName: e.rootName }
          : null;
      }
      onUpdate(e, t) {
        this.setState({ data: t }), this.props.onFullyUpdate(t);
      }
      removeRoot() {
        this.onUpdate(null, null);
      }
      render() {
        let { data: e, rootName: t } = this.state,
          {
            isCollapsed: r,
            onDeltaUpdate: n,
            readOnly: a,
            getStyle: o,
            addButtonElement: i,
            cancelButtonElement: u,
            editButtonElement: s,
            inputElement: p,
            textareaElement: y,
            minusMenuElement: A,
            plusMenuElement: m,
            beforeRemoveAction: h,
            beforeAddAction: E,
            beforeUpdateAction: b,
            logger: x,
            onSubmitValueParser: F,
            fallback: B = null,
          } = this.props,
          I = pt(e),
          q = a;
        pt(a) === 'Boolean' && (q = () => a);
        let w = p;
        p && pt(p) !== 'Function' && (w = () => p);
        let N = y;
        return (
          y && pt(y) !== 'Function' && (N = () => y),
          I === 'Object' || I === 'Array'
            ? g.createElement(
                'div',
                { className: 'rejt-tree' },
                g.createElement(pa, {
                  data: e,
                  name: t,
                  deep: -1,
                  isCollapsed: r,
                  onUpdate: this.onUpdate,
                  onDeltaUpdate: n,
                  readOnly: q,
                  getStyle: o,
                  addButtonElement: i,
                  cancelButtonElement: u,
                  editButtonElement: s,
                  inputElementGenerator: w,
                  textareaElementGenerator: N,
                  minusMenuElement: A,
                  plusMenuElement: m,
                  handleRemove: this.removeRoot,
                  beforeRemoveAction: h,
                  beforeAddAction: E,
                  beforeUpdateAction: b,
                  logger: x,
                  onSubmitValueParser: F,
                })
              )
            : B
        );
      }
    };
    Ny.defaultProps = {
      rootName: 'root',
      isCollapsed: (e, t) => t !== -1,
      getStyle: (e, t, r, n, a) => {
        switch (a) {
          case 'Object':
          case 'Error':
            return M9;
          case 'Array':
            return $9;
          default:
            return U9;
        }
      },
      readOnly: () => !1,
      onFullyUpdate: () => {},
      onDeltaUpdate: () => {},
      beforeRemoveAction: () => Promise.resolve(),
      beforeAddAction: () => Promise.resolve(),
      beforeUpdateAction: () => Promise.resolve(),
      logger: { error: () => {} },
      onSubmitValueParser: (e, t, r, n, a) => z9(a),
      inputElement: () => g.createElement('input', null),
      textareaElement: () => g.createElement('textarea', null),
      fallback: null,
    };
    var { window: H9 } = ie,
      G9 = j.div(({ theme: e }) => ({
        position: 'relative',
        display: 'flex',
        '.rejt-tree': { marginLeft: '1rem', fontSize: '13px' },
        '.rejt-value-node, .rejt-object-node > .rejt-collapsed, .rejt-array-node > .rejt-collapsed, .rejt-object-node > .rejt-not-collapsed, .rejt-array-node > .rejt-not-collapsed':
          { '& > svg': { opacity: 0, transition: 'opacity 0.2s' } },
        '.rejt-value-node:hover, .rejt-object-node:hover > .rejt-collapsed, .rejt-array-node:hover > .rejt-collapsed, .rejt-object-node:hover > .rejt-not-collapsed, .rejt-array-node:hover > .rejt-not-collapsed':
          { '& > svg': { opacity: 1 } },
        '.rejt-edit-form button': { display: 'none' },
        '.rejt-add-form': { marginLeft: 10 },
        '.rejt-add-value-node': {
          display: 'inline-flex',
          alignItems: 'center',
        },
        '.rejt-name': { lineHeight: '22px' },
        '.rejt-not-collapsed-delimiter': { lineHeight: '22px' },
        '.rejt-plus-menu': { marginLeft: 5 },
        '.rejt-object-node > span > *, .rejt-array-node > span > *': {
          position: 'relative',
          zIndex: 2,
        },
        '.rejt-object-node, .rejt-array-node': { position: 'relative' },
        '.rejt-object-node > span:first-of-type::after, .rejt-array-node > span:first-of-type::after, .rejt-collapsed::before, .rejt-not-collapsed::before':
          {
            content: '""',
            position: 'absolute',
            top: 0,
            display: 'block',
            width: '100%',
            marginLeft: '-1rem',
            padding: '0 4px 0 1rem',
            height: 22,
          },
        '.rejt-collapsed::before, .rejt-not-collapsed::before': {
          zIndex: 1,
          background: 'transparent',
          borderRadius: 4,
          transition: 'background 0.2s',
          pointerEvents: 'none',
          opacity: 0.1,
        },
        '.rejt-object-node:hover, .rejt-array-node:hover': {
          '& > .rejt-collapsed::before, & > .rejt-not-collapsed::before': {
            background: e.color.secondary,
          },
        },
        '.rejt-collapsed::after, .rejt-not-collapsed::after': {
          content: '""',
          position: 'absolute',
          display: 'inline-block',
          pointerEvents: 'none',
          width: 0,
          height: 0,
        },
        '.rejt-collapsed::after': {
          left: -8,
          top: 8,
          borderTop: '3px solid transparent',
          borderBottom: '3px solid transparent',
          borderLeft: '3px solid rgba(153,153,153,0.6)',
        },
        '.rejt-not-collapsed::after': {
          left: -10,
          top: 10,
          borderTop: '3px solid rgba(153,153,153,0.6)',
          borderLeft: '3px solid transparent',
          borderRight: '3px solid transparent',
        },
        '.rejt-value': {
          display: 'inline-block',
          border: '1px solid transparent',
          borderRadius: 4,
          margin: '1px 0',
          padding: '0 4px',
          cursor: 'text',
          color: e.color.defaultText,
        },
        '.rejt-value-node:hover > .rejt-value': {
          background: e.color.lighter,
          borderColor: e.appBorderColor,
        },
      })),
      Ui = j.button(({ theme: e, primary: t }) => ({
        border: 0,
        height: 20,
        margin: 1,
        borderRadius: 4,
        background: t ? e.color.secondary : 'transparent',
        color: t ? e.color.lightest : e.color.dark,
        fontWeight: t ? 'bold' : 'normal',
        cursor: 'pointer',
        order: t ? 'initial' : 9,
      })),
      cy = j(Be)(({ theme: e, icon: t, disabled: r }) => ({
        display: 'inline-block',
        verticalAlign: 'middle',
        width: 15,
        height: 15,
        padding: 3,
        marginLeft: 5,
        cursor: r ? 'not-allowed' : 'pointer',
        color: e.textMutedColor,
        '&:hover': r
          ? {}
          : { color: t === 'subtract' ? e.color.negative : e.color.ancillary },
        'svg + &': { marginLeft: 0 },
      })),
      dy = j.input(({ theme: e, placeholder: t }) => ({
        outline: 0,
        margin: t ? 1 : '1px 0',
        padding: '3px 4px',
        color: e.color.defaultText,
        background: e.background.app,
        border: `1px solid ${e.appBorderColor}`,
        borderRadius: 4,
        lineHeight: '14px',
        width: t === 'Key' ? 80 : 120,
        '&:focus': { border: `1px solid ${e.color.secondary}` },
      })),
      W9 = j(ft)(({ theme: e }) => ({
        position: 'absolute',
        zIndex: 2,
        top: 2,
        right: 2,
        height: 21,
        padding: '0 3px',
        background: e.background.bar,
        border: `1px solid ${e.appBorderColor}`,
        borderRadius: 3,
        color: e.textMutedColor,
        fontSize: '9px',
        fontWeight: 'bold',
        textDecoration: 'none',
        span: { marginLeft: 3, marginTop: 1 },
      })),
      V9 = j(Te.Textarea)(({ theme: e }) => ({
        flex: 1,
        padding: '7px 6px',
        fontFamily: e.typography.fonts.mono,
        fontSize: '12px',
        lineHeight: '18px',
        '&::placeholder': {
          fontFamily: e.typography.fonts.base,
          fontSize: '13px',
        },
        '&:placeholder-shown': { padding: '7px 10px' },
      })),
      K9 = {
        bubbles: !0,
        cancelable: !0,
        key: 'Enter',
        code: 'Enter',
        keyCode: 13,
      },
      Y9 = (e) => {
        e.currentTarget.dispatchEvent(new H9.KeyboardEvent('keydown', K9));
      },
      J9 = (e) => {
        e.currentTarget.select();
      },
      X9 = (e) => () => ({
        name: { color: e.color.secondary },
        collapsed: { color: e.color.dark },
        ul: { listStyle: 'none', margin: '0 0 0 1rem', padding: 0 },
        li: { outline: 0 },
      }),
      py = ({ name: e, value: t, onChange: r }) => {
        let n = Au(),
          a = et(() => t && (0, Ay.default)(t), [t]),
          o = a != null,
          [i, u] = te(!o),
          [s, p] = te(null),
          y = me(
            (x) => {
              try {
                x && r(JSON.parse(x)), p(void 0);
              } catch (F) {
                p(F);
              }
            },
            [r]
          ),
          [A, m] = te(!1),
          h = me(() => {
            r({}), m(!0);
          }, [m]),
          E = we(null);
        if (
          (he(() => {
            A && E.current && E.current.select();
          }, [A]),
          !o)
        )
          return g.createElement(
            Te.Button,
            { id: lr(e), onClick: h },
            'Set object'
          );
        let b = g.createElement(V9, {
          ref: E,
          id: _e(e),
          name: e,
          defaultValue: t === null ? '' : JSON.stringify(t, null, 2),
          onBlur: (x) => y(x.target.value),
          placeholder: 'Edit JSON string...',
          autoFocus: A,
          valid: s ? 'error' : null,
        });
        return g.createElement(
          G9,
          null,
          ['Object', 'Array'].includes(pt(a)) &&
            g.createElement(
              W9,
              {
                href: '#',
                onClick: (x) => {
                  x.preventDefault(), u((F) => !F);
                },
              },
              g.createElement(Be, { icon: i ? 'eyeclose' : 'eye' }),
              g.createElement('span', null, 'RAW')
            ),
          i
            ? b
            : g.createElement(Ny, {
                data: a,
                rootName: e,
                onFullyUpdate: r,
                getStyle: X9(n),
                cancelButtonElement: g.createElement(
                  Ui,
                  { type: 'button' },
                  'Cancel'
                ),
                editButtonElement: g.createElement(
                  Ui,
                  { type: 'submit' },
                  'Save'
                ),
                addButtonElement: g.createElement(
                  Ui,
                  { type: 'submit', primary: !0 },
                  'Save'
                ),
                plusMenuElement: g.createElement(cy, { icon: 'add' }),
                minusMenuElement: g.createElement(cy, { icon: 'subtract' }),
                inputElement: (x, F, B, I) =>
                  I
                    ? g.createElement(dy, { onFocus: J9, onBlur: Y9 })
                    : g.createElement(dy, null),
                fallback: b,
              })
        );
      },
      Q9 = j.input(({ theme: e, min: t, max: r, value: n }) => ({
        '&': {
          width: '100%',
          backgroundColor: 'transparent',
          appearance: 'none',
        },
        '&::-webkit-slider-runnable-track': {
          background:
            e.base === 'light'
              ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${Me(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${Me(0.02, e.input.background)} 100%)`
              : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${nt(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${nt(0.02, e.input.background)} 100%)`,
          boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
          borderRadius: 6,
          width: '100%',
          height: 6,
          cursor: 'pointer',
        },
        '&::-webkit-slider-thumb': {
          marginTop: '-6px',
          width: 16,
          height: 16,
          border: `1px solid ${je(e.appBorderColor, 0.2)}`,
          borderRadius: '50px',
          boxShadow: `0 1px 3px 0px ${je(e.appBorderColor, 0.2)}`,
          cursor: 'grab',
          appearance: 'none',
          background: `${e.input.background}`,
          transition: 'all 150ms ease-out',
          '&:hover': {
            background: `${Me(0.05, e.input.background)}`,
            transform: 'scale3d(1.1, 1.1, 1.1) translateY(-1px)',
            transition: 'all 50ms ease-out',
          },
          '&:active': {
            background: `${e.input.background}`,
            transform: 'scale3d(1, 1, 1) translateY(0px)',
            cursor: 'grabbing',
          },
        },
        '&:focus': {
          outline: 'none',
          '&::-webkit-slider-runnable-track': {
            borderColor: je(e.color.secondary, 0.4),
          },
          '&::-webkit-slider-thumb': {
            borderColor: e.color.secondary,
            boxShadow: `0 0px 5px 0px ${e.color.secondary}`,
          },
        },
        '&::-moz-range-track': {
          background:
            e.base === 'light'
              ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${Me(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${Me(0.02, e.input.background)} 100%)`
              : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${nt(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${nt(0.02, e.input.background)} 100%)`,
          boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
          borderRadius: 6,
          width: '100%',
          height: 6,
          cursor: 'pointer',
          outline: 'none',
        },
        '&::-moz-range-thumb': {
          width: 16,
          height: 16,
          border: `1px solid ${je(e.appBorderColor, 0.2)}`,
          borderRadius: '50px',
          boxShadow: `0 1px 3px 0px ${je(e.appBorderColor, 0.2)}`,
          cursor: 'grab',
          background: `${e.input.background}`,
          transition: 'all 150ms ease-out',
          '&:hover': {
            background: `${Me(0.05, e.input.background)}`,
            transform: 'scale3d(1.1, 1.1, 1.1) translateY(-1px)',
            transition: 'all 50ms ease-out',
          },
          '&:active': {
            background: `${e.input.background}`,
            transform: 'scale3d(1, 1, 1) translateY(0px)',
            cursor: 'grabbing',
          },
        },
        '&::-ms-track': {
          background:
            e.base === 'light'
              ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${Me(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${Me(0.02, e.input.background)} 100%)`
              : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${nt(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${nt(0.02, e.input.background)} 100%)`,
          boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
          color: 'transparent',
          width: '100%',
          height: '6px',
          cursor: 'pointer',
        },
        '&::-ms-fill-lower': { borderRadius: 6 },
        '&::-ms-fill-upper': { borderRadius: 6 },
        '&::-ms-thumb': {
          width: 16,
          height: 16,
          background: `${e.input.background}`,
          border: `1px solid ${je(e.appBorderColor, 0.2)}`,
          borderRadius: 50,
          cursor: 'grab',
          marginTop: 0,
        },
        '@supports (-ms-ime-align:auto)': {
          'input[type=range]': { margin: '0' },
        },
      })),
      Ly = j.span({
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 12,
        whiteSpace: 'nowrap',
        fontFeatureSettings: 'tnum',
        fontVariantNumeric: 'tabular-nums',
      }),
      Z9 = j(Ly)(({ numberOFDecimalsPlaces: e, max: t }) => ({
        width: `${e + t.toString().length * 2 + 3}ch`,
        textAlign: 'right',
        flexShrink: 0,
      })),
      eP = j.div({ display: 'flex', alignItems: 'center', width: '100%' });
    function tP(e) {
      let t = e.toString().match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
      return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0;
    }
    var rP = ({
        name: e,
        value: t,
        onChange: r,
        min: n = 0,
        max: a = 100,
        step: o = 1,
        onBlur: i,
        onFocus: u,
      }) => {
        let s = (A) => {
            r(m9(A.target.value));
          },
          p = t !== void 0,
          y = et(() => tP(o), [o]);
        return g.createElement(
          eP,
          null,
          g.createElement(Ly, null, n),
          g.createElement(Q9, {
            id: _e(e),
            type: 'range',
            onChange: s,
            name: e,
            value: t,
            min: n,
            max: a,
            step: o,
            onFocus: u,
            onBlur: i,
          }),
          g.createElement(
            Z9,
            { numberOFDecimalsPlaces: y, max: a },
            p ? t.toFixed(y) : '--',
            ' / ',
            a
          )
        );
      },
      nP = j.label({ display: 'flex' }),
      aP = j.div(({ isMaxed: e }) => ({
        marginLeft: '0.75rem',
        paddingTop: '0.35rem',
        color: e ? 'red' : void 0,
      })),
      oP = ({
        name: e,
        value: t,
        onChange: r,
        onFocus: n,
        onBlur: a,
        maxLength: o,
      }) => {
        let i = (A) => {
            r(A.target.value);
          },
          [u, s] = te(!1),
          p = me(() => {
            r(''), s(!0);
          }, [s]);
        if (t === void 0)
          return g.createElement(
            Te.Button,
            { id: lr(e), onClick: p },
            'Set string'
          );
        let y = typeof t == 'string';
        return g.createElement(
          nP,
          null,
          g.createElement(Te.Textarea, {
            id: _e(e),
            maxLength: o,
            onChange: i,
            size: 'flex',
            placeholder: 'Edit string...',
            autoFocus: u,
            valid: y ? null : 'error',
            name: e,
            value: y ? t : '',
            onFocus: n,
            onBlur: a,
          }),
          o &&
            g.createElement(
              aP,
              { isMaxed: t?.length === o },
              t?.length ?? 0,
              ' / ',
              o
            )
        );
      },
      iP = j(Te.Input)({ padding: 10 });
    function uP(e) {
      e.forEach((t) => {
        t.startsWith('blob:') && URL.revokeObjectURL(t);
      });
    }
    var sP = ({ onChange: e, name: t, accept: r = 'image/*', value: n }) => {
        let a = we(null);
        function o(i) {
          if (!i.target.files) return;
          let u = Array.from(i.target.files).map((s) => URL.createObjectURL(s));
          e(u), uP(n);
        }
        return (
          he(() => {
            n == null && a.current && (a.current.value = null);
          }, [n, t]),
          g.createElement(iP, {
            ref: a,
            id: _e(t),
            type: 'file',
            name: t,
            multiple: !0,
            onChange: o,
            accept: r,
            size: 'flex',
          })
        );
      },
      lP = au(() => Promise.resolve().then(() => (ry(), ty))),
      cP = (e) =>
        g.createElement(
          nu,
          { fallback: g.createElement('div', null) },
          g.createElement(lP, { ...e })
        ),
      dP = {
        array: py,
        object: py,
        boolean: u9,
        color: cP,
        date: f9,
        number: g9,
        check: or,
        'inline-check': or,
        radio: or,
        'inline-radio': or,
        select: or,
        'multi-select': or,
        range: rP,
        text: oP,
        file: sP,
      },
      fy = () => g.createElement(g.Fragment, null, '-'),
      pP = ({ row: e, arg: t, updateArgs: r, isHovered: n }) => {
        let { key: a, control: o } = e,
          [i, u] = te(!1),
          [s, p] = te({ value: t });
        he(() => {
          i || p({ value: t });
        }, [i, t]);
        let y = me((b) => (p({ value: b }), r({ [a]: b }), b), [r, a]),
          A = me(() => u(!1), []),
          m = me(() => u(!0), []);
        if (!o || o.disable)
          return n
            ? g.createElement(
                ht,
                {
                  href: 'https://storybook.js.org/docs/react/essentials/controls',
                  target: '_blank',
                  withArrow: !0,
                },
                'Setup controls'
              )
            : g.createElement(fy, null);
        let h = {
            name: a,
            argType: e,
            value: s.value,
            onChange: y,
            onBlur: A,
            onFocus: m,
          },
          E = dP[o.type] || fy;
        return g.createElement(E, { ...h, ...o, controlType: o.type });
      },
      fP = j.span({ fontWeight: 'bold' }),
      hP = j.span(({ theme: e }) => ({
        color: e.color.negative,
        fontFamily: e.typography.fonts.mono,
        cursor: 'help',
      })),
      mP = j.div(({ theme: e }) => ({
        '&&': { p: { margin: '0 0 10px 0' }, a: { color: e.color.secondary } },
        code: {
          ...wt({ theme: e }),
          fontSize: 12,
          fontFamily: e.typography.fonts.mono,
        },
        '& code': { margin: 0, display: 'inline-block' },
        '& pre > code': { whiteSpace: 'pre-wrap' },
      })),
      gP = j.div(({ theme: e, hasDescription: t }) => ({
        color:
          e.base === 'light'
            ? ce(0.1, e.color.defaultText)
            : ce(0.2, e.color.defaultText),
        marginTop: t ? 4 : 0,
      })),
      yP = j.div(({ theme: e, hasDescription: t }) => ({
        color:
          e.base === 'light'
            ? ce(0.1, e.color.defaultText)
            : ce(0.2, e.color.defaultText),
        marginTop: t ? 12 : 0,
        marginBottom: 12,
      })),
      bP = j.td(({ theme: e, expandable: t }) => ({
        paddingLeft: t ? '40px !important' : '20px !important',
      })),
      la = (e) => {
        let [t, r] = te(!1),
          {
            row: n,
            updateArgs: a,
            compact: o,
            expandable: i,
            initialExpandedArgs: u,
          } = e,
          { name: s, description: p } = n,
          y = n.table || {},
          A = y.type || n.type,
          m = y.defaultValue || n.defaultValue,
          h = n.type?.required,
          E = p != null && p !== '';
        return g.createElement(
          'tr',
          { onMouseEnter: () => r(!0), onMouseLeave: () => r(!1) },
          g.createElement(
            bP,
            { expandable: i },
            g.createElement(fP, null, s),
            h ? g.createElement(hP, { title: 'Required' }, '*') : null
          ),
          o
            ? null
            : g.createElement(
                'td',
                null,
                E && g.createElement(mP, null, g.createElement(gp, null, p)),
                y.jsDocTags != null
                  ? g.createElement(
                      g.Fragment,
                      null,
                      g.createElement(
                        yP,
                        { hasDescription: E },
                        g.createElement($i, {
                          value: A,
                          initialExpandedArgs: u,
                        })
                      ),
                      g.createElement(YR, { tags: y.jsDocTags })
                    )
                  : g.createElement(
                      gP,
                      { hasDescription: E },
                      g.createElement($i, { value: A, initialExpandedArgs: u })
                    )
              ),
          o
            ? null
            : g.createElement(
                'td',
                null,
                g.createElement($i, { value: m, initialExpandedArgs: u })
              ),
          a
            ? g.createElement(
                'td',
                null,
                g.createElement(pP, { ...e, isHovered: t })
              )
            : null
        );
      },
      EP = j(Be)(({ theme: e }) => ({
        marginRight: 8,
        marginLeft: -10,
        marginTop: -2,
        height: 12,
        width: 12,
        color:
          e.base === 'light'
            ? ce(0.25, e.color.defaultText)
            : ce(0.3, e.color.defaultText),
        border: 'none',
        display: 'inline-block',
      })),
      AP = j.span(({ theme: e }) => ({
        display: 'flex',
        lineHeight: '20px',
        alignItems: 'center',
      })),
      vP = j.td(({ theme: e }) => ({
        position: 'relative',
        letterSpacing: '0.35em',
        textTransform: 'uppercase',
        fontWeight: e.typography.weight.bold,
        fontSize: e.typography.size.s1 - 1,
        color:
          e.base === 'light'
            ? ce(0.4, e.color.defaultText)
            : ce(0.6, e.color.defaultText),
        background: `${e.background.app} !important`,
        '& ~ td': { background: `${e.background.app} !important` },
      })),
      DP = j.td(({ theme: e }) => ({
        position: 'relative',
        fontWeight: e.typography.weight.bold,
        fontSize: e.typography.size.s2 - 1,
        background: e.background.app,
      })),
      CP = j.td(() => ({ position: 'relative' })),
      xP = j.tr(({ theme: e }) => ({
        '&:hover > td': {
          backgroundColor: `${nt(0.005, e.background.app)} !important`,
          boxShadow: `${e.color.mediumlight} 0 - 1px 0 0 inset`,
          cursor: 'row-resize',
        },
      })),
      hy = j.button(() => ({
        background: 'none',
        border: 'none',
        padding: '0',
        font: 'inherit',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        height: '100%',
        width: '100%',
        color: 'transparent',
        cursor: 'row-resize !important',
      })),
      zi = ({
        level: e = 'section',
        label: t,
        children: r,
        initialExpanded: n = !0,
        colSpan: a = 3,
      }) => {
        let [o, i] = te(n),
          u = e === 'subsection' ? DP : vP,
          s = r?.length || 0,
          p = e === 'subsection' ? `${s} item${s !== 1 ? 's' : ''}` : '',
          y = o ? 'arrowdown' : 'arrowright',
          A = `${o ? 'Hide' : 'Show'} ${e === 'subsection' ? s : t} item${s !== 1 ? 's' : ''}`;
        return g.createElement(
          g.Fragment,
          null,
          g.createElement(
            xP,
            { title: A },
            g.createElement(
              u,
              { colSpan: 1 },
              g.createElement(hy, { onClick: (m) => i(!o), tabIndex: 0 }, A),
              g.createElement(AP, null, g.createElement(EP, { icon: y }), t)
            ),
            g.createElement(
              CP,
              { colSpan: a - 1 },
              g.createElement(
                hy,
                {
                  onClick: (m) => i(!o),
                  tabIndex: -1,
                  style: { outline: 'none' },
                },
                A
              ),
              o ? null : p
            )
          ),
          o ? r : null
        );
      },
      ca = j.div(({ theme: e }) => ({
        display: 'flex',
        gap: 16,
        borderBottom: `1px solid ${e.appBorderColor}`,
        '&:last-child': { borderBottom: 0 },
      })),
      Se = j.div(({ numColumn: e }) => ({
        display: 'flex',
        flexDirection: 'column',
        flex: e || 1,
        gap: 5,
        padding: '12px 20px',
      })),
      ye = j.div(({ theme: e, width: t, height: r }) => ({
        animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
        background: e.appBorderColor,
        width: t || '100%',
        height: r || 16,
        borderRadius: 3,
      })),
      Fe = [2, 4, 2, 2],
      SP = () =>
        g.createElement(
          g.Fragment,
          null,
          g.createElement(
            ca,
            null,
            g.createElement(
              Se,
              { numColumn: Fe[0] },
              g.createElement(ye, { width: '60%' })
            ),
            g.createElement(
              Se,
              { numColumn: Fe[1] },
              g.createElement(ye, { width: '30%' })
            ),
            g.createElement(
              Se,
              { numColumn: Fe[2] },
              g.createElement(ye, { width: '60%' })
            ),
            g.createElement(
              Se,
              { numColumn: Fe[3] },
              g.createElement(ye, { width: '60%' })
            )
          ),
          g.createElement(
            ca,
            null,
            g.createElement(
              Se,
              { numColumn: Fe[0] },
              g.createElement(ye, { width: '60%' })
            ),
            g.createElement(
              Se,
              { numColumn: Fe[1] },
              g.createElement(ye, { width: '80%' }),
              g.createElement(ye, { width: '30%' })
            ),
            g.createElement(
              Se,
              { numColumn: Fe[2] },
              g.createElement(ye, { width: '60%' })
            ),
            g.createElement(
              Se,
              { numColumn: Fe[3] },
              g.createElement(ye, { width: '60%' })
            )
          ),
          g.createElement(
            ca,
            null,
            g.createElement(
              Se,
              { numColumn: Fe[0] },
              g.createElement(ye, { width: '60%' })
            ),
            g.createElement(
              Se,
              { numColumn: Fe[1] },
              g.createElement(ye, { width: '80%' }),
              g.createElement(ye, { width: '30%' })
            ),
            g.createElement(
              Se,
              { numColumn: Fe[2] },
              g.createElement(ye, { width: '60%' })
            ),
            g.createElement(
              Se,
              { numColumn: Fe[3] },
              g.createElement(ye, { width: '60%' })
            )
          ),
          g.createElement(
            ca,
            null,
            g.createElement(
              Se,
              { numColumn: Fe[0] },
              g.createElement(ye, { width: '60%' })
            ),
            g.createElement(
              Se,
              { numColumn: Fe[1] },
              g.createElement(ye, { width: '80%' }),
              g.createElement(ye, { width: '30%' })
            ),
            g.createElement(
              Se,
              { numColumn: Fe[2] },
              g.createElement(ye, { width: '60%' })
            ),
            g.createElement(
              Se,
              { numColumn: Fe[3] },
              g.createElement(ye, { width: '60%' })
            )
          )
        ),
      FP = j.div(({ inAddonPanel: e, theme: t }) => ({
        height: e ? '100%' : 'auto',
        display: 'flex',
        border: e ? 'none' : `1px solid ${t.appBorderColor}`,
        borderRadius: e ? 0 : t.appBorderRadius,
        padding: e ? 0 : 40,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 15,
        background: t.background.content,
        boxShadow: 'rgba(0, 0, 0, 0.10) 0 1px 3px 0',
      })),
      wP = j.div({
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        maxWidth: 415,
      }),
      BP = j.div(({ theme: e }) => ({
        fontWeight: e.typography.weight.bold,
        fontSize: e.typography.size.s2 - 1,
        textAlign: 'center',
        color: e.textColor,
      })),
      TP = j.div(({ theme: e }) => ({
        fontWeight: e.typography.weight.regular,
        fontSize: e.typography.size.s2 - 1,
        textAlign: 'center',
        color: e.textMutedColor,
      })),
      _P = j.div(({ theme: e }) => ({
        display: 'flex',
        fontSize: e.typography.size.s2 - 1,
        gap: 25,
      })),
      OP = j.div(({ theme: e }) => ({
        width: 1,
        height: 16,
        backgroundColor: e.appBorderColor,
      })),
      RP = ({ inAddonPanel: e }) => {
        let [t, r] = te(!0);
        return (
          he(() => {
            let n = setTimeout(() => {
              r(!1);
            }, 100);
            return () => clearTimeout(n);
          }, []),
          t
            ? null
            : g.createElement(
                FP,
                { inAddonPanel: e },
                g.createElement(
                  wP,
                  null,
                  g.createElement(
                    BP,
                    null,
                    e
                      ? 'Interactive story playground'
                      : "Args table with interactive controls couldn't be auto-generated"
                  ),
                  g.createElement(
                    TP,
                    null,
                    "Controls give you an easy to use interface to test your components. Set your story args and you'll see controls appearing here automatically."
                  )
                ),
                g.createElement(
                  _P,
                  null,
                  e &&
                    g.createElement(
                      g.Fragment,
                      null,
                      g.createElement(
                        ht,
                        {
                          href: 'https://youtu.be/0gOfS6K0x0E',
                          target: '_blank',
                          withArrow: !0,
                        },
                        g.createElement(Be, { icon: 'video' }),
                        ' Watch 5m video'
                      ),
                      g.createElement(OP, null),
                      g.createElement(
                        ht,
                        {
                          href: 'https://storybook.js.org/docs/react/essentials/controls',
                          target: '_blank',
                          withArrow: !0,
                        },
                        'Read docs'
                      )
                    ),
                  !e &&
                    g.createElement(
                      ht,
                      {
                        href: 'https://storybook.js.org/docs/react/essentials/controls',
                        target: '_blank',
                        withArrow: !0,
                      },
                      'Learn how to set that up'
                    )
                )
              )
        );
      },
      PP = j.table(({ theme: e, compact: t, inAddonPanel: r }) => ({
        '&&': {
          borderSpacing: 0,
          color: e.color.defaultText,
          'td, th': {
            padding: 0,
            border: 'none',
            verticalAlign: 'top',
            textOverflow: 'ellipsis',
          },
          fontSize: e.typography.size.s2 - 1,
          lineHeight: '20px',
          textAlign: 'left',
          width: '100%',
          marginTop: r ? 0 : 25,
          marginBottom: r ? 0 : 40,
          'thead th:first-of-type, td:first-of-type': { width: '25%' },
          'th:first-of-type, td:first-of-type': { paddingLeft: 20 },
          'th:nth-of-type(2), td:nth-of-type(2)': {
            ...(t ? null : { width: '35%' }),
          },
          'td:nth-of-type(3)': { ...(t ? null : { width: '15%' }) },
          'th:last-of-type, td:last-of-type': {
            paddingRight: 20,
            ...(t ? null : { width: '25%' }),
          },
          th: {
            color:
              e.base === 'light'
                ? ce(0.25, e.color.defaultText)
                : ce(0.45, e.color.defaultText),
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 15,
            paddingRight: 15,
          },
          td: {
            paddingTop: '10px',
            paddingBottom: '10px',
            '&:not(:first-of-type)': { paddingLeft: 15, paddingRight: 15 },
            '&:last-of-type': { paddingRight: 20 },
          },
          marginLeft: r ? 0 : 1,
          marginRight: r ? 0 : 1,
          tbody: {
            ...(r
              ? null
              : {
                  filter:
                    e.base === 'light'
                      ? 'drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.10))'
                      : 'drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.20))',
                }),
            '> tr > *': {
              background: e.background.content,
              borderTop: `1px solid ${e.appBorderColor}`,
            },
            ...(r
              ? null
              : {
                  '> tr:first-of-type > *': {
                    borderBlockStart: `1px solid ${e.appBorderColor}`,
                  },
                  '> tr:last-of-type > *': {
                    borderBlockEnd: `1px solid ${e.appBorderColor}`,
                  },
                  '> tr > *:first-of-type': {
                    borderInlineStart: `1px solid ${e.appBorderColor}`,
                  },
                  '> tr > *:last-of-type': {
                    borderInlineEnd: `1px solid ${e.appBorderColor}`,
                  },
                  '> tr:first-of-type > td:first-of-type': {
                    borderTopLeftRadius: e.appBorderRadius,
                  },
                  '> tr:first-of-type > td:last-of-type': {
                    borderTopRightRadius: e.appBorderRadius,
                  },
                  '> tr:last-of-type > td:first-of-type': {
                    borderBottomLeftRadius: e.appBorderRadius,
                  },
                  '> tr:last-of-type > td:last-of-type': {
                    borderBottomRightRadius: e.appBorderRadius,
                  },
                }),
          },
        },
      })),
      IP = j(ft)(({ theme: e }) => ({
        color: e.barTextColor,
        margin: '-4px -12px -4px 0',
      })),
      kP = j.span({ display: 'flex', justifyContent: 'space-between' }),
      NP = {
        alpha: (e, t) => e.name.localeCompare(t.name),
        requiredFirst: (e, t) =>
          +!!t.type?.required - +!!e.type?.required ||
          e.name.localeCompare(t.name),
        none: void 0,
      },
      LP = (e, t) => {
        let r = { ungrouped: [], ungroupedSubsections: {}, sections: {} };
        if (!e) return r;
        Object.entries(e).forEach(([o, i]) => {
          let { category: u, subcategory: s } = i?.table || {};
          if (u) {
            let p = r.sections[u] || { ungrouped: [], subsections: {} };
            if (!s) p.ungrouped.push({ key: o, ...i });
            else {
              let y = p.subsections[s] || [];
              y.push({ key: o, ...i }), (p.subsections[s] = y);
            }
            r.sections[u] = p;
          } else if (s) {
            let p = r.ungroupedSubsections[s] || [];
            p.push({ key: o, ...i }), (r.ungroupedSubsections[s] = p);
          } else r.ungrouped.push({ key: o, ...i });
        });
        let n = NP[t],
          a = (o) =>
            n
              ? Object.keys(o).reduce(
                  (i, u) => ({ ...i, [u]: o[u].sort(n) }),
                  {}
                )
              : o;
        return {
          ungrouped: r.ungrouped.sort(n),
          ungroupedSubsections: a(r.ungroupedSubsections),
          sections: Object.keys(r.sections).reduce(
            (o, i) => ({
              ...o,
              [i]: {
                ungrouped: r.sections[i].ungrouped.sort(n),
                subsections: a(r.sections[i].subsections),
              },
            }),
            {}
          ),
        };
      },
      qP = (e, t, r) => {
        try {
          return wo(e, t, r);
        } catch (n) {
          return Cn.warn(n.message), !1;
        }
      },
      St = (e) => {
        let {
          updateArgs: t,
          resetArgs: r,
          compact: n,
          inAddonPanel: a,
          initialExpandedArgs: o,
          sort: i = 'none',
          isLoading: u,
        } = e;
        if ('error' in e) {
          let { error: B } = e;
          return g.createElement(
            Cy,
            null,
            B,
            '\xA0',
            g.createElement(
              ht,
              {
                href: 'http://storybook.js.org/docs/',
                target: '_blank',
                withArrow: !0,
              },
              'Read the docs'
            )
          );
        }
        if (u) return g.createElement(SP, null);
        let { rows: s, args: p, globals: y } = 'rows' in e && e,
          A = LP(
            (0, yy.default)(
              s,
              (B) => !B?.table?.disable && qP(B, p || {}, y || {})
            ),
            i
          ),
          m = A.ungrouped.length === 0,
          h = Object.entries(A.sections).length === 0,
          E = Object.entries(A.ungroupedSubsections).length === 0;
        if (m && h && E) return g.createElement(RP, { inAddonPanel: a });
        let b = 1;
        t && (b += 1), n || (b += 2);
        let x = Object.keys(A.sections).length > 0,
          F = {
            updateArgs: t,
            compact: n,
            inAddonPanel: a,
            initialExpandedArgs: o,
          };
        return g.createElement(
          Ca,
          null,
          g.createElement(
            PP,
            {
              compact: n,
              inAddonPanel: a,
              className: 'docblock-argstable sb-unstyled',
            },
            g.createElement(
              'thead',
              { className: 'docblock-argstable-head' },
              g.createElement(
                'tr',
                null,
                g.createElement(
                  'th',
                  null,
                  g.createElement('span', null, 'Name')
                ),
                n
                  ? null
                  : g.createElement(
                      'th',
                      null,
                      g.createElement('span', null, 'Description')
                    ),
                n
                  ? null
                  : g.createElement(
                      'th',
                      null,
                      g.createElement('span', null, 'Default')
                    ),
                t
                  ? g.createElement(
                      'th',
                      null,
                      g.createElement(
                        kP,
                        null,
                        'Control',
                        ' ',
                        !u &&
                          r &&
                          g.createElement(
                            IP,
                            { onClick: () => r(), title: 'Reset controls' },
                            g.createElement(Be, {
                              icon: 'undo',
                              'aria-hidden': !0,
                            })
                          )
                      )
                    )
                  : null
              )
            ),
            g.createElement(
              'tbody',
              { className: 'docblock-argstable-body' },
              A.ungrouped.map((B) =>
                g.createElement(la, {
                  key: B.key,
                  row: B,
                  arg: p && p[B.key],
                  ...F,
                })
              ),
              Object.entries(A.ungroupedSubsections).map(([B, I]) =>
                g.createElement(
                  zi,
                  { key: B, label: B, level: 'subsection', colSpan: b },
                  I.map((q) =>
                    g.createElement(la, {
                      key: q.key,
                      row: q,
                      arg: p && p[q.key],
                      expandable: x,
                      ...F,
                    })
                  )
                )
              ),
              Object.entries(A.sections).map(([B, I]) =>
                g.createElement(
                  zi,
                  { key: B, label: B, level: 'section', colSpan: b },
                  I.ungrouped.map((q) =>
                    g.createElement(la, {
                      key: q.key,
                      row: q,
                      arg: p && p[q.key],
                      ...F,
                    })
                  ),
                  Object.entries(I.subsections).map(([q, w]) =>
                    g.createElement(
                      zi,
                      { key: q, label: q, level: 'subsection', colSpan: b },
                      w.map((N) =>
                        g.createElement(la, {
                          key: N.key,
                          row: N,
                          arg: p && p[N.key],
                          expandable: x,
                          ...F,
                        })
                      )
                    )
                  )
                )
              )
            )
          )
        );
      },
      qy = ({ tabs: e, ...t }) => {
        let r = Object.entries(e);
        return r.length === 1
          ? g.createElement(St, { ...r[0][1], ...t })
          : g.createElement(
              Sa,
              null,
              r.map((n) => {
                let [a, o] = n,
                  i = `prop_table_div_${a}`;
                return g.createElement(
                  'div',
                  { key: i, id: i, title: a },
                  ({ active: u }) =>
                    u
                      ? g.createElement(St, {
                          key: `prop_table_${a}`,
                          ...o,
                          ...t,
                        })
                      : null
                );
              })
            );
      },
      Nre = j.div(({ theme: e }) => ({
        marginRight: 30,
        fontSize: `${e.typography.size.s1}px`,
        color:
          e.base === 'light'
            ? ce(0.4, e.color.defaultText)
            : ce(0.6, e.color.defaultText),
      })),
      Lre = j.div({
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
      }),
      qre = j.div({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline',
        '&:not(:last-child)': { marginBottom: '1rem' },
      }),
      jre = j.div(Bt, ({ theme: e }) => ({
        ...da(e),
        margin: '25px 0 40px',
        padding: '30px 20px',
      }));
    var Mre = j.div(({ theme: e }) => ({
        fontWeight: e.typography.weight.bold,
        color: e.color.defaultText,
      })),
      $re = j.div(({ theme: e }) => ({
        color:
          e.base === 'light'
            ? ce(0.2, e.color.defaultText)
            : ce(0.6, e.color.defaultText),
      })),
      Ure = j.div({ flex: '0 0 30%', lineHeight: '20px', marginTop: 5 }),
      zre = j.div(({ theme: e }) => ({
        flex: 1,
        textAlign: 'center',
        fontFamily: e.typography.fonts.mono,
        fontSize: e.typography.size.s1,
        lineHeight: 1,
        overflow: 'hidden',
        color:
          e.base === 'light'
            ? ce(0.4, e.color.defaultText)
            : ce(0.6, e.color.defaultText),
        '> div': {
          display: 'inline-block',
          overflow: 'hidden',
          maxWidth: '100%',
          textOverflow: 'ellipsis',
        },
        span: { display: 'block', marginTop: 2 },
      })),
      Hre = j.div({ display: 'flex', flexDirection: 'row' }),
      Gre = j.div(({ background: e }) => ({
        position: 'relative',
        flex: 1,
        '&::before': {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: e,
          content: '""',
        },
      })),
      Wre = j.div(({ theme: e }) => ({
        ...da(e),
        display: 'flex',
        flexDirection: 'row',
        height: 50,
        marginBottom: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        backgroundImage:
          'repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)',
        backgroundClip: 'padding-box',
      })),
      Vre = j.div({
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        position: 'relative',
        marginBottom: 30,
      }),
      Kre = j.div({ flex: 1, display: 'flex', flexDirection: 'row' }),
      Yre = j.div({ display: 'flex', alignItems: 'flex-start' }),
      Jre = j.div({ flex: '0 0 30%' }),
      Xre = j.div({ flex: 1 }),
      Qre = j.div(({ theme: e }) => ({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 20,
        fontWeight: e.typography.weight.bold,
        color:
          e.base === 'light'
            ? ce(0.4, e.color.defaultText)
            : ce(0.6, e.color.defaultText),
      })),
      Zre = j.div(({ theme: e }) => ({
        fontSize: e.typography.size.s2,
        lineHeight: '20px',
        display: 'flex',
        flexDirection: 'column',
      }));
    var ene = j.div(({ theme: e }) => ({
        fontFamily: e.typography.fonts.base,
        fontSize: e.typography.size.s2,
        color: e.color.defaultText,
        marginLeft: 10,
        lineHeight: 1.2,
      })),
      tne = j.div(({ theme: e }) => ({
        ...da(e),
        overflow: 'hidden',
        height: 40,
        width: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 'none',
        '> img, > svg': { width: 20, height: 20 },
      })),
      rne = j.div({
        display: 'inline-flex',
        flexDirection: 'row',
        alignItems: 'center',
        flex: '0 1 calc(20% - 10px)',
        minWidth: 120,
        margin: '0px 10px 30px 0',
      }),
      nne = j.div({ display: 'flex', flexFlow: 'row wrap' });
    ie &&
      ie.__DOCS_CONTEXT__ === void 0 &&
      ((ie.__DOCS_CONTEXT__ = ur(null)),
      (ie.__DOCS_CONTEXT__.displayName = 'DocsContext'));
    var Xi = ie ? ie.__DOCS_CONTEXT__ : ur(null);
    var Qi = '^',
      jP = (e) =>
        e
          .split('-')
          .map((t) => t.charAt(0).toUpperCase() + t.slice(1))
          .join(''),
      jy = (e) => {
        if (e)
          return typeof e == 'string'
            ? e.includes('-')
              ? jP(e)
              : e
            : e.__docgenInfo && e.__docgenInfo.displayName
              ? e.__docgenInfo.displayName
              : e.name;
      };
    function MP(e, t) {
      let r = $P([e], t);
      return r && r[0];
    }
    function $P(e, t) {
      let [r, n] = te({});
      return (
        he(() => {
          Promise.all(
            e.map(async (a) => {
              let o = await t.loadStory(a);
              n((i) => (i[a] === o ? i : { ...i, [a]: o }));
            })
          );
        }),
        e.map((a) => {
          if (r[a]) return r[a];
          try {
            return t.storyById(a);
          } catch {
            return null;
          }
        })
      );
    }
    var UP = (e, t) => {
        let r = t.getStoryContext(t.storyById()),
          [n, a] = te(r.args);
        he(() => {
          let u = (s) => {
            s.storyId === e && a(s.args);
          };
          return t.channel.on(_n, u), () => t.channel.off(_n, u);
        }, [e]);
        let o = me(
            (u) => t.channel.emit(On, { storyId: e, updatedArgs: u }),
            [e]
          ),
          i = me((u) => t.channel.emit(Tn, { storyId: e, argNames: u }), [e]);
        return [n, o, i];
      },
      zP = (e) => {
        let t = e.getStoryContext(e.storyById()),
          [r, n] = te(t.globals);
        return (
          he(() => {
            let a = (o) => {
              n(o.globals);
            };
            return e.channel.on(Bn, a), () => e.channel.off(Bn, a);
          }, []),
          [r]
        );
      },
      My = (e, t, r, n) => {
        let { extractArgTypes: a } = t.docs || {};
        if (!a)
          throw new Error(
            'Args unsupported. See Args documentation for your framework.'
          );
        let o = a(e);
        return (o = Rr(o, r, n)), o;
      },
      my = (e) => e && [Qi].includes(e),
      HP = (e = {}, t) => {
        let { of: r } = e,
          { story: n } = e;
        if (my(r) || my(n)) return t || null;
        if (!r) throw new Error('No component found.');
        return r;
      },
      Vi = (e, t, r, n, a, o) => ({
        ...e,
        ...(0, vy.default)(t, (i) => ({ rows: My(i, r, n, a), sort: o })),
      }),
      GP = (e) => {
        let t = Kr(Xi),
          {
            story: r,
            component: n,
            subcomponents: a,
            showComponent: o,
            include: i,
            exclude: u,
            sort: s,
          } = e;
        try {
          let p;
          switch (r) {
            case Qi: {
              p = t.storyById().id;
              break;
            }
            default:
              p = t.storyIdByName(r);
          }
          let y = MP(p, t),
            [A, m, h] = UP(p, t),
            [E] = zP(t);
          if (!y)
            return g.createElement(St, {
              isLoading: !0,
              updateArgs: m,
              resetArgs: h,
            });
          let b = Rr(y.argTypes, i, u),
            x = jy(n) || 'Story',
            F = {
              [x]: {
                rows: b,
                args: A,
                globals: E,
                updateArgs: m,
                resetArgs: h,
              },
            },
            B = b && Object.values(b).find((I) => !!I?.control);
          if (
            (B || ((m = null), (h = null), (F = {})),
            n && (!B || o) && (F = Vi(F, { [x]: n }, y.parameters, i, u)),
            a)
          ) {
            if (Array.isArray(a))
              throw new Error(
                'Unexpected subcomponents array. Expected an object whose keys are tab labels and whose values are components.'
              );
            F = Vi(F, a, y.parameters, i, u);
          }
          return g.createElement(qy, { tabs: F, sort: s });
        } catch (p) {
          return g.createElement(St, { error: p.message });
        }
      },
      gy = (e) => {
        let {
            components: t,
            include: r,
            exclude: n,
            sort: a,
            parameters: o,
          } = e,
          i = Vi({}, t, o, r, n);
        return g.createElement(qy, { tabs: i, sort: a });
      },
      WP = (e) => {
        Dn(Tr`The ArgsTable doc block is deprecated. Instead use the ArgTypes doc block for static tables or the Controls doc block for tables with controls.
    
  Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#argstable-block
  `);
        let t = Kr(Xi),
          r,
          n,
          a;
        try {
          ({ parameters: r, component: n, subcomponents: a } = t.storyById());
        } catch {
          let { of: h } = e;
          if ('of' in e && h === void 0)
            throw new Error(
              'Unexpected `of={undefined}`, did you mistype a CSF file reference?'
            );
          ({
            projectAnnotations: { parameters: r },
          } = t.resolveOf(h, ['component']));
        }
        let { include: o, exclude: i, components: u, sort: s } = e,
          { story: p } = e,
          y = s || r.controls?.sort,
          A = HP(e, n);
        if (p)
          return g.createElement(GP, {
            ...e,
            component: A,
            subcomponents: a,
            sort: y,
          });
        if (!u && !a) {
          let h;
          try {
            h = { rows: My(A, r, o, i) };
          } catch (E) {
            h = { error: E.message };
          }
          return g.createElement(St, { ...h, sort: y });
        }
        if (u)
          return g.createElement(gy, {
            ...e,
            components: u,
            sort: y,
            parameters: r,
          });
        let m = jy(A);
        return g.createElement(gy, {
          ...e,
          components: { [m]: A, ...a },
          sort: y,
          parameters: r,
        });
      };
    WP.defaultProps = { of: Qi };
    var ane = ur({ sources: {} });
    var VP = ((e) => (
      (e.OPEN = 'open'), (e.CLOSED = 'closed'), (e.NONE = 'none'), e
    ))(VP || {});
    var { document: KP } = ie;
    function YP(e, t) {
      e.channel.emit(Hf, t);
    }
    var one = Ta.a;
    var $y = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      JP = $y.reduce(
        (e, t) => ({
          ...e,
          [t]: j(t)({
            '& svg': {
              position: 'relative',
              top: '-0.1em',
              visibility: 'hidden',
            },
            '&:hover svg': { visibility: 'visible' },
          }),
        }),
        {}
      ),
      XP = j.a(() => ({
        float: 'left',
        lineHeight: 'inherit',
        paddingRight: '10px',
        marginLeft: '-24px',
        color: 'inherit',
      })),
      QP = ({ as: e, id: t, children: r, ...n }) => {
        let a = Kr(Xi),
          o = JP[e],
          i = `#${t}`;
        return g.createElement(
          o,
          { id: t, ...n },
          g.createElement(
            XP,
            {
              'aria-hidden': 'true',
              href: i,
              tabIndex: -1,
              target: '_self',
              onClick: (u) => {
                KP.getElementById(t) && YP(a, i);
              },
            },
            g.createElement(Be, { icon: 'link' })
          ),
          r
        );
      },
      Uy = (e) => {
        let { as: t, id: r, children: n, ...a } = e;
        if (r) return g.createElement(QP, { as: t, id: r, ...a }, n);
        let o = t,
          { as: i, ...u } = e;
        return g.createElement(o, { ..._a(u, t) });
      },
      ine = $y.reduce(
        (e, t) => ({ ...e, [t]: (r) => g.createElement(Uy, { as: t, ...r }) }),
        {}
      );
    var ZP = ((e) => (
      (e.INFO = 'info'),
      (e.NOTES = 'notes'),
      (e.DOCGEN = 'docgen'),
      (e.AUTO = 'auto'),
      e
    ))(ZP || {});
    var une = j.div(({ theme: e }) => ({
        width: '10rem',
        '@media (max-width: 768px)': { display: 'none' },
      })),
      sne = j.div(({ theme: e }) => ({
        position: 'fixed',
        bottom: 0,
        top: 0,
        width: '10rem',
        paddingTop: '4rem',
        paddingBottom: '2rem',
        overflowY: 'auto',
        fontFamily: e.typography.fonts.base,
        fontSize: e.typography.size.s2,
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
        WebkitOverflowScrolling: 'touch',
        '& *': { boxSizing: 'border-box' },
        '& > .toc-wrapper > .toc-list': {
          paddingLeft: 0,
          borderLeft: `solid 2px ${e.color.mediumlight}`,
          '.toc-list': {
            paddingLeft: 0,
            borderLeft: `solid 2px ${e.color.mediumlight}`,
            '.toc-list': {
              paddingLeft: 0,
              borderLeft: `solid 2px ${e.color.mediumlight}`,
            },
          },
        },
        '& .toc-list-item': {
          position: 'relative',
          listStyleType: 'none',
          marginLeft: 20,
          paddingTop: 3,
          paddingBottom: 3,
        },
        '& .toc-list-item::before': {
          content: '""',
          position: 'absolute',
          height: '100%',
          top: 0,
          left: 0,
          transform: 'translateX(calc(-2px - 20px))',
          borderLeft: `solid 2px ${e.color.mediumdark}`,
          opacity: 0,
          transition: 'opacity 0.2s',
        },
        '& .toc-list-item.is-active-li::before': { opacity: 1 },
        '& .toc-list-item > a': {
          color: e.color.defaultText,
          textDecoration: 'none',
        },
        '& .toc-list-item.is-active-li > a': {
          fontWeight: 600,
          color: e.color.secondary,
          textDecoration: 'none',
        },
      })),
      lne = j.p(({ theme: e }) => ({
        fontWeight: 600,
        fontSize: '0.875em',
        color: e.textColor,
        textTransform: 'uppercase',
        marginBottom: 10,
      }));
    var { document: cne, window: dne } = ie;
    var eI = ({ children: e, disableAnchor: t, ...r }) => {
        if (t || typeof e != 'string') return g.createElement(va, null, e);
        let n = e.toLowerCase().replace(/[^a-z0-9]/gi, '-');
        return g.createElement(Uy, { as: 'h2', id: n, ...r }, e);
      },
      pne = j(eI)(({ theme: e }) => ({
        fontSize: `${e.typography.size.s2 - 1}px`,
        fontWeight: e.typography.weight.bold,
        lineHeight: '16px',
        letterSpacing: '0.35em',
        textTransform: 'uppercase',
        color: e.textMutedColor,
        border: 0,
        marginBottom: '12px',
        '&:first-of-type': { marginTop: '56px' },
      }));
    var zy = 'addon-controls',
      Hy = 'controls',
      tI = () => {
        let [e, t] = te(!0),
          [r, n, a] = uu(),
          [o] = su(),
          i = ga(),
          { expanded: u, sort: s, presetColors: p } = lu(Hy, {}),
          { path: y, previewInitialized: A } = cu();
        he(() => {
          A && t(!1);
        }, [A]);
        let m = Object.values(i).some((E) => E?.control),
          h = Object.entries(i).reduce(
            (E, [b, x]) => (
              x?.control?.type !== 'color' || x?.control?.presetColors
                ? (E[b] = x)
                : (E[b] = { ...x, control: { ...x.control, presetColors: p } }),
              E
            ),
            {}
          );
        return g.createElement(St, {
          key: y,
          compact: !u && m,
          rows: h,
          args: r,
          globals: o,
          updateArgs: n,
          resetArgs: a,
          inAddonPanel: !0,
          sort: s,
          isLoading: e,
        });
      };
    function rI() {
      let e = ga(),
        t = Object.values(e).filter(
          (r) => r?.control && !r?.table?.disable
        ).length;
      return g.createElement(
        'div',
        null,
        g.createElement(
          xa,
          { col: 1 },
          g.createElement(
            'span',
            { style: { display: 'inline-block', verticalAlign: 'middle' } },
            'Controls'
          ),
          t === 0 ? '' : g.createElement(Ea, { status: 'neutral' }, t)
        )
      );
    }
    ma.register(zy, (e) => {
      ma.add(zy, {
        title: rI,
        type: iu.PANEL,
        paramKey: Hy,
        render: ({ active: t }) =>
          !t || !e.getCurrentStoryData()
            ? null
            : g.createElement(ba, { active: t }, g.createElement(tI, null)),
      });
    });
  })();
} catch (e) {
  console.error(
    '[Storybook] One of your manager-entries failed: ' + import.meta.url,
    e
  );
}
