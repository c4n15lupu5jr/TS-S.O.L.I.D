import { CustomerProtocol } from './interfaces/customer-protocol';

export class IndividualCustomer implements CustomerProtocol {
  firstName: string;
}
export class EnterpriseCustomer implements CustomerProtocol {}
