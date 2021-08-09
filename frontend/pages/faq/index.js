import React from 'react'
import PropTypes from 'prop-types'
import {
  FaqPage,
} from '@organisms'
import i18n from '@locales'
import { Layout } from '@templates'
import api from '@api/faq'
import { wrapper } from '@store/store'
import camelCase from 'camelcase-keys'

const Faq = ({ faqCategories }) => (
  <Layout>
    <FaqPage faqCategories={faqCategories} />
  </Layout>
)

export const getServerSideProps = wrapper.getServerSideProps(
  async () => {
    const responseFaq = await api.getAllCategories()

    return {
      props: {
        faqCategories: camelCase(responseFaq.data, { deep: true }),
      },
    }
  },
)

Faq.propTypes = {
  faqCategories: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Faq