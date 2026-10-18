import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';


const Cta = () => {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-primary px-6 py-16 text-primary-foreground sm:px-12 lg:px-16">
        <div className="flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to find your new home?
            </h2>

            <p className="mt-3 max-w-xl text-primary-foreground/80">
              Start exploring thousands of rental properties and find a
              place that feels right for you.
            </p>
          </div>
          <Link href="/properties">
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 px-7"
            >
              Explore Properties
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;