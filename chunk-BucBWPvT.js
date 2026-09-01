import{$n as mm,Er as tw,Gt as _m,Lt as ZC,Or as ue,Pr as vf,Wt as _V,Y as Ob,Yr as y,_r as sI,_t as T_,ei as zC,fn as e_,mt as T,or as om,vt as Td,wn as gV}from"./chunk-BvNdw-tD.js";import{l as Ai}from"./main-JFYWHEXQ.js";import{f as V,i as Ft,y as y$1}from"./chunk-CUe4qX-k.js";import{f as yn,t as A}from"./chunk-B0dDvwvY.js";import{t as c}from"./chunk-CeQJWvKH.js";var k=`
    .p-inputtext {
        font-weight: dt('inputtext.font.weight');
        font-size: dt('inputtext.font.size');
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`;var E={root:({instance:t})=>[`p-inputtext p-component`,{"p-filled":t.$filled(),"p-inputtext-sm":t.pSize()===`small`,"p-inputtext-lg":t.pSize()===`large`,"p-invalid":t.invalid(),"p-variant-filled":t.$variant()===`filled`,"p-inputtext-fluid":t.hasFluid}]};var S=(()=>{class t extends Ai{name=`inputtext`;style=k;classes=E;static ɵfac=(()=>{let n;return function(o){return(n||(n=sI(t)))(o||t)}})();static ɵprov=ue({token:t,factory:t.ɵfac})}return t})();var w=new T(`INPUTTEXT_INSTANCE`);var L=(()=>{class t extends yn{componentName=`InputText`;hostName=gV(``);pInputTextPT=gV();pInputTextUnstyled=gV();bindDirectiveInstance=y(y$1,{self:!0});$pcInputText=y(w,{optional:!0,skipSelf:!0})??void 0;ngControl=y(A,{optional:!0,self:!0});pcFluid=y(Ft,{optional:!0,host:!0,skipSelf:!0});pSize=gV(void 0,{alias:`pSize`});variant=gV();fluid=gV(void 0,{transform:_V});invalid=gV(void 0,{transform:_V});$variant=T_(()=>this.variant()||this.config.inputVariant()||void 0);_componentStyle=y(S);get hasFluid(){return this.fluid()??!!this.pcFluid}dataP=T_(()=>this.cn({invalid:this.invalid(),fluid:this.hasFluid,filled:this.$variant()===`filled`,[this.pSize()]:this.pSize()}));constructor(){super(),vf(()=>{let n=this.pInputTextPT();n&&this.directivePT.set(n)}),vf(()=>{this.pInputTextUnstyled()&&this.directiveUnstyled.set(this.pInputTextUnstyled())})}onAfterViewInit(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`root`))}onDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}static ɵfac=function(i){return new(i||t)};static ɵdir=ZC({type:t,selectors:[[``,`pInputText`,``]],hostVars:3,hostBindings:function(i,o){i&1&&_m(`input`,function(){return o.onInput()}),i&2&&(mm(`data-p`,o.dataP()),Ob(o.cx(`root`)))},inputs:{hostName:[1,`hostName`],pInputTextPT:[1,`pInputTextPT`],pInputTextUnstyled:[1,`pInputTextUnstyled`],pSize:[1,`pSize`],variant:[1,`variant`],fluid:[1,`fluid`],invalid:[1,`invalid`]},features:[e_([S,{provide:w,useExisting:t},{provide:V,useExisting:t}]),tw([y$1]),om]})}return t})();var O=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=zC({type:t});static ɵinj=Td({})}return t})();var tt=(()=>{class t extends c{pcFluid=y(Ft,{optional:!0,host:!0,skipSelf:!0});fluid=gV(void 0,{transform:_V});variant=gV();size=gV();inputSize=gV();pattern=gV();min=gV();max=gV();step=gV();minlength=gV();maxlength=gV();$variant=T_(()=>this.variant()||this.config.inputVariant()||void 0);$pattern=T_(()=>{let n=this.pattern();return typeof n==`string`&&n.length>0?n:void 0});get hasFluid(){return this.fluid()??!!this.pcFluid}static ɵfac=(()=>{let n;return function(o){return(n||(n=sI(t)))(o||t)}})();static ɵdir=ZC({type:t,inputs:{fluid:[1,`fluid`],variant:[1,`variant`],size:[1,`size`],inputSize:[1,`inputSize`],pattern:[1,`pattern`],min:[1,`min`],max:[1,`max`],step:[1,`step`],minlength:[1,`minlength`],maxlength:[1,`maxlength`]},features:[om]})}return t})();export{O as n,tt as r,L as t};