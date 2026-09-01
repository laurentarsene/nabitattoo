import{t as l}from"./chunk-CS77MaYu.js";import{$n as mm,Er as tw,Fr as vm,Gt as _m,L as MV,Nt as Yd,Or as ue$1,Q as Pm,Qr as ym,S as Gw,Sr as su,U as Nm,Wt as _V,Y as Ob,Yr as y,Yt as af,Zn as mb,_r as sI,_t as T_,b as GC,bn as fb,br as sm,cn as ds,d as Dm,dt as Si,ei as zC,fn as e_,fr as qw,jn as hV,mt as T,nr as nb,on as db,or as om,p as EV,qn as lb,rr as oT,rt as Qd,ur as qi,vt as Td,wn as gV,x as Gi}from"./chunk-BvNdw-tD.js";import{h as Uc}from"./chunk-fFpEnBvw.js";import{l as Ai,y as Gs}from"./main-JFYWHEXQ.js";import{f as V,l as St,u as T$1,y as y$1}from"./chunk-CUe4qX-k.js";import{t as dt}from"./chunk-_rBI11rV.js";import{t as G}from"./chunk-Cl8GF8RY.js";var oe=`
    .p-message {
        display: grid;
        grid-template-rows: 1fr;
        border-radius: dt('message.border.radius');
        outline-width: dt('message.border.width');
        outline-style: solid;
    }

    .p-message-content-wrapper {
        min-height: 0;
    }

    .p-message-content {
        display: flex;
        align-items: center;
        padding: dt('message.content.padding');
        gap: dt('message.content.gap');
    }

    .p-message-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-inline-start: auto;
        overflow: hidden;
        position: relative;
        width: dt('message.close.button.width');
        height: dt('message.close.button.height');
        border-radius: dt('message.close.button.border.radius');
        background: transparent;
        transition:
            background dt('message.transition.duration'),
            color dt('message.transition.duration'),
            outline-color dt('message.transition.duration'),
            box-shadow dt('message.transition.duration'),
            opacity 0.3s;
        outline-color: transparent;
        color: inherit;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-message-close-button svg,
    .p-message-close-button i {
        font-size: dt('message.close.icon.size');
        width: dt('message.close.icon.size');
        height: dt('message.close.icon.size');
    }

    .p-message-close-button:focus-visible {
        outline-width: dt('message.close.button.focus.ring.width');
        outline-style: dt('message.close.button.focus.ring.style');
        outline-offset: dt('message.close.button.focus.ring.offset');
    }

    .p-message-info {
        background: dt('message.info.background');
        outline-color: dt('message.info.border.color');
        color: dt('message.info.color');
        box-shadow: dt('message.info.shadow');
    }

    .p-message-info .p-message-close-button:focus-visible {
        outline-color: dt('message.info.close.button.focus.ring.color');
        box-shadow: dt('message.info.close.button.focus.ring.shadow');
    }

    .p-message-info .p-message-close-button:hover {
        background: dt('message.info.close.button.hover.background');
    }

    .p-message-info.p-message-outlined {
        color: dt('message.info.outlined.color');
        outline-color: dt('message.info.outlined.border.color');
    }

    .p-message-info.p-message-simple {
        color: dt('message.info.simple.color');
    }

    .p-message-success {
        background: dt('message.success.background');
        outline-color: dt('message.success.border.color');
        color: dt('message.success.color');
        box-shadow: dt('message.success.shadow');
    }

    .p-message-success .p-message-close-button:focus-visible {
        outline-color: dt('message.success.close.button.focus.ring.color');
        box-shadow: dt('message.success.close.button.focus.ring.shadow');
    }

    .p-message-success .p-message-close-button:hover {
        background: dt('message.success.close.button.hover.background');
    }

    .p-message-success.p-message-outlined {
        color: dt('message.success.outlined.color');
        outline-color: dt('message.success.outlined.border.color');
    }

    .p-message-success.p-message-simple {
        color: dt('message.success.simple.color');
    }

    .p-message-warn {
        background: dt('message.warn.background');
        outline-color: dt('message.warn.border.color');
        color: dt('message.warn.color');
        box-shadow: dt('message.warn.shadow');
    }

    .p-message-warn .p-message-close-button:focus-visible {
        outline-color: dt('message.warn.close.button.focus.ring.color');
        box-shadow: dt('message.warn.close.button.focus.ring.shadow');
    }

    .p-message-warn .p-message-close-button:hover {
        background: dt('message.warn.close.button.hover.background');
    }

    .p-message-warn.p-message-outlined {
        color: dt('message.warn.outlined.color');
        outline-color: dt('message.warn.outlined.border.color');
    }

    .p-message-warn.p-message-simple {
        color: dt('message.warn.simple.color');
    }

    .p-message-error {
        background: dt('message.error.background');
        outline-color: dt('message.error.border.color');
        color: dt('message.error.color');
        box-shadow: dt('message.error.shadow');
    }

    .p-message-error .p-message-close-button:focus-visible {
        outline-color: dt('message.error.close.button.focus.ring.color');
        box-shadow: dt('message.error.close.button.focus.ring.shadow');
    }

    .p-message-error .p-message-close-button:hover {
        background: dt('message.error.close.button.hover.background');
    }

    .p-message-error.p-message-outlined {
        color: dt('message.error.outlined.color');
        outline-color: dt('message.error.outlined.border.color');
    }

    .p-message-error.p-message-simple {
        color: dt('message.error.simple.color');
    }

    .p-message-secondary {
        background: dt('message.secondary.background');
        outline-color: dt('message.secondary.border.color');
        color: dt('message.secondary.color');
        box-shadow: dt('message.secondary.shadow');
    }

    .p-message-secondary .p-message-close-button:focus-visible {
        outline-color: dt('message.secondary.close.button.focus.ring.color');
        box-shadow: dt('message.secondary.close.button.focus.ring.shadow');
    }

    .p-message-secondary .p-message-close-button:hover {
        background: dt('message.secondary.close.button.hover.background');
    }

    .p-message-secondary.p-message-outlined {
        color: dt('message.secondary.outlined.color');
        outline-color: dt('message.secondary.outlined.border.color');
    }

    .p-message-secondary.p-message-simple {
        color: dt('message.secondary.simple.color');
    }

    .p-message-contrast {
        background: dt('message.contrast.background');
        outline-color: dt('message.contrast.border.color');
        color: dt('message.contrast.color');
        box-shadow: dt('message.contrast.shadow');
    }

    .p-message-contrast .p-message-close-button:focus-visible {
        outline-color: dt('message.contrast.close.button.focus.ring.color');
        box-shadow: dt('message.contrast.close.button.focus.ring.shadow');
    }

    .p-message-contrast .p-message-close-button:hover {
        background: dt('message.contrast.close.button.hover.background');
    }

    .p-message-contrast.p-message-outlined {
        color: dt('message.contrast.outlined.color');
        outline-color: dt('message.contrast.outlined.border.color');
    }

    .p-message-contrast.p-message-simple {
        color: dt('message.contrast.simple.color');
    }

    .p-message-text {
        font-size: dt('message.text.font.size');
        font-weight: dt('message.text.font.weight');
    }

    .p-message-icon {
        display: inline-flex;
    }

    .p-message-icon,
    .p-message-icon svg,
    .p-message-icon i {
        flex-shrink: 0;
        font-size: dt('message.icon.size');
        width: dt('message.icon.size');
        height: dt('message.icon.size');
    }

    .p-message-sm .p-message-content {
        padding: dt('message.content.sm.padding');
    }

    .p-message-sm .p-message-text {
        font-size: dt('message.text.sm.font.size');
    }

    .p-message-sm .p-message-icon,
    .p-message-sm .p-message-icon svg,
    .p-message-sm .p-message-icon i {
        font-size: dt('message.icon.sm.size');
        width: dt('message.icon.sm.size');
        height: dt('message.icon.sm.size');
    }

    .p-message-sm .p-message-close-button svg,
    .p-message-sm .p-message-close-button i {
        width: dt('message.close.icon.sm.size');
        height: dt('message.close.icon.sm.size');
    }

    .p-message-lg .p-message-content {
        padding: dt('message.content.lg.padding');
    }

    .p-message-lg .p-message-text {
        font-size: dt('message.text.lg.font.size');
    }

    .p-message-lg .p-message-icon,
    .p-message-lg .p-message-icon svg,
    .p-message-lg .p-message-icon i {
        font-size: dt('message.icon.lg.size');
        width: dt('message.icon.lg.size');
        height: dt('message.icon.lg.size');
    }

    .p-message-lg .p-message-close-button svg,
    .p-message-lg .p-message-close-button i {
        font-size: dt('message.close.icon.lg.size');
        width: dt('message.close.icon.lg.size');
        height: dt('message.close.icon.lg.size');
    }

    .p-message-outlined {
        background: transparent;
        outline-width: dt('message.outlined.border.width');
    }

    .p-message-simple {
        background: transparent;
        outline-color: transparent;
        box-shadow: none;
    }

    .p-message-simple .p-message-content {
        padding: dt('message.simple.content.padding');
    }

    .p-message-outlined .p-message-close-button:hover,
    .p-message-simple .p-message-close-button:hover {
        background: transparent;
    }

    .p-message-enter-active {
        animation: p-animate-message-enter 0.3s ease-out forwards;
        overflow: hidden;
    }

    .p-message-leave-active {
        animation: p-animate-message-leave 0.15s ease-in forwards;
        overflow: hidden;
    }

    @keyframes p-animate-message-enter {
        from {
            opacity: 0;
            grid-template-rows: 0fr;
        }
        to {
            opacity: 1;
            grid-template-rows: 1fr;
        }
    }

    @keyframes p-animate-message-leave {
        from {
            opacity: 1;
            grid-template-rows: 1fr;
        }
        to {
            opacity: 0;
            margin: 0;
            grid-template-rows: 0fr;
        }
    }
`;var ie=[`container`];var ce=[`icon`];var re=[`closeicon`];var le=[`*`];function de(n,t){n&1&&Dm(0)}function ge(n,t){if(n&1&&sm(0,de,1,0,`ng-container`,3),n&2)vm(`ngTemplateOutlet`,lb().iconTemplate())}function me(n,t){if(n&1&&ym(0,`i`,0),n&2){let e=lb();Ob(e.cn(e.cx(`icon`),e.icon())),vm(`pBind`,e.ptm(`icon`)),mm(`data-p`,e.dataP())}}function pe(n,t){n&1&&Dm(0)}function ue(n,t){if(n&1&&sm(0,pe,1,0,`ng-container`,4),n&2){let e=lb();vm(`ngTemplateOutlet`,e.containerTemplate())(`ngTemplateOutletContext`,e.containerContext)}}function be(n,t){if(n&1&&(ds(0,`span`,0),fb(1),su()),n&2){let e=lb();Ob(e.cx(`text`)),vm(`pBind`,e.ptm(`text`)),mm(`data-p`,e.dataP())}}function fe(n,t){if(n&1&&ym(0,`i`,0),n&2){let e=lb(2);Ob(e.cn(e.cx(`closeIcon`),e.closeIcon())),vm(`pBind`,e.ptm(`closeIcon`)),mm(`data-p`,e.dataP())}}function ve(n,t){n&1&&Dm(0)}function he(n,t){if(n&1&&sm(0,ve,1,0,`ng-container`,3),n&2)vm(`ngTemplateOutlet`,lb(2).closeIconTemplate())}function _e(n,t){if(n&1&&(af(),ym(0,`svg`,7)),n&2){let e=lb(2);Ob(e.cx(`closeIcon`)),vm(`pBind`,e.ptm(`closeIcon`)),mm(`data-p`,e.dataP())}}function we(n,t){if(n&1){let e=nb();ds(0,`button`,5),_m(`click`,function(s){Qd(e);return Yd(lb().close(s))}),qw(1,fe,1,4,`i`,1)(2,he,1,1,`ng-container`)(3,_e,1,4,`:svg:svg`,6),su()}if(n&2){let e=lb();Ob(e.cx(`closeButton`)),vm(`pBind`,e.ptm(`closeButton`)),mm(`aria-label`,e.closeAriaLabel)(`data-p`,e.dataP()),oT(),Gw(e.closeIcon()?1:e.closeIconTemplate()?2:3)}}var xe={root:({instance:n})=>{let t=n.severity(),e=n.variant(),o=n.size();return[`p-message p-component p-message-`+t,e&&`p-message-`+e,{"p-message-sm":o===`small`,"p-message-lg":o===`large`}]},contentWrapper:`p-message-content-wrapper`,content:`p-message-content`,icon:`p-message-icon`,text:`p-message-text`,closeButton:`p-message-close-button`,closeIcon:`p-message-close-icon`};var te=(()=>{class n extends Ai{name=`message`;style=oe;classes=xe;static ɵfac=(()=>{let e;return function(s){return(e||(e=sI(n)))(s||n)}})();static ɵprov=ue$1({token:n,factory:n.ɵfac})}return n})();var ae=new T(`MESSAGE_INSTANCE`);var ye=(()=>{class n extends T$1{componentName=`Message`;_componentStyle=y(te);bindDirectiveInstance=y(y$1,{self:!0});$pcMessage=y(ae,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}severity=gV(`info`);closable=gV(!1,{transform:_V});icon=gV();closeIcon=gV();life=gV(void 0,{transform:MV});size=gV();variant=gV();motionOptions=gV();computedMotionOptions=T_(()=>l(l({},this.ptm(`motion`)),this.motionOptions()));onClose=hV();get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}visible=Si(!0);containerTemplate=EV(`container`,{descendants:!1});iconTemplate=EV(`icon`,{descendants:!1});closeIconTemplate=EV(`closeicon`,{descendants:!1});closeCallback=e=>{this.close(e)};containerContext={closeCallback:this.closeCallback};onInit(){let e=this.life();e&&setTimeout(()=>{this.close(new Event(`close`))},e)}close(e){this.visible.set(!1),this.onClose.emit({originalEvent:e})}dataP=T_(()=>this.cn({outlined:this.variant()===`outlined`,simple:this.variant()===`simple`,[this.severity()]:this.severity(),[this.size()]:this.size()}));static ɵfac=(()=>{let e;return function(s){return(e||(e=sI(n)))(s||n)}})();static ɵcmp=GC({type:n,selectors:[[`p-message`]],contentQueries:function(o,s,d){o&1&&Nm(d,s.containerTemplate,ie,4)(d,s.iconTemplate,ce,4)(d,s.closeIconTemplate,re,4),o&2&&mb(3)},hostAttrs:[`role`,`alert`,`aria-live`,`polite`],hostVars:5,hostBindings:function(o,s){o&1&&(qi(function(){return`p-message-enter-active`}),Gi(function(){return`p-message-leave-active`})),o&2&&(mm(`data-p`,s.dataP()),Ob(s.cx(`root`)),Pm(`p-message-leave-active`,!s.visible()))},inputs:{severity:[1,`severity`],closable:[1,`closable`],icon:[1,`icon`],closeIcon:[1,`closeIcon`],life:[1,`life`],size:[1,`size`],variant:[1,`variant`],motionOptions:[1,`motionOptions`]},outputs:{onClose:`onClose`},features:[e_([te,{provide:ae,useExisting:n},{provide:V,useExisting:n}]),tw([y$1]),om],ngContentSelectors:le,decls:7,vars:12,consts:[[3,`pBind`],[3,`pBind`,`class`],[`pRipple`,``,`type`,`button`,3,`pBind`,`class`],[4,`ngTemplateOutlet`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`pRipple`,``,`type`,`button`,3,`click`,`pBind`],[`data-p-icon`,`times`,3,`pBind`,`class`],[`data-p-icon`,`times`,3,`pBind`]],template:function(o,s){o&1&&(db(),ds(0,`div`,0)(1,`div`,0),qw(2,ge,1,1,`ng-container`),qw(3,me,1,4,`i`,1),qw(4,ue,1,2,`ng-container`)(5,be,2,4,`span`,1),qw(6,we,4,6,`button`,2),su()()),o&2&&(Ob(s.cx(`contentWrapper`)),vm(`pBind`,s.ptm(`contentWrapper`)),mm(`data-p`,s.dataP()),oT(),Ob(s.cx(`content`)),vm(`pBind`,s.ptm(`content`)),mm(`data-p`,s.dataP()),oT(),Gw(s.iconTemplate()?2:-1),oT(),Gw(s.icon()?3:-1),oT(),Gw(s.containerTemplate()?4:5),oT(2),Gw(s.closable()?6:-1))},dependencies:[Uc,G,St,Gs,y$1,dt],encapsulation:2})}return n})();var Re=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=zC({type:n});static ɵinj=Td({imports:[ye,Gs,Gs]})}return n})();export{ye as n,Re as t};