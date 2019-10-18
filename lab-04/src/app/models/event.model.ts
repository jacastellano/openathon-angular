
/**
 * Openathon event entity
 */
export interface Event {

    /**
     * Envent Id
     */
    id: string;

    /**
     * Event title
     */
    title: string;

    /**
     * Location of the event
     */
    location: string;

    /**
     * Date of the event
     */
    date: Date;

    /**
     * More info
     */
    description: string;

    /**
     * User who created it
     */
    addedBy: string;

}
