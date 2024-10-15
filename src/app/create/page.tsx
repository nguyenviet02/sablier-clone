'use client';

import CreateStreamsForm from '@/components/CreateStreamsForm';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import ArrowLeft from 'icons/ArrowLeft';
import ArrowRight from 'icons/ArrowRight';
import React from 'react';

type Props = {};

const CreateStreams = (props: Props) => {

  return (
    <div className="size-full">
      <header className="w-full py-8 flex flex-col gap-4">
        <Breadcrumb>
          <BreadcrumbList className="text-core-gray font-bold text-[14px] leading-[17pt]">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Streams</BreadcrumbLink>
            </BreadcrumbItem>
            <ArrowRight className="size-4" />
            <BreadcrumbItem>
              <BreadcrumbLink href="/gallery">Gallery</BreadcrumbLink>
            </BreadcrumbItem>
            <ArrowRight className="size-4" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-[10.5pt] leading-[17pt] font-bold text-white">Create Streams</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex items-center gap-3">
          <button className="button-primary rounded-full bg-[#2A2E41] size-[42px] p-0 text-core-gray">
            <ArrowLeft className="size-5" />
          </button>
          <p className="text-[32px] text-white font-catamaran font-semibold">Create Streams</p>
        </div>
      </header>
			<CreateStreamsForm />
    </div>
  );
};

export default CreateStreams;
