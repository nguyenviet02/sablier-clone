import { useSearchParams } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import Divider from "../Divider";
import Linear from "shapes/Linear";
import LockIcon from "icons/Lock";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import InfoIcon from "icons/InfoIcon";
import ToggleSideButton from "../ToggleSideButton";

type Props = {};

const CreateStreamsForm = (props: Props) => {
  const searchParams = useSearchParams();
  const selectedShape = searchParams.get("shape");

  const [isCancelable, setIsCancelable] = React.useState(false);
  const [isTransferable, setIsTransferable] = React.useState(false);

  const formSchema = z.object({
    shape: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      shape: selectedShape || "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className="flex gap-8">
      <TooltipProvider>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex-1 space-y-8"
          >
            <div className="w-full rounded-xl bg-core-background p-6">
              <div className="flex w-full items-center justify-between pb-6">
                <h2 className="text-[18px] font-semibold text-[#e1e4ea]">
                  General Details
                </h2>
                <button className="flex items-center justify-center gap-[2px] text-[15px] font-bold text-core-gray">
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
                      d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                    ></path>
                  </svg>
                  Guide
                </button>
              </div>
              <Divider />
              <div className="grid w-full grid-cols-2 gap-6 pt-6">
                {/* Shape */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-[16px] font-semibold text-core-gray">
                    Shape
                  </h3>
                  <div className="flex h-[56px] items-center justify-between rounded-md border-2 border-[#1a1d28] bg-core-background px-3">
                    <div className="flex gap-2">
                      <Linear className="h-[28px] w-[80px]" />
                      <p className="text-base font-semibold text-core-gray">
                        Linear Stream
                      </p>
                    </div>
                    <LockIcon className="size-5 text-core-gray" />
                  </div>
                </div>

                {/* Token */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-[16px] font-semibold text-core-gray">
                    Token
                  </h3>
                  <button className="flex h-[56px] items-center justify-between rounded-md border-2 border-transparent bg-core-background-secondary px-3 hover:border-core-border">
                    <div className="flex items-center gap-3">
                      <div className="size-[26px] rounded-full bg-core-background"></div>
                      <p className="text-base font-semibold text-[#474E6D]">
                        Choose a token from the list...
                      </p>
                    </div>
                    <div className="flex h-8 w-fit min-w-8 items-center justify-center rounded-sm bg-core-background px-3 text-[14px] font-semibold text-core-gray hover:bg-[#2e3348]">
                      Choose
                    </div>
                  </button>
                </div>

                {/* Make the stream cancelable?
                 */}
                <div className="flex flex-col gap-3">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <h3 className="flex w-fit items-center gap-1 text-[16px] font-semibold text-core-gray">
                        Make the stream cancelable?
                        <InfoIcon className="size-4" />
                      </h3>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-[300px] rounded-[10px] bg-[#363b54] p-3">
                      <p className="text-[14px] font-medium leading-[18px] text-white">
                        Making the stream non-cancelable means you won't be able
                        to stop the stream later on; funds are guaranteed to
                        eventually stream to the recipient. Conversely, with
                        cancelable streams, you can recover all unstreamed
                        funds.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                  <div
                    onClick={() => setIsCancelable(!isCancelable)}
                    className="flex h-[56px] cursor-pointer items-center justify-between rounded-md border-2 border-transparent bg-core-background-secondary px-3 hover:border-core-border"
                  >
                    <div className="flex items-center gap-3">
                      <p className="text-base font-semibold text-white">
                        Cancelbility ({isCancelable ? "On" : "Off"})
                      </p>
                    </div>
                    <ToggleSideButton
                      isOn={isCancelable}
                      handleToggle={setIsCancelable}
                    />
                  </div>
                </div>

                {/* Make the stream transferable?
                 */}
                <div className="flex flex-col gap-3">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <h3 className="flex w-fit items-center gap-1 text-[16px] font-semibold text-core-gray">
                        Make the stream transferable?
                        <InfoIcon className="size-4" />
                      </h3>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-[300px] rounded-[10px] bg-[#363b54] p-3">
                      <p className="text-[14px] font-medium leading-[18px] text-white">
                        You can choose to make the stream non-transferable. This
                        means the recipient will not be able to transfer or sell
                        the stream later on.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                  <div
                    onClick={() => setIsTransferable(!isTransferable)}
                    className="flex h-[56px] cursor-pointer items-center justify-between rounded-md border-2 border-transparent bg-core-background-secondary px-3 hover:border-core-border"
                  >
                    <div className="flex items-center gap-3">
                      <p className="text-base font-semibold text-white">
                        Transferability ({isTransferable ? "On" : "Off"})
                      </p>
                    </div>
                    <ToggleSideButton
                      isOn={isTransferable}
                      handleToggle={setIsTransferable}
                    />
                  </div>
                </div>
              </div>
            </div>
            <FormField
              control={form.control}
              name="shape"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
        <div className="w-[400px]"></div>
      </TooltipProvider>
    </div>
  );
};

export default CreateStreamsForm;
