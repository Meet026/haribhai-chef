// To reorder categories, simply move the objects in this array.
// Each category has: id (URL-safe key), name (display label), items[]
// Each item has: id, name, image, and optionally price/description/ingredients/reviews

const MENU_CATEGORIES = [
  {
    id: "welcome-drink",
    name: "વેલકમ ડ્રિંક",
    items: [
      {
        id: 1,
        name: "મોસંબી જ્યૂસ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778001290/orange_juice_vwwmgk.jpg",
      },
      {
        id: 2,
        name: "નારંગી જ્યૂસ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 3,
        name: "અનાર જ્યૂસ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778001707/anar_juice_y9p6po.jpg",
      },
      {
        id: 4,
        name: "પલ્પ પાઈનેપલ જ્યૂસ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778002056/pulpe_pineapple_juice_vkpl3x.jpg",
      },
      {
        id: 5,
        name: "પાઈનેપલ ફાલસા જ્યૂસ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778002511/pineaplle_falsa_juice_owamfy.jpg",
      },
      {
        id: 6,
        name: "પાઈનેપલ લિંમકા જ્યૂસ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778002608/pineaplle_limka_juice_mpuslg.jpg",
      },
      {
        id: 7,
        name: "વોટર મેલન જ્યૂસ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778075915/watermelon_juice_vb6hzy.jpg",
      },
      {
        id: 8,
        name: "જાંબુ જ્યૂસ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 9,
        name: "સ્ટ્રોબેરી જ્યૂસ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778002872/strawberry_juice_qhv3yv.jpg",
      },
      {
        id: 10,
        name: "એપ્પલ જ્યૂસ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778002748/apple_juice_xqdu6a.jpg",
      },
      {
        id: 11,
        name: "ઓરેન્જ પાઈનેપલ જ્યૂસ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 12,
        name: "પીના ક્લાડા જ્યૂસ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 13,
        name: "કાળીદ્રાક્ષ પાઈનેપલ જ્યૂસ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 14,
        name: "પાઈનેપલ જ્યૂસ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778001883/pineapple_juice_qdaklj.jpg",
      },
    ],
  },
  {
    id: "shot-juice",
    name: "શોટ જ્યૂસ",
    items: [
      {
        id: 1,
        name: "જાંબુ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 2,
        name: "સ્ટ્રોબેરી",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 3,
        name: "જામફળ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 4,
        name: "કોકો નેટ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 5,
        name: "લીલી વરિયાળી",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 6,
        name: "દાડમ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 7,
        name: "પાઈનેપલ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 8,
        name: "ઠંડાઈ કેસર",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 9,
        name: "લીચી જ્યુસ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 10,
        name: "પીક લેડી જ્યૂસ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
    ],
  },
  {
    id: "starter",
    name: "સ્ટાર્ટર",
    items: [
      {
        id: 1,
        name: "વેજ સ્ટીક",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 2,
        name: "પનીર ચિલી બોલ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 3,
        name: "પનીર સધાઈ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 4,
        name: "સિઝલર પ્લેટ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 5,
        name: "પનીર શાંતે",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 6,
        name: "પનીર ટિક્કા",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778077808/paneer_tikka_uu8fbb.jpg",
      },
      {
        id: 7,
        name: "વેજ ક્રિસ્પી",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778077998/veg_crispy_ncju5f.jpg",
      },
      {
        id: 8,
        name: "વેજ ચાઇનીઝ ભેળ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778077950/veg_chinese_bhel_tbblaa.jpg",
      },
      {
        id: 9,
        name: "વેજ ડ્રાઇવન રોલ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 10,
        name: "વેજ સ્પ્રિંગ રોલ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778078062/veg_spring_roll_sblbfl.jpg",
      },
      {
        id: 11,
        name: "વેજ લોલીપોપ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778078135/veg_lolipop_rnf042.jpg",
      },
      {
        id: 12,
        name: "વેજ બુલેટ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 13,
        name: "વેજ ફિંગર",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 14,
        name: "ઇડલી ટકાટક",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 15,
        name: "વેજ કોર્ન ભેળ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 16,
        name: "વેજ બ્રેડ રોલ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 17,
        name: "કોર્ન વેજિટેબલ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 18,
        name: "પાનીની",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778078424/panini_bttno2.jpg",
      },
      {
        id: 19,
        name: "ગ્રીન કબાબ ટિક્કી",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778078354/green_kabab_tikki_bzeoxv.jpg",
      },
      {
        id: 20,
        name: "કોર્ન કબાબ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 21,
        name: "કોર્ન નટસ બોલ્સ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 22,
        name: "ચીસ પનીર બોલ્સ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778078961/cheese_paneer_ball_azc3vh.jpg",
      },
      {
        id: 23,
        name: "પફ પિઝા",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778078592/puff_pizza_ys1u9t.jpg",
      },
      {
        id: 24,
        name: "બાસ્કેટ ચાટ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778078809/basket_chat_oy8r7g.jpg",
      },
    ],
  },
  {
    id: "soup",
    name: "સૂપ",
    items: [
      {
        id: 1,
        name: "ટામેટા સૂપ (બ્રેડ પીસ)",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778079548/Tomato_soup_ovvyln.jpg",
      },
      {
        id: 2,
        name: "ચીસ કોર્ન સૂપ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 3,
        name: "મેક્સિકન ટામેટા સૂપ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 4,
        name: "હોટ & સાવર સૂપ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778079598/hot_sour_dfja6w.jpg",
      },
      {
        id: 5,
        name: "મંચાઉ સૂપ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778080390/manchau_soup_jym9ey.jpg",
      },
      {
        id: 6,
        name: "વેજ ખાવસા સૂપ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 7,
        name: "હોટ ગાર્લિક જિંજર સૂપ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 8,
        name: "બેબી કોર્ન સૂપ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 9,
        name: "પોટેટો મિની સ્ટ્રોંગ સૂપ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 10,
        name: "ચીઝ ટામેટા સૂપ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778080711/cheese_tomato_je931z.jpg",
      },
      {
        id: 11,
        name: "ચિલી બિન",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 12,
        name: "ફ્લાવર સૂપ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
    ],
  },
  {
    id: "vip-soup",
    name: "Vip સૂપ",
    items: [
      {
        id: 1,
        name: "કોકોનેટ કોરિએન્ડર સૂપ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 2,
        name: "આલ્મન્ડ બ્રોકલી સૂપ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778081114/almond_brokly_qcg19c.jpg",
      },
      {
        id: 3,
        name: "સ્વીટ કોર્ન સેલેરી સૂપ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 4,
        name: "વેજીટેબલ હર્વ સૂપ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 5,
        name: "ઇટાલિયન સૂપ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 6,
        name: "નુડલ્સ વેજિટેબલ સૂપ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 7,
        name: "ટામેટા હીલ સૂપ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 8,
        name: "કકુંબર સૂપ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 9,
        name: "પંપકિન આલ્મન્ડ સૂપ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 10,
        name: "સ્પ્રિંગ ઓનિયન સૂપ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
    ],
  },
  {
    id: "tawa-chaat",
    name: "તવા ચાટ (ચટપટા)",
    items: [
      {
        id: 1,
        name: "બાર્બીક્યુ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778081658/barbeque_cqdeiv.jpg",
      },
      {
        id: 2,
        name: "મેક્સિકન બાર્બીક્યુ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778081658/barbeque_cqdeiv.jpg",
      },
      {
        id: 3,
        name: "પાપડી ચાટ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778088647/papdi_chat_fn4sns.jpg",
      },
      {
        id: 4,
        name: "છોલે સમોસા",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778088723/chole_samosa_et5p1k.jpg",
      },
      {
        id: 5,
        name: "હૈદરાબાદી ચિલર",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 6,
        name: "ઉત્તપ્પા",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778088524/utappa_oet6nq.jpg",
      },
      {
        id: 7,
        name: "બંગાલી દહીવડા",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778084849/dahi_vada_e7kldi.jpg",
      },
      {
        id: 8,
        name: "દહી ગુજિયર",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 9,
        name: "પનીર ટિક્કા",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 10,
        name: "પનીર ટકાટક",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 11,
        name: "ભાજી પાવ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778084965/pav_bhaji_ok6ik8.jpg",
      },
      {
        id: 12,
        name: "બિકાનેરી ચાટ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 13,
        name: "કોર્ન કેપ્સીકમ ટિક્કા",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 14,
        name: "સ્ટેપ દહીંવડા",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 15,
        name: "આગ્રે કા ભલ્લા",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 16,
        name: "ઇન્દોરી ચાટ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
    ],
  },
  {
    id: "gujarati-farsan",
    name: "ગુજરાતી ફરસાણ",
    items: [
      {
        id: 1,
        name: "ટમટમ ખમણ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 2,
        name: "મિક્ષ ભજીયા",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778090955/mix_bhajiya_xfxrb4.jpg",
      },
      {
        id: 3,
        name: "મેંદુ વડા",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778091068/mendu_vada_qpbq1v.jpg",
      },
      {
        id: 4,
        name: "ઇડલી",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778091120/idali_bhfee9.jpg",
      },
      {
        id: 5,
        name: "ટિક્કી વડા",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778091178/tikdi_vada_sa7r9u.jpg",
      },
      {
        id: 6,
        name: "લાઇવ ઢોકળા",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778090894/live_dhokla_hxiish.avif",
      },
      {
        id: 7,
        name: "ખમણી",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 8,
        name: "વાઇબ્રન્ટ ગુજરાત",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 9,
        name: "નાયલોન ખમણ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778090747/naylon_khaman_m7utmn.jpg",
      },
      {
        id: 10,
        name: "પાત્રા",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778091386/patra_jpa1kk.avif",
      },
      {
        id: 11,
        name: "ઈદડા",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778091491/idada_ynxt42.jpg",
      },
      {
        id: 12,
        name: "પાટુડી",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 13,
        name: "હાંડવો",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778091582/handvo_rlkjvm.webp",
      },
      {
        id: 14,
        name: "મિસળ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778091701/misal_pav_mv4x75.jpg",
      },
      {
        id: 15,
        name: "સેવ ઉસળ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 16,
        name: "ભેળ રગડા",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 17,
        name: "પાણી પૂરી",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778091761/pani_puri_jye2pr.jpg",
      },
      {
        id: 18,
        name: "કટલેસ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778091840/cutles_mxampe.jpg",
      },
      {
        id: 19,
        name: "સેવરોલ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 20,
        name: "ચાઇનીઝ સમોસા",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 21,
        name: "ખસ્તા કચોરી",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 22,
        name: "લીલવા સમોસા",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 23,
        name: "નવતાલ સમોસા",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 24,
        name: "અમદાવાદી ગોટાળો",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 25,
        name: "દાબેલી",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778091926/dabeli_tzmfph.jpg",
      },
      {
        id: 26,
        name: "બટાકા પૌવા",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778092021/bataka_pauva_wphquv.jpg",
      },
      {
        id: 27,
        name: "વડાપાઉં",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778091934/vadapav_h2wwzx.jpg",
      },
      {
        id: 28,
        name: "બ્રેડ પકોડા",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 29,
        name: "બ્રેડ બટર",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 30,
        name: "સેન્ડવીચ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 31,
        name: "ફાફડા",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778092478/fafda_ljvsik.webp",
      },
      {
        id: 32,
        name: "ગાંઠિયા",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778092532/gathiya_qqkzsn.jpg",
      },
    ],
  },
  {
    id: "papad",
    name: "પાપડ",
    items: [
      {
        id: 1,
        name: "સાદા પાપડ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 2,
        name: "ડિસ્કો પાપડ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 3,
        name: "રોસ્ટેડ પાપડ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778177021/rosted_papad_nin62l.jpg",
      },
      {
        id: 4,
        name: "લિજ્જત પાપડ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778163581/lijjat_papad_mcshq3.jpg",
      },
      {
        id: 5,
        name: "સિંગ પાપડ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 6,
        name: "ખીચીયા પાપડ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778177155/khichiya_papad_yt1cmp.jpg",
      },
      {
        id: 7,
        name: "રમકડાં",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 8,
        name: "સાબુદાણા પાપડ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778163697/sabudana_papad_wnoh25.webp",
      },
    ],
  },
  {
    id: "salad",
    name: "સલાડ",
    items: [
      {
        id: 1,
        name: "રશિયન સલાડ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 2,
        name: "ઓરેન્જ ડ્રેસીગ મલાજી",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 3,
        name: "પાઈના એપ્રીકોટ સલાડ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 4,
        name: "ગ્રીન સલાડ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778178310/green_salad_mguc7g.jpg",
      },
      {
        id: 5,
        name: "થાઈ સલાડ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 6,
        name: "મેક્રોની સલાડ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 7,
        name: "મેક્સિકન સલાડ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 8,
        name: "કોર્ન કેપ્સિકમ સલાડ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 9,
        name: "કઠોળ સલાડ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778178451/kathod_salad_erx6gd.webp",
      },
      {
        id: 10,
        name: "ટામેટા ડુંગળી સલાડ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778178054/tomato_onion_phzpln.jpg",
      },
      {
        id: 11,
        name: "મસાલા ડુંગળી સલાડ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778178108/masala_onion_zrkngn.jpg",
      },
      {
        id: 12,
        name: "ફ્રૂટ નુ સલાડ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778178235/fruit_salad_qhcdwq.jpg",
      },
    ],
  },
  {
    id: "punjabi-sabji",
    name: "પંજાબી સબ્જી",
    items: [
      {
        id: 1,
        name: "મેથી મલાઈ મટર પનીર",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 2,
        name: "પનીર બટર મસાલા",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778302904/paneer_butter_masala_vkpouh.jpg",
      },
      {
        id: 3,
        name: "બાલટી મસાલા પનીર ખોચા",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 4,
        name: "બેબી કોર્ન મટર પનીર",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 5,
        name: "પાલક પનીર",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778302952/palak_paneer_fx6r6l.webp",
      },
      {
        id: 6,
        name: "મિક્ષ વેજ શાક",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 7,
        name: "મશરૂમ પનીર બેબી કોર્ન",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 8,
        name: "કાજુ મટર ખોચા",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 9,
        name: "ચિલી પનીર",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 10,
        name: "શાહી પનીર",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778302848/sahi_paneer_x4mmrv.jpg",
      },
      {
        id: 11,
        name: "પંજાબી છોલે",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778302581/punjabi_chole_kdoiri.jpg",
      },
      {
        id: 12,
        name: "દમાલુ આલુ",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 13,
        name: "સ્ટફ પોટેટો",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 14,
        name: "મલાઈ કોફતા",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 15,
        name: "વેજિટેબલ પેટિસ કરી",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 16,
        name: "પાલક બટાટા કોર્ન",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 17,
        name: "કોર્ન પનીર ભરતા",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 18,
        name: "કોર્ન ટામેટાં ભરતા",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 19,
        name: "વેજ મખ્ખન વાલા",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 20,
        name: "કઢાઈ પનીર",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 21,
        name: "પનીર ખુરચન",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 22,
        name: "તિરંગા",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778305703/default_food_ssqcpe.png",
      },
      {
        id: 23,
        name: "પંજાબી છોલે પનીર",
        image:
          "https://res.cloudinary.com/dz3b7notk/image/upload/v1778302733/punjabi_chole_paneer_mmc9bs.jpg",
      },
    ],
  },
];

export default MENU_CATEGORIES;
