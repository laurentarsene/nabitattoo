import{t as l}from"./chunk-CS77MaYu.js";import{$n as mm,Cn as fu,Er as tw,Fr as vm,Gn as lD,Gt as _m,In as i_,L as MV,Mr as v_,Nr as vb,Nt as Yd,Or as ue,P as Lh,Qr as ym,S as Gw,Sr as su,U as Nm,Wr as xb,Wt as _V,Y as Ob,Yr as y,Zn as mb,_r as sI,_t as T_,b as GC,bn as fb,br as sm,cn as ds,d as Dm,dt as Si,ei as zC,fn as e_,fr as qw,ir as o_,jn as hV,kr as uu,mt as T,ni as zm,nr as nb,on as db,or as om,p as EV,qn as lb,rr as oT,rt as Qd,un as du,vr as s_,vt as Td,wn as gV,xt as Ub}from"./chunk-BvNdw-tD.js";import{h as Uc,p as Qf,r as De,y as fv}from"./chunk-fFpEnBvw.js";import{$ as ei,At as ys,Ot as ws,R as Ws,Tt as us,a as d,dt as na,g as Es,ht as os,i as t,l as Ai,n as d$1,ot as is,t as F,y as Gs}from"./main-JFYWHEXQ.js";import{t as P}from"./chunk-B9Y6Yjpo.js";import{_ as wi,f as V,n as Be$1,u as T$1,y as y$1}from"./chunk-CUe4qX-k.js";import{t as I}from"./chunk-ZNpy4I0v.js";import{n as lt$1,t as dt$1}from"./chunk-_rBI11rV.js";var Pe=`
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: dt('avatar.width');
        height: dt('avatar.height');
        font-weight: dt('avatar.font.weight');
        font-size: dt('avatar.font.size');
        background: dt('avatar.background');
        color: dt('avatar.color');
        border-radius: dt('avatar.border.radius');
    }

    .p-avatar-image {
        background: transparent;
    }

    .p-avatar-circle {
        border-radius: 50%;
    }

    .p-avatar-circle img {
        border-radius: 50%;
    }

    .p-avatar-icon {
        font-size: dt('avatar.icon.size');
        width: dt('avatar.icon.size');
        height: dt('avatar.icon.size');
    }

    .p-avatar img {
        width: 100%;
        height: 100%;
    }

    .p-avatar-lg {
        width: dt('avatar.lg.width');
        height: dt('avatar.lg.width');
        font-size: dt('avatar.lg.font.size');
    }

    .p-avatar-lg .p-avatar-icon {
        font-size: dt('avatar.lg.icon.size');
        width: dt('avatar.lg.icon.size');
        height: dt('avatar.lg.icon.size');
    }

    .p-avatar-xl {
        width: dt('avatar.xl.width');
        height: dt('avatar.xl.width');
        font-size: dt('avatar.xl.font.size');
    }

    .p-avatar-xl .p-avatar-icon {
        font-size: dt('avatar.xl.icon.size');
        width: dt('avatar.xl.icon.size');
        height: dt('avatar.xl.icon.size');
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }

    .p-avatar-group .p-avatar + .p-avatar {
        margin-inline-start: dt('avatar.group.offset');
    }

    .p-avatar-group .p-avatar {
        border: 2px solid dt('avatar.group.border.color');
    }

    .p-avatar-group .p-avatar-lg + .p-avatar-lg {
        margin-inline-start: dt('avatar.lg.group.offset');
    }

    .p-avatar-group .p-avatar-xl + .p-avatar-xl {
        margin-inline-start: dt('avatar.xl.group.offset');
    }
`;var We=[`*`];function Je(t,o){if(t&1&&(ds(0,`span`,2),Ub(1),su()),t&2){let e=lb();Ob(e.cx(`label`)),vm(`pBind`,e.ptm(`label`)),mm(`data-p`,e.dataP()),oT(),zm(e.label())}}function Ke(t,o){if(t&1&&ym(0,`span`,2),t&2){let e=lb();Ob(e.cn(e.cx(`icon`),e.icon())),vm(`pBind`,e.ptm(`icon`)),mm(`data-p`,e.dataP())}}function Xe(t,o){if(t&1){let e=nb();ds(0,`img`,3),_m(`error`,function(i){Qd(e);return Yd(lb().imageError(i))}),su()}if(t&2){let e=lb();vm(`pBind`,e.ptm(`image`))(`src`,e.image(),Lh),mm(`aria-label`,e.ariaLabel())(`data-p`,e.dataP())}}var Ye={root:({instance:t})=>{let o=t.image(),e=t.shape(),n=t.size();return[`p-avatar p-component`,{"p-avatar-image":o!=null,"p-avatar-circle":e===`circle`,"p-avatar-lg":n===`large`,"p-avatar-xl":n===`xlarge`}]},label:`p-avatar-label`,icon:`p-avatar-icon`};var ze=(()=>{class t extends Ai{name=`avatar`;style=Pe;classes=Ye;static ɵfac=(()=>{let e;return function(i){return(e||(e=sI(t)))(i||t)}})();static ɵprov=ue({token:t,factory:t.ɵfac})}return t})();var Be=new T(`AVATAR_INSTANCE`);var oe=(()=>{class t extends T$1{componentName=`Avatar`;$pcAvatar=y(Be,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=y(y$1,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}label=gV();icon=gV();image=gV();size=gV(`normal`);shape=gV(`square`);ariaLabel=gV();ariaLabelledBy=gV();onImageError=hV();_componentStyle=y(ze);dataP=T_(()=>{let e=this.shape(),n=this.size();return this.cn({[e]:e,[n]:n})});imageError(e){this.onImageError.emit(e)}static ɵfac=(()=>{let e;return function(i){return(e||(e=sI(t)))(i||t)}})();static ɵcmp=GC({type:t,selectors:[[`p-avatar`]],hostVars:5,hostBindings:function(n,i){n&2&&(mm(`aria-label`,i.ariaLabel())(`aria-labelledby`,i.ariaLabelledBy())(`data-p`,i.dataP()),Ob(i.cx(`root`)))},inputs:{label:[1,`label`],icon:[1,`icon`],image:[1,`image`],size:[1,`size`],shape:[1,`shape`],ariaLabel:[1,`ariaLabel`],ariaLabelledBy:[1,`ariaLabelledBy`]},outputs:{onImageError:`onImageError`},features:[e_([ze,{provide:Be,useExisting:t},{provide:V,useExisting:t}]),tw([y$1]),om],ngContentSelectors:We,decls:4,vars:1,consts:[[3,`pBind`,`class`],[3,`pBind`,`src`],[3,`pBind`],[3,`error`,`pBind`,`src`]],template:function(n,i){n&1&&(db(),fb(0),qw(1,Je,2,5,`span`,0)(2,Ke,1,4,`span`,0)(3,Xe,1,4,`img`,1)),n&2&&(oT(),Gw(i.label()?1:i.icon()?2:i.image()?3:-1))},dependencies:[Gs,y$1],encapsulation:2})}return t})();var He=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=zC({type:t});static ɵinj=Td({imports:[oe,Gs,Gs]})}return t})();var je=`
    .p-popover {
        margin-block-start: dt('popover.gutter');
        background: dt('popover.background');
        color: dt('popover.color');
        border: 1px solid dt('popover.border.color');
        border-radius: dt('popover.border.radius');
        box-shadow: dt('popover.shadow');
        will-change: transform;
    }

    .p-popover-content {
        padding: dt('popover.content.padding');
    }

    .p-popover-flipped {
        margin-block-start: calc(dt('popover.gutter') * -1);
        margin-block-end: dt('popover.gutter');
    }

    .p-popover:after,
    .p-popover:before {
        bottom: 100%;
        left: calc(dt('popover.arrow.offset') + dt('popover.arrow.left', '0px'));
        content: ' ';
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }

    .p-popover:after {
        border-width: calc(dt('popover.gutter') - 2px);
        margin-left: calc(-1 * (dt('popover.gutter') - 2px));
        border-style: solid;
        border-color: transparent;
        border-bottom-color: dt('popover.background');
    }

    .p-popover:before {
        border-width: dt('popover.gutter');
        margin-left: calc(-1 * dt('popover.gutter'));
        border-style: solid;
        border-color: transparent;
        border-bottom-color: dt('popover.border.color');
    }

    .p-popover-flipped:after,
    .p-popover-flipped:before {
        bottom: auto;
        top: 100%;
    }

    .p-popover.p-popover-flipped:after {
        border-bottom-color: transparent;
        border-top-color: dt('popover.background');
    }

    .p-popover.p-popover-flipped:before {
        border-bottom-color: transparent;
        border-top-color: dt('popover.border.color');
    }
`;var et=[`content`];var tt=[`*`];function nt(t,o){t&1&&Dm(0)}function it(t,o){if(t&1&&sm(0,nt,1,0,`ng-container`,3),t&2){let e=lb(2);vm(`ngTemplateOutlet`,e.contentTemplate())(`ngTemplateOutletContext`,e.contentTemplateContext())}}function ot(t,o){if(t&1){let e=nb();ds(0,`div`,1),_m(`click`,function(i){Qd(e);return Yd(lb().onOverlayClick(i))})(`pMotionOnEnter`,function(i){Qd(e);return Yd(lb().onAnimationStart(i))})(`pMotionOnAfterLeave`,function(){Qd(e);return Yd(lb().onAnimationEnd())}),ds(1,`div`,2),_m(`click`,function(i){Qd(e);return Yd(lb().onContentClick(i))})(`mousedown`,function(i){Qd(e);return Yd(lb().onContentClick(i))}),fb(2),qw(3,it,1,2,`ng-container`),su()()}if(t&2){let e=lb();xb(e.sx(`root`)),Ob(e.cn(e.cx(`root`),e.styleClass())),vm(`pBind`,e.ptm(`root`))(`pMotion`,e.overlayVisible())(`pMotionAppear`,!0)(`pMotionOptions`,e.computedMotionOptions()),mm(`aria-modal`,e.overlayVisible())(`aria-label`,e.ariaLabel())(`aria-labelledBy`,e.ariaLabelledBy()),oT(),Ob(e.cx(`content`)),vm(`pBind`,e.ptm(`content`)),oT(2),Gw(e.contentTemplate()?3:-1)}}var rt={root:({instance:t})=>{return l({position:`absolute`},t.style())}};var at={root:`p-popover p-component`,content:`p-popover-content`};var Re=(()=>{class t extends Ai{name=`popover`;style=je;classes=at;inlineStyles=rt;static ɵfac=(()=>{let e;return function(i){return(e||(e=sI(t)))(i||t)}})();static ɵprov=ue({token:t,factory:t.ɵfac})}return t})();var $e=new T(`POPOVER_INSTANCE`);var re=(()=>{class t extends T$1{componentName=`Popover`;$pcPopover=y($e,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=y(y$1,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`host`))}ariaLabel=gV();ariaLabelledBy=gV();dismissable=gV(!0,{transform:_V});style=gV();styleClass=gV();appendTo=gV(`body`);autoZIndex=gV(!0,{transform:_V});ariaCloseLabel=gV();baseZIndex=gV(0,{transform:MV});focusOnShow=gV(!0,{transform:_V});motionOptions=gV(void 0);computedMotionOptions=T_(()=>l(l({},this.ptm(`motion`)),this.motionOptions()));onShow=hV();onHide=hV();$appendTo=T_(()=>this.appendTo()||this.config.overlayAppendTo());container;overlayVisible=Si(!1);render=Si(!1);selfClick=!1;documentClickListener;target=null;willHide;scrollHandler;documentResizeListener;contentTemplate=EV(`content`,{descendants:!1});onCloseClickCallback=this.onCloseClick.bind(this);contentTemplateContext=T_(()=>({closeCallback:this.onCloseClickCallback}));destroyCallback;overlayEventListener;overlaySubscription;_componentStyle=y(Re);overlayService=y(Ws);bindDocumentClickListener(){if(Qf(this.platformId)&&!this.documentClickListener){let e=Es()?`touchstart`:`click`,n=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentClickListener=this.renderer.listen(n,e,i=>{this.dismissable()&&(!this.container?.contains(i.target)&&this.target!==i.target&&!this.target?.contains(i.target)&&!this.selfClick&&this.hide(),this.selfClick=!1)})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null,this.selfClick=!1)}toggle(e,n){this.overlayVisible()?(this.hasTargetChanged(e,n)&&(this.destroyCallback=()=>{this.show(null,n||e.currentTarget||e.target)}),this.hide()):this.show(e,n)}show(e,n){n&&e&&e.stopPropagation(),this.container&&!this.overlayVisible()&&(this.container=null),this.target=n||e.currentTarget||e.target,this.overlayVisible.set(!0),this.render.set(!0)}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.selfClick=!0}onContentClick(e){let n=e.target;this.selfClick=e.offsetX<n.clientWidth&&e.offsetY<n.clientHeight}hasTargetChanged(e,n){return this.target!=null&&this.target!==(n||e.currentTarget||e.target)}appendOverlay(){this.$appendTo()&&this.$appendTo()!==`self`&&(this.$appendTo()===`body`?os(this.document.body,this.container):os(this.$appendTo(),this.container))}restoreAppend(){this.container&&this.$appendTo()&&this.$appendTo()!==`self`&&os(this.el.nativeElement,this.container)}setZIndex(){this.autoZIndex()&&I.set(`overlay`,this.container,this.baseZIndex()+this.config.zIndex.overlay)}align(){if(this.target&&this.container){is(this.container,this.target,!1);let e=ys(this.container),n=ys(this.target),i=e.left,a=e.top,b=n.left,D=n.top,Ue=this.document.defaultView?.getComputedStyle(this.container).getPropertyValue(`border-radius`),ae=0;i<b&&(ae=b-i-parseFloat(Ue)*2),this.container.style.setProperty(na(`popover.arrow.left`).name,`${ae}px`),a<D&&(this.container.setAttribute(`data-p-popover-flipped`,`true`),!this.$unstyled()&&ei(this.container,`p-popover-flipped`))}}onAnimationStart(e){this.container=e.element,this.container?.setAttribute(this.$attrSelector,``),this.appendOverlay(),this.align(),this.setZIndex(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),this.focusOnShow()&&this.focus(),this.overlayEventListener=n=>{this.container&&this.container.contains(n.target)&&(this.selfClick=!0)},this.overlaySubscription=this.overlayService.clickObservable.subscribe(this.overlayEventListener),this.onShow.emit(null)}onAnimationEnd(){this.overlayVisible()||(this.destroyCallback&&(this.destroyCallback(),this.destroyCallback=null),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),this.autoZIndex()&&I.clear(this.container),this.onContainerDestroy(),this.onHide.emit({}),this.render.set(!1),this.container=null)}focus(){let e=us(this.container,`[autofocus]`);e&&setTimeout(()=>e.focus(),5)}hide(){this.overlayVisible.set(!1)}onCloseClick(e){this.hide(),e.preventDefault()}onEscapeKeydown(e){this.hide()}onWindowResize(){this.overlayVisible()&&!ws()&&this.hide()}bindDocumentResizeListener(){if(Qf(this.platformId)&&!this.documentResizeListener){let e=this.document.defaultView;this.documentResizeListener=this.renderer.listen(e,`resize`,this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){Qf(this.platformId)&&(this.scrollHandler||(this.scrollHandler=new Be$1(this.target,()=>{this.overlayVisible()&&this.hide()})),this.scrollHandler.bindScrollListener())}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}onContainerDestroy(){this.cd.destroyed||(this.target=null),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}onDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex()&&I.clear(this.container),this.cd.destroyed||(this.target=null),this.destroyCallback=null,this.container&&(this.restoreAppend(),this.onContainerDestroy()),this.overlaySubscription&&this.overlaySubscription.unsubscribe()}static ɵfac=(()=>{let e;return function(i){return(e||(e=sI(t)))(i||t)}})();static ɵcmp=GC({type:t,selectors:[[`p-popover`]],contentQueries:function(n,i,a){n&1&&Nm(a,i.contentTemplate,et,4),n&2&&mb()},hostBindings:function(n,i){n&1&&_m(`keydown.escape`,function(b){return i.onEscapeKeydown(b)},lD)},inputs:{ariaLabel:[1,`ariaLabel`],ariaLabelledBy:[1,`ariaLabelledBy`],dismissable:[1,`dismissable`],style:[1,`style`],styleClass:[1,`styleClass`],appendTo:[1,`appendTo`],autoZIndex:[1,`autoZIndex`],ariaCloseLabel:[1,`ariaCloseLabel`],baseZIndex:[1,`baseZIndex`],focusOnShow:[1,`focusOnShow`],motionOptions:[1,`motionOptions`]},outputs:{onShow:`onShow`,onHide:`onHide`},features:[e_([Re,{provide:$e,useExisting:t},{provide:V,useExisting:t}]),tw([y$1]),om],ngContentSelectors:tt,decls:1,vars:1,consts:[[`role`,`dialog`,`pMotionName`,`p-anchored-overlay`,3,`pBind`,`class`,`style`,`pMotion`,`pMotionAppear`,`pMotionOptions`],[`role`,`dialog`,`pMotionName`,`p-anchored-overlay`,3,`click`,`pMotionOnEnter`,`pMotionOnAfterLeave`,`pBind`,`pMotion`,`pMotionAppear`,`pMotionOptions`],[3,`click`,`mousedown`,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`]],template:function(n,i){n&1&&(db(),qw(0,ot,4,15,`div`,0)),n&2&&Gw(i.render()?0:-1)},dependencies:[Uc,Gs,y$1,dt$1,lt$1],encapsulation:2})}return t})();var Ze=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=zC({type:t});static ɵinj=Td({imports:[re,Gs,Gs]})}return t})();var lt=t=>({background:t,color:`#f2f1ed`});var ct=(t,o)=>({motif:t,jusque:o});var dt=(t,o,e)=>({n:t,de:o,a:e});function pt(t,o){if(t&1&&ym(0,`p-avatar`,4),t&2){let e=lb(3);vm(`image`,o)(`ariaLabel`,e.artiste().prenom)}}function ut(t,o){if(t&1&&ym(0,`p-avatar`,6),t&2){let e=lb(3);xb(o_(4,lt,e.teinte())),vm(`label`,e.initiale())(`ariaLabel`,e.artiste().prenom)}}function mt(t,o){if(t&1&&qw(0,pt,1,2,`p-avatar`,4)(1,ut,1,6,`p-avatar`,5),t&2){let e;Gw((e=lb(2).photo())?0:1,e)}}function ft(t,o){if(t&1&&(ds(0,`span`,9),Ub(1),su()),t&2){let e=lb(3);oT(),zm(e.artiste().prenom)}}function gt(t,o){if(t&1&&(ds(0,`p`),Ub(1),su()),t&2){let e=lb(),n=lb(2).$implicit,i=lb();oT(),fu(` `,n(`admin.presence.absente`,i_(1,ct,e.absence.label||n(`admin.motifs.`+e.absence.motif),i.jusque(e.absence.fin))),` `)}}function vt(t,o){if(t&1&&(ds(0,`p`),Ub(1),su()),t&2){let e=lb(3).$implicit;oT(),zm(e(`admin.presence.rien_aujourdhui`))}}function _t(t,o){if(t&1&&(ds(0,`p`),Ub(1),su()),t&2){let e=lb(),n=lb(2).$implicit,i=lb();oT(),fu(` `,n(e.seances===1?`admin.presence.au_salon_une`:`admin.presence.au_salon`,s_(1,dt,e.seances,i.heure(e.premier),i.heure(e.dernier))),` `)}}function ht(t,o){if(t&1&&qw(0,gt,2,4,`p`)(1,vt,2,1,`p`)(2,_t,2,5,`p`),t&2){let e=o;Gw(e.absence?0:e.seances===0?1:2)}}function bt(t,o){if(t&1&&(ds(0,`p`),Ub(1),su()),t&2){let e=lb(2).$implicit;oT(),zm(e(`commun.chargement`))}}function yt(t,o){if(t&1){let e=nb();ds(0,`button`,7,1),_m(`mouseenter`,function(i){Qd(e);let a=vb(1),b=vb(5);return Yd(lb(2).survoler(i,b,a))})(`focus`,function(i){Qd(e);let a=vb(1),b=vb(5);return Yd(lb(2).survoler(i,b,a))})(`mouseleave`,function(){Qd(e);let i=vb(5);return Yd(lb(2).quitter(i))})(`blur`,function(){Qd(e);let i=vb(5);return Yd(lb(2).quitter(i))})(`click`,function(i){Qd(e);let a=vb(1),b=vb(5);return Yd(lb(2).ouvrir(i,b,a))}),Dm(2,8),su(),qw(3,ft,2,1,`span`,9),ds(4,`p-popover`,10,2)(6,`div`,11),_m(`mouseenter`,function(){Qd(e);return Yd(lb(2).retenir())})(`mouseleave`,function(){Qd(e);let i=vb(5);return Yd(lb(2).quitter(i))}),ds(7,`strong`),Ub(8),su(),qw(9,ht,3,1)(10,bt,2,1,`p`),su()()}if(t&2){let e;lb();let n=vb(2),i=lb();mm(`aria-label`,i.artiste().prenom),oT(2),vm(`ngTemplateOutlet`,n),oT(),Gw(i.avecNom()?3:-1),oT(5),zm(i.artiste().prenom),oT(),Gw((e=i.presence())?9:10,e)}}function xt(t,o){if(t&1&&(ds(0,`span`,9),Ub(1),su()),t&2){let e=lb(3);oT(),zm(e.artiste().prenom)}}function Ct(t,o){if(t&1&&(Dm(0,8),qw(1,xt,2,1,`span`,9)),t&2){lb();let e=vb(2),n=lb();vm(`ngTemplateOutlet`,e),oT(),Gw(n.avecNom()?1:-1)}}function wt(t,o){if(t&1&&(uu(0),sm(1,mt,2,1,`ng-template`,null,0,v_),qw(3,yt,11,5)(4,Ct,2,2),du()),t&2){let e=lb();oT(3),Gw(e.interactif()?3:4)}}var qe=class t$1{artiste=gV.required();avecNom=gV(!0);interactif=gV(!0);api=y(P);router=y(De);salon=y(t);session=y(d);langues=y(d$1);presence=Si(null);photo=T_(()=>this.api.urlPhoto(this.artiste().photo_path));initiale=T_(()=>(this.artiste().prenom||`·`).charAt(0).toUpperCase());teinte=T_(()=>this.artiste().couleur_agenda||`#45433e`);cEstMoi=T_(()=>{let o=this.session.utilisateur()?.id;return!!o&&!!this.artiste().user_id&&this.artiste().user_id===o});ouvrir(o,e,n){if(o.stopPropagation(),this.cEstMoi()){this.router.navigate([`/app`,this.salon.slug(),`profil`]);return}this.montrer(o,e,n)}survoler(o,e,n){this.cEstMoi()||this.montrer(o,e,n)}montrer(o,e,n){clearTimeout(this.fermeture);let i=this.artiste().id;i&&!this.presence()&&this.api.presenceDuJour(i).then(a=>this.presence.set(a)),e.show(o,n)}fermeture;quitter(o){clearTimeout(this.fermeture),this.fermeture=setTimeout(()=>o.hide(),220)}retenir(){clearTimeout(this.fermeture)}heure(o){return o?new Date(o).toLocaleTimeString(F(this.langues.courante()),{hour:`2-digit`,minute:`2-digit`}):``}jusque(o){return new Date(new Date(o).getTime()-1).toLocaleDateString(F(this.langues.courante()),{day:`numeric`,month:`long`})}static ɵfac=function(e){return new(e||t$1)};static ɵcmp=GC({type:t$1,selectors:[[`app-artiste`]],inputs:{artiste:[1,`artiste`],avecNom:[1,`avecNom`],interactif:[1,`interactif`]},decls:1,vars:0,consts:[[`portrait`,``],[`ancre`,``],[`panneau`,``],[4,`transloco`],[`shape`,`circle`,3,`image`,`ariaLabel`],[`shape`,`circle`,3,`label`,`ariaLabel`,`style`],[`shape`,`circle`,3,`label`,`ariaLabel`],[`type`,`button`,1,`visage`,3,`mouseenter`,`focus`,`mouseleave`,`blur`,`click`],[3,`ngTemplateOutlet`],[1,`nom`],[`appendTo`,`body`,`styleClass`,`panneau-artiste`],[1,`presence`,3,`mouseenter`,`mouseleave`]],template:function(e,n){e&1&&sm(0,wt,5,1,`ng-container`,3)},dependencies:[Uc,He,oe,wi,Ze,re,fv],styles:[`@charset "UTF-8";[_nghost-%COMP%]{display:inline-flex;align-items:center;gap:8px;min-width:0}.visage[_ngcontent-%COMP%]{display:block;padding:0;border:none;background:none;cursor:pointer;line-height:0;border-radius:50%;flex:none}[_nghost-%COMP%]     .p-avatar{width:var(--%NS%taille, 26px);height:var(--%NS%taille, 26px);font-size:calc(var(--%NS%taille, 26px) * .42);font-weight:600;flex:none;overflow:hidden;border:none}[_nghost-%COMP%]     .p-avatar img{width:100%;height:100%;object-fit:cover}.nom[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}`]})};export{re as a,qe as i,Ze as n,oe as r,He as t};