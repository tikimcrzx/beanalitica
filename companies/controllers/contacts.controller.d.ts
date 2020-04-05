import { ContactsService } from '../services/contacts.service';
import { Response } from 'express';
import { CreateContactDTO, UpdateContactDTO } from '../input-dto';
export declare class ContactsController {
    private readonly contactsService;
    constructor(contactsService: ContactsService);
    findAll(res: Response): Promise<void>;
    findById(id: string, res: Response): Promise<void>;
    create(createContactDTO: CreateContactDTO, res: Response): Promise<void>;
    update(id: string, updateContactDTO: UpdateContactDTO, res: Response): Promise<void>;
}
