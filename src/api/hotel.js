import { instance as axios } from "../config/axios";

// Make a request for a user with a given ID
export async function getHotelDetailService(id) {
  let result = null;
  try {
    console.log(result);
    result = await axios.get(`/hotel/${id}/`);
    // result = {
    //   id: "1",
    //   name: "Sao Mai Hotel",
    //   assets: [
    //     {
    //       url:
    //         "https://i.travelapi.com/hotels/1000000/490000/481700/481670/b2d06c44.jpg",
    //     },
    //     {
    //       url:
    //         "https://i.travelapi.com/hotels/1000000/490000/481700/481670/f5050383.jpg",
    //     },
    //     {
    //       url:
    //         "https://i.travelapi.com/hotels/1000000/490000/481700/481670/c57eeb6b.jpg",
    //     },
    //   ],
    //   address: "Số 141 Nguyễn Huệ, Quận 1, Hồ Chí Minh",
    //   description:
    //     "Sheraton Saigon Hotel & Towers tọa lạc tại trung tâm khu giải trí và kinh doanh sôi động của Thành phố Hồ Chí Minh, trên đường Đồng Khởi nổi tiếng. Nơi nghỉ sang trọng này có spa, hồ bơi ngoài trời và tổng cộng 8 lựa chọn ăn uống. Các phòng, suite và studio đầy phong các tại đây có nội thất rộng rãi với những tiện nghi hiện đại. Mỗi phòng đều được trang bị ổ cắm cho iPod, tiện nghi pha trà/cà phê và truyền hình cáp màn hình phẳng. Tất cả phòng đi kèm phòng tắm lát đá cẩm thạch lớn.",
    //   rating: {
    //     value: "4.3",
    //   },
    //   linking: [
    //     {
    //       type: "agoda",
    //       url:
    //         "https://www.agoda.com/grand-hotel-saigon/hotel/ho-chi-minh-city-vn.html",
    //     },
    //     {
    //       type: "mytour",
    //       url: "https://mytour.vn/49-khach-san-fortuna-ha-noi.html",
    //     },
    //   ],
    //   services: [
    //     {
    //       name: "wifi", // dich vu wifi
    //     },
    //     {
    //       name: "receptionist", // dich vu le tan
    //     },
    //     {
    //       name: "breakfast", // ho tro bua sang
    //     },
    //   ],
    //   price: "450.000",
    //   hotelRecommended: {
    //     items: [
    //       {
    //         id: 1,
    //         name: "Patel Hotel Hanoi",
    //         assets: [
    //           {
    //             url:
    //               "https://pix6.agoda.net/hotelImages/13360968/-1/a1d908f4f241e0c1594c21be926a279f.jpg?s=1024x768",
    //           },
    //           {
    //             url:
    //               "https://pix6.agoda.net/hotelImages/13360968/-1/a1d908f4f241e0c1594c21be926a279f.jpg?s=1024x768",
    //           },
    //           {
    //             url:
    //               "https://pix6.agoda.net/hotelImages/13360968/-1/a1d908f4f241e0c1594c21be926a279f.jpg?s=1024x768",
    //           },
    //         ],
    //         price: "860.000VND",
    //         rating: {
    //           value: "4.6",
    //         },
    //         services: [
    //           {
    //             name: "wifi", // dich vu wifi
    //           },
    //           {
    //             name: "receptionist", // dich vu le tan
    //           },
    //           {
    //             name: "breakfast", // ho tro bua sang
    //           },
    //         ],
    //       },
    //       {
    //         id: 2,
    //         name: "Patel Hotel Hanoi",
    //         assets: [
    //           {
    //             url:
    //               "https://pix6.agoda.net/hotelImages/13360968/-1/a1d908f4f241e0c1594c21be926a279f.jpg?s=1024x768",
    //           },
    //           {
    //             url:
    //               "https://pix6.agoda.net/hotelImages/13360968/-1/a1d908f4f241e0c1594c21be926a279f.jpg?s=1024x768",
    //           },
    //           {
    //             url:
    //               "https://pix6.agoda.net/hotelImages/13360968/-1/a1d908f4f241e0c1594c21be926a279f.jpg?s=1024x768",
    //           },
    //         ],
    //         price: "860.000VND",
    //         rating: {
    //           value: "4.6",
    //         },
    //         services: [
    //           {
    //             name: "wifi", // dich vu wifi
    //           },
    //           {
    //             name: "receptionist", // dich vu le tan
    //           },
    //           {
    //             name: "breakfast", // ho tro bua sang
    //           },
    //         ],
    //       },
    //       {
    //         id: 3,
    //         name: "Patel Hotel Hanoi",
    //         assets: [
    //           {
    //             url:
    //               "https://pix6.agoda.net/hotelImages/13360968/-1/a1d908f4f241e0c1594c21be926a279f.jpg?s=1024x768",
    //           },
    //           {
    //             url:
    //               "https://pix6.agoda.net/hotelImages/13360968/-1/a1d908f4f241e0c1594c21be926a279f.jpg?s=1024x768",
    //           },
    //           {
    //             url:
    //               "https://pix6.agoda.net/hotelImages/13360968/-1/a1d908f4f241e0c1594c21be926a279f.jpg?s=1024x768",
    //           },
    //         ],
    //         price: "860.000VND",
    //         rating: {
    //           value: "4.6",
    //         },
    //         services: [
    //           {
    //             name: "wifi", // dich vu wifi
    //           },
    //           {
    //             name: "receptionist", // dich vu le tan
    //           },
    //           {
    //             name: "breakfast", // ho tro bua sang
    //           },
    //         ],
    //       },
    //       {
    //         id: 4,
    //         name: "Patel Hotel Hanoi",
    //         assets: [
    //           {
    //             url:
    //               "https://pix6.agoda.net/hotelImages/13360968/-1/a1d908f4f241e0c1594c21be926a279f.jpg?s=1024x768",
    //           },
    //           {
    //             url:
    //               "https://pix6.agoda.net/hotelImages/13360968/-1/a1d908f4f241e0c1594c21be926a279f.jpg?s=1024x768",
    //           },
    //           {
    //             url:
    //               "https://pix6.agoda.net/hotelImages/13360968/-1/a1d908f4f241e0c1594c21be926a279f.jpg?s=1024x768",
    //           },
    //         ],
    //         price: "860.000VND",
    //         rating: {
    //           value: "4.6",
    //         },
    //         services: [
    //           {
    //             name: "wifi", // dich vu wifi
    //           },
    //           {
    //             name: "receptionist", // dich vu le tan
    //           },
    //           {
    //             name: "breakfast", // ho tro bua sang
    //           },
    //         ],
    //       },
    //       {
    //         id: 5,
    //         name: "Patel Hotel Hanoi",
    //         assets: [
    //           {
    //             url:
    //               "https://pix6.agoda.net/hotelImages/13360968/-1/a1d908f4f241e0c1594c21be926a279f.jpg?s=1024x768",
    //           },
    //           {
    //             url:
    //               "https://pix6.agoda.net/hotelImages/13360968/-1/a1d908f4f241e0c1594c21be926a279f.jpg?s=1024x768",
    //           },
    //           {
    //             url:
    //               "https://pix6.agoda.net/hotelImages/13360968/-1/a1d908f4f241e0c1594c21be926a279f.jpg?s=1024x768",
    //           },
    //         ],
    //         price: "860.000VND",
    //         rating: {
    //           value: "4.6",
    //         },
    //         services: [
    //           {
    //             name: "wifi", // dich vu wifi
    //           },
    //           {
    //             name: "receptionist", // dich vu le tan
    //           },
    //           {
    //             name: "breakfast", // ho tro bua sang
    //           },
    //         ],
    //       },
    //     ],
    //     totalItem: 5,
    //   },
    // };
  } catch (e) {
    console.log(e);
  }
  return result;
}

