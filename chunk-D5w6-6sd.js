import{Er as tw,Gt as _m,Lt as ZC,Or as ue,Pr as vf,Wt as _V,Y as Ob,Yr as y,_r as sI,_t as T_,ei as zC,fn as e_,jn as hV,mt as T,or as om,u as De,vt as Td,wn as gV}from"./chunk-BvNdw-tD.js";import{D as to}from"./chunk-fFpEnBvw.js";import{l as Ai}from"./main-JFYWHEXQ.js";import{f as V,i as Ft,y as y$1}from"./chunk-CUe4qX-k.js";import{f as yn,t as A}from"./chunk-B0dDvwvY.js";var R=`
    .p-textarea {
        font-weight: dt('textarea.font.weight');
        font-size: dt('textarea.font.size');
        color: dt('textarea.color');
        background: dt('textarea.background');
        padding-block: dt('textarea.padding.y');
        padding-inline: dt('textarea.padding.x');
        border: 1px solid dt('textarea.border.color');
        transition:
            background dt('textarea.transition.duration'),
            color dt('textarea.transition.duration'),
            border-color dt('textarea.transition.duration'),
            outline-color dt('textarea.transition.duration'),
            box-shadow dt('textarea.transition.duration');
        appearance: none;
        border-radius: dt('textarea.border.radius');
        outline-color: transparent;
        box-shadow: dt('textarea.shadow');
    }

    .p-textarea:enabled:hover {
        border-color: dt('textarea.hover.border.color');
    }

    .p-textarea:enabled:focus {
        border-color: dt('textarea.focus.border.color');
        box-shadow: dt('textarea.focus.ring.shadow');
        outline: dt('textarea.focus.ring.width') dt('textarea.focus.ring.style') dt('textarea.focus.ring.color');
        outline-offset: dt('textarea.focus.ring.offset');
    }

    .p-textarea.p-invalid {
        border-color: dt('textarea.invalid.border.color');
    }

    .p-textarea.p-variant-filled {
        background: dt('textarea.filled.background');
    }

    .p-textarea.p-variant-filled:enabled:hover {
        background: dt('textarea.filled.hover.background');
    }

    .p-textarea.p-variant-filled:enabled:focus {
        background: dt('textarea.filled.focus.background');
    }

    .p-textarea:disabled {
        opacity: 1;
        background: dt('textarea.disabled.background');
        color: dt('textarea.disabled.color');
    }

    .p-textarea::placeholder {
        color: dt('textarea.placeholder.color');
    }

    .p-textarea.p-invalid::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }

    .p-textarea-fluid {
        width: 100%;
    }

    .p-textarea-resizable {
        overflow: hidden;
        resize: none;
    }

    .p-textarea-sm {
        font-size: dt('textarea.sm.font.size');
        padding-block: dt('textarea.sm.padding.y');
        padding-inline: dt('textarea.sm.padding.x');
    }

    .p-textarea-lg {
        font-size: dt('textarea.lg.font.size');
        padding-block: dt('textarea.lg.padding.y');
        padding-inline: dt('textarea.lg.padding.x');
    }
`;var C={root:({instance:e})=>[`p-textarea p-component`,{"p-filled":e.$filled(),"p-textarea-resizable ":e.autoResize(),"p-variant-filled":e.$variant()===`filled`,"p-textarea-fluid":e.hasFluid,"p-inputfield-sm p-textarea-sm":e.pSize()===`small`,"p-textarea-lg p-inputfield-lg":e.pSize()===`large`,"p-invalid":e.invalid()}]};var I=(()=>{class e extends Ai{name=`textarea`;style=R;classes=C;static ɵfac=(()=>{let t;return function(r){return(t||(t=sI(e)))(r||e)}})();static ɵprov=ue({token:e,factory:e.ɵfac})}return e})();var S=new T(`TEXTAREA_INSTANCE`);var Q=(()=>{class e extends yn{componentName=`Textarea`;bindDirectiveInstance=y(y$1,{self:!0});$pcTextarea=y(S,{optional:!0,skipSelf:!0})??void 0;pTextareaPT=gV();pTextareaUnstyled=gV();autoResize=gV(!1,{transform:_V});pSize=gV();variant=gV();fluid=gV(void 0,{transform:_V});invalid=gV(!1,{transform:_V});$variant=T_(()=>this.variant()||this.config.inputVariant()||void 0);onResize=hV();get hasFluid(){return this.fluid()??!!this.pcFluid}_componentStyle=y(I);ngControl=y(A,{optional:!0,self:!0});pcFluid=y(Ft,{optional:!0,host:!0,skipSelf:!0});destroyRef=y(De);constructor(){super(),vf(()=>{let t=this.pTextareaPT();t&&this.directivePT.set(t)}),vf(()=>{this.pTextareaUnstyled()&&this.directiveUnstyled.set(this.pTextareaUnstyled())})}onInit(){this.ngControl&&this.ngControl.valueChanges&&this.ngControl.valueChanges.pipe(to(this.destroyRef)).subscribe(()=>{this.updateState()})}onAfterViewInit(){this.autoResize()&&this.resize(),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`])),this.autoResize()&&this.resize(),this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(t){this.writeModelValue(t.target?.value),this.updateState()}resize(t){this.el.nativeElement.style.height=`auto`,this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+`px`,parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY=`scroll`,this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow=`hidden`,this.onResize.emit(t||{})}updateState(){this.autoResize()&&this.resize()}static ɵfac=function(a){return new(a||e)};static ɵdir=ZC({type:e,selectors:[[``,`pTextarea`,``],[``,`pInputTextarea`,``]],hostVars:2,hostBindings:function(a,r){a&1&&_m(`input`,function(F){return r.onInput(F)}),a&2&&Ob(r.cx(`root`))},inputs:{pTextareaPT:[1,`pTextareaPT`],pTextareaUnstyled:[1,`pTextareaUnstyled`],autoResize:[1,`autoResize`],pSize:[1,`pSize`],variant:[1,`variant`],fluid:[1,`fluid`],invalid:[1,`invalid`]},outputs:{onResize:`onResize`},features:[e_([I,{provide:S,useExisting:e},{provide:V,useExisting:e}]),tw([y$1]),om]})}return e})();var W=(()=>{class e{static ɵfac=function(a){return new(a||e)};static ɵmod=zC({type:e});static ɵinj=Td({})}return e})();export{W as n,Q as t};