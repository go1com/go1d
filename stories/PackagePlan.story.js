import React from 'react';
import { PackagePlan } from '../src';

export default {
  title: 'Original Go1d/Package Plan',
  component: PackagePlan,
};

const Template = (args) => <PackagePlan {...args} />;

export const Main = Template.bind({});
Main.args = {
  id: 123 ,
  title: "Annual",
  interval: "year",
  price: "100",
  currency: "AUD",
  selected: true,
};

export const MultiplePackagePlans = () => (
  <>
    <PackagePlan
      id={1}
      title="Annual"
      interval="year"
      price="100"
      currency="AUD"
      selected={true}
    />
    <PackagePlan
      id={2}
      title="Monthly"
      interval="month"
      price="10"
      currency="AUD"
    />
    <PackagePlan
      id={3}
      title="Monthly"
      interval="month"
      price="10"
      currency="AUD"
      perPortalLicensing={true}
    />
  </>
);
MultiplePackagePlans.parameters = { controls: { hideNoControlsWarning: true } };

