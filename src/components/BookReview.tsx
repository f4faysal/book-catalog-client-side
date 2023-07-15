import { useState } from "react";
import { toast } from "react-hot-toast";
import { FiSend } from "react-icons/fi";
import {
  useGetReviewQuery,
  usePostReviewMutation,
} from "../redux/features/book/bookApi";
import { useAppSelector } from "../redux/hook";
import Loding from "./ui/Loding";

const BookReview = ({ id }: any) => {
  const [inputValue, setInputValue] = useState<string>("");

  const { user, isLoading: userisLoading } = useAppSelector(
    (state) => state.user
  );

  const { data, isLoading: getisLoding } = useGetReviewQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  //   console.log(data.data.reviews);

  const [postReview, { isLoading }] = usePostReviewMutation();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputValue);
    const options = {
      id: id,
      data: { reviews: inputValue },
    };
    if (inputValue.length && user.email) {
      postReview(options);
      toast.success("Commant Add Successfully!", {
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
      });
    } else {
      if (!user.email && !userisLoading) {
        toast.error("Plase Login");
      }
      if (!inputValue.length) {
        toast.error("This Emty Commant.");
      }
    }

    setInputValue("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  if (isLoading) {
    return <Loding />;
  }
  if (getisLoding) {
    return <Loding />;
  }

  return (
    <div className="max-w-7xl mx-auto mt-5">
      <form className="flex gap-5 items-center" onSubmit={handleSubmit}>
        <input
          className="min-h-[30px] w-full input bg-secondary-focus"
          onChange={handleChange}
          value={inputValue}
          placeholder="Commant"
        />
        <button type="submit" className=" btn btn-secondary">
          <FiSend />
        </button>
      </form>
      <div className="mt-10">
        {data?.data?.reviews?.map((comment: string, index: number) => (
          <div key={index} className="flex gap-3 items-center mb-5">
            <div className="avatar">
              <div className="w-14 rounded">
                <img src="https://avatars.githubusercontent.com/u/101200085?v=4" />
              </div>
            </div>
            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookReview;
