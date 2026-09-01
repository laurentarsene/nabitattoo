import{$n as mm,Er as tw,Fr as vm,Gt as _m,It as Yw,Kr as xm,Or as ue,Pr as vf,Qr as ym,S as Gw,Sr as su,U as Nm,Wr as xb,Wt as _V,Y as Ob,Yr as y,Yt as af,Zn as mb,_r as sI,_t as T_,ar as oi$1,b as GC,br as sm,cn as ds,d as Dm,dt as Si,ei as zC,fn as e_,fr as qw,g as Em,jn as hV,jr as vV,mt as T,or as om,ot as Qw,p as EV,qn as lb,rr as oT,vt as Td,wn as gV}from"./chunk-BvNdw-tD.js";import{h as Uc}from"./chunk-fFpEnBvw.js";import{V as Yr,l as Ai,wt as tt,y as Gs}from"./main-JFYWHEXQ.js";import{d as Te$1,f as V,h as ro,y as y$1}from"./chunk-CUe4qX-k.js";import{l as te,t as A}from"./chunk-B0dDvwvY.js";import{t as c}from"./chunk-CeQJWvKH.js";import{o as Vt}from"./chunk-BUuvds9A.js";var ae={name:`minus`,meta:{tags:[`minus`,`remove`,`subtract`,`decrease`,`less`]},svg:{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,viewBox:`0 0 20 20`,fill:`none`},nodes:[[`path`,{d:`M17 9.25C17.4142 9.25 17.75 9.58579 17.75 10C17.75 10.4142 17.4142 10.75 17 10.75H3C2.58579 10.75 2.25 10.4142 2.25 10C2.25 9.58579 2.58579 9.25 3 9.25H17Z`,fill:`currentColor`,key:`iu8x2q`}]]};var be=(i,c)=>c[1].key||i;function xe(i,c){if(i&1&&(af(),Em(0,`path`)),i&2){let e=lb().$implicit;mm(`d`,e[1].d)(`fill`,e[1].fill)(`fill-opacity`,e[1].fillOpacity)(`fill-rule`,e[1].fillRule)(`clip-rule`,e[1].clipRule)(`stroke`,e[1].stroke)(`stroke-width`,e[1].strokeWidth)(`stroke-opacity`,e[1].strokeOpacity)(`opacity`,e[1].opacity)}}function me(i,c){if(i&1&&(af(),Em(0,`circle`)),i&2){let e=lb().$implicit;mm(`cx`,e[1].cx)(`cy`,e[1].cy)(`r`,e[1].r)(`fill`,e[1].fill)(`fill-opacity`,e[1].fillOpacity)(`opacity`,e[1].opacity)}}function fe(i,c){if(i&1&&(af(),Em(0,`rect`)),i&2){let e=lb().$implicit;mm(`x`,e[1].x)(`y`,e[1].y)(`width`,e[1].width)(`height`,e[1].height)(`rx`,e[1].rx)(`ry`,e[1].ry)(`fill`,e[1].fill)(`fill-opacity`,e[1].fillOpacity)(`opacity`,e[1].opacity)}}function ke(i,c){if(i&1&&(af(),Em(0,`line`)),i&2){let e=lb().$implicit;mm(`x1`,e[1].x1)(`y1`,e[1].y1)(`x2`,e[1].x2)(`y2`,e[1].y2)(`stroke`,e[1].stroke)(`stroke-opacity`,e[1].strokeOpacity)(`opacity`,e[1].opacity)}}function ge(i,c){if(i&1&&(af(),Em(0,`polyline`)),i&2){let e=lb().$implicit;mm(`points`,e[1].points)(`fill`,e[1].fill)(`fill-opacity`,e[1].fillOpacity)(`opacity`,e[1].opacity)}}function ve(i,c){if(i&1&&(af(),Em(0,`polygon`)),i&2){let e=lb().$implicit;mm(`points`,e[1].points)(`fill`,e[1].fill)(`fill-opacity`,e[1].fillOpacity)(`opacity`,e[1].opacity)}}function _e(i,c){if(i&1&&(af(),Em(0,`ellipse`)),i&2){let e=lb().$implicit;mm(`cx`,e[1].cx)(`cy`,e[1].cy)(`rx`,e[1].rx)(`ry`,e[1].ry)(`fill`,e[1].fill)(`fill-opacity`,e[1].fillOpacity)(`opacity`,e[1].opacity)}}function ye(i,c){if(i&1&&qw(0,xe,1,9,`:svg:path`)(1,me,1,6,`:svg:circle`)(2,fe,1,9,`:svg:rect`)(3,ke,1,7,`:svg:line`)(4,ge,1,4,`:svg:polyline`)(5,ve,1,4,`:svg:polygon`)(6,_e,1,7,`:svg:ellipse`),i&2){let e,t=c.$implicit;Gw((e=t[0])===`path`?0:e===`circle`?1:e===`rect`?2:e===`line`?3:e===`polyline`?4:e===`polygon`?5:e===`ellipse`?6:-1)}}var de=(()=>{class i extends Te$1{constructor(){super(),this._icon=ae}static ɵfac=function(t){return new(t||i)};static ɵcmp=GC({type:i,selectors:[[`svg`,`data-p-icon`,`minus`]],features:[om],decls:2,vars:0,template:function(t,n){t&1&&Qw(0,ye,7,1,null,null,be),t&2&&Yw(n.iconNodes())},encapsulation:2,changeDetection:1})}return i})();var re=`
    .p-checkbox {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        width: dt('checkbox.width');
        height: dt('checkbox.height');
    }

    .p-checkbox-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        inset-block-start: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border: 1px solid transparent;
        border-radius: dt('checkbox.border.radius');
    }

    .p-checkbox-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: dt('checkbox.border.radius');
        border: 1px solid dt('checkbox.border.color');
        background: dt('checkbox.background');
        color: dt('checkbox.icon.color');
        width: dt('checkbox.width');
        height: dt('checkbox.height');
        transition:
            background dt('checkbox.transition.duration'),
            border-color dt('checkbox.transition.duration'),
            box-shadow dt('checkbox.transition.duration'),
            outline-color dt('checkbox.transition.duration');
        outline-color: transparent;
        box-shadow: dt('checkbox.shadow');
    }

    .p-checkbox-indicator {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .p-checkbox-icon,
    .p-checkbox-indicator svg,
    .p-checkbox-indicator i {
        width: dt('checkbox.icon.size');
        height: dt('checkbox.icon.size');
        font-size: dt('checkbox.icon.size');
        transition-duration: dt('checkbox.transition.duration');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        border-color: dt('checkbox.hover.border.color');
    }

    .p-checkbox-checked .p-checkbox-box {
        border-color: dt('checkbox.checked.border.color');
        background: dt('checkbox.checked.background');
        color: dt('checkbox.icon.checked.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
        border-color: dt('checkbox.checked.hover.border.color');
        color: dt('checkbox.icon.checked.hover.color');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.focus.border.color');
        box-shadow: dt('checkbox.focus.ring.shadow');
        outline: dt('checkbox.focus.ring.width') dt('checkbox.focus.ring.style') dt('checkbox.focus.ring.color');
        outline-offset: dt('checkbox.focus.ring.offset');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.checked.focus.border.color');
    }

    .p-checkbox.p-invalid > .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }

    .p-checkbox.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.filled.background');
    }

    .p-checkbox-checked.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
    }

    .p-checkbox.p-disabled {
        opacity: 1;
    }

    .p-checkbox.p-disabled .p-checkbox-box {
        background: dt('checkbox.disabled.background');
        border-color: dt('checkbox.checked.disabled.border.color');
        color: dt('checkbox.icon.disabled.color');
    }

    .p-checkbox-sm,
    .p-checkbox-sm .p-checkbox-box {
        width: dt('checkbox.sm.width');
        height: dt('checkbox.sm.height');
    }

    .p-checkbox-sm .p-checkbox-icon,
    .p-checkbox-sm .p-checkbox-indicator svg,
    .p-checkbox-sm .p-checkbox-indicator i {
        font-size: dt('checkbox.icon.sm.size');
        width: dt('checkbox.icon.sm.size');
        height: dt('checkbox.icon.sm.size');
    }

    .p-checkbox-lg,
    .p-checkbox-lg .p-checkbox-box {
        width: dt('checkbox.lg.width');
        height: dt('checkbox.lg.height');
    }

    .p-checkbox-lg .p-checkbox-icon,
    .p-checkbox-lg .p-checkbox-indicator svg,
    .p-checkbox-lg .p-checkbox-indicator i {
        font-size: dt('checkbox.icon.lg.size');
        width: dt('checkbox.icon.lg.size');
        height: dt('checkbox.icon.lg.size');
    }
`;var Ce=[`icon`];var Me=[`input`];function we(i,c){if(i&1&&ym(0,`span`,2),i&2){let e=lb(3);Ob(e.cn(e.cx(`icon`),e.checkboxIcon())),vm(`pBind`,e.ptm(`icon`)),mm(`data-p`,e.dataP())}}function De(i,c){if(i&1&&(af(),ym(0,`svg`,5)),i&2){let e=lb(3);Ob(e.cx(`icon`)),vm(`pBind`,e.ptm(`icon`)),mm(`data-p`,e.dataP())}}function Ne(i,c){if(i&1&&(ds(0,`span`,2),qw(1,we,1,4,`span`,3)(2,De,1,4,`:svg:svg`,4),su()),i&2){let e=lb(2);Ob(e.cx(`indicator`)),vm(`pBind`,e.ptm(`indicator`)),oT(),Gw(e.checkboxIcon()?1:2)}}function Te(i,c){if(i&1&&(ds(0,`span`,2),af(),ym(1,`svg`,6),su()),i&2){let e=lb(2);Ob(e.cx(`indicator`)),vm(`pBind`,e.ptm(`indicator`)),oT(),Ob(e.cx(`icon`)),vm(`pBind`,e.ptm(`icon`)),mm(`data-p`,e.dataP())}}function Ve(i,c){if(i&1&&(qw(0,Ne,3,4,`span`,3),qw(1,Te,2,7,`span`,3)),i&2){let e=lb();Gw(e.checked()?0:-1),oT(),Gw(e._indeterminate()?1:-1)}}function Be(i,c){i&1&&Dm(0)}function Se(i,c){if(i&1&&sm(0,Be,1,0,`ng-container`,7),i&2){let e=lb();vm(`ngTemplateOutlet`,e.iconTemplate())(`ngTemplateOutletContext`,e.iconTemplateContext())}}var Ee={root:({instance:i})=>[`p-checkbox p-component`,{"p-checkbox-checked":i.checked(),"p-disabled":i.$disabled(),"p-invalid":i.invalid(),"p-variant-filled":i.$variant()===`filled`,"p-checkbox-sm p-inputfield-sm":i.size()===`small`,"p-checkbox-lg p-inputfield-lg":i.size()===`large`}],box:`p-checkbox-box`,input:`p-checkbox-input`,indicator:`p-checkbox-indicator`,icon:`p-checkbox-icon`};var le=(()=>{class i extends Ai{name=`checkbox`;style=re;classes=Ee;static ɵfac=(()=>{let e;return function(n){return(e||(e=sI(i)))(n||i)}})();static ɵprov=ue({token:i,factory:i.ɵfac})}return i})();var se=new T(`CHECKBOX_INSTANCE`);var Ie={provide:te,useExisting:oi$1(()=>pe),multi:!0};var pe=(()=>{class i extends c{componentName=`Checkbox`;value=gV();binary=gV(!1,{transform:_V});ariaLabelledBy=gV();ariaLabel=gV();tabindex=gV();inputId=gV();inputStyle=gV();inputClass=gV();indeterminate=gV(!1,{transform:_V});formControl=gV();checkboxIcon=gV();readonly=gV(!1,{transform:_V});autofocus=gV(!1,{transform:_V});trueValue=gV(!0);falseValue=gV(!1);variant=gV();size=gV();onChange=hV();onFocus=hV();onBlur=hV();inputViewChild=vV(`input`);iconTemplate=EV(`icon`,{descendants:!1});_indeterminate=Si(!1);focused=Si(!1);_componentStyle=y(le);bindDirectiveInstance=y(y$1,{self:!0});$pcCheckbox=y(se,{optional:!0,skipSelf:!0})??void 0;$variant=T_(()=>this.variant()||this.config.inputVariant()||void 0);requiredAttr=T_(()=>this.required()?``:void 0);readonlyAttr=T_(()=>this.readonly()?``:void 0);disabledAttr=T_(()=>this.$disabled()?``:void 0);checked=T_(()=>this._indeterminate()?!1:this.binary()?this.modelValue()===this.trueValue():Yr(this.value(),this.modelValue()));iconTemplateContext=T_(()=>({checked:this.checked(),class:this.cx(`icon`),dataP:this.dataP()}));dataP=T_(()=>this.cn({invalid:this.invalid(),checked:this.checked(),disabled:this.$disabled(),filled:this.$variant()===`filled`,[this.size()]:this.size()}));constructor(){super(),vf(()=>{let e=this.indeterminate();this._indeterminate.set(e)})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}updateModel(e){let t,n=this.injector.get(A,null,{optional:!0,self:!0}),p=n&&!this.formControl()?n.value:this.modelValue();if(this.binary())t=this._indeterminate()?this.trueValue():this.checked()?this.falseValue():this.trueValue(),this.writeModelValue(t),this.onModelChange(t);else{this.checked()||this._indeterminate()?t=p.filter(ue=>!tt(ue,this.value())):t=p?[...p,this.value()]:[this.value()],this.onModelChange(t),this.writeModelValue(t);let u=this.formControl();u&&u.setValue(t)}this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:t,originalEvent:e})}handleChange(e){this.readonly()||this.updateModel(e)}onInputFocus(e){this.focused.set(!0),this.onFocus.emit(e)}onInputBlur(e){this.focused.set(!1),this.onBlur.emit(e),this.onModelTouched()}focus(){this.inputViewChild()?.nativeElement.focus()}writeControlValue(e,t){t(e)}static ɵfac=function(t){return new(t||i)};static ɵcmp=GC({type:i,selectors:[[`p-checkbox`],[`p-check-box`]],contentQueries:function(t,n,p){t&1&&Nm(p,n.iconTemplate,Ce,4),t&2&&mb()},viewQuery:function(t,n){t&1&&xm(n.inputViewChild,Me,5),t&2&&mb()},hostVars:6,hostBindings:function(t,n){t&2&&(mm(`data-p-highlight`,n.checked())(`data-p-checked`,n.checked())(`data-p-disabled`,n.$disabled())(`data-p`,n.dataP()),Ob(n.cx(`root`)))},inputs:{value:[1,`value`],binary:[1,`binary`],ariaLabelledBy:[1,`ariaLabelledBy`],ariaLabel:[1,`ariaLabel`],tabindex:[1,`tabindex`],inputId:[1,`inputId`],inputStyle:[1,`inputStyle`],inputClass:[1,`inputClass`],indeterminate:[1,`indeterminate`],formControl:[1,`formControl`],checkboxIcon:[1,`checkboxIcon`],readonly:[1,`readonly`],autofocus:[1,`autofocus`],trueValue:[1,`trueValue`],falseValue:[1,`falseValue`],variant:[1,`variant`],size:[1,`size`]},outputs:{onChange:`onChange`,onFocus:`onFocus`,onBlur:`onBlur`},features:[e_([Ie,le,{provide:se,useExisting:i},{provide:V,useExisting:i}]),tw([y$1]),om],decls:5,vars:20,consts:[[`input`,``],[`type`,`checkbox`,3,`focus`,`blur`,`change`,`checked`,`pBind`],[3,`pBind`],[3,`class`,`pBind`],[`data-p-icon`,`check`,3,`class`,`pBind`],[`data-p-icon`,`check`,3,`pBind`],[`data-p-icon`,`minus`,3,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`]],template:function(t,n){t&1&&(ds(0,`input`,1,0),_m(`focus`,function(u){return n.onInputFocus(u)})(`blur`,function(u){return n.onInputBlur(u)})(`change`,function(u){return n.handleChange(u)}),su(),ds(2,`div`,2),qw(3,Ve,2,2)(4,Se,1,2,`ng-container`),su()),t&2&&(xb(n.inputStyle()),Ob(n.cn(n.cx(`input`),n.inputClass())),vm(`checked`,n.checked())(`pBind`,n.ptm(`input`)),mm(`id`,n.inputId())(`value`,n.value())(`name`,n.name())(`tabindex`,n.tabindex())(`required`,n.requiredAttr())(`readonly`,n.readonlyAttr())(`disabled`,n.disabledAttr())(`aria-labelledby`,n.ariaLabelledBy())(`aria-label`,n.ariaLabel()),oT(2),Ob(n.cx(`box`)),vm(`pBind`,n.ptm(`box`)),mm(`data-p`,n.dataP()),oT(),Gw(n.iconTemplate()?4:3))},dependencies:[Uc,Gs,Vt,de,ro,y$1],encapsulation:2})}return i})();var oi=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=zC({type:i});static ɵinj=Td({imports:[pe,Gs,Gs]})}return i})();export{pe as n,oi as t};