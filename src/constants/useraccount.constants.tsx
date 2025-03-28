import { IINputInfo } from "../components/InputInfo/InputInfo";

interface INavigation {
  path: string;
  text: string;
}

export const navigation: INavigation[] = [
  {
    path: 'account',
    text: 'Account Dashboard',
  },
  {
    path: 'information',
    text: 'Account Information'
  },
  {
    path: 'address',
    text: 'Address Book'
  },
  {
    path: 'wish_list',
    text: 'My Wish List'
  },
]

interface IBlocks {
  headerBlock: string;
  headersInfoBlock: string[];
  namesEdit: string[];
  secondLinks: string | undefined;
  paths: string[];
  headerLink?: {
    path: string;
    name: string;
  };
}

export const blocks: IBlocks[] = [
  {
    headerBlock: 'Account Information',
    headersInfoBlock: ['Contact Information', 'Newsletters'],
    namesEdit: ['Edit', 'Edit'],
    paths: ['information', 'newsletter_subscriptions'],
    secondLinks: "Change Password"
  },
  {
    headerBlock: 'Address Book',
    headersInfoBlock: ['Default Billing Address'],
    namesEdit: ['Edit Address'],
    paths: ['address'],
    headerLink: {
      path: 'address',
      name: 'Manage Addresses'
    },
    secondLinks: undefined
  }
]

export const fieldsInfo: IINputInfo[] = [
  {
    label: <label>Email</label>,
    name: 'email',
    placeholder: 'Your Email',
    type: 'email',
    regtype: 'changeAcc',
  },
  {
    label: <label>Firstname</label>,
    name: 'firstname',
    placeholder: 'Your Firstname',
    type: 'text',
    regtype: 'changeAcc',
  },
  {
    label: <label>Surname</label>,
    name: 'surname',
    placeholder: 'Your Surname',
    type: 'text',
    regtype: 'changeAcc',
  },
  {
    label: <label>Username</label>,
    name: 'username',
    placeholder: 'Your Username',
    type: 'text',
    regtype: 'changeAcc',
  },
  {
    label: <label>Old Password</label>,
    name: 'password',
    placeholder: 'Your Password',
    type: 'password',
    regtype: 'changePass',
  },
  {
    label: <label>Confirm Password</label>,
    name: 'confirmpassword',
    placeholder: 'Confirm Password',
    type: 'password',
    regtype: 'changePass',
  },
  {
    label: <label>New Password</label>,
    name: 'newpassword',
    placeholder: 'Your New Password',
    type: 'password',
    regtype: 'changePass',
  }
]
{/* <InputInfo label={<label>Firstname</label>} name='firstname' placeholder='Your Firstname' type='text' regtype='changeAcc' value={'sadf'} /> */}