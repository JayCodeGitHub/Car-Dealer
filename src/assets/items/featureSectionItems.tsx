import { BsFillCarFrontFill, BsPeopleFill } from "react-icons/bs";
import { FaFileSignature } from "react-icons/fa";

export const FeatureSectionItems = {
  title: "Seamless Car Buying Experience",
  steps: [
    {
      icon: <BsFillCarFrontFill />,
      title: "Choosing Your Car",
      description:
        "Browse through our extensive collection of cars and find the perfect one that suits your needs and style.",
    },
    {
      icon: <BsPeopleFill />,
      title: "Get in Touch",
      description:
        "Contact us and let our team of experts help you with any queries you may have regarding the car you’ve chosen.",
    },
    {
      icon: <FaFileSignature />,
      title: "Signing the Contract",
      description:
        " Finalize your purchase by signing the agreement and enjoy the experience of owning your dream car.",
    },
  ],
};
