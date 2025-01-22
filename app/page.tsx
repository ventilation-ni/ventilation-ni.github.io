'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  RiAlertLine,
  RiDropLine,
  RiHeartLine,
  RiHomeSmileLine,
  RiMailLine,
  RiPhoneLine,
} from '@remixicon/react';
import { useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import * as Button from './components/button';
import * as Chip from './components/chip';
import * as Contact from './components/contact';
import * as Feature from './components/feature';
import * as Footer from './components/footer';
import * as Form from './components/form';
import * as InlineTip from './components/inline-tip';
import * as Jumbotron from './components/jumbotron';
import * as Navbar from './components/navbar';
import * as Pricing from './components/pricing';
import * as Section from './components/section';
import * as Testimonial from './components/testimonial';

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email(),
    phone: yup.string().required(),
    town: yup.string().required(),
    type: yup.string().oneOf(['survey', 'filter', 'repair', 'enquiry', 'purchase']).required(),
    message: yup.string().required(),
  })
  .required();

export default function Index() {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    setValue,
    formState: { errors },
  } = useForm<FormState>({
    resolver: yupResolver(schema),
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasSubmitError, setHasSubmitError] = useState(false);
  const ref = useRef<HTMLFormElement>(null);

  const onSubmit: SubmitHandler<FormState> = async () => {
    if (ref.current === null) return;

    // if there any any errors, don't submit the form
    if (Object.keys(errors).length) return;

    const data = new FormData(ref.current);

    try {
      const response = await fetch('https://formspree.io/f/myybvpvq', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      reset();
      setIsSubmitted(true);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setHasSubmitError(true);
    }
  };

  const purchaseDrimaster = () => {
    setFocus('name');

    setValue(
      'message',
      'Hi, I would like to purchase a Drimaster unit. The unit I would like to purchase is ____.',
    );
    setValue('type', 'purchase');
  };

  const requestSurvey = () => {
    setFocus('name');

    setValue('message', 'Hi, I would like to request a free survey for my home. My address is:');
    setValue('type', 'survey');
  };

  return (
    <>
      <Navbar.Root id="home">
        <Navbar.Item href="#about">About</Navbar.Item>
        <Navbar.Item href="#products">Products</Navbar.Item>
        <Navbar.Item href="#contact">Contact</Navbar.Item>
        <Navbar.Item href="https://www.facebook.com/hunterhomeventilation" target="_blank">
          Facebook
        </Navbar.Item>
      </Navbar.Root>

      <Jumbotron.Root onRequestSurvey={requestSurvey} onGetDrimaster={purchaseDrimaster}>
        <Jumbotron.Title>Hunter Home Ventilation</Jumbotron.Title>
        <Jumbotron.Description>
          Low cost whole house ventilation that meets building regulations, saves energy and
          prevents condensation.
        </Jumbotron.Description>
      </Jumbotron.Root>

      <Section.Root id="about">
        <Section.Label color="lime">Learn more</Section.Label>
        <Section.Title>About Drimaster</Section.Title>
        <Section.Description>
          Improve your home&apos;s air quality with The Drimaster. This advanced system draws in
          fresh, filtered outdoor air via your roof space, preventing damp and condensation for a
          cleaner, healthier environment.
        </Section.Description>
      </Section.Root>

      <Feature.List>
        <Feature.Card
          icon={<RiDropLine />}
          title="Condensation & Mould"
          description="Is your home plagued by condensation, mold, dampness, musty odors, fogged windows, damaged decor, or poor air quality? The solution is here: the Drimaster Clean Air Ventilation Unit!"
        />
        <Feature.Card
          icon={<RiHomeSmileLine />}
          title="Building Regulations"
          description="BBA regulations require effective home ventilation. The Drimaster System meets all British Board of Agrément standards, eliminating the need for unsightly window trickle vents. Plus, we're CIS registered!"
        />
        <Feature.Card
          icon={<RiHeartLine />}
          title="Health Benefits"
          description="Airborne allergens from dust mites often trigger asthma. The Drimaster unit provides gentle background ventilation to reduce these allergens and can be directly enhanced for optimal relief in the asthmatic's bedroom."
        />
        <Feature.Card
          icon={<RiAlertLine />}
          title="Reduce Radon Levels"
          description="Radon is a naturally occurring gas from the radioactive decay of underground uranium and is the second leading cause of lung cancer, responsible for up to 60 deaths annually in Northern Ireland. A Drimaster unit can reduce radon levels by up to 90%!"
        />
      </Feature.List>

      <Testimonial.Root>
        <Testimonial.Card
          avatar="./avatar-1.png"
          name="Mandy Moore"
          location="Glengormley"
          quote="Drimaster is Brilliant! All condensation gone the next day, couldn't believe it! Wish I had done it years ago!"
        />
        <Testimonial.Card
          avatar="./avatar-2.png"
          name="David Black"
          location="Belfast"
          quote="My Drimaster has been fitted less than 24 hours and condensation has completely cleared up. Cannot recommend Hunter Home Ventilation enough."
        />
      </Testimonial.Root>

      <div className="bg-secondary-hover pb-20">
        <Section.Root id="products">
          <Section.Label color="purple">Pricing</Section.Label>
          <Section.Title>Available products</Section.Title>
          <Section.Description>
            A range of Drimaster products are available to meet your specific needs.
          </Section.Description>
        </Section.Root>

        <Pricing.Root>
          <Pricing.Card
            product="Dri-ECO Loft Control"
            description="Drimaster with speed controls in the loft."
            price={600}
          >
            <Pricing.Feature>BBA Certificated</Pricing.Feature>
            <Pricing.Feature>5 Year Warranty</Pricing.Feature>
            <Pricing.Feature>System Controls on Unit</Pricing.Feature>
            <Pricing.Feature>1p a day running cost</Pricing.Feature>
            <Pricing.Feature>Price includes installation</Pricing.Feature>
          </Pricing.Card>

          <Pricing.Card
            product="Dri-ECO Hall Control"
            description="Drimaster with speed controls in the hall."
            price={600}
            prominent
          >
            <Pricing.Feature>BBA Certificated</Pricing.Feature>
            <Pricing.Feature>Optional 7 Year Warranty*</Pricing.Feature>
            <Pricing.Feature>Controlled from hallway</Pricing.Feature>
            <Pricing.Feature>1p a day running cost</Pricing.Feature>
            <Pricing.Feature>Price includes installation</Pricing.Feature>
          </Pricing.Card>

          <Pricing.Card
            product="Dri-HEAT Hall Control"
            description="Drimaster with heating and speed controls in the hall."
            price={700}
          >
            <Pricing.Feature>BBA Certificated</Pricing.Feature>
            <Pricing.Feature>Optional 7 Year Warranty*</Pricing.Feature>
            <Pricing.Feature>Controlled from hallway</Pricing.Feature>
            <Pricing.Feature>Remote heat control sensors available</Pricing.Feature>
            <Pricing.Feature>1p a day running cost</Pricing.Feature>
            <Pricing.Feature>Price includes installation</Pricing.Feature>
          </Pricing.Card>
        </Pricing.Root>
      </div>

      <div
        id="contact"
        className="container mx-auto flex min-h-[332px] flex-col gap-x-20 gap-y-16 bg-white px-8 py-20 lg:flex-row"
      >
        <Contact.Root>
          <Contact.Label color="lime">Got Questions?</Contact.Label>
          <Contact.Title>Contact us</Contact.Title>
          <Contact.Description>
            We&apos;d love to hear from you! Request a free, no-obligation survey, and we&apos;ll
            help find the perfect solution for your home. For filter changes, repairs, or any
            general inquiries, just fill out the form.
            <br />
            <br />
            Our installation services cover Antrim, Down, and Armagh, with supply-only options
            available across Northern Ireland.
          </Contact.Description>

          <div className="flex flex-wrap gap-2 pt-4">
            <Chip.Root href="mailto:glenn.hunter@live.co.uk">
              <Chip.Icon icon={<RiMailLine />} />
              glenn.hunter@live.co.uk
            </Chip.Root>

            <Chip.Root href="tel:07828086900">
              <Chip.Icon icon={<RiPhoneLine />} />
              078 2808 6900
            </Chip.Root>
          </div>
        </Contact.Root>

        <Form.Root ref={ref} onSubmit={handleSubmit(onSubmit)}>
          <Form.Field>
            <Form.Label isRequired htmlFor="name">
              Name
            </Form.Label>
            <Form.Input
              id="name"
              type="text"
              placeholder="John Smith"
              {...register('name', { required: true })}
              data-error={errors.name ? 'true' : 'false'}
            />
            {errors.name && <Form.Error>{errors.name.message}</Form.Error>}
          </Form.Field>

          <Form.Field>
            <Form.Label htmlFor="email">Email address</Form.Label>
            <Form.Input
              id="email"
              type="email"
              placeholder="johnsmith@email.com"
              {...register('email')}
              data-error={errors.email ? 'true' : 'false'}
            />
            {errors.email && <Form.Error>{errors.email.message}</Form.Error>}
          </Form.Field>

          <Form.Field>
            <Form.Label isRequired htmlFor="phone">
              Phone number
            </Form.Label>
            <Form.Input
              id="phone"
              type="tel"
              placeholder="078 2808 6900"
              {...register('phone', { required: true })}
              data-error={errors.phone ? 'true' : 'false'}
            />
            {errors.phone && <Form.Error>{errors.phone.message}</Form.Error>}
          </Form.Field>

          <Form.Field>
            <Form.Label isRequired htmlFor="town">
              Town
            </Form.Label>
            <Form.Input
              id="town"
              type="text"
              placeholder="Belfast"
              {...register('town', { required: true })}
              data-error={errors.town ? 'true' : 'false'}
            />
            {errors.town && <Form.Error>{errors.town.message}</Form.Error>}
          </Form.Field>

          <Form.Field>
            <Form.Label isRequired htmlFor="type">
              Type
            </Form.Label>
            <Form.Select
              id="type"
              {...register('type', { required: true })}
              data-error={errors.type ? 'true' : 'false'}
            >
              <option value="survey">Survey request</option>
              <option value="filter">Filter change</option>
              <option value="repair">Repair</option>
              <option value="enquiry">Enquiry</option>
              <option value="purchase">Purchase</option>
            </Form.Select>
            {errors.type && <Form.Error>{errors.type.message}</Form.Error>}
          </Form.Field>

          <Form.Field>
            <Form.Label isRequired htmlFor="message">
              Message
            </Form.Label>
            <Form.Textarea
              id="message"
              placeholder="How can we help you?"
              {...register('message', { required: true })}
              data-error={errors.message ? 'true' : 'false'}
            />
            {errors.message && <Form.Error>{errors.message.message}</Form.Error>}
          </Form.Field>

          <div className="flex justify-end">
            <Button.Root type="submit" variant="primary">
              Submit
            </Button.Root>
          </div>

          {isSubmitted && (
            <InlineTip.Root
              variant="success"
              title="Form submitted"
              description="Thank you for getting in touch! We will be in touch shortly."
            />
          )}

          {hasSubmitError && (
            <InlineTip.Root
              variant="error"
              title="Failed to submit form"
              description="An error occurred while submitting the form. Please try again."
            />
          )}
        </Form.Root>
      </div>

      <Footer.Root />
    </>
  );
}

interface FormState {
  name: string;
  email?: string;
  phone: string;
  town: string;
  type: 'survey' | 'filter' | 'repair' | 'enquiry' | 'purchase';
  message: string;
}
