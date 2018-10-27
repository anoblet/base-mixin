import { DefaultValue } from '@anoblet/defaultvalue'
import { RenderTemplate } from '@anoblet/rendertemplate';
import { RandomColor } from '@anoblet/random-color'
import { BorderDebug } from '@anoblet/border-debug'
import { TooltipDebug } from '@anoblet/tooltip-debug'


export const BaseMixin = (superclass) => class extends TooltipDebug(BorderDebug(RandomColor(RenderTemplate(DefaultValue(superclass))))) {

}
