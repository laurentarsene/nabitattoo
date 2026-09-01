import{t as l}from"./chunk-CS77MaYu.js";import{Er as tw,Fr as vm,Gt as _m,Kr as xm,Nt as Yd,Or as ue$1,Pr as vf,S as Gw,Sr as su,U as Nm,Wr as xb,Y as Ob,Yn as mV,Yr as y,Zn as mb,_r as sI,_t as T_,b as GC,bn as fb,br as sm,cn as ds,d as Dm,dt as Si,fn as e_,fr as qw,ir as o_,jn as hV,jr as vV,mr as r_,mt as T,nr as nb,on as db,or as om,p as EV,qn as lb,rr as oT,rt as Qd,wn as gV}from"./chunk-BvNdw-tD.js";import{h as Uc,p as Qf}from"./chunk-fFpEnBvw.js";import{$ as ei,H as Zn,Ot as ws,R as Ws,St as ti,bt as rs,gt as ps,ht as os,l as Ai,ot as is,xt as ss,y as Gs}from"./main-JFYWHEXQ.js";import{f as V,n as Be,u as T$1,y as y$1}from"./chunk-CUe4qX-k.js";import{t as I}from"./chunk-ZNpy4I0v.js";import{r as ze,t as dt}from"./chunk-_rBI11rV.js";var pe=[`content`];var fe=[`overlay`];var he=[`*`,`*`];var ge=()=>({mode:null});var ye=t=>({$implicit:t});var be=t=>({mode:t});function Ce(t,o){t&1&&Dm(0)}function _e(t,o){if(t&1&&(fb(0),sm(1,Ce,1,0,`ng-container`,2)),t&2){let e=lb();oT(),vm(`ngTemplateOutlet`,e.contentTemplate())(`ngTemplateOutletContext`,o_(3,ye,r_(2,ge)))}}function xe(t,o){t&1&&Dm(0)}function Ee(t,o){if(t&1){let e=nb();ds(0,`div`,4,0),_m(`click`,function(){Qd(e);return Yd(lb(2).onOverlayClick())}),ds(2,`p-motion`,5),_m(`onBeforeEnter`,function(i){Qd(e);return Yd(lb(2).onOverlayBeforeEnter(i))})(`onEnter`,function(i){Qd(e);return Yd(lb(2).onOverlayEnter(i))})(`onAfterEnter`,function(i){Qd(e);return Yd(lb(2).onOverlayAfterEnter(i))})(`onBeforeLeave`,function(i){Qd(e);return Yd(lb(2).onOverlayBeforeLeave(i))})(`onLeave`,function(i){Qd(e);return Yd(lb(2).onOverlayLeave(i))})(`onAfterLeave`,function(i){Qd(e);return Yd(lb(2).onOverlayAfterLeave(i))}),ds(3,`div`,4,1),_m(`click`,function(i){Qd(e);return Yd(lb(2).onOverlayContentClick(i))}),fb(5,1),sm(6,xe,1,0,`ng-container`,2),su()()()}if(t&2){let e=lb(2);xb(e.sx(`root`)),Ob(e.cn(e.cx(`root`),e.mergedStyleClass())),vm(`pBind`,e.ptm(`root`)),oT(2),vm(`visible`,e.visible())(`appear`,!0)(`options`,e.computedMotionOptions()),oT(),xb(e.sx(`content`)),Ob(e.cn(e.cx(`content`),e.mergedContentStyleClass())),vm(`pBind`,e.ptm(`content`)),oT(3),vm(`ngTemplateOutlet`,e.contentTemplate())(`ngTemplateOutletContext`,o_(17,ye,o_(15,be,e.overlayMode())))}}function Oe(t,o){if(t&1&&qw(0,Ee,7,19,`div`,3),t&2)Gw(lb().modalVisible()?0:-1)}var De={root:({instance:t})=>{return l(l({position:`absolute`,top:`0`},t.modal()?t.$overlayResponsiveOptions()?.style:t.$overlayOptions()?.style),t.style())},content:({instance:t})=>{return l(l({},t.modal()?t.$overlayResponsiveOptions()?.contentStyle:t.$overlayOptions()?.contentStyle),t.contentStyle())}};var Le=`
.p-overlay-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-content {
    transform-origin: inherit;
    will-change: transform;
}

/* Github Issue #18560 */
.p-component-overlay.p-component {
    position: relative;
}

.p-overlay-modal > .p-overlay-content {
    z-index: 1;
    width: 90%;
}

/* Position */
/* top */
.p-overlay-top {
    align-items: flex-start;
}
.p-overlay-top-start {
    align-items: flex-start;
    justify-content: flex-start;
}
.p-overlay-top-end {
    align-items: flex-start;
    justify-content: flex-end;
}

/* bottom */
.p-overlay-bottom {
    align-items: flex-end;
}
.p-overlay-bottom-start {
    align-items: flex-end;
    justify-content: flex-start;
}
.p-overlay-bottom-end {
    align-items: flex-end;
    justify-content: flex-end;
}

/* left */
.p-overlay-left {
    justify-content: flex-start;
}
.p-overlay-left-start {
    justify-content: flex-start;
    align-items: flex-start;
}
.p-overlay-left-end {
    justify-content: flex-start;
    align-items: flex-end;
}

/* right */
.p-overlay-right {
    justify-content: flex-end;
}
.p-overlay-right-start {
    justify-content: flex-end;
    align-items: flex-start;
}
.p-overlay-right-end {
    justify-content: flex-end;
    align-items: flex-end;
}

.p-overlay-content ~ .p-overlay-content {
    display: none;
}
`;var Me={host:`p-overlay-host`,root:({instance:t})=>{let o=t.modal(),e=t.overlayResponsiveDirection();return[`p-overlay p-component`,{"p-overlay-modal p-overlay-mask p-overlay-mask-enter-active":o,"p-overlay-center":o&&e===`center`,"p-overlay-top":o&&e===`top`,"p-overlay-top-start":o&&e===`top-start`,"p-overlay-top-end":o&&e===`top-end`,"p-overlay-bottom":o&&e===`bottom`,"p-overlay-bottom-start":o&&e===`bottom-start`,"p-overlay-bottom-end":o&&e===`bottom-end`,"p-overlay-left":o&&e===`left`,"p-overlay-left-start":o&&e===`left-start`,"p-overlay-left-end":o&&e===`left-end`,"p-overlay-right":o&&e===`right`,"p-overlay-right-start":o&&e===`right-start`,"p-overlay-right-end":o&&e===`right-end`}]},content:`p-overlay-content`};var ue=(()=>{class t extends Ai{name=`overlay`;style=Le;classes=Me;inlineStyles=De;static ɵfac=(()=>{let e;return function(i){return(e||(e=sI(t)))(i||t)}})();static ɵprov=ue$1({token:t,factory:t.ɵfac})}return t})();var me=new T(`OVERLAY_INSTANCE`);var qe=(()=>{class t extends T$1{componentName=`Overlay`;$pcOverlay=y(me,{optional:!0,skipSelf:!0})??void 0;hostName=gV(``);visible=mV(!1);mode=gV();style=gV();styleClass=gV();contentStyle=gV();contentStyleClass=gV();target=gV();autoZIndex=gV();baseZIndex=gV();listener=gV();responsive=gV();options=gV();appendTo=gV(void 0);inline=gV(!1);motionOptions=gV(void 0);onBeforeShow=hV();onShow=hV();onBeforeHide=hV();onHide=hV();onAnimationStart=hV();onAnimationDone=hV();onBeforeEnter=hV();onEnter=hV();onAfterEnter=hV();onBeforeLeave=hV();onLeave=hV();onAfterLeave=hV();overlayViewChild=vV(`overlay`);contentViewChild=vV(`content`);contentTemplate=EV(`content`,{descendants:!1});hostAttrSelector=gV();$appendTo=T_(()=>this.appendTo()||this.config.overlayAppendTo());$overlayOptions=T_(()=>l(l({},this.config?.overlayOptions),this.options()));$overlayResponsiveOptions=T_(()=>l(l({},this.$overlayOptions()?.responsive),this.responsive()));overlayResponsiveDirection=T_(()=>this.$overlayResponsiveOptions()?.direction||`center`);$mode=T_(()=>this.mode()||this.$overlayOptions()?.mode);mergedStyleClass=T_(()=>this.cn(this.styleClass(),this.modal()?this.$overlayResponsiveOptions()?.styleClass:this.$overlayOptions()?.styleClass));mergedContentStyleClass=T_(()=>this.cn(this.contentStyleClass(),this.modal()?this.$overlayResponsiveOptions()?.contentStyleClass:this.$overlayOptions()?.contentStyleClass));$target=T_(()=>{let e=this.target()||this.$overlayOptions()?.target;return e===void 0?`@prev`:e});$autoZIndex=T_(()=>{let e=this.autoZIndex()||this.$overlayOptions()?.autoZIndex;return e===void 0?!0:e});$baseZIndex=T_(()=>{let e=this.baseZIndex()||this.$overlayOptions()?.baseZIndex;return e===void 0?0:e});$listener=T_(()=>this.listener()||this.$overlayOptions()?.listener);modal=T_(()=>{if(Qf(this.platformId))return this.$mode()===`modal`||this.$overlayResponsiveOptions()&&this.document.defaultView?.matchMedia(this.$overlayResponsiveOptions().media?.replace(`@media`,``)||`(max-width: ${this.$overlayResponsiveOptions().breakpoint})`).matches});overlayMode=T_(()=>this.$mode()||(this.modal()?`modal`:`overlay`));overlayEl=T_(()=>this.overlayViewChild()?.nativeElement);contentEl=T_(()=>this.contentViewChild()?.nativeElement);targetEl=T_(()=>Zn(this.$target(),this.el?.nativeElement));computedMotionOptions=T_(()=>l(l({},this.ptm(`motion`)),this.motionOptions()||this.$overlayOptions()?.motionOptions));modalVisible=Si(!1);isOverlayClicked=!1;isOverlayContentClicked=!1;scrollHandler;documentClickListener;documentResizeListener;_componentStyle=y(ue);bindDirectiveInstance=y(y$1,{self:!0});documentKeyboardListener;parentDragSubscription=null;transformOptions={default:`scaleY(0.8)`,center:`scale(0.7)`,top:`translate3d(0px, -100%, 0px)`,"top-start":`translate3d(0px, -100%, 0px)`,"top-end":`translate3d(0px, -100%, 0px)`,bottom:`translate3d(0px, 100%, 0px)`,"bottom-start":`translate3d(0px, 100%, 0px)`,"bottom-end":`translate3d(0px, 100%, 0px)`,left:`translate3d(-100%, 0px, 0px)`,"left-start":`translate3d(-100%, 0px, 0px)`,"left-end":`translate3d(-100%, 0px, 0px)`,right:`translate3d(100%, 0px, 0px)`,"right-start":`translate3d(100%, 0px, 0px)`,"right-end":`translate3d(100%, 0px, 0px)`};overlayService=y(Ws);constructor(){super(),vf(()=>{this.visible()&&!this.modalVisible()&&this.modalVisible.set(!0)})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`host`))}show(e,n=!1){this.onVisibleChange(!0),this.handleEvents(`onShow`,{overlay:e||this.overlayEl(),target:this.targetEl(),mode:this.overlayMode()}),n&&ps(this.targetEl()),this.modal()&&ei(this.document?.body,`p-overflow-hidden`)}hide(e,n=!1){if(this.visible())this.onVisibleChange(!1),this.handleEvents(`onHide`,{overlay:e||this.overlayEl(),target:this.targetEl(),mode:this.overlayMode()}),n&&ps(this.targetEl()),this.modal()&&ti(this.document?.body,`p-overflow-hidden`);else return}onVisibleChange(e){this.visible.set(e)}onOverlayClick(){this.isOverlayClicked=!0}onOverlayContentClick(e){this.overlayService.add({originalEvent:e,target:this.targetEl()}),this.isOverlayContentClicked=!0}container=Si(void 0);onOverlayBeforeEnter(e){this.handleEvents(`onBeforeShow`,{overlay:this.overlayEl(),target:this.targetEl(),mode:this.overlayMode()}),this.container.set(this.overlayEl()||e.element),this.show(this.overlayEl(),!0),this.hostAttrSelector()&&this.overlayEl()&&this.overlayEl().setAttribute(this.hostAttrSelector(),``),this.appendOverlay(),this.alignOverlay(),this.bindParentDragListener(),this.setZIndex(),this.handleEvents(`onBeforeEnter`,e)}onOverlayEnter(e){this.handleEvents(`onEnter`,e)}onOverlayAfterEnter(e){this.bindListeners(),this.handleEvents(`onAfterEnter`,e)}onOverlayBeforeLeave(e){this.handleEvents(`onBeforeHide`,{overlay:this.overlayEl(),target:this.targetEl(),mode:this.overlayMode()}),this.handleEvents(`onBeforeLeave`,e)}onOverlayLeave(e){this.handleEvents(`onLeave`,e)}onOverlayAfterLeave(e){this.hide(this.overlayEl(),!0),this.container.set(null),this.unbindListeners(),this.appendOverlay(),I.clear(this.overlayEl()),this.modalVisible.set(!1),this.cd.markForCheck(),this.handleEvents(`onAfterLeave`,e)}handleEvents(e,n){this[e].emit(n);let i=this.options();i&&i[e]&&i[e](n),this.config?.overlayOptions&&(this.config?.overlayOptions)[e]&&(this.config?.overlayOptions)[e](n)}setZIndex(){this.$autoZIndex()&&I.set(this.overlayMode(),this.overlayEl(),this.$baseZIndex()+this.config?.zIndex[this.overlayMode()])}appendOverlay(){this.$appendTo()&&this.$appendTo()!==`self`&&(this.$appendTo()===`body`?os(this.document.body,this.overlayEl()):os(this.$appendTo(),this.overlayEl()))}alignOverlay(){this.modal()||this.overlayEl()&&this.targetEl()&&(this.overlayEl().style.minWidth=rs(this.targetEl())+`px`,this.$appendTo()===`self`?ss(this.overlayEl(),this.targetEl()):is(this.overlayEl(),this.targetEl()))}bindListeners(){this.bindScrollListener(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindDocumentKeyboardListener()}unbindListeners(){this.unbindScrollListener(),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindDocumentKeyboardListener(),this.unbindParentDragListener()}bindParentDragListener(){!this.parentDragSubscription&&this.$appendTo()!==`self`&&this.targetEl&&(this.parentDragSubscription=this.overlayService.parentDragObservable.subscribe(e=>{e.contains(this.targetEl())&&this.hide(this.overlayEl(),!0)}))}unbindParentDragListener(){this.parentDragSubscription&&(this.parentDragSubscription.unsubscribe(),this.parentDragSubscription=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new Be(this.targetEl(),e=>{(!this.$listener()||this.$listener()(e,{type:`scroll`,mode:this.overlayMode(),valid:!0}))&&this.hide(e,!0)})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}bindDocumentClickListener(){this.documentClickListener||(this.documentClickListener=this.renderer.listen(this.document,`click`,e=>{let i=!(this.targetEl()&&(this.targetEl().isSameNode(e.target)||!this.isOverlayClicked&&this.targetEl().contains(e.target)))&&!this.isOverlayContentClicked;(this.$listener()?this.$listener()(e,{type:`outside`,mode:this.overlayMode(),valid:e.which!==3&&i}):i)&&this.hide(e),this.isOverlayClicked=this.isOverlayContentClicked=!1}))}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.document.defaultView,`resize`,e=>{(this.$listener()?this.$listener()(e,{type:`resize`,mode:this.overlayMode(),valid:!ws()}):!ws())&&this.hide(e,!0)}))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindDocumentKeyboardListener(){this.documentKeyboardListener||(this.documentKeyboardListener=this.renderer.listen(this.document.defaultView,`keydown`,e=>{if(this.$overlayOptions().hideOnEscape===!1||e.code!==`Escape`)return;(this.$listener()?this.$listener()(e,{type:`keydown`,mode:this.overlayMode(),valid:!ws()}):!ws())&&this.hide(e,!0)}))}unbindDocumentKeyboardListener(){this.documentKeyboardListener&&(this.documentKeyboardListener(),this.documentKeyboardListener=null)}onDestroy(){this.hide(this.overlayEl(),!0),this.overlayEl()&&this.$appendTo()!==`self`&&(this.renderer.appendChild(this.el.nativeElement,this.overlayEl()),I.clear(this.overlayEl())),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.unbindListeners()}static ɵfac=function(n){return new(n||t)};static ɵcmp=GC({type:t,selectors:[[`p-overlay`]],contentQueries:function(n,i,l){n&1&&Nm(l,i.contentTemplate,pe,4),n&2&&mb()},viewQuery:function(n,i){n&1&&xm(i.overlayViewChild,fe,5)(i.contentViewChild,pe,5),n&2&&mb(2)},inputs:{hostName:[1,`hostName`],visible:[1,`visible`],mode:[1,`mode`],style:[1,`style`],styleClass:[1,`styleClass`],contentStyle:[1,`contentStyle`],contentStyleClass:[1,`contentStyleClass`],target:[1,`target`],autoZIndex:[1,`autoZIndex`],baseZIndex:[1,`baseZIndex`],listener:[1,`listener`],responsive:[1,`responsive`],options:[1,`options`],appendTo:[1,`appendTo`],inline:[1,`inline`],motionOptions:[1,`motionOptions`],hostAttrSelector:[1,`hostAttrSelector`]},outputs:{visible:`visibleChange`,onBeforeShow:`onBeforeShow`,onShow:`onShow`,onBeforeHide:`onBeforeHide`,onHide:`onHide`,onAnimationStart:`onAnimationStart`,onAnimationDone:`onAnimationDone`,onBeforeEnter:`onBeforeEnter`,onEnter:`onEnter`,onAfterEnter:`onAfterEnter`,onBeforeLeave:`onBeforeLeave`,onLeave:`onLeave`,onAfterLeave:`onAfterLeave`},features:[e_([ue,{provide:me,useExisting:t},{provide:V,useExisting:t}]),tw([y$1]),om],ngContentSelectors:he,decls:2,vars:1,consts:[[`overlay`,``],[`content`,``],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[3,`class`,`style`,`pBind`],[3,`click`,`pBind`],[`name`,`p-anchored-overlay`,3,`onBeforeEnter`,`onEnter`,`onAfterEnter`,`onBeforeLeave`,`onLeave`,`onAfterLeave`,`visible`,`appear`,`options`]],template:function(n,i){n&1&&(db(he),qw(0,_e,2,5)(1,Oe,1,1)),n&2&&Gw(i.inline()?0:1)},dependencies:[Uc,Gs,y$1,dt,ze],encapsulation:2})}return t})();export{qe as t};