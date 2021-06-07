<template>
  <b-container class="container blogs-container">
    <b-list-group class="blog-list">
      <b-list-group-item
        class="blog-item d-flex"
        v-for="item in blogs" :key="item.id"
      >
        <b-col>
          <img :src="item.thumbnail" alt="">
        </b-col>
        <b-col class="info-container">
          <h4>{{item.title}}</h4>
          <h5>{{item.categoryId}}</h5>
          <p>{{item.content}}</p>
        </b-col>
      </b-list-group-item>
    </b-list-group>
  </b-container>
</template>

<script>
export default {
  name: "Blogs",
  data() {
    return {
      blogs: [
        {
          id: "2",
          categoryId: "UI developer",
          createdAt: "2021-04-23T09:07:41.855Z",
          title: "cross-platform",
          thumbnail: "http://lorempixel.com/640/480/animals",
          description: "Legacy",
          content:
            "I'll compress the cross-platform CSS monitor, that should alarm the JSON program!",
        },
        {
          id: "3",
          categoryId: " UX developer ",
          createdAt: "2021-04-23T14:57:39.459Z",
          title: "Bedfordshire",
          thumbnail: "http://lorempixel.com/640/480/transport",
          description: "Investor",
          content:
            "If we transmit the bandwidth, we can get to the SCSI microchip through the back-end JBOD hard drive!",
        },
        {
          id: "4",
          categoryId: " UI developer ",
          createdAt: "2021-04-23T13:31:36.828Z",
          title: "programming application quantify",
          thumbnail: "http://lorempixel.com/640/480/city",
          description: "Dynamic",
          content:
            "Use the redundant TCP capacitor, then you can parse the redundant monitor!",
        },
        {
          id: "6",
          categoryId: "Vue developer",
          createdAt: "2021-04-23T21:46:59.584Z",
          title: "Ergonomic Cotton Bacon",
          thumbnail: "http://lorempixel.com/640/480/cats",
          description: "Senior",
          content:
            "You can't back up the driver without backing up the open-source EXE transmitter!",
        },
        {
          id: "7",
          categoryId: " UI developer ",
          createdAt: "2021-04-23T18:21:17.130Z",
          title: "Baby",
          thumbnail: "http://lorempixel.com/640/480/technics",
          description: "Lead",
          content:
            "Try to transmit the IB sensor, maybe it will input the cross-platform transmitter!",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
  .blogs-container{
    .blog-list {
      .blog-item {

        img {
          height: 200px;
          width: 200px;
        }

        .info-container {
          text-align: left;
          h4 {
            font-weight: 600;
            
          }

          h5 {
            font-size: 14px;
            font-weight: 400;
            color: gray;
          }

          p {
            font-weight: 400;
            font-size: 14px;
            color: gray;

          }
        }
      }
    }
  }
</style>