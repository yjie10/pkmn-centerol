import React, { Component } from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      categories: [{
        title: 'plush',
        imageUrl: 'https://lh3.googleusercontent.com/pw/AM-JKLXPt7nMnc-CxvuV8LSRmbQMs_l7UU9lm1WBWfFyDmvvYhGj1GJ5_ZoUOdKQiQbhHGhLfRMNwmdQ1LS8I2PaA_EiZeBUhF-EyDJacsbJLjN3YXhQUNvRIeutX-k6wsCy4eez57owTmbNe-Svm0JkILvs=w1306-h956-no?authuser=0',
        id: 1
      },
      {
        title: 'figures & pins',
        imageUrl: 'https://www.pokemoncenter.com/site/binaries/content/gallery/bloomreach/responsive-banners/2021/11-november-2021/202111_banner_holidaypins_desktop.jpg',
        id: 2
      },
      {
        title: 'game',
        imageUrl: 'https://lh3.googleusercontent.com/pw/AM-JKLXb4uB0PJhtidazz0c901ISx6-BPurKU5r4Xt47Pz5oGJFMcSgo_J1BjtKlKbv1nH7q7rVvCdTUdBhfCqFRWD7J-9P_Q5TWJYBAtltGh68Y73_riVhAtuV9aHnNVHcZVdzQBJOIqqCA6B3FEIQ53LX3=w1698-h724-no?authuser=0',
        id: 3
      },
      {
        title: 'apparel',
        imageUrl: 'https://lh3.googleusercontent.com/pw/AM-JKLWh2TVf_slWZKgiNgxkonm5QRVToCoHklHKg56_48C3VPVOvHe36jblxQgYIympY59ESTVu_COysFGmXLSl9kzdEgMH8HiLO8Rxa-MBj5VBAkRsXgqf9Eqco-ZapQzwZtc-1P5jqCWZq-SAhTbxuaVf=w1168-h963-no?authuser=0',
        id: 4
      },
      {
        title: 'accessories',
        imageUrl: 'https://lh3.googleusercontent.com/pw/AM-JKLVi6zqOzwPqiG1JipgQLQTvnHWLoB9k8CCbKIHm2iG4-9rAjI-S0O91-51iYOitjxe-Mwgo9Z1uzuAZPFf_P8gjgtNBVmuN0M5r5kKPhZiYszJY0z65-5_OkrxT1lnDWndEnRI9FiT_I9RmMgWtt0BZ=w980-h792-no?authuser=0',
        id: 5
      },
      {
        title: 'stationery',
        imageUrl: 'https://lh3.googleusercontent.com/pw/AM-JKLUyzbbPdauQ01sZMGfxbulBRBNn-yVR6WNo64WyQMuED5RA2mYiKaffQh_-QJ7NOdtKFat14iPotPpUzonUwLl4LHKfwPkJBRCEet4ryfTUFXdh9DuCbZeGHshDlP_LvItWT7FDBZmcZamSjsvr4b0x=w1282-h608-no?authuser=0',
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