import * as Accordion from "@radix-ui/react-accordion";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function AccordionItem({ value, title, children }) {
  return (
    <Accordion.Item value={value} className="rounded-xl border border-[#ced4da] p-4">
      <Accordion.Header>
        <Accordion.Trigger className="group flex w-full items-center justify-between">
          <span className="font-medium">{title}</span>
          <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
        </Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content asChild>
            <motion.div
                key={value}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden"
            >
                <div className="mt-2 text-neutral-400">{children}</div>
            </motion.div>
        </Accordion.Content>
    </Accordion.Item>
  );
}
