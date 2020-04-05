import { Model } from 'mongoose';
import { Contact } from '../models';
import { CreateContactDTO, UpdateContactDTO } from '../input-dto';
export declare class ContactsService {
    private readonly contactModel;
    constructor(contactModel: Model<Contact>);
    create(createContactDTO: CreateContactDTO): Promise<Contact>;
    update(id: string, updateContactDTO: UpdateContactDTO): Promise<Contact>;
    findAll(): Promise<Contact[]>;
    findById(id: string): Promise<Contact>;
    delete(id: string): Promise<Contact>;
}
