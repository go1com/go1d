import React from 'react';
import { storiesOf } from '@storybook/react';
import { PageHeader, Text, ButtonFilled } from '../src';
import {
  IconEdit
} from "../src/components/Icons";

storiesOf("Original Go1d/PageHeader", module)
  .add('Lightmode page header with menu button', () => <PageHeader showMenuButton={false} title="Overview" />)
  .add('Lightmode page header without menu button', () => <PageHeader showMenuButton={true} title="Overview" />)
  .add('Page header with breadcrumb and subtitle', () => (
    <PageHeader
      showMenuButton={false}
      title="Portal"
      subtitle={
        <Text element="h4" fontSize={2} color="accent">
          portal.mygo1.com
        </Text>
      }
      breadcrumbHref="#testing"
      breadcrumbTitle="Portals"
    >
      <ButtonFilled icon={IconEdit}>
        Edit
      </ButtonFilled>
    </PageHeader>
  ))