export async function getSearchHotelService(params) {
  let result = null;
  try {
    result = await axios.get(`/hotel`);
    // result = {
    //   items: [
    //     {
    //       id: 1,
    //       name: "Patel Hotel Hanoi",
    //       assets: [
    //         {
    //           url:
    //             "https://pix6.agoda.net/hotelImages/13360968/-1/a1d908f4f241e0c1594c21be926a279f.jpg?s=1024x768",
    //         },
    //         {
    //           url:
    //             "https://pix6.agoda.net/hotelImages/13360968/-1/a1d908f4f241e0c1594c21be926a279f.jpg?s=1024x768",
    //         },
    //         {
    //           url:
    //             "https://pix6.agoda.net/hotelImages/13360968/-1/a1d908f4f241e0c1594c21be926a279f.jpg?s=1024x768",
    //         },
    //       ],
    //       price: "860.000VND",
    //       rating: {
    //         value: "4.6",
    //       },
    //       services: [
    //         {
    //           name: "wifi", // dich vu wifi
    //         },
    //         {
    //           name: "receptionist", // dich vu le tan
    //         },
    //         {
    //           name: "breakfast", // ho tro bua sang
    //         },
    //       ],
    //     },
    //     {
    //       id: 2,
    //       name: "Patel Hotel Hanoi",
    //       assets: [
    //         {
    //           url:
    //             "https://pix6.agoda.net/hotelImages/13360968/-1/a1d908f4f241e0c1594c21be926a279f.jpg?s=1024x768",
    //         },
    //         {
    //           url:
    //             "https://pix6.agoda.net/hotelImages/13360968/-1/a1d908f4f241e0c1594c21be926a279f.jpg?s=1024x768",
    //         },
    //         {
    //           url:
    //             "https://pix6.agoda.net/hotelImages/13360968/-1/a1d908f4f241e0c1594c21be926a279f.jpg?s=1024x768",
    //         },
    //       ],
    //       price: "860.000VND",
    //       rating: {
    //         value: "4.6",
    //       },
    //       services: [
    //         {
    //           name: "wifi", // dich vu wifi
    //         },
    //         {
    //           name: "receptionist", // dich vu le tan
    //         },
    //         {
    //           name: "breakfast", // ho tro bua sang
    //         },
    //       ],
    //     },
    //     {
    //       id: 3,
    //       name: "Patel Hotel Hanoi",
    //       assets: [
    //         {
    //           url:
    //             "https://pix6.agoda.net/hotelImages/13360968/-1/a1d908f4f241e0c1594c21be926a279f.jpg?s=1024x768",
    //         },
    //         {
    //           url:
    //             "https://pix6.agoda.net/hotelImages/13360968/-1/a1d908f4f241e0c1594c21be926a279f.jpg?s=1024x768",
    //         },
    //         {
    //           url:
    //             "https://pix6.agoda.net/hotelImages/13360968/-1/a1d908f4f241e0c1594c21be926a279f.jpg?s=1024x768",
    //         },
    //       ],
    //       price: "860.000VND",
    //       rating: {
    //         value: "4.6",
    //       },
    //       services: [
    //         {
    //           name: "wifi", // dich vu wifi
    //         },
    //         {
    //           name: "receptionist", // dich vu le tan
    //         },
    //         {
    //           name: "breakfast", // ho tro bua sang
    //         },
    //       ],
    //     },
    //     {
    //       id: 4,
    //       name: "Patel Hotel Hanoi",
    //       assets: [
    //         {
    //           url:
    //             "https://pix6.agoda.net/hotelImages/13360968/-1/a1d908f4f241e0c1594c21be926a279f.jpg?s=1024x768",
    //         },
    //         {
    //           url:
    //             "https://pix6.agoda.net/hotelImages/13360968/-1/a1d908f4f241e0c1594c21be926a279f.jpg?s=1024x768",
    //         },
    //         {
    //           url:
    //             "https://pix6.agoda.net/hotelImages/13360968/-1/a1d908f4f241e0c1594c21be926a279f.jpg?s=1024x768",
    //         },
    //       ],
    //       price: "860.000VND",
    //       rating: {
    //         value: "4.6",
    //       },
    //       services: [
    //         {
    //           name: "wifi", // dich vu wifi
    //         },
    //         {
    //           name: "receptionist", // dich vu le tan
    //         },
    //         {
    //           name: "breakfast", // ho tro bua sang
    //         },
    //       ],
    //     },
    //     {
    //       id: 5,
    //       name: "Patel Hotel Hanoi",
    //       assets: [
    //         {
    //           url:
    //             "https://pix6.agoda.net/hotelImages/13360968/-1/a1d908f4f241e0c1594c21be926a279f.jpg?s=1024x768",
    //         },
    //         {
    //           url:
    //             "https://pix6.agoda.net/hotelImages/13360968/-1/a1d908f4f241e0c1594c21be926a279f.jpg?s=1024x768",
    //         },
    //         {
    //           url:
    //             "https://pix6.agoda.net/hotelImages/13360968/-1/a1d908f4f241e0c1594c21be926a279f.jpg?s=1024x768",
    //         },
    //       ],
    //       price: "860.000VND",
    //       rating: {
    //         value: "4.6",
    //       },
    //       services: [
    //         {
    //           name: "wifi", // dich vu wifi
    //         },
    //         {
    //           name: "receptionist", // dich vu le tan
    //         },
    //         {
    //           name: "breakfast", // ho tro bua sang
    //         },
    //       ],
    //     },
    //   ],
    //   totalItem: 5,
    // };
  } catch (e) {
    console.log(e);
  }
  return result;
}
