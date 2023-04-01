module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AKIAVATKZMC7N5BYME4A'),
        secretAccessKey: env('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'),
        region: env('us-east-1'),
        params: {
            Bucket: env('my-project-name-images2'),
        },
      },
      // These parameters could solve issues with ACL public-read access — see [this issue](https://github.com/strapi/strapi/issues/5868) for details
      actionOptions: {
        upload: {
          ACL: null
        },
        uploadStream: {
          ACL: null
        },
      }
    },
  }
});
