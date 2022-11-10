import {
  ArrowDownIcon,
  ContentSubtitle,
  ContentTitle,
  ContentWraper,
} from "./style"
import { ContentItem } from "./type"

export const Content = ({ title, subtitle }: ContentItem) => {
  return (
    <>
      <ContentWraper>
        <ContentTitle>{title}</ContentTitle>
        <ContentSubtitle>{subtitle}</ContentSubtitle>
        <ArrowDownIcon />
      </ContentWraper>
    </>
  )
}
