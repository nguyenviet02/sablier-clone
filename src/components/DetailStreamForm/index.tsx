import React, { useMemo } from "react";
import Divider from "../Divider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { z } from "zod";
import DialogDatePicker from "../DialogDatePicker";
import { TDataStream } from "@/types";

type Props = {
  dataDetail: TDataStream;
  dataStreams: TDataStream[];
  setDataStreams: React.Dispatch<React.SetStateAction<TDataStream[]>>;
};

const DetailStreamForm = ({
  dataDetail,
  dataStreams,
  setDataStreams,
}: Props) => {
  const currentIndex = useMemo(() => {
    return dataStreams.findIndex((data) => data.id === dataDetail.id) + 1;
  }, [dataStreams, dataDetail.id]);
  const [isOpenDialogDatePicker, setIsOpenDialogDatePicker] =
    React.useState(false);

  const formSchema = z.object({
    amount: z.number().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    recipient: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    duration: z.string(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const removeStream = () => {
    setDataStreams((prev) => prev.filter((data) => data.id !== dataDetail.id));
  };

  //* Need optimization
  const handleChangeValue = (field: string, value: string | number) => {
    setDataStreams((prev) =>
      prev.map((data) =>
        data.id === dataDetail.id ? { ...data, [field]: value } : data,
      ),
    );
  };

  return (
    <div className="w-full rounded-xl bg-core-background p-6">
      <header className="flex h-fit min-h-8 w-full items-center justify-between pb-6">
        <h3 className="text-[18px] font-semibold text-[#e1e4ea]">
          Stream #{currentIndex}
        </h3>
        <div className="flex h-full items-center gap-3">
          <button
            disabled
            className="flex items-center justify-center gap-1 text-[14px] font-bold text-core-gray disabled:text-[#424966]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
              ></path>
            </svg>
            Chart
          </button>
          <div className="h-[30px] w-[2px] bg-core-border"></div>
          {dataStreams?.length > 1 && (
            <>
              {" "}
              <button
                onClick={removeStream}
                className="flex items-center justify-center gap-1 text-[14px] font-bold text-core-gray disabled:text-[#424966]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  ></path>
                </svg>
                Remove
              </button>
              <div className="h-[30px] w-[2px] bg-core-border"></div>
            </>
          )}
          <button className="flex items-center justify-center gap-1 text-[14px] font-bold text-core-gray disabled:text-[#424966]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
              ></path>
            </svg>
            Duplicate
          </button>
        </div>
      </header>
      <Divider />
      <Form {...form}>
        <form className="flex-1 space-y-8 pt-6">
          <FormField
            control={form.control}
            name="amount"
            render={() => (
              <FormItem>
                <FormLabel className="text-[16px] font-semibold text-core-gray">
                  Amount
                </FormLabel>
                <FormControl>
                  <Input
                    onChange={(e) =>
                      handleChangeValue("amount", e.target.value)
                    }
                    value={dataDetail?.amount || undefined}
                    type="number"
                    placeholder="Fill in an amount..."
                    className="h-[56px] rounded-md border-2 border-transparent bg-core-background-secondary px-3 text-base font-semibold text-white outline-none placeholder:text-[#474E6D] focus:border-core-border focus-visible:ring-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="recipient"
            render={() => (
              <FormItem>
                <FormLabel className="text-[16px] font-semibold text-core-gray">
                  Recipient
                </FormLabel>
                <FormControl>
                  <Input
                    onChange={(e) =>
                      handleChangeValue("recipient", e.target.value)
                    }
                    value={dataDetail?.recipient}
                    placeholder="Fill in an address or ENS..."
                    className="h-[56px] rounded-md border-2 border-transparent bg-core-background-secondary px-3 text-base font-semibold text-white outline-none placeholder:text-[#474E6D] focus:border-core-border focus-visible:ring-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[16px] font-semibold text-core-gray">
                  Duration
                </FormLabel>
                <FormControl>
                  <div className="flex items-center rounded-md bg-core-background-secondary">
                    <Input
                      placeholder="Choose the duration of the stream..."
                      {...field}
                      className="h-[56px] border-2 border-transparent px-3 text-base font-semibold text-white outline-none placeholder:text-[#474E6D] focus:border-core-border focus-visible:ring-0"
                      onFocus={() => setIsOpenDialogDatePicker(true)}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      <DialogDatePicker
        isOpen={isOpenDialogDatePicker}
        setIsOpen={setIsOpenDialogDatePicker}
      />
    </div>
  );
};

export default DetailStreamForm;
