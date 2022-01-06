import Icon from '@ant-design/icons'

// svg 标签内的 class 删除或者替换成 className
// fill 的值写成 currentColor
const UserSvg = () => <svg t="1641434413693" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2129" width="16" height="16"><path d="M512 0C229.232 0 0 229.232 0 512s229.232 512 512 512 512-229.232 512-512S794.768 0 512 0z m0 48c256.256 0 464 207.744 464 464 0 114.256-41.376 218.8-109.872 299.664C808.096 673.264 671.456 576 512 576c-159.504 0-295.936 97.44-353.936 235.904C89.456 731.008 48 626.368 48 512 48 255.744 255.744 48 512 48zM194.896 850.576C240.416 718.976 365.12 624 512 624s271.632 94.944 317.152 226.528C746.176 928.304 634.688 976 512 976c-122.672 0-234.144-47.68-317.104-125.424z" fill="currentColor" p-id="2130"></path><path d="M512 546.256c106.032 0 192-85.968 192-192s-85.968-192-192-192-192 85.968-192 192 85.968 192 192 192z m0-336c79.392 0 144 64.608 144 144s-64.608 144-144 144-144-64.608-144-144 64.608-144 144-144z" fill="currentColor" p-id="2131"></path></svg>

const PasswordSvg = () => <svg className="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M288 384v-74.667c0-123.722 100.267-224 224-224s224 100.224 224 224V384h10.677C811.445 384 864 436.597 864 501.333v320c0 64.822-52.47 117.334-117.323 117.334H277.333C212.555 938.667 160 886.069 160 821.333v-320C160 436.512 212.47 384 277.323 384H288zm64 0h320v-74.667c0-88.426-71.605-160-160-160-88.384 0-160 71.627-160 160V384zM224 501.333v320c0 29.398 23.915 53.334 53.323 53.334h469.344A53.27 53.27 0 0 0 800 821.333v-320C800 471.936 776.085 448 746.677 448H277.333A53.27 53.27 0 0 0 224 501.333z" fill="currentColor"/></svg>


export const UserIcon = (props) => <Icon component={UserSvg} {...props} />


export const PasswordIcon = (props) => <Icon component={PasswordSvg} {...props} />