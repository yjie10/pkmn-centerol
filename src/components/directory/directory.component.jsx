import React, { Component } from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      categories: [{
        title: 'plush',
        imageUrl: 'https://lh3.googleusercontent.com/jTPQWlAhfP1T0bK4hrf9f22FKyWgCA6giFLYeSlD6EiqprslnqxyeO3cI9BYpqoAfCTk3EGy_FbCHOmMizc3NXFs0P0pEacftLGXwHEDwR8obqjZCqJdGyR58kuCTfCMjXSJIrIpufHUpswwD1rjMb5FeKvV7QO_LGAwwIPga_HctKvwUiqGfHRkBe5o5Z-VWNTxpIfwAZxYSbh2avv1zPaDY0_b6CJosxZpepmp6_rr4N5L81ZvxgTKrMWkzqWI3zwlCXkJY3bteb8QMuDCC3i9eYga9DHS327aiUWWFe8usxUuYmzMwD9m8ayEX7vxrkYjv0hG74gasdaOgLmXwcgo37ogT7TOFhqnPKqyJQG8ai4d_b1AriRPfOwe9PvY-Q6_MhqD93-lAduh08bePBZVZIlUF-j_iQbWc1PPcFmmMS6Pm_pby6vc1WAyr9QyP_xtC97_FOfyD-3gC2sB7C8BzlGfLbyMBCF9zHX6b6CXVheM-YBvGdSmDyGdHpl2q8feeK4_tdWX_XPP_Xbpj_bVPzmAnirXNgEJKDhlXSCbEfXKPK5YRDue682az7Xb40bf7Q8kfwXAdQh1OQrf_Twj973cHzrO3algQQMbPE2TKato_s77E0h9wzphfrXLpL9R7t2xNJ5NMMCCuRjvMEXsbq1rZWQt4Yll-a1zbkcL8GP6s_ZuBw2wg-qHS7qDctNGmKrg50xS7ui60NWYnWTC=w1306-h956-no?authuser=0',
        id: 1
      },
      {
        title: 'figures & pins',
        imageUrl: 'https://www.pokemoncenter.com/site/binaries/content/gallery/bloomreach/responsive-banners/2021/11-november-2021/202111_banner_holidaypins_desktop.jpg',
        id: 2
      },
      {
        title: 'game',
        imageUrl: 'https://lh3.googleusercontent.com/U3pUTJPCdHMfU9JHq4UDoC6_bhZM_NMg7iPYvEz0IkIV3KZqUlapKNN6wfOJ2z0j98lYfFQA-Mph2PAjnrMXWOokW9qakRnHZ3U6oyc92ioaky_t6LbIQPZWZE07KJP7vOp4W8g5BDkZj4RxP7X2UeiopyOnK8wYTdglepmtOHasy7aJOy4rrK9k_KTBLhu9Wuu5RU3n-mGqq_pieiDijV-KErL0kh7hKS2A6rgOCh991ztJh5I-yDfawpnIhqjoLh2aiov0OONP_wgMu7tKFP5YH5uYLbaEKY1CUkhVE-o64XP2qbRjbPhDwSBmCTZEMYcQcqxQ9zQUhK0bBfEcfQamEYmMIHMcEYRixEFMCToXk341rFoxaeCMONtS0iBiLJ1OAxQB3qyMhsnRZV4UvvBuGCWl888jHUfcS7ALm9LugabsPOf4GqbVxBDB5YX_Wn84b-I4BqBdZ3W4OJoNyDYQOceTh6GcDbaZLPsalhsmQav9lj4CBtwySsIrxCQFy0Dk68q-fbx6jDCSyYN7HVTtfo83pKCdbpVdluJPMHe1xM0LRE3t5JK73dSlljuLL0Vgoipmn5cDInMlI5Ps6NdYnQ5WCLnS8DwGEVsGCap9RcQCm3XcfTqFq1s1J3ebJIAbjE1KoUiR7DFM7jjHdvr8gfYBKWeyHF-XCICo7A3QxzzoKQc5i7BarEbSQ2s3Sr6-tCJLnKwClP6FNJRl0jiH=w1698-h724-no?authuser=0',
        id: 3
      },
      {
        title: 'apparel',
        imageUrl: 'https://lh3.googleusercontent.com/GriSBd5LgQXX9j6mXbXQXbEK0NlFDGYXBGw5GIw2omoPGqChKs2JI9vpx1wr0YevDmrwJvo1TBv45-KQWjVjjFDpi1p3-e1m_FCIfr1NsjpQAwls8NhPAlEQ0H9uBIpWSQZ5ey2fZXxNorBuY_-Od7CLGzBCf1B8b0GVYIjW0V3W0wAw1NEetrf_vLQFPXE0iggaYpMPFlLqz5gQfe0Dv9WaWuj7acxo83yUjI5n7NiuBij0142RfxhOTFSxe23-07EYR3552vodJIfB4t1rwQDlTtOeKwoeG0nDolTjTg6aKcdfzGDyytRqCxqH7-Y3rHaxrMzuSIBQ6RfB37jKalWsS-99vb2E8vt58kkUEPPC8GXH1op8MnATTtgitlrOhDicbgtqbSF0grj9BEkegVBcO0zwStggvWR-p-v0tWLYSGs96xRdmbzPnxz6htsxOwWuS6d0cWGYT5FA7FHWfKDwk7La7rXYHRo9D3P4EJVAaiA0T_PZ80-mKz82qYVj8prmnweEOnuzpvBK4GD9D29VefKH149GOMcNM3gCKxKSqNmo7CXw2prLwlenW6gUjzQIxH4FUft6C3fRYW2dCwc5jYJPiAp070PoepSm6mOSeog8UF4PmIuxoKzDOsTaoJlNqd5YcQ7lJiW5prqGOLdegRBIR9ECc2lfetcFDLoqCaUQ3e2AGUqFrFcCEsN8sMvp_s2KdUOMIOsyL1lj0Ag2=w1168-h963-no?authuser=0',
        id: 4
      },
      {
        title: 'accessories',
        imageUrl: 'https://lh3.googleusercontent.com/sdx9Gwt8FGxyi3RCKy_8jU1zhKI5eLbfhsYZaG3GnVBRspgGOdBbd9CrhKP20BjfRwBW_AMQB3kIZ50K54-SO1PWsF1WQPn147s18i594NJ5w1IFcE56JNQhkp_KTbVTd4lEoiwF5J1vpTGtfA1dDRw8accrpTLRGD3yAvsMqNh_qNJzjOozAl-s1sKPBPw2KULtpE825s4oLorfUaLyx2t2OH9V9raepG6xP3ZLNlb9o7JCUEN1jOHyltqaHyP6O5P4ZpJ5aPfz3WASnsfhf6qCo0otEVVRG-8kDOLXRfkKdPLlsIVIbvD4TzGGtfqTP8vRUE1EwU-lSPbhtA-_d_VqkpU9s9oYtr_DKg44tHjomdDzZy_ek6oMRv036OTcIQnK2u82lK_ky2e8-kuFCNBw_7vUpAjJBL-2-ADvxEx8DlIxKZvbVDu-XQRIv0g3kZvw6-O1MQKCYmscRAS8VNTVDL1SEup3h3uYsUXCjP6hOBGxBhdcRqHFUC6J6BVwdK1bXSmz2Jrtx4-8k6BeKYwH4-fLkORhTAwwt8-UtA19Gv0a06buIcHB1Q06f_RjtC6aimFu5G5U3UVUoteyOR5_Ev-KiXX7I345Lw5jhVAoNbKIReqgqGgdrEYG2QiTiqfdYyt20AouqmIdwn-637Mx2HIAW9HxgG2bAL9CAF-VFnVA47hBiv-3LRrHn4wvj4Bgdg6POGSvlbdRgtXpSUYq=w980-h792-no?authuser=0',
        id: 5
      },
      {
        title: 'stationery',
        imageUrl: 'https://lh3.googleusercontent.com/uQyYlR8-mbK3gZEUpwI7MpH1B2WwxeL61mZXnwdmYwBLMg3RdBoxc-j1nr-q4ttwy-qLyvlVOxJwZGnSdY3P8iayiXOIU2cA8foF7sItpEDU9RpYNO70tteia0TQPBL-Ao-s62UtkNOFBoq4Ja4Nj-F4TnDF67HzVyDjIn0LplC0i2H-3gfBWjKFfb8PEiCLLFRhBExaPZc_tSU_JREUd5qZEu85Qz064izVOv6xQ1Ixn3fEIiTxzrMjSeTMkEIFR1rao5RIQLfhfbA_RFCT6aYyBflalZ7DVVdvHFK66nMFmIzCEASn_M9-wkG01HozomdOvvGHc3hOH2_xa9dUCWsAFMV4J6u5wAFT2PiLMoojNReUJCOD7wMqV26oNqO2uMhoM5LX-UGLBJE-OkN_zYjUafwwt3w3Djxi1Wo0QUETKi_XbpQ-hJHt6sBJTiR_aoDny-CZ_bm-9igcklLDODIT48Xok3XCdtewQeLcGAl0TXQ1kLO9hVcgWO3GmGjJcMU5XU6deOEmjR4s1rNvgCl2fj8SNTskCvg95YH5U2m8Qdhn0s6lK_HbxgB4F4F71XRuCXJYRCp50K2zoELeNqGT5HCyThn1ufrjCW7CUXolycvw4rR7aN0PNTF7k18J4pePyqET7-R2Xz_1Qv5v_qU6z3cJCLSzZLDsfFJ6z_AxACr7QcQ929u8vtACdpmWZKgrJlUpXPpIJQMwpcfFBl9j=w1282-h608-no?authuser=0',
        id: 6
      }
      ]
    }
  }

  render() {
    return (
      <div className='directory-menu'>
        {
          this.state.categories.map(({ id, title, imageUrl }) => <MenuItem key={id} title={title} imageUrl={imageUrl} />)
        }
      </div>
    )
  }
}

export default Directory;