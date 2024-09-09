import { faqs } from "./../../Assets/data/faqs"
import FaqItem from "./FaqItem"

const FaqList = () => {
  return (
    <ul className="mt-[38px] text-justify">
        {faqs.map((item, index) => (
            <FaqItem item={item} key={index} />
            ))}
            </ul>
  )
}

export default FaqList