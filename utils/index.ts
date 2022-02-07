import { message } from 'antd'

export function copyText(text: string) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      message.success('已复制!')
    })
    .catch((err) => {
      console.error(err)
      message.error('复制失败!')
    })
}
