package co.com.farm.models;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

/**
 * The Class User.
 */
@Entity
@Table(name = "USERS")
public class User implements Serializable {

    /** The Constant serialVersionUID. */
    private static final long serialVersionUID = -801753325982259420L;

    /** The id. */
    @Id
    @Column(name = "id")
    private String id;

    /** The doc type. */
    @Column(name = "doc_type")
    private String docType;

    /** The name. */
    @Column(name = "name")
    private String name;

    /** The last name. */
    @Column(name = "last_name")
    private String lastName;

    /** The adress. */
    @Column(name = "adress")
    private String adress;

    /** The tel. */
    @Column(name = "tel")
    private String tel;

    /** The type. */
    @Column(name = "type")
    private String type;

    /** The pigs. */
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Pig> pigs;

    /**
     * Instantiates a new user.
     */
    public User() {
    }

    /**
     * Gets the id.
     *
     * @return the id
     */
    public String getId() {
        return id;
    }

    /**
     * Sets the id.
     *
     * @param id the new id
     */
    public void setId(String id) {
        this.id = id;
    }

    /**
     * Gets the doc type.
     *
     * @return the doc type
     */
    public String getDocType() {
        return docType;
    }

    /**
     * Sets the doc type.
     *
     * @param docType the new doc type
     */
    public void setDocType(String docType) {
        this.docType = docType;
    }

    /**
     * Gets the name.
     *
     * @return the name
     */
    public String getName() {
        return name;
    }

    /**
     * Sets the name.
     *
     * @param name the new name
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Gets the last name.
     *
     * @return the last name
     */
    public String getLastName() {
        return lastName;
    }

    /**
     * Sets the last name.
     *
     * @param lastName the new last name
     */
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    /**
     * Gets the adress.
     *
     * @return the adress
     */
    public String getAdress() {
        return adress;
    }

    /**
     * Sets the adress.
     *
     * @param adress the new adress
     */
    public void setAdress(String adress) {
        this.adress = adress;
    }

    /**
     * Gets the tel.
     *
     * @return the tel
     */
    public String getTel() {
        return tel;
    }

    /**
     * Sets the tel.
     *
     * @param tel the new tel
     */
    public void setTel(String tel) {
        this.tel = tel;
    }

    /**
     * Gets the type.
     *
     * @return the type
     */
    public String getType() {
        return type;
    }

    /**
     * Sets the type.
     *
     * @param type the new type
     */
    public void setType(String type) {
        this.type = type;
    }

    /**
     * Gets the pigs.
     *
     * @return the pigs
     */
    public List<Pig> getPigs() {
        return pigs;
    }

    /**
     * Sets the pigs.
     *
     * @param pigs the new pigs
     */
    public void setPigs(List<Pig> pigs) {
        this.pigs = pigs;
    }

}
