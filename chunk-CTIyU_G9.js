import{$n as mm,Er as tw,Fr as vm,Gt as _m,L as MV,Or as ue,Qr as ym,S as Gw,Sr as su,U as Nm,Wt as _V,Y as Ob,Yr as y,Zn as mb,_r as sI,_t as T_,ar as oi,b as GC,br as sm,cn as ds,d as Dm,dt as Si,ei as zC,fn as e_,fr as qw,jn as hV,mt as T,ni as zm,or as om,p as EV,qn as lb,rr as oT,vt as Td,wn as gV,xt as Ub}from"./chunk-BvNdw-tD.js";import{h as Uc}from"./chunk-fFpEnBvw.js";import{l as Ai,y as Gs}from"./main-JFYWHEXQ.js";import{f as V,h as ro,l as St,y as y$1}from"./chunk-CUe4qX-k.js";import{l as te}from"./chunk-B0dDvwvY.js";import{t as c}from"./chunk-CeQJWvKH.js";var W=`
    .p-togglebutton {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        color: dt('togglebutton.color');
        background: dt('togglebutton.background');
        border: 1px solid dt('togglebutton.border.color');
        padding: dt('togglebutton.padding');
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
        border-radius: dt('togglebutton.border.radius');
        outline-color: transparent;
        font-size: dt('togglebutton.font.size');
        font-weight: dt('togglebutton.font.weight');
    }

    .p-togglebutton-content {
        display: inline-flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        gap: dt('togglebutton.gap');
        padding: dt('togglebutton.content.padding');
        background: transparent;
        border-radius: dt('togglebutton.content.border.radius');
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
        background: dt('togglebutton.hover.background');
        color: dt('togglebutton.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked {
        background: dt('togglebutton.checked.background');
        border-color: dt('togglebutton.checked.border.color');
        color: dt('togglebutton.checked.color');
    }

    .p-togglebutton-checked .p-togglebutton-content {
        background: dt('togglebutton.content.checked.background');
        box-shadow: dt('togglebutton.content.checked.shadow');
    }

    .p-togglebutton:focus-visible {
        box-shadow: dt('togglebutton.focus.ring.shadow');
        outline: dt('togglebutton.focus.ring.width') dt('togglebutton.focus.ring.style') dt('togglebutton.focus.ring.color');
        outline-offset: dt('togglebutton.focus.ring.offset');
    }

    .p-togglebutton.p-invalid {
        border-color: dt('togglebutton.invalid.border.color');
    }

    .p-togglebutton:disabled {
        opacity: 1;
        cursor: default;
        background: dt('togglebutton.disabled.background');
        border-color: dt('togglebutton.disabled.border.color');
        color: dt('togglebutton.disabled.color');
    }

    .p-togglebutton-label,
    .p-togglebutton-icon {
        position: relative;
        transition: none;
    }

    .p-togglebutton-icon {
        color: dt('togglebutton.icon.color');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
        color: dt('togglebutton.icon.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
        color: dt('togglebutton.icon.checked.color');
    }

    .p-togglebutton:disabled .p-togglebutton-icon {
        color: dt('togglebutton.icon.disabled.color');
    }

    .p-togglebutton-sm {
        padding: dt('togglebutton.sm.padding');
        font-size: dt('togglebutton.sm.font.size');
    }

    .p-togglebutton-sm .p-togglebutton-content {
        padding: dt('togglebutton.content.sm.padding');
    }

    .p-togglebutton-lg {
        padding: dt('togglebutton.lg.padding');
        font-size: dt('togglebutton.lg.font.size');
    }

    .p-togglebutton-lg .p-togglebutton-content {
        padding: dt('togglebutton.content.lg.padding');
    }

    .p-togglebutton-fluid {
        width: 100%;
    }

    .p-togglebutton-content .p-icon,
    .p-togglebutton-content .pi {
        line-height: dt('typography.line.height')
    }
`;var et=[`icon`];var nt=[`content`];function ot(t,l){t&1&&Dm(0)}function it(t,l){if(t&1&&ym(0,`span`,0),t&2){let e=lb(3);Ob(e.iconClass()),vm(`pBind`,e.ptm(`icon`))}}function at(t,l){if(t&1&&qw(0,it,1,3,`span`,2),t&2)Gw(lb(2).hasIcon()?0:-1)}function lt(t,l){t&1&&Dm(0)}function dt(t,l){if(t&1&&sm(0,lt,1,0,`ng-container`,1),t&2){let e=lb(2);vm(`ngTemplateOutlet`,e.iconTemplate())(`ngTemplateOutletContext`,e.getTemplateContext())}}function gt(t,l){if(t&1&&(ds(0,`span`,0),Ub(1),su()),t&2){let e=lb(2);Ob(e.cx(`label`)),vm(`pBind`,e.ptm(`label`)),oT(),zm(e.labelText())}}function ct(t,l){if(t&1&&(qw(0,at,1,1)(1,dt,1,2,`ng-container`),qw(2,gt,2,4,`span`,2)),t&2){let e=lb();Gw(e.iconTemplate()?1:0),oT(2),Gw(e.hasLabel()?2:-1)}}var rt=`
    ${W}

    /* For PrimeNG (iconPos) */
    .p-togglebutton-icon-right {
        order: 1;
    }
`;var ut={root:({instance:t})=>[`p-togglebutton p-component`,{"p-togglebutton-checked":t.checked(),"p-invalid":t.invalid(),"p-disabled":t.$disabled(),"p-togglebutton-sm p-inputfield-sm":t.size()===`small`,"p-togglebutton-lg p-inputfield-lg":t.size()===`large`,"p-togglebutton-fluid":t.fluid()}],content:`p-togglebutton-content`,icon:`p-togglebutton-icon`,iconLeft:`p-togglebutton-icon-left`,iconRight:`p-togglebutton-icon-right`,label:`p-togglebutton-label`};var X=(()=>{class t extends Ai{name=`togglebutton`;style=rt;classes=ut;static ɵfac=(()=>{let e;return function(n){return(e||(e=sI(t)))(n||t)}})();static ɵprov=ue({token:t,factory:t.ɵfac})}return t})();var Z=new T(`TOGGLEBUTTON_INSTANCE`);var st={provide:te,useExisting:oi(()=>tt),multi:!0};var tt=(()=>{class t extends c{componentName=`ToggleButton`;$pcToggleButton=y(Z,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=y(y$1,{self:!0});_componentStyle=y(X);onLabel=gV(`Yes`);offLabel=gV(`No`);onIcon=gV();offIcon=gV();ariaLabel=gV();ariaLabelledBy=gV();inputId=gV();tabindex=gV(0,{transform:MV});iconPos=gV(`left`);autofocus=gV(!1,{transform:_V});size=gV();allowEmpty=gV();fluid=gV(void 0,{transform:_V});onChange=hV();iconTemplate=EV(`icon`,{descendants:!1});contentTemplate=EV(`content`,{descendants:!1});checked=Si(!1);hasOnLabel=T_(()=>!!(this.onLabel()&&this.onLabel().length>0));hasOffLabel=T_(()=>!!(this.offLabel()&&this.offLabel().length>0));hasIcon=T_(()=>!!(this.onIcon()||this.offIcon()));hasLabel=T_(()=>this.checked()?this.hasOnLabel():this.hasOffLabel());active=T_(()=>this.checked()===!0);dataP=T_(()=>this.cn({checked:this.active(),invalid:this.invalid(),[this.size()]:this.size()}));$tabindex=T_(()=>this.$disabled()?-1:this.tabindex()??0);iconClass=T_(()=>this.cn(this.cx(`icon`),this.checked()?this.onIcon():this.offIcon(),this.iconPos()===`left`?this.cx(`iconLeft`):this.cx(`iconRight`)));labelText=T_(()=>this.checked()?this.onLabel():this.offLabel());ariaPressed=T_(()=>this.checked()?`true`:`false`);getTemplateContext(){return{$implicit:this.checked()}}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}onKeyDown(e){switch(e.code){case`Enter`:this.toggle(e),e.preventDefault();break;case`Space`:this.toggle(e),e.preventDefault();break}}toggle(e){!this.$disabled()&&!(this.allowEmpty()===!1&&this.checked())&&(this.checked.set(!this.checked()),this.writeModelValue(this.checked()),this.onModelChange(this.checked()),this.onModelTouched(),this.onChange.emit({originalEvent:e,checked:this.checked()}))}onInit(){(this.checked()===null||this.checked()===void 0)&&this.checked.set(!1)}onBlur(){this.onModelTouched()}writeControlValue(e,o){this.checked.set(e),o(e)}static ɵfac=(()=>{let e;return function(n){return(e||(e=sI(t)))(n||t)}})();static ɵcmp=GC({type:t,selectors:[[`p-togglebutton`],[`p-toggle-button`]],contentQueries:function(o,n,p){o&1&&Nm(p,n.iconTemplate,et,4)(p,n.contentTemplate,nt,4),o&2&&mb(2)},hostVars:11,hostBindings:function(o,n){o&1&&_m(`keydown`,function(m){return n.onKeyDown(m)})(`click`,function(m){return n.toggle(m)}),o&2&&(mm(`aria-labelledby`,n.ariaLabelledBy())(`aria-label`,n.ariaLabel())(`aria-pressed`,n.ariaPressed())(`role`,`button`)(`tabindex`,n.$tabindex())(`data-pc-name`,`togglebutton`)(`data-p-checked`,n.active())(`data-p-disabled`,n.$disabled())(`data-p`,n.dataP()),Ob(n.cx(`root`)))},inputs:{onLabel:[1,`onLabel`],offLabel:[1,`offLabel`],onIcon:[1,`onIcon`],offIcon:[1,`offIcon`],ariaLabel:[1,`ariaLabel`],ariaLabelledBy:[1,`ariaLabelledBy`],inputId:[1,`inputId`],tabindex:[1,`tabindex`],iconPos:[1,`iconPos`],autofocus:[1,`autofocus`],size:[1,`size`],allowEmpty:[1,`allowEmpty`],fluid:[1,`fluid`]},outputs:{onChange:`onChange`},features:[e_([st,X,{provide:Z,useExisting:t},{provide:V,useExisting:t}]),tw([St,y$1]),om],decls:3,vars:7,consts:[[3,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[3,`class`,`pBind`]],template:function(o,n){o&1&&(ds(0,`span`,0),sm(1,ot,1,0,`ng-container`,1),qw(2,ct,3,2),su()),o&2&&(Ob(n.cx(`content`)),vm(`pBind`,n.ptm(`content`)),mm(`data-p`,n.dataP()),oT(),vm(`ngTemplateOutlet`,n.contentTemplate())(`ngTemplateOutletContext`,n.getTemplateContext()),oT(),Gw(n.contentTemplate()?-1:2))},dependencies:[Uc,Gs,ro,y$1],encapsulation:2})}return t})();var wt=(()=>{class t{static ɵfac=function(o){return new(o||t)};static ɵmod=zC({type:t});static ɵinj=Td({imports:[tt,Gs,Gs]})}return t})();export{wt as n,tt as t};